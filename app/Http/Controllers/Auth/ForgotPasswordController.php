<?php

/**
 * ForgotPasswordController.php
 * Copyright (c) 2019 james@firefly-iii.org
 *
 * This file is part of Firefly III (https://github.com/firefly-iii).
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
declare(strict_types=1);

namespace FireflyIII\Http\Controllers\Auth;

use FireflyIII\Exceptions\FireflyException;
use FireflyIII\Http\Controllers\Controller;
use FireflyIII\Repositories\User\UserRepositoryInterface;
use FireflyIII\User;
use Illuminate\Contracts\View\Factory;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;
use Psr\Container\ContainerExceptionInterface;
use Psr\Container\NotFoundExceptionInterface;

/**
 * Class ForgotPasswordController
 *

 */
class ForgotPasswordController extends Controller
{
    use SendsPasswordResetEmails;

    /**
     * Create a new controller instance.
     */
    public function __construct()
    {
        parent::__construct();
        $this->middleware('guest');

        if ('web' !== config('firefly.authentication_guard')) {
            throw new FireflyException('Using external identity provider. Cannot continue.');
        }
    }

    /**
     * Send a reset link to the given user.
     *
     * @param Request                 $request
     * @param UserRepositoryInterface $repository
     *
     * @return Factory|RedirectResponse|View
     */
    public function sendResetLinkEmail(Request $request, UserRepositoryInterface $repository)
    {
        app('log')->info('Start of sendResetLinkEmail()');
        if ('web' !== config('firefly.authentication_guard')) {
            $message = sprintf('Cannot reset password when authenticating over "%s".', config('firefly.authentication_guard'));
            app('log')->error($message);

            return view('error', compact('message'));
        }


        $this->validateEmail($request);

        // verify if the user is not a demo user. If so, we give him back an error.
        /** @var User|null $user */
        $user = User::where('email', $request->get('email'))->first();

        if (null !== $user && $repository->hasRole($user, 'demo')) {
            return back()->withErrors(['email' => (string)trans('firefly.cannot_reset_demo_user')]);
        }

        // We will send the password reset link to this user. Once we have attempted
        // to send the link, we will examine the response then see the message we
        // need to show to the user. Finally, we'll send out a proper response.
        $result = $this->broker()->sendResetLink($request->only('email'));
        if ('passwords.throttled' === $result) {
            app('log')->error(sprintf('Cowardly refuse to send a password reset message to user #%d because the reset button has been throttled.', $user->id));
        }

        // always send the same response to the user:
        $response = trans('firefly.forgot_password_response');

        return back()->with('status', trans($response));
    }

    /**
     * Show form for email recovery.
     *
     *
     * @return Factory|View
     * @throws FireflyException
     * @throws ContainerExceptionInterface
     * @throws NotFoundExceptionInterface
     */
    public function showLinkRequestForm()
    {
        if ('web' !== config('firefly.authentication_guard')) {
            $message = sprintf('Cannot reset password when authenticating over "%s".', config('firefly.authentication_guard'));

            return view('error', compact('message'));
        }

        // is allowed to?
        $singleUserMode    = app('fireflyconfig')->get('single_user_mode', config('firefly.configuration.single_user_mode'))->data;
        $userCount         = User::count();
        $allowRegistration = true;
        $pageTitle         = (string)trans('firefly.forgot_pw_page_title');
        if (true === $singleUserMode && $userCount > 0) {
            $allowRegistration = false;
        }

        return view('auth.passwords.email')->with(compact('allowRegistration', 'pageTitle'));
    }
}

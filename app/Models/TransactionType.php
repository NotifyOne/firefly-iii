<?php

/**
 * TransactionType.php
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

namespace FireflyIII\Models;

use Carbon\Carbon;
use Eloquent;
use FireflyIII\Support\Models\ReturnsIntegerIdTrait;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Query\Builder;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * FireflyIII\Models\TransactionType
 *
 * @property int                                  $id
 * @property Carbon|null                          $created_at
 * @property Carbon|null                          $updated_at
 * @property Carbon|null                          $deleted_at
 * @property string                               $type
 * @property-read Collection|TransactionJournal[] $transactionJournals
 * @property-read int|null                        $transaction_journals_count
 * @method static \Illuminate\Database\Eloquent\Builder|TransactionType newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|TransactionType newQuery()
 * @method static Builder|TransactionType onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|TransactionType query()
 * @method static \Illuminate\Database\Eloquent\Builder|TransactionType whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TransactionType whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TransactionType whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TransactionType whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TransactionType whereUpdatedAt($value)
 * @method static Builder|TransactionType withTrashed()
 * @method static Builder|TransactionType withoutTrashed()
 * @mixin Eloquent
 */
class TransactionType extends Model
{
    use ReturnsIntegerIdTrait;
    use SoftDeletes;

    public const string DEPOSIT          = 'Deposit';
    public const string INVALID          = 'Invalid';
    public const string LIABILITY_CREDIT = 'Liability credit';
    public const string OPENING_BALANCE  = 'Opening balance';
    public const string RECONCILIATION   = 'Reconciliation';
    public const string TRANSFER         = 'Transfer';
    public const string WITHDRAWAL       = 'Withdrawal';

    protected $casts
                        = [
            'created_at' => 'datetime',
            'updated_at' => 'datetime',
            'deleted_at' => 'datetime',
        ];
    protected $fillable = ['type'];

    /**
     * Route binder. Converts the key in the URL to the specified object (or throw 404).
     *
     * @param string $type
     *
     * @return TransactionType
     * @throws NotFoundHttpException
     */
    public static function routeBinder(string $type): self
    {
        if (!auth()->check()) {
            throw new NotFoundHttpException();
        }
        $transactionType = self::where('type', ucfirst($type))->first();
        if (null !== $transactionType) {
            return $transactionType;
        }
        throw new NotFoundHttpException();
    }

    /**
     * @return bool
     */
    public function isDeposit(): bool
    {
        return self::DEPOSIT === $this->type;
    }

    /**
     * @return bool
     */
    public function isOpeningBalance(): bool
    {
        return self::OPENING_BALANCE === $this->type;
    }

    /**
     * @return bool
     */
    public function isTransfer(): bool
    {
        return self::TRANSFER === $this->type;
    }

    /**
     * @return bool
     */
    public function isWithdrawal(): bool
    {
        return self::WITHDRAWAL === $this->type;
    }

    /**
     * @return HasMany
     */
    public function transactionJournals(): HasMany
    {
        return $this->hasMany(TransactionJournal::class);
    }
}

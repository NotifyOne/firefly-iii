<?php

/**
 * CurrencyExchangeRate.php
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
use FireflyIII\Support\Models\ReturnsIntegerUserIdTrait;
use FireflyIII\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class CurrencyExchangeRate
 *
 * @property int                      $id
 * @property Carbon|null              $created_at
 * @property Carbon|null              $updated_at
 * @property string|null              $deleted_at
 * @property int                      $user_id
 * @property int                      $from_currency_id
 * @property int                      $to_currency_id
 * @property Carbon                   $date
 * @property string                   $rate
 * @property string                   $user_rate
 * @property-read TransactionCurrency $fromCurrency
 * @property-read TransactionCurrency $toCurrency
 * @property-read User                $user
 * @method static Builder|CurrencyExchangeRate newModelQuery()
 * @method static Builder|CurrencyExchangeRate newQuery()
 * @method static Builder|CurrencyExchangeRate query()
 * @method static Builder|CurrencyExchangeRate whereCreatedAt($value)
 * @method static Builder|CurrencyExchangeRate whereDate($value)
 * @method static Builder|CurrencyExchangeRate whereDeletedAt($value)
 * @method static Builder|CurrencyExchangeRate whereFromCurrencyId($value)
 * @method static Builder|CurrencyExchangeRate whereId($value)
 * @method static Builder|CurrencyExchangeRate whereRate($value)
 * @method static Builder|CurrencyExchangeRate whereToCurrencyId($value)
 * @method static Builder|CurrencyExchangeRate whereUpdatedAt($value)
 * @method static Builder|CurrencyExchangeRate whereUserId($value)
 * @method static Builder|CurrencyExchangeRate whereUserRate($value)
 * @property int                      $user_group_id
 * @method static Builder|CurrencyExchangeRate whereUserGroupId($value)
 * @method static Builder|CurrencyExchangeRate onlyTrashed()
 * @method static Builder|CurrencyExchangeRate withTrashed()
 * @method static Builder|CurrencyExchangeRate withoutTrashed()
 * @mixin Eloquent
 */
class CurrencyExchangeRate extends Model
{
    use ReturnsIntegerIdTrait;
    use ReturnsIntegerUserIdTrait;
    use SoftDeletes;


    protected $casts
                        = [
            'created_at'       => 'datetime',
            'updated_at'       => 'datetime',
            'user_id'          => 'int',
            'from_currency_id' => 'int',
            'to_currency_id'   => 'int',
            'date'             => 'datetime',
        ];
    protected $fillable = ['user_id', 'from_currency_id', 'to_currency_id', 'date', 'rate'];

    /**
     * @return BelongsTo
     */
    public function fromCurrency(): BelongsTo
    {
        return $this->belongsTo(TransactionCurrency::class, 'from_currency_id');
    }

    /**
     * @return BelongsTo
     */
    public function toCurrency(): BelongsTo
    {
        return $this->belongsTo(TransactionCurrency::class, 'to_currency_id');
    }

    /**
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * @return Attribute
     */
    protected function fromCurrencyId(): Attribute
    {
        return Attribute::make(
            get: static fn($value) => (int)$value,
        );
    }

    /**
     * @return Attribute
     */
    protected function rate(): Attribute
    {
        return Attribute::make(
            get: static fn($value) => (string)$value,
        );
    }

    /**
     * @return Attribute
     */
    protected function toCurrencyId(): Attribute
    {
        return Attribute::make(
            get: static fn($value) => (int)$value,
        );
    }

    /**
     * @return Attribute
     */
    protected function userRate(): Attribute
    {
        return Attribute::make(
            get: static fn($value) => (string)$value,
        );
    }


}

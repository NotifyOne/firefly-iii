<?php
/**
 * Recurrence.php
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
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Query\Builder;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * FireflyIII\Models\Recurrence
 *
 * @property int                                     $id
 * @property Carbon|null                             $created_at
 * @property Carbon|null                             $updated_at
 * @property Carbon|null                             $deleted_at
 * @property int                                     $user_id
 * @property int                                     $transaction_type_id
 * @property string                                  $title
 * @property string                                  $description
 * @property Carbon|null                             $first_date
 * @property Carbon|null                             $repeat_until
 * @property Carbon|null                             $latest_date
 * @property int|string                              $repetitions
 * @property bool                                    $apply_rules
 * @property bool                                    $active
 * @property-read Collection|Attachment[]            $attachments
 * @property-read int|null                           $attachments_count
 * @property-read Collection|Note[]                  $notes
 * @property-read int|null                           $notes_count
 * @property-read Collection|RecurrenceMeta[]        $recurrenceMeta
 * @property-read int|null                           $recurrence_meta_count
 * @property-read Collection|RecurrenceRepetition[]  $recurrenceRepetitions
 * @property-read int|null                           $recurrence_repetitions_count
 * @property-read Collection|RecurrenceTransaction[] $recurrenceTransactions
 * @property-read int|null                           $recurrence_transactions_count
 * @property-read TransactionCurrency                $transactionCurrency
 * @property-read TransactionType                    $transactionType
 * @property-read User                               $user
 * @method static \Illuminate\Database\Eloquent\Builder|Recurrence newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Recurrence newQuery()
 * @method static Builder|Recurrence onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Recurrence query()
 * @method static \Illuminate\Database\Eloquent\Builder|Recurrence whereActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Recurrence whereApplyRules($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Recurrence whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Recurrence whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Recurrence whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Recurrence whereFirstDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Recurrence whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Recurrence whereLatestDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Recurrence whereRepeatUntil($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Recurrence whereRepetitions($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Recurrence whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Recurrence whereTransactionTypeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Recurrence whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Recurrence whereUserId($value)
 * @method static Builder|Recurrence withTrashed()
 * @method static Builder|Recurrence withoutTrashed()
 * @property int                                     $user_group_id
 * @method static \Illuminate\Database\Eloquent\Builder|Recurrence whereUserGroupId($value)
 * @mixin Eloquent
 */
class Recurrence extends Model
{
    use ReturnsIntegerIdTrait;
    use ReturnsIntegerUserIdTrait;
    use SoftDeletes;


    protected $casts
        = [
            'created_at'   => 'datetime',
            'updated_at'   => 'datetime',
            'deleted_at'   => 'datetime',
            'title'        => 'string',
            'id'           => 'int',
            'description'  => 'string',
            'first_date'   => 'date',
            'repeat_until' => 'date',
            'latest_date'  => 'date',
            'repetitions'  => 'int',
            'active'       => 'bool',
            'apply_rules'  => 'bool',
        ];

    protected $fillable
        = ['user_id', 'transaction_type_id', 'title', 'description', 'first_date', 'repeat_until', 'latest_date', 'repetitions', 'apply_rules', 'active'];
    /** @var string The table to store the data in */
    protected $table = 'recurrences';

    /**
     * Route binder. Converts the key in the URL to the specified object (or throw 404).
     *
     * @param string $value
     *
     * @return Recurrence
     * @throws NotFoundHttpException
     */
    public static function routeBinder(string $value): self
    {
        if (auth()->check()) {
            $recurrenceId = (int)$value;
            /** @var User $user */
            $user = auth()->user();
            /** @var Recurrence|null $recurrence */
            $recurrence = $user->recurrences()->find($recurrenceId);
            if (null !== $recurrence) {
                return $recurrence;
            }
        }
        throw new NotFoundHttpException();
    }

    /**
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * @return MorphMany
     */
    public function attachments(): MorphMany
    {
        return $this->morphMany(Attachment::class, 'attachable');
    }

    /**
     * Get all the notes.
     */
    public function notes(): MorphMany
    {
        return $this->morphMany(Note::class, 'noteable');
    }

    /**
     * @return HasMany
     */
    public function recurrenceMeta(): HasMany
    {
        return $this->hasMany(RecurrenceMeta::class);
    }

    /**
     * @return HasMany
     */
    public function recurrenceRepetitions(): HasMany
    {
        return $this->hasMany(RecurrenceRepetition::class);
    }

    /**
     * @return HasMany
     */
    public function recurrenceTransactions(): HasMany
    {
        return $this->hasMany(RecurrenceTransaction::class);
    }

    /**
     * @return BelongsTo
     */
    public function transactionCurrency(): BelongsTo
    {
        return $this->belongsTo(TransactionCurrency::class);
    }

    /**
     * @return BelongsTo
     */
    public function transactionType(): BelongsTo
    {
        return $this->belongsTo(TransactionType::class);
    }

    /**
     * @return Attribute
     */
    protected function transactionTypeId(): Attribute
    {
        return Attribute::make(
            get: static fn($value) => (int)$value,
        );
    }
}

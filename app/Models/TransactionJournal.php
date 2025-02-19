<?php

/**
 * TransactionJournal.php
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
use Illuminate\Database\Eloquent\Builder as EloquentBuilder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * FireflyIII\Models\TransactionJournal
 *
 * @property int                                      $id
 * @property Carbon|null                              $created_at
 * @property Carbon|null                              $updated_at
 * @property Carbon|null                              $deleted_at
 * @property int                                      $user_id
 * @property int                                      $transaction_type_id
 * @property int|string|null                          $transaction_group_id
 * @property int|string|null                          $bill_id
 * @property int|string|null                          $transaction_currency_id
 * @property string|null                              $description
 * @property Carbon                                   $date
 * @property Carbon|null                              $interest_date
 * @property Carbon|null                              $book_date
 * @property Carbon|null                              $process_date
 * @property int                                      $order
 * @property int                                      $tag_count
 * @property string                                   $transaction_type_type
 * @property bool                                     $encrypted
 * @property bool                                     $completed
 * @property-read Collection|Attachment[]             $attachments
 * @property-read int|null                            $attachments_count
 * @property-read Bill|null                           $bill
 * @property-read Collection|Budget[]                 $budgets
 * @property-read int|null                            $budgets_count
 * @property-read Collection|Category[]               $categories
 * @property-read int|null                            $categories_count
 * @property-read Collection|TransactionJournalLink[] $destJournalLinks
 * @property-read int|null                            $dest_journal_links_count
 * @property-read Collection|Note[]                   $notes
 * @property-read int|null                            $notes_count
 * @property-read Collection|PiggyBankEvent[]         $piggyBankEvents
 * @property-read int|null                            $piggy_bank_events_count
 * @property-read Collection|TransactionJournalLink[] $sourceJournalLinks
 * @property-read int|null                            $source_journal_links_count
 * @property-read Collection|Tag[]                    $tags
 * @property-read int|null                            $tags_count
 * @property-read TransactionCurrency|null            $transactionCurrency
 * @property-read TransactionGroup|null               $transactionGroup
 * @property-read Collection|TransactionJournalMeta[] $transactionJournalMeta
 * @property-read int|null                            $transaction_journal_meta_count
 * @property-read TransactionType                     $transactionType
 * @property-read Collection|Transaction[]            $transactions
 * @property-read int|null                            $transactions_count
 * @property-read User                                $user
 * @method static EloquentBuilder|TransactionJournal after(Carbon $date)
 * @method static EloquentBuilder|TransactionJournal before(Carbon $date)
 * @method static EloquentBuilder|TransactionJournal newModelQuery()
 * @method static EloquentBuilder|TransactionJournal newQuery()
 * @method static \Illuminate\Database\Query\Builder|TransactionJournal onlyTrashed()
 * @method static EloquentBuilder|TransactionJournal query()
 * @method static EloquentBuilder|TransactionJournal transactionTypes($types)
 * @method static EloquentBuilder|TransactionJournal whereBillId($value)
 * @method static EloquentBuilder|TransactionJournal whereBookDate($value)
 * @method static EloquentBuilder|TransactionJournal whereCompleted($value)
 * @method static EloquentBuilder|TransactionJournal whereCreatedAt($value)
 * @method static EloquentBuilder|TransactionJournal whereDate($value)
 * @method static EloquentBuilder|TransactionJournal whereDeletedAt($value)
 * @method static EloquentBuilder|TransactionJournal whereDescription($value)
 * @method static EloquentBuilder|TransactionJournal whereEncrypted($value)
 * @method static EloquentBuilder|TransactionJournal whereId($value)
 * @method static EloquentBuilder|TransactionJournal whereInterestDate($value)
 * @method static EloquentBuilder|TransactionJournal whereOrder($value)
 * @method static EloquentBuilder|TransactionJournal whereProcessDate($value)
 * @method static EloquentBuilder|TransactionJournal whereTagCount($value)
 * @method static EloquentBuilder|TransactionJournal whereTransactionCurrencyId($value)
 * @method static EloquentBuilder|TransactionJournal whereTransactionGroupId($value)
 * @method static EloquentBuilder|TransactionJournal whereTransactionTypeId($value)
 * @method static EloquentBuilder|TransactionJournal whereUpdatedAt($value)
 * @method static EloquentBuilder|TransactionJournal whereUserId($value)
 * @method static \Illuminate\Database\Query\Builder|TransactionJournal withTrashed()
 * @method static \Illuminate\Database\Query\Builder|TransactionJournal withoutTrashed()
 * @property-read Collection|Location[]               $locations
 * @property-read int|null                            $locations_count
 * @property int|string                               $the_count
 * @property int                                      $user_group_id
 * @method static EloquentBuilder|TransactionJournal whereUserGroupId($value)
 * @property-read Collection<int, AuditLogEntry>      $auditLogEntries
 * @property-read int|null                            $audit_log_entries_count
 * @mixin Eloquent
 */
class TransactionJournal extends Model
{
    use HasFactory;
    use ReturnsIntegerIdTrait;
    use ReturnsIntegerUserIdTrait;
    use SoftDeletes;


    protected $casts
        = [
            'created_at'    => 'datetime',
            'updated_at'    => 'datetime',
            'deleted_at'    => 'datetime',
            'date'          => 'datetime',
            'interest_date' => 'date',
            'book_date'     => 'date',
            'process_date'  => 'date',
            'order'         => 'int',
            'tag_count'     => 'int',
            'encrypted'     => 'boolean',
            'completed'     => 'boolean',
        ];


    protected $fillable
        = [
            'user_id',
            'user_group_id',
            'transaction_type_id',
            'bill_id',
            'tag_count',
            'transaction_currency_id',
            'description',
            'completed',
            'order',
            'date',
        ];

    protected $hidden = ['encrypted'];

    /**
     * Route binder. Converts the key in the URL to the specified object (or throw 404).
     *
     * @param string $value
     *
     * @return TransactionJournal
     * @throws NotFoundHttpException
     */
    public static function routeBinder(string $value): self
    {
        if (auth()->check()) {
            $journalId = (int)$value;
            /** @var User $user */
            $user = auth()->user();
            /** @var TransactionJournal|null $journal */
            $journal = $user->transactionJournals()->where('transaction_journals.id', $journalId)->first(['transaction_journals.*']);
            if (null !== $journal) {
                return $journal;
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
     * @return MorphMany
     */
    public function auditLogEntries(): MorphMany
    {
        return $this->morphMany(AuditLogEntry::class, 'auditable');
    }

    /**
     * @return BelongsTo
     */
    public function bill(): BelongsTo
    {
        return $this->belongsTo(Bill::class);
    }

    /**
     * @return BelongsToMany
     */
    public function budgets(): BelongsToMany
    {
        return $this->belongsToMany(Budget::class);
    }

    /**
     * @return BelongsToMany
     */
    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class);
    }

    /**
     * @return HasMany
     */
    public function destJournalLinks(): HasMany
    {
        return $this->hasMany(TransactionJournalLink::class, 'destination_id');
    }

    /**
     * @return bool
     */
    public function isTransfer(): bool
    {
        if (null !== $this->transaction_type_type) {
            return TransactionType::TRANSFER === $this->transaction_type_type;
        }

        return $this->transactionType->isTransfer();
    }

    /**
     * @return MorphMany
     */
    public function locations(): MorphMany
    {
        return $this->morphMany(Location::class, 'locatable');
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
    public function piggyBankEvents(): HasMany
    {
        return $this->hasMany(PiggyBankEvent::class);
    }

    /**
     *
     * @param EloquentBuilder $query
     * @param Carbon          $date
     *
     * @return EloquentBuilder
     */
    public function scopeAfter(EloquentBuilder $query, Carbon $date): EloquentBuilder
    {
        return $query->where('transaction_journals.date', '>=', $date->format('Y-m-d 00:00:00'));
    }

    /**
     *
     * @param EloquentBuilder $query
     * @param Carbon          $date
     *
     * @return EloquentBuilder
     */
    public function scopeBefore(EloquentBuilder $query, Carbon $date): EloquentBuilder
    {
        return $query->where('transaction_journals.date', '<=', $date->format('Y-m-d 00:00:00'));
    }

    /**
     *
     * @param EloquentBuilder $query
     * @param array           $types
     */
    public function scopeTransactionTypes(EloquentBuilder $query, array $types): void
    {
        if (!self::isJoined($query, 'transaction_types')) {
            $query->leftJoin('transaction_types', 'transaction_types.id', '=', 'transaction_journals.transaction_type_id');
        }
        if (0 !== count($types)) {
            $query->whereIn('transaction_types.type', $types);
        }
    }

    /**
     * Checks if tables are joined.
     *
     *
     * @param Builder $query
     * @param string  $table
     *
     * @return bool
     */
    public static function isJoined(Builder $query, string $table): bool
    {
        $joins = $query->getQuery()->joins;
        foreach ($joins as $join) {
            if ($join->table === $table) {
                return true;
            }
        }

        return false;
    }

    /**
     * @return HasMany
     */
    public function sourceJournalLinks(): HasMany
    {
        return $this->hasMany(TransactionJournalLink::class, 'source_id');
    }

    /**
     * @return BelongsToMany
     */
    public function tags(): BelongsToMany
    {
        return $this->belongsToMany(Tag::class);
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
    public function transactionGroup(): BelongsTo
    {
        return $this->belongsTo(TransactionGroup::class);
    }

    /**
     * @return HasMany
     */
    public function transactionJournalMeta(): HasMany
    {
        return $this->hasMany(TransactionJournalMeta::class);
    }

    /**
     * @return BelongsTo
     */
    public function transactionType(): BelongsTo
    {
        return $this->belongsTo(TransactionType::class);
    }

    /**
     * @return HasMany
     */
    public function transactions(): HasMany
    {
        return $this->hasMany(Transaction::class);
    }

    /**
     * @return Attribute
     */
    protected function order(): Attribute
    {
        return Attribute::make(
            get: static fn($value) => (int)$value,
        );
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

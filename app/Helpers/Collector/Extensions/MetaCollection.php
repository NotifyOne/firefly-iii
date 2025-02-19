<?php

/**
 * MetaCollection.php
 * Copyright (c) 2020 james@firefly-iii.org
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

namespace FireflyIII\Helpers\Collector\Extensions;

use FireflyIII\Helpers\Collector\GroupCollectorInterface;
use FireflyIII\Models\Bill;
use FireflyIII\Models\Budget;
use FireflyIII\Models\Category;
use FireflyIII\Models\Tag;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Builder as EloquentBuilder;
use Illuminate\Database\Query\JoinClause;
use Illuminate\Support\Collection;

/**
 * Trait MetaCollection
 */
trait MetaCollection
{
    /**
     * @inheritDoc
     */
    public function excludeBills(Collection $bills): GroupCollectorInterface
    {
        $this->withBillInformation();
        $this->query->where(static function (EloquentBuilder $q1) use ($bills) { // @phpstan-ignore-line
            $q1->whereNotIn('transaction_journals.bill_id', $bills->pluck('id')->toArray());
            $q1->orWhereNull('transaction_journals.bill_id');
        });

        return $this;
    }

    /**
     * Will include bill name + ID, if any.
     *
     * @return GroupCollectorInterface
     */
    public function withBillInformation(): GroupCollectorInterface
    {
        if (false === $this->hasBillInformation) {
            // join bill table
            $this->query->leftJoin('bills', 'bills.id', '=', 'transaction_journals.bill_id');
            // add fields
            $this->fields[]           = 'bills.id as bill_id';
            $this->fields[]           = 'bills.name as bill_name';
            $this->hasBillInformation = true;
        }

        return $this;
    }

    /**
     * Exclude a specific budget.
     *
     * @param Budget $budget
     *
     * @return GroupCollectorInterface
     */
    public function excludeBudget(Budget $budget): GroupCollectorInterface
    {
        $this->withBudgetInformation();

        $this->query->where(static function (EloquentBuilder $q2) use ($budget) { // @phpstan-ignore-line
            $q2->where('budgets.id', '!=', $budget->id);
            $q2->orWhereNull('budgets.id');
        });

        return $this;
    }

    /**
     * Will include budget ID + name, if any.
     *
     * @return GroupCollectorInterface
     */
    public function withBudgetInformation(): GroupCollectorInterface
    {
        if (false === $this->hasBudgetInformation) {
            // join link table
            $this->query->leftJoin('budget_transaction_journal', 'budget_transaction_journal.transaction_journal_id', '=', 'transaction_journals.id');
            // join cat table
            $this->query->leftJoin('budgets', 'budget_transaction_journal.budget_id', '=', 'budgets.id');
            // add fields
            $this->fields[]             = 'budgets.id as budget_id';
            $this->fields[]             = 'budgets.name as budget_name';
            $this->hasBudgetInformation = true;
        }

        return $this;
    }

    /**
     * @inheritDoc
     */
    public function excludeBudgets(Collection $budgets): GroupCollectorInterface
    {
        if ($budgets->count() > 0) {
            $this->withBudgetInformation();
            $this->query->where(static function (EloquentBuilder $q1) use ($budgets) { // @phpstan-ignore-line
                $q1->whereNotIn('budgets.id', $budgets->pluck('id')->toArray());
                $q1->orWhereNull('budgets.id');
            });
        }

        return $this;
    }

    /**
     * @inheritDoc
     */
    public function excludeCategories(Collection $categories): GroupCollectorInterface
    {
        if ($categories->count() > 0) {
            $this->withCategoryInformation();
            $this->query->where(static function (EloquentBuilder $q1) use ($categories) { // @phpstan-ignore-line
                $q1->whereNotIn('categories.id', $categories->pluck('id')->toArray());
                $q1->orWhereNull('categories.id');
            });
        }

        return $this;
    }

    /**
     * Will include category ID + name, if any.
     *
     * @return GroupCollectorInterface
     */
    public function withCategoryInformation(): GroupCollectorInterface
    {
        if (false === $this->hasCatInformation) {
            // join link table
            $this->query->leftJoin('category_transaction_journal', 'category_transaction_journal.transaction_journal_id', '=', 'transaction_journals.id');
            // join cat table
            $this->query->leftJoin('categories', 'category_transaction_journal.category_id', '=', 'categories.id');
            // add fields
            $this->fields[]          = 'categories.id as category_id';
            $this->fields[]          = 'categories.name as category_name';
            $this->hasCatInformation = true;
        }

        return $this;
    }

    /**
     * Exclude a specific category.
     *
     * @param Category $category
     *
     * @return GroupCollectorInterface
     */
    public function excludeCategory(Category $category): GroupCollectorInterface
    {
        $this->withCategoryInformation();

        $this->query->where(static function (EloquentBuilder $q2) use ($category) { // @phpstan-ignore-line
            $q2->where('categories.id', '!=', $category->id);
            $q2->orWhereNull('categories.id');
        });

        return $this;
    }

    /**
     * @inheritDoc
     */
    public function excludeExternalId(string $externalId): GroupCollectorInterface
    {
        $this->joinMetaDataTables();
        $this->query->where('journal_meta.name', '=', 'external_id');
        $this->query->where('journal_meta.data', '!=', sprintf('%s', json_encode($externalId)));

        return $this;
    }

    /**
     * Join table to get tag information.
     */
    protected function joinMetaDataTables(): void
    {
        if (false === $this->hasJoinedMetaTables) {
            $this->hasJoinedMetaTables = true;
            $this->query->leftJoin('journal_meta', 'transaction_journals.id', '=', 'journal_meta.transaction_journal_id');
            $this->fields[] = 'journal_meta.name as meta_name';
            $this->fields[] = 'journal_meta.data as meta_data';
        }
    }

    /**
     * @inheritDoc
     */
    public function excludeExternalUrl(string $url): GroupCollectorInterface
    {
        $this->joinMetaDataTables();
        $this->query->where('journal_meta.name', '=', 'external_url');
        $this->query->where('journal_meta.data', '!=', json_encode($url));

        return $this;
    }

    /**
     * @inheritDoc
     */
    public function excludeInternalReference(string $internalReference): GroupCollectorInterface
    {
        $internalReference = (string)json_encode($internalReference);
        $internalReference = str_replace('\\', '\\\\', trim($internalReference, '"'));

        $this->joinMetaDataTables();
        $this->query->where('journal_meta.name', '=', 'internal_reference');
        $this->query->where('journal_meta.data', 'NOT LIKE', sprintf('%%%s%%', $internalReference));

        return $this;
    }

    /**
     * @inheritDoc
     */
    public function excludeRecurrenceId(string $recurringId): GroupCollectorInterface
    {
        $this->joinMetaDataTables();
        $this->query->where('journal_meta.name', '=', 'recurrence_id');
        $this->query->where('journal_meta.data', '!=', sprintf('%s', json_encode($recurringId)));

        return $this;
    }

    /**
     * @inheritDoc
     */
    public function externalIdContains(string $externalId): GroupCollectorInterface
    {
        $externalId = (string)json_encode($externalId);
        $externalId = str_replace('\\', '\\\\', trim($externalId, '"'));

        $this->joinMetaDataTables();
        $this->query->where('journal_meta.name', '=', 'external_id');
        $this->query->where('journal_meta.data', 'LIKE', sprintf('%%%s%%', $externalId));

        return $this;
    }

    /**
     * @inheritDoc
     */
    public function externalIdDoesNotContain(string $externalId): GroupCollectorInterface
    {
        $externalId = (string)json_encode($externalId);
        $externalId = str_replace('\\', '\\\\', trim($externalId, '"'));

        $this->joinMetaDataTables();
        $this->query->where('journal_meta.name', '=', 'external_id');
        $this->query->where('journal_meta.data', 'NOT LIKE', sprintf('%%%s%%', $externalId));

        return $this;
    }

    /**
     * @inheritDoc
     */
    public function externalIdDoesNotEnd(string $externalId): GroupCollectorInterface
    {
        $externalId = (string)json_encode($externalId);
        $externalId = str_replace('\\', '\\\\', trim($externalId, '"'));

        $this->joinMetaDataTables();
        $this->query->where('journal_meta.name', '=', 'external_id');
        $this->query->where('journal_meta.data', 'NOT LIKE', sprintf('%%%s"', $externalId));

        return $this;
    }

    /**
     * @inheritDoc
     */
    public function externalIdDoesNotStart(string $externalId): GroupCollectorInterface
    {
        $externalId = (string)json_encode($externalId);
        $externalId = str_replace('\\', '\\\\', trim($externalId, '"'));

        $this->joinMetaDataTables();
        $this->query->where('journal_meta.name', '=', 'external_id');
        $this->query->where('journal_meta.data', 'LIKE', sprintf('"%s%%', $externalId));

        return $this;
    }

    /**
     * @inheritDoc
     */
    public function externalIdEnds(string $externalId): GroupCollectorInterface
    {
        $externalId = (string)json_encode($externalId);
        $externalId = str_replace('\\', '\\\\', trim($externalId, '"'));

        $this->joinMetaDataTables();
        $this->query->where('journal_meta.name', '=', 'external_id');
        $this->query->where('journal_meta.data', 'LIKE', sprintf('%%%s"', $externalId));

        return $this;
    }

    /**
     * @inheritDoc
     */
    public function externalIdStarts(string $externalId): GroupCollectorInterface
    {
        $externalId = (string)json_encode($externalId);
        $externalId = str_replace('\\', '\\\\', trim($externalId, '"'));

        $this->joinMetaDataTables();
        $this->query->where('journal_meta.name', '=', 'external_id');
        $this->query->where('journal_meta.data', 'LIKE', sprintf('"%s%%', $externalId));

        return $this;
    }

    /**
     * @param string $url
     *
     * @return GroupCollectorInterface
     */
    public function externalUrlContains(string $url): GroupCollectorInterface
    {
        $this->joinMetaDataTables();
        $url = (string)json_encode($url);
        $url = str_replace('\\', '\\\\', trim($url, '"'));
        $this->query->where('journal_meta.name', '=', 'external_url');
        $this->query->where('journal_meta.data', 'LIKE', sprintf('%%%s%%', $url));

        return $this;
    }

    /**
     * @param string $url
     *
     * @return GroupCollectorInterface
     */
    public function externalUrlDoesNotContain(string $url): GroupCollectorInterface
    {
        $this->joinMetaDataTables();
        $url = (string)json_encode($url);
        $url = str_replace('\\', '\\\\', trim($url, '"'));
        $this->query->where('journal_meta.name', '=', 'external_url');
        $this->query->where('journal_meta.data', 'NOT LIKE', sprintf('%%%s%%', $url));

        return $this;
    }

    /**
     * @param string $url
     *
     * @return GroupCollectorInterface
     */
    public function externalUrlDoesNotEnd(string $url): GroupCollectorInterface
    {
        $this->joinMetaDataTables();
        $url = (string)json_encode($url);
        $url = str_replace('\\', '\\\\', ltrim($url, '"'));
        $this->query->where('journal_meta.name', '=', 'external_url');
        $this->query->where('journal_meta.data', 'NOT LIKE', sprintf('%%%s', $url));

        return $this;
    }

    /**
     * @param string $url
     *
     * @return GroupCollectorInterface
     */
    public function externalUrlDoesNotStart(string $url): GroupCollectorInterface
    {
        $this->joinMetaDataTables();
        $url = (string)json_encode($url);
        $url = str_replace('\\', '\\\\', rtrim($url, '"'));
        //var_dump($url);

        $this->query->where('journal_meta.name', '=', 'external_url');
        $this->query->where('journal_meta.data', 'NOT LIKE', sprintf('%s%%', $url));

        return $this;
    }

    /**
     * @param string $url
     *
     * @return GroupCollectorInterface
     */
    public function externalUrlEnds(string $url): GroupCollectorInterface
    {
        $this->joinMetaDataTables();
        $url = (string)json_encode($url);
        $url = str_replace('\\', '\\\\', ltrim($url, '"'));
        $this->query->where('journal_meta.name', '=', 'external_url');
        $this->query->where('journal_meta.data', 'LIKE', sprintf('%%%s', $url));

        return $this;
    }

    /**
     * @param string $url
     *
     * @return GroupCollectorInterface
     */
    public function externalUrlStarts(string $url): GroupCollectorInterface
    {
        $this->joinMetaDataTables();
        $url = (string)json_encode($url);
        $url = str_replace('\\', '\\\\', rtrim($url, '"'));
        //var_dump($url);

        $this->query->where('journal_meta.name', '=', 'external_url');
        $this->query->where('journal_meta.data', 'LIKE', sprintf('%s%%', $url));

        return $this;
    }

    /**
     * Where has no tags.
     *
     * @return GroupCollectorInterface
     */
    public function hasAnyTag(): GroupCollectorInterface
    {
        $this->withTagInformation();
        $this->query->whereNotNull('tag_transaction_journal.tag_id');

        return $this;
    }

    /**
     * @return GroupCollectorInterface
     */
    public function withTagInformation(): GroupCollectorInterface
    {
        $this->fields[] = 'tags.id as tag_id';
        $this->fields[] = 'tags.tag as tag_name';
        $this->fields[] = 'tags.date as tag_date';
        $this->fields[] = 'tags.description as tag_description';
        $this->fields[] = 'tags.latitude as tag_latitude';
        $this->fields[] = 'tags.longitude as tag_longitude';
        $this->fields[] = 'tags.zoomLevel as tag_zoom_level';

        $this->joinTagTables();

        return $this;
    }

    /**
     * Join table to get tag information.
     */
    protected function joinTagTables(): void
    {
        if (false === $this->hasJoinedTagTables) {
            // join some extra tables:
            $this->hasJoinedTagTables = true;
            $this->query->leftJoin('tag_transaction_journal', 'tag_transaction_journal.transaction_journal_id', '=', 'transaction_journals.id');
            $this->query->leftJoin('tags', 'tag_transaction_journal.tag_id', '=', 'tags.id');
        }
    }

    /**
     * @inheritDoc
     */
    public function internalReferenceContains(string $internalReference): GroupCollectorInterface
    {
        $internalReference = (string)json_encode($internalReference);
        $internalReference = str_replace('\\', '\\\\', trim($internalReference, '"'));
        //var_dump($internalReference);
        //exit;

        $this->joinMetaDataTables();
        $this->query->where('journal_meta.name', '=', 'internal_reference');
        $this->query->where('journal_meta.data', 'LIKE', sprintf('%%%s%%', $internalReference));

        return $this;
    }

    /**
     * @inheritDoc
     */
    public function internalReferenceDoesNotContain(string $internalReference): GroupCollectorInterface
    {
        $internalReference = (string)json_encode($internalReference);
        $internalReference = str_replace('\\', '\\\\', trim($internalReference, '"'));

        $this->joinMetaDataTables();
        $this->query->where('journal_meta.name', '=', 'internal_reference');
        $this->query->where('journal_meta.data', 'NOT LIKE', sprintf('%%%s%%', $internalReference));

        return $this;
    }

    /**
     * @inheritDoc
     */
    public function internalReferenceDoesNotEnd(string $internalReference): GroupCollectorInterface
    {
        $internalReference = (string)json_encode($internalReference);
        $internalReference = str_replace('\\', '\\\\', trim($internalReference, '"'));

        $this->joinMetaDataTables();
        $this->query->where('journal_meta.name', '=', 'internal_reference');
        $this->query->where('journal_meta.data', 'NOT LIKE', sprintf('%%%s"', $internalReference));

        return $this;
    }

    /**
     * @inheritDoc
     */
    public function internalReferenceDoesNotStart(string $internalReference): GroupCollectorInterface
    {
        $internalReference = (string)json_encode($internalReference);
        $internalReference = str_replace('\\', '\\\\', trim($internalReference, '"'));

        $this->joinMetaDataTables();
        $this->query->where('journal_meta.name', '=', 'internal_reference');
        $this->query->where('journal_meta.data', 'LIKE', sprintf('"%s%%', $internalReference));

        return $this;
    }

    /**
     * @inheritDoc
     */
    public function internalReferenceEnds(string $internalReference): GroupCollectorInterface
    {
        $internalReference = (string)json_encode($internalReference);
        $internalReference = str_replace('\\', '\\\\', trim($internalReference, '"'));

        $this->joinMetaDataTables();
        $this->query->where('journal_meta.name', '=', 'internal_reference');
        $this->query->where('journal_meta.data', 'LIKE', sprintf('%%%s"', $internalReference));

        return $this;
    }

    /**
     * @inheritDoc
     */
    public function internalReferenceStarts(string $internalReference): GroupCollectorInterface
    {
        $internalReference = (string)json_encode($internalReference);
        $internalReference = str_replace('\\', '\\\\', trim($internalReference, '"'));

        $this->joinMetaDataTables();
        $this->query->where('journal_meta.name', '=', 'internal_reference');
        $this->query->where('journal_meta.data', 'LIKE', sprintf('"%s%%', $internalReference));

        return $this;
    }

    /**
     * @param string $value
     *
     * @return GroupCollectorInterface
     */
    public function notesContain(string $value): GroupCollectorInterface
    {
        $this->withNotes();
        $this->query->where('notes.text', 'LIKE', sprintf('%%%s%%', $value));

        return $this;
    }

    /**
     * @inheritDoc
     */
    public function withNotes(): GroupCollectorInterface
    {
        if (false === $this->hasNotesInformation) {
            // join bill table
            $this->query->leftJoin(
                'notes',
                static function (JoinClause $join) {
                    $join->on('notes.noteable_id', '=', 'transaction_journals.id');
                    $join->where('notes.noteable_type', '=', 'FireflyIII\Models\TransactionJournal');
                    $join->whereNull('notes.deleted_at');
                }
            );
            // add fields
            $this->fields[]            = 'notes.text as notes';
            $this->hasNotesInformation = true;
        }

        return $this;
    }

    /**
     * @param string $value
     *
     * @return GroupCollectorInterface
     */
    public function notesDoNotContain(string $value): GroupCollectorInterface
    {
        $this->withNotes();
        $this->query->where(static function (Builder $q) use ($value) { // @phpstan-ignore-line
            $q->whereNull('notes.text');
            $q->orWhere('notes.text', 'NOT LIKE', sprintf('%%%s%%', $value));
        });

        return $this;
    }

    /**
     * @param string $value
     *
     * @return GroupCollectorInterface
     */
    public function notesDontEndWith(string $value): GroupCollectorInterface
    {
        $this->withNotes();
        $this->query->where(static function (Builder $q) use ($value) { // @phpstan-ignore-line
            $q->whereNull('notes.text');
            $q->orWhere('notes.text', 'NOT LIKE', sprintf('%%%s', $value));
        });

        return $this;
    }

    /**
     * @param string $value
     *
     * @return GroupCollectorInterface
     */
    public function notesDontStartWith(string $value): GroupCollectorInterface
    {
        $this->withNotes();
        $this->query->where(static function (Builder $q) use ($value) { // @phpstan-ignore-line
            $q->whereNull('notes.text');
            $q->orWhere('notes.text', 'NOT LIKE', sprintf('%s%%', $value));
        });

        return $this;
    }

    /**
     * @param string $value
     *
     * @return GroupCollectorInterface
     */
    public function notesEndWith(string $value): GroupCollectorInterface
    {
        $this->withNotes();
        $this->query->where('notes.text', 'LIKE', sprintf('%%%s', $value));

        return $this;
    }

    /**
     * @param string $value
     *
     * @return GroupCollectorInterface
     */
    public function notesExactly(string $value): GroupCollectorInterface
    {
        $this->withNotes();
        $this->query->where('notes.text', '=', sprintf('%s', $value));

        return $this;
    }

    /**
     * @param string $value
     *
     * @return GroupCollectorInterface
     */
    public function notesExactlyNot(string $value): GroupCollectorInterface
    {
        $this->withNotes();
        $this->query->where(static function (Builder $q) use ($value) { // @phpstan-ignore-line
            $q->whereNull('notes.text');
            $q->orWhere('notes.text', '!=', sprintf('%s', $value));
        });

        return $this;
    }

    /**
     * @param string $value
     *
     * @return GroupCollectorInterface
     */
    public function notesStartWith(string $value): GroupCollectorInterface
    {
        $this->withNotes();
        $this->query->where('notes.text', 'LIKE', sprintf('%s%%', $value));

        return $this;
    }

    /**
     * Limit the search to a specific bill.
     *
     * @param Bill $bill
     *
     * @return GroupCollectorInterface
     */
    public function setBill(Bill $bill): GroupCollectorInterface
    {
        $this->withBillInformation();
        $this->query->where('transaction_journals.bill_id', '=', $bill->id);

        return $this;
    }

    /**
     * Limit the search to a specific set of bills.
     *
     * @param Collection $bills
     *
     * @return GroupCollectorInterface
     */
    public function setBills(Collection $bills): GroupCollectorInterface
    {
        $this->withBillInformation();
        $this->query->whereIn('transaction_journals.bill_id', $bills->pluck('id')->toArray());

        return $this;
    }

    /**
     * Limit the search to a specific budget.
     *
     * @param Budget $budget
     *
     * @return GroupCollectorInterface
     */
    public function setBudget(Budget $budget): GroupCollectorInterface
    {
        $this->withBudgetInformation();
        $this->query->where('budgets.id', $budget->id);

        return $this;
    }

    /**
     * Limit the search to a specific set of budgets.
     *
     * @param Collection $budgets
     *
     * @return GroupCollectorInterface
     */
    public function setBudgets(Collection $budgets): GroupCollectorInterface
    {
        if ($budgets->count() > 0) {
            $this->withBudgetInformation();
            $this->query->whereIn('budgets.id', $budgets->pluck('id')->toArray());
        }

        return $this;
    }

    /**
     * Limit the search to a specific bunch of categories.
     *
     * @param Collection $categories
     *
     * @return GroupCollectorInterface
     */
    public function setCategories(Collection $categories): GroupCollectorInterface
    {
        if ($categories->count() > 0) {
            $this->withCategoryInformation();
            $this->query->whereIn('categories.id', $categories->pluck('id')->toArray());
        }

        return $this;
    }

    /**
     * Limit the search to a specific category.
     *
     * @param Category $category
     *
     * @return GroupCollectorInterface
     */
    public function setCategory(Category $category): GroupCollectorInterface
    {
        $this->withCategoryInformation();
        $this->query->where('categories.id', $category->id);

        return $this;
    }

    /**
     * @inheritDoc
     */
    public function setExternalId(string $externalId): GroupCollectorInterface
    {
        $this->joinMetaDataTables();
        $this->query->where('journal_meta.name', '=', 'external_id');
        $this->query->where('journal_meta.data', '=', sprintf('%s', json_encode($externalId)));

        return $this;
    }

    /**
     * @inheritDoc
     */
    public function setExternalUrl(string $url): GroupCollectorInterface
    {
        $this->joinMetaDataTables();
        $this->query->where('journal_meta.name', '=', 'external_url');
        $this->query->where('journal_meta.data', '=', json_encode($url));

        return $this;
    }

    /**
     * @inheritDoc
     */
    public function setInternalReference(string $internalReference): GroupCollectorInterface
    {
        $internalReference = (string)json_encode($internalReference);
        $internalReference = str_replace('\\', '\\\\', trim($internalReference, '"'));

        $this->joinMetaDataTables();
        $this->query->where('journal_meta.name', '=', 'internal_reference');
        $this->query->where('journal_meta.data', 'LIKE', sprintf('%%%s%%', $internalReference));

        return $this;
    }

    /**
     * @inheritDoc
     */
    public function setRecurrenceId(string $recurringId): GroupCollectorInterface
    {
        $this->joinMetaDataTables();
        $this->query->where('journal_meta.name', '=', 'recurrence_id');
        $this->query->where('journal_meta.data', '=', sprintf('%s', json_encode($recurringId)));

        return $this;
    }

    /**
     * @inheritDoc
     */
    public function setSepaCT(string $sepaCT): GroupCollectorInterface
    {
        $this->joinMetaDataTables();
        $this->query->where('journal_meta.name', '=', 'sepa_ct_id');
        $this->query->where('journal_meta.data', '=', sprintf('%s', json_encode($sepaCT)));
        $this->query->whereNull('journal_meta.deleted_at');

        return $this;
    }

    /**
     * Limit results to a specific tag.
     *
     * @param Tag $tag
     *
     * @return GroupCollectorInterface
     */
    public function setTag(Tag $tag): GroupCollectorInterface
    {
        $this->withTagInformation();
        $this->query->where('tag_transaction_journal.tag_id', $tag->id);

        return $this;
    }

    /**
     * Limit results to a specific set of tags.
     *
     * @param Collection $tags
     *
     * @return GroupCollectorInterface
     */
    public function setTags(Collection $tags): GroupCollectorInterface
    {
        $this->withTagInformation();
        $this->tags = array_merge($this->tags, $tags->pluck('id')->toArray());
        $this->query->whereIn('tag_transaction_journal.tag_id', $this->tags);

        return $this;
    }

    /**
     * Without tags
     *
     * @param Collection $tags
     *
     * @return GroupCollectorInterface
     */
    public function setWithoutSpecificTags(Collection $tags): GroupCollectorInterface
    {
        $this->withTagInformation();

        // this method adds a "postFilter" to the collector.
        $list                = $tags->pluck('tag')->toArray();
        $filter              = static function (array $object) use ($list): bool {
            foreach ($object['transactions'] as $transaction) {
                app('log')->debug(sprintf('Transaction has %d tag(s)', count($transaction['tags'])));
                foreach ($transaction['tags'] as $tag) {
                    if (in_array($tag['name'], $list, true)) {
                        return false;
                    }
                }
            }
            return true;
        };
        $this->postFilters[] = $filter;


        return $this;
    }

    /**
     * @return GroupCollectorInterface
     */
    public function withAnyNotes(): GroupCollectorInterface
    {
        $this->withNotes();
        $this->query->whereNotNull('notes.text');

        return $this;
    }

    /**
     * Limit results to transactions without a bill.
     *
     * @return GroupCollectorInterface
     */
    public function withBill(): GroupCollectorInterface
    {
        $this->withBillInformation();
        $this->query->whereNotNull('transaction_journals.bill_id');

        return $this;
    }

    /**
     * Limit results to a transactions without a budget..
     *
     * @return GroupCollectorInterface
     */
    public function withBudget(): GroupCollectorInterface
    {
        $this->withBudgetInformation();
        $this->query->whereNotNull('budget_transaction_journal.budget_id');

        return $this;
    }

    /**
     * Limit results to a transactions without a category.
     *
     * @return GroupCollectorInterface
     */
    public function withCategory(): GroupCollectorInterface
    {
        $this->withCategoryInformation();
        $this->query->whereNotNull('category_transaction_journal.category_id');

        return $this;
    }

    /**
     * @inheritDoc
     */
    public function withExternalId(): GroupCollectorInterface
    {
        $this->joinMetaDataTables();
        $this->query->where('journal_meta.name', '=', 'external_id');
        $this->query->whereNotNull('journal_meta.data');

        return $this;
    }

    /**
     * @inheritDoc
     */
    public function withExternalUrl(): GroupCollectorInterface
    {
        $this->joinMetaDataTables();
        $this->query->where('journal_meta.name', '=', 'external_url');
        $this->query->whereNotNull('journal_meta.data');

        return $this;
    }

    /**
     * Limit results to a transactions without a bill.
     *
     * @return GroupCollectorInterface
     */
    public function withoutBill(): GroupCollectorInterface
    {
        $this->query->whereNull('transaction_journals.bill_id');

        return $this;
    }

    /**
     * Limit results to a transactions without a budget..
     *
     * @return GroupCollectorInterface
     */
    public function withoutBudget(): GroupCollectorInterface
    {
        $this->withBudgetInformation();
        $this->query->whereNull('budget_transaction_journal.budget_id');

        return $this;
    }

    /**
     * Limit results to a transactions without a category.
     *
     * @return GroupCollectorInterface
     */
    public function withoutCategory(): GroupCollectorInterface
    {
        $this->withCategoryInformation();
        $this->query->whereNull('category_transaction_journal.category_id');

        return $this;
    }

    /**
     * @inheritDoc
     */
    public function withoutExternalId(): GroupCollectorInterface
    {
        $this->joinMetaDataTables();
        // TODO not sure if this will work properly.
        $this->query->where(static function (Builder $q1) { // @phpstan-ignore-line
            $q1->where(static function (Builder $q2) {
                $q2->where('journal_meta.name', '=', 'external_id');
                $q2->whereNull('journal_meta.data');
            })->orWhere(static function (Builder $q3) {
                $q3->where('journal_meta.name', '!=', 'external_id');
            })->orWhere(static function (Builder $q4) {
                $q4->whereNull('journal_meta.name');
            });
        });

        return $this;
    }

    /**
     * @inheritDoc
     */
    public function withoutExternalUrl(): GroupCollectorInterface
    {
        $this->joinMetaDataTables();
        // TODO not sure if this will work properly.
        $this->query->where(static function (Builder $q1) { // @phpstan-ignore-line
            $q1->where(static function (Builder $q2) {
                $q2->where('journal_meta.name', '=', 'external_url');
                $q2->whereNull('journal_meta.data');
            })->orWhere(static function (Builder $q3) {
                $q3->where('journal_meta.name', '!=', 'external_url');
            })->orWhere(static function (Builder $q4) {
                $q4->whereNull('journal_meta.name');
            });
        });

        return $this;
    }

    /**
     * @return GroupCollectorInterface
     */
    public function withoutNotes(): GroupCollectorInterface
    {
        $this->withNotes();
        $this->query->where(static function (Builder $q) { // @phpstan-ignore-line
            $q->whereNull('notes.text');
            $q->orWhere('notes.text', '');
        });

        return $this;
    }

    /**
     * Where has no tags.
     *
     * @return GroupCollectorInterface
     */
    public function withoutTags(): GroupCollectorInterface
    {
        $this->withTagInformation();
        $this->query->whereNull('tag_transaction_journal.tag_id');

        return $this;
    }
}

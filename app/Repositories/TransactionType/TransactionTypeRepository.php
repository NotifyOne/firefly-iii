<?php
/**
 * TransactionTypeRepository.php
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

namespace FireflyIII\Repositories\TransactionType;

use FireflyIII\Models\TransactionType;
use Illuminate\Support\Collection;

/**
 * Class TransactionTypeRepository
 */
class TransactionTypeRepository implements TransactionTypeRepositoryInterface
{
    /**
     * @param TransactionType|null $type
     * @param string|null          $typeString
     *
     * @return TransactionType
     */
    public function findTransactionType(?TransactionType $type, ?string $typeString): TransactionType
    {
        app('log')->debug('Now looking for a transaction type.');
        if (null !== $type) {
            app('log')->debug(sprintf('Found $type in parameters, its %s. Will return it.', $type->type));

            return $type;
        }
        $typeString ??= TransactionType::WITHDRAWAL;
        $search     = $this->findByType($typeString);
        if (null === $search) {
            $search = $this->findByType(TransactionType::WITHDRAWAL);
        }
        app('log')->debug(sprintf('Tried to search for "%s", came up with "%s". Will return it.', $typeString, $search->type));

        return $search;
    }

    /**
     * @param string $type
     *
     * @return TransactionType|null
     */
    public function findByType(string $type): ?TransactionType
    {
        $search = ucfirst($type);

        return TransactionType::whereType($search)->first();
    }

    /**
     * @param string $query
     * @param int    $limit
     *
     * @return Collection
     */
    public function searchTypes(string $query, int $limit): Collection
    {
        if ('' === $query) {
            return TransactionType::get();
        }

        return TransactionType::where('type', 'LIKE', sprintf('%%%s%%', $query))->take($limit)->get();
    }
}

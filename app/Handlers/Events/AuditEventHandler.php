<?php
/*
 * AuditEventHandler.php
 * Copyright (c) 2022 james@firefly-iii.org
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

namespace FireflyIII\Handlers\Events;

use FireflyIII\Events\TriggeredAuditLog;
use FireflyIII\Models\AuditLogEntry;

class AuditEventHandler
{

    /**
     * @param TriggeredAuditLog $event
     * @return void
     */
    public function storeAuditEvent(TriggeredAuditLog $event)
    {
        $auditLogEntry = new AuditLogEntry;
        $auditLogEntry->auditable()->associate($event->auditable);
        $auditLogEntry->changer()->associate($event->changer);
        $auditLogEntry->action  = $event->field;
        $auditLogEntry->before = $event->before;
        $auditLogEntry->after  = $event->after;
        $auditLogEntry->save();
    }

}

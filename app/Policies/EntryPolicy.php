<?php

namespace App\Policies;

use Illuminate\Support\Str;
use Statamic\Policies\EntryPolicy as BaseEntryPolicy;

class EntryPolicy extends BaseEntryPolicy
{
    public function edit($user, $entry)
    {
        if (
            $user->hasPermission("edit own {$entry->collection()} entries")
            && Str::slug($user->name) === $entry->slug()
        ) {
            return true;
        }

        return parent::edit($user, $entry);
    }
}

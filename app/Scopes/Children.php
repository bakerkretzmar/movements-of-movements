<?php

namespace App\Scopes;

use Statamic\Query\Scopes\Scope;

class Children extends Scope
{
    /**
     * Apply the scope.
     *
     * @param \Statamic\Query\Builder $query
     * @param array $values
     * @return void
     */
    public function apply($query, $values)
    {
        // $query->whereHas('parent')->where('parent', $values->parent);
    }
}

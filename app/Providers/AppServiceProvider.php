<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Statamic\Facades\Permission;
use Statamic\Statamic;

class AppServiceProvider extends ServiceProvider
{
    public function boot()
    {
        $this->app->booted(function () {
            Permission::get('view {collection} entries')->addChild(
                Permission::make('edit own {collection} entries')->label('Edit own entries')
            );
        });

        // Statamic::script('app', 'cp');
        // Statamic::style('app', 'cp');
    }

    public function register()
    {
        //
    }
}

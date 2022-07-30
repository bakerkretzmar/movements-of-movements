The Movements of Movements
==========================

## Deploying

- Run `php artisan key:generate`
- Update `.env` in Forge
- Sync assets by running `composer sync-public-assets` **locally**

Latest Forge deploy script:

```bash
cd /home/forge/movementsofmovements.net

git pull origin master

[[ "$(git show -s --format='%h %s')" =~ "[bot]" ]] && exit 0;

composer install --no-interaction --optimize-autoloader --prefer-dist --no-dev

npm ci && npm run prod

( flock -w 10 9 || exit 1
    echo 'Restarting FPM...'; sudo -S service php7.4-fpm reload ) 9>/tmp/fpmlock
```

## Archive

The previous WordPress site is archived in this repository and online at [archive.movementsofmovements.net](https://archive.movementsofmovements.net). It was generated with `wget --mirror --convert-links --backup-converted --adjust-extension https://movementsofmovements.net`.

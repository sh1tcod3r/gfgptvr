To run, follow:
```
git clone ...
cd gfgptvr
cp gfgptvr/.env.example gfgptvr/.env
cp services/.env.example services/.env
cd services
docker-compose up
```

Run composer:
```
docker exec -it gfgptvr_app composer install
```

Run migrations:
```
docker exec -it gfgptvr_app php artisan migrate:fresh 
```

Visit: http://127.0.0.1:112

Run tests:
```
docker exec -it gfgptvr_app php artisan test
```

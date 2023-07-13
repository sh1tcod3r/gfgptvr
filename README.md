People spend ridiculous amount of time in front of their devices. We are social animals who require social interactions; we need others, yet we are losing our ability to communicate in real life. That leads to suffering in form of anxiety and depression. VR and AI technologies will become increasingly better and better. One day it will be indistinguishable from real life. This will probably lead to the annihilation of human species, but before that, there will be a golden age of AI and VR, especially when combined.

With these technologies we might fix some of the problems people face; people who do not know how to communicate with others and who undergo great deal of pain because of social anxiety and isolation. They will be able to practice it with AI ([exposure therapy](https://en.wikipedia.org/wiki/Exposure_therapy)) first, before pursuing it in real life. The goal is to make people go outside.

Want to save the world? You will not. But some suffering might be alleviated through this type of work I believe. Believe in this? Are you a graphic designer or a threejs dev? Or just want to chat? Contact me on Twitter.

--------


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

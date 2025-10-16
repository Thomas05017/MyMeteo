per far partire il progetto eseguire questi comandi:

docker run --rm -u "$(id -u):$(id -g)" -v "$PWD":/work -w /work composer install
docker compose up -d --build
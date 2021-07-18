release: python backend/manage.py makemigrations --no-input
release: python backend/manage.py migrate --no-input

web: gunicorn backend/startvest_api.wsgi --log-file -
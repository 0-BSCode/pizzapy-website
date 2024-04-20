# !usr/bin/env bash

echo "Installing python dependencies..."
python -m pip install -r requirements.txt
echo "Installing node dependencies..."
cd PizzaPyWebApp/js_lib && npm i
cd ..

echo "Collecting static files..."
python manage.py collectstatic
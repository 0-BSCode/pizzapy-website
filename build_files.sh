# !usr/bin/env bash

echo "Installing python dependencies..."
pip install -r requirements.txt --encoding=utf-16-le
echo "Installing node dependencies..."
cd PizzaPyWebApp/js_lib && npm i

echo "Collecting static files..."
cd .. && python manage.py collectstatic
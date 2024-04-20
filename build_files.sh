# !usr/bin/env bash

echo "Installing python dependencies..."
pip3 install -r requirements.txt
echo "Installing node dependencies..."
cd PizzaPyWebApp/js_lib && npm i

echo "Collecting static files..."
cd .. && python3 manage.py collectstatic -y
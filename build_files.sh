# !usr/bin/env bash

echo "Installing python dependencies..."
python -m pip install -r requirements.txt
echo "Installing node dependencies..."
cd PizzaPyWebApp/js_lib && npm i

echo "Collecting static files..."
cd .. && python3 manage.py collectstatic --no-input
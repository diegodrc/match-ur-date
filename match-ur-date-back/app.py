from flask import Flask
from web.routes import web
from web.api import api

app = Flask(__name__)

app.register_blueprint(web)
app.register_blueprint(api)

app.config['MONGODB_SETTINGS'] = {
    'db': 'match_ur_date_database',
    'host': 'localhost',
    'port': 8999
}

from flask import Flask
from flask_mongoengine import MongoEngine
from web.routes import web
from web.api import api

app = Flask(__name__)

app.register_blueprint(web)
app.register_blueprint(api)

# app.config['MONGODB_SETTINGS'] = {
#     'db': 'your_database',
#     'host': 'localhost',
#     'port': 5000
# }
# db = MongoEngine()
# db.init_app(app)

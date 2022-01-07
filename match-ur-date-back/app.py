from flask import Flask
from routes import web
from api import api

app = Flask(__name__)

app.register_blueprint(web)
app.register_blueprint(api)
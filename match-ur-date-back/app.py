from flask import Flask
from web.routes import web
from web.api import api

app = Flask(__name__)

app.register_blueprint(web)
app.register_blueprint(api)
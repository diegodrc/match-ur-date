from flask import Flask
from routes import web
from api import api
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.register_blueprint(web)
app.register_blueprint(api)
from flask import Blueprint, Flask, request, Response
from db import initialize_db
from models import Movie

api = Blueprint('api', __name__)

'''
    Aqui vão as rotas de api
'''
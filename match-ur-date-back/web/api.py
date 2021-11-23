from flask import Blueprint, Flask, request, Response
from database.db import initialize_db
from database.models.movie import Movie

api = Blueprint('api', __name__)

'''
    Aqui vão as rotas de api
'''
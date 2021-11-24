from flask import Blueprint, Flask, request, Response
from db import initialize_db
from models import Movie

web = Blueprint('app', __name__)

'''
    Aqui vão as rotas para as páginas web
'''

@web.route('/')
def hello():
    return 'Oi, Vadias'
from flask import Blueprint

web = Blueprint('app', __name__)

'''
    Aqui vão as rotas para as páginas web
'''

@web.route('/')
def hello():
    return 'Oi, Vadias'
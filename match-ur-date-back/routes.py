from flask import Blueprint, Flask, request, Response
import db

web = Blueprint('app', __name__)

'''
    Aqui vão as rotas para as páginas web
'''

@web.route('/')
def hello():
    return 'Oi, Vadias'

@web.route("/test")
def test():
    db.db.collection.insert_one({"name": "John"})
    return "Connected to the data base!"

@web.route("/genres")
def genres():
    genres = {doc['id']: doc['name']  for doc in db.db.genres.find()}
    return genres
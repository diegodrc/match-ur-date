import db
from flask import Blueprint, Flask, request, Response, jsonify
import requests, json
from constants import Endpoint
import random


api = Blueprint('api', __name__)

'''
    Aqui vão as rotas de api
'''

def randon_key():
    chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
    key = ""
    for x in range(0, 8):
        key_char = random.choice(chars)
        key = key + key_char
    return key

@api.route('/get_movie_by_id', methods=['GET'])
def get_movie_by_id(movie_id):
    url = Endpoint.GET_DATA_BY_ID.value
    url = url.replace('%Movie_id%', movie_id)
    response = requests.get(url)
    if response.status_code == 200:
        array = response.json()
        text = json.dumps(array)
        return(text)
    else:
        return("error")

@api.route('/get_movie_by_genre', methods=['GET'])
def get_film_by_genre(genre_id):
    url = Endpoint.GET_MOVIES_BY_GENRE.value
    url = url.replace('%genre%', genre_id)
    response = requests.get(url)
    if response.status_code == 200:
        array = response.json()
        text = json.dumps(array)
        return(text)
    else:
        return("error")

@api.route('/', methods=['GET'])
def get_movies_by_genre(genre):
    url = Endpoint.GET_MOVIES_BY_GENRE.value
    url = url.replace('%genre%', genre)
    response = requests.get(url)
    if response.status_code == 200:
        array = response.json()
        text = json.dumps(array)
        return(text)
    else:
        return("error")

@api.route('/nova_sessao/<list_category>', methods=['POST'])
def nova_sessao(list_category):
    key = randon_key()
    db.db.sessions.insert_one({
        "sessionId": key,
        "categoryId": list_category,
        "liked1": [],
        "liked2": [],
        "matched": False,
        "matched_movie": None})
    response = jsonify({key: key})
    return response

@api.route('/verificar_sessao', methods=['GET','POST'])
def verificar_sessao(sessionID):
    session = db.db.collection.find_one_or_404({"_id": sessionID})
    return session

@api.route('/deu_like', methods=['GET','POST'])
def deu_like(sessionID, liked_movie):

    result = db.todos.update_one({'sessionId': sessionID}, {"$set": {'title': "updated title"}})
    return result.raw_result

@api.route('/genres', methods=['GET'])
def genres():
    response = jsonify({doc['id']: doc['name']  for doc in db.db.genres.find()})
    return response
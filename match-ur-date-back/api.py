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

@api.route('/nova_sessao/<genre_id>', methods=['POST'])
def nova_sessao(genre_id):
    url = Endpoint.GET_MOVIES_BY_GENRE.value.replace('%genre%', genre_id)
    r = requests.get(url)
    key = randon_key()
    db.db.sessions.insert_one({
        "sessionId": key,
        "movies": r.json()['results'],
        "liked1": [],
        "liked2": [],
        "next1": 0,
        "next2": 0,
        "matched": False,
        "matched_movie": None})
    response = jsonify({'key': key})
    return response

@api.route('/genres', methods=['GET'])
def genres():
    response = jsonify({doc['id']: doc['name']  for doc in db.db.genres.find()})
    return response

@api.route('/get_movie', methods=['GET'])
def get_movie():
    args = request.args.to_dict()
    session = db.db.sessions.find_one({ "sessionId": args['session'] })
    movie = session['movies'][session['next'+str(args['user'])]]
    response = jsonify({'movie': movie})
    return response
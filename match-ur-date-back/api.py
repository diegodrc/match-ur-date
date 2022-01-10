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
    db.db.sessions.update_one({ "sessionId": args['session'] }, { "$set": { 'next'+ str(args['user']): session['next'+ str(args['user'])] + 1 } })
    movie = session['movies'][session['next'+str(args['user'])]]
    response = jsonify({'movie': movie, 'id': session['next'+ str(args['user'])]})
    return response

@api.route('/like_movie', methods=['POST'])
def like_movie():
    args = request.args.to_dict()
    session = db.db.sessions.find_one({ "sessionId": args['session'] })
    if(len(set(session["liked1"]) & set(session["liked2"])) == 0):
        db.db.sessions.update_one({ "sessionId": args['session'] }, 
                                { "$set": { 'liked'+ str(args['user']): session['liked'+ str(args['user'])] + [int(args['id'])] } })
        session = db.db.sessions.find_one({ "sessionId": args['session'] })
    response = jsonify({'match': len(set(session["liked1"]) & set(session["liked2"])) > 0 })
    return response

@api.route('/check_match', methods=['GET'])
def check_match():
    args = request.args.to_dict()
    session = db.db.sessions.find_one({ "sessionId": args['session'] })
    response = jsonify({'match': len(set(session["liked1"]) & set(session["liked2"])) > 0 })
    return response
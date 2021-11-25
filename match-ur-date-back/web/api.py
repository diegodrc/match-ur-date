from flask import Blueprint, Flask, request, Response
import requests, json, re
from constants import Endpoint

api = Blueprint('api', __name__)

'''
    Aqui vão as rotas de api
'''

@api.route('/get_data_by_id', methods=['GET'])
def get_data_by_id(movie_id):
    url = Endpoint.GET_DATA_BY_ID.value
    url = url.replace('%Movie_id%', movie_id)
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
from enum import Enum

API_KEY = '82a95d6a8c973b85c31cdf7a42aa6e0a'

class Endpoint(Enum):
    GET_DATA_BY_ID = 'https://api.themoviedb.org/3/movie/%Movie_id%?api_key='+API_KEY+'&language=pt-BR'
    GET_MOVIES_BY_GENRE = 'https://api.themoviedb.org/3/discover/movie?api_key='+API_KEY+'&language=pt-BR-US&with_genres=%genre%'

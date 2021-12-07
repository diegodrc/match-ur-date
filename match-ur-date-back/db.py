from flask import Flask
from flask_pymongo import pymongo

CONNECTION_STRING = "mongodb+srv://admin:admin@cluster0.bgmxs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

client = pymongo.MongoClient(CONNECTION_STRING)
db = client.get_database('match-ur-date-db')
user_collection = pymongo.collection.Collection(db, 'room')
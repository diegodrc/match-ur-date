from .db import db

class Movie(db.Document):
    movieid = db.intField(unique = True, required=True)
    title = db.StringField(required=True)
    casts = db.ListField(db.StringField(), required=True)
    genres = db.ListField(db.StringField(), required=True)
    overview = db.ListField(required=True)
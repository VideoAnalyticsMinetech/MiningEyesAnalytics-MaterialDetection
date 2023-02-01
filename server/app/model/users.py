from app import db
from datetime import datetime

class Users(db.Model):
    id = db.Column(db.BigInteger, primary_key=True, autoincrement=True)
    username = db.Column(db.String(45), index=True, nullable=False)
    password = db.Column(db.String(250), nullable=False)
    role = db.Column(db.String(45), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)
    name = db.Column(db.String(100), nullable=True)
    company = db.Column(db.String(100), nullable=True)

    def __repr__(self):
        return '<Users {}>'.format(self.name)
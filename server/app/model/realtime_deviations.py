from app import db
from datetime import datetime
from app.model.realtime_images import Realtime_images
from app.model.users import Users

class Realtime_deviations(db.Model):
    id = db.Column(db.BigInteger, primary_key=True, autoincrement=True)
    realtime_images_id = db.Column(db.BigInteger, db.ForeignKey(Realtime_images.id))
    user_id = db.Column(db.BigInteger, db.ForeignKey(Users.id), nullable=True)
    type_validation = db.Column(db.String(100), nullable=False)
    type_object = db.Column(db.String(100), nullable=False)
    violate_count = db.Column(db.BigInteger, nullable=True)
    comment = db.Column(db.String(250), nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return '<Deviation {}>'.format(self.name)
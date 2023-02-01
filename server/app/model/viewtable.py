from app import db
from datetime import datetime
from app.model.cctv import Cctv
from app.model.users import Users
from app.model.realtime_images import Realtime_images

class Viewtable(db.Model):
    id = db.Column(db.BigInteger, primary_key=True, autoincrement=True)
    realtime_images_id = db.Column(db.BigInteger, db.ForeignKey(Realtime_images.id))
    user_id = db.Column(db.BigInteger, db.ForeignKey(Users.id), nullable=True)
    type_validation = db.Column(db.String(100), nullable=False)
    type_object = db.Column(db.String(100), nullable=False)
    violate_count = db.Column(db.BigInteger, nullable=True)
    comment = db.Column(db.String(250), nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)
    image = db.Column(db.String(100), nullable=False)
    cctv_id = db.Column(db.BigInteger, db.ForeignKey(Cctv.id))
    name = db.Column(db.String(45), nullable=False)
    location = db.Column(db.String(45), nullable=False)
    ip = db.Column(db.String(45), nullable=False)
    username = db.Column(db.String(45), nullable=False)
    user_name = db.Column(db.String(100), nullable=True)

    def __repr__(self):
        return '<Viewtable {}>'.format(self.name)

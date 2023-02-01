from app import db
from datetime import datetime
from app.model.cctv import Cctv

class Realtime_images(db.Model):
    id = db.Column(db.BigInteger, primary_key=True, autoincrement=True)
    cctv_id = db.Column(db.BigInteger, db.ForeignKey(Cctv.id))
    image = db.Column(db.String(100), nullable=False)
    count_hd = db.Column(db.BigInteger, nullable=True)
    count_lv = db.Column(db.BigInteger, nullable=True)
    avg_panjang_bbox_hd = db.Column(db.Float, nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return '<Image {}>'.format(self.name)
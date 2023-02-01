from audioop import reverse
from app.model.realtime_images import Realtime_images
from app.model.realtime_deviations import Realtime_deviations
from app import response, app, db
from sqlalchemy import desc
from flask import request

def index():
    try:
        image = Realtime_images.query.all()
        imagedata = formatArray(image)
        
        return response.success(imagedata, "Success")

    except Exception as e:
        print(e)

def formatArray(datas):
    array = []
    
    for i in datas:
        array.append(singleObject(i))

    return array

def singleObject(data):
    data = {
        'id' : data.id,
        'cctv_id' : data.cctv_id,
        'image' : data.image,
        'count_hd' : data.count_hd,
        'count_lv' : data.count_lv,
        'avg_panjang_bbox_hd' : data.avg_panjang_bbox_hd,
        'created_at' : data.created_at,
        'updated_at' : data.updated_at
    }

    return data

def imageDetail(id):
    try:
        image = Realtime_images.query.filter_by(id=id).first()
        deviations = Realtime_deviations.query.filter(Realtime_deviations.realtime_images_id == id)

        if not image:
            return response.badRequest([], 'Tidak ada data realtime image')

        deviationdata = formatDeviation(deviations)
        data = singleDetailObject(image, deviationdata)

        return response.success(data, "Success")

    except Exception as e:
        print(e)

def singleDetailObject(image, deviationdata):
    data = {
        'id' : image.id,
        'cctv_id' : image.cctv_id,
        'image' : image.image,
        'count_hd' : image.count_hd,
        'count_lv' : image.count_lv,
        'avg_panjang_bbox_hd' : image.avg_panjang_bbox_hd,
        'created_at' : image.created_at,
        'updated_at' : image.updated_at,
        'realtime_deviation' : deviationdata
    }

    return data

def singleDeviation(deviation):
    data = {
        'id' : deviation.id,
        'user_id' : deviation.user_id,
        'type_validation' : deviation.type_validation,
        'type_object' : deviation.type_object,
        'violate_count' : deviation.violate_count,
        'comment' : deviation.comment,
        'created_at' : deviation.created_at,
        'updated_at' : deviation.updated_at
    }

    return data

def formatDeviation(data):
    array = []
    for i in data:
        array.append(singleDeviation(i))
    
    return array
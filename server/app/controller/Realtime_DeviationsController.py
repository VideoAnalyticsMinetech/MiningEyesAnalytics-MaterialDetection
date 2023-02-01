from app.model.realtime_deviations import Realtime_deviations
from app import response, app, db
from flask import request

def index():
    try:
        deviation = Realtime_deviations.query.all()
        data = formatarray(deviation)
        
        return response.success(data, "Success")

    except Exception as e:
        print(e)

def formatarray(datas):
    array = []
    
    for i in datas:
        array.append(singleObject(i))

    return array

def singleObject(data):
    data = {
        'id' : data.id,
        'realtime_images_id' : data.realtime_images_id,
        'user_id' : data.user_id,
        'type_validation' : data.type_validation,
        'type_object' : data.type_object,
        'violate_count' : data.violate_count,
        'comment' : data.comment,
        'created_at' : data.created_at,
        'updated_at' : data.updated_at
    }

    return data

def detail(id):
    try:
        deviation = Realtime_deviations.query.filter_by(id=id).first()

        if not deviation:
            return response.badRequest([], 'Tidak ada data cctv')

        data = formatArrayDetail(deviation)
        
        return response.success(data, "Success")

    except Exception as e:
        print(e)

def formatArrayDetail(data):
    array = []
    
    array.append(singleObjectDetail(data))

    return array

def singleObjectDetail(data):
    data = {
        'id' : data.id,
        'realtime_images_id' : data.realtime_images_id,
        'user_id' : data.user_id,
        'type_validation' : data.type_validation,
        'type_object' : data.type_object,
        'violate_count' : data.violate_count,
        'comment' : data.comment,
        'created_at' : data.created_at,
        'updated_at' : data.updated_at
    }

    return data

def update(id):
    try:
        type_validation = request.form.get('type_validation')
        comment = request.form.get('comment')
        user_id = request.form.get('user_id')

        input = [
            {
                'type_validation' : type_validation,
                'comment' : comment,
                'user_id' : user_id
            }
        ]

        deviation = Realtime_deviations.query.filter_by(id=id).first()
        deviation.type_validation = type_validation
        deviation.comment = comment
        deviation.user_id = user_id

        db.session.commit()

        return response.success(input, 'Sukses update data')

    except Exception as e:
        print(e)
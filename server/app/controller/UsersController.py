from app.model.users import Users
from app import response, app, db
from flask import request

def index():
    try:
        user = Users.query.all()
        data = formatarray(user)
        
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
        'username' : data.username,
        'password' : data.password,
        'role' : data.role,
        'created_at' : data.created_at,
        'updated_at' : data.updated_at,
        'name' : data.name,
        'company' : data.company
    }

    return data

def detail(username):
    try:
        user = Users.query.filter_by(username=username).first()

        if not user:
            return response.success({'status' : "Failed"}, "Failed")

        return response.success({'status' : "Success"}, "Success")

    except Exception as e:
        print(e)
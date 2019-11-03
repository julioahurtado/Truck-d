from flask import Flask, request, Response
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)

@app.route("/<string:query>",  methods=['OPTIONS'])
@cross_origin()
def preflightBypass(query):
    return "OPTIONS RECIEVED: " + query

@app.route("/<string:query>",  methods=['GET'])
@cross_origin()
def getTest(query):
    print('GET: ' + query)
    return "GET RECIEVED: " + query

    
@app.route("/<string:query>",  methods=['DELETE'])
@cross_origin()
def deleteTest(query):
    print('DELETE: ' + query)
    return "DELETE RECIEVED: " + query

@app.route("/",  methods=['POST'])
@cross_origin()
def postTest():
    payload = request.get_json(force=True)
    print('POST: ' + str(payload))
    return payload


# Sign in demo code
vendors = {
    'a@gmail.com': 'abc123',
    'b@gmail.com': 'password',
    'c@gmail.com': 'cse115'
}


@app.route("/authenticatevendor",  methods=['POST'])
@cross_origin()
def authVendor():
    payload = request.get_json(force=True)

    if payload['email'] in vendors.keys() and vendors[payload['email']] == payload['password']:
        resp = Response('Authenticated', 200)
        return resp
    else:
        resp = Response('Not Authenticated', 401)
        return resp

    return Response('Server ERROR', 500)


@app.route("/createVendorAccount",  methods=['POST'])
@cross_origin()
def createVendor():
    payload = request.get_json(force=True)

    if payload['email'] in vendors.keys():
        resp = Response('User found with same email', 409)
        return resp
    else:
        vendors[payload['email']] = payload['password']
        resp = Response('User creation successful', 201)
        print(vendors)
        return resp

    return Response('Server ERROR', 500)



if __name__ == "__main__":
    app.run(debug=True)
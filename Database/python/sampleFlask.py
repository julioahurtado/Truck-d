from flask import Flask, request, Response
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)

@app.route("/<string:query>",  methods=['OPTIONS'])
@cross_origin()
def preflightBypass(query):
    return "OPTIONS RECIEVED: " + query

# vendor search test data
test_vendors = '[{"name":"Test","description":"Description","cuisine":"Cuisine","hours":"10:00 AM - 9:00 PM","phone":1234567890,"city":"City","state":"State","address":"Address","menu":[{"name":"Food,"description":"Food Description","price":1}]},{"name":"Test 2","description":"Description for test vendor","cuisine":"Test Cuisine","hours":"10:00 AM - 3:00 PM","phone":4234,"city":"4sdf","state":"zxc","address":"sdf","menu":[{"name":"food ff","description":"faood s","price":134}]}]'
@app.route("/<string:query>",  methods=['GET'])
@cross_origin()
def getTest(query):
    print('GET: ' + query)
    return test_vendors
    
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

# vendor SignIn/SignUp test data
vendor_auth = '{"name":"Test","description":"Description for vendor","cuisine":"Test Cuisine","hours":"10:00 AM - 9:00 PM","phone":1234567890,"city":"City","state":"State","address":"Address","menu":[{"name":"food item","description":"food description","price":1}]}'
@app.route("/authenticatevendor",  methods=['POST'])
@cross_origin()
def authVendor():
    payload = request.get_json(force=True)

    if payload['email'] in vendors.keys() and vendors[payload['email']] == payload['password']:
        resp = Response('Authenticated', 200)
        return vendor_auth
    else:
        resp = Response('Not Authenticated', 401)
        return '{}'

    return Response('Server ERROR', 500)


@app.route("/createVendorAccount",  methods=['POST'])
@cross_origin()
def createVendor():
    payload = request.get_json(force=True)

    if payload['email'] in vendors.keys():
        resp = Response('User found with same email', 409)
        return vendor_auth
    else:
        vendors[payload['email']] = payload['password']
        resp = Response('User creation successful', 201)
        print(vendors)
        return '{}'

    return Response('Server ERROR', 500)



if __name__ == "__main__":
    app.run(debug=True)
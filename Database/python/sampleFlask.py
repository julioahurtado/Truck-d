from flask import Flask, request
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
    return "POST RECIEVED"


if __name__ == "__main__":
    app.run(debug=True)
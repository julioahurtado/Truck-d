from flask import Flask, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)

@app.route("/",  methods=['GET'])
@cross_origin()
def getTest():
    return "GET RECIEVED"

@app.route("/",  methods=['POST'])
@cross_origin()
def postTest():
    payload = request.get_json(force=True)
    print(payload)
    return "POST RECIEVED"

@app.route("/",  methods=['OPTIONS'])
@cross_origin()
def preflightBypass():
    return "OPTIONS RECIEVED"

if __name__ == "__main__":
    app.run(debug=True)
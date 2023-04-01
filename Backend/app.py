from flask import Flask, render_template, redirect, url_for, request, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)

@app.route('/')
def start():
    return "Hello World!"


@app.route('/imed/get-disease/')
@cross_origin()
def get_disease():
    input_value = request.args.get('input')

    data = {'message': input_value + ' ' + str(len(input_value))}
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)
    pass
from flask import Flask, render_template, redirect, url_for, request

app = Flask(__name__)

@app.route('/')
def start():
    return "Hello World!"

@app.route('/imed/get-disease/<input>')
def get_disease(input):
    return f'{input}'

if __name__ == "__main__":
    app.run(debug=True)
    pass
from flask import Flask, render_template, redirect, url_for, request, jsonify
import json
import os
import openai
from dotenv import load_dotenv

load_dotenv()
api_key = os.getenv('OPEN_API_KEY')
openai.api_key = api_key

app = Flask(__name__)

@app.route('/')
def start():
    return "Hello World!"

@app.route('/imed/get-disease/<input>')
def get_disease(input):
    disease = get_gpt_response()
    return f'{input}'


@app.route('/api/process_data', methods=['POST'])
def get_disease():
    input_value = request.args.get('input')
    data = {'message': input_value + ' ' + str(len(input_value))}
   

    response = openai.ChatCompletion.create(
            messages = [{"role": "system", 
                "content": "You are a medical professional that can diagnose patients. Given the patient's issues, please provide a bulletpointed list of symptoms that I could match aginst a symptom database."},
                {"role": "user", "content": prompt}],
            model="gpt-3.5-turbo",
        )   
        text = response.choices[0].message.content
        return text.lower().replace("\n", "").replace(".", "")

    def classify_network_log(log):
    prompt = f"Given the following network log, classify it as normal, suspicious, or malicious. Only return a single word: {log}"
    response = query_gpt_35_turbo(prompt)
    return response

    return jsonify(answer)

if __name__ == "__main__":
    app.run(debug=True)
    pass
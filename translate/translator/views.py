from django.shortcuts import render, HttpResponse
from openai import OpenAI
import os
from dotenv import load_dotenv

load_dotenv()
client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY"),
)
# testing
def index(request):
    return render(request, "index.html")

def translate(request):
    print(request.POST)
    from_lang = request.POST['from']
    to_lang = request.POST['to']
    text = request.POST['userInput']
    response = client.completions.create(
        model="gpt-3.5-turbo-instruct",
        prompt=f'Translate the following {from_lang} text to {to_lang}: "{text}" '
    )
    print(response)

    return HttpResponse(f'{response}')

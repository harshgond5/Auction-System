from fastapi import FastAPI
from pydantic import BaseModel
from openai import OpenAI
import json
from data import PLATFORM_DB, DEFAULT_USER, featuredAuctions
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI()

client = OpenAI(
    api_key=os.getenv("GROQ_API_KEY"),
    base_url="https://api.groq.com/openai/v1"
)

class ChatRequest(BaseModel):
    message: str


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/chat")
def chat(req: ChatRequest):

    sys_inst = f"""
    You are AuctionHub AI Assistant.

    PLATFORM:
    {json.dumps(PLATFORM_DB)}

    AUCTIONS:
    {json.dumps(featuredAuctions)}

    USER:
    {json.dumps(DEFAULT_USER)}

    Instructions:

    - Help buyers
    - Help sellers
    - Compare products
    - Explain auctions
    """

    response = client.chat.completions.create(
        model="llama-3.1-8b-instant",
        messages=[
            {
                "role":"system",
                "content":sys_inst
            },
            {
                "role":"user",
                "content":req.message
            }
        ]
    )

    return {
        "reply":
        response.choices[0].message.content
    }
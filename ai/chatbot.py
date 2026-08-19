from openai import OpenAI

from config import MODEL_NAME, BASE_URL
from prompts import get_system_prompt
from data import PLATFORM_DB, DEFAULT_USER, featuredAuctions


def get_ai_response(message, api_key):

    client = OpenAI(
        api_key=api_key,
        base_url=BASE_URL
    )

    system_prompt = get_system_prompt(
        PLATFORM_DB,
        featuredAuctions,
        DEFAULT_USER
    )

    response = client.chat.completions.create(
        model=MODEL_NAME,
        messages=[
            {
                "role": "system",
                "content": system_prompt
            },
            {
                "role": "user",
                "content": message
            }
        ]
    )

    return response.choices[0].message.content
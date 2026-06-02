from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"message": "ML Service Running"}

@app.post("/predict")
def predict(data: dict):
    return {
        "fraud": False,
        "score": 0.12
    }
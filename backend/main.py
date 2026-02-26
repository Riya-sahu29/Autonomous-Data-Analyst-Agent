from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import shutil
import os
from agent import df
from agent import load_data, ask_agent

app = FastAPI()

# allow frontend connection
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# create data folder if not exists
os.makedirs("../data", exist_ok=True)


@app.get("/")
def root():
    return {"message": "Autonomous Data Analyst Agent running"}


@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    
    file_path = f"../data/{file.filename}"
    
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    
    result = load_data(file_path)
    
    return {"message": result}


@app.get("/ask")
def ask(question: str):
    
    response = ask_agent(question)
    
    return {"answer": response}

@app.get("/data")
def get_data():
    from agent import df 
    if df is None:
        return []
    
    return df.to_dict(orient="records")
import os
import pandas as pd
from dotenv import load_dotenv

from langchain_experimental.agents import create_pandas_dataframe_agent
from langchain_groq import ChatGroq
# load API key
load_dotenv()

# initialize LLM
llm = ChatGroq(
    model="llama-3.3-70b-versatile",
    temperature=0,
    groq_api_key=os.getenv("GROQ_API_KEY")
)

# global dataframe variable
df = None
agent = None

def load_data(file_path):
    global df, agent
    
    try:
        # load CSV
        df = pd.read_csv(file_path)
        
        # create agent
        agent = create_pandas_dataframe_agent(
            llm,
            df,
            verbose=True,
            allow_dangerous_code=True
        )
        
        return "Data loaded successfully"
    
    except Exception as e:
        return f"Error loading data: {str(e)}"



def ask_agent(question):
    global agent
    
    if agent is None:
        return "Please load data first"
    
    response = agent.invoke({"input":question})
    
    return response["output"]
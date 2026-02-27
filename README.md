Autonomous Data Analyst Agent

An AI-powered full-stack web application that allows users to upload datasets, visualize analytics dashboards, and ask natural language questions about their data using an intelligent AI agent.

This project combines FastAPI, React, LangChain, and Groq LLaMA-3 to create an autonomous data analysis system capable of generating insights, answering questions, and displaying visualizations automatically.


Features

• Upload CSV datasets
• Automatic data loading and processing
• AI-powered question answering on datasets
• Interactive analytics dashboard with charts
• FastAPI backend with LangChain agent
• React frontend with modern UI
• Real-time communication between frontend and backend

Tech Stack
Backend

• FastAPI
• LangChain
• Groq LLaMA-3 (llama-3.3-70b-versatile)
• Pandas
• Python

Frontend

• React
• Vite
• Tailwind CSS
• Chart.js / Recharts
• Axios

How It Works

User uploads CSV file from frontend

FastAPI backend loads data using Pandas

LangChain creates AI agent using Groq LLaMA-3

User asks questions in natural language

AI agent analyzes data and returns answers

Dashboard displays charts and analytics

Installation
1. Clone repository
git clone https://github.com/Riya-sahu29/Autonomous-Data-Analyst-Agent.git
cd Autonomous-Data-Analyst-Agent

Backend Setup
cd backend
python -m venv .venv
.venv\Scripts\activate

pip install -r requirements.txt

Frontend Setup
cd frontend
npm install
npm run dev

Example Use Cases

• Sales data analysis
• Student performance analysis
• Financial data insights
• Business intelligence dashboards

Future Improvements

• Support Excel and database files
• Add authentication
• Export reports
• Deploy to cloud
• Multi-file support

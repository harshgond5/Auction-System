# 🔨 AuctionHub - AI Powered Online Auction System

AuctionHub is a full-stack online auction platform that enables users to buy and sell products through live auctions. The platform includes an AI-powered virtual assistant built using FastAPI and Groq LLM to assist buyers and sellers with product comparisons, auction guidance, and platform-related queries.

---

# 📁 Project Structure

```
Auction-System/
│
├── client/                 # React Frontend
│
├── ai/                     # FastAPI AI Backend
│
├── README.md
```

---
# 📌 Development Workflow

Terminal 1

```bash
cd client
npm run dev
```

Terminal 2

```bash
cd ai
.venv\Scripts\activate
uvicorn api:app --reload
```

---

# 🚀 Features

## Frontend (React)

- User Authentication
- Buyer Dashboard
- Seller Dashboard
- Profile Management
- KYC Verification
- Watchlist
- Auction Listings
- Auction Details
- Create Auction
- Settings
- AI Chat Widget
- Responsive UI

---

## AI Assistant

The AI Assistant helps users with:

- Product comparisons
- Auction recommendations
- Bidding guidance
- Selling guidance
- Wallet related questions
- Platform FAQs
- AuctionHub specific information

The assistant uses:

- Groq API
- Llama 3.1 8B Instant
- FastAPI
- Axios
- React Chat Widget

---

# 🖥️ Frontend Setup

Navigate to client folder

```bash
cd client
```

Install dependencies

```bash
npm install
```

Start development server

```bash
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

# 🤖 AI Backend Setup

Navigate to AI folder

```bash
cd ai
```

Create Virtual Environment

Windows

```bash
python -m venv .venv
```

Activate

```bash
.venv\Scripts\activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

---

# 🔑 Configure API Key

Create

```
ai/.streamlit/secrets.toml
```

Example

```toml
GROQ_API_KEY="YOUR_GROQ_API_KEY"
```

OR

Create a

```
.env
```

file

```env
GROQ_API_KEY=YOUR_GROQ_API_KEY
```

**Do NOT commit these files to GitHub.**

---

# ▶️ Run FastAPI Server

```bash
uvicorn api:app --reload
```

Backend runs on

```
http://127.0.0.1:8000
```

Swagger Documentation

```
http://127.0.0.1:8000/docs
```

---

# 💬 AI Communication Flow

```
React Chat Widget
        │
        ▼
Axios POST Request
        │
        ▼
FastAPI (/chat)
        │
        ▼
Groq API
        │
        ▼
Llama 3.1 8B Instant
        │
        ▼
FastAPI Response
        │
        ▼
React Chat Window
```

---



## AI Backend

- FastAPI
- Uvicorn
- Groq API
- OpenAI Python SDK
- Pydantic

## AI Model

- Llama 3.1 8B Instant

---

# ⚠️ Security

Never commit

```
.streamlit/secrets.toml
```

Never commit

```
.env
```

Add them to

```
.gitignore
```

Example

```gitignore
.env
.env.*
ai/.streamlit/secrets.toml
```

---



# 👨‍💻 Author

**Harsh Kumar**

AuctionHub — AI Powered Online Auction Platform
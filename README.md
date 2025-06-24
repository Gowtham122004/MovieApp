MovieApp
MovieApp is a React-based application that allows users to search for movies using the OMDb API. Users can register and log in using Firebase Authentication.

🔥 Features
🎬 Search movies using the OMDb API

🔐 Firebase Authentication (Login/Register)

🧪 Debounced search for better performance

⚡ Clean and responsive UI

🧠 Tech Stack
Frontend:

React

React Router

CSS (or your choice: Tailwind / Bootstrap)

Authentication:

Firebase Auth

API Integration:

OMDb API

🚀 Getting Started
Prerequisites
Node.js and npm

OMDb API key (Get one from http://www.omdbapi.com/apikey.aspx)

Firebase project with Authentication enabled

Installation
bash
Copy
Edit
# Clone the repo
git clone https://github.com/Gowtham122004/MovieApp.git
cd MovieApp

# Install dependencies
npm install
Environment Variables
Create a .env file in the root of the project:

ini
Copy
Edit
REACT_APP_MOVIE_KEY=your_omdb_api_key_here
⚠️ Do not commit .env file to GitHub.

Run the App
bash
Copy
Edit
npm start
🗂 Folder Structure
pgsql
Copy
Edit
MovieApp/
├── public/
├── src/
│   ├── components/
│   │   ├── MovieCard.js
│   │   ├── AuthForm.js
│   ├── hooks/
│   │   └── useFetch.js
│   ├── pages/
│   │   └── Home.js
│   ├── App.js
│   └── index.js
├── .env
├── package.json
└── README.md
📸 Screenshots
(You can add screenshots of your UI here)

✅ To Be Implemented
 Save favorites using localStorage

 "Favorites" tab to display saved movies

 Persist user preferences

 Backend integration with MongoDB (if needed)



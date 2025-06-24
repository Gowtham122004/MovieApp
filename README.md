# MovieApp

MovieApp is a React-based application that allows users to search for movies using the OMDb API. Users can register and log in using Firebase Authentication.

## 🔥 Features

* 🎬 Search movies using the OMDb API
* 🔐 Firebase Authentication (Login/Register)
* 🧪 Debounced search for better performance
* ⚡ Clean and responsive UI

## 🧠 Tech Stack

**Frontend:**

* React
* React Router
* CSS (or your choice: Tailwind / Bootstrap)

**Authentication:**

* Firebase Auth

**API Integration:**

* OMDb API

## 🚀 Getting Started

### Prerequisites

* Node.js and npm
* OMDb API key ([Get one from here](http://www.omdbapi.com/apikey.aspx))
* Firebase project with Authentication enabled

### Installation

```bash
# Clone the repo
git clone https://github.com/Gowtham122004/MovieApp.git
cd MovieApp

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root of the project:

```
REACT_APP_MOVIE_KEY=your_omdb_api_key_here
```

> ⚠️ Do **not** commit `.env` file to GitHub.

### Run the App

```bash
npm start
```

## 🗂 Folder Structure

```
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
```

## 📸 Screenshots

![image](https://github.com/user-attachments/assets/aa5d7da1-1f1d-48db-bee3-d0877353343f)

![image](https://github.com/user-attachments/assets/5a3282c0-376c-4153-887f-29f004eaf038)
![image](https://github.com/user-attachments/assets/13077670-f0f8-454a-b2b1-5fd2a730314f)


*(You can add screenshots of your UI here)*

## ✅ To Be Implemented

* [ ] Save favorites using localStorage
* [ ] "Favorites" tab to display saved movies
* [ ] Persist user preferences
* [ ] Backend integration with MongoDB (if needed)


Built with ❤️ by Gowtham

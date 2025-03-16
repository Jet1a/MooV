# MooV (Capstone Project) [![Netlify Status](https://api.netlify.com/api/v1/badges/d1d211d7-137d-4ad2-adf6-4495adab21ed/deploy-status)](https://app.netlify.com/sites/jet1a-moov/deploys)

![image](https://github.com/user-attachments/assets/28930fe8-d1d0-44b2-a821-8f90980584b1)

![image](https://github.com/user-attachments/assets/c98e7423-8c7a-4898-bec5-ff339c56519b)

MooV is a web application that provides a comprehensive database of movies and TV series, displaying essential details such as release date, genre, duration, production studios, cast, crew, trailers, and user reviews. The platform is built using modern web technologies and fetches data from **The Movie Database (TMDB) API**.

## Features

- Browse movies and TV series with detailed information.
- View trailers and promotional videos.
- Explore genres, production studios, and cast details.
- Read and submit user reviews.
- Responsive and stylish UI with SCSS styling.

## Tech Stack

- **Frontend:** TypeScript, React, Next.js
- **Styling:** SCSS
- **Data Source:** TMDB API

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Jet1a/MooV.git
   cd MooV
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file in the root directory and add your TMDB API key:
   ```env
   NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open `http://localhost:3000` in your browser to view the app.

## API Usage

MooV fetches data from **The Movie Database (TMDB)**. You need to obtain an API key from [TMDB](https://www.themoviedb.org/) and set it in the `.env.local` file as shown above.

---

Enjoy using **MooV**! 🎬🍿

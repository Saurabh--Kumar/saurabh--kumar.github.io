# saurabh--kumar.github.io

Personal portfolio website of Saurabh Kumar — Backend Engineer & AI Engineer.

## Features

- Fully static, single-page personal portfolio
- Dynamic content rendering from JSON data files
- Dark/Light theme toggle
- Responsive design with mobile-first breakpoints
- Sections: Hero, Education, Skills, Experience, Projects, Blog, Connect
- No build step, no dependencies, no server-side code

## Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Custom styles with CSS variables for theming
- **Vanilla JavaScript** — Fetch JSON data and render content dynamically

## Project Structure

```
/
├── index.html               # Main single-page application
├── css/
│   └── style.css           # All styles
├── js/
│   ├── app.js              # Main application logic
│   └── loader.js           # Data fetching and rendering
├── data/
│   ├── profile.json        # Personal info, name, bio, avatar
│   ├── education.json      # Education history
│   ├── skills.json         # Technical skills
│   ├── experience.json     # Work history
│   ├── projects.json       # Featured projects
│   ├── blogs.json          # Blog posts
│   └── links.json          # External links
└── assets/                 # Images, icons
```

## Usage

Open `index.html` in a browser to view the portfolio.

### Updating Content

All content is managed via JSON files in the `data/` directory:

- **Profile** → edit `data/profile.json`
- **Education** → edit `data/education.json`
- **Skills** → edit `data/skills.json`
- **Experience** → edit `data/experience.json`
- **Projects** → edit `data/projects.json`
- **Blogs** → edit `data/blogs.json`
- **Links** → edit `data/links.json`

After editing, commit and push the changes. No build or deployment scripts are required.

## Deployment

Deployed automatically via GitHub Pages on push to the main branch.

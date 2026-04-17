# Personal Portfolio Website Architecture

## Overview
A data-driven personal portfolio website using plain HTML/CSS/JS with JSON data files. Designed for minimal maintenance - content updates are made by editing JSON files, and GitHub projects are automatically fetched via the GitHub API.

## Tech Stack
- **HTML5** - Semantic markup
- **CSS3** - Custom styles with CSS variables for theming
- **Vanilla JavaScript** - Fetch JSON data and render content dynamically

## Directory Structure
```
/
├── index.html          # Main single-page application
├── css/
│   └── style.css     # All styles
├── js/
│   ├── app.js       # Main application logic
│   └── loader.js    # Data fetching and rendering
├── data/
│   ├── profile.json    # Personal info, name, bio, avatar
│   ├── skills.json    # Technical skills
│   ├── experience.json # Work history
│   ├── projects.json  # Featured projects
│   └── links.json    # External links (blog,LinkedIn,social)
└── assets/          # Images, icons
```

## Data File Specifications

### data/profile.json
Personal information and basic details.
```json
{
  "name": "Your Name",
  "title": "Your Title",
  "bio": "Short bio about yourself",
  "avatar": "assets/avatar.jpg",
  "location": "City, Country",
  "email": "email@example.com"
}
```

### data/skills.json
Technical skills organized by category.
```json
{
  "categories": [
    {
      "name": "Programming Languages",
      "items": ["JavaScript", "Python", "TypeScript"]
    },
    {
      "name": "Frontend",
      "items": ["React", "HTML", "CSS"]
    },
    {
      "name": "Tools",
      "items": ["Git", "Docker", "VS Code"]
    }
  ]
}
```

### data/experience.json
Work experience and education.
```json
{
  "entries": [
    {
      "type": "work",
      "company": "Company Name",
      "role": "Your Role",
      "startDate": "2023-01",
      "endDate": "Present",
      "description": "What you did...",
      "highlights": ["Key achievement 1", "Key achievement 2"]
    }
  ]
}
```

### data/projects.json
Featured projects to showcase on your portfolio.
```json
{
  "projects": [
    {
      "title": "Project Name",
      "description": "Brief description of the project",
      "technologies": ["Tech1", "Tech2", "Tech3"],
      "githubUrl": "https://github.com/username/project",
      "liveUrl": "https://project-demo.com",
      "featured": true
    }
  ]
}
```

### data/links.json
External links and social profiles.
```json
{
  "links": [
    {
      "name": "Blog",
      "url": "https://yourblog.com",
      "icon": "blog"
    },
    {
      "name": "LinkedIn",
      "url": "https://linkedin.com/in/yourprofile",
      "icon": "linkedin"
    },
    {
      "name": "GitHub",
      "url": "https://github.com/yourusername",
      "icon": "github"
    }
  ]
}
```

## Website Sections

1. **Header/Navigation** - Sticky nav with section links
2. **Hero** - Avatar, name, title, bio, location
3. **Skills** - Categorized skills with visual tags
4. **Experience** - Timeline of work history
5. **Projects** - Featured projects from JSON data
6. **Links** - Quick links to blog, LinkedIn, social
7. **Footer** - Copyright and social icons

## Projects Section

The projects section displays featured projects from `data/projects.json`. Each project entry includes title, description, technologies used, and links to GitHub and live demo.

Projects are manually curated - add only the projects you want to showcase on your portfolio.

No auto-fetching from GitHub - gives you full control over what to display.

## Auto-Update Workflow

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  User edits     │     │  Browser loads │     │  JavaScript    │
│  JSON data file │ --> │  index.html    │ --> │  fetches JSON  │
└─────────────────┘     └─────────────────┘     └─────────────────┘
                                                      │
                                                      v
                                                ┌─────────────────┐
                                                │  Renders DOM    │
                                                │  dynamically   │
                                                └─────────────────┘
```

## Maintenance Guide

### Adding a New Skill
1. Open `data/skills.json`
2. Add skill to appropriate category or create new category
3. Save file - website automatically updates on next load

### Adding Work Experience
1. Open `data/experience.json`
2. Add new entry with company, role, dates, description
3. Save file - appears in experience timeline

### Adding New Link
1. Open `data/links.json`
2. Add new link object with name, url, icon
3. Save file - appears in links section

### Adding/Updating Projects
Add projects to `data/projects.json`. Include title, description, technologies, and URLs.

## Building and Deployment

Since this uses plain HTML/CSS/JS:
- **No build step required**
- **Deploy to GitHub Pages** by pushing to main branch
- **Custom domain** supported via GitHub Pages settings

## Future Enhancements

- [ ] Dark/Light theme toggle with CSS variables
- [ ] Blog section with markdown posts
- [ ] Contact form integration
- [ ] Analytics integration
- [ ] Performance optimization (lazy loading images)
# Inufeed blog

A simple static blog for inufeed, deployed via GitLab Pages. Displays changelog updates in a clean, modern interface.

## Features

- Static HTML/CSS/JavaScript site
- Markdown-based changelog (edit `CHANGELOG.md`)
- Automatic markdown rendering using marked.js
- Responsive design
- Glassmorphism UI with backdrop blur effect

## Structure

```
blog.inufeed/
├── index.html          # Main HTML file
├── CHANGELOG.md        # Markdown changelog (edit this file)
├── css/
│   └── styles.css      # Stylesheet
├── js/
│   └── main.js         # JavaScript for markdown rendering
└── img/
    ├── background.jpg  # Background image
    └── FreshRSS-logo.svg # Logo
```

## Usage

1. Edit `CHANGELOG.md` to update the changelog
2. Commit and push to GitLab
3. GitLab Pages will automatically deploy the site

The changelog is automatically fetched and rendered from `CHANGELOG.md` when the page loads.

## Dependencies

- [marked.js](https://marked.js.org/) - Markdown parser (loaded via CDN)

## GitLab Pages Setup

This project is configured for GitLab Pages. The site will be automatically deployed when you push to the repository.


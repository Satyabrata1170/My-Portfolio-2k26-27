# Personal Portfolio

Premium dark portfolio with a scroll-controlled 3D portrait. Pure HTML, CSS and vanilla JavaScript.

## Structure
- `index.html` page markup
- `css/style.css` all styles
- `js/script.js` all behaviour and the `portfolioData` config (edit your content here)
- `assets/demo.jpg` HERO (home) portrait (replace, keep the filename)
- `assets/about.jpg` ABOUT section photo (replace, keep the filename; paths set by `profileImage` / `aboutImage` in `portfolioData`)
- `assets/demo.png` placeholder thumbnail used by every project and certificate (change per item with the `image` field in `portfolioData`)
- `assets/project-1..3.jpg` spare placeholder images
- `assets/images/logos/demo.png` placeholder logo for Experience & Education cards. Add logos in this folder (e.g. `assembly-global.png`, `college.png`) and set each item's `logo` path in `portfolioData`
- `assets/resume.pdf` your resume (replace, keep the filename)

## Customize
1. Edit `portfolioData` at the top of `js/script.js`: name, links, experience, projects, education, certifications, map location, hero scroll settings.
2. Contact form: connect `sendForm()` in `js/script.js` to EmailJS, Formspree or your API.

## Run
Open `index.html` in a browser (internet needed for Google Fonts and the map). Deploy by uploading the whole folder to Netlify, Vercel or GitHub Pages.

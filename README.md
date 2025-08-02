# iliachry.github.io

> Ideas rendering in real time (some bugs and lag may apply).

My personal website built with Jekyll and the Hacker theme, featuring a custom theme switcher for dark/light modes, comprehensive project portfolio, research publications, and professional information.

## 🌟 Features

- **Dark/Light Theme Toggle**: Switch between classic hacker dark mode and clean light mode
- **Comprehensive Portfolio**: Projects, publications, research, and professional information
- **Consistent Green Branding**: Unified color scheme across both themes
- **Responsive Design**: Works on desktop and mobile devices
- **Jekyll Static Site**: Fast loading and SEO-friendly
- **Custom Styling**: Modified hacker theme with personal touches
- **GitHub Pages Ready**: Automatically deploys via GitHub Pages
- **Professional Signature**: Consistent footer with personality across all pages

## 🎨 Theme Modes

### 🌙 Dark Mode (Default)
- Black background with hacker-style background image
- Green terminal-style text
- Classic hacker aesthetic

### ☀️ Light Mode
- Clean white background
- Consistent green links and styling
- Professional appearance

## 🚀 Getting Started

### Prerequisites
- Ruby (3.2.2 or higher)
- Bundler
- Jekyll

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/iliachry/iliachry.github.io.git
   cd iliachry.github.io
   ```

2. **Install dependencies**
   ```bash
   bundle install
   ```

3. **Run the development server**
   ```bash
   bundle exec jekyll serve
   ```

4. **View the site**
   Open your browser and go to `http://localhost:4000`

## 📁 Site Structure

```
├── _config.yml          # Jekyll configuration
├── _layouts/             # Custom layouts
│   └── default.html      # Main layout with theme switcher
├── _includes/            # Reusable components
├── assets/
│   └── css/
│       └── style.scss    # Main styles with theme switching
├── pages/               # Site content pages
│   ├── about.md         # About page
│   ├── blog.md          # Blog page
│   ├── contact.md       # Contact page
│   ├── project.md       # Projects page
│   ├── publications.md  # Publications page
│   └── research.md      # Research page
├── index.md             # Homepage
└── README.md            # This file
```

## 🛠️ Customization

### Theme Colors
You can customize the theme colors by editing `assets/css/style.scss`:

```scss
// Dark theme colors
body {
  background: #151515 url("../images/bkg.png") 0 0 !important;
  color: #eaeaea !important;
}

// Light theme colors
[data-theme="light"] body {
  background: #ffffff !important;
  color: #000000 !important;
}
```

### Content
- Edit the markdown files (`.md`) to update page content
- Modify `_config.yml` for site-wide settings
- Update `_layouts/default.html` for structural changes

## 🔧 Theme Switcher

The theme switcher is implemented using:
- CSS for styling both themes
- JavaScript for toggling between modes
- LocalStorage for remembering user preference

### How it works:
1. JavaScript toggles the `data-theme="light"` attribute on the body
2. CSS rules target this attribute to apply light theme styles
3. User preference is saved in localStorage

## 📝 Adding Content

### New Pages
1. Create a new `.md` file in the `pages/` directory
2. Add front matter:
   ```yaml
   ---
   layout: default
   title: Your Page Title
   ---
   ```
3. Write your content in Markdown
4. Add the page to navigation in `_layouts/default.html` if needed

### Blog Posts
Add new posts in the `_posts/` directory (create if it doesn't exist) with the naming convention:
`YYYY-MM-DD-title.md`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this repository and customize it for your own use!

## 📧 Contact

- **Website**: [iliachry.github.io](https://iliachry.github.io){:target="_blank"}
- **GitHub**: [@iliachry](https://github.com/iliachry){:target="_blank"}

---

Built with ❤️ and excessive amounts of Coke Zero  
Powered by Jekyll theme hacker • Deployed on GitHub Pages 
# 🤲🏾 WHAP Website
This is the website I put together for Women Helping All People (WHAP), a non-profit that does a lot for the Marin City, CA community. My goal here was to build a modern, easy-to-use site that really shows off their mission, all their awesome programs, and the impact they're making.

## ⚙️ Features
I tried to cover all the bases with this site, based on their previous and existing website. Here's what you'll find:
- **Home Page:** This is like the front door, giving you a quick rundown of what WHAP is all about and their main services.
- **Programs & Services:** This page dives deep into all the different programs WHAP offers, like the After-School "Safe House" and the Computer Learning Center. It's got all the details you'd need.
- **Education:** This section is all about the WHAP Scholastic Academy, their private school, and what makes it special.
- **History:** I put together a timeline here that walks you through how WHAP got started and how it's grown over the years. It's a pretty inspiring story.
- **News & Events:** Wanna know what's happening or what's coming up? This is the spot. I tried to keep it updated with all the latest.
- **About:** Here, you can learn about the amazing people who run WHAP, some of the awards they've received, and any times they've been featured in the media.
- **Contact Us:** If you need to get in touch, this page has all their contact info. There's also a form if you prefer to send a message directly.
- **Support:** This is where you can find out how to lend a hand, whether you're looking to donate or volunteer your time. Every bit helps, for real.

## 🛠️ System Requirements
To get this project up and running on your own machine, you'll need a few things installed. It's pretty standard stuff for a web project:
- **Node.js:** You'll need version 18 or newer.
- **npm** (Node Package Manager) or **Yarn:** Either one works for managing the project's dependencies.
- **Git:** This is how you'll grab the code from GitHub.

## 👷 Installation/Setup
Alright, let's get you set up. It's pretty straightforward:

1.  **Clone the repository:** First, you gotta get the code onto your computer. Open up your terminal and run this:

    ```bash
    git clone https://github.com/daaimah123/WHAP_Website.git
    cd WHAP_Website
    ```

2.  **Install dependencies:** Once you're in the project folder, you need to install all the bits and pieces the project relies on. This might take a minute, so grab a coffee or something.

    ```bash
    npm install
    # Or, if you're a Yarn person:
    yarn install
    ```

3.  **Clean up Git tracking (if needed):** If you've had any trouble pushing to GitHub before, especially with "large file" errors, it might be because some big files (like `node_modules`) got accidentally tracked. I've included a `.gitignore` file to prevent this, but if you've already committed them, you might need to clean up your Git history. This command helps make sure you're only tracking the actual source code:

    ```bash
    git rm -r --cached .
    git add .
    git commit -m "Clean up repository tracking"
    ```

    After this, you should be good to go for future pushes.

## 🙆 User Guide
Once you've got the site running locally, navigating it is super intuitive. I tried to make it as user-friendly as possible.
- **Navigation Bar:** At the very top, you'll see links to all the main sections of the site. If you're on a smaller screen, like a phone, those links will be tucked away behind a little hamburger menu icon. Just tap it to open or close the navigation.
- **Call to Action Buttons:** Throughout the site, you'll spot buttons like "Our Programs" or "Donate Now." These are there to quickly take you to the most relevant information or actions.
- **Smooth Scrolling:** I set up the site so that when you click on internal links (like jumping to a section on the same page), it'll smoothly scroll down to that spot instead of just jumping. It's a nice little touch.

## 👩🏽‍💻 Technical Documentation
So, how'd I build this thing? Here's a peek under the hood at the main technologies and how things are structured:
- **Next.js:** This is the main framework I used. It's a React framework that handles all the heavy lifting like routing, server-side rendering (SSR), and making sure everything performs well.
- **React:** I used React for building all the individual pieces of the user interface, like buttons, cards, and sections. It helps keep the code organized and reusable.
- **Tailwind CSS:** For all the styling, I went with Tailwind CSS. It's a "utility-first" framework, which means I used a bunch of small, pre-defined classes to style elements directly in the JSX. It makes styling super fast and consistent.
- **JavaScript:** Of course, JavaScript is powering all the interactive bits, like the mobile navigation toggle and some of the scroll animations you'll see.

As for the file structure, it's pretty standard for a Next.js app:
- The main UI components are in the `components/` directory.
- Each major page of the website has its own file (like `page.tsx`) within its respective folder in the `app/` directory.
- Global styles are in `app/globals.css`.
- The `public/` folder holds static assets like the `script.js` file for some client-side interactions.

## 🎨 Design Choices
When I was putting this together, I really wanted the site to feel welcoming and professional, while staying true to WHAP's existing brand.
- **Color Palette:** I stuck closely to the gold and warm tones from the original `whapmc.org` site. You'll see that gold used for headers, accents, and any interactive buttons. The background is mostly light to keep things clean and easy to read.
- **Typography:** I picked a couple of fonts to give the site a good vibe. `Inter` is used for most of the body text because it's super readable, and `Playfair Display` is used for headings to give it a more classic, impactful feel.
- **Responsiveness:** This was a big one. I made sure the layout adjusts smoothly across different screen sizes. So, whether you're checking it out on a tiny phone or a huge desktop monitor, it should look good and be easy to use.
- **Images:** Instead of just using generic placeholders, I pulled in actual images from the WHAP website and their GitHub repository. I think it makes the site feel a lot more authentic and personal. I also updated the `next.config.js` file to make sure Next.js plays nice with these external image sources.

## 🕵🏻 Troubleshooting
Sometimes things don't go perfectly, and that's okay! If you run into any hiccups, here are some common issues and how I'd usually try to fix 'em:
- **"Large files detected" when pushing to GitHub:** This is a classic one. It almost always means you're trying to push big files like your `node_modules` folder or the `.next` build output. Make sure your `.gitignore` file is set up correctly (I included one in the project!). If you've already committed these big files, you'll need to clean up your Git history. Try running `git rm -r --cached .` followed by `git add .` and `git commit -m "Clean up repository tracking"`. That usually does the trick.
- **Images not showing up:** If you're seeing broken image icons or just alt text, first check the image URLs in the components. Sometimes external image hosts can be a bit finicky, or the URL might have changed. I've updated the `next.config.js` to allow images from `whapmc.org`, `github.com`, and `wsimg.com`, so that should cover most of the images I've used.
- **Vercel 404 NOT_FOUND error:** This one can be a bit puzzling. It means Vercel can't find your deployed project. First, make sure your project is correctly linked to Vercel (you can do this through the Vercel CLI or dashboard). Also, double-check that your `package.json` has the correct `build` script (`"build": "next build"`). Sometimes, just logging out and back into the Vercel CLI (`vercel logout` then `vercel login`) can magically fix it. If it keeps happening, grab that error ID (like `sfo1::...`) and reach out to Vercel support; they can look up exactly what's going on behind the scenes.

## 💻 How to Run Locally
Wanna see this website running right on your own computer? It's super easy.
1.  Make sure you've already followed the **Installation/Setup** steps I laid out above. That gets all the code and dependencies ready.
2.  Once that's done, just open up your terminal, make sure you're in the `WHAP_Website` project directory, and run this command: `npm run dev`
3.  After it starts up, it'll usually tell you where to go. Open your web browser and navigate to `http://localhost:3000` (or whatever port the terminal output tells you).

And that's it! You should see the WHAP website up and running, ready for you to explore.

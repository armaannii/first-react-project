# 🧱 A-5 Dev Stack Builder Website

## 🚫 Key Rules
- Don't use any lorem ipsum text, rather use relevant and meaningful text content.


## 🧩 Features & Requirements 

### 🧭 Navbar
- Navbar designed according to the UI.
- Left: brand logo + "Dev Stack" name.
- Center: nav links — Home, Technologies, Projects, About, Contact.
- Right: "Sign In" (text button) and "Sign Up" (filled pill button).
- Navbar stays sticky at the top while scrolling.


### 🍔 Mobile Navbar
- On small devices the navbar has three parts:
  - Left: hamburger menu icon
  - Center: brand logo
  - Right: Sign In and Sign Up buttons

![Hamburger menu](./ui/hamburger.png)



### 🎯 Banner / Hero
- Banner section includes:
  - Heading (two-tone: plain text + gradient text)
  - Description text
  - Two buttons — "Explore Technologies" (gradient) and "Learn More" (outlined)
  - Banner image



### 📦 JSON Data
I provide a file in public folder data.json . Use this file to fetch data.




### 🃏 Technology Cards
- Display all technologies in a 3-column layout (responsive: 1 column on mobile, 2 on tablet).
- Each card includes:
  - Icon
  - Badge
  - Name
  - Description
  - Category chip
  - Difficulty
  - Rating with a star
  - "Add to Stack" button



### 🧰 Your Stack Section (Sidebar)
- A "Your Stack" panel sits beside the technology grid.
- Shows a heading and the selected count — example: "2 Technology Selected".
- By default the panel shows an empty message.

| Empty state | With selected items |
| --- | --- |
| ![Your Stack empty](./ui/YourStack-without.png) | ![Your Stack with items](./ui/YourStack-with.png) |



### ➕ Add to Stack Functionality
- Clicking "Add to Stack" adds that technology to the "Your Stack" panel.
- Each stack item shows: icon, name, category, and a remove (✕) button.
- Stack layout: 1 column.
- **The same technology cannot be added twice.** Trying again shows a warning alert.

- Once added, that card's button becomes disabled and reads "✓ Added to Stack".



### ❌ Remove Functionality
- Clicking the ✕ button on a stack item removes only that item from the stack.
- "Remove All" button clears the whole stack at once.



### 🦶 Footer
- Footer designed based on the UI.
- Brand block: logo, name, short description, social links (GitHub, Twitter, LinkedIn).
- Three link groups: Product, Company, Legal.
- Bottom bar: copyright text + Privacy and Terms links.



### 📱 Responsive Design
- Fully responsive across mobile, tablet, and desktop.
- Follow standard responsive practices.



# 🚀 Challenges Part 

### 🔔 Use a NPM Package React-Toastify
- Use react-toastify to show alerts for: add to stack, duplicate add attempt, remove, and remove all.


###  Nav bar static
- When scroll down nav bar must be static / showed


### ⏳ Loading State
- Show a loading message/spinner while the JSON data is being fetched.
- Note: since the JSON is a local file, the loading state may only be visible for a few milliseconds and can be hard to catch on screen. That is completely fine — the requirement is that the loading state exists and works, not that it stays visible for long.



### 🎨 Gradient Brand Theme
- Use one shared gradient (orange → pink → violet) for the brand name, hero heading highlight, and primary buttons.
- Define the gradient in one place so the whole UI can be re-themed by changing a single value.




## ⚙️ Technology You Can Use
- React.js
- Tailwind CSS, DaisyUI [which is I already installed in the project folder you just apply properties and built in tag]
- TypeScript / JavaScript (ES6+)
- React-Toastify (NPM Package)
- JSON (for technology data)

---


**1. Do we have to use TypeScript?**  
Yes.

**2. colors?**  
Just keep them relevant to the project. Don't use random or gobindo colors and don't put an unrelated title/logo.

**3. Where do we get the technology logos/icons?**  
You can use image URLs from Google or from anywhere you like. A good source with clean, ready-to-use tech logos is <https://techicons.dev/> — copy the icon URL from there and put it in your JSON data.
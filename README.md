# 🧾 Amazon Tax Calculator Extension

This is a simple **Chrome Extension** built to help users calculate the final price of Amazon products including **tax**. It’s especially useful for Canadians or users in regions where tax isn’t included by default on Amazon product listings.

## 📦 What This Extension Does

- Automatically calculates and displays the total price including tax on Amazon product pages.
- Works on both desktop and mobile versions of Amazon (if supported).
- Simple and lightweight — just install and go!

## 🛠️ Technologies Used

- **HTML** – For content rendering
- **CSS** – For styling the price display
- **JavaScript** – For DOM manipulation and tax logic
- **Chrome Extension APIs** – To integrate the script with Amazon pages

## 🚀 How to Install

1. Download or clone this repository.
2. Open **Google Chrome** and go to `chrome://extensions/`
3. Enable **Developer mode** (toggle switch at the top right).
4. Click **"Load unpacked"** and select the project folder.
5. Visit Amazon and test it on any product page.

## ⚙️ How It Works

- Injects a content script into Amazon product pages.
- Extracts the price from the page.
- Calculates estimated tax (default or user-defined rate).
- Appends the final total near the original price.

## 📌 Future Plans / Ideas

- Add options page to set custom tax rates per user location.
- Add currency conversion support.
- Support other e-commerce sites (e.g., Walmart, Best Buy).
- Enable dark mode compatibility.

## 🎓 About Me

I’m a student currently learning JavaScript and Chrome extension development. This project helped me understand:

- How browser extensions work
- How to manipulate live web pages using content scripts
- Real-world use cases of DOM selection and JS logic

---

> **Disclaimer:** This extension is for learning and personal use only. It is not affiliated with Amazon.


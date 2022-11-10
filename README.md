# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Links

- Solution URL: [interactive-rating-component-main](https://www.frontendmentor.io/solutions/responsive-interactive-rating-component-main-with-jquery-yECmJgd2nB)
- Live Site URL: [interactive-rating-component-main](https://somaye-beiranvand.github.io/FrontendMentor-interactive-rating-component-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [jQuery](https://jquery.com/) - JS library

### What I learned

I learned it is possible to select parent elements in css

```css
.rating-card__label:has(> .rating-card__input:checked) {
  background-color: var(--Orange);
  color: var(--white);
}
```

## Author

- Frontend Mentor - [@somaye-beiranvand](https://www.frontendmentor.io/profile/somaye-beiranvand)

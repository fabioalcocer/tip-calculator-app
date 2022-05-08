# Tip calculator app

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![](./assets/desktop-preview.jpg)


### Links

- Repository URL: [Add solution URL here](https://github.com/fabioalcocer/tip-calculator-app)
- Live Site URL: [Add live site URL here](https://fabioalcocer.github.io/tip-calculator-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Methodology BEM
- Mobile-first workflow
- Vanilla Javascript
- Pattern High Order Functions


### What I learned

```css
.results {
  padding: clamp(2.5em, 8vw, 3.25em) clamp(1.5em, 6vw, 2.25em) clamp(1.5em, 6vw, 2.25em);
}

.options__tip-btn:hover:not(.selected) {
  color: var(--tip-button-hover);
  background-color: var(--bg-tip-button-hover);
}

```
```js
const handleBillInput = (e) => {
  if (billInput.validity.valid) {
    bill = parseFloat(billInput.value);
    calculateResults();
  }
};

billInput.addEventListener('keyup', (e) => handleOnEnter(e, handleBillInput));
billInput.addEventListener('focusout', handleBillInput);
```

### Useful resources

- [Object Validity JS](https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/validity) 


## Author

- Twitter - [@alcocerSejas](https://twitter.com/AlcocerSejas)
- LinkedIn- [@fabioAlcocer](https://www.linkedin.com/in/fabio-alcocer/)
- Github - [@fabioalcocer](https://github.com/fabioalcocer/)

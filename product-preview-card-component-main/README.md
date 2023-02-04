# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)


### Screenshot

![](/product-preview-card-component-main/design/desktop-design.jpg)


### Built with

- HTML5
- CSS
- Flexbox
- CSS Grid


### What I learned

I struggled for a long time with using media queries. But I did it!!!

```css
.@media only screen and (max-width: 628px) {
    .grid{
        grid-template-columns: 1fr;
    }
    .photo-img {
        max-height: 450px;
        width: 100%;
        object-fit: cover;
    }
    .description, .prices {
        padding-bottom: 23px;;
    }
}
```
I also remembered this one:

```css
text-decoration: line-through;
```


### Useful resources

- [Example resource 1](https://www.youtube.com/watch?v=9aDqk7jUMZQ)


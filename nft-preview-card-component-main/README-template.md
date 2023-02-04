# Frontend Mentor - NFT preview card component solution

This is a solution to the [NFT preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 


### Screenshot

![](/nft-preview-card-component-main/design/desktop-design.jpg)
![](/nft-preview-card-component-main/design/active-states.jpg)



### What I learned

```html
<div class="photos">
  <img src="images/image-equilibrium.jpg" class="photo" alt="image">
  <div class="overlay"></div>
        <img src="images/icon-view.svg" alt="view icon" class="view">
</div>
```
```css
.photos{
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 300px;
}
.photo {
    display: block;
    max-width: 300px;
    width: 100%;
    height: auto;
    border-radius: 10px;
    cursor: pointer;
}
.overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    background-color: hsl(178, 100%, 50%);
    border-radius: 10px;
}
.view {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    display: none;
  }
  .photos:hover .overlay {
    opacity: 0.5;
    cursor: pointer;
  }
  .photos:hover .overlay + .view {
    display: block;
  }
```
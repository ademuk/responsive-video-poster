#Response Video Posters

Add responsive posters to HTML5 Videos

NOTE: Currently only supoports one dimension

##Setup
### 1. Include script (before end of closing body tag)
```html
<script src="responsive-video-poster.js"></script>
```
### 2. Initialisation
```js
ResponsiveVideoPoster.init();
```
or Explicit:
```js
ResponsiveVideoPoster.init(document.getElementsByClassName('video1'));
```

##Usage
```html
<video poster="poster.jpg" data-poster="poster-small.jpg 320w" class="video1">
  <source src="video.mp4" type='video/mp4' />
</video>
```

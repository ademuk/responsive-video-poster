#Response Video Posters

Add responsive posters to HTML5 Videos

NOTE: Currently only supoports one dimension

##Setup
#### 1. Include script (in the head or just before the end of the closing body tag)
```html
<script src="responsive-video-poster.js"></script>
```
#### 2. Initialisation (just before the end of the closing body tag, or on document ready)
```js
ResponsiveVideoPoster.init();
```
or explicit:
```js
ResponsiveVideoPoster.init(document.getElementsByClassName('video1'));
```

##Usage
```html
<video poster="poster.jpg" data-poster="poster-small.jpg 320w" class="video1">
  <source src="video.mp4" type='video/mp4' />
</video>
```

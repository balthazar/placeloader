# placeloader

> Hold things in place, while loading.

#### Introduction

This library takes a few assumptions, that might change in the future. It has been decoupled into two parts,
one dedicated to the cool framework of the moment namely React using a css-in-js pattern; the second being a simple set of css classes and animations you can play with freely.

If you're only interested in the vanilla, checkout the [website](https://placeloader-vanilla.surge.sh) showcase and instructions.

#### Install

    yarn add react-placeloader

And import the stylesheet the way your bundler allows you to.

```scss
@import '~react-placeloader/main';
```

#### Usage

It is also important to note that providing a width and height is required for them to work properly.

Although it would be easier for you (and me) to look at the [docs & demos](https://placeloader.surge.sh) directly, here's a simple example of what you could do.

```javascript
import PlaceLoader, { Image } from 'react-placeloader'

<PlaceLoader style={{ width: '10rem', height: '2rem' }} isLoading={isLoading}>
  <div>{'I will only render once the isLoading prop is false'}</div>
</PlaceLoader>

<Image src="http://yolo.png" isLoading={isLoading} style={{ width: '10rem', height: '10rem' }} />
```

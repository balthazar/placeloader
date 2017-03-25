# placeloader

> Hold things in place, while loading.

    yarn add placeloader

#### Introduction

This project is aimed at getting rid of FOAC, aka *Flash of Absent Content*.

See the [purpose section](#purpose) below for more info. Checkout the vanilla [website](https://placeloader-vanilla.surge.sh) if you don't care about React.

#### Install

Import the stylesheet the way your bundler allows you to.

```scss
@import '~placeloader/main';
```

#### Usage

Although it would be easier for you (and me) to look at the [docs & demos](https://placeloader.surge.sh) directly, here's a simple example of what you could do.

```javascript
import PlaceLoader, { Image } from 'placeloader'

<PlaceLoader style={{ width: '10rem', height: '2rem' }} isLoading={isLoading}>
  <div>{'I will only render once the isLoading prop is false'}</div>
</PlaceLoader>

<Image src="http://yolo.png" isLoading={isLoading} style={{ width: '10rem', height: '10rem' }} />
```

Interesting fact is that you could provide a function as a children, allowing you to get
rid of the annoying loading checks and potential errors.

```javascript
render () {

  const { isLoading, data } = this.props
  // While loading, data is undefined. Accessing a property of this object would throw.

  return (
    <PlaceLoader style={style} isLoading={isLoading}>
      {() => (
        <div>{data.name}</div>
      )}
    </PlaceLoader>
  )

}
```

#### Purpose

How loading states are handled in most of applications could be drastically improved, and would have a huge impact on the UX.

Let's say you're querying an API, or doing any async stuff (uncommon I know).
Usually you'll show a loading icon between the time you start loading, and when the content is displayed on the page.

Once your operation has finished, you just have to hide the loader and show the content.
That's good, but there will be an upsetting change of your layout.

<img alt='problem' title='problem' src='http://i.imgur.com/TLpuHZE.gif'>

There's a few ways to resolve this issue, and one of them is to make the loader the exact same size of the content that it
will introduce. You could also transform the sizes using a similar concept as seen in [state-transitions](https://github.com/jacobp100/state-transitions), but still not as easy. I decided to focus on the first solution.

Just to recap, preventing FOAC simply requires you to set a fixed width and height on your loader, that will be the same as your content. This package has been made to provide some sort of base api and ideas for people to get started.

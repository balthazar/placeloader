import React from 'react'
import { storiesOf } from '@kadira/storybook'

import PlaceLoader, { Image, Post, Text } from '../src'
import Example from './example'

const square = { width: '10rem', height: '10rem', marginBottom: '1rem' }
const line = { width: '90%', height: '2rem', marginBottom: '1rem' }
const src = 'http://i.imgur.com/fxyYyJv.jpg'

storiesOf('PlaceLoader', module)
  .addWithInfo('Default', () => (
    <Example>
      <PlaceLoader style={square} />
      <PlaceLoader style={line} />
    </Example>
  ))
  .addWithInfo('Direction', () => (
    <Example>
      <PlaceLoader dir='bottom' style={square} />
    </Example>
  ))
  .addWithInfo('Speed', 'Might be useful to customize it if you know in advance the size of the element.', () => (
    <Example>
      <PlaceLoader speed='250ms' style={square} />
    </Example>
  ))
  .addWithInfo('Kind', () => (
    <Example>
      <PlaceLoader kind={2} style={square} />
    </Example>
  ))
  .addWithInfo('Color', `
    Depending on the kind you want to use, you'll either have to specify a single color string, or and array of them.
    Use RGB(A)s, hexes and color names, just like usual.

    | kind |  prop  |   type   |
    |:----:|:------:|:--------:|
    |   1  | colors | array(2) |
    |   2  |  color |   string |
  `, () => (
    <Example>
      <PlaceLoader color='#fdf6e3' style={square} />
      <PlaceLoader colors={['rgba(0, 43, 54, 0.95)', 'rgb(0, 43, 54)']} kind={2} style={square} />
    </Example>
  ))
  .addWithInfo('Gradient', () => (
    <Example>
      <PlaceLoader gradient='linear-gradient(to right, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3, #ff2400)' style={square} />
    </Example>
  ))

storiesOf('Image', module)
  .addWithInfo('Default', `
    You have to make sure your element is the same size of the image.
    Providing an inline style object with a width and height will create the desired result.
  `, () => (
    <Example>
      <Image style={square} src={src} />
    </Example>
  ))
  .addWithInfo('Delay', `
    Can be useful if you always want to show a little delay to your users in case your images are expected to be large and take time to load.
  `, () => (
    <Example>
      <Image
        delay={2E3}
        kind={2}
        src={src}
        style={square} />
    </Example>
  ))
  .addWithInfo('Error', 'If an error occurs while loading your image, we will just render a simple div you can customize the way you want', () => (
    <Example>
      <Image style={{ backgroundColor: '#F0F0F0', ...square }} src='yolo.png' />
    </Example>
  ))

storiesOf('Text', module)
  .addWithInfo('Default', () => (
    <Example>
      <Text source='loaded text' style={line} />
    </Example>
  ))
  .addWithInfo('Random', 'You can specify a custom length and space probability (why the fuck not) for the random string generation.', () => (
    <Example>
      <Text textLength={30} spaceProbability={0.3} style={line} />
    </Example>
  ))
  .addWithInfo('Box Style', 'You can specify a custom style to the text container.', () => (
    <Example>
      <Text
        textLength={10}
        textBoxStyle={{ display: 'flex', alignItems: 'center', paddingLeft: '0.3rem' }}
        style={line} />
    </Example>
  ))
  .addWithInfo('Color', () => (
    <Example>
      <Text
        textColor='red'
        source='loaded text'
        textBoxStyle={{ display: 'flex', alignItems: 'center', paddingLeft: '0.3rem' }}
        style={line} />
    </Example>
  ))
  .addWithInfo('Blur', 'If you feel it\'s too intense or not enough.', () => (
    <Example>
      <Text
        blur={'5px'}
        source='loaded text'
        textBoxStyle={{ display: 'flex', alignItems: 'center', paddingLeft: '0.3rem' }}
        style={line} />
    </Example>
  ))

storiesOf('Post', module)
  .addWithInfo('Simple', `
    This component will accept all props from **PlaceHolder** and **Image** and pass it to them, except differing ones like \`src\`, \`lines\`, \`imageProps\` and \`lineProps\`.
  `, () => (
    <Example>
      <Post
        src={src}
        imageProps={{ dir: 'bottom', style: { width: '7rem', height: '7rem', marginRight: '1rem' } }}
        lineProps={{ style: { width: '90%', height: '1.5rem', marginBottom: '0.5rem' } }}
        kind={2} />
    </Example>
  ))

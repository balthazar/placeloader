import React, { PureComponent, PropTypes } from 'react'

import PlaceLoader from './placeloader'

const alpha = 'abcdefghijklmnopqrstuvwxyz'
const getRandomString = (n, spaceProbability) =>
  Array(n).fill(0).reduce((acc, v, i) => {
    const allowSpace = i !== 0 && i !== n - 1 && acc[i - 1] !== ' '
    const rand = Math.floor((Math.random() * alpha.length) + (allowSpace ? alpha.length * spaceProbability : 0))
    return `${acc}${alpha[rand] ? alpha[rand] : ' '}`
  }, '')

class Text extends PureComponent {

  static propTypes = {
    source: PropTypes.string,
    blur: PropTypes.string,
    textColor: PropTypes.string,
    textLength: PropTypes.number,
    textBoxStyle: PropTypes.object,
    spaceProbability: PropTypes.number,
    ...PlaceLoader.propTypes,
  }

  static defaultProps = {
    blur: '1rem',
    textColor: 'black',
    textLength: 100,
    textBoxStyle: {},
    spaceProbability: 0.2,
    ...PlaceLoader.defaultProps,
  }

  render () {
    const {
      source,
      blur,
      textColor,
      textLength,
      textBoxStyle,
      spaceProbability,
      isLoading,
      ...props
    } = this.props

    const coreStyle = {
      color: 'transparent',
      textShadow: `0 0 ${isLoading ? blur : 0} ${textColor}`,
    }

    const textHolder = (
      <div style={{ width: '100%', height: '100%', ...textBoxStyle }}>
        <span style={coreStyle}>
          {source || getRandomString(textLength, spaceProbability)}
        </span>
      </div>
    )

    return (
      <PlaceLoader isLoading={isLoading} content={textHolder} {...props}>
        {textHolder}
      </PlaceLoader>
    )
  }

}

export default Text

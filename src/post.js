import React, { Component } from 'react'
import PropTypes from 'prop-types'

import PlaceLoader from './placeloader'
import Image from './image'

class Post extends Component {

  static propTypes = {
    imageProps: PropTypes.object,
    lineProps: PropTypes.object,
    lines: PropTypes.number,
    ...PlaceLoader.propTypes,
    ...Image.propTypes,
    style: PropTypes.object,
  }

  static defaultProps = {
    imageProps: {},
    lineProps: {},
    lines: 3,
    ...PlaceLoader.defaultProps,
    ...Image.defaultProps,
  }

  render () {

    const { src, delay, lines, imageProps, lineProps, ...props } = this.props

    return (
      <div style={{ display: 'flex' }}>

        <Image
          src={src}
          delay={delay}
          {...props}
          {...imageProps} />

        <div style={{ flexGrow: 1 }}>
          {Array(lines).fill(0).map((v, i) => (
            <PlaceLoader key={i} {...props} {...lineProps} />
          ))}
        </div>

      </div>
    )
  }

}

export default Post

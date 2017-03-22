import React, { Component, PropTypes } from 'react'

import PlaceLoader from './placeloader'
import Image from './image'

class Post extends Component {

  static propTypes = {
    imageProps: PropTypes.object,
    lineProps: PropTypes.object,
    lines: PropTypes.number,
    ...PlaceLoader.propTypes,
    ...Image.propTypes,
  }

  static defaultProps = {
    imageProps: {},
    lineProps: {},
    lines: 3,
    ...PlaceLoader.defaultProps,
    ...Image.defaultProps,
  }

  render () {

    const { src, lines, imageProps, lineProps, ...props } = this.props

    return (
      <div style={{ display: 'flex' }}>

        <Image src={src} {...props} {...imageProps} />

        <div style={{ flexGrow: 1 }}>
          <PlaceLoader {...props} {...lineProps} repeat={lines} />
        </div>

      </div>
    )
  }

}

export default Post

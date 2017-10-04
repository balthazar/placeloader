import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import PlaceLoader from './placeloader'

class Image extends PureComponent {

  static propTypes = {
    src: PropTypes.string.isRequired,
    delay: PropTypes.number,
    ...PlaceLoader.propTypes,
  }

  static defaultProps = {
    delay: 0,
    ...PlaceLoader.defaultProps,
  }

  state = {
    isLoading: true,
    error: false,
  }

  componentWillUnmount () {
    this._unmounted = true
  }

  safeSetState = payload => {
    if (this._unmounted) { return }
    this.setState(payload)
  }

  loaded = (error = false) => () => {
    const { delay } = this.props

    setTimeout(() => {
      this.safeSetState({ isLoading: false, error })
    }, delay)
  }

  render () {

    const { src, style, className, delay, ...props } = this.props // eslint-disable-line no-unused-vars
    const { isLoading, error } = this.state

    return (
      <div>

        <img
          src={src}
          onLoad={this.loaded()}
          onError={this.loaded(true)}
          style={{ display: 'none' }} />

        <PlaceLoader
          style={style}
          className={className}
          {...props}
          isLoading={isLoading || props.isLoading}>
          {!error
            ? (<img src={src} style={style} className={className} />)
            : (<div style={style} className={className} />)
          }
        </PlaceLoader>

      </div>
    )
  }
}

export default Image

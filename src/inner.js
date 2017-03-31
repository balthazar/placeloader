import React, { PureComponent, PropTypes } from 'react'

class InnerPlaceLoader extends PureComponent {

  static propTypes = {
    dir: PropTypes.oneOf(['right', 'left', 'top', 'bottom']),
    speed: PropTypes.string,
    kind: PropTypes.oneOf([1, 2]),
    gradient: PropTypes.string,
    color: PropTypes.string,
    colors: PropTypes.arrayOf(PropTypes.string),
  }

  static defaultProps = {
    dir: 'right',
    speed: '1s',
    kind: 1,
    color: 'rgba(0, 0, 0, 0.1)',
    colors: ['transparent', 'rgba(0, 0, 0, 0.1)'],
  }

  render () {

    const {
      dir,
      speed,
      kind,
      colors,
      color,
      gradient,
      content,
      ...props
    } = this.props

    const backgroundImage = gradient ? gradient
      : kind === 1
        ? `linear-gradient(to ${dir}, transparent 0%, ${color} 100%)`
        : `linear-gradient(to ${dir}, ${colors[0]} 0%, ${colors[1]} 10%, ${colors[0]} 20%)`

    const coreStyle = {
      animation: `placeloader-${dir} ${speed} linear infinite`,
      backgroundImage,
      backgroundSize: '200%',
      overflow: 'hidden',
    }

    return (
      <div
        className='placeloader-inner'
        style={{ width: '100%', height: '100%', ...coreStyle }}
        {...props}>
        {content}
      </div>
    )
  }

}

export default InnerPlaceLoader

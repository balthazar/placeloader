import React, { PropTypes } from 'react'
import { TransitionMotion, spring } from 'react-motion'
import { StyleRoot } from 'radium'

import InnerPlaceLoader from './inner'

const willLeave = () => ({ opacity: spring(0) })
const willEnter = () => ({ opacity: 0 })

const getStyle = ({ key, style }, styles) => ({
  ...style,
  ...styles,
  ...(key === 'content'
    ? { position: 'absolute', top: 0, left: 0 }
    : { width: '100%', height: '100%' }
  ),
})

const PlaceLoader = ({ isLoading, children, style, ...props }) => {

  const loader = (
    <StyleRoot style={{ width: '100%', height: '100%' }}>
      <InnerPlaceLoader {...props} />
    </StyleRoot>
  )

  const items = [
    isLoading && { key: 'loader', data: loader, style: { opacity: 1 } },
    !isLoading && { key: 'content', data: children, style: { opacity: spring(1) } },
  ]
  .filter(e => e)

  return (
    <TransitionMotion
      styles={items}
      willEnter={willEnter}
      willLeave={willLeave}>
      {inter => (
        <div className='placeloader-root' style={style}>
          {inter.map(item => (
            <div style={getStyle(item, style)} key={item.key}>
              {item.data}
            </div>
          ))}
        </div>
      )}
    </TransitionMotion>
  )
}

PlaceLoader.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.shape({
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
  }).isRequired,
  ...InnerPlaceLoader.propTypes,
}

PlaceLoader.defaultProps = {
  ...InnerPlaceLoader.defaultProps,
}

export default PlaceLoader

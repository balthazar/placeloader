import React, { PropTypes } from 'react'
import { TransitionMotion, spring } from 'react-motion'

import InnerPlaceLoader from './inner'

const willLeave = () => ({ opacity: spring(0) })
const willEnter = () => ({ opacity: 0 })

const getStyle = ({ key, style }, innerStyle) => ({
  ...style,
  ...innerStyle,
  ...(key === 'content'
    ? { position: 'absolute', top: 0, left: 0 }
    : { width: '100%', height: '100%' }
  ),
})

const PlaceLoader = ({ isLoading, children, style, innerStyle, ...props }) => {

  const loader = (
    <InnerPlaceLoader {...props} />
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
        <div className='placeloader-root' style={{ position: 'relative', ...style }}>
          {inter.map(item => (
            <div style={getStyle(item, innerStyle)} key={item.key}>
              {typeof item.data === 'function' ? item.data() : item.data}
            </div>
          ))}
        </div>
      )}
    </TransitionMotion>
  )

}

PlaceLoader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  isLoading: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.shape({
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
  innerStyle: PropTypes.object,
  ...InnerPlaceLoader.propTypes,
}

PlaceLoader.defaultProps = {
  ...InnerPlaceLoader.defaultProps,
}

export default PlaceLoader

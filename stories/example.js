import React, { PureComponent } from 'react'

class Example extends PureComponent {

  state = {
    isLoading: true,
  }

  render () {
    const { children } = this.props
    const { isLoading } = this.state

    const els = children[0] ? children : [children]

    return (
      <div>

        {els.map((el, key) => React.cloneElement(el, { isLoading, key }))}

        <button onClick={() => this.setState({ isLoading: !isLoading })} style={{ marginTop: '1rem' }}>
          {'toggle'}
        </button>

      </div>
    )
  }

}

export default Example

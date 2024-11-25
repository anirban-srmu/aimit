import React from 'react'
import PropTypes from 'prop-types'

function Greeting({name}){
    return <h2>Hello, {name}!</h2>;
}
Greeting.defaultProps ={
    name: 'Guest',
}
Greeting.propTypes = {
    name: PropTypes.string.isRequired,
}

export default Greeting;
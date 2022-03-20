import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const alert = ({alerts}) => {
  return (
    <div>
        <alert>{alert.msg}</alert>
    </div>
  )
}

alert.propTypes = {
    alerts: PropTypes.array.isRequired
}
const mapStatetoProp = state => ({
    alerts: state.alert
})

export default connect(mapStatetoProp) (alert)




















import React from 'react'
import Photo from '../Photo'
import Comments from '../Comments'

const Single = React.createClass({
  render() {
    console.log("render");
    return (
      <div className="single-photo">
        hello single {this.props}
      </div>
    )
  }
})

export default Single

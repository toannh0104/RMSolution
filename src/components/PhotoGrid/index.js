import React from 'react'
import Photo from '../Photo'
import Single from '../Single'

const PhotoGrid = React.createClass({

  doClick(id){
    this.props.updateSlected(id);
  },

  render() {
    console.log(this.props)
    return (
      <div className="photo-grid">
      <ul>
        {this.props.posts.map((post, i) => {
          return (
            <li key={i} onClick={this.doClick.bind(null, post.code)}>{post.caption}</li>
          )
        })}
       </ul> 
       <hr/>
       {this.props.current.selectedEmp}
      </div>
    )
  }
})

export default PhotoGrid

import React, { Component } from 'react'

class Avatar extends Component {
  render() {
    const imgPath = `${process.env.PUBLIC_URL}/assets/images/${this.props.author.avatarURL}`
    return (
      <div className="avatar">
        <img src={imgPath} alt={``} className="avatar" />
      </div>
    )
  }
}

export default Avatar

import React from 'react'
import './ListItem.scss'
const brokenImageUrl = 'http://www.clker.com/cliparts/0/4/6/1/11949904011525963418file_broken.svg.med.png'

export default (props) =>
  (<li className="show-card">
    <img src={props.show.image ? props.show.image.medium : brokenImageUrl}/>
    <div className="title">{props.show.name}</div>
  </li>)


//http://www.clker.com/cliparts/0/4/6/1/11949904011525963418file_broken.svg.med.png
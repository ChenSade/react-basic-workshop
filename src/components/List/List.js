import React from 'react';
import ListItem from '../ListItem/ListItem'

const List = (props) => (
  <ul>
    {props.shows.map((item, index) => <ListItem key={item.show.id} show={item.show}></ListItem>)}
  </ul>
  )
  
export default List

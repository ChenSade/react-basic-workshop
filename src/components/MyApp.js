import React from 'react'
import List from './List/List'
import ShowsData from '../data/shows.json'
import Header from './Header/Header.js'

class MyApp extends React.Component {
  constructor(props) {
    super(props)
    this.onMyClick = this.onMyClick.bind(this)
    this.doSearch = this.doSearch.bind(this)
    this.state = {
      shows: []
    }
  }

  doSearch(searchTerm) {
    // get the data from an outside API source
    fetch(
      `http://api.tvmaze.com/search/shows?q=${encodeURI(searchTerm)}`,
      { mode: 'cors' }
    )
      .then(res => res.json())
      .then(jsonRes => this.setState({ shows: jsonRes }))
    
    // get the data from te local shows.json file
    // this.setState({ shows: ShowsData })
  }

  componentDidMount() {
    this.doSearch('Oath')
  }

  render() {
    return (
      <div>
        <Header doSearch={this.doSearch}></Header>
        <List shows={this.state.shows} />
      </div>
    )
  }

  onMyClick() {
    console.log("chen")
  }
}

export default MyApp

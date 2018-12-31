import React from 'react'

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log("Submitted:", this.state.value)
    this.props.doSearch(this.state.value)
  }

  handleChange(e) {
    console.log(e.target.value)
    this.setState({ value: e.target.value })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Header


import {Component} from 'react'
import './index.css'
import SearchHistory from '../SearchHistory'

class HistoryPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInput: '',
      initialHistoryList: props.initialHistoryList,
    }
    this.initialHistoryList = props.initialHistoryList
  }

  onChange = event => {
    const {searchInput, initialHistoryList} = this.state

    const searchResult = initialHistoryList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput),
    )

    this.setState({
      initialHistoryList: searchResult,
    })
  }

  delFucntion = id => {
    const {initialHistoryList} = this.state
    const searchResult = initialHistoryList.filter(
      eachItem => eachItem.id !== id,
    )
    this.setState({initialHistoryList: searchResult})
  }

  render() {
    const {initialHistoryList} = this.state

    let display
    if (initialHistoryList.length > 0) {
      display = (
        <ul className="list-container">
          {initialHistoryList.map(eachItem => (
            <SearchHistory
              eachItem={eachItem}
              key={eachItem.id}
              delFucntion={this.delFucntion}
            />
          ))}
        </ul>
      )
    } else {
      display = <p className="empty-con">There is no history to show</p>
    }

    return (
      <div className="container">
        <div className="nav-list">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="app logo"
          />
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search icon"
              className="input-icon"
            />
            <input
              type="search"
              placeholder="Search History"
              className="input"
              onChange={this.onChange}
            />
          </div>
        </div>
        {display}
      </div>
    )
  }
}

export default HistoryPage

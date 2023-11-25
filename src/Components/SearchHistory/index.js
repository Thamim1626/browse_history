import './index.css'

const SearchHistory = props => {
  const {eachItem, delFucntion} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachItem

  const fucntionCall = () => {
    delFucntion(id)
  }
  return (
    <li className="item-container">
      <div className="left-container">
        <p className="time">{timeAccessed}</p>
      </div>
      <div className="mid-container">
        <img src={logoUrl} alt="domain logo" className="logo" />
        <p className="title">{title}</p>
        <p className="url">{domainUrl}</p>
      </div>
      <button data-testid="delete" type="button" className="right-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete icon"
          className="delete-icon"
          onClick={fucntionCall}
        />
      </button>
    </li>
  )
}

export default SearchHistory

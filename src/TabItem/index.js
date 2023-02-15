import './index.css'

const TabItem = props => {
  const {eachTab, isTabActive, updateActiveTabId} = props
  const {tabId, displayText} = eachTab

  const selectedTab = isTabActive ? 'selected-button' : ''

  const onClickTabItem = () => {
    updateActiveTabId(tabId)
  }

  return (
    <li className="tab-item">
      <button
        className={`tab-button ${selectedTab}`}
        type="button"
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

import { useState } from 'react'

const Tabs = ({ tabs, defaultTab = 0, onChange, className = '' }) => {
  const [activeTab, setActiveTab] = useState(defaultTab)

  const handleTabClick = (index) => {
    setActiveTab(index)
    if (onChange) {
      onChange(index)
    }
  }

  return (
    <div className={className}>
      {/* Tab Headers */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8 overflow-x-auto" aria-label="Tabs">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={`
                whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200
                ${activeTab === index
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }
              `}
              aria-current={activeTab === index ? 'page' : undefined}
            >
              {tab.icon && <span className="mr-2">{tab.icon}</span>}
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {tabs[activeTab]?.content}
      </div>
    </div>
  )
}

export default Tabs

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const AccordionItem = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={onToggle}
        className="w-full py-4 px-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-gray-900 pr-4">{title}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <div className="px-5 text-gray-600">{children}</div>
      </div>
    </div>
  )
}

const Accordion = ({ items, allowMultiple = false, defaultOpenIndex = null }) => {
  const [openIndexes, setOpenIndexes] = useState(
    defaultOpenIndex !== null ? [defaultOpenIndex] : []
  )

  const handleToggle = (index) => {
    if (allowMultiple) {
      setOpenIndexes(prev =>
        prev.includes(index)
          ? prev.filter(i => i !== index)
          : [...prev, index]
      )
    } else {
      setOpenIndexes(prev =>
        prev.includes(index) ? [] : [index]
      )
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openIndexes.includes(index)}
          onToggle={() => handleToggle(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  )
}

export default Accordion

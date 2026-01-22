import { useRef, useState } from 'react'
import '../../App.css'

const helloworld = () => {
  return 'Hello, World!'
}

const Problem1 = () => {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const [contentMaxHeight, setContentMaxHeight] = useState(0)

  const onToggle = () => {
    const nextIsOpen = !isOpen
    const nextMaxHeight = nextIsOpen && contentRef.current ? contentRef.current.scrollHeight : 0
    setIsOpen(nextIsOpen)
    setContentMaxHeight(nextMaxHeight)
  }

  return (
    <>
      <h2>Problem 1</h2>

      <button
        type="button"
        className={`collapsible ${isOpen ? 'active' : ''}`}
        aria-expanded={isOpen}
        aria-controls="problem1-content"
        onClick={onToggle}
      >
        Hello World
      </button>

      <div
        id="problem1-content"
        ref={contentRef}
        className={`content ${isOpen ? 'content--open' : ''}`}
        style={{ maxHeight: `${contentMaxHeight}px` }}
      >
        <div className="content__inner">
          <p>{helloworld()}</p>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat."
          </p>
        </div>
      </div>
    </>
  )
}

export default Problem1

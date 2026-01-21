import { useRef, useState } from 'react'


const getSum = (a: number, b: number): number => {
  return a + b
}

const Problem2 = () => {
      const [isOpen, setIsOpen] = useState(false)
      const contentRef = useRef<HTMLDivElement>(null)
      const [contentMaxHeight, setContentMaxHeight] = useState(0)

      const [sumA, setSumA] = useState<number | null>(null)
      const [sumB, setSumB] = useState<number | null>(null)

    const onToggle = () => {
    const nextIsOpen = !isOpen
    const nextMaxHeight = nextIsOpen && contentRef.current ? contentRef.current.scrollHeight : 0
    setIsOpen(nextIsOpen)
    setContentMaxHeight(nextMaxHeight)
  }

  return (
     <>
      <h2>Problem2</h2>

      <button
        type="button"
        className={`collapsible ${isOpen ? 'active' : ''}`}
        aria-expanded={isOpen}
        aria-controls="problem1-content"
        onClick={onToggle}
      >
        Get Sum
      </button>

      <div
        id="problem1-content"
        ref={contentRef}
        className={`content ${isOpen ? 'content--open' : ''}`}
        style={{ maxHeight: `${contentMaxHeight}px` }}
      >
        <div className="content__inner">
            
        <form>
            <label>Enter two numbers:</label><br/>
            <input type="number" name="a" value={sumA ?? ''} onChange={(e)=>setSumA(Number(e.target.value))}/>
            
            <input type="number" name="b" value={sumB ?? ''} onChange={(e)=>setSumB(Number(e.target.value))}/>
          <p>{getSum(sumA ?? 0, sumB ?? 0)}</p>
        </form>

          
        </div>
      </div>
    </>
  )
}

export default Problem2;
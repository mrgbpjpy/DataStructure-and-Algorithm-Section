 
import {useRef, useState} from 'react'




const Problem5 = () => {
    const [isOpen, setIsOpen] = useState(false)
    const contentRef = useRef<HTMLDivElement>(null)
    const [contentMaxHeight, setContentMaxHeight] = useState(0)

    
   


    
    // Remove result state, use derived value instead

    const onToggle = () => {
        const nextIsOpen = !isOpen
        const nextMaxHeight = nextIsOpen && contentRef.current ? contentRef.current.scrollHeight : 0
        setIsOpen(nextIsOpen)
        setContentMaxHeight(nextMaxHeight)
    }

    const [arrayInput, setArrayInput] = useState<string>([].toString());
    const result = Math.max(...arrayInput.split(',').map(num => Number(num.trim())).filter(num => !isNaN(num)))



  return (
    <>
    <h2>Problem5</h2>

    <button 
        type="button"
        className={`collapsible ${isOpen ? 'active' : ''}`}
        aria-expanded={isOpen}
        aria-controls="problem3-content"
        onClick={onToggle}
        >
           Find Max Number
    </button>

    <div
        id="problem3-content"
        ref={contentRef}
        className={`content ${isOpen ? 'content--open' : ''}`}
        style={{ maxHeight: `${contentMaxHeight}px` }}
    >
        <div className="content__inner">
            
                
                <form onSubmit={(e) => e.preventDefault()}>
                <label>Find the maximum number in an array:</label><br/>
                <input type="text" name="array" placeholder="Example: 1,45,23,89,78,56" value={arrayInput} onChange={(e) => setArrayInput(e.target.value)} />
                <p style={{fontSize: "10px"}} >
                  {result}
                </p>
                
            </form>
        </div>
    </div>
    </>
  )
}

export default Problem5

 
import {useRef, useState} from 'react'




const Problem6 = () => {
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





  return (
    <>
    <h2>Problem 6</h2>

    <button 
        type="button"
        className={`collapsible ${isOpen ? 'active' : ''}`}
        aria-expanded={isOpen}
        aria-controls="problem3-content"
        onClick={onToggle}
        >
           Title Case
    </button>

    <div
        id="problem3-content"
        ref={contentRef}
        className={`content ${isOpen ? 'content--open' : ''}`}
        style={{ maxHeight: `${contentMaxHeight}px` }}
    >
        <div className="content__inner">
            
                
                <form onSubmit={(e) => e.preventDefault()}>
                <label>{/* Title Case */}</label><br/>
                <p style={{fontSize: "10px"}} >
                  {/*Result*/}
                </p>
                
            </form>
        </div>
    </div>
    </>
  )
}

export default Problem6

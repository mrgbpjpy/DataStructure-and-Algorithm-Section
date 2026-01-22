 
import {useRef, useState} from 'react'


const SetWords = (words: string) => {

    if (!words.trim()) return ""; // nothing to transform (prevents [""] case)
    const reverseString = (words: string) => {
        return words.split("").reverse().join("");
    }

    return reverseString(words);
}


const Problem7 = () => {
    const [isOpen, setIsOpen] = useState(false)
    const contentRef = useRef<HTMLDivElement>(null)
    const [contentMaxHeight, setContentMaxHeight] = useState(0)



    const [words, setWords] = useState("change me");
    const Result = SetWords(words);

    const onToggle = () => {
        const nextIsOpen = !isOpen
        const nextMaxHeight = nextIsOpen && contentRef.current ? contentRef.current.scrollHeight : 0
        setIsOpen(nextIsOpen)
        setContentMaxHeight(nextMaxHeight)
    }

  return (
    <>
    <h2>Problem 7</h2>

    <button 
        type="button"
        className={`collapsible ${isOpen ? 'active' : ''}`}
        aria-expanded={isOpen}
        aria-controls="problem3-content"
        onClick={onToggle}
        >
           Reverse String
    </button>

    <div
        id="problem3-content"
        ref={contentRef}
        className={`content ${isOpen ? 'content--open' : ''}`}
        style={{ maxHeight: `${contentMaxHeight}px` }}
    >
        <div className="content__inner">
            
                
                <form onSubmit={(e) => e.preventDefault()}>
                <label> This problem will return the string reversed</label><br/>
                <input type='text' value={words} onChange={(e) => setWords(e.target.value)} style={{width: "500px"}} />
                <p style={{fontSize: "10px"}} >
                  {Result}
                </p>
                
            </form>
        </div>
    </div>
    </>
  )
}

export default Problem7

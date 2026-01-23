 
import {useRef, useState} from 'react'


const SetWords = (words: string) => {

    if (!words.trim()) return ""; // nothing to transform (prevents [""] case)
  const str = words.toLowerCase().split(" ");
  for (let i = 0; i < str.length; i++) {
    if (!str[i]) continue; // skip empty tokens from extra spaces
    str[i] = str[i][0].toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
}


const Problem6 = () => {
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
                <label>This problem will return each word capitalized</label><br/>
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

export default Problem6

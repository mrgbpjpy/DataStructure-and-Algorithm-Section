 
import {useRef, useState} from 'react'


function countOccurrences(str: string, char: string): number {
    let count = 0;
    for( let i = 0; i < str.length; i++) {

        if(str[i] === char){
            count++;
        }
    }
    return count;
}

const Problem4 = () => {
    const [isOpen, setIsOpen] = useState(false)
    const contentRef = useRef<HTMLDivElement>(null)
    const [contentMaxHeight, setContentMaxHeight] = useState(0)

    const [str, setStr] = useState<string>('');
    const [char, setChar] = useState<string>('');
    const result = countOccurrences(str, char).toString();


    
    // Remove result state, use derived value instead

    const onToggle = () => {
        const nextIsOpen = !isOpen
        const nextMaxHeight = nextIsOpen && contentRef.current ? contentRef.current.scrollHeight : 0
        setIsOpen(nextIsOpen)
        setContentMaxHeight(nextMaxHeight)
    }

    // Remove useEffect for result calculation



  return (
    <>
    <h2>Problem 4</h2>

    <button 
        type="button"
        className={`collapsible ${isOpen ? 'active' : ''}`}
        aria-expanded={isOpen}
        aria-controls="problem3-content"
        onClick={onToggle}
        >
            Count Occurrences
    </button>

    <div
        id="problem3-content"
        ref={contentRef}
        className={`content ${isOpen ? 'content--open' : ''}`}
        style={{ maxHeight: `${contentMaxHeight}px` }}
    >
        <div className="content__inner">
            
                
                <form onSubmit={(e) => e.preventDefault()}>
                <label>Enter a string and a character to count its occurrences:</label><br/>
                <input type="text" placeholder='Words' name="string" value={str} onChange={(e) => {
                    const newStr = e.target.value;
                    setStr(newStr);
                    
                }}/>
                <input type="text" placeholder='Character' maxLength={1} name="char" value={char} onChange={(e) => {
                    const newChar = e.target.value;
                    setChar(newChar);
                    
                }}/>
                <p style={{fontSize: "10px"}} >
                     {`Count of '${char}' in "${str}" is: ${result}`}
                </p>
                
            </form>
        </div>
    </div>
    </>
  )
}

export default Problem4

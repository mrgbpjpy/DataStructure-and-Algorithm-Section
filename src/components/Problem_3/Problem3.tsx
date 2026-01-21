 
import {useRef, useState} from 'react'

const getSum = (a: number, b: number): number => {
    return a + b
}
const getSub = (a: number, b: number): number => {
    return a - b
}
const getMul = (a: number, b: number): number => {
    return a * b;
}
const getDiv = (a: number, b: number): number => {
    return a / b;
}

const Problem3 = () => {
    const [isOpen, setIsOpen] = useState(false)
    const contentRef = useRef<HTMLDivElement>(null)
    const [contentMaxHeight, setContentMaxHeight] = useState(0)

    const [numA, setNumA] = useState<number | null>(null)
    const [numB, setNumB] = useState<number | null>(null)
    const [operation, setOperation] = useState<string>('');
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
    <h2>Problem3</h2>

    <button 
        type="button"
        className={`collapsible ${isOpen ? 'active' : ''}`}
        aria-expanded={isOpen}
        aria-controls="problem3-content"
        onClick={onToggle}
        >
            Calculator
    </button>

    <div
        id="problem3-content"
        ref={contentRef}
        className={`content ${isOpen ? 'content--open' : ''}`}
        style={{ maxHeight: `${contentMaxHeight}px` }}
    >
        <div className="content__inner">
            <form onSubmit={(e) => e.preventDefault()}>
                <label>Enter two numbers:</label><br/>
                <div > 
                <input type="number" name="a" value={numA ?? ''} onChange={(e) =>setNumA(Number(e.target.value))} style={{textAlign: "center"}} />
                <input type="number" name="b" value={numB ?? ''} onChange={(e) =>setNumB(Number(e.target.value))} style={{textAlign: "center"}}/>
                </div>
                <div >
                    <button type="button" onClick={() => setOperation('+')} style={{height: '5%', width: '5%', fontSize: '10px'}}>+</button>
                    <button type="button" onClick={() => setOperation('-')}style={{height: '5%', width: '5%', fontSize: '10px'}}>-</button>
                    <button type="button" onClick={() => setOperation('*')}style={{height: '5%', width: '5%', fontSize: '10px'}}>*</button>
                    <button type="button" onClick={() => setOperation('/')}style={{height: '5%', width: '5%', fontSize: '10px'}}>/</button>
                    <button type="reset" value="Reset"style={{height: '5%', width: '5%', fontSize: '10px'}}  onClick={() => {
                    setNumA(null);
                    setNumB(null);
                    setOperation('');
                }} >
                    Reset
                </button>
                </div>
               
                <p style={{fontSize: "10px"}} >
                    {(() => {
                        if (numA === null || numB === null || !operation) return '';
                        switch (operation) {
                            case '+':
                                return getSum(numA, numB);
                            case '-':
                                return getSub(numA, numB);
                            case '*':
                                return getMul(numA, numB);
                            case '/':
                                return getDiv(numA, numB);
                            default:
                                throw new Error('Invalid operation');
                        }
                    })()}
                     
                    
                </p>
                
            </form>
        </div>
    </div>
    </>
  )
}

export default Problem3

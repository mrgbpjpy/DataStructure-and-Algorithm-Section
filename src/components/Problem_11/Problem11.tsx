 
import {useRef, useState} from 'react'


const SetWords = (str: string) => {

    if (!str.trim()) return ""; 
    
    const resultArr: string[] = [];
    const sanitized = str.toLowerCase().replace(/[^0-9]/g, '');
    const limit = Number(sanitized || 0);
    for (let i = 1; i <= limit; i++) {
        if(i % 6 === 0 && i % 8 === 0) {
            resultArr.push("FizzBuzz ");
        } else if (i % 6 === 0) {
            resultArr.push("Fizz ");

        } else if (i % 8 === 0) {
            resultArr.push("Buzz ");
        } else{
            resultArr.push(i.toString()+ " ") ;
        }
    }
    return resultArr;
}


function Problem11() {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const [contentMaxHeight, setContentMaxHeight] = useState(0);



    const [words, setWords] = useState("0");
    const Result = SetWords(words);

    const onToggle = () => {
        const nextIsOpen = !isOpen;
        const nextMaxHeight = nextIsOpen && contentRef.current ? contentRef.current.scrollHeight : 0;
        setIsOpen(nextIsOpen);
        setContentMaxHeight(nextMaxHeight);
    };

    return (
        <>
            <h2>Problem 11</h2>

            <button
                type="button"
                className={`collapsible ${isOpen ? 'active' : ''}`}
                aria-expanded={isOpen}
                aria-controls="problem3-content"
                onClick={onToggle}
            >
               FizzBuzz 
            </button>

            <div
                id="problem3-content"
                ref={contentRef}
                className={`content ${isOpen ? 'content--open' : ''}`}
                style={{ maxHeight: `${contentMaxHeight}px` }}
            >
                <div className="content__inner">


                    <form onSubmit={(e) => e.preventDefault()}>
                        <label> This will do FizzBuzz logic</label><br />
                        <input
                            type="text"
                            value={words}
                            inputMode="numeric"
                            onChange={(e) => setWords(e.target.value.replace(/[^0-9]/g, ''))}
                            style={{ width: "500px" }}
                        />
                        <p style={{ fontSize: "10px" }}>
                            {Result}
                        </p>

                    </form>
                </div>
            </div>
        </>
    );
}

export default Problem11;

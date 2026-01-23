 
import {useRef, useState} from 'react'


const SetWords = (str: string) => {

    if (!str.trim()) return ""; 
    // nothing to transform (prevents [""] case)
    // const reverseString = (words: string) => {
    //     return words.split("").reverse().join("");
    // }

    // return reverseString(words);

    const formattedStr = str.toLowerCase().replace(/[^a-zA-Z]/g,  '');
    let count = 0;

    for (let i = 0; i < formattedStr.length; i++) {
        switch (formattedStr[i]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                count++;
                break;
            default:
                break;
        }
    }

    return `Number of vowels: ${count}`;


}


function Problem9() {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const [contentMaxHeight, setContentMaxHeight] = useState(0);



    const [words, setWords] = useState("change me");
    const Result = SetWords(words);

    const onToggle = () => {
        const nextIsOpen = !isOpen;
        const nextMaxHeight = nextIsOpen && contentRef.current ? contentRef.current.scrollHeight : 0;
        setIsOpen(nextIsOpen);
        setContentMaxHeight(nextMaxHeight);
    };

    return (
        <>
            <h2>Problem 9</h2>

            <button
                type="button"
                className={`collapsible ${isOpen ? 'active' : ''}`}
                aria-expanded={isOpen}
                aria-controls="problem3-content"
                onClick={onToggle}
            >
                Count Vowels
            </button>

            <div
                id="problem3-content"
                ref={contentRef}
                className={`content ${isOpen ? 'content--open' : ''}`}
                style={{ maxHeight: `${contentMaxHeight}px` }}
            >
                <div className="content__inner">


                    <form onSubmit={(e) => e.preventDefault()}>
                        <label> This will count vowels in a string</label><br />
                        <input type='text' value={words} onChange={(e) => setWords(e.target.value)} style={{ width: "500px" }} />
                        <p style={{ fontSize: "10px" }}>
                            {Result}
                        </p>

                    </form>
                </div>
            </div>
        </>
    );
}

export default Problem9

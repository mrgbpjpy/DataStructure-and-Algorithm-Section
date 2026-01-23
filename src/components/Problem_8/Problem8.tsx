 
import {useRef, useState} from 'react'


const SetWords = (str: string) => {

    if (!str.trim()) return ""; 
    // nothing to transform (prevents [""] case)
    // const reverseString = (words: string) => {
    //     return words.split("").reverse().join("");
    // }

    // return reverseString(words);

    const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g,  '');
    const reversedStr = formattedStr.split('').reverse().join('');
    return formattedStr === reversedStr ? "It's a palindrome!" : "Not a palindrome.";


}


function Problem8() {
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
            <h2>Problem 8</h2>

            <button
                type="button"
                className={`collapsible ${isOpen ? 'active' : ''}`}
                aria-expanded={isOpen}
                aria-controls="problem3-content"
                onClick={onToggle}
            >
                Palindrome
            </button>

            <div
                id="problem3-content"
                ref={contentRef}
                className={`content ${isOpen ? 'content--open' : ''}`}
                style={{ maxHeight: `${contentMaxHeight}px` }}
            >
                <div className="content__inner">


                    <form onSubmit={(e) => e.preventDefault()}>
                        <label> Palindrome, great for fundamental for Tool normalization, Diff Tool, DNA sequence analysis, Packet Inspectation, Compression Algorithms, Security and Game Development</label><br />
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

export default Problem8

 
import { useRef, useState } from 'react'



const Find_Letters = (arr: string[]): string => {
    // Create a string of the alphabet
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // Find the index of the first letter in the array in the alphabet string
  const startIndex = alphabet.indexOf(arr[0]);
     // Loop through the array
     for (let i = 0; i < arr.length; i++)
     {
        if (arr[i] !== alphabet[startIndex + i]){
            return alphabet[startIndex + i];
        }
     }
  return '';
};





function Problem14() {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const [contentMaxHeight, setContentMaxHeight] = useState(0);



    const [letters, setLetters] = useState('a,b,c,d,f');
    const result = Find_Letters(letters.split(',').map(l => l.trim()).filter(Boolean));

    const onToggle = () => {
        const nextIsOpen = !isOpen;
        const nextMaxHeight = nextIsOpen && contentRef.current ? contentRef.current.scrollHeight : 0;
        setIsOpen(nextIsOpen);
        setContentMaxHeight(nextMaxHeight);
    };

    return (
        <>
            <h2>Problem 14</h2>

            <button
                type="button"
                className={`collapsible ${isOpen ? 'active' : ''}`}
                aria-expanded={isOpen}
                aria-controls="problem14-content"
                onClick={onToggle}
            >
              Find Missing Letter
            </button>

            <div
                id="problem14-content"
                ref={contentRef}
                className={`content ${isOpen ? 'content--open' : ''}`}
                style={{ maxHeight: `${contentMaxHeight}px` }}
            >
                <div className="content__inner">


                    <form onSubmit={(e) => e.preventDefault()}>
                        <label> Enter names separated by commas</label><br />
                        <input
                            type="text"
                            value={letters}
                            onChange={(e) => setLetters(e.target.value.replace(/[^a-zA-Z,\s]/g, ''))}
                            style={{ width: "500px" }}
                        />
                        <p style={{ fontSize: "10px" }}>
                            {result}
                        </p>

                    </form>
                </div>
            </div>
        </>
    );
}

export default Problem14;

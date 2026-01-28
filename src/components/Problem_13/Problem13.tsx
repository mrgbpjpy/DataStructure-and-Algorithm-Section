 
import { useRef, useState } from 'react'


const formatLikes = (arr: string): string => {
  // If the array is empty or undefined, return empty string
  if(!arr || arr.length === 0) return '';

// Parse the string into an array of numbers
  const numbers = arr.split(',').map(num => parseInt(num.trim(), 10)).filter(num => !isNaN(num));
// Add 1 to the length of the array to account for the missing number
  const n = numbers.length + 1;
// Calculate the expected sum of the numbers from 1 to n
  const expectedSum = (n * (n + 1)) / 2;
// Calculate the actual sum of the numbers in the array
  const actualSum = numbers.reduce((sum, num) => sum + num, 0);
// Return the difference between the expected sum and the actual sum
  return String(expectedSum - actualSum);
  
};



function Problem13() {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const [contentMaxHeight, setContentMaxHeight] = useState(0);



    const [numbers, setNumbers] = useState('');
    const result = formatLikes(numbers);

    const onToggle = () => {
        const nextIsOpen = !isOpen;
        const nextMaxHeight = nextIsOpen && contentRef.current ? contentRef.current.scrollHeight : 0;
        setIsOpen(nextIsOpen);
        setContentMaxHeight(nextMaxHeight);
    };

    return (
        <>
            <h2>Problem 13</h2>

            <button
                type="button"
                className={`collapsible ${isOpen ? 'active' : ''}`}
                aria-expanded={isOpen}
                aria-controls="problem13-content"
                onClick={onToggle}
            >
              Find Missing Number
            </button>

            <div
                id="problem13-content"
                ref={contentRef}
                className={`content ${isOpen ? 'content--open' : ''}`}
                style={{ maxHeight: `${contentMaxHeight}px` }}
            >
                <div className="content__inner">


                    <form onSubmit={(e) => e.preventDefault()}>
                        <label> Find Missing Number</label><br />
                        <input
                            type="text"
                            value={numbers}
                            onChange={(e) => setNumbers(e.target.value.replace(/[^0-9,\s]/g, ''))}
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

export default Problem13;

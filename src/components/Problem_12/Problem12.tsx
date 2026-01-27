 
import { useRef, useState } from 'react'


const formatLikes = (rawNames: string) => {
  const names = rawNames
    .split(',')
    .map((n) => n.trim())
    .filter(Boolean);

  const count = names.length;

  if (count === 0) return 'no one likes this';
  if (count === 1) return `${names[0]} likes this`;
  if (count === 2) return `${names[0]} and ${names[1]} like this`;
  if (count === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  return `${names[0]}, ${names[1]} and ${count - 2} others like this`;
};



function Problem12() {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const [contentMaxHeight, setContentMaxHeight] = useState(0);



    const [words, setWords] = useState('');
    const result = formatLikes(words);

    const onToggle = () => {
        const nextIsOpen = !isOpen;
        const nextMaxHeight = nextIsOpen && contentRef.current ? contentRef.current.scrollHeight : 0;
        setIsOpen(nextIsOpen);
        setContentMaxHeight(nextMaxHeight);
    };

    return (
        <>
            <h2>Problem 12</h2>

            <button
                type="button"
                className={`collapsible ${isOpen ? 'active' : ''}`}
                aria-expanded={isOpen}
                aria-controls="problem12-content"
                onClick={onToggle}
            >
              Display Likes
            </button>

            <div
                id="problem12-content"
                ref={contentRef}
                className={`content ${isOpen ? 'content--open' : ''}`}
                style={{ maxHeight: `${contentMaxHeight}px` }}
            >
                <div className="content__inner">


                    <form onSubmit={(e) => e.preventDefault()}>
                        <label> Enter names separated by commas</label><br />
                        <input
                            type="text"
                            value={words}
                            onChange={(e) => setWords(e.target.value.replace(/[^a-zA-Z,\s]/g, ''))}
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

export default Problem12;

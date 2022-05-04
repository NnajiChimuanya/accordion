import React, { useState } from 'react';
import { BiChevronDown } from "react-icons/bi";
import { BiChevronUp } from "react-icons/bi"

function Item({question, ans}) {
    const [showInfo, setShowInfo] = useState(false)
    return (
        <main>
            <div className='item'>
                <div className='head'>
                    <header> {question} </header>
                    <button onClick={() => setShowInfo(!showInfo)}>{showInfo ? < BiChevronUp /> : < BiChevronDown />}</button>
                </div>
                {showInfo && <p>{ans}</p>}
                
            </div>
        </main>
    )
}

export default Item
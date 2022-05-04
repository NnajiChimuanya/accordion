import React, { useState } from 'react';

import Item from "./Item"
import './App.css';
import Question from './Questions';


function App() {

  const [questions, setQuestions] = useState(Question)
  return (
    <div className="container">
      <div className='rows'>
        <div className='row'>
          <div className='col-sm-3'> Questions and Answers about Login</div>
          <div className='col-sm-8 row-row'>
            {questions.map((question) => {
              return <Item key={question.id} {...question} />
            })}
          </div>
        </div>
      </div>
      

      
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  
    let people = ['Chris', 'Andrew', 'Neil'];

    let items = [];
    for (let i = 0; i < people.length; i++) {
        items.push(<div key={i}>Hello {people[i]}</div>);
    }
  
    return (
        <div>
            {items}
        </div>
  );
}

export default App;

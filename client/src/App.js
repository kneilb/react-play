import React from 'react';
import logo from './logo.svg';
import './App.css';
import SayHi from './components/SayHi.jsx';

function App() {
  
    let people = ['Chris', 'Andrew', 'Neil', 'Fred'];

    let items = [];
    for (let i = 0; i < people.length; i++) {
        let person = people[i];
        items.push(<SayHi key={i} unique={i} person={person}></SayHi>);
    }
  
    return (
        <div>
            {items}
        </div>
  );
}

export default App;

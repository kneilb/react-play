import React from 'react';


const SayHi = ({unique, person}) => {
    
    console.log(person);
    let className = 'namey ';
    if ((unique % 2) === 0) {
        className += 'wot';
    }

    return <div className={className} key={unique}>{'Hello ' + person }</div>;
};

// or 
//const SayHi = (props) => {
// let {key, person} = props
//

export default SayHi;

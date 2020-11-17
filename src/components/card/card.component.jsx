import React from 'react';
import './card.styles.css';

export const Card = (props) => (
    <div className='card-container'>
        <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="monster"/>
        <h2> { props.monster.name } </h2>
        <p> { props.monster.email } </p>
    </div>
)

// 0300-6889698
// 0331-2
// Zaina asad and aman asad 
// Munazza Riaz Number 
// 0331-

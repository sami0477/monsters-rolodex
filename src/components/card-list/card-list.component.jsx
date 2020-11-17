import React from "react";
import {Card} from  "../card/card.component"
import "./card-list.styles.css";

export const CardList = props => (
    <div className='card-list'>
        {
            props.monsters.map(monster => (
                <Card key={monster.id} monster={monster}/>
            ))

        }
    </div>
)


{
    // Components take in props
    // Whatever comes in the CardList Component will be available in props.children in component file */
    // Itterating over an array and creating new elements
    // .map returns us the return of whatever function that we pass to it
    // itterating over every element in the array
}
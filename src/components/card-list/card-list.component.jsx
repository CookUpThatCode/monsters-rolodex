import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css'

export const CardList = props => {
    console.log(props);
    return <div className='card-list'>
        {props.monsters.map(monster => (
          // map: pass a function inside, it iterates over monsters, gives you the return of the function
          <Card key={monster.id} monster={monster} />
        ))}
    </div>;
};
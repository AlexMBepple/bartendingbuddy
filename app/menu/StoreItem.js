'use client'
import { Image } from 'next/image';

export function StoreItem(props){
    var selected = true;

    function changeSelected(){
        selected = true
    }

    return (
        <section id={props.name}>
            <img 
                src={props.imageURL}
                alt={props.name}
                height="300px"
                width="300px"
                style={{ objectFit: "cover", cursor: 'pointer'}}
            />
            <h1 className="drink-name"> {props.name}</h1>
            {props.steps.map((step, i) =>(<p key={i}>{step}</p>))}
        </section>
        )

}

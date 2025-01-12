'use client'
import './StoreItem.css';


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
            />
            <h2 className="drink-name"> {props.name}</h2>
            <ul>
            {props.steps.map((step, i) =>(<li key={i}>{step}</li>))}
            </ul>
        </section>
        )

}

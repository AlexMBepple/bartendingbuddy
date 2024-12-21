'use client'
import { Card } from "react-bootstrap";

export function StoreItem(props){
    var selected = true;

    function changeSelected(){
        selected = true
    }

    return (
        <Card>
            <Card.Img
                variant="top"
                src={props.imageURL}
                height="200px"
                style={{ objectFit: "cover", cursor: 'pointer'}}
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4" >
                    <span className="fs-2"> {props.name}</span>
                </Card.Title>
                    <p>
                        {props.steps.map(step =>(
                            <p key={step.key}>
                                <p>{step}</p>
                            </p>
                        ))}
                    </p>
            </Card.Body>
        </Card>
        )

}

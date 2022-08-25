

import './card.css'


export default function Card(props){



    return(
        <div className="card">
            <span>{props.person.name}</span>
            <span>{props.person.height}</span>
            <span>{props.description}</span>
            
            

        </div>
    )
}



















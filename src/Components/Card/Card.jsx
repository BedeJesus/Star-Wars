import './card.css'


export default function Card(props){



    return(
        <>
        <div className="card">
            <span className='name'>{props.person.name}</span>
            <span className='height'>Height: {props.person.height}</span>
            <span className='desc'>{props.description}</span>
            
            
        </div>
        </>
    )
}



















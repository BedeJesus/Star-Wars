import './card.css'


export default function Card(props) {



    return (
        <>
            <div className="card">
                <p className='name'>{props.person.name}</p>
                <p className='height'><span>Height:</span> {props.person.height}</p>
                <p className='desc'>{props.description}</p>
                <p className='planet'><span>Home planet:</span>tatoine</p>

            </div>
        </>
    )
}



















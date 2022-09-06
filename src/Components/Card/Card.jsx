import './card.css'


export default function Card(props) {


    return (
        <>
            <div className="card">
                <p className='name'>{props.person.name}</p>
                <p> <span>Height:</span> {props.person.height}</p>
                <p className='desc'> {props.description}</p>
                <p> <span>Home planet:</span>ainda n</p>

            </div>
        </>
    )
}



















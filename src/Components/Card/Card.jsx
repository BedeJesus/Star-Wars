import './card.css'


export default function Card(props) {


    function CardType() {
        if (props.type === 'character') {

            return (

                <div className="card">
                    <p className='name'>{props.person.name}</p>
                    <p> <span>Height:</span> {props.person.height}</p>
                    <p className='desc'> {props.description}</p>
                    <p> <span>Home planet:</span>ainda n</p>

                </div>

            )

        } else if (props.type === 'term') {
            return (

                <div className="card">
                    <p className='name'>{props.term_name}</p>
                    <p className='desc'> {props.description}</p>
                </div>

            )


        }
    }


    return (
        <>


            {CardType()}
        </>
    )
}



















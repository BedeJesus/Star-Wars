import style from './Menu.module.css'


export default function Menu() {
    return (
        <div className={style.menu}>

            <h1>Star Wars</h1>

            <div className={style.buttons}>
                <a href="/">Personagens</a>
                <a href="/">História</a>
                <a href="/">planetas</a>
            </div>
        </div>
    )
}












import './toggle.css'
import { useContext } from "react"
import Switch from "react-switch"
import { ThemeContext } from "../../App"

export default function Toggle() {

    const {theme,setTheme} = useContext(ThemeContext)

    function handleThemeToggle() {
        setTheme(theme === 'light' ? 'dark': 'light')
    }

    return (
        <div className="toggle">
            <Switch
                onChange={handleThemeToggle}
                checked={theme ==='light'}
                uncheckedIcon={false} 
                checkedIcon={false}
                onColor={'#FFFF00'}/>

        </div>
    )
}











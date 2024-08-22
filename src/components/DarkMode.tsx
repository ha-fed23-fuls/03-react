// 1a Bygg en React-app med en komponent. App-komponenten ska visa en button. När man klickar på den ska ett värde på sidan ökas. Alla state-variabler ska ha en TypeScript-signatur. (Även fast de inte behöver det.)
//
// 1b Lägg till en button som togglar "dark mode" genom att ändra CSS-klass.
import { useState } from 'react'
import './DarkMode.css'

const DarkMode = () => {
	const [darkMode, setDarkMode] = useState<boolean>(false)

	const handleClick: () => void = () => {
		setDarkMode(d => !d)
	}

	const darkClass: string = "dark-mode " + (darkMode ? 'on' : '')
	// console.log('CSS: ' + darkClass)

	return (
		<div className={darkClass}>
			<button onClick={handleClick}> Toggle dark mode </button>
		</div>
	)
}

export default DarkMode

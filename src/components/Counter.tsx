import { SyntheticEvent, useState } from 'react'

type EventCallback = (event: SyntheticEvent) => void

const Counter = () => {
	const [count, setCount] = useState<number>(0)

	const handleClick: EventCallback = () => {
		setCount(count + 1)
	}

	return (
		<div className="counter">
			The count is: {count}.
			<button onClick={handleClick}> +1 </button>
			<button onClick={(): void => {setCount(count + 1)}}> +1 </button>
		</div>
	)
}

export default Counter

// setCount( 5 )
// setCount( x => x + 1 )

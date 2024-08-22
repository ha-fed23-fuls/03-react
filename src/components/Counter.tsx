import { useState } from 'react'

const Counter = () => {
	const [count, setCount] = useState<number>(0)
	// setCount(25)

	return (
		<div className="counter">
			The count is: {count}.
			<button> +1 </button>
		</div>
	)
}

export default Counter

// setCount( 5 )
// setCount( x => x + 1 )

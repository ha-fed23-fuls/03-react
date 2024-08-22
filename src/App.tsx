import './App.css'
import Counter from './components/Counter'
import Profile from './components/Profile'

const App = () => (
	<section>
		<h1> React och TypeScript </h1>
		<Counter />
		<Profile username={'Kalle'} email={'test123@yahoo.com'} />
	</section>
)

export default App

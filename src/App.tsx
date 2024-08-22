import './App.css'
import Counter from './components/Counter'
import DarkMode from './components/DarkMode'
import Profile from './components/Profile'

const App = () => (
	<section>
		<h1> React och TypeScript </h1>
		<Counter />
		<Profile username={'Kalle'} email={'test123@yahoo.com'} />
		<DarkMode />
	</section>
)

export default App

import { Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import ApplicationsPage from './ApplicationsPage'

export default function App() {

	return (
		<Routes>
			<Route path='/' element={<HomePage/>}/>
			<Route path='/applications' element={<ApplicationsPage/>}/>
		</Routes>
	)
}
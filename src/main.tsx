import React from 'react'
import { BrowserRouter } from 'react-router'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './pages/App.tsx'
// import { StrictMode } from 'react'
// import ReactDOM from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
)

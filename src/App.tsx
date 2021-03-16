import React from "react"
import "./App.css"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Engine from "./components/Engine"

const Container: React.FC = ({children}) => (
	<main className="container">{children}</main>
)

const App: React.FC = () => (
	<div className="layout">
		<Header text={"The Hangman Game!"} />
		<Container>
			<Engine />
		</Container>
		<Footer text={"by Eduardo Filipe Rodrigues Marques Silveira"} />
	</div>
)

export default App

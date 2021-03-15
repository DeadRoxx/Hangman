import React from "react"

import Footer from "./components/Footer"
import Header from "./components/Header"
import Engine from "./components/Engine"
import {Container} from "@material-ui/core"

const App: React.FC = () => (
	<>
		<Container maxWidth="lg">
			<Header text={"The Hangman Game!"} />
			<Engine />
			<Footer text={"by Eduardo Filipe Rodrigues Marques Silveira"} />
		</Container>
	</>
)

export default App

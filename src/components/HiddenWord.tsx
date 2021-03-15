import React, {useEffect, useState} from "react"
import {Grid, Button} from "@material-ui/core"

interface Props {
	word: string
	guessedLetters: string[]
}

interface HiddenLetterProps {
	letter: string
	guessed: boolean
}

const HiddenLetter: React.FC<HiddenLetterProps> = ({letter, guessed}) => {
	return (
		<Button
			variant="contained"
			color="secondary"
			style={{
				minHeight: 20,
				minWidth: 20,
				margin: 5
			}}
		>
			{guessed ? letter : "?"}
		</Button>
	)
}

interface Letter {
	letter: string
	guessed: boolean
}

const HiddenWord: React.FC<Props> = ({word, guessedLetters}) => {
	const [hiddenLetters, setHiddenLetters] = useState<Letter[]>([])

	useEffect(() => {
		const wordLetters = word.split("")

		setHiddenLetters(
			wordLetters.map((letter) => ({
				letter,
				guessed: guessedLetters.includes(letter)
			}))
		)
	}, [word, guessedLetters])

	return (
		<Grid container>
			{hiddenLetters.map((hiddenLetter, i) => (
				<Grid>
					<HiddenLetter
						key={i}
						letter={hiddenLetter.letter}
						guessed={hiddenLetter.guessed}
					/>
				</Grid>
			))}
		</Grid>
	)
}

export default HiddenWord

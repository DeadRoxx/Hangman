import React, {useState} from "react"
import {Button, Grid, Typography} from "@material-ui/core"
interface Props {
	letters: string[]
	onSelectLetter: (letter: string) => boolean
}
interface LetterProps {
	letter: string
	onSelectLetter: (letter: string) => boolean
}

const Letter: React.FC<LetterProps> = ({letter, onSelectLetter}) => {
	const [alreadySelected, setAlreadySelected] = useState<boolean>(false)
	return (
		<Button
			onClick={(e) => {
				onSelectLetter(letter)
				setAlreadySelected(true)
			}}
			disabled={alreadySelected}
			color={"primary"}
			variant="contained"
		>
			<Typography>{letter}</Typography>
		</Button>
	)
}

const Letters: React.FC<Props> = ({letters, onSelectLetter}) => {
	return (
		<>
			<Grid container xs={12}>
				{letters.map((letter, i) => {
					return (
						<Grid item key={i} style={{margin: "10px"}}>
							<Letter letter={letter} onSelectLetter={onSelectLetter} />
						</Grid>
					)
				})}
			</Grid>
		</>
	)
}

export default Letters

import React from "react"
import {Grid, Button} from "@material-ui/core"

interface Props {
	wrongLetters: string[]
}

const WrongLetters: React.FC<Props> = ({wrongLetters}) => {
	return (
		<Grid container>
			{wrongLetters.map((letter, i) => (
				<Grid key={i} item>
					<Button
						variant="contained"
						color="primary"
						style={{
							minHeight: 20,
							minWidth: 20,
							margin: 5
						}}
					>
						{letter}
					</Button>
				</Grid>
			))}
		</Grid>
	)
}

export default WrongLetters

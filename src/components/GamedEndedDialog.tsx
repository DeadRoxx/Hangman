import React from "react"
import {
	Button,
	Container,
	Dialog,
	DialogActions,
	DialogContent,
	Typography
} from "@material-ui/core"

interface Props {
	message: string
	info?: string
	gameEnded: boolean
	onRestart: () => void
}

const GameEndedDialog: React.FC<Props> = ({
	gameEnded,
	message,
	onRestart,
	info
}) => (
	<Dialog
		open={gameEnded}
		onClose={() => {}}
		aria-labelledby="gameover-label"
		aria-describedby="gameover-description"
		maxWidth="lg"
	>
		<DialogContent>
			<Container>
				<Typography variant="h3" align="center">
					{message}
				</Typography>
				{info && (
					<Typography variant="h4" align="center">
						{info}
					</Typography>
				)}
				<Typography variant="h4" align="center">
					Try Again?
				</Typography>
			</Container>
		</DialogContent>
		<DialogActions>
			<Button variant="contained" color="primary" onClick={(e) => onRestart()}>
				Yes
			</Button>
		</DialogActions>
	</Dialog>
)

export default GameEndedDialog

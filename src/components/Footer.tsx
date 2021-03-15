import {Typography} from "@material-ui/core"
import React from "react"

interface Props {
	text: string
}

const Footer: React.FC<Props> = ({text}) => {
	return (
		<footer>
			<Typography variant="caption">{text}</Typography>
		</footer>
	)
}

export default Footer

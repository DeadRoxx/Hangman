import {Typography} from "@material-ui/core"
import React from "react"
interface Props {
	text: string
}

const Header: React.FC<Props> = ({text}) => {
	return (
		<Typography variant="h4" align="center" style={{marginTop: 5}}>
			{text}
		</Typography>
	)
}

export default Header

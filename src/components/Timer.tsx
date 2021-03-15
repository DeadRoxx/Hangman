import React from "react"
import {Badge} from "@material-ui/core"
import TimerIcon from "@material-ui/icons/Timer"
import AlarmOffIcon from "@material-ui/icons/AlarmOff"
interface Props {
	seconds: number
}

const Timer: React.FC<Props> = ({seconds}) => {
	return (
		<Badge badgeContent={seconds} color="primary" showZero max={500}>
			{seconds > 0 ? (
				<TimerIcon fontSize="large" />
			) : (
				<AlarmOffIcon fontSize="large" />
			)}
		</Badge>
	)
}

export default Timer

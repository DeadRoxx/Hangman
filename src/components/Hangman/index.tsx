import React, {useEffect} from "react"

import Head from "./Head"
import Body from "./Body"
import Leg from "./Leg"
import Arm from "./Arm"
import Rod from "./Rod"

interface Props {
	errors: number
}

const Hangman: React.FC<Props> = ({errors}) => {
	useEffect(() => {
		console.log(errors)
	}, [errors])

	return (
		<>
			<svg height="400" width="400">
				<Rod />
				<Head show={errors > 0} />
				<Body show={errors > 1} />
				<Arm left={true} show={errors > 2} />
				<Arm left={false} show={errors > 3} />
				<Leg left={true} show={errors > 4} />
				<Leg left={false} show={errors > 5} />
			</svg>
		</>
	)
}

export default Hangman

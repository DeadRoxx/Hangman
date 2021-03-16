import React from "react"

interface Props {
	left: boolean
	show: boolean
}
const Arm: React.FC<Props> = ({left, show}) => {
	return (
		<>
			{show &&
				(left ? (
					<line x1="140" y1="120" x2="120" y2="100" stroke="black" />
				) : (
					<line x1="140" y1="120" x2="160" y2="100" stroke="black" />
				))}
		</>
	)
}

export default Arm

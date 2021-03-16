import React from "react"

interface Props {
	left: boolean
	show: boolean
}

const Leg: React.FC<Props> = ({left, show}) => {
	return (
		<>
			{show &&
				(left ? (
					<line x1="140" y1="150" x2="120" y2="180" stroke="black" />
				) : (
					<line x1="140" y1="150" x2="160" y2="180" stroke="black" />
				))}
		</>
	)
}
export default Leg

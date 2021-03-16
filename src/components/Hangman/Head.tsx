import React from "react"

interface Props {
	show: boolean
}
const Head: React.FC<Props> = ({show}) => (
	<>
		{show && (
			<circle
				cx="140"
				cy="70"
				r="10"
				stroke="black"
				fill="white"
				stroke-width="4"
			/>
		)}
	</>
)

export default Head

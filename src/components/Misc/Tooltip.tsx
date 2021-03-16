import React from "react"

interface Props {
	text: string
	tooltipText: string
}

const Tooltip: React.FC<Props> = ({text, tooltipText}) => {
	return (
		<div className="tooltip">
			{text}
			<span className="tooltiptext">{tooltipText}</span>
		</div>
	)
}

export default Tooltip

import React from "react"

interface Props {
	text: string
}

const Footer: React.FC<Props> = ({text}) => {
	return (
		<footer className="footer">
			<p>{text}</p>
		</footer>
	)
}

export default Footer

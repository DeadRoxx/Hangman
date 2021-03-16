import React from "react"
interface Props {
	text: string
}

const Header: React.FC<Props> = ({text}) => {
	return (
		<header className="header">
			<h3>{text}</h3>
		</header>
	)
}

export default Header

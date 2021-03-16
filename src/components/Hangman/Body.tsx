import React from "react"

interface Props {
	show: boolean
}
const Body: React.FC<Props> = ({show}) => (
	<>{show && <line x1="140" y1="90" x2="140" y2="150" stroke="black" />}</>
)
export default Body

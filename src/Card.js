import './Card.css'

function Card(props) {

	return (
		<div className={`card ${props.disp}`}>
			<h1>{props.title}</h1>
			{props.text}
		</div>

	)
}

export default Card

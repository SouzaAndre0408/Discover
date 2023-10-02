import './styles.css';

export function Card(props) {
  return (
    <div className='card' id={props.id}>
      <strong>{props.name}</strong>
      <small>{props.time}</small>
    </div>
  )
}
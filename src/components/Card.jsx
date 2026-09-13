export function Card(props) {
  return (
    <div className="card-item">
      <div className="img-wrapper">
        <img className="img-card" src={props.imageUrl}/>
      </div>
    </div>
  );
}
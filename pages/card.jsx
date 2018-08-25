
export default (props) => {
  return (
    <div>
      <img src={props.imagen} /><p>{props.points}</p>

      <style jsx>{`
       div {
        display: inline-block;
       }
     `}</style>

    </div>

  )
}
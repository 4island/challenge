import Cards from './card';

export default (props) => {
  return (
    <div>
      {props.listado.map((data, index) => {
        return <Cards key={index} imagen={data.img.url} points={data.cost}></Cards>
      })}
    </div>


    //   <style jsx>{`
    //    div {
    //     display: inline-block;
    //    }
    //  `}</style>



  )
}
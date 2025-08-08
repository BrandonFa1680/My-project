const Part = ({name,exercises}) => {
  return (
    <p>{name} {exercises}</p>
  )
}
const Content = ({parts}) => {
  //console.log(parts)
  return (
    <div>
      {parts.map((p)=>{
        return(
        <div key={p.id}>
          {console.log(p)}
          <Part name={p.name} exercises={p.exercises}/>
        </div>
      )})}
    </div>
  )
}

export default Content
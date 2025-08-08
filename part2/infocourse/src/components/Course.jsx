import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

const Course = ({course}) => {
    return (
        <>
            {course.map(c=> (
                <div key={c.id}>
                    <Header name={c.name}/>
                    <Content parts={c.parts}/> 
                    <Total parts={c.parts}/>   
                </div>
            ))}            
        </>
    )
}

export default Course
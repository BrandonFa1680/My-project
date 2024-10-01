const Total = (props) => {
    const totalExercises = props.parts.reduce((accu, part) => accu + part.exercises)
    return (
        <div>
            <p>Number of exercises {totalExercises}</p>
        </div>
    )
}

export default Total
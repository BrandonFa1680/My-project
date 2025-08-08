const Total = ({parts}) => {
    const total = parts.reduce((acc,curr)=> acc+curr.exercises,0)
    return (
        <div>
            <p><b> total of {total} exercises</b></p>
        </div>
    )
}

export default Total
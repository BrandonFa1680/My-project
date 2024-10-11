const PersonForm = ({ onSubmit, onChange, value }) => {
    return (
        <form onSubmit={onSubmit}>
            <div>name: <input name="name" onChange={onChange} value={value.name} /></div>
            <div>number: <input name="number" onChange={onChange} value={value.number} /></div>
            <div><button type="submit">add</button></div>
        </form>
    )
}

export default PersonForm
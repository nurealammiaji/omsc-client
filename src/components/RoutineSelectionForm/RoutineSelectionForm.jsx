import React from 'react'

const RoutineSelectionForm = () => {
    return (
        <div>
            <form>
                <select defaultValue="Pick a Runtime" className="select select-success">
                    <option disabled={true}>Pick a Runtime</option>
                    <option>npm</option>
                    <option>Bun</option>
                    <option>yarn</option>
                </select>
            </form>
        </div>
    )
}

export default RoutineSelectionForm

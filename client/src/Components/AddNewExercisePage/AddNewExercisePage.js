
import React from 'react';

const AddNewExercisePage = () => {
    return (
        <div>
            <h1 className = "">Add New Exercise</h1>
            <form className = "">
                <label 
                    className = "" 
                    htmlFor = "name"
                >
                    Name:
                </label>
                <input 
                    className = ""
                    type = "text" 
                    name = "name"
                />
                <label 
                    className = "" 
                    htmlFor = "bodypart"
                >
                    Body Part/Muscle Group: This may also change to a drop down.
                </label>
                <input 
                    className = ""
                    type = "text" 
                    name = "bodypart"
                />
                <label 
                    className = "" 
                    htmlFor = "type"
                >
                    Type: This may change to a drop down. 
                </label>
                <input 
                    className = ""
                    type = "text" 
                    name = "type"
                />
                <label 
                    className = "" 
                    htmlFor = "equipment"
                >
                    Equipment:
                </label>
                <input 
                    className = ""
                    type = "text" 
                    name = "equipment"
                />
                <label 
                    className = "" 
                    htmlFor = "notes"
                >
                    Notes:
                </label>
                <input 
                    className = ""
                    type = "text" 
                    name = "notes"
                />
                <button 
                    className = ""
                    type = ""
                >
                    Add Exercise
                </button>
            </form>
            <div>Back</div>
            <div>Logout</div>
        </div>
    );
};

export default AddNewExercisePage;
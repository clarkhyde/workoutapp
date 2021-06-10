
import React from 'react';

const EditExercisePage = () => {
    return (
        <div>
            <h1 className = "">Edit</h1>
            obviously keep in mind the route will have to be dynamically rendered
            <form className = "">
                <label 
                    className = "" 
                    htmlFor = "name"
                >
                    Name
                </label>
                <input 
                    className = ""
                    type = "text" 
                    name = "name"
                />
                <label 
                    className = "" 
                    htmlFor = "body part"
                >
                    Body Part/Muscle Group:
                </label>
                <input 
                    className = ""
                    type = "text" 
                    name = "body part"
                />
                <label 
                    className = "" 
                    htmlFor = "type"
                >
                    Type:
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
                    Submit Changes
                </button>
            </form>
            <div>Back</div>
            <div>Logout</div>
        </div>
    );
};

export default EditExercisePage;
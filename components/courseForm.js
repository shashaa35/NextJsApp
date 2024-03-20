// components/CourseForm.js

import React, { useState } from 'react';

const CourseForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ name, desc });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="desc">Description:</label>
                <input
                    type="text"
                    id="desc"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                />
            </div>
            <button type="submit">Create Course</button>
        </form>
    );
};

export default CourseForm;

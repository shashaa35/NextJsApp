// pages/index.js

import CourseForm from '../components/courseForm';
import UserForm from '../components/courseForm';

const HomePage = () => {
    const handleSubmit = async (courseData) => {
        try {
            const response = await fetch('/api/course', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(courseData),
            });
            if (!response.ok) {
                throw new Error('Failed to create course');
            }
            // Handle success (e.g., show a success message)
            console.log('Course created successfully');
        } catch (error) {
            console.error('Error creating course:', error);
            // Handle error (e.g., show an error message)
        }
    };

    return (
        <div>
            <h1>Create Course</h1>
            <CourseForm onSubmit={handleSubmit} />
        </div>
    );
};

export default HomePage;

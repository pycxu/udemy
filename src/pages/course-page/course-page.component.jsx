import React from 'react';

import './course-page.styles.css';
import NavBar from '../../components/navbar/navbar.component';

class CoursePage extends React.Component {
    constructor () {
        super();
        this.state = {

        }
    }

    render () {
        return (
            <div className="main-content-wrapper">
                <NavBar />
                <div className="main-content">
                    <div>Topic menu</div>
                    <div>Non purchase actions</div>
                    <div>Course info</div>
                    <div>What you'll learn</div>
                    <div>Course Content</div>
                    <div>Requirements</div>
                    <div>description</div>
                    <div>Featured review</div>
                    <div>Students also bought</div>
                    <div>Frequently bought together</div>
                    <div>Instructor</div>
                    <div>Student Feedback</div>
                    <div>More courses by Instructor</div>
                </div>
                <div>Footer</div>
            </div>
        );
    }
}

export default CoursePage;
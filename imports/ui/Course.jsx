import React from 'react';
import "./styles/Course.css";

export const Course = ({ course }) => {
  return(
    <div className="post">
        <h2>{course.subject + " " + course.subject_code}</h2>
        <p>{course.name}</p>
    </div>
  );
};
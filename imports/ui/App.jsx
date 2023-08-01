import React from 'react';
import "./styles/App.css"
import { Hello } from './Hello';
import { useTracker, useFind } from 'meteor/react-meteor-data';
import { CoursesCollection } from '/imports/api/CoursesCollection';
import { Course } from './Course';
import { Mongo } from 'meteor/mongo'

export const App = () => {
  Meteor.subscribe("courses");
  const courses = useTracker( () =>  CoursesCollection.find({subject:"ECN"}).fetch());
  console.log(courses);
  return (
    <div className="app-container">
      <h1>Welcome to Meteor!</h1>
      <Hello/>
      <div className="post-container">
        <ul>
          { courses.map(course => <Course key={ course._id } course={ course }/>) }
        </ul>
      </div>
    </div>

  )
};
import { Meteor } from 'meteor/meteor';
import { CoursesCollection } from '/imports/api/CoursesCollection';

const insertCourse = courseSubject => CoursesCollection.insert({ subject: courseSubject });

Meteor.publish('courses', function () {
  return CoursesCollection.find({});
});

Meteor.startup(() => {

  if (CoursesCollection.find().count() === 0) {
    [
      'First Task',
      'Second Task',
      'Third Task',
      'Fourth Task',
      'Fifth Task',
      'Sixth Task',
      'Seventh Task'
    ].forEach(insertCourse)
  }
});
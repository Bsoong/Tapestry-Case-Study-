const mongoCollections = require("./mongoCollections");
const spotlights = mongoCollections.spotlights;
const locations = mongoCollections.locations;
const {ObjectId} = require("mongodb");
// const axios = require("axios");

module.exports = {

  async create(name, title, officeName, date, description, likes){
    if(typeof(name) !== "string"){
      throw "Error: Must provide a name of type string";
    }
    if(typeof(title) !== "string" || !(title)){
      throw "Error: Must provide a title of type string";
    }
    if(!Array.isArray(officeName) || !(officeName)){
      throw "Error: Must provide an array of officeName";
    }
    if(typeof(date) !== "number" || !(date)){
      throw "Error: Must provide a date of type number between 1 and 5"
    }
    if(typeof(description) !== "string" || !(description)){
      throw "Error: Must provide a description of type string";
    }
    if(typeof(likes) !== "number"){
      throw "Error: Must provide likes of type number";
    }
    const courseCollection = await spotlights();

    let newCourse = {
      Name: name,
      title: title,
      officeName: officeName,
      date: date,
      description: description,
      likes: likes,
    };

    const insertInfo = await courseCollection.insertOne(newCourse);
    if (insertInfo.insertedCount === 0){
      throw "Could not add course";
    }
    const newId = insertInfo.insertedId;
    return await this.getCourseById(ObjectId(newId).toString());
  },

  async getAllspotlights(){
    const courseCollection = await spotlights();
    const spotlightsArray = await courseCollection.find().toArray();
    return spotlightsArray;
  },

  async getCourseById(id){
    if(!id || typeof(id) !== "string"){
      throw "Error: You must provide an input id of type 'string'";
    }
    const courseCollection = await spotlights();
    const course = await courseCollection.findOne({ _id: ObjectId(id) });

    if (!course){
      throw "Course not found";
    }

    return course;
  },

  async getCourseByName(name){
    if(typeof(name) !== "string"){
      throw "Error: Name must be a string";
    }

    const courseCollection = await spotlights();
    const course = await courseCollection.findOne({ courseName: name });

    if(course===null){
      throw "Course not found";
    }

    return course;
  },

  async getCourseBytitle(title){
    if(typeof(title) !== "string"){
      throw "Error: title must be a string";
    }

    const courseCollection = await spotlights();
    const course = await courseCollection.findOne({ coursetitle: title });

    if(!course){
      throw "Course not found";
    }

    return course;
  },

  async getCourseByProfessor(officeName){
    if(!Array.isArray(officeName)){
      throw "Error: officeName must be an array";
    }

    const courseCollection = await spotlights();
    const course = await courseCollection.findOne({ officeName: officeName });

    if(!course){
      throw "Course not found";
    }

    return course;
  },


  async updatedate(id, date){
    if(typeof(id) !== "string"){
      throw "Error: Id must be a string";
    }
    if(typeof(date) !== "number"){
      throw "Error: date must be a number";
    }
    const courseCollection = await spotlights();
    // const course = await courseCollection.findOne({ _id: ObjectId(id) });
    // if(dateList.length!=0){
    //   let totaldate = 0;
    //   for(let i =0; i<dateList.length; i++){
    //       let rate = dateList[i];
    //       totaldate+=rate.date;
    //   }
    //   avg = totaldate/dateList.length;
    // }

    const updatedInfo = await courseCollection.updateOne({ _id: ObjectId(id)}, {$set: {avgdate: date}});

    if (updatedInfo.modifiedCount === 0) {
      throw "Could not update course successfully.";
    }
    return await this.getCourseById(id);
  },

  async removeCourse(id) {
    if(!id){
      throw "You must provide an id to search for";
    }
    if(typeof(id) !== "string"){
      throw "Error: Id must be a string";
    }
    return spotlights().then(courseCollection => {
      return courseCollection.removeOne({ _id: id }).then(deletionInfo => {
        if (deletionInfo.deletedCount === 0) {
          throw `Could not delete course with id of ${id}`;
        }
      });
    });
  }
};

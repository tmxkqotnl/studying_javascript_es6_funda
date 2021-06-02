export default class Lecture{
  constructor(props){
    this.lectures = ['javascript','es6'];
  }
  getLectures(){
    return this.lectures;
  }
  getTime(){
    return new Date();
  }
}
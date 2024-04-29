  class  User {
    constructor (){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;

 get   fullname(){
        return this.firstName + " " + this.lastName;
    };
    getbirthyear (){
        return new Date().getFullYear() - this.age;
    };
    }
   
  class Student extends User  (){
    constructor (firstName, lastName,age,group,avarageGrade){
           super(firstName, lastName,age)
           this.group = group;
           this.avarageGrade = avarageGrade;
    }
     isElegibleForScholorship(){
    
        return avarageGrade => 4? "true" : "false"
     }
  }
 
  const student1 = new Student ("Tom","cruise",60,"50bc",4.9);
  const student2 = new Student ("Leonard","Dicaprio",49,"62c",3.9);
  

  class Teacher extends User (){
     constructor(firstName, lastName,age,groups,yearsOfExperience){
        super(firstName,lastName,age)
        this.groups = groups;
        this.yearsOfExperience =   yearsOfExperience;
     }
     isGroupTeacher(){
        return groups.includes(group) ? "true" : "false";
     }
  }
  const teacher1 = new Teacher("Brand","Pitt" 59,["50b" "51c"],41);
  

  
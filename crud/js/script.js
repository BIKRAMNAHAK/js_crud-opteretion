
let fname = document.getElementById("Fname");
let lname = document.getElementById('Lname');
let fathername = document.getElementById('Fathername');
let gender = document.getElementById('gen');
let Courses = document.getElementById('Course');
let email = document.getElementById('Email');
let mobile = document.getElementById('mobi');
let cites = document.getElementById('city');
let states = document.getElementById('state');
let pincode = document.getElementById('pin');
let date = document.getElementById('dob');
let studentlist = document.getElementById('studentcard');
let counting = document.getElementById('count');
let namebody = document.getElementById('nameBody');


let student = [];   // this is array
let index;        // this is store id 
let editCard = false; // 


// get student data from localstorege 
const myFormGet = () => { //get object in array format

  let myobj = JSON.parse(localStorage.getItem('mystudentForm')); // myobj contain store value of local storage

  if (myobj) {
    return myobj;
  } else {
    return [];
  }

}



student = myFormGet(); // assagin to  object in array


// create a from whene click to submit button
const myForm = () => {
  event.preventDefault();
  if (!editCard) {
    let mystudent = { // creat to a object for mult   ipei students data store

      fname: fname.value,
      lname: lname.value,
      fathername: fathername.value,
      gender: gender.value,
      Courses: Courses.value,
      email: email.value,
      mobile: mobile.value,
      cites: cites.value,
      states: states.value,
      pincode: pincode.value,
      date: date.value,
      id: student.length + 1,

    }

    student.push(mystudent); // sending nuw students data in object 
    /*
      localstorege.setitem is works for set to all data in localstorege
      JOSN.stringify () is convert to our data in string format 
    */
    localStorage.setItem('mystudentForm', JSON.stringify(student));  // this is for set to all data store in local storege of  browser 

  } else {

    let cardUpdate = student.map((students) => {
      if (students.id == index) {
        return {

          fname: fname.value,
          lname: lname.value,
          fathername: fathername.value,
          gender: gender.value,
          Courses: Courses.value,
          email: email.value,
          mobile: mobile.value,
          cites: cites.value,
          states: states.value,
          pincode: pincode.value,
          date: date.value,
          id: index,

        }
      }
      return students;
    });
    localStorage.setItem('mystudentForm', JSON.stringify(cardUpdate));
    student = myFormGet();

  }


  // this line clare to all input tag after filling to student data
  fname.value = '';
  lname.value = '';
  email.value = '';
  gender.value = '';
  Courses.value = '';
  mobile.value = '';
  cites.value = '';
  states.value = '';
  fathername.value = '';
  pincode.value = '';
  date.value = '';
  editCard = false;


  myStudentList(); // this is coll to creat all students data in a card format



}

//display section whene entry to student data

const myStudentList = () => { // this is function create to print all students data in card format 

  studentcard.innerHTML = ""; // studentcard this is a id of  html.....this line can be empty to before fill this form

  if (student.length > 0) { // this condition is difaine to if student array is max to lenth 0 then true part create a new card 

    student.forEach(slist => { // foreach method works to create a new card base sudent array length (slist is get student data one by one)
      studentcard.innerHTML +=
        `<div class="card col-3  border border-0">
         <div class="bg-info rounded col-12">
            <div class=" p-3 border rounded">
             <div>
                First Name :-
               <span>${slist.fname}</span>
             </div>
             <div>
                Last Name :-
              <span>${slist.lname}</span>
            </div>
            <div>
                Father Name :-
              <span>${slist.fathername}</span>
            </div>
            <div>
                Gender :-
              <span>${slist.gender}</span>
            </div>
            <div>
                course :-
              <span>${slist.Courses}</span>
            </div>
            <div>
                city :-
              <span>${slist.cites}</span>
            </div>
            <div>
            District :-
              <span>${slist.states}</span>
            </div>
            <div>
            pincode :-
              <span>${slist.pincode}</span>
            </div>
            <div>
            Email id :-
              <span>${slist.email}</span>
            </div>
            <div>
            D.O.B :-
              <span>${slist.date}</span>
            </div>
            <div>
            mobile :-
              <span>${slist.mobile}</span>
            </div>
            </div>
            <div class="d-flex">
            <button class="btn btn-primary col-4 " onclick="myFromEdit(${slist.id})">Edit</button>
            <button class="btn btn-success col-4" onclick="select(${slist.id})">Select</button>
            <button class="btn btn-danger col-4" onclick="myFromDelete(${slist.id})">Delete</button>
            </div>
         </div>`
    });

  } else {
    studentcard.innerHTML = "Student Data Not Found..";  // if not get anty student data then this massage print to showing costomer 
  }

}

myStudentList(); // never clere card in display

const myFromEdit = (id) => {
  let editstudentCard = student.find((edit) => {
    return edit.id == id;
  })
  // console.log(editstudentCard);  

  if (editstudentCard !== undefined) {
    fname.value = editstudentCard.fname;
    lname.value = editstudentCard.lname;
    fathername.value = editstudentCard.fathername;
    gender.value = editstudentCard.gender;
    Courses.value = editstudentCard.Courses;
    cites.value = editstudentCard.cites;
    states.value = editstudentCard.states;
    pincode.value = editstudentCard.pincode;
    email.value = editstudentCard.email;
    date.value = editstudentCard.date;
    mobile.value = editstudentCard.mobile;
  } else {
    studentlist.innerHTML = "Student is not found";
  }

  editCard = true;
  index = id;
}

const myFromDelete = (id) => {
  let deletecard = student.findIndex((deleteStudent) => {
    return deleteStudent.id == id;
  })
  if (deletecard != -1) {
    student.splice(deletecard, 1);
    localStorage.setItem('mystudentForm', JSON.stringify(student));
  } else {
    console.log("data is not found");


  }

  myStudentList();
}


student = myFormGet();
myStudentList(student);

// set data in index
const indexData = (selectdata) => {
  // Add your logic here
}

let selectitem = 0;
const select = (id) => {
  let student = myFormGet();
  let selectdata = student.find(student => student.index == id);
  let newStudent = JSON.parse(localStorage.getItem('mystudentForm')) || [];
  newStudent.push(selectdata);
  indexData(selectdata);

  selectitem++;
  counting.innerHTML = `${selectitem}+`;
  localStorage.setItem('selectStudent', JSON.stringify(newStudent));
  console.log("Date In Local Storage...");
}


// model

student = myFormGet();
myStudentList(student);

const nodelShow = () => {

  let showArray = JSON.parse(localStorage.getItem('mystudentForm')) || [];
  let showName = showArray.map(ele => ele.fname).join(" , ");
  namebody.innerHTML = `Select Name : ${showName}`;

}

let numberCount = 0;

const addNumber = () => {

  student = myFormGet();
  let selectData = student.find(data => data.index == index);
  let showArray = JSON.parse(localStorage.getItem('selectData')) || [];
  showArray.push(selectData);
  nodelShow();

  numberCount++;
  counting.innerHTML = `${numberCount} + `;
  localStorage.setItem('selectNUmber',JSON.stringify(numberCount));
  console.log("Date in LocalStorage and Countig Body...");


}







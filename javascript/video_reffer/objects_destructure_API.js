const  course={
    coursename:'js in hindi',
    price:'999',
    courseInstructor:'Akash Biswas'
}

const {courseInstructor} = course
console.log(`${courseInstructor}`);

// Destructuring Concepts
const {courseInstructor: instruct} = course
console.log(`${instruct}`);



const course={
    courseName: "JavaScript",
    price: "999",
    coureseInstructor: "Hitesh"
}
//console.log(course.price) This is normal method

const{coureseInstructor:ins}=course
console.log(ins) // This is called object destructring
class Student {
    constructor(sTd,sName){
        this.id = sTd;
        this.name = sName;
        this.college = "Dhaka College"
    }
}

const student1 = new Student(15, "korim");
const student2 = new Student(20, "Johir");
console.log(student1,student2);

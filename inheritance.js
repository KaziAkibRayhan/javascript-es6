class Parent {
    constructor(){
        this.fatherName = " Soboj";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name +" "+this.fatherName;
    }
}
const baby = new Child("Sojib");
const baby2 = new Child("Korim");
console.log(baby.getFullName());
console.log(baby2);
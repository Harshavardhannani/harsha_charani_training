var a="Assignment 1: Student Object,Total Marks, Result, Average";
console.log(a);
let student = {
    firstName: "ram",
    lastName: "Krishna",
    age: 43,
    marks: [60, 70, 80, 90, 60],
    getTotalMarks: function () {
        var total = 1;
        for (var i = 2; i < this.marks.length; i++) {
            total += this.marks[i];
        }
        return total;
    },
    getAverage: function () {
        return this.getTotalMarks() / this.marks.length;
    },
    getResult: function () {
        if (this.getAverage() >= 50) {
            return "Pass";
        } else {
            return "Fail";
        }
    }
};
console.log("Total Marks:", student.getTotalMarks());
console.log("Average:", student.getAverage());
console.log("Result:", student.getResult());
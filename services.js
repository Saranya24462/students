var mongoose = require("mongoose");
var mongoDB = "mongodb://127.0.0.1/students";
mongoose.connect(mongoDB, {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, "Mongo db connection error"))

var apiService = function () {

}

module.exports = apiService;
apiService.prototype.init = function () {

}

apiService.prototype.save = function (input) {

    var schema = mongoose.Schema({
        name: String,
        age: Number,
        mark: Number,
        grade: String

    })
    var studentData = mongoose.model('student', schema, "students")

    var studentInfo = new studentData({
        name: input.name,
        age: input.age,
        mark: input.mark,
        grade: input.grade
    })

    return db.collection("students").insert(studentInfo);
}

apiService.prototype.findData = function () {

    var schema = mongoose.Schema({
        name: String,
        age: Number,
        mark: Number,
        grade: String

    })
    var studentData = mongoose.model('student', schema, "students")


    return studentData.find({}, function (error, results) {
        if (error) return handleError(error);
        console.log(results)

    })
}
apiService.prototype.findDatabasedonGrade = function (input) {

    var schema = new mongoose.Schema({
        grade: String,
    })

    var studentData = mongoose.model('student', schema,'students');

    return studentData.find({'grade': input.grade}, {
        'name': 1,
        '_id': 0,
        'age': 1,
        'mark': 1,
        'grade':1
    }, function (error, results) {
        if (error) return handleError(error);
        console.log(results)
    })
}
var apiActions = require("./actions.js")

var apiRoutes = function (app) {
    this.app = app;
    this.apiActionInstance = new apiActions(app)
}

module.exports = apiRoutes;

apiRoutes.prototype.init = function (app) {
    var self = this;
    var app = this.app;

    app.get('/', function (req, res) {

        res.send({"test": "ok"})

    })

    app.post('/studentDetails', function (req, res) {

        self.apiActionInstance.saveStudentDetails(req, res)

            .then(function (result) {
                console.log("Result of /studentDetails", result)
                res.send(result)
            })
            .catch(function (error) {
                res.send(error.message)
            })


    })


    app.get('/list/students', function (req, res) {

        self.apiActionInstance.getStudentsData()
            .then(function (result) {
                console.log("Result of list/students", result)
                res.send(result)
            })
            .catch(function (error) {
                res.send(error.message)
            })
    })

    app.get("/student/grades", function (req, res) {

        self.apiActionInstance.getDataBasedStudentGrade(req, res)
            .then(function (result) {
                console.log("Result of list/students", result)
                res.send(result)
            })
            .catch(function (error) {
                res.send(error.message)
            })
    })

}
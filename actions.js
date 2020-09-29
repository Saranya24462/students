var apiService = require("./services")


var apiActions = function (app) {
    this.app = app;
    this.apiServiceInstance = new apiService()
}

module.exports = apiActions;

apiActions.prototype.init = function () {

}

apiActions.prototype.saveStudentDetails = function (request, response) {
    var self = this;
    var input = request.body;
    var response = {
        status: "FAILURE",
        data: {},
        error: {}
    }
    console.log("input data for saveStudentDetails", input)

    return new Promise(function (resolve, reject) {
        self.apiServiceInstance.save(input)
            .then(function (result) {
                if (result != null) {
                    response['status'] = "SUCCESS";
                    response['data']['message'] = "Student data Saved Successfully";
                    resolve(response)

                } else {
                    response['error']['message'] = "Data Not Inserted";
                    resolve(response)
                }

            })
            .catch(function (error) {
                response['error']['message'] = error.message;
                reject(response)
            })
    })


}

apiActions.prototype.getStudentsData = function () {
    console.log("Enter into getStudentsData ")
    var self = this;
    var response = {
        status: "FAILURE",
        data: {},
        error: {}
    }
    return new Promise(function (resolve, reject) {
        self.apiServiceInstance.findData()
            .then(function (result) {
                if (result != null) {
                    response['status'] = "SUCCESS";
                    response['data']['students'] = result;
                    resolve(response)

                } else {
                    response['error']['message'] = "No Students in database ";
                    resolve(response)
                }

            })
            .catch(function (error) {
                response['error']['message'] = error.message;
                reject(response)
            })
    })
}


apiActions.prototype.getDataBasedStudentGrade = function (request, response) {
    console.log("Enter into getStudentsData ")
    var input = request.query;
    var self = this;
    var response = {
        status: "FAILURE",
        data: {},
        error: {}
    }
    return new Promise(function (resolve, reject) {
        self.apiServiceInstance.findDatabasedonGrade(input)
            .then(function (result) {
                console.log("result", result)
                if (result && result.length > 0) {
                    response['status'] = "SUCCESS";
                    response['data']['students'] = result;
                    resolve(response)

                } else {
                    response['error']['message'] = "No Students data in database ";
                    resolve(response)
                }

            })
            .catch(function (error) {
                response['error']['message'] = error.message;
                reject(response)
            })
    })


}
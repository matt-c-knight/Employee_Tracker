function addDepartment() {

}

function addRole() {

}

function addEmployee() {

}

function viewDepartment() {
    connection.query("SELECT * FROM department", function(err,res) {
        if(err) throw err;
        start();
    })
}

function viewRole() {
    connection.query("SELECT * FROM role", function(err,res) {
        if(err) throw err;
        start();
    })
}

function viewEmployee() {
    connection.query("SELECT * FROM employee", function(err,res) {
        if(err) throw err;
        start();
    })
}

function updateRole() {

}



const Employee = require('../lib/Employee');

//test to ensure employee has necessary properties
test('checks for all employee properties',()=>{
    const employee = new Employee('name',1,'myemail@company.com');
    expect (employee.name).toEqual(expect.any(String));
    expect (employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

//getName, getId, getEmail, getRole (employee) tests
test('checks that employee name was created',()=>{
    const employee = new Employee('name',1,'myemail@company.com');
    expect (employee.getName()).toEqual(expect.any(String));
});
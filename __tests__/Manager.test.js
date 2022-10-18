const Manager = require('../lib/Manager');

//test to ensure Intern has necessary properties
test('checks for all employee inherited properties',()=>{
    const manager = new Manager('namew',4,'myemailw@company.com',125);
    expect (manager.name).toEqual(expect.any(String));
    expect (manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('checks that role is equal to Manager',()=>{
    const manager = new Manager('namew',4,'myemailw@company.com',125);
    expect(manager.getRole()).toBe('Manager');
});
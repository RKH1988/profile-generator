const Intern = require('../lib/Intern');


//test to ensure Intern has necessary properties
test('checks for all employee inherited properties',()=>{
    const intern = new Intern('namex',3,'myemailx@company.com','UNC');
    expect (intern.name).toEqual(expect.any(String));
    expect (intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

//getSchool and getRole (intern) tests
test('checks that intern GitHub was created',()=>{
    const intern = new Intern('namex',3,'myemailx@company.com','UNC');
    expect(intern.getSchool()).toEqual(expect.any(String));
});

test('checks that role is equal to Intern',()=>{
    const intern = new Intern('namex',3,'myemailx@company.com','UNC');
    expect(intern.getRole()).toBe('Intern');
});

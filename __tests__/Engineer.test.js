const Engineer = require ('../lib/Engineer');

//test to ensure Engineer has necessary properties
test('checks for all employee inherited properties',()=>{
    const engineer = new Engineer('namey',2,'myemaily@company.com','mygithub');
    expect (engineer.name).toEqual(expect.any(String));
    expect (engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
});

//getGithub and getRole (Engineer) tests
test('checks that engineer GitHub was created',()=>{
    const engineer = new Engineer('namey',2,'myemaily@company.com','mygithub');
    expect(engineer.getGithub()).toEqual(expect.any(String));
});

test('checks that role is equal to Engineer',()=>{
    const engineer = new Engineer('namey',2,'myemaily@company.com','mygithub');
    expect(engineer.getRole()).toBe('Engineer');
});

const express = require("express");
const faker = require("faker");
const app = express();
const port = 8000;

class User{
    constructor(){
        this._id = faker.datatype.uuid();
        this.firstName= faker.name.firstName();
        this.lastName= faker.name.lastName();
        this.phoneNumber= faker.phone.phoneNumber();
        this.email= faker.internet.email();
        this.password= faker.internet.password();
    }
};

class Company{
    constructor(){
        this._id= faker.datatype.uuid();
        this.name= faker.company.companyName();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }

    }
}

app.get("/api/users/new", (req,res)=>{
    let newUser= new User()
    res.json({data: newUser})
});

app.get("/api/companies/new",(req,res)=>{
    let newCompany = new Company()
    res.json({data: newCompany})
});

app.get("/api/user/company",(req, res)=>{
    res.json([new User(), new Company()])
})

// app.get("/api/",(req, res)=>{
//     res.json({status:"ok", mgs: "hello world"})
// })

app.listen( port, () => console.log(`listening on port: ${port}`));

import homepage from "../pageobjects/homepage.js"
import login from "../pageobjects/login.js"


describe('login test',()=>{



it ("login with Invalid Email",async()=>{

    await homepage.Homepage
    await login.userlogin("invalid@gmail.com", "test@123")
    
})

it ("login with Invalid Password",async()=>{

    await homepage.Homepage
    await login.userlogin("shihabzzhasan@gmail.com", "invalid@test")
    
  

})

it(" login with valid credentials",async()=>{

    await homepage.Homepage
    await login.userlogin("shihabzzhasan@gmail.com", "test@123")
    
    
    })


    it("verify User",async()=>{

    await login.verifyuser();
    })

})

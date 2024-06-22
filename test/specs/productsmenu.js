import homepage from "../pageobjects/homepage.js"
import menuproduct from "../pageobjects/menuproduct.js"



describe("menu product",()=>{

it ("Products from menu",async()=>{
await homepage.Homepage
await menuproduct.productmenu();

})

it("Page Verify",async()=>{

await menuproduct.pageverify();

})


})
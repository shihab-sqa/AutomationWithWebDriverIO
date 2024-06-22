import homepage from "../pageobjects/homepage.js"
import checkout from "../pageobjects/checkout.js"


describe("Product checkout",()=>{

it("Add product",async()=>{
await homepage.Homepage
await checkout.selectproduct()

})


it ("product add to cart",async()=>{

await checkout.cartview("3");

})

it(" Customer login",async()=>{

await checkout.customerlogin("shihabzzhasan@gmail.com","test@123")

})

it("Address",async()=>{

await checkout.address("Shihab","Z Hasan","Dhaka","Dhaka","1215","01747834813")

})

it("Order Place",async()=>{

await checkout.Order();

})

})
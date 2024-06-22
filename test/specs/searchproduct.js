import homepage from "../pageobjects/homepage.js"
import search from "../pageobjects/search.js"


describe("Product Search",()=>{

it("Search Product By Name",async()=>{
await homepage.Homepage

 await search.searchproduct("Jacket")


})


})
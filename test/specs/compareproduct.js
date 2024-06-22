import homepage from "../pageobjects/homepage.js";
import productcompare from "../pageobjects/productcompare.js";


describe("Product comparison",()=>{


it("Compare Product ",async()=>{

await homepage.Homepage

await productcompare.productcomparison();

})

it("Compare Page verify",async()=>{

await productcompare.gettext();


})


})
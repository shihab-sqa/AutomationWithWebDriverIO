class checkout{

get productlist(){

return $("//span[@class='action more button']")

}

get productsize(){

return $("//div[@class='swatch-opt-1997']//div[@id='option-label-size-143-item-172']")

}

get productcolor(){

return $("//*[@id='option-label-color-93-item-49']")

}


get cartadd(){

return $("(//button[@title='Add to Cart'])[1]")

}

get viewcart(){

return $("//header/div[2]/div[1]/a[1]")

}
get increaseitem(){

    return $("/html[1]/body[1]/div[2]/header[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[4]/ol[1]/li[1]/div[1]/div[1]/div[2]/div[2]/input[1]")
}

get updatecart(){


    return $("/html[1]/body[1]/div[2]/header[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[4]/ol[1]/li[1]/div[1]/div[1]/div[2]/div[2]/button[1]/span[1]")
}

get clickcheckout(){


return $("#top-cart-btn-checkout")

}

get customeremail(){

    return $("#customer-email")
}

get customerpass(){

    return $("#customer-password")
}

get signin(){

return $("//button[@class='action login primary']")

}

get login(){

    return $("//span[normalize-space()='Login']")
}

get newaddress(){

return $("//span[normalize-space()='New Address']")

}


get firstname(){

return $("/html[1]/body[1]/div[3]/aside[2]/div[2]/div[1]/div[1]/form[1]/div[1]/div[1]/div[1]/input[1]")

}

get lastname(){

    return $("/html[1]/body[1]/div[3]/aside[2]/div[2]/div[1]/div[1]/form[1]/div[1]/div[2]/div[1]/input[1]")
}



get street(){
return $("/html[1]/body[1]/div[3]/aside[2]/div[2]/div[1]/div[1]/form[1]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/input[1]")

}
get city(){

    return $("/html[1]/body[1]/div[3]/aside[2]/div[2]/div[1]/div[1]/form[1]/div[1]/div[4]/div[1]/input[1]")
}
get state(){
return $("/html[1]/body[1]/div[3]/aside[2]/div[2]/div[1]/div[1]/form[1]/div[1]/div[5]/div[1]/select[1]")

}

get zip(){

    return $("/html[1]/body[1]/div[3]/aside[2]/div[2]/div[1]/div[1]/form[1]/div[1]/div[7]/div[1]/input[1]")
}

get country(){
return $("/html[1]/body[1]/div[2]/main[1]/div[2]/div[1]/div[2]/div[4]/ol[1]/li[1]/div[2]/form[2]/div[1]/div[8]/div[1]/select[1]")

}

get phone(){
return $("/html[1]/body[1]/div[3]/aside[2]/div[2]/div[1]/div[1]/form[1]/div[1]/div[9]/div[1]/input[1]")

}

get clickonship(){

    return $("/html[1]/body[1]/div[3]/aside[2]/div[2]/footer[1]/button[1]/span[1]")
}

get nextbutton(){
return $("/html[1]/body[1]/div[2]/main[1]/div[2]/div[1]/div[2]/div[4]/ol[1]/li[2]/div[1]/div[3]/form[1]/div[3]/div[1]/button[1]/span[1]")

}
get clickplaceorder(){

return $("/html[1]/body[1]/div[3]/main[1]/div[2]/div[1]/div[2]/div[4]/ol[1]/li[3]/div[1]/form[1]/fieldset[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[4]/div[1]/button[1]/span[1]")

}


async selectproduct(){

(await this.productlist).click(); 

await browser.pause(3000);
(await this.productsize).click();
await browser.pause(3000);
(await this.productcolor).click();
await browser.pause(3000);
(await this.cartadd).click();
await browser.pause(3000);

}


async cartview(value){


(await this.viewcart).click();
await browser.pause(5000);

(await this.increaseitem).setValue(value);
await browser.pause(3000);
(await this.updatecart).click();

await browser.pause(2000);
(await this.clickcheckout).click();
await browser.pause(3000);

}

async customerlogin(email,pass){


(await this.customeremail).setValue(email);
await browser.pause(5000);

(await this.customerpass).setValue(pass);
await browser.pause(3000);

(await this.login).click();
await browser.pause(3000);

}

async address(first,last,street,city,zip,phone){

(await this.newaddress).click();
await browser.pause(3000);
(await this.firstname).setValue(first);
await browser.pause(3000);
(await this.lastname).setValue(last);
await browser.pause(3000);
(await this.street).setValue(street);
await browser.pause(3000);
(await this.city).setValue(city);
await browser.pause(3000);
(await this.state).selectByIndex(10)
await browser.pause(3000);
(await this.zip).setValue(zip);
await browser.pause(3000);
(await this.country).scrollIntoView();
(await this.country).selectByVisibleText("Bangladesh");
await browser.pause(3000);
 (await this.phone).scrollIntoView();
(await this.phone).setValue(phone);
await browser.pause(3000);
(await this.clickonship).click();
await browser.pause(3000);

}

async Order(){
    (await this.nextbutton).scrollIntoView();
    await browser.pause(3000);

    (await this.nextbutton).click();
    await browser.pause(3000);

    (await this.clickplaceorder).click();
    await browser.pause(3000);


    
}

}

export default new checkout();
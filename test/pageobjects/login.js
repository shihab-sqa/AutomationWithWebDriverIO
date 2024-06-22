import homepage from "./homepage.js"

class login {

get signinpage(){

return $("//a[@href='https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/']")

}

get email(){

return $("#email")    

}

get password(){

return $("#pass")

}

get clicksignin(){

return $("#send2")

}

get account(){

return $("//div[@class='panel header']//button[@type='button']")

}

get myaccount(){

return $("//a[@href='https://magento.softwaretestingboard.com/customer/account/']")

}

async userlogin(mail,pass){
(await this.signinpage).click();
await browser.pause(2000);
(await this.email).setValue(mail);
await browser.pause(3000);
(await this.password).setValue(pass);
await browser.pause(3000);
(await this.clicksignin).click();
await browser.pause(3000);
}

async verifyuser(){

(await this.account).click();
await browser.pause(2000);
(await this.myaccount).click();
await browser.pause(2000);
await expect(browser).toHaveUrl("https://magento.softwaretestingboard.com/customer/account/");
await expect (browser).toHaveTitle("My Account");
await browser.pause(2000);
}

}

export default new login();
class menuproduct{

get menu(){


return $("//span[normalize-space()='Men']")

}

get top(){


    return $("//a[@id='ui-id-17']//span[contains(text(),'Tops')]")
}


get jackets(){

return $("//a[@id='ui-id-19']//span[contains(text(),'Jackets')]")

}



async productmenu(){

(await this.menu).moveTo();
(await this.top).moveTo();
await browser.pause(2000);
(await this.jackets).click();
await browser.pause(2000);

}

async pageverify(){

    await expect (browser).toHaveTitle("Jackets - Tops - Men");
    await browser.pause(2000);

}

}
export default new menuproduct();

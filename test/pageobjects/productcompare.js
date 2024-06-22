class productcompare{


get product(){


return $("//img[@alt='Argus All-Weather Tank']")

}



get productsize(){

return $("//div[@id='option-label-size-143-item-170']")

}



get productcolor(){

return $("//div[@id='option-label-color-93-item-52']")

}

get productcompare(){

return $("//div[@class='product-addto-links']//span[contains(text(),'Add to Compare')]")

}

get comparisonlist(){

return $("a[href='https://magento.softwaretestingboard.com/catalog/product_compare/']")

}

get text(){

   return  $("//span[@class='base']");


}

async productcomparison(){

(await this.product).scrollIntoView();
await browser.pause(2000);

(await this.product).click();
await browser.pause(2000);

(await this.productsize).click();
await browser.pause(2000);
(await this.productcolor).click();
await browser.pause(2000);
(await this.productcompare).click();
await browser.pause(2000);

(await this.comparisonlist).click();
await browser.pause(2000);
}

async gettext(){

await expect (this.text).toHaveText("Compare Products");

}

}

export default new productcompare();
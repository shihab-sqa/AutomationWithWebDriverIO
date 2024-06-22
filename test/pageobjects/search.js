class search{

get searchbar(){

return $("#search")

}

get enter(){

    return browser.keys('Enter');
}


async searchproduct(product){

(await this.searchbar).setValue(product);

await browser.pause(2000);

await this.enter
await browser.pause(2000)


}

}

export default new search();
import { Given, When, Then } from "@wdio/cucumber-framework";
import {expect} from "chai";

Given(/^Google page is opened$/, async function(){
        await browser.url('https://www.google.com')
        await browser.pause(1000)
})

When(/^I agree to the cookie policy$/, async function () {
    let cookieButton = await $('#L2AGLb'); 
    await cookieButton.click()
});

When(/^Search with (.*)/, async function(searchItem){
    console.log(`>> searchItem: ${searchItem}`);
    let ele = await $(`[name=q]`)
    await ele.setValue(searchItem)
    await browser.keys('Enter')
})

Then(/^Click on the first search result$/, async function(){
    let ele = await $(`<h3>`)
    ele.click()
})

Then (/^URL shoul match (.*)$/, async function(expectedUrl){
    console.log(`>>expectedUrl: ${expectedUrl}`);
    let url = await browser.getUrl()
    expect(url).to.equal(expectedUrl)
})

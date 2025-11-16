const {Given, When, Then} = require('cucumber');

const CelsiusToFahrenheitConvertorPage = require('./../pages/celsiusToFahrenheitConvertor.page');

const celsiusToFahrenheitConvertorPage = new CelsiusToFahrenheitConvertorPage();

Then(/^Verify the elemnts present on home screen.$/, async() => {
  const clearButton = await $("//android.widget.ImageButton[@content-desc='clear']");
   const ButtonParanthesis = await $("//android.widget.ImageButton[@content-desc='left or right parenthesis']");
    const ButtonPersentage = await $("//android.widget.ImageButton[@content-desc='percent']");
     const ButtonDevide = await $("//android.widget.ImageButton[@content-desc='divide']");
      const ButtonMulti = await $("//android.widget.ImageButton[@content-desc='multiply']");
       const ButtonMinus = await $("//android.widget.ImageButton[@content-desc='minus']");
        const ButtonAdd = await $("//android.widget.ImageButton[@content-desc='plus']");
        const ButtonEquals = await $("//android.widget.ImageButton[@content-desc='equals']");
        const ButtonClearSingle = await $("//android.widget.ImageButton[@content-desc='delete']");
        const ButtonDecimal = await $("//android.widget.ImageButton[@content-desc='point']");
        const ButtonZero = await $("//android.widget.ImageButton[@content-desc='0']");
        const ButtonFirst = await $("//android.widget.ImageButton[@content-desc='1']");
        const ButtonSecond = await $("//android.widget.ImageButton[@content-desc='2']");
        const ButtonThree = await $("//android.widget.ImageButton[@content-desc='3']");
        const ButtonFour = await $("//android.widget.ImageButton[@content-desc='4']");
        const ButtonFive = await $("//android.widget.ImageButton[@content-desc='5']");
        const ButtonSix = await $("//android.widget.ImageButton[@content-desc='6']");
        const ButtonSeven = await $("//android.widget.ImageButton[@content-desc='7']");
        const ButtonEight = await $("//android.widget.ImageButton[@content-desc='8']");
        const ButtonNine = await $("//android.widget.ImageButton[@content-desc='9']");

await expect(clearButton).toBeDisplayed() ;                
await expect(ButtonParanthesis).toBeDisplayed() ;
await  expect(ButtonPersentage).toBeDisplayed() ;
await  expect(ButtonDevide).toBeDisplayed() ;
await expect(ButtonMulti).toBeDisplayed() ; 
await expect(ButtonMinus).toBeDisplayed() ;
await expect(ButtonAdd).toBeDisplayed() ; 
await expect(ButtonEquals).toBeDisplayed() ;
await expect(ButtonClearSingle).toBeDisplayed() ;   
await expect(ButtonDecimal).toBeDisplayed() ;
await expect(ButtonZero).toBeDisplayed() ;   
await expect(ButtonFirst).toBeDisplayed() ;   
await expect(ButtonSecond).toBeDisplayed() ;  
await expect(ButtonThree).toBeDisplayed() ;  
await expect(ButtonFour).toBeDisplayed() ;     
await expect(ButtonFive).toBeDisplayed() ;    
await expect(ButtonSix).toBeDisplayed() ;            
await expect(ButtonSeven).toBeDisplayed() ;        
await expect(ButtonEight).toBeDisplayed() ;      
await expect(ButtonNine).toBeDisplayed() ;     


});


When(/^I take input as "([^"]*)"$/, async (value) => {
    const digits = await value.split("");

    for (let d of digits) {
        const numBtn = await $(`~${d}`); // Accessibility ID of number
        await numBtn.click();
    }
});

When(/^I perform operation "([^"]*)"$/, async (operation) => {
    let operationBtn;

    switch(operation.toLowerCase()) {
        case "addition":
            operationBtn = await $(`//android.widget.ImageButton[@content-desc='plus']`);
            break;
        case "subtract":
            operationBtn = await $(`//android.widget.ImageButton[@content-desc='minus']`);
            break;
        case "multiply":
            operationBtn = await $(`//android.widget.ImageButton[@content-desc='multiply']`);
            break;
        case "divide":
            operationBtn = await $(`//android.widget.ImageButton[@content-desc='divide']`);
            break;
        default:
            throw new Error(`Invalid operation: ${operation}`);
    }

    await operationBtn.click();
});

Then(/^I verify result with "([^"]*)"$/, async (expectedValue) => {
    const equalsBtn = await $("//android.widget.ImageButton[@content-desc='equals']");
    await equalsBtn.click();

    const resultElement = await $("//android.widget.TextView[@resource-id='com.google.android.calculator:id/result_final']");
    const actualValue = await resultElement.getText();

    assert.strictEqual(actualValue, expectedValue, 
        `Expected result ${expectedValue} but got ${actualValue}`);
});
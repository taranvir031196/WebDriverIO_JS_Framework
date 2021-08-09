describe('Ecommerce Application',()=>
{
   it('Login Fail page title-Smoke',()=>

   {
       //webdriverIO code
       browser.url("/loginpagePractise/")
       console.log(browser.getTitle())

       expect(browser).toHaveTitleContaining("Rahul Shetty Academy")
       //xpath, css, linkText
       //---    tagname[attribute='value']  ->  input[name='username']
       // #id -> css    .classname _> CSS
       $("input[name='username']").setValue("rahulshettyacademy")
       $("#username").setValue("secondCSS")
       //--  //*[@attribute='value']   -> //input[@type='password']
    const password = $("//input[@type='password']")
     password.setValue("learning")
     $("#signInBtn").click()
     console.log($(".alert-danger").getText() +"is the text am seeing on the screen")
     //signing-dont checck   (Check after button turns to Sign In)
     browser.waitUntil(()=>    $("#signInBtn").getAttribute('value') === 'Sign In', 
      { timeout: 4000, timeoutMsg: 'Error message did not appear' })
     console.log($(".alert-danger").getText() +"is the text am seeing on the screen")
     $("p").getText()
     expect($("p")).toHaveTextContaining("(username is rahulshettyacademy and Password is learning)")

       
   })

   it('Login Fail page title Smoke',function(){
      this.retries(2)
      browser.url("/loginpagePractise/")
      console.log(browser.getTitle())

      expect(browser).toHaveTitleContaining("Rahul Shetty Academy")

   })

   xit('Login Success page title',()=>

   {
    browser.url("/loginpagePractise/#")
    $("input[name='username']").setValue("rahulshettyacademy")
    const password = $("//input[@type='password']")
    password.setValue("learning")
    $("#signInBtn").click()
    const link = $("*=Checkout")
    link.waitForExist()
    expect(browser).toHaveTitle("ProtoCommerce")
    expect(browser).toHaveUrlContaining("shop")


   })
   

});
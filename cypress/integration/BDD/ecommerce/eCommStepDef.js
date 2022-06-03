import {Given,When,Then} from "cypress-cucumber-preprocessor/steps";
import HomePage from '../../../support/pageObject/HomePage'
import ProductsePage from '../../../support/pageObject/ProductsPage'
import ShopPage from '../../../support/pageObject/ShopPage'
import PurchasePage from '../../../support/pageObject/PurchasePage'

const homepage=new HomePage()
const productpage=new ProductsePage()
const shoppage=new ShopPage()
const purchasepage=new PurchasePage()

Given('I open ECommerce Page',()=>{


    cy.visit(Cypress.env('url')+"/angularpractice/")


})

When("I add items to Cart",function(){
    homepage.getShopTab().click()
           

    this.data.productName.forEach(function(element)
    {

        cy.selectProduct(element)
                
    });
    productpage.getcheckout().click()


And("Validate the total prices",()=>{
    
    var sum=0
    cy.get('tr td:nth-child(4) strong').each(($el,index,$list) =>{

        const amount=$el.text() 
        var res= amount.split(" ")
        res=res[1].trim()
        sum=Number(sum)+Number(res)
    }).then(function(){

        cy.log(sum)

    })

    cy.get('h3 > strong').then(function(element){

        const amount=element.text() 
        var res= amount.split(" ")
        var total=res[1].trim()
        expect(Number(total)).to.equal(sum)

    })



})

Then('select the country submit and verify Thankyou',()=>{

    shoppage.getCheckoutbutton().click()
 

    purchasepage.getSelectCountry().type('india')
    cy.get('.suggestions > ul > li > a').click()
    purchasepage.getCheckbox().click({force: true})
    purchasepage.getpurchasebutton().click()
    purchasepage.getalert().then(function(element)
    {
    const actualtext=element.text()
    expect(actualtext.includes('Success')).to.be.true
    })
    })






}) 

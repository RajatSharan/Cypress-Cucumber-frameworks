class PurchasePage{


getSelectCountry()

{

    return cy.get("#country")


}

getCheckbox()
{

return cy.get('#checkbox2')

}

getpurchasebutton()
{

 return  cy.get("input[type='submit']")

}


getalert()
{

    return cy.get('.alert')

}






} 

export default PurchasePage;
class HomePage{


    getEditBox(){

        return cy.get("input[name='name']:nth-child(2)");
    }

    getTwoWayDataBiding(){

        return cy.get('input[name="name"]:nth-child(1)');
    }

    
    getGender()
    {

        return cy.get('select');
    }

    getEntrepreneur()
    {

        return cy.get('#inlineRadio3')
    }

    getShopTab()
    {

        return cy.get(':nth-child(2) > .nav-link')
    }


}

export default HomePage;
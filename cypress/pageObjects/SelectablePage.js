import BasePage from "./BasePage";

class SelectablePage extends BasePage{
    static get url(){
        return "/selectable";
    }

    static get button_1(){
        return cy.get("#verticalListContainer>li");
    }

    static get get_grid(){
        return cy.get("#demo-tab-grid");
    }

    static get click_numb(){
        return cy.get("#demo-tabpane-grid");
    }

}



export default SelectablePage;
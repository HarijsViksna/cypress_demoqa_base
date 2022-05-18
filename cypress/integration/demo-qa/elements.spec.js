import SelectablePage from "../../pageObjects/SelectablePage";

context("Elements Page", () => {
  context("Text box scenarios", () => {
    beforeEach(() => {
      SelectablePage.visit();
    });

    it("selectable", () => {
      SelectablePage.button_1.contains("Cras justo odio").click();
      SelectablePage.button_1.contains("Morbi leo risus").click();

      SelectablePage.button_1.contains("Cras justo odio").should("have.class","active");
      SelectablePage.button_1.contains("Morbi leo risus").should("have.class","active");

      SelectablePage.get_grid.click();

      SelectablePage.click_numb.contains("Two").click();
      SelectablePage.click_numb.contains("Four").click();
      SelectablePage.click_numb.contains("Six").click();
      SelectablePage.click_numb.contains("Eight").click(); 

      SelectablePage.click_numb.contains("Two").should("have.class","active");
      SelectablePage.click_numb.contains("Four").should("have.class","active");
      SelectablePage.click_numb.contains("Six").should("have.class","active");
      SelectablePage.click_numb.contains("Eight").should("have.class","active");

    });
    
  });
});

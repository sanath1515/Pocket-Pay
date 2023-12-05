import { BaseDependencies, BaseEyes, BaseHands } from "../BaseRobot";

export class Dependencies extends BaseDependencies{

    signUp(){

        cy.get('input[type="text"]').type(Cypress.env('email'));
        cy.get(`[data-testid="Signup"]`).click();

    }
    selectAccountType(){
        cy.get(`[data-testid="icon-text-radio"]`).eq(1).click();

    }
    wait() {
        cy.wait(2000)
    }
}


export class RobotEyes extends BaseEyes{
    
}

export class RobotHands extends BaseHands {
    upload() {
        cy.fixture("chathurvedi.pdf", "base64").then((fileContent) => {
            cy.get('input[type="file"]').then(($input) => {
              const blob = Cypress.Blob.base64StringToBlob(
                fileContent,
                "application/pdf"
              );
              const testFile = new File([blob], "chathurvedi.pdf", {
                type: "application/pdf",
              });
              const dataTransfer = new DataTransfer();
              dataTransfer.items.add(testFile);
          
              const inputElement = $input[0] as HTMLInputElement;
              inputElement.files = dataTransfer.files;
              inputElement.dispatchEvent(new Event("change", { bubbles: true }));
            });
        })
    }
    clickOnDataTestId(id: string) {
        cy.get(`[data-testid="${id}"]`).click();
        return this;
      }
      clickOnDataValue(id: string) {
        cy.get(`[data-value="${id}"]`).click();
        return this;
    }
    clickOnBody() {
        cy.get('body').click();
    }
    clickOnFirst() {
        cy.contains("Create rule").eq(0).click({force:true});
    }
    clickOnDataId(id: string) {
        cy.get(`[data-id="${id}"]`).click();
        return this;
    }
    clickOnSelector(selecor:string) {
        cy.get(selecor).click()
    }
    clickOnIdWithText(id:string,text:string) {
        cy.contains(`button[data-id="${id}"]`, text).click();
    }
    clickOnText(text:string) {
        cy.contains(text).click({force:true});
    }
    enterTextIntoField(field:string,text:string) {
        cy.get(`input[name="${field}"]`).type(text);
    }
    searchByText(text:string) {
        cy.get('[data-testid="search-input"]').type(text);
    }
    clickOnClass(cls:string) {
        cy.get(`.${cls}`).click();
    }
    clickOnCheckBox(rowId:number) {
        cy.get(`[data-id=${rowId}]`)
    .find('input[type="checkbox"]')
    .click();
    }
    clickDropdown() {
        cy.get('[data-id="3"]')
        .find('[data-testid="dropdown"]')
        .click();
    }
}
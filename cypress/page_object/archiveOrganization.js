class ArchiveOrganization {
    get settingsButton() {
      return cy.get(".vs-c-site-logo").eq(8);
    }
    
    get archiveButton() {
      return cy.get(".vs-c-btn").eq(-2);
    }

    get confirmButton() {
      return cy.get(".el-button--success");
    }

    get deleteOrganizationButton() {
      return cy.get("button");
    }
   
  }
  
  export const archiveOrganization = new ArchiveOrganization();
  
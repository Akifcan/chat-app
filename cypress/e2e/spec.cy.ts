describe("template spec", () => {
  it("should open the chat window", () => {
    cy.visit("http://localhost:3000");

    cy.openChatWindow();
  });

  it("should close the chat window", () => {
    cy.visit("http://localhost:3000");

    cy.openChatWindow().then(() => {
      const closeChatButton = cy.getByTestId("close-chat-button");
      closeChatButton.should("be.visible");
      closeChatButton.click();
    });
  });

  it("should display greeting message when chat opened first time", () => {
    cy.visit("http://localhost:3000");

    cy.openChatWindow().then(() => {
      cy.getByTestId("greeting-message").should("be.visible");
    });
  });
});

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

  it("should display help message when typed /help to to input", () => {
    cy.visit("http://localhost:3000");

    cy.openChatWindow().then(() => {
      cy.typeInput("/help");
      cy.getByTestId("help").should("be.visible");
    });
  });

  it("should display categories message when typed /select to to input", () => {
    cy.visit("http://localhost:3000");

    cy.openChatWindow().then(() => {
      cy.typeInput("/select");
      cy.getByTestId("categories").should("be.visible");
    });
  });

  it("should display suggested products message when typed /product to to input", () => {
    cy.visit("http://localhost:3000");

    cy.openChatWindow().then(() => {
      cy.typeInput("/product");
      cy.getByTestId("suggested-products")
        .scrollIntoView()
        .should("be.visible");
    });
  });

  it("should display product details when clicked product card", () => {
    cy.visit("http://localhost:3000");

    cy.openChatWindow().then(() => {
      cy.typeInput("/product");
      cy.getByTestId("suggested-products")
        .scrollIntoView()
        .should("be.visible");
      const productCard = cy.getByTestId("product-card").first();
      productCard.should("be.visible");
      productCard.click();
      const productDetailCard = cy.getByTestId("product-detail-card");
      productDetailCard.scrollIntoView();
    });
  });

  it("should display scroll to bottom button and click", () => {
    cy.visit("http://localhost:3000");

    cy.openChatWindow().then(() => {
      cy.typeInput("/product");
      cy.getByTestId("suggested-products")
        .scrollIntoView()
        .should("be.visible");
      const productCard = cy.getByTestId("product-card").first();
      productCard.should("be.visible");
      productCard.click();
      const productDetailCard = cy.getByTestId("product-detail-card");
      productDetailCard.scrollIntoView();

      cy.getByTestId("scroll-to-bottom-button").should("be.visible").click();
    });
  });

  it("should display not found message if unknown command given", () => {
    cy.visit("http://localhost:3000");

    cy.openChatWindow().then(() => {
      cy.typeInput("/asdfasdf");
      cy.getByTestId("not-found-message").should("be.visible");
    });
  });

  it("button should be disabled if input is empty", () => {
    cy.visit("http://localhost:3000");

    cy.openChatWindow().then(() => {
      cy.typeInput(" ");
      cy.getByTestId("send-message-button").should("have.attr", "disabled");
    });
  });

  it("should display suggestions when typed a product name", () => {
    cy.visit("http://localhost:3000");

    cy.openChatWindow().then(() => {
      cy.getByTestId("chat-input").type("apple");
      cy.wait(1000);
      cy.getByTestId("search-results").should("be.visible");
    });
  });

  it("should display suggestions when typed a product name and click a product card", () => {
    cy.visit("http://localhost:3000");

    cy.openChatWindow().then(() => {
      cy.getByTestId("chat-input").type("apple");
      cy.wait(1000);
      cy.getByTestId("search-results").should("be.visible");
      cy.getByTestId("suggested-item").first().should("be.visible").click();
      const productCard = cy.getByTestId("product-card").first();
      productCard.should("be.visible");
    });
  });
});

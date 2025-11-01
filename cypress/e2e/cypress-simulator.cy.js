describe("Cypress Simulator", () => {
  beforeEach(() => {
    cy.visit("./src/index.html?skipCaptcha=true", {
      onBeforeLoad: (win) => {
        win.localStorage.setItem("cookieConsent", "accepted")
      }
    })
    cy.contains("button", "Login").click()
  })

  it.only("successfully simulates a Cypress command (e.g., cy.log('Yay!'))", () => {
    cy.get("textarea[placeholder='Write your Cypress code here...']")
      .type("cy.log('Yay!')")
    cy.contains("button", "Run").click()

    cy.get("#outputArea", { timeout: 6000 })
      .should("contain", "Success:")
      .and("contain", "cy.log('Yay!') // Logged message 'Yay!'")
      .and("be.visible")
  })

  it("error: invalid cypress command", () => {
    
  })

  it("warning", () =>{

  })

  it("error: valid command without parentheses", () => {
    
  })

  it("help", () => {

  })

  it("maximize/minimize", () => {

  })

  it("logout", () => {

  })

  it("show and hide logout button", () => {

  })

  it("running... state", () => {

  })

  it("accept cookies", () => {

  })

  it("decline cookies", () => {

  })

  it("captcha button states", () => {

  })

  it("captcha error", () => {

  })

  it("run button - enabled/disabled state", () => {

  })

  it("reset textarea on logout and login", () => {

  })

  it("disabled run button on logout and login", () => {
    
  })

  it("reset output on logout and login", () => {
    
  })

  it("no cookies banner on the login page", () => {
    
  })
})
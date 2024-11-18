/// <reference types="cypress" />

describe('StoriesSlider Component', () => {
    
    it('should render the slider and cards correctly', () => {
      // Check if the slider container is rendered
      cy.get('.sliderContainer').should('exist');
  
      // Check if the correct number of Card components is rendered
      cy.get('.sliderContainer .Card').should('have.length.at.least', 1);
    });
  
    it('should preload images correctly', () => {
      // Check if images are preloaded for the first few stories
      cy.get('.sliderContainer img').each(($img, index) => {
        if (index < 4) {
          cy.wrap($img)
            .should('have.attr', 'src')
            .and('not.be.empty');
        }
      });
    });
  
    it('should open the StatusModal when a card is clicked', () => {
      // Click the first Card component
      cy.get('.sliderContainer .Card').first().click();
  
      // Check if the StatusModal is open
      cy.get('.StatusModal').should('be.visible');
    });
  
    it('should close the StatusModal when the close button is clicked', () => {
      // Click the first Card component to open the modal
      cy.get('.sliderContainer .Card').first().click();
  
      // Check if the modal is open
      cy.get('.StatusModal').should('be.visible');
  
      // Click the close button (adjust selector as needed for your modal)
      cy.get('.StatusModal .close-button').click();
  
      // Check if the modal is closed
      cy.get('.StatusModal').should('not.exist');
    });
  
    it('should call the callback function and set modal data', () => {
      // Click the first Card component
      cy.get('.sliderContainer .Card').first().click();
  
      // Check if the modal data is correctly set (depends on your implementation)
      cy.get('.StatusModal .modal-content').should('contain.text', 'Expected Story Name'); // Replace with expected content
    });
  });
  
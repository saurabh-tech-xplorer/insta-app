// cypress/e2e/storiesSlider.cy.js

describe('StoriesSlider Component', () => {
    const sampleData = {
      stories: [
        {
          image: { src: 'image1.jpg', width: 100, height: 100 },
          items: [
            { image: { src: 'innerImage1.jpg', width: 50, height: 50 } },
            { image: { src: 'innerImage2.jpg', width: 50, height: 50 } }
          ]
        },
        {
          image: { src: 'image2.jpg', width: 100, height: 100 },
          items: [
            { image: { src: 'innerImage3.jpg', width: 50, height: 50 } }
          ]
        }
      ]
    };
  
    beforeEach(() => {
      // Mount the component before each test
      cy.mount(<StoriesSlider data={sampleData} />);
    });
  
    it('renders the StoriesSlider component', () => {
      // Check that the component and essential elements are rendered
      cy.get(`.${s.sliderContainer}`).should('exist');
      cy.get(`.${s.sliderContainer} .Card`).should('have.length', sampleData.stories.length);
    });
  
    it('preloads images correctly', () => {
      // Check if the images are preloaded in the slider
      sampleData.stories.forEach((story) => {
        cy.get(`img[src="${story.image.src}/${story.image.width}/${story.image.height}"]`).should('exist');
        if (story.items.length > 0) {
          cy.get(`img[src="${story.items[0].image.src}/${story.items[0].image.width}/${story.items[0].image.height}"]`).should('exist');
        }
      });
    });
  
    it('navigates the slider correctly', () => {
      // Simulate navigation and check content changes
      cy.get('.Slider-nextButton').click();
      cy.get('.Card').eq(1).should('be.visible');
      cy.get('.Slider-prevButton').click();
      cy.get('.Card').eq(0).should('be.visible');
    });
  
    it('handles edge cases in the slider', () => {
      // Check edge behavior for first and last items
      cy.get('.Slider-prevButton').click(); // Click previous at the start
      cy.get('.Card').eq(0).should('be.visible');
  
      cy.get('.Slider-nextButton').click();
      cy.get('.Slider-nextButton').click(); // Click past the last item
      cy.get('.Card').last().should('be.visible');
    });
  });
  
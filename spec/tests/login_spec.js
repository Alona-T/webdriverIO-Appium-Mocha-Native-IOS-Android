const firstPage = require("../pages/firstPage");
const expect = require('chai').expect;

describe('Login Tests', function() {

    it('Verify first element is displayed on the page', function() {
        expect(firstPage.firstElement.isDisplayed()).to.be.true;
    })
  });
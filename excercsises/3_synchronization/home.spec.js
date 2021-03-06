var homePage = require('./pages/home');

describe('Protractor Workshop app', function() {

	beforeEach(function () {
		homePage.get();
	});

	it('should have home page with title "Protractor workshop | Home"', function(){
		expect(homePage.getTitle()).toEqual("Protractor workshop | Home");
	});

	it('should have "Example headline 2" carousel item after clicking on next arrow', function(){
		var expectedHeader = 'Example Headline 2'
		homePage.pushNextButton();
		var EC = protractor.ExpectedConditions;
		var headline = homePage.findHeadline();
		browser.wait(EC.visibilityOf(headline), 1000, 'Element still not exist');
		expect(headline.getText()).toEqual(expectedHeader);
	});
	
	it('should display drop down after clicking on About menu item', function(){
		homePage.clickMenuAtIdx(1);
		var EC = protractor.ExpectedConditions;
		var dropdownMenu = homePage.findDropdown();
		browser.wait(EC.visibilityOf(dropdownMenu), 500, 'Element still not exist');
		expect(dropdownMenu.isDisplayed()).toBe(true);
	});

});

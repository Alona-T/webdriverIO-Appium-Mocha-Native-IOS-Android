const BasePage = require("./basePage");
const expect = require('chai').expect;

const FIRST_ELEMENT = {
  ANDROID: 'android=new UiSelector().resourceId("android:id/alertTitle")',
  IOS: "-ios predicate string:name == 'Alerts'"
  
  //Also can be used through xpath or accessibilityID (predicate is fastest):
  //IOS: "~Alerts"
  //IOS: "//XCUIElementTypeStaticText[@name="Alerts"]"
};

class firstPage {
   get firstElement() {return BasePage.findElement(FIRST_ELEMENT)}
}

module.exports = new firstPage();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
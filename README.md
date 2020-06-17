# webdriverIO-Appium-Mocha
WebdriverIO with Mocha, shared page objects and test classes between IOS and Android which helps to reduce code 2x. Instead of copying the almost same code into 2 classes to support iOS and Android you can do it in 1 class now - same page object class as well as use same test for 2 platforms. 

# Features
 - webdriverIO
 - Appium
 - Mocha
 - Chai assertions
 - Page Object model - same page object for IOS and Android
 - Shared test classes between Android and iOS 
 - Browserstack integration

# How to start 
 - Clone the project
 - Make sure you have all preconditions from https://webdriver.io/docs/gettingstarted.html
 - Do ```npm install```
 - In Config/wdio.android.conf.js and in Config/wdio.ios.conf.js folder change the app path to your path (Android app is attached to the root of this project just as example)
 - For running tests you can do the following:
 - ```npm run ios```for IOS platform locally
 - ```npm run android```for Android platform locally
 - ```npm run browserstack ios``` for Browserstack cloud with IOS device
 - ```npm run browserstack android``` for Browserstack cloud with Android device
 
# View Allure report
 - make sure you have allure installed (if not use ```brew install allure```)
 - to view Allure report use this command ```allure serve```

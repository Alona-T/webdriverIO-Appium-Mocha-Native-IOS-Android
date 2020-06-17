process.env.PLATFORM = "ANDROID",

exports.config = {
  runner: 'remote',

    user: process.env.BROWSERSTACK_USERNAME || 'yourname',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'yourpassword',
    
      updateJob: false,
      specs: [
        './spec/tests/*_spec.js'
    ],
      exclude: [],

      services: [
        ['browserstack', {
            browserstackLocal: true,
            host: 'http://yourname:yourpassword@hub-cloud.browserstack.com/wd/hub',
        }]
    ],
    
      capabilities: [{
        'name': 'single_appium_test_webdriverio',
        'build': 'WebDriverIO Android',
        'project': 'WebDriverIO Mocha',
        'device': 'Samsung Galaxy S10e',
        'app': 'bs://',
        'appActivity': 'youractivity', //if required
        'appPackage': 'your package', //if required
        'browserstack.debug': true,
        "browserstack.appium_version" : "1.17.0",
      }],
    }
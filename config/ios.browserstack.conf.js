process.env.PLATFORM = "IOS",

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
        'build': 'WebDriverIO IOS',
        'project': 'WebDriverIO Mocha',
        'device': 'iPhone 7',
        'app': 'bs://',
        'browserstack.debug': true,
        "browserstack.appium_version" : "1.17.0",
      }],
    }
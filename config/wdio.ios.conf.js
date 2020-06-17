const { config } = require('./wdio.conf');
    config.runner = 'local',
    process.env.PLATFORM = "IOS",

    config.specs = [
        './spec/tests/*_spec.js'
    ],

    config.capabilities = [{
        platformName: 'IOS',
        platformVersion: "13.5",
        deviceName: "iPhone 11 Pro",
        maxInstances: 1,
        app: '',
        automationName: 'XCUITest',
        appium_version: "1.17.0",
      }],

exports.config = config;
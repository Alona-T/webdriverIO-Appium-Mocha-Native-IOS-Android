const { config } = require('./wdio.conf');
    config.runner = 'local',
    process.env.PLATFORM = "ANDROID",

    config.specs = [
        './spec/tests/*_spec.js'
    ],

    config.capabilities = [{
        platformName: 'Android',
        maxInstances: 1,
        app: '',
        automationName: 'UIAutomator2',
        appium_version: "1.17.0",
        appActivity: '', //if required
        appPackage: '', //if required
      }],

exports.config = config;
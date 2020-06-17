let { join } = require('path');

exports.config = {

    runner: 'local',
    specs: [
        './spec/**/*_spec.js'
    ],

    exclude: [
        // 'path/to/excluded/files'
    ],

    //
    maxInstances: 1,

    capabilities: [
            {
                platformName: 'Android',
                app: '/Users/alonat/Projects/POC/WebdriverIO/webdriverio-test/apps/movver-app-develop-debug.apk',
                automationName: 'UIAutomator2',
                appium_version: "1.17.0",
                appActivity: 'com.codafit.movver.ui.splash.SplashActivity',
                appPackage: 'com.codafit.movver.debug',
            },
        ],

    logLevel: 'info',

    logLevels: {
        webdriver: 'info',
        '@wdio/applitools-service': 'info'
    },
 
    bail: 0,
  
    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,
  
    connectionRetryCount: 1,

    services: ['appium'],
    port: 4723, // default appium port
    host: "0.0.0.0",

    framework: 'mocha',

    // reporters: ['spec'],

    reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    onPrepare: function() {

      },

    before: function() {
        const chai    = require('chai');
        global.expect = chai.expect;
      },

    onComplete: function () {

    }
}
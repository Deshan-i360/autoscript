require('ts-node/register');
const { remote } = require('webdriverio');

exports.config = {

    runner: 'local',
    port: 4723,
  
    specs: [
        './test/specs/**/*.js'
    ],
    // Patterns to exclude.
    // exclude: [
    //     "node_modules"
    // ],
  
    //
    maxInstances: 1,
    //

    //
    capabilities: [{
        // capabilities for local Appium web tests on an Android Emulator
        platformName: 'Android',
        browserName: 'chrome',
        'appium:deviceName': 'nightwatch-android-11',
        'appium:platformVersion': '12.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': '/Users/i360/Desktop/automation/android/app/build/outputs/apk/release/app-release.apk',
        'appium:appiumVersion': '2.5.1',
    }],
    
    //
  
    logLevel: 'trace',
    //
    // Set specific log levels per logger
    // loggers:
    // - webdriver, webdriverio
    // - @wdio/browserstack-service, @wdio/devtools-service, @wdio/sauce-service
    // - @wdio/mocha-framework, @wdio/jasmine-framework
    // - @wdio/local-runner
    // - @wdio/sumologic-reporter
    // - @wdio/cli, @wdio/config, @wdio/utils
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevels: {
        webdriver: 'info',
        '@wdio/appium-service': 'info'
    },
    
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    //
    // Set a base URL in order to shorten url command calls. If your `url` parameter starts
    // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
    // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
    // gets prepended directly.
    // baseUrl: 'http://localhost:8082',
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    services: ['appium', 'vscode'],

    framework: 'mocha',
    
    reporters: ['spec','junit'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

   
}

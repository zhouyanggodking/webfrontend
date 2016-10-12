var HtmlReporter = require('protractor-html-screenshot-reporter');
exports.config = {
    /**
     * Use `seleniumAddress` for faster startup; run `./node_modules/.bin/webdriver-manager start` to launch the Selenium server.
     * Use `seleniumPort` to let Protractor manage its own Selenium server instance (using the server JAR in its default location).
     */
    //seleniumAddress: 'http://localhost:4444/wd/hub',//if comment this out, protractor will start and end webdriver-manager automaticaly
    // seleniumPort: 4444,

    /**
     * Path to your E2E test files, relative to the location of this configuration file.
     * We're pointing to the directory where our CoffeeScript output goes.
     */
    specs: [
      './e2e/**/*.js',
    ],

    /**
     * Properties passed to Selenium -- see https://code.google.com/p/selenium/wiki/DesiredCapabilities for more info.
     */
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['disable-extensions', 'start-maximized']
        }
    },

    /**
     * This should point to your running app instance, for relative path resolution in tests.
     */
    baseUrl: 'http://localhost:9090',
    onPrepare: function () {//ref: http://programmerbuddy.blogspot.com/2014/03/full-automation-of-protractor-e2e-tests_22.html
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'screenshots'
        }));
    }
};
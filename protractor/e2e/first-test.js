describe('angular web site test', function () {
    it('angular web site case', function () {
        browser.get('http://localhost:9090/tamaleweb/login');
        var name = element(by.model('inputUsr'));
        var pwd = element(by.model('inputPwd'));
        name.clear();
        name.sendKeys('sawyer');
        pwd.clear();
        pwd.sendKeys('123');
        expect(name.getAttribute('value')).toBe('sawyer');
        //Show as Names
        element(by.buttonText('LOG IN')).click();
        //expect(browser.getCurrentUrl()).toBe('http://localhost:9090/tamaleweb/research');
        element(by.buttonText('MENU')).click();
        element(by.id('btnNewEntity')).click();
        browser.pause();
    });
});


describe('non angular web site test', function () {
    beforeEach(function () {
        return browser.ignoreSynchronization = true;
    });
    it('non angular web site case', function () {
        browser.get('https://github.com');
        element(by.linkText('Explore')).click();
        element(by.linkText('Sign up for free')).click();
        browser.pause();

    });
});
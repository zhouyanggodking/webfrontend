describe('first test', function () {
    it('first case', function () {
        browser.get('http://localhost:9090/tamaleweb/login');
        var name = element(by.model('inputUsr'));
        var pwd = element(by.model('inputPwd'));
        name.clear();
        name.sendKeys('sawyer');
        pwd.clear();
        pwd.sendKeys('123');
        expect(name.getAttribute('value')).toBe('test');
        browser.pause();
    });
});
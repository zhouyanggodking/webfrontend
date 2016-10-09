describe('first test', function () {
    it('first case', function () {
        browser.get('http://localhost:9033/app/index.html');
        var name = element(by.model('name'));
        var url = browser.getCurrentUrl();
        console.log(url);
        name.clear();
        name.sendKeys('test');
        expect(name.getAttribute('value')).toBe('test');
        browser.pause();
    });
});
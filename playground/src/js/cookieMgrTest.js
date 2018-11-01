(function(){
    cookieMgr.setCookie('godking', 'test', 1000000);
    cookieMgr.setCookie('oceansky', 'test-what', 1000000);

    console.log(document.cookie);
    var oceanSky = cookieMgr.getCookie('oceansky');
    console.log(oceanSky);
    cookieMgr.deleteCookie('oceansky');

    console.log(document.cookie);
})();
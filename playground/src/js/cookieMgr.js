window.cookieMgr = (function(){
    return {
        getCookie: getCookie,
        setCookie: setCookie,
        deleteCookie: deleteCookie
    };

    function getCookie(name){
        var reg = new RegExp('(^|)' + name + '=([^;]*)(;|$)', 'i');
        var match = document.cookie.match(reg);
        if(match){
            return match[2];
        }
        return null;
    }

    /**
     * 
     * @param {string} name 
     * @param {string} value 
     * @param {number} time - milliseconds
     */
    function setCookie(name, value, time){
        var now = new Date();
        now.setTime(now.getTime() + time);
        document.cookie = name + '=' + escape(value) + ';expires=' + now.toUTCString();
    }

    function deleteCookie(name){
        var now = new Date();
        now.setTime(now.getTime() - 1);
        document.cookie = name + '= ' + ';expires=' + now.toUTCString();
    }

})();
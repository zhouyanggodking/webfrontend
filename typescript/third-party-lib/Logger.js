define(["require", "exports"], function (require, exports) {
    "use strict";
    var Logger = (function () {
        function Logger() {
        }
        Logger.info = function (message) {
            console.log("Log info: " + message);
        };
        Logger.debug = function (message) {
            console.log("Log debug: " + message);
        };
        return Logger;
    }());
    exports.Logger = Logger;
});

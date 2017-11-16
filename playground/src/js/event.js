window.eventUtility = (function() {
    return {
        addEvent: addEvent,
        removeEvent: removeEvent,
        stopPropagation: stopPropagation,
        preventDefault: preventDefault,
        getTarget: getTarget,


    };

    function bind(element, eventType, handler, userCapture) {

    }

    function trigger(element, eventType) {

    }

    function addEvent(element, eventType, handler, useCapture) {
        if (element.addEventListener) {
            element.addEventListener(eventType, handler, useCapture || false);
        } else if (element.attachEvent) { //IE
            element.attachEvent('on' + eventType, handler); //IE no support for capture
        } else {
            element['on' + eventType] = handler;
        }
    }

    function removeEvent(element, eventType, useCapture) {
        if (element.removeEventListener) {
            element.removeEventListener(eventType, handler, useCapture || false);
        } else if (element.detachEvent) { //IE
            element.detachEvent('on' + eventType, handler);
        } else {
            element['on' + eventType] = null;
        }
    }

    function stopPropagation(event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else { //IE
            event.cancelBubble = true;
        }
    }

    function preventDefault(event) {
        if (event.preventDefault) {
            event.preventDefault()
        } else { //IE
            event.returnValue = false;
        }
    }

    function getTarget(event) {
        var ev = event || window.event;
        var target = ev.target || event.srcElement;
    }

})();

window.EventEmitter = (function() {
    EventEmitter.prototype.bind = bind;
    EventEmitter.prototype.trigger = trigger;

    function EventEmitter() {
        this.listener = {};
    }

    function bind(event, handler) {
        var listener = this.listener[event] || [];
        listener.push(handler);
        this.listener[event] = listener;
    }

    function trigger(event) { //need to process arguments
        var args = [].slice.apply(arguments).slice(1);
        var listener = this.listener[event];
        if (listener) {
            listener.forEach(function(handler) {
                handler.apply(this, args);
            });
        }
    }

    return EventEmitter;

})();
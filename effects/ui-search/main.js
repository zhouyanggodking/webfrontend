function init() {
    $('#search').on('click', function (event) {
        event.stopPropagation();//stop click bubble on other parts
        if (!$(this).hasClass('sb-search-open')) {//open it
            event.preventDefault();
            open();
        } else if ($(this).hasClass('sb-search-open')
            //&& /^\s*$/.test($('#search > input.sb-search-input').val())
            ) {
            close();
        }
    });

    $('#search > input.sb-search-input').on('click', function (event) {
        event.stopPropagation();
    });

    $(document).on('click', function (event) {
        close();
    });
}

function open() {
    $('#search').addClass('sb-search-open');    
}

function close() {
    $('#search').removeClass('sb-search-open');
}

init();

//function hasAttribute(element, attrName) {
//    if (typeof (element.attr(attrName)) === "undefined") {
//        return false;
//    } else {
//        return true;
//    }
//}


//var test = $('#search').hasClass('sb-search-open');
//console.log(test);
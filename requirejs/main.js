console.log('main module entry point...');

//self defined module load


require(['jquery'], function ($) {
    $(document).ready(function () {
        $('p').append('test');
    });
});
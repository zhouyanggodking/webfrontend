$(document).ready(function () {
    $('#jstree').jstree({
        'core': {
            'data': [
               {
                   'text': 'godking',
                   //'a_attr': {
                   //    'href':'http://www.baidu.com'
                   //},
                   'children': [
                       {
                           'text': 'god',
                           'a_attr': {
                               'href':'http://www.baidu.com'
                           }
                       },
                       {
                           'text':'king'
                       }
                   ]
               },
               {
                   'text': 'SSNC',
                   'children': [
                       {
                           'text':'ADVS'
                       }
                   ]
               }
            ]
        }
    }).bind("select_node.jstree", function (e, data) {
        console.log(e);
        console.log(data);
        console.log(data.node.a_attr.href);
        window.location.href = data.node.a_attr.href;
    });

})
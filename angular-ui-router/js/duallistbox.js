define(['duallistbox'], function () {
    var func = function ($scope) {
        $('select[name="duallistbox_demo1[]"]').bootstrapDualListbox({
            nonSelectedListLabel: 'Non-selected',
            selectedListLabel: 'Selected',
            moveOnSelect: false,
        });
    };

    func.$inject = ['$scope'];

    return func;
});
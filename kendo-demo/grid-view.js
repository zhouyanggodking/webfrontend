
angular.module('gridView', ["kendo.directives"])
    .directive('gridView', GridView);

function GridView() {
    var directive = {
        restrict: 'E',
        transclude: true,
        replace: true,
        templateUrl: 'grid-view.html',
        controller: GridViewController,
        scope: {
            config: '='
        },
        link: linkFn
    };

    return directive;

    function linkFn(scope) {
        scope.mainGrid.bind('dataBound', function () {
            if (this.dataSource.group().length > 0) {
                collapseAll();
            }
            //scope.mainGrid.virtualScrollable.refresh();
        });

        scope.collapseAll = collapseAll;
        scope.expandAll = expandAll;

        function collapseAll() {
            if (scope.mainGrid.dataSource.group().length > 0) {
                scope.mainGrid.tbody.find('tr.k-grouping-row').each(function () {
                    scope.mainGrid.collapseGroup(this);
                });
            }
        }

        function expandAll() {
            if (scope.mainGrid.dataSource.group().length > 0) {
                scope.mainGrid.tbody.find('tr.k-grouping-row').each(function () {
                    scope.mainGrid.expandGroup(this);
                });
            }
        }
    }
}

GridViewController.$inject = ['$scope'];

function GridViewController($scope) {
    //var dataSource = new kendo.data.DataSource({
    //    data: [
    //        {
    //            source: 'Sawyer',
    //            ticker: 'IBM',
    //            currentPrice: 20,
    //            targetPrice: 50,
    //            approved: false
    //        },
    //        {
    //            source: 'Jiu',
    //            ticker: 'GOOG',
    //            currentPrice: 100,
    //            targetPrice: 150,
    //            approved: true
    //        },
    //        {
    //            source: 'Sawyer',
    //            ticker: 'ADVS',
    //            currentPrice: 60,
    //            targetPrice: 50,
    //            approved: false
    //        },
    //        {
    //            source: 'Jiu',
    //            ticker: 'SSNC',
    //            currentPrice: 35,
    //            targetPrice: 49,
    //            approved: true
    //        },
    //        {
    //            source: 'Colin',
    //            ticker: 'MSFT',
    //            currentPrice: 90,
    //            targetPrice: 70,
    //            approved: false
    //        },
    //        {
    //            source: 'Abner',
    //            ticker: 'APPL',
    //            currentPrice: 115,
    //            targetPrice: 200,
    //            approved: true
    //        },
    //        {
    //            source: 'Abner',
    //            ticker: 'IBM',
    //            currentPrice: 20,
    //            targetPrice: 50,
    //            approved: false
    //        },
    //        {
    //            source: 'Sawyer',
    //            ticker: 'ACTL',
    //            currentPrice: 15,
    //            targetPrice: 20,
    //            approved: false
    //        },
    //        {
    //            source: 'Abner',
    //            ticker: 'AEY',
    //            currentPrice: 64,
    //            targetPrice: 30,
    //            approved: true
    //        },
    //        {
    //            source: 'Jiu',
    //            ticker: 'IBM',
    //            currentPrice: 20,
    //            targetPrice: 80,
    //            approved: false
    //        },
    //        {
    //            source: 'Alex',
    //            ticker: 'GOOG',
    //            currentPrice: 100,
    //            targetPrice: 200,
    //            approved: false
    //        }
    //    ],
    //    pageSize: 5,
    //    schema: {
    //        model: {
    //            fields: {
    //                'source': {
    //                    type: 'string',
    //                    editable: false
    //                },
    //                'ticker': {
    //                    type: 'string',
    //                    editable: false
    //                },
    //                'currentPrice': {
    //                    type: 'number',
    //                    editable: true,
    //                    validation: {
    //                        required: true,
    //                        min: 1
    //                    }
    //                },
    //                'targetPrice': {
    //                    type: 'number',
    //                    editable: true,
    //                    validation: {
    //                        required: true,
    //                        min: 1
    //                    }
    //                },
    //                'approved': {
    //                    type: 'boolean'
    //                }
    //            },
    //            'delta': function () {
    //                return this.targetPrice - this.currentPrice;
    //            },
    //            'summary': function () {
    //                if (this.delta() > 0) {
    //                    return this.delta() * 100;
    //                } else {
    //                    return 0;
    //                }
    //            }
    //        }
    //    }
    //});

    var dataSource = new kendo.data.DataSource({ 
        transport: { 
            read: { 
                url: 'http://localhost:17262/api/items',   //this url could be anything, I don't worry the response 
                dataType: 'json' 
            }, 
            parameterMap: function (data, type) { 
                if (type == "read") { 
                    // send take as "$top" and skip as "$skip" 
                    console.log(data); 
                    var sort = []; 
                    angular.forEach(data['sort'], function (item) { 
                        sort.push(item['field']); 
                    }); 
                    var groups =[]; 
                    angular.forEach(data['group'], function (item) { 
                        groups.push(item['field']); 
                    }); 
                    var filters = []; 
                    if (data['filter']) { 
                        angular.forEach(data['filter']['filters'], function (item) { 
                            filters.push(item['field']); 
                        }); 
                    } 
                    return { 
                        //take: data.take, 
                        //skip: data.skip, 
                        pageIndex: data.page, 
                        pageSize: data.pageSize, 
                        //groupBy: data 
                        sortBy: sort.join(';'), 
                        groupBy: groups.join(';'), 
                        filterString: filters.join(';') 
                    } 
                } 
            } 
        }, 
        schema: { 
            model: { 
                fields: { 
                    'source': { 
                        type: 'string', 
                        editable: false 
                    }, 
                    'ticker': { 
                        type: 'string', 
                        editable: false 
                    }, 
                    'currentPrice': { 
                        type: 'number', 
                        editable: true, 
                        validation: { 
                            required: true, 
                            min: 1 
                        } 
                    }, 
                    'targetPrice': { 
                        type: 'number', 
                        editable: true, 
                        validation: { 
                            required: true, 
                            min: 1 
                        } 
                    }, 
                    'approved': { 
                        type: 'boolean' 
                    } 
                }, 
                'delta': function () { 
                    return this.targetPrice - this.currentPrice; 
                }, 
                'summary': function () { 
                    if (this.delta() > 0) { 
                        return this.delta() * 100; 
                    } else { 
                        return 0; 
                    } 
                } 
            }, 
            total: function (res) { return res.total; }, //for server paging, just fake 
            data: function (res) {                    //just fake data, so it's empty when page is open 
                return res.data; 
            }, 
            groups: function (res) {                // when drop and drop header, use this fake data 
                console.log(res.groups); 
                return res.groups;                     
            } 
        }, 
        pageSize: 5, 
        serverPaging: true, 
        serverFiltering: true, 
        serverGrouping: true, 
        serverSorting: true 
    }); 

    var width = 200;
    var columns = [
            {
                field: 'source', title: 'Author', lockable: true, locked: true, width: width
            },
            {
                field: 'ticker', title: 'Short Name', lockable: true, width: width
            },
            {
                field: 'currentPrice', title: 'Current Price', lockable: true, width: width
            },
            {
                field: 'targetPrice', title: 'Target Price', lockable: true, width: width
            },
            {
                field: 'delta()', title: 'delta Price', lockable: true, width: width, editor: function () { $scope.mainGrid.closeCell(); }
            },
            {
                field: 'summary()', title: 'Summary', lockable: true, width: width, editor: function () { $scope.mainGrid.closeCell(); }
            },
            {
                field: 'approved', title: 'Approved', lockable: true, width: width, template: ' # if (approved==true){#<div style="background-color: green; margin: 0; padding: 0;">YES</div>#}else{#<div style="background-color: yellow; margin: 0; padding: 0;">NO</div>#}#'
            }
    ];

    $scope.mainGridOptions = {
        toolbar: ["excel", 'pdf'],
        excel: {
            fileName: "Kendo UI Grid Export.xlsx",
            filterable: true
        },
        pdf: {
            allPages: true,
            avoidLinks: true,
            paperSize: "A4",
            margin: { top: "2cm", left: "1cm", right: "1cm", bottom: "1cm" },
            landscape: true,
            //repeatHeaders: true, 
            //template: 'Custom Template', 
            //scale: 0.8 
        },
        sortable: true,
        groupable: true,
        pageable: {
            input: true,
            //buttonCount: 2 
        },
        height: 300,
        scrollable: {
            virtual: true
        },
        reorderable: true,
        resizable: true,
        columnMenu: true,
        filterable: {
            extra: false,
            operators: {
                string: {
                    startswith: "Starts with",
                    eq: "Is equal to",
                    neq: "Is not equal to"
                }
            }
        },
        dataSource: dataSource,
        columns: columns,
        editable: 'incell'
    };


}

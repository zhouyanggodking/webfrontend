
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
    var dataSource = new kendo.data.DataSource({
        data: [ 
            { 
                source: 'Sawyer', 
                ticker: 'IBM', 
                currentPrice: 20, 
                targetPrice: 50, 
                approved: false 
            }, 
            { 
                source: 'Jiu', 
                ticker: 'GOOG', 
                currentPrice: 100, 
                targetPrice: 150, 
                approved: true 
            }, 
            { 
                source: 'Sawyer', 
                ticker: 'ADVS', 
                currentPrice: 60, 
                targetPrice: 50, 
                approved: false 
            }, 
            { 
                source: 'Jiu', 
                ticker: 'SSNC', 
                currentPrice: 35, 
                targetPrice: 49, 
                approved: true 
            }, 
            { 
                source: 'Colin', 
                ticker: 'MSFT', 
                currentPrice: 90, 
                targetPrice: 70, 
                approved: false 
            }, 
            { 
                source: 'Abner', 
                ticker: 'APPL', 
                currentPrice: 115, 
                targetPrice: 200, 
                approved: true 
            }, 
            { 
                source: 'Abner', 
                ticker: 'IBM', 
                currentPrice: 20, 
                targetPrice: 50, 
                approved: false 
            }, 
            { 
                source: 'Sawyer', 
                ticker: 'ACTL', 
                currentPrice: 15, 
                targetPrice: 20, 
                approved: false 
            }, 
            { 
                source: 'Abner', 
                ticker: 'AEY', 
                currentPrice: 64, 
                targetPrice: 30, 
                approved: true 
            }, 
            { 
                source: 'Jiu', 
                ticker: 'IBM', 
                currentPrice: 20, 
                targetPrice: 80, 
                approved: false 
            }, 
            { 
                source: 'Alex', 
                ticker: 'GOOG', 
                currentPrice: 100, 
                targetPrice: 200, 
                approved: false 
            } 
        ], 

        //transport: {
        //    read: {
        //        url: 'http://localhost:57737/api/items',
        //        dataType: 'json'
        //    },
        //    //parameterMap: function (data, type) { 
        //    //    if (type == "read") { 
        //    //        // send take as "$top" and skip as "$skip" 
        //    //        return { 
        //    //            //take: data.take, 
        //    //            //skip: data.skip, 
        //    //            pageIndex: data.page, 
        //    //            pageSize: data.pageSize 
        //    //        } 
        //    //    } 
        //    //} 
        //},
        pageSize: 5,
        //serverPaging: true,
        //serverSorting: true,
        //serverGrouping: true,
        //serverFiltering: true,

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
            //total: 'total',
            //data: 'data'
        }
    });
    var width = 200;
    var columns = [
            {
                field: 'source', title: 'Author', aggregates: ['count'], groupHeaderTemplate: '#=value# (#=count# items)', lockable: true, locked: true, width: width
            },
            {
                field: 'ticker', title: 'Short Name', aggregates: ['count'], groupHeaderTemplate: '#=value# (#=count# items)', lockable: true, width: width
            },
            {
                field: 'currentPrice', title: 'Current Price', aggregates: ['count'], groupHeaderTemplate: '#=value# (#=count# items)', lockable: true, width: width
            },
            {
                field: 'targetPrice', title: 'Target Price', aggregates: ['count'], groupHeaderTemplate: '#=value# (#=count# items)', lockable: true, width: width
            },
            {
                field: 'delta()', title: 'delta Price', aggregates: ['count'], groupHeaderTemplate: '#=value# (#=count# items)', lockable: true, width: width, editor: function () { $scope.mainGrid.closeCell(); }
            },
            {
                field: 'summary()', title: 'Summary', aggregates: ['count'], groupHeaderTemplate: '#=value# (#=count# items)', lockable: true, width: width, editor: function () { $scope.mainGrid.closeCell(); }
            },
            {
                field: 'approved', title: 'Approved', aggregates: ['count'], groupHeaderTemplate: '#=value# (#=count# items)', lockable: true, width: width, template: ' # if (approved==true){#<div style="background-color: green; margin: 0; padding: 0;">YES</div>#}else{#<div style="background-color: yellow; margin: 0; padding: 0;">NO</div>#}#'
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

define(['angular', 'treeGrid'], function (angular) {
    angular.module('app.treeGrid', [])
    .controller('treeGridCtrl', treeGridContrller)

    function treeGridContrller(){
        var data = {
            "Cfg": {
                "id": "basic"
            },
            "LeftCols": [
              {
                  "Name": "LEFT1",
                  "Width": "200"
              }
            ],
            "Cols": [
              {
                  "Name": "DATA1"
              },
              {
                  "Name": "DATA2"
              }
            ],
            "Header": {
                "LEFT1": "Left Fixed Column",
                "DATA1": "Data1 Column",
                "DATA2": "Data2 Column"
            },
            "Body": [
                [
                    {
                        "LEFT1": "1",
                        "DATA1": "GOD",
                        "DATA2": "KING"
                    },
                    {
                        "LEFT1": "2",
                        "DATA1": "Ocean",
                        "DATA2": "Sky"
                    },
                    {
                        "LEFT1": "3",
                        "DATA1": "Jerry",
                        "DATA2": "Jones"
                    }
                ]
            ]
        };

        TreeGrid({ Data: { Data: data } }, 'main');
    }
});
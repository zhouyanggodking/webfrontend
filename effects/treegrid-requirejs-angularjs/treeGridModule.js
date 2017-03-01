define(['angular', 'treeGrid'], function (angular) {
    angular.module('app.treeGrid', [])
    .controller('treeGridCtrl', treeGridContrller)

    function treeGridContrller(){
        var data = {
            "Cfg": {
                "id": "basic"
            },
            "Panel":{
                "Visible": false
            },
            "Solid": [//put Group into Solid tag to use Group UI
                {
                    "Kind": "Group",
                    "Cells": "List,Custom",
                    "ListCustom": "unknown",
                    "List": "|Group by DATA1|Group by DATA2|Group by DATA1 and DATA2",
                    "Cols": "|DATA1|DATA2|DATA1, DATA2"
                }
            ],
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
              },
              {
                  "Name": "DATA3",
                  "CanGroup": false
              }
            ],
            "RightCols": [
              {
                  "Name": "RIGHT1"
              }
            ],
            "Header": {
                "LEFT1": "Left Fixed Column",
                "DATA1": "Data1 Column",
                "DATA2": "Data2 Column",
                "DATA3": "Data3 Column(can not be grouped)",
                "RIGHT1": "RIGHT1 Column"
            },
            "Head": [
                {//filtering settings
                    "Kind": "Filter"
                },
                {
                "LEFT1": "fixed head row",
                "DATA1": "1",
                "DATA2": "2",
                "DATA3": "3",
                "RIGHT1": "4"
                }
            ],
            "Body": [//variable rows in pages
                [
                    {
                        "LEFT1": "1",
                        "DATA1": "GOD",
                        "DATA2": "KING",
                        "DATA3": "KING11",
                        "RIGHT1": 11
                    },
                    {
                        "LEFT1": "2",
                        "DATA1": "Ocean",
                        "DATA2": "Sky",
                        "DATA3": "Sky22",
                        "RIGHT1": 22
                    },
                    {
                        "LEFT1": "3",
                        "DATA1": "Jerry",
                        "DATA2": "Jones",
                        "DATA3": "Jerry33",
                        "RIGHT1": 33
                    },
                    {
                        "LEFT1": "4",
                        "DATA1": "Jerry",
                        "DATA2": "King",
                        "DATA3": "KING44",
                        "RIGHT1": 44
                    }
                ]
            ],
            "Foot": [
                {
                    "LEFT1": "fixed foot row",
                    "DATA1": "1",
                    "DATA2": "2",
                    "DATA3": "3",
                    "RIGHT1": "4"
                }
            ]
        };

        var grid = TreeGrid({ Data: { Data: data } }, 'main');

        Grids.OnRenderFinish = function (G) {
            console.log(G.Source);
        };
    }
});
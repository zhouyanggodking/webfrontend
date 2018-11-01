define(['angular', 'treeGrid'], function (angular) {
    angular.module('app.treeGrid', [])
    .controller('treeGridCtrl', treeGridContrller)

    function treeGridContrller($scope, $http) {
        var data = {
            "Cfg": {
                //Style: "Office",
                //CSS: 'src/views/grid-demo/treeGrid/Office/sassyGrid.css',
                "MainCol": "Id",
                "id": "basic",
                "MaxSort": 1,
                "SortedLap": 1,
                "Sort": "",
                "SortLap": 1,
                "AutoSort": 1, //row is automatically sorted (moved) after value is changed by user's edit
                //"Sorted": 0
                "Paging": 3,
                //"AllPages": 0
                "PageLength": 50,
                //"FastPages": 500,
                "ChildPaging": 3,
                "RemoveCollapsed": 3,
                "ChildParts": 2,
                "ChildPartLength": 50,

                NoPager: 1,
                //CalcOrder: "DeltaColor"
            },
            "Panel": {
                "Visible": false
            },
            "Actions": {
                OnClickSort: "SortAsc OR SortDesc OR NoSort"
            },
            "Solid": [//put Group into Solid tag to use Group UI
                //{
                //    "King": "TopBar"
                //},
                {
                    "Kind": "Group",
                    Space: 0
                    //"Cells": "List,Custom",
                    //"ListCustom": "unknown",
                    //"List": "|Group by DATA1|Group by DATA2|Group by DATA1 and DATA2",
                    //"Cols": "|DATA1|DATA2|DATA1, DATA2"
                }
            ],
            //"LeftCols": [
            //  {
            //      "Name": "LEFT1",
            //      "Width": "200"
            //  }
            //],
            "Cols": [
              {
                  "Name": "Id",
                  //"CaseSensitive": "0"
                  "Type": "Text",
                  "CanEmpty": 1,
                  "EmptyValue": ""
              },
              {
                  "Name": "Name",
                  Align: "right",
                  "CanEmpty": 1,
                  "EmptyValue": ""
              },
              {
                  "Name": "ShortName",
                  //"CanGroup": false,
                  //"Formula":"DATA1 + DATA2" 
              },
              {
                  "Name": "CurrentPrice",
                  Type: "Int"
              },
              {
                  "Name": "TargetPrice",
                  Type: "Int",
                  "CanEmpty": 1,
                  "ColorFormula": "Value>50 ? 'red': 'green'"
              },
              {
                  "Name": "Delta",
                  "CanGroup": false,
                  "Formula": "TargetPrice - CurrentPrice",
                  //"CanEmpty": 1,
                  Type: "Int",
                  //Calculated: 1,
                  "ColorFormula": "Value>=0 ? 'green': 'red'"
              }//, {
              //    "Name": "HasNextPage",
              //    "Type": "Bool"
              //}
            ],
            //"RightCols": [
            //  {
            //      "Name": "RIGHT1",
            //      "Type": "Int",
            //      "ColorFormula": "Value < 30? 'red': 'green'", //not working unless added to CalcOrder
            //  }
            //],
            "Header": {
                "Id": "Id",
                "Name": "Name",
                "ShortName": "Short Name",
                "CurrentPrice": "CurrentPrice",
                "TargetPrice": "TargetPrice",
                "Delta": "Delta (cannot be grouped)"
            },
            Def: [
                {
                    Name: "R",
                    Calculated: "1",
                    CalcOrder: "Delta,DeltaColor"
                }, {
                    Name: "GroupHeader",
                    Expanded: 0,
                    Calculated: "1",
                    CalcOrder: "IdHtmlPostfix",
                    CurrentPriceFormula: "sum()",
                    IdHtmlPostfixFormula: "' (' + myCount(Grid, Row, Col) + ') '"
                    //Formula: "sdfas + sdfsd"
                }
            ],
            //"Head": [
            //    {//filtering settings
            //        //"Kind": "Filter",
            //        //"RIGHT1Range": "1",
            //        //"RIGHT1ShowMenu": "",
            //        //"RIGHT1": "0~9;15~40",
            //        //"RIGHT1Filter": "1"
            //    }
            //],
            //"Body": [
            //    [
            //        {
            //            "Def": "PARENT",
            //            "Id": "TestGroup",
            //            Count: 100
            //        }
            //    ]
            //]
        };

        var testHeader = "==asfsdfsdfas=";

        window.myCount = function (grid, row, col) {
            return row.sum;
        }

        TreeGrid({//jshint ignore:line
            Layout: {
                Data: data,
                Format: "JSON",
                Header: {
                    Authorization: testHeader
                }
            },
            Data: {
                Url: "http://localhost:17262/api/treegrid/data",
                //Url: getDataUrl()
                //Params: getDataParams()
                Format: "JSON",
                Method: "POST",
                Header: {
                    Authorization: testHeader
                }
            },
            Page: {
                Url: "http://localhost:17262/api/treegrid/page?pageIndex=*Pos&pageSize=50&groupId=*id",
                Method: "POST",
                Format: "JSON",
                Header: {
                    Authorization: testHeader
                }
            }
        }, "main");

        Grids.OnSort = function (grid, col, sort) {
        };

        Grids.OnRenderFinish = function (G) {
        };

        Grids.OnDataSend = function (grid, source, data, callback) {
        };

        Grids.OnDataReceive = function (grid, source) {
            //console.log(source.data);
        };

        Grids.OnDataGet = function (grid, source, data, io) {
            //console.log(data);
        };

        Grids.OnFilter = function (grid, type) {
        };

        Grids.OnDisplayRow = function (grid, row) {
            //console.log(row);

        };

        Grids.OnRenderRow = function (grid, row, col) {
            //console.log(row);
        };

        Grids.OnExpand = function (grid, row) {
            //console.log(row);
        };

        Grids.OnDownloadPage = function (grid, row, func) {
            //console.log(row);
        };

        Grids.OnScrollRow = function (grid, row) {
            //console.log(row);
            if (!row.nextSibling && row.childNodes.length === 0 && row.HasNextPage) {
                var pageNum = row.NextPageNum;
                var groupid = row.parentNode.id;
                var url = 'http://localhost:17262/api/treegrid/testrows?pagesize=50&pageNum=' + pageNum + '&groupid=' + groupid;
                $http.get(url).then(function (response) {
                    //console.log(response);
                    Grids.PagingRows = response.data;
                    grid.AddRows(response.data.length, row.parentNode);
                });
                grid.loading = 1;
            }
        };

        Grids.OnRowAdd = function (grid, row) {
            var rowR = Grids.PagingRows.shift();
            row.Id = rowR.Id;
            row.Name = rowR.Name;
            row.ShortName = rowR.ShortName;
            row.CurrentPrice = rowR.CurrentPrice;
            row.TargetPrice = rowR.TargetPrice;
            row.HasNextPage = rowR.HasNextPage;
            row.NextPageNum = rowR.NextPageNum;
            if (Grids.PagingRows.length === 0) {
                grid.Loading = 0;
            }
        };

    }



});


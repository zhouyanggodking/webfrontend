define([], function () {
    var fn = function ($scope) {
        $scope.reds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        31, 32, 33];

        //var rand = Math.floor(Math.random() * 33);//get random number from 0 ~ 32
        //$scope.results_reds = generateReds();
        //$scope.results_blue = generateBlue();

        //$scope.generateReds = generateReds;
        //$scope.generateBlue = generateBlue;

        $scope.generate = function () {
            var max_times = 10000;
            var min_times = 1000;
            var times = Math.floor(Math.random() * (max_times - min_times)) + min_times;
            $scope.iterTimes = times;

            for (var t = 0; t < times; ++t) {
                $scope.results_reds = generateReds();
                $scope.results_blue = generateBlue();
                //$scope.$apply();
                console.log(t);
            }
            console.log($scope.results_reds);
            console.log($scope.results_blue = generateBlue());
            console.log($scope.reds);
        };

        function generateReds() {
            var reds = $scope.reds;
            var n = 6;
            var results = [];
            var indexes = [];
            for (var i = 0; i < n; ++i) {
                var index = Math.floor(Math.random() * (33 - i)) + i;
                indexes.push(index);
                var temp = reds[i];
                reds[i] = reds[index];
                reds[index] = temp;
                results.push(reds[i]);
                //console.log(reds);
            }

            //console.log(indexes);
            //console.log(results);
            results.sort();
            //console.log(results);
            return results;
        }

        function generateBlue() {
            var result = Math.floor(Math.random() * 16) + 1;//get random number from 1 ~ 16
            return result;
        }
    };
    fn.$inject = ['$scope'];
    return fn;
});
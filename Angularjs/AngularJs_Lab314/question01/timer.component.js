angular.module('timerApp', [])
    .controller('TimerController', ['$scope', '$interval', function ($scope, $interval) {
        $scope.inputTime = 0;
        $scope.timeLeft = 0;
        let timer = null;

        $scope.startTimer = function () {
            if ($scope.inputTime > 0) {
                $scope.timeLeft = $scope.inputTime;
                if (!timer) {
                    timer = $interval(function () {
                        if ($scope.timeLeft > 0) {
                            $scope.timeLeft--;
                        } else {
                            $scope.stopTimer();
                        }
                    }, 1000);
                }
            }
        };

        $scope.stopTimer = function () {
            if (timer) {
                $interval.cancel(timer);
                timer = null;
            }
        };

        $scope.resetTimer = function () {
            $scope.stopTimer();
            $scope.timeLeft = 0;
        };
    }]);

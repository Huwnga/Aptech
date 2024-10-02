angular.module('todoApp', [])
    .controller('TodoController', ['$scope', function ($scope) {
        $scope.tasks = []; // List of tasks

        // Add a new task
        $scope.addTask = function () {
            if ($scope.newTask) {
                $scope.tasks.push({ text: $scope.newTask, completed: false });
                $scope.newTask = ''; // Clear the input after adding
            }
        };

        // Mark task as completed
        $scope.toggleComplete = function (task) {
            task.completed = !task.completed;
        };

        // Delete a task
        $scope.deleteTask = function (index) {
            $scope.tasks.splice(index, 1);
        };
    }]);
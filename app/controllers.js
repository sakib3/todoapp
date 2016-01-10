'use strict';

angular.module('todoApp.controller', [])
	   .controller('todoController',["$scope", function($scope){
	   		$scope.newTask = "";

	   		$scope.taskList = [
	   			{description: "Buy airplane tickets", done: false},
	   			{description: "Make hotel reservation", done: false},
	   			{description: "Chill", done: false}
	   		];

	   		$scope.addTodo = function(){
	   			$scope.taskList.push({description: $scope.newTask, done: false});
	   			$scope.newTask = "";
	   		}

	   		$scope.deleteTodo = function($index){
	   			$scope.taskList.splice($index,1);
	   		}
	   }]);
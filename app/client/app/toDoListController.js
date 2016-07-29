
angular.module("app").controller("toDoListController", ['$scope', 'dataService', function ($scope, $dataService) {

    var currentId = 0;

    function getAllTodoItems() {
        var promise = $dataService.getAllTodoItems();

        promise.then(function(response) { 
            updateData(response);
        });
    };

    getAllTodoItems();

    $scope.addTodoItem = function() {
        currentId++;
        var id = currentId;
        var name = 'todo item title';
        var description = $scope.description;

        var item = new TodoItem(id, name, description);

        var promise = $dataService.addTodoItem(item);
        promise.then(function() {
                console.log('successfuly added item');
                
                if($scope.todoItems === undefined)
                {
                    $scope.todoItems = [];
                }

                $scope.todoItems.push(item);
                console.log('successfully added');
            },
            function(response){
                console.log(response);
                throw response;
            }
        );        
    };

    $scope.deleteAll = function() {
        var promise = $dataService.deleteAll();
        promise.then(function() {
                console.log('successfuly deleted all');
                deleteAllTodoItems();
            },
            function(response){
                console.log(response);
                throw response;
            }
        );
    };

    $scope.deleteTodoItem = function(id) {
        var promise = $dataService.deleteItem(id);
        promise.then(function() {
                console.log('successfuly deleted all');
                deleteTodoItem(id);
            },
            function(response){
                console.log(response);
                throw response;
            }
        );
    };

    //Helper functions from here on ......

    function updateData(response) {
        var responseData = response.data;

        if($scope.todoItems === undefined)
        {
            $scope.todoItems = [];
        }
        
        var length = responseData.length;
        for (var i = 0; i < length; i++)
        {
            currentId = responseData[i].id;
            var todoItem = new TodoItem(responseData[i].id, responseData[i].name, responseData[i].description);
            $scope.todoItems.push(todoItem);
        }
    };

    function deleteTodoItem(id) {
        var index = $scope.todoItems.findIndex(x => x.id === id)
        
        if(index > -1) {
            $scope.todoItems.splice(index, 1);
        }
    };  

    function deleteAllTodoItems() {
        $scope.todoItems = [];        
    };
}]);
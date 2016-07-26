angular.module('app').factory("dataService", ['$rootScope', '$http', function ($rootScope, $http) {

    function getAllTodoItems() {
        return $http.get('http://localhost:8080/api/todoItems');
    };

    function getTodoItem(id) {
        return $http.get('http://localhost:8080/api/todoItems/' + id);
    };

    function addTodoItem(data) {
        return $http.post('http://localhost:8080/api/todoItems', data);
    }

    function updateTodoItem(id, data) {
        return $http.post('http://localhost:8080/api/todoItems', data);
    }

    function deleteItem(id) {
        return $http.delete('http://localhost:8080/api/todoItems/' + id);
    }

    function deleteAll(data) {
        return $http.delete('http://localhost:8080/api/todoItems');
    }

    return {
        getAllTodoItems: getAllTodoItems,
        addTodoItem: addTodoItem,
        deleteAll: deleteAll,
        deleteItem: deleteItem,
        updateTodoItem: updateTodoItem,
    };
}
]);
'use strict';

angular.module('app').factory('dataService', ['$rootScope', '$http', function ($rootScope, $http) {

    //get: get all items
    function getAllTodoItems() {
        return $http.get('http://localhost:8080/api/todoItems');
    }

    //get: get a particular item
    function getTodoItem(id) {
        return $http.get('http://localhost:8080/api/todoItems/' + id);
    }

    //post: add an item
    function addTodoItem(data) {
        return $http.post('http://localhost:8080/api/todoItems', data);
    }
 
    //put: update a particular item
    function updateTodoItem(id, data) {
        return $http.put('http://localhost:8080/api/todoItems', data);
    }

    //delete: delete a particular item 
    function deleteItem(id) {
        return $http.delete('http://localhost:8080/api/todoItems/' + id);
    }

    //delete: delete all items
    function deleteAll(data) {
        return $http.delete('http://localhost:8080/api/todoItems');
    }

    return {
        getAllTodoItems: getAllTodoItems,
        getTodoItem: getTodoItem,
        addTodoItem: addTodoItem,
        updateTodoItem: updateTodoItem,
        deleteItem: deleteItem,
        deleteAll: deleteAll        
    };
}
]);

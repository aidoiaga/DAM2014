$(function(){
    "use strict";

    window.indexedDB = window.indexedDB || window.mozIndexedDB ||
        window.webkitIndexedDB || window.msIndexedDB;

    window.IDBTransaction = window.IDBTransaction ||
        window.webkitIDBTransaction || window.msIDBTransaction;

    window.IDBKeyRange = window.IDBKeyRange ||
        window.webkitIDBKeyRange || window.msIDBKeyRange;

    var db = null;
    var numElem = 0;

    var onerror = function(e) {
        console.log(e);
    };

    var open = function() {
        var version = 8;
        var request = indexedDB.open("todo-list", version);

        request.onupgradeneeded = function(e) {
            db = e.target.result;
            if(db.objectStoreNames.contains('todo-list')) db.deleteObjectStore('todo-list');

            var store = db.createObjectStore("todo-list", { keyPath: "timeStamp" });
        };

        request.onerror = onerror;

        request.onsuccess = function(e) {
            db = e.target.result;
            console.log("DB opened");

        };
    };

    var init = function() {
        open();
    };

    var remove = function(key) {
        var transaction = db.transaction(["todo-list"], "readwrite");
        var store = transaction.objectStore("todo-list");

        var request = store.delete(parseInt(key));

        request.onsuccess = function(e) {
            console.log("Sucessful delete: "+e);
        };

        request.onerror = onerror;

        store.transaction.oncomplete = function(event) {
            $('#todo').val('');
            $('#todoCode').val('');
            $('#checkToDo').attr('checked', false);
        };

    };

    var update = function(key, text, done) {
        var transaction = db.transaction(["todo-list"], "readwrite");
        var store = transaction.objectStore("todo-list");

        var singleKeyRange = IDBKeyRange.only(parseInt(key));
        var request = store.openCursor(singleKeyRange);

        request.onsuccess = function(e) {
            remove(key);
            add(text, done);
            console.log("Sucessful update: "+e);
        };

        request.onerror = onerror;

        store.transaction.oncomplete = function(event) {
            $('#todo').val('');
            $('#todoCode').val('');
            $('#checkToDo').attr('checked', false);
        };

    };

    var add = function(todoText, hecho) {
        var transaction = db.transaction(["todo-list"], "readwrite");
        var store = transaction.objectStore("todo-list");

        var data = {
            "text": todoText,
            "hecho": hecho,
            "timeStamp": new Date().getTime()
        };

        var request = store.put(data);

        request.onsuccess = function(e) {
            console.log("Sucessful add: "+e);
        };

        request.onerror = function(e) {
            console.log("Error adding: ", e);
        };
    };

    var addTodo = function() {
        var todo = document.getElementById("todo");
        var hecho = "false";
        add(todo.value, hecho);
        todo.value = "";
    };

    var removeTodo = function() {
        var key = document.getElementById("todoCode");
        remove(key.value);
        key.value = "";
    };

    var updateTodo = function() {
        var key = document.getElementById("todoCode");
        var text = document.getElementById("todo");
        var done;
        if(document.getElementById("checkToDo").checked){
            done = true;
        }
        else{
            done = false;
        }
        console.log(done);
        update(key.value, text.value, done);
        key.value = "";
    };

    var showTodo = function() {
        var transaction = db.transaction(["todo-list"]);
        var store = transaction.objectStore("todo-list");
        var data = [];
        var request = store.openCursor();

        request.onsuccess = function (event) {
            var cursor = event.target.result;

            if (cursor) {
                var record = "<li id='"+cursor.value.timeStamp+"' data-timestamp='"+cursor.value.timeStamp+"'>[Code:"+cursor.value.timeStamp+"] - Task: "+cursor.value.text+"</li>";// value is the stored object
                if(cursor.value.hecho === true){
                    //record.css('text-decoration:line-through');
                    record = '<del>'+record+'</del>';
                }
                data.push(record);
                cursor.continue(); // get the next object
            }
        };

        request.onerror = onerror;

        store.transaction.oncomplete = function(event) {
            $('#todoItems').empty();
            $('#todoItems').append(data);
        };

    };

    var showData = function(){
        var $this = $(this);
        console.log($this.data( 'timestamp' ));
        var key = $this.data('timestamp');
        var transaction = db.transaction(["todo-list"]);
        var store = transaction.objectStore("todo-list");


        console.log(key);
        var singleKeyRange = IDBKeyRange.only(parseInt(key));
        var request = store.openCursor(singleKeyRange);

        request.onsuccess = function(e) {
            var cursor = e.target.result;

            $('#todo').val(cursor.value.text);
            $('#todoCode').val(cursor.value.timeStamp);
            if(cursor.value.hecho === true)
                $('#checkToDo').attr('checked', true);
            else
                $('#checkToDo').attr('checked', false);
        };

        request.onerror = onerror;
    };

    $(document).on('click','#addToDo',addTodo);
    $(document).on('click','#showToDo',showTodo);
    $(document).on('click','#removeToDo',removeTodo);
    $(document).on('click','#updateToDo',updateTodo);
    $(document).on('click','#todoItems li',showData);

    window.addEventListener("DOMContentLoaded", init, false);
});
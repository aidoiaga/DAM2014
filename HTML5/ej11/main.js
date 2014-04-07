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

    var add = function(id, todoText, hecho) {
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
        };var numElem = 0;
    };

    var addTodo = function() {
        var todo = document.getElementById("todo");
        var hecho = "false";
        add(todo.value, hecho);
        todo.value = "";
    };

    $(document).on('click','#addToDo',addTodo);

    window.addEventListener("DOMContentLoaded", init, false);
});
var tasks = {};

$("a").click(function(event){
    event.preventDefault
});

var createTask = function(taskText, taskList) {
    var taskLi = $("<li>").addClass("list-group-item")
    var taskP = $("<p>")
    .addClass("m-1")
    .text(taskText);

    taskLi.append(taskP);

    $("#list-" + taskList).append(taskLi);
};

var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
}

$.each(tasks, function(list, arr) {
    console.log(list, arr);
    arr.forEach(function(task) {
        createTask(task.text, task.date, list);
    });
});

var saveTasks = function() {
    localStorage.setItem("tasks"), JSON.stringify(tasks);
};

$("#task-form-modal").on("shown.bs.modal", function() {
    $("#modalTaskDescription").val("");
});

$("modalTaskDescription").trigger("focus")



loadTasks();
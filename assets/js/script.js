var tasks = {};

var createTask = function(taskText, taskList) {
    var taskLi = $("<li>").addClass("list-group-item")
    var taskSpan = $("<span>")
    .addClass("badge badge-primary badge-pill")
    .text(taskDate);
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

$(".time-block").on("click", "p", function() {
    var text = $(this)
    .text()
    .trim();

    var textInput = $("<textarea>")
    .addClass("form-control")
    .val(text);
$(this).replaceWith(textInput);

textInput.trigger("focus");
});

$(".list-group").on("blur", "textarea", function() {
    var text = $(this).val();

    var status = $(this)
    .closest(".list-group")
    .attr("id")
    .replace("list-", "");
    var index = $(this)
    .closest(".list-group-item")
    .index();

    tasks[status][index].text = text;
    saveTasks();

var taskP = $("<p>")
.addTasks("m-1")
.text(text);

$(this).replaceWith(taskP);
});

loadTasks();
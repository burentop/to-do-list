function Task(name, description) {
  this.taskName = name;
  this.taskDescription = description;
}

Task.prototype.fullDescription = function() {
  return this.taskName + ": " + this.taskDescription;
}

$(document).ready(function() {
  $("form#new-task").submit(function(event) {
    event.preventDefault();

    var inputtedTaskName = $("input#new-task-name").val();
    var inputtedTaskDescription = $("input#new-task-description").val();

    var newTask = new Task(inputtedTaskName, inputtedTaskDescription);

    $("ul#tasks").append("<li><span class='task'>" + newTask.fullDescription() + "</span></li>");

    $(".task").last().click(function() {
      $(this).parent().remove();
    });

    $("input#new-task-name").val("");
    $("input#new-task-description").val("");
  });
});

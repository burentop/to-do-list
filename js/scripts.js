function Task(name, description) {
  this.taskName = name;
  this.taskDescription = description;
}

//Contact.prototype.fullName = function() {
  //return this.firstName + " " + this.lastName;
//}

$(document).ready(function() {
  $("form#new-task").submit(function(event) {
    event.preventDefault();

    var inputtedTaskName = $("input#new-task-name").val();
    var inputtedTaskDescription = $("input#new-task-description").val();

    var newTask = new Task(inputtedTaskName, inputtedTaskDescription);

    $("ul#tasks").append("<li><span class='task'>" + newTask.taskName + "</span></li>");

    $(".task").last().click(function() {
      $("#show-task").show();
      $("#show-task h2").text(newTask.taskName);
      $(".task-name").text(newTask.taskName);
      $(".task-description").text(newTask.taskDescription);
    });

    $("input#new-task-name").val("");
    $("input#new-task-description").val("");
  });
});

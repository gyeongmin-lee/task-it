$(document).ready(function () {
    function loadMessages() {
        var callback = function (snap) {
            var data = snap.val();
            var title = data.title;
            var detail = data.detail;
            var duedate = data.duedate;
            var donePeople = data.done;
            var inprogressPeople = data.inprogress;

            displayTask(snap.key, title, detail, duedate, donePeople, inprogressPeople);
        };
        var taskRef = firebase.database().ref('/tasks/');
        taskRef.on('child_added', callback);
        taskRef.on('child_changed', callback);
    }

    function displayTask(key, title, detail, duedate, donePeople, inProgressPeople) {
        $(TASK_TEMPLATE).appendTo(".container--task").attr("id", key);
        var task = $("#" + key);
        task.find('.title--task').text(title);
        task.find('.content--task').text(detail);
        task.find('.content--due-date').text(duedate);

        var doneCount = 0;
        for (var person in donePeople) {
            task.find('.container--people-done > .people-list').append("<li>" + donePeople[person] + "</li>");
            doneCount++;
        }
        task.find('.done-people').text(doneCount + " ");

        var inprogressCount = 0;
        for (var person in inProgressPeople) {
            task.find('.container--people-inprogress > .people-list').append("<li>" + inProgressPeople[person] + "</li>");
            inprogressCount++;
        }
        task.find('.in-progress-people').text(inprogressCount + " ");
        toggleTaskState();
        toggleList();
    }

    function onTaskFormSubmit(e) {
        e.preventDefault();
        title = $(".textbox--task-title").val();
        detail = $(".textbox--area").val();
        due = $(".input--date").val();
        taskPost(title, detail, due);
        $("#edit-add-task").remove();
    }

    function taskPost(taskTitle, taskDetail, taskDue) {
        if (taskDue != null && taskDue != "") {
            var date = new Date(due);
            var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][date.getMonth()];
            taskDue = month + ' ' + (date.getDate() + 1) + ', ' + date.getFullYear();
        }

        var newPostKey = firebase.database().ref('/tasks/').push({
            detail: taskDetail || null,
            title: taskTitle || null,
            duedate: taskDue || null
        }).key;
    }

    var TASK_TEMPLATE =
        '<div class="box-container box-container--task">' +
        '<div class="checkbox checkbox-not-checked"></div>' +
        '<div class="task-left-side">' +
        '<h1 class="title title--task"></h1>' +
        '<p class="content content--task"></p>' +
        '</div>' +
        '<div class="box-bottom">' +
        '<p class="content content--number-of-people content--inprogress-people"><span class="in-progress-people"></span>in progress<i class="dropdown-icon dropdown-icon--task"></i></p>' +
        '<p class="content content--number-of-people content--done-people"><span class="done-people"></span> done<i class="dropdown-icon dropdown-icon--task"></i></p>' +
        '<p class="content content--due-date"></p>' +
        '</div>' +
        '<div class="container--people container--people-inprogress">' +
        '<div class="box-top">' +
        '<h1 class="title title--list-inprogress">IN PROGRESS</h1>' +
        '<img src="./image/close-button.png" alt="close button" width="21" height="21" class="close-button-img close-button-img--people" />' +
        '</div>' +
        '<ul class="people-list"></ul>' +
        '</div>' +
        '<div class="container--people container--people-done">' +
        '<div class="box-top">' +
        '<h1 class="title title--list-done">DONE</h1>' +
        '<img src="./image/close-button.png" alt="close button" width="21" height="21" class="close-button-img close-button-img--people" />' +
        '</div>' +
        '<ul class="people-list"></ul>' +
        '</div>' +
        '</div>';


    function toggleList() {
        var toggleDuration = 100;

        $(".content--inprogress-people").off();
        $(".content--done-people").off();
        $(".close-button-img--people").off();

        $(".content--inprogress-people").on("click", function (e) {
            $(this).parent().nextAll().eq(1).hide();
            $(this).parent().nextAll().eq(0).slideToggle(toggleDuration);
            $(this).children().toggleClass("rotated");
            $(this).next().children().removeClass("rotated");
        });

        $(".content--done-people").on("click", function (e) {
            $(this).parent().nextAll().eq(0).hide();
            $(this).parent().nextAll().eq(1).slideToggle(toggleDuration);
            $(this).children().toggleClass("rotated");
            $(this).prev().children().removeClass("rotated");
        });

        $(".close-button-img--people").on("click", function (e) {
            $(this).parent().parent().slideUp(toggleDuration);
            $(this).parent().parent().siblings(".box-bottom").children().children().removeClass("rotated");
        });
    }

    function toggleTaskState() {
        $(".checkbox").off();

        $(".checkbox").on("click", function (e) {
            $(this).toggleClass("checkbox-not-checked");
            $(this).toggleClass("checkbox-checked");
        })
    }

    function addTaskMenu() {
        $(".button--add-task").on("click", function (e) {
            var container = $(".container--task");
            if ($("#edit-add-task").length == 0) {
                var header = $('<div id="edit-add-task" class="box-container box-container--task">');
                var form = $('<form class="add-task-form" action="#"></form>');
                var inputTitle = $('<input required="required" type="text" name="task-title" placeholder="Enter a task..." class="textbox textbox--task-title" />');
                var inputDetail = $('<textarea class="textbox textbox--area" placeholder="Enter task details..." rows="4"></textarea>');
                var dueLabel = $('<h2 class="label label--date">Select Due Date:</h2>');
                var inputDue = $('<input class="input--date" type="date">');
                var boxBottom = $('<div class="box-bottom">');
                var buttonContainer = $('<div class="inline-buttons-container">');
                var cancelButton = $('<button class="button button--cancel-task">CANCEL</button>');
                var saveButton = $('<button type="submit" value="Submit" class="button button--save-task">SAVE</button>');
                boxBottom.append(buttonContainer);
                buttonContainer.append(cancelButton, saveButton);
                form.append(inputTitle, inputDetail, dueLabel, inputDue, boxBottom);
                header.append(form);
                container.append(header);
            }
            closeTaskMenu();
            saveTask();
        });
    }


    function closeTaskMenu() {
        $(".button--cancel-task").off();

        $(".button--cancel-task").on("click", function (e) {
            e.preventDefault();
            $("#edit-add-task").remove();
        })
    }

    function saveTask() {
        $(".button--save-task").off();
        $(document).on('submit', ".add-task-form", onTaskFormSubmit);
    }




    loadMessages();

    addTaskMenu();
    closeTaskMenu();
});


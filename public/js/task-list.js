$(document).ready(function() {
    appendTasks();
    toggleList();   
    toggleTaskState();
    addTaskMenu();
    closeTaskMenu();

    function appendTasks() {

    }

    function toggleList() {
        var toggleDuration = 100;

        $(".content--inprogress-people").on("click", function(e) {
            $(this).parent().nextAll().eq(1).hide();
            $(this).parent().nextAll().eq(0).slideToggle(toggleDuration);
            $(this).children().toggleClass("rotated");
            $(this).next().children().removeClass("rotated");
        });
    
        $(".content--done-people").on("click", function(e) {
            $(this).parent().nextAll().eq(0).hide();
            $(this).parent().nextAll().eq(1).slideToggle(toggleDuration);
            $(this).children().toggleClass("rotated");
            $(this).prev().children().removeClass("rotated");
        });
    
        $(".close-button-img--people").on("click", function(e) {
            $(this).parent().parent().slideUp(toggleDuration);
            $(this).parent().parent().siblings(".box-bottom").children().children().removeClass("rotated");
        });
    }

    function toggleTaskState() {
        $(".checkbox").on("click", function(e) {
            $(this).toggleClass("checkbox-not-checked");
            $(this).toggleClass("checkbox-checked");
        })
    }

    function addTaskMenu() {
        $(".button--add-task").on("click", function(e) {
            var container = $(".container--task");
            if ($("#edit-add-task").length == 0) {
                var header = $('<div id="edit-add-task" class="box-container box-container--task">');
                var form = $('<form></form>');
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
        })
    }

    
    function closeTaskMenu() {
        $(".button--cancel-task").on("click", function(e) {
            e.preventDefault();
            console.log("HI");
            $("#edit-add-task").remove();
        })
    }
});


document.querySelector('#clickButton').onclick = function(){
    if(document.querySelector('#newTask input').value.length == 0){
        alert("Please Enter a Task")
    }

    /* Adding a new Task */
    else{
        document.querySelector('#tasks').innerHTML
        += ` 
            <div class="jTask">
                <span id="taskname">
                    ${document.querySelector
                        ('#newTask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        /* Deleting an added Task */

        var addedTasks = document.querySelectorAll(".delete");
        for(var i=0; i<addedTasks.length; i++){
            addedTasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        /* Crossing a completed/written/word/sentence in the added Task */

        var jTask = document.querySelectorAll(".jTask");

        for(var i=0; i<jTask.length; i++){
            jTask[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }

         /* To clear the input field after aech entry in the task*/

         document.querySelector("#newTask input").value = "";

    }
}
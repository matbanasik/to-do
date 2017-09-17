document.addEventListener('DOMContentLoaded', () => {
    
    const newTaskBox = document.querySelector('#container form');
    
    function addTask () {
        newTaskBox.addEventListener('submit', (event) => {
            event.preventDefault();
            
            const title = document.querySelector('#task').value;
            
            if (title) {
                prepareTask(title);
            }
            
            
            
        }
    )}
    
            
    function prepareTask (title) {
         const taskUl = document.querySelector('#container ul')
         const listElement = document.createElement('li');
                
         listElement.classList.add('single-task');
         listElement.innerHTML = taskHTML(title);
         
         const taskDoneBtn = listElement.querySelector('.task-done');
         const deleteTaskBtn = listElement.querySelector('.task-delete');
        
         taskDoneBtn.addEventListener('click', () => {
             taskComplete(taskDoneBtn);
         });
        
         deleteTaskBtn.addEventListener('click', () => {
             taskDelete(listElement);
         });
         
        
         taskUl.appendChild(listElement);
        
        
    }
         
    
    function taskHTML(title) {
        return `<div class="task-entered">
                   <button type="submit" class="task-done"><i class="fa fa-check" aria-hidden="true"></i></button> 
                   <span class="task-submitted">${title}</span>
                   <button type="submit" class="task-delete"><i class="fa fa-times" aria-hidden="true"></i></button> 
                </div>  `;
    }

    
    function taskComplete (btn) {
        btn.classList.toggle('task-executed');
    };
    
    function taskDelete (task) {
        const liDeleted = task.closest('li');
        liDeleted.remove();
        
    };
    
 
    addTask();
  
})

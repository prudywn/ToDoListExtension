let activities = []
const toDoList = document.getElementById('todolist')
const todoInput = document.getElementById('todoInput')
const addEl = document.getElementById('add-el')
const deleteEl = document.getElementById('delete-el')
const leadsFromLocalStorage = JSON.parse(localStorage.getItem('activities'))
// console.log(leadsFromLocalStorage)
if (leadsFromLocalStorage) {
    activities = leadsFromLocalStorage
    renderActivities()
}

function renderActivities(){
    let activitiesHTML = ''
    for (let i = 0; i < activities.length; i++) {
        activitiesHTML += `
        <div class="activity">
        <div class="activity-text">${activities[i]}</div>
        <div class="activity-delete">Done</div>
        </div>
        `
        }
        toDoList.innerHTML = activitiesHTML

}

addEl.addEventListener('click', () =>{
    let todoValue = todoInput.value
    if(todoValue === '') {
        alert('Please enter a todo')
        } else {
            activities.push(todoValue)
            localStorage.setItem('activities', JSON.stringify(activities))
            todoInput.value = ''
            renderActivities()
            }

})

deleteEl.addEventListener('dblclick', () =>{
    activities = []
    renderActivities()
    localStorage.clear()

})

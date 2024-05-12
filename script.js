let activities = []
const toDoList = document.getElementById('todolist')
const todoInput = document.getElementById('todoInput')
const addEl = document.getElementById('add-el')
const deleteEl = document.getElementById('delete-el')
const leadsFromLocalStorage = JSON.parse(localStorage.getItem('activities'))

if (leadsFromLocalStorage){
    activities = leadsFromLocalStorage
    renderActivities()
}

function renderActivities(){
    let activitiesHtml = ''
    for(let i = 0; i < activities.length; i++){
        activitiesHtml += `<li>${activities[i]} 
        </li>`
        }
        toDoList.innerHTML = activitiesHtml
        
}

addEl.addEventListener('click', function(){
    if(todoInput.value != ''){
        activities.push(todoInput.value)
        localStorage.setItem('activities', JSON.stringify(activities))
        todoInput.value = ''
        renderActivities()
        }
})

deleteEl.addEventListener('dblclick', function(){
    localStorage.clear()
    activities = []
    renderActivities()

})
let tasks = [
    {
        id: 1,
        title: 'купить хлеб',
        isDone: false,
        isImportant: false
    },
    {
        id: 2,
        title: 'купить ...',
        isDone: false,
        isImportant: false

    }
]

let list = document.querySelector('.todo__list')
let form = document.querySelector('.todo__form')
const showTasks = () =>{
    tasks.forEach((item) =>{
        list.innerHTML   += `
     <li class="todo__list-item" style="background: ${item.isImportant ? 'purple' : ''}">
          <p  style="color: ${item.isDone ? 'green' : 'black'}" class="todo__list-title">${item.title}</p>
          <button class="done" data-id="${item.id}">Done</button>
          <button class="import" data-id="${item.id}">Importent</button>
           <button class="todo__list-delete" data-id="${item.id}">x</button>

    </li>
   `
    })
    let deleteBtn = document.querySelectorAll('.todo__list-delete')
    deleteBtn.forEach((item) =>{
        item.addEventListener('click',() => {
            tasks = tasks.filter((el) =>{
                return item.dataset.id != el.id
            })
            list.innerHTML =''
            showTasks()

        })
    })
    let doneBtn = document.querySelectorAll('.done')
    doneBtn.forEach((item) => {
        item.addEventListener('click', () =>{
            tasks = tasks.map((el) =>{
                if (item.dataset.id == el.id) {
                    return{...el, isDone: !el.isDone}
                }
                return el
            })
            console.log(tasks)
            list.innerHTML = ''
            showTasks()
        })
    })

    let importantBtn = document.querySelectorAll('.import')
    importantBtn.forEach((item) => {
        item.addEventListener('click', () =>{
            tasks = tasks.map((el) =>{
                if (item.dataset.id == el.id) {
                    return{...el, isImportant: !el.isImportant}
                }
                return el
            })
            console.log(tasks)
            list.innerHTML = ''
            showTasks()
        })

    })


}





form.addEventListener('submit',(e) =>{
    e.preventDefault()
    tasks = [
        ...tasks,
        {
            id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
            title: e.target[0].value,
            isDone: false,
            isImportant: false
        }
    ]
    e.target[0].value =``
    list.innerHTML = ''
    showTasks()
})

showTasks()
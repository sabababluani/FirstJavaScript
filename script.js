const wrapperChild = document.querySelector('.wrapper--child')
let trash = document.querySelectorAll('.trash')
let add = document.getElementById('addButton')
let container = document.querySelector('.section')
let newTemplate = document.getElementById('taskDivTemplate')
let finishedTemplate = document.getElementById('finishedTaskDivTemplate')
let input = document.getElementById('input--box')
let counterOne = document.querySelector('.davalebebi')
let counterTwo = document.querySelector('.dasrulebuli')
let checkbox = document.querySelectorAll('.check')
let done = 0


function addbutton() {
    wrapperChild.remove()
    let newDiv = newTemplate.cloneNode(true)
    container.appendChild(newDiv)
    newDiv.querySelector('.trash').addEventListener('click', deleteDiv)
    newDiv.querySelector('.check').addEventListener('click', finishTask)
    newDiv.style.display = 'flex'
    newDiv.querySelector('.flexOne').value = input.value
    input.value = ''
    counterOne.value++
    changeStats()
}

function deleteDiv(e) {
    e.target.parentElement.remove()
    counterOne.value--
    if (e.target.parentElement.classList.value == 'finished__section--container') {
        done--
    }
    changeStats()

}


function finishTask(e) {
    if (!e.target.classList.contains('finished__section--container')) {
        e.target.classList.remove('not__section--container');
        e.target.classList.add('finished__section--container');
        done++;
    } else {
        e.target.classList.remove('finished__section--container');
        e.target.classList.add('not__section--container');
        done--;
    }
    changeStats();
}


function changeStats() { counterTwo.value = `${done} / ${counterOne.value}` }


trash.forEach(trash => { trash.addEventListener('click', deleteDiv) })
checkbox.forEach(checkbox => { checkbox.addEventListener('click', finishTask) })



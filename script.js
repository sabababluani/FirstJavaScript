const wrapperChild = document.querySelector('.wrapper--child')
const inputBox = document.getElementById('input--box')
const sectonUlParent = document.querySelector('.section')
const sectonUl = document.querySelector('.section--container')
const innnerPhoto = document.querySelector('.section__inner--photo')


function addButton() {
 
    if (addButton) {
        wrapperChild.remove()
        let li = document.createElement("li")
        li.innerHTML = ` <div class="section--container">
        <div class="section__inner--photo">
            <img src="./images/uncheck.png">
        </div>
        <p>${inputBox.value}</p>
        <img onclick="removeButton()" src="./images/layer 1 (1).png">
    </div>`
        sectonUlParent.appendChild(li)

    }
    inputBox.value = ''
}


function removeButton() {
    if (addButton && removeButton) {
        sectonUl.remove()
    }
}

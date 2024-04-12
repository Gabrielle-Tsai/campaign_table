let actionBtns = document.querySelectorAll('.action-btn')
let checkBoxs = document.querySelectorAll('[name="table-checkbox"]')
let darkModeBtn = document.querySelector('#dark-mode')

function callMenu (e) {
    let selectedAction = e.target
    let menu = document.querySelector('.menu')
    let menuPosition = selectedAction.closest('td')
    if (menuPosition.contains(menu) && !menu.classList.contains('d-none')) {
        menu.classList.add('d-none')
        return
    }
    menuPosition.append(menu)
    menu.classList.remove('d-none')
}

function highlightRow (e) {
    const check = e.target
    let isChecked = check.checked
    if (isChecked) {
        check.closest('tr').classList.add('selected')
    } else {
        check.closest('tr').classList.remove('selected')
    }
}

actionBtns.forEach((btn) => {
    btn.addEventListener('click', callMenu)
})

checkBoxs.forEach((checkbox) => {
    checkbox.addEventListener('change', highlightRow)
})

darkModeBtn.addEventListener('click', (e) => {
    let darkMode = e.target.checked
    if (darkMode) {
        document.querySelector('#main-app').dataset.theme = 'dark'
    } else {
        document.querySelector('#main-app').dataset.theme = 'light'
    }
})
// MENU DROPDOWN

function openMenu() {
    document.getElementById('button-menu').classList.add('menuAnimation')
    setInterval(() => {
        document.getElementById('button-menu').classList.remove('menuAnimation')
    }, 500);
    document.querySelector('#menu-open').classList.toggle('visible')
    document.getElementById('menu-item-1').classList.toggle('dropdown_item1')
    document.getElementById('menu-item-2').classList.toggle('dropdown_item2')
    document.getElementById('menu-item-3').classList.toggle('dropdown_item3')
    clearInterval()
}

// TEST FORMATTER
let input
let color
let bold = false
let italic = false
let underline = false
let highlight = false

function getInputAndAddItem(eventObject) {
    // CHECKS IF KEY PRESSED IS NOT ENTER AND IN THAT CASE STOPS THE FUNCTION
    if (eventObject.key !== 'Enter') {
        return
    }

    // GETS THE INPUT
    input = document.getElementById('input-item')
    if (input.value !== '') {
        // CREATES A NEW LIST ELEMENT
        let newListElement = document.createElement('li')
        // CREATES DIV CHECKBOX AND ADDS IT TO THE NEW LIST ELEMENT
        let newCheck = document.createElement('div')
        newCheck.classList.add('checkbox')
        newListElement.appendChild(newCheck)
        // CREATES CHECK ICON AND ADDS IT TO THE NEW CHECKBOX DIV ELEMENT
        let newTick = document.createElement('span')
        newTick.innerHTML = '<i class="fa-solid fa-check"></i>'
        newCheck.appendChild(newTick)
        // CREATES TEXT AND ADDS IT TO THE NEW LIST ELEMENT
        let text = document.createElement('span')
        text.classList.add('list-text')
        newListElement.appendChild(text)
        // CREATES BIN ICON SPAN AND ADDS IT TO THE NEW LIST ELEMENT
        let bin = document.createElement('span')
        bin.classList.add('bin')
        bin.innerHTML = '<i class="fa-solid fa-trash"></i>'
        newListElement.appendChild(bin)
        // PUTS THE INPUT IN THE TEXT SPAN ELEMENT
        text.innerHTML += input.value
        // ADDS A CLASS TO THE NEW LIST ELEMENT
        newListElement.classList.add('list-element')

        // BOLD TEXT CHECK
        if (bold == true) {
            text.classList.add('bold')
        }
        else {
            text.classList.remove('bold')
        }
        // ITALIC TEXT CHECK
        if (italic == true) {
            text.classList.add('italic')
        }
        else {
            text.classList.remove('italic')
        }
        // UNDERLINE TEXT CHECK
        if (underline == true) {
            text.classList.add('underline')
        }
        else {
            text.classList.remove('underline')
        }
        // HIGHLIGHT TEXT CHECK
        if (highlight == true) {
            text.classList.add('highlight')
        }
        else {
            text.classList.remove('highlight')
        }
        // COLOR CHECK
        color = document.getElementById('color').value
        text.style.color = color

        // PRINTS THE LIST ELEMENT IN HTML
        document.getElementById('to-do').appendChild(newListElement);

        // EMPTIES THE INPUT
        input.value = ''

        bin.addEventListener("click", function () {
            document.getElementById('to-do').removeChild(newListElement);
        })
        newCheck.addEventListener("click", function () {
            newListElement.classList.toggle('checked')
            newTick.classList.toggle('visible')
        })
    }
    else {
        // ERROR IF THERE IS NO TEXT WRITTEN
        input.style.border = '2px solid red'
    }
}

// BOOLEAN FORMATTING CHECKS

function setBold() {
    document.getElementById('button1').classList.toggle('button-true')
    if (bold == false) {
        bold = true
    }
    else {
        bold = false
    }
}

function setItalic() {
    document.getElementById('button2').classList.toggle('button-true')
    if (italic == false) {
        italic = true
    }
    else {
        italic = false
    }
}

function setUnderline() {
    document.getElementById('button3').classList.toggle('button-true')
    if (underline == false) {
        underline = true
    }
    else {
        underline = false
    }
}

function setHighlight() {
    document.getElementById('button4').classList.toggle('button-true')
    if (highlight == false) {
        highlight = true
    }
    else {
        highlight = false
    }
}
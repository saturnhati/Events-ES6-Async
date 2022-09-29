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
let input;
let color;
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
        // CREATES A NEW LI ELEMENT
        let newListElement = document.createElement('li')
        // PUTS THE INPUT IN THE LI ELEMENT
        newListElement.innerText = input.value
        // ADDS A CLASS TO THE LI ELEMENT
        newListElement.classList.add('list-element')

        // BOLD TEXT CHECK
        if (bold == true) {
            newListElement.classList.add('bold')
        }
        else {
            newListElement.classList.remove('bold')
        }
        // ITALIC TEXT CHECK
        if (italic == true) {
            newListElement.classList.add('italic')
        }
        else {
            newListElement.classList.remove('italic')
        }
        // UNDERLINE TEXT CHECK
        if (underline == true) {
            newListElement.classList.add('underline')
        }
        else {
            newListElement.classList.remove('underline')
        }
        // HIGHLIGHT TEXT CHECK
        if (highlight == true) {
            newListElement.classList.add('highlight')
        }
        else {
            newListElement.classList.remove('highlight')
        }
        // COLOR CHECK
        color = document.getElementById('color').value
        newListElement.style.color = color

        // PRINTS THE LIST ELEMENT IN HTML
        document.getElementById('to-do').appendChild(newListElement);
        // EMPTIES THE INPUT
        input.value = ''
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

const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)


for( const empty of empties ) {
    empty.addEventListener('dragover' ,dropOver)    
    empty.addEventListener('dragenter' ,dropEnter)
    empty.addEventListener('dragleave' ,dropLeave)
    empty.addEventListener('drop' ,dropDown)
}

function dragStart() {
    this.className += ' hold'
    // setTimeout( () => (this.className = 'invisible'),1000 )
    
}

function dragEnd() {
    console.log(this.className)
    this.className = 'fill'
}

function dropOver(e) {
    e.preventDefault()
}

function dropEnter(e) {
    e.preventDefault()
    this.className += ' hovered'
}

function dropLeave() {
    this.className = 'empty'
}

function dropDown() {
    this.className = 'fill'
    // this.append(fill)
}




let submitBtn = document.getElementById('submit')
let viewSection = document.getElementById('list-view')
let resetBtn = document.getElementById('reset-btn')


submitBtn.addEventListener('click', function(){
    // Value In
    let listValue = document.getElementById('list-value').value

    let listRow = document.createElement('tr')
    let listText = document.createElement('p')
    let listContent = document.createElement('td')
    let listButton = document.createElement('td')

    let closeBtn = document.createElement('button')
    let doneBtn = document.createElement('button')


    listText.innerHTML = listValue
    listContent.appendChild(listText)

    listContent.classList.add('list-item')
    listButton.classList.add('list-item')
    
    

    closeBtn.classList.add('list-btn')
    doneBtn.classList.add('list-btn')

    closeBtn.innerHTML = '✖'
    doneBtn.innerHTML = '✓'

    listButton.appendChild(closeBtn)
    listButton.appendChild(doneBtn)

    listRow.appendChild(listContent)
    listRow.appendChild(listButton)
    viewSection.appendChild(listRow)

    doneBtn.addEventListener('click', function(){
    
        listText.classList.add('done')
        listText.style.color = 'rgb(81, 81, 81)'
        
    })

    closeBtn.addEventListener('click', function(){

        listRow.remove()

    })

    resetBtn.addEventListener('click', function(){

        listRow.remove()
    })

})






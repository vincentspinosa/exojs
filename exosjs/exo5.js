var players = [
    {
        name: 'Zinedine Zidane',
        img: 'IMGZidane'
    }
]

function createDomElement(type, classes, id, attributes){
    var domElement = document.createElement(type)
    if(classes) {
        classes.forEach(domElementClass => {
            domElement.classList.add(domElementClass)
        });
    }
    domElement.id = id
    if(attributes !== null) {
        for (const [key, value] of Object.entries(attributes)) {
            domElement.setAttribute(key, value)
    }
    return domElement
    }
}
function createPlayerImg(link){
    let img = document.createElement('img')
    img.src = link
    return img
}
function createPlayerName(text) {
    let p = document.createElement('p')
    p.innerText = text
    return p
}
function addChildrensToElement(element, childrens)  {
    childrens.forEach(child => {
        element.appendChild(child)
    })
}
function addPlayerCard(player, ulPlayerList){
    var liPlayerCard = document.createElement('li')

    var divPlayerCard = createDomElement(
        'div',
        [
            "uk-card",
            "uk-card-default",
            "uk-card-body",
            "uk-text-center",
            "uk-sortable-handle",
        ],
        '',
        {}
    )
    var imgPlayerCard = createPlayerImg(player.img)
    var namePlayerCard = createPlayerName(player.name)
    addChildrensToElement(
        divPlayerCard,
        [
            imgPlayerCard,
            namePlayerCard,
        ]
    )
    addChildrensToElement(liPlayerCard, [divPlayerCard])
    addChildrensToElement(ulPlayerList, [liPlayerCard])
}
function build(){

    var ulPlayerList = createDomElement(
        'ul',
        ["uk-grid-small", "uk-child-width-1-2", "uk-child-width-1-4@s"],
        'ulPlayer',
        {
            'uk-sortable': 'handle: .uk-sortable-handle',
            'uk-grid' : ''
        }
    )
    players.forEach(player => {
        addPlayerCard(player, ulPlayerList)
    })
    document.body.appendChild(ulPlayerList)
}
build()
function addPlayer() {
    var getName = document.getElementById('inputName').value
    var getImg = document.getElementById('inputImg').value

    var obj = {
        name: getName,
        img: getImg
    }
    players.push(obj)
    console.log(obj)
    var objFromList = drivers.slice(-1)[0]
    var ul = document.getElementById('ulPlayer')
    console.log(objFromList)
    addPlayerCard(objFromList, ul)
}
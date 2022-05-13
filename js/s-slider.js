const names = ['AMR SROUR','SARAH DOE','JOHAN DOE']
const photos = ['files/our_clints/amr_srour.png', 'files/our_clints/sarah_doe.png', 'files/our_clints/johan_doe.png']
const comments = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed magna vel' +
' velit dignissim luctus eu in urna. Dapibus egestas turpis.',
    'At vero eos et accusamus et iusto odio ' +
'dignissimos ducimus qui blanditiis praesentium. ' +
' Et harum quidem rerum facilis est et expedita distinctio.',
    'On the other hand, we denounce with righteous' +
' indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.']

function createSlider(num, parent_id, text, img, comment)
{
    const parent = document.getElementById(parent_id)

    const comm = document.createElement('p')
    comm.id = 'comm-p'
    comm.textContent = comment
    comm.className = 's-description'

    const clientDiv = document.createElement('div')
    clientDiv.className = "s-client-container"
    clientDiv.id = "client-div"

    const imgTag = document.createElement("img")
    imgTag.className = "s-client-photo"
    imgTag.src = img
    imgTag.alt = "Client's photo"

    const pTag = document.createElement("p")
    pTag.textContent = text
    pTag.className = "s-client-name"

    clientDiv.appendChild(imgTag)
    clientDiv.appendChild(pTag)

    const scrollerDiv = document.createElement("div")
    scrollerDiv.className = "s-clients-scroller"

    for (let i = 0; i < 3; i++)
    {
        let selectorDiv = document.createElement('div')
        selectorDiv.className = "s-scroll-box"
        if (num === i)
        {
            selectorDiv.style="background-color: #ff0036"
        }
        
        selectorDiv.onclick = function () {
            localStorage.setItem('number', JSON.stringify(i))
            removeSlider('clients-words-div')
            createSlider(i, 'clients-words-div', names[i], photos[i], comments[i])
        }
        scrollerDiv.appendChild(selectorDiv)
    }
    clientDiv.appendChild(scrollerDiv)

    parent.appendChild(comm)
    parent.appendChild(clientDiv)
}

function removeSlider(parent_id)
{
    const parent = document.getElementById(parent_id)

    const comm = document.getElementById('comm-p')
    const clientDiv = document.getElementById('client-div')

    parent.removeChild(comm)
    parent.removeChild(clientDiv)
}

function setSlider()
{
    let num = JSON.parse(localStorage.getItem('number'))
    num = (num + 1) % 3
    try {
        removeSlider('clients-words-div')
    } catch {
        console.log('error')
    }

    createSlider(num, 'clients-words-div', names[num], photos[num], comments[num])
    localStorage.setItem('number', JSON.stringify(num))
}

if (localStorage.getItem('number') == null){
    localStorage.setItem('number', '0');
}

const num = JSON.parse(localStorage.getItem('number'))
createSlider(num, 'clients-words-div', names[num], photos[num], comments[num])

setInterval(function () {setSlider()}, 7000)
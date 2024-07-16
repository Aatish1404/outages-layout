// let Animal = {
//     'legs': 4,
//     'head': 1,
//     'district': ['port-louis', 'moka'],
//     'something': 'string',
//     'pi' : 1.34,
//     'dog':  {
//         'legs': 4,
//         'head': 1,
//     }
// }

// console.log(Animal['head'])
// console.log(Animal.district[1])
// console.log(Animal.pi)
// console.log(Animal.legs + Animal.head)


// let district = ['port-louis', 'pamplemousses', 'moka', 'savanne']

// for (let x = 0; x < district.length ; x++) {
//     console.log(district[x] + ' is a district in mauritius')
// }


// function renderToPage(text){
//     let target = document.getElementById('display');
//     target.innerHTML = text
// }

// let district = ['port-louis', 'pamplemousses', 'moka', 'savanne']

// for (let x = 0; x < district.length ; x++) {
//     renderToPage(district[x])
// }

function isItDark(from,to){
    let now = new Date()
    let f = new Date(from)
    let t = new Date(to)


    console.log(f)
    console.log(t)
    console.log(now)

    return false
}


function isTherePower(from,to){
    let now = new Date()
    let f = new Date(from)
    let t = new Date(to)


    console.log(f)
    console.log(t)
    console.log(now)

    if(now > to) return true
    if (now < from) return true
    return false

   
}


function renderToPage(locality , streets , from , to,) {
    let formattedFrom = (new Date(from)).toLocaleTimeString()
    let formattedTo = (new Date(to)).toLocaleTimeString()

    let isDark = isItDark(from,to)

    let isNotDark = isTherePower(from,to)

    

    let target = document.getElementById('display');
    target.innerHTML += `
        <div class="card" style="--status-color: rgb(255, 0, 0);">
            <div class="description">
                <div class="time">
                    3 HOURS AGO <span>FROM ${from} TO ${to}</span>
                </div>
                <div class="locality">
                    ${locality}
                </div>
                <div class="street">
                   ${streets}
                </div>
            </div>
            <div class="timer">
                <div class="time-label">
                    Power will resume in
                </div>
                <div class="timer-countdown">
                    2h 26m 47s
                </div>
            </div>
            <div class="illustration">
                <div class="status"></div>
            </div>
        </div>
    `
}

function fetchData() {
    let ENDPOINT = 'https://raw.githubusercontent.com/MrSunshyne/mauritius-dataset-electricity/main/data/power-outages.latest.json'

    fetch(ENDPOINT)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.today)

            for (let x = 0; x < data.today.length ; x++) {
                     renderToPage(data.today[x].locality,data.today[x].streets,data.from[x].locality,data.to[x].locality,)
                 } 
        })
        
}

fetchData()


function init() {
    fetchData()
    input()
    buttons()
}

let key = "44413621-00c2e377cdf1fd66ce30d4f77"
let variable = "" //"yellow+flower"
let url = `https://pixabay.com/api/?key=${key}&q=${variable}&image_type=photo`
//const arr is database of buttons.

const fetchData = () => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data.hits);
            func(data.hits) //sends an array
        });
}

function func(array) { //always gets an array
    const divRow=document.querySelector("#row")
    divRow.innerHTML=""
    for(let i=0;i<3;i++){ //change 3 to array.length for every image available 
     const div = new Div(array[i].tags,array[i].downloads,array[i].views,array[i].webformatURL)
    div.render(divRow);
    }
}

function input() {
    const input = document.querySelector("#input")
    const btn = document.querySelector("#btn")
    btn.addEventListener("click", () => {
        variable = input.value
        url = `https://pixabay.com/api/?key=${key}&q=${variable}&image_type=photo`
        console.log("variable:" + variable) //just to check for myself
        console.log("url:" + url) //just to check
        fetchData() //due to new url, so new fetchdata
    })
    input.addEventListener("change",()=>{
        variable = input.value
        url = `https://pixabay.com/api/?key=${key}&q=${variable}&image_type=photo`
        console.log("variable:" + variable) //just to check for myself
        console.log("url:" + url) //just to check
        fetchData() //due to new url, so new fetchdata
    })
}



function buttons() {
    const divMain = document.querySelector("#divButtons")
    for (let i = 0; i < arr.length; i++) {
        const button = document.createElement("button")
        button.className = "border border-black p-2 rounded mt-3 mr-1"
        button.innerHTML = arr[i]
        divMain.append(button)
        button.addEventListener("click", () => {
            variable=arr[i]
            url = `https://pixabay.com/api/?key=${key}&q=${variable}&image_type=photo`
            fetchData()
            //func(arr[i]) //no need becuase fetchdata() already has it
        })
    }
}




init()
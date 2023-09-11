let currentYear = new Date().getFullYear()

let err = new Audio("./err.mp3")
let correc = new Audio("./correc.mp3")

const ResolveAge =() => {
    let year = document.getElementById("year").value
    let wrong = document.getElementById("wrong")
    let result = document.getElementById("result")

    year = parseInt(year)

    if(Number.isNaN(year)){
        wrong.style.display = 'block'
        wrong.style.color = 'red'
        result.style.display = 'none'
        err.play()
    }else{
        let res = currentYear-year
        result.style.display = 'block'
        wrong.style.display = 'none'
        result.innerHTML = "Your age:" +res
        result.style.color = 'yellow'
        correc.play()
    }
}
const nombre = document.getElementById("name")
const number = document.getElementById("telefono")
const password = document.getElementById("name")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    if (nombre.value.length <6){
        warnings += `El nombre no es válido <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }
})








// const slideImg = () => {
//     for (let i = 0; i < slides.length; i++) {
//         if (counter >= slides.length) {
//             slides.forEach(slide => {
//                 slide.style.transform = `translateX(-${counter * 0}%)`
//             });
//         } else {
//             slides.forEach(slide => {
//                 slide.style.transform = `translateX(-${counter * 100}%)`
//             });
//         }
//     }
// }


// setInterval(() => {
    // if (counter < 2) {
    //     console.log(counter++)
    //     slides.forEach((slide, index) => {
    //         slide.style.left = `${index * 100}%`
    //         slide.style.transform = `translateX(-${counter * 100}%)`
    //     });
    // } 
    
    // else {
    //     console.log(counter--)
    //     slides.forEach((slide, index) => {
    //         slide.style.left = `${index * 100}%`
    //         slide.style.transform = `translateX(-${counter * 100}%)`
    //     }); 
    // }
// }, 2000);


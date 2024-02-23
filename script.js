const btnScrollToTop = document.querySelector("#btnScrollToTop");

btnScrollToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });

});

// document.addEventListener('DOMContentLoaded', () => {
//     document
//         .getElementById('make')
//         .addEventListener('input', handleSelect);
// });

// function handleSelect(ev) {
//     document.getElementById("make");
//     console.log(select.value);
//     let choices = [];
//     for (let )
// }

// function 
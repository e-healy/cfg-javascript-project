const btnScrollToTop = document.querySelector("#btnScrollToTop");

btnScrollToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });

});

// Greeting when opening page
// let myname = prompt("Welcome to Auto Whiz! What's your name?");
// if (myname != null){
//     {alert("Hello " + myname + "! 😊 Use our form below to find your ideal car")};
// } else {
//     {alert("Hello my friend! 😊 Use our form below to find your ideal car")};
// };

// Nav Bar with Wishlist

//Open and close shopping aside
let body = document.querySelector('body');
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');

openShopping.addEventListener('click', () => {
    body.classList.add('active');
});
closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
});

// Buy Car
let buyCar = document.querySelector('.total');

buyCar.addEventListener('click', () => {
    alert("Thanks for shopping with us! We hope you enjoy your new car!");
})


// wishlist button setup
let wishList = [];

function setup() { 
    const products = document.querySelectorAll(".card-btn")
    for(let i=0; i < products.length; i++) {
        products[i].onclick = function(e) {
            addItem(e);
        }
    }
}

function addItem(e) {
    const productId = e.target.getAttribute("id");

    if(!wishList.find(item => item === productId)) {
        const productDiv = document.getElementById("product" + productId);

        const wishDiv = document.createElement("div");
        wishDiv.setAttribute("id", "wish" + productId);
        wishDiv.setAttribute("class", "product");
        wishDiv.innerHTML = productDiv.innerHTML;

        const removeBtn = document.createElement("input");
        removeBtn.setAttribute("type", "button");
        removeBtn.setAttribute("value", "remove")
        removeBtn.onclick = function() {removeItem(productId)};
        wishDiv.appendChild(removeBtn);

        let aside = document.getElementById('wishlist');
        aside.appendChild(wishDiv);

        wishList.push(productId);
        console.log(wishList);
    };
    alert("Your item has been added to your wishlist");
}

function removeItem(productId) {
    const product = document.getElementById("wish" + productId);
    product.remove();
    wishList = wishList.filter(item => item !== productId);
    console.log(wishList);
}

window.addEventListener("load", setup);


// Alters model options by what car make you pick
function populate(s1, s2){
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);
    s2.innerHTML = "";

    if(s1.value == "Audi") {
        var optionArray = ["Any|Any", "A3|A3", "E-tron|E-tron", "Q5|Q5", "RS7|RS7", "TT|TT"];
    } else if(s1.value == "BMW") {
        var optionArray = ["Any|Any", "3 Series|3 Series", "Alpina B8|Alpina B8", "i7|i7", "X5|X5", "M6|M6", "Z3|Z3"];
    } else if(s1.value == "Chrysler") {
        var optionArray = ["Any|Any", "300C|300C", "Crossfire|Crossfire", "Delta|Delta", "Grand Voyager|Grand Voyager", "PT Cruiser|PT Cruiser", "Ypsilon|Ypsilon"];
    } else if(s1.value == "Ford") {
        var optionArray = ["Any|Any", "B-Max|B-Max", "C-Max|C-Max", "Escape|Escape", "Fiesta|Fiesta", "Focus|Focus", "Mustang Mach-E|Mustang Mach-E"];
    } else if(s1.value == "Honda") {
        var optionArray = ["Any|Any", "Accord|Accord", "Civic|Civic", "CR-X|CR-X", "HR-V|HR-V", "Jazz|Jazz", "ZR-V|ZR-V"];
    } else if(s1.value == "Hyundai") {
        var optionArray = ["Any|Any", "Bayon|Bayon", "i20|i20", "i30|i30", "IONIQ|IONIQ", "Kona|Kona", "TUSCON|TUSCON"];
    } else if(s1.value == "Jaguar") {
        var optionArray = ["Any|Any", "E-PACE|E-PACE", "F-PACE|F-PACE", "XE|XE", "XF|XF", "XKR|XKR", "X-Type|X-Type"];
    } else if(s1.value == "Kia") {
        var optionArray = ["Any|Any", "Ceed|Ceed", "Picanto|Picanto", "Sportage|Sportage", "Stonic|Stonic", "Venga|Venga", "XCeed|XCeed"];
    } else if(s1.value == "Lexus") {
        var optionArray = ["Any|Any", "CT|CT", "ES|ES", "IS|IS", "NX|NX", "RX|RX", "RXL|RXL"];
    } else if(s1.value == "Mercedes") {
        var optionArray = ["Any|Any", "A Class|A Class", "C Class|C Class", "CLA Class|CLA Class", "E Class|E Class", "GLA Class|GLA Class", "GLE|GLE"];
    } else if(s1.value == "Nissan") {
        var optionArray = ["Any|Any", "ARIYA|ARIYA", "Juke|Juke", "Micra|Micra", "Pulsar|Pulsar", "Qashqai|Qashqai", "X-Trail|X-Trail"];
    } else if(s1.value == "Seat") {
        var optionArray = ["Any|Any", "Alhambra|Alhambra", "Arona|Arona", "Ateca|Ateca", "Ibiza|Ibiza", "Leon|Leon", "Tarraco|Tarraco"];
    } else if(s1.value == "Toyota") {
        var optionArray = ["Any|Any", "Auris|Auris", "AYGO|AYGO", "Corolla|Corolla", "Estima|Estima", "Prius|Prius", "Land Cruiser|Land Cruiser"];
    } else if(s1.value == "Vauxhall") {
        var optionArray = ["Any|Any", "Astra|Astra", "Grandland X|Grandland X", "Corsa|Corsa", "Mokka|Mokka", "Vivaro-e Life|Vivaro-e Life", "Crossland|Crossland"];
    }
    for (var option in optionArray){
        var pair = optionArray[option].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        s2.options.add(newOption);
    }
};

// Event listener for form reset
document.getElementById('Reset').addEventListener('click', handleReset);
document.getElementById('calculate');

// Event listeners for dropdown selections
document.getElementById('s1').addEventListener('input', handleSelect);
document.getElementById('s2').addEventListener('input', handleSelect);
document.getElementById('s3').addEventListener('input', handleSelect);

// Form Reset Functionality
function handleReset() {
    document.getElementById("s1").value = 0;
    document.getElementById("s2").value = 0;
    document.getElementById("s3").value = 0;
    calculate.textContent = 'Finding Cars...';
    let products = document.querySelectorAll('.product');
    products.forEach(product => {
        product.style.display = 'grid';
    })
    
}


function handleSelect(e) {
    let select = e.target;
    console.log(select.value); // Log the selected value

    // Determine the dropdown based on the ID of the select element
    switch (select.id) {
        case 's1':
            // Handle make selection
            break;
        case 's2':
            // Handle model selection
            break;
        case 's3':
            // Handle price selection
            break;
            default:
            break;
    }
}

// Determine the enableSingleBrand function outside of handleSubmit
function enableSingleBrand(answer) {
    console.log(answer.value);
    const makeValue = answer.value;

    // Hide all product elements
    products = document.querySelectorAll('.product');
    products.forEach(product => {
        product.style.display = 'none';
    });

    // Show products for the selected make
    const selectedMakeProducts = document.querySelectorAll(`.product[data-make="${makeValue}"]`);
    selectedMakeProducts.forEach(product => {
        product.style.display = 'block';
    });
}

// Determine the enableSingleModel function outside of handleSubmit
function enableSingleModel(answer2) {
    console.log(answer2.value);
    const modelValue = answer2.value;

    // Hide all product elements
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        product.style.display = 'none';
    });

    // Show products for the selected model
    const selectedModelProducts = document.querySelectorAll(`.product[data-model-type="${modelValue}"]`);
    selectedModelProducts.forEach(product => {
        product.style.display = 'block';
    });
}

// Determine the enableSinglePrice function outside of handleSubmit
// function enableSinglePrice(answer3) {
//     console.log(answer3.value);
//     const priceValue = answer3.value;

    // Hide all product elements
    // const products = document.querySelectorAll('.product');
    // products.forEach(product => {
    //     product.style.display = 'none';
    // });

    // Show products for the selected price
//     const selectedPriceProducts = document.querySelectorAll(`.product[data-price-type="${priceValue}"]`);
//     selectedPriceProducts.forEach(product => {
//         product.style.display = 'block';
//     });
// }


function handleSubmit() {
    const makeSelect = document.getElementById('s1');
    const selectedMake = makeSelect.value;
    const modelSelect = document.getElementById('s2');
    const selectedModel = modelSelect.value;
    // const priceSelect = document.getElementById('s3');
    // const selectedPrice = priceSelect.value;
    calculate.textContent = 'We found these cars for you! ✨'

    // Call the enableSingleBrand function with the selected make
    enableSingleBrand({ value: selectedMake});
    enableSingleModel({ value: selectedModel});
    // enableSinglePrice({ value: selectedPrice});
}
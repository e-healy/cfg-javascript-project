const btnScrollToTop = document.querySelector("#btnScrollToTop");

btnScrollToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });

});
<<<<<<< HEAD

function populate(s1, s2){
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);
    s2.innerHTML = "";
    if(s1.value == "Audi") {
        var optionArray = ["Any|Any", "A3|A3", "E-tron|E-tron", "Q5|Q5", "RS7|RS7", "SQ2|SQ2", "TT|TT"];
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
        var optionArray = ["Any|Any", "E-PACE|E-PACE", "F-PACE0|F-PACE", "XE|XE", "XF|XF", "XKR|XKR", "X-Type|X-Type"];
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
        var optionArray = ["Any|Any", "Auris|Auris", "AYGO|AYGO", "Corolla|Corolla", "Estima|Estima", "PROACE Verso|PROACE Verso", "Yaris Cross|Yaris Cross"];
    } else if(s1.value == "Vauxhall") {
        var optionArray = ["Any|Any", "Astra|Astra", "Crossland X|Crossland X", "Grandland X|Grandland X", "Mokka|Mokka", "Mokka X|Mokka X", "Zafira Tourer|Zafira Tourer"];
    }
    for(var option in optionArray){
        var pair = optionArray[option].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        s2.options.add(newOption);
    }
}

document.addEventListener("DOMContentLoaded", () => 
{
   document.getElementById('Reset').addEventListener('click', function()
   { const Price = 
          document.getElementById('s3');
          Price.value="0"
 });
});
document.addEventListener("DOMContentLoaded", () => 
{
   document.getElementById('Reset').addEventListener('click', function()
   { const model = 
          document.getElementById('s2');
          model.value=""
 });
});
document.addEventListener("DOMContentLoaded", () => 
{
   document.getElementById('Reset').addEventListener('click', function()
   { const make = 
          document.getElementById('s1');
          make.value="0"
 });
});
=======
>>>>>>> a5e3aae1f83f0a3129deb600310b47826e90ff5d

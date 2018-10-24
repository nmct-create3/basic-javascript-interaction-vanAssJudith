document.addEventListener('DOMContentLoaded', function(){
    // #1 Ophalen van DOM element
    console.log("Script Loaded!");
    
    handleFloatingLabel();
    handlePasswordSwitcher();
    handleQualityRange();
    handleDropdownButton();

});

function handleFloatingLabel(){
    
    const ClassName = 'is-floating';

    // #1 OPHALEN ELEMENTEN
                                                // kan een andere class zijn
    let floatingInput = document.querySelector('.js-name-input');
    let floatingLabel = document.querySelector('.js-label');

    // #2 Event listener toevoegen als focus lost is op input
    floatingInput.addEventListener("blur", function (e){
        console.log(e);
    // #3 Na het verliezen van de focus, checken of de value van de input iets bevat
    var element = e.target;
    console.log(element);
    if (element.value != "") {
        // #4 Als de input niet leeg is, dan laten we de klasse staan
        element.classList.add(ClassName);
    }
    else {
        // #4 Als de input leeg is; dan verwijderen we de klasse
        element.classList.remove(ClassName);
    }
    })
}

function handlePasswordSwitcher(){
    // GEEF EEN CLASS EEN PUNT !!!!!
    let svg = document.querySelector(".js-password-visibility");

    svg.addEventListener("click", function(e){
        //var stateSVG = svg.target;
        //console.log(stateSVG);

        var x = document.getElementById("password");
        if (x.type === "password") {
            x.type = "text";
        }
        else {
            x.type = "password";
        }
    })
}

function handleQualityRange(){
   
    var input = document.querySelector(".js-quality-input");

    input.addEventListener("input", function(e) {
        
        var holder = document.querySelector(".js-range-holder");
        var value = document.querySelector(".js-quality-input").value ;
    
        // console.log("input " + input);
        // console.log("holder " + holder);
        console.log("value " + value);

        var newValue = document.querySelector(".js-quality-input").textContent = value;
        var test = document.createElement("span");
        holder.setAttribute("data-value", value);
        //console.log("newValue " + newValue);

        holder.setAttribute("style", "transform: translateX(" + value + "%)");
        //holder.style.transform = translateX(value +"px");
    })
}

// function handleDropdownButton(){
//     let dropdown = document.querySelector(".js-dropdown");
//     let clicked = 1;
//     dropdown.addEventListener("click", function(e){
//         e.preventDefault();
                    
//         let content = document.querySelector(".js-dropdownContent");

//         if (clicked == 1) {
//             console.log("display");

//             content.setAttribute("style", "display:block");
//             clicked++;
//         } else {
//             content.setAttribute("style", "display: none");
//             clicked--;
//         }

//     })


// }

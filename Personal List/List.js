/**
 * List Functionality for Personal Assets
 * Organize by date added, investment types
 * @author Greg Vincent
 * 1/7/22
 */

/**
 * SELECTORS
 */

//Object refers to input tag/text box
const listInput = document.querySelector(".list-input");

//Object refers to button tag
const listBtn = document.querySelector(".list-btn");

//Object refers to ordered list tag
const personalList = document.querySelector(".p-List");

//object refers to select tag for all the button options
const btnOptions = document.querySelector(".btn-options");



/**
 * EVENT LISTENERS
*/

//Filter drop down list
btnOptions.addEventListener("click", filterList);
//Add asset when the plus button is listed
listBtn.addEventListener("click", addAsset);
//filter actual list of assets
personalList.addEventListener("click", deleteCheck);

// document.addEventListener('DOMContentLoaded', getAssets);



/**
 * FUNCTIONS
*/

//Filters drop down list
function filterList(listOption){
    //variable equal to all list choices
    const option = btnOptions.childNodes;
    option.forEach(function(choice){
        //line 40 refers to the different list options
        switch(listOption.target.value){
            case "all":
                choice.style.display = "flex";
                break;
            case "forex":
                if(choice.classlist.contains("forex")){
                    choice.style.display = "flex";
                }
                else{
                    choice.style.display = "none";
                }
                break;
            case "stocks":
                if(choice.classlist.contains("stocks")){
                    choice.style.display = "flex";
                }
                else{
                    choice.style.display = "none";
                }
                break;
            case "options":
                if(choice.classlist.contains("options")){
                    choice.style.display = "flex";
                }
                else{
                    choice.style.display = "none";
                }
                break;
            case "cryptos":
                if(choice.classlist.contains("cryptos")){
                    choice.style.display = "flex";
                }
                else{
                    choice.style.display = "none";
                }
                break;
            case "deleted":
                if(choice.classlist.contains("deleted")){
                    choice.style.display = "flex";
                }
                else{
                    choice.style.display = "none";
                }
                break;
            default:
                return;
        }
    });
}
/**
 * adds an asset into the list on click
 * @param {user wants to add a list element} addEvent
 * Abstract parameter that fits in with any circumstance
 */
function addAsset(addEvent){
    //stop form sumbission and page reload
    addEvent.preventDefault();
    //asset DIV
    const assetDiv = document.createElement('div');
    assetDiv.classList.add('asset');
    //create the actual list
    const newAsset = document.createElement('li');
    newAsset.innerText = listInput.value;
    newAsset.classList.add('asset-item');
    //whatever is taken in as userinput is put into the assetDivision
    assetDiv.appendChild(newAsset);
    //Save function for new assets in the personal list
    //assetSave(listInput.value);

   //buttons made here show up on the right of each asset
    const stockBtn = document.createElement('button');
    const forexBtn = document.createElement('button');
    const optionsBtn = document.createElement('button');
    const cryptoBtn = document.createElement('button');
    const deletedBtn = document.createElement('button');

    //setting up button icons
    stockBtn.innerHTML = '<i class="fa-solid fa-dollar-sign"></i>';  
    forexBtn.innerHTML = '<i class="fas fa-euro-sign"></i>'; 
    optionsBtn.innerHTML = '<i class="fa-solid fa-bank"></i>'; 
    cryptoBtn.innerHTML = '<i class="fa-brands fa-bitcoin"></i>'; 
    deletedBtn.innerHTML = '<i class="fas fa-trash"></i>';
    
    stockBtn.setAttribute('id', '1');
    forexBtn.setAttribute('id', '2');
    optionsBtn.setAttribute('id', '3');
    cryptoBtn.setAttribute('id', '4');
    deletedBtn.setAttribute('id', '5');
    /**
     * Probably can be shortened using a forEach loop.
    */
    stockBtn.classList.add("stocks");
    forexBtn.classList.add("forex");
    optionsBtn.classList.add("options");
    cryptoBtn.classList.add("crypto");
    deletedBtn.classList.add("deleted");

    assetDiv.appendChild(stockBtn);
    assetDiv.appendChild(forexBtn);  
    assetDiv.appendChild(optionsBtn);
    assetDiv.appendChild(cryptoBtn);
    assetDiv.appendChild(deletedBtn);
    //Add the divider to the list element
    personalList.appendChild(assetDiv);

    //Making the text box empty after each use
    listInput.value = " ";
}

//check if an asset already exists. Helper function
function assetChecker(){
    if(localStorage.getItem('assets') === null){
        assets = []; //create an empty array if we don't have one
        return true;
    } else{
        //JSON.parse = for a JSON object, turn it into a readable form
        //if the query isn't null, return whatever is there
        assets = JSON.parse(localStorage.getItem('assets'));
        return false;
    }
}



// function assetSave(asset){
//     assetChecker();
//     assets.push(asset)
//     localStorage.setItem('assets', JSON.stringify(assets))
// }

function removeAsset(asset){
    assetChecker();
    //whatever is at the first index of the list store it
    const assetIndex = asset.children[0].innerText;
    /**
     * so splice(3, 1, "May") --> 3rd index, replace one element, change to May
     */
    assets.splice(assets.indexof(assetIndex), 1);
    localStorage.setItem("assets", JSON.stringify(assets));
}

function getAssets(){
    if(localStorage.getItem('assets') === null){
        assets = []; //create an empty array if we don't have one
    } else{
        //JSON.parse = for a JSON object, turn it into a readable form
        //if the query isn't null, return whatever is there
        assets = JSON.parse(localStorage.getItem('assets'));
    }
    assets.forEach(function(asset){
        const assetDiv = document.createElement('div');
        assetDiv.classList.add('asset');
        //creating a new html asset in javascript
        const newAsset = document.createElement('li');
        newAsset.innerText = asset;
        newAsset.classList.add('asset-item');
        //whatever is taken in as userinput is put into the assetDivision
        assetDiv.appendChild(newAsset);
        //Save function for new assets in the personal list
        //assetSave(listInput.value);
    
       //buttons made here show up on the right of each asset
        const stockBtn = document.createElement('button');
        const forexBtn = document.createElement('button');
        const optionsBtn = document.createElement('button');
        const cryptoBtn = document.createElement('button');
        const deletedBtn = document.createElement('button');
    
        //setting up button icons
        stockBtn.innerHTML = '<i class="fa-solid fa-dollar-sign"></i>'; 
        forexBtn.innerHTML = '<i class="fas fa-euro-sign"></i>';
        optionsBtn.innerHTML = '<i class="fa-solid fa-bank"></i>'; 
        cryptoBtn.innerHTML = '<i class="fa-brands fa-bitcoin"></i>'; 
        deletedBtn.innerHTML = '<i class="fas fa-trash"></i>'; 

        stockBtn.setAttribute('id', '1');
        forexBtn.setAttribute('id', '2');
        optionsBtn.setAttribute('id', '3');
        cryptoBtn.setAttribute('id', '4');
        deletedBtn.setAttribute('id', '5');

        stockBtn.classList.add('stocks');
        forexBtn.classList.add('forex');
        optionsBtn.classList.add('options');
        cryptoBtn.classList.add('crypto');
        deletedBtn.classList.add('deleted');
    
        assetDiv.appendChild(stockBtn);
        assetDiv.appendChild(forexBtn);
        assetDiv.appendChild(optionsBtn);
        assetDiv.appendChild(cryptoBtn);
        assetDiv.appendChild(deletedBtn);
        //Add the divider to the ordered list element
        personalList.appendChild(assetDiv);
    });
}


/**
 * Filters individual list assets
 * Clicking the trash can will delete the asset
 * Clicking any other asset will sort it into the correct list
 * @param {item in the asset list} e 
 */
function deleteCheck(e){
    let listPlace;
    const item = e.target;
    let stockID = document.getElementById('1');
    let forexID = document.getElementById('2');
    let optionsID = document.getElementById('3');
    let cryptoID = document.getElementById('4');
    if(getLatest(item)){
          //Parent element is the actual text
          switch(item.classList[0]){
            case 'deleted':
                const preItem = item.parentElement;
                preItem.remove();
                break;
            case 'stocks':
                forexID.remove();
                optionsID.remove();
                cryptoID.remove();
                break;
            case 'forex':
                stockID.remove();
                optionsID.remove();
                cryptoID.remove();
                break;
            case 'options':  
                cryptoID.remove();
                forexID.remove();
                stockID.remove();
                break;
            case 'crypto':
                stockID.remove();
                forexID.remove();
                optionsID.remove();
                break;
            default:
                return;
        }
    }
}

function getLatest(arg){
    return arg.document.getElementById('11').lastElementChild;
}

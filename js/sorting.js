
// swap function for sorting algorithms which takes input of 2 dom elements with .style.height feature
function swap(el1, el2) {
    console.log('IN swap()');

    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
}


// Disables sortin buttion used in conjuction with enable, so that we can disable during sorting and enable after it.
function disableSortingBtn() {
    document.querySelector(".bubbleSort").disabled = true;
    document.querySelector(".insertionSort").disabled = true;
    document.querySelector(".mergeSort").disabled = true;
    document.querySelector(".quickSort").disabled = true;
    document.querySelector(".selectionSort").disabled = true;
}

//Enables sorting buttons used in cojunction with disable.
function enableSortingBtn() {
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector(".insertionSort").disabled = false;
    document.querySelector(".mergeSort").disabled = false;
    document.querySelector(".quickSort").disabled = false;
    document.querySelector(".selectionSort").disabled = false;
}

// Disable size slider used in conjuction with enable , so that we can disable during sorting and enable button after it.
function disableSizeSlider() {
    document.querySelector("#arr_sz").disabled = true;
}


//Enable size slider used in conjuction with disable
function enableSizeSlider() {
    document.querySelector("#arr_sz").disabled = false;
}


//Disable newArray Button 
function disableNewArrayBtn() {
    document.querySelector(".newArray").disabled = true;
}

// Enable newArray Button 
function enableNewArrayBtn() {
    document.querySelector(".newArray").disabled = false;
}


// Used in async function so that we can so animation of sorting, takes input time in ms (1000 = 1s)
function waitforme(millisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, millisec);
    })
}


//Selecting size slider from DOM
let arraySize = document.querySelector('#arr_sz');

//Event Listener to update the bars on the UI 
arraySize.addEventListener('input', function () {
    console.log(arraySize.value, typeof (arraySize.value));
    createNewArray(parseInt(arraySize.value));
});


//Default input for waitforme funtion
let delay = 260;

//selection speed slider from DOM
let delayElement = document.querySelector('#speed_input');

//Event listener to update delay time
delayElement.addEventListener('input', function () {
    console.log(delayElement.value, typeof (delayElement.value));
    delay = 320 - parseInt(delayElement.value);
});


//Generating array to store randomly generated numbers
let array = [];

//call to display bars input size of array
createNewArray();

//To Create new array input size of array
function createNewArray(noOfBars = 60) {
    //calling helper function to delete old bars frm dom
    deleteChild();

    //creating an array of random numbers
    array = [];
    for (let i = 0; i < noOfBars; i++) {
        array.push(Math.floor(Math.random() * 250) + 1);
    }
    console.log(array);

    //select the div #bars element
    const bars = document.querySelector("#bars");

    // Create multiple element div using loop andding class 'bar col '
    for (let i = 0; i < noOfBars; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barsNo${i}`);
        bar.appendChild(bar);
    }
}


//Helper funtion to delete all the previous bars so that new can be added
function deleteChild(){
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}


//Selecting newarray button from DOM and adding eventlistner
const newArray = document.querySelector(".newArray");
newArray.addEventListener("click",function(){
    console.log("From newArray "+ arraySize.value);
    console.log("From newArray "+delay);
    enableSortingBtn();
    enableSizeSlider();
    createNewArray(arraySize.value);
});
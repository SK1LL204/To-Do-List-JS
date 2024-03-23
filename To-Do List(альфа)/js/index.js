document.addEventListener('DOMContentLoaded', function(){
    //const inputToGetNumber = document.querySelector('#inputToGetNumber');
    //const inputGetTask = document.querySelector('#inputGetTask');

    const button = document.getElementById('buttonClick');

    button.addEventListener('click', function(event){
        event.preventDefault();

        const originalTableBlock = document.querySelector('#table-block');
        console.log(originalTableBlock);

        const tableDesk = document.getElementById('tableDeskGetNumber');


        const newTableBlockInput = document.createElement('input');
        newTableBlockInput.classList.add('-input');
        newTableBlockInput.placeholder = ('number');
        console.log(newTableBlockInput);

        tableDesk.appendChild(newTableBlockInput);
    });

    /*inputToGetNumber.addEventListener('keyup', function(event){
        if(event.key === "Enter"){
            workWithInputFirst();
        };
    });
    inputGetTask.addEventListener('keyup', function(event){
        if(event.key === "Enter"){
            workWithInputSecond();
        };
    });*/
});

/*function createTable() {
        event.preventDefault();

        const originalTableBlock = document.querySelector('#table-block');
        const newTableBlock = originalTableBlock.cloneNode(true);

        const tableBody = document.querySelector('#table-body');
        tableBody.appendChild(newTableBlock);
};*/

function workWithInputFirst(){
    const inputToGetNumber = document.querySelector('#inputToGetNumber');

    inputToGetNumber.disabled = true;

    inputToGetNumber.classList.add("input-get-element");
    inputToGetNumber.removeAttribute("placeholder");
};

function workWithInputSecond(){
    const inputGetTask = document.querySelector('#inputGetTask');

    inputGetTask.disabled = true;
    
    inputGetTask.classList.add("input-get-element");
    inputGetTask.removeAttribute("placeholder");
};
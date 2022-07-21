function submitButtonClick(){
    document.getElementById("to-do-list")
    .innerHTML+=`<li >${document.getElementById("inputValue").value}</li>`
    document.getElementById("inputValue").value=""
    }

    document.getElementById("submit-button")
    .addEventListener("click",submitButtonClick)
    function clearList(){
    document.getElementById("to-do-list").textContent=""
    }

    document.getElementById("clear-button")
    .addEventListener("click",clearList)


    
    
     
    
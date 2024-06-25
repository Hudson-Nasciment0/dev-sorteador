const sort = document.querySelector(".button-sortear").addEventListener("click", () =>{
    const min = Math.ceil(parseInt(document.querySelector("#min").value))
    const max = Math.floor(parseInt(document.querySelector("#max").value))
    const result = Math.floor(Math.random() * (max - min + 1)) + min 
   
   
   alert(result)

    

} ) 






const sort = document.querySelector(".button-sortear").addEventListener("click", () =>{
    const min = Math.ceil(parseInt(document.querySelector("#min").value))
    const max = Math.floor(parseInt(document.querySelector("#max").value))
     
   
   
   

   if(min < max){
    const result = Math.floor(Math.random() * (max - min + 1)) + min
    alert(result)
   }

   else{
    alert("Você deve colocar o valor minímo menor que o valor máximo!")
   }

} ) 






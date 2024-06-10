const users = [
    {
        log:'1914andre@gmail.com',
        pass:'A19551947b'
    },
    
    {
        log:'lionelmessi@gmail.com',
        pass:'Barcelona2015'
    },
    
    {
        log:'pedrilamasia2024@gmail.com',
        pass:'Nuevoiniesta8'
    },
    
    {
        log:'xavihernandez2022@gmail.com',
        pass:'laXavineta20222'
    },
    
    {
        log:'AraujoRonald4@gmail.com',
        pass:'guardion2024fcb'
    }
]

const clicar = document.getElementById("btn")
clicar.addEventListener("click",()=>{

    let login = document.getElementById("Login").value
    let password = document.getElementById("pass").value
    let validaLogin = false

    for ( let i in users ){
    
        if(login===users [i].log && password===users [i].pass){
        validaLogin = true
        break
    } 
    }
    if (validaLogin === true){
       
       location.href = "../PaginaDeAcesso/PaginaDeAcesso.html"
    }
    else{
        alert("erro tente novamente")
    } 
})



 
async function user(){
    const response = await fetch('https://api.github.com/users/cadudias')
    return await response.json()
    
}

function getUserProfile(){
    user().then( userData => {
        let  userInfo = `<img src="${userData.avatar_url}" alt="foto"/>
                            <div class="data"> 
                                <h1>${userData.name ?? "Não possui nome cadastrado 😥"}<h1/>
                                <p>${userData.bio ?? "Não possui Bio cadastrada"}<p/>
                        
                            <div/>`
        document.querySelector(".profile-data").innerHTML = userInfo
    })
}


getUserProfile()


const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML =   `<div class="info">
                                            <img src="${user.avatarUrl}" alt="Foto do perfil do usuário"/>
                                            <div class="data">
                                                <h1>${user.name ?? 'Não possui nome cadastrado 😥'} </h1>
                                                <p>${user.bio ?? 'Não possui bio cadastrada 😥'}</p> 
                                                <p>👥 ${user.followers} Seguidores</p>
                                                <p>👣 ${user.following} Seguindo</p>
                                            </div>
                                        </div>`
        let repositoriesItens = ' '
        user.repositories.forEach(repo => repositoriesItens +=                                                                                      ` <li> <a href="${repo.html_url}"target=_blank>${repo.name}
        
                    <div>
                        <p>🍴Forks ${repo.forks}</p>
                        <p>⭐Estrelas ${repo.stargazers_count}</p>
                        <p>👀Visualizações ${repo.watchers}</p>
                        <p>👩‍💻Linguagem ${repo.language}</p>
        
                    </div>
                </a>

            
            </li>
        `
            
        )


        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositories</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>`
        }

        
        let creatEventsItens= ' '

        user.events.forEach(event => creatEventsItens += ` <li> <a href="${event.repo.html_url}"target=_blank>${event.repo.name} - Sem mensagem de commit </a></li>`);

        let pushEventsItens=' '
        user.events.forEach(event => pushEventsItens += ` <li> <a href="${event.repo.html_url}"target=_blank>${event.repo.name} + ${event.payload.commits}</a></li>`);

        if(user.events.length > 0){
            this.userProfile.innerHTML += `<div class="events section">
                                                <h2>Eventos</h2>
                                                <ul>${creatEventsItens}</ul>
                                                <ul>${pushEventsItens}</ul>
                                            </div>`
        }

            

        
            
    

    },
    

    renderNotFound(){
        this.userProfile.innerHTML = "<h3> Usuário não encontrado 😥</h3>"
    }
}

export{screen}


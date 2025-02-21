var container = document.querySelector(".container")

document.querySelector("button").addEventListener("click",function (event) {
    event.preventDefault();

const search = document.querySelector("#search").value.trim();
    document.querySelector("#search").value = '';
    
    fetch(`https://api.github.com/users/${search}`)
    .then(res => res.json())
    .then(json => {
        renderGithub(json)
    })

.catch(err => {
    console.log(err);
})
})

function renderGithub(accountInfo) {
    if (accountInfo.login) {
        container.innerHTML += `<div class="card">
        <div class="card-content">
          <h5 class="card-title">Name: <span id="name">${accountInfo.login}</span></h5>
          <p class="card-text">GitHub URL: <a href="https://github.com/${accountInfo.login}" id="github-url" target="_blank">https://github.com/johndoe</a></p>
          <p class="card-text">ID: <span id="id">${accountInfo.id}</span></p>
          <p class="card-text">Description: <span id="description">${accountInfo.bio}.</span></p>
        </div>
        <div class="card-image">
          <img src="https://avatars.githubusercontent.com/u/${accountInfo.id}?v=4" alt="Profile Image">
        </div>
      </div>`
        console.log(accountInfo);
    }else{
        alert("Account with this username does not exist!")
    }
}
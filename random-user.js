const loadUser = () => {
    fetch('https://randomuser.me/api/?results=15')
        .then(res => res.json())
        .then(data => displayUser(data))
}

const displayUser = data => {
    const users = data.results;
    for (user of users) {
        console.log(user)
    }
}

loadUser()
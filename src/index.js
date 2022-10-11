const getUsersPromise = async () =>{
    fetch('https://localhost:3000/api/users')
        .then(response => response.json())
        .then(json => json.users);
}
const getRestaurantsPromise = async () =>{
    fetch('https://localhost:3000/api/restaurants')
        .then(response => response.json())
        .then(json => json.restaurants);
};

const renderUsers = (users) =>{
    for(let user in users){
        const newElement = document.createElement("p");
        newElement.innerText = user.name;
        userListElement.appendChild(newElement);
    }
};

const renderRestaurants = (restaurants) =>{
    for(let restaurant in restaurants){
        const newElement = document.createElement("p");
        newElement.innerText = restaurant.name;
        restaurantListElement.appendChild(newElement);
    }
};
const users = await getUsersPromise();
const restaurants = await getRestaurantsPromise();
renderUsers(users);
renderRestaurants(restaurants);

// // const getSomething = async () => {
// //     const response =  await fetch (
// //         "http://localhost:3000/api/something"
// //     );
// //     const jason =await response. jason();
// // } 
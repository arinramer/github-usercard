/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/arinramer')
.then( response => {
  console.log(response);
  const avatar = response.data.avatar_url;
  const name = response.data.name;
  const username = response.data.login;
  const bio = response.data.bio;
  const url = response.data.html_url;
  const location = response.data.location;
  const newProfile = createProfile(avatar, name, bio, url, username, location);
  cards.appendChild(newProfile);
})
.catch( err => {
  // deal with the error in here
})

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/
const cards = document.querySelector('.cards')
function createProfile(avatar, name, bio, url, username, location) {
  const card = document.createElement('div');
  card.classList.add('card')
  card.style.flexDirection = 'column';
  //picture
  const profileImg = document.createElement('img');
  profileImg.src = avatar;
  card.appendChild(profileImg);
  //cardinfo
  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  card.appendChild(cardInfo);
  //name
  const newName = document.createElement('h1');
  newName.classList.add('name');
  newName.textContent = name;
  cardInfo.appendChild(newName);
  //username
  const myUserName = document.createElement('p');
  myUserName.classList.add('username')
  myUserName.textContent = username;
  cardInfo.appendChild(myUserName);
  //bio
  const newBio = document.createElement('p');
  newBio.textContent = bio;
  cardInfo.appendChild(newBio);
  //location
  const newLocation = document.createElement('p');
  newLocation.textContent = location;
  cardInfo.appendChild(newLocation);
  //url
  const newUrl = document.createElement('a');
  newUrl.setAttribute('href', url)
  newUrl.textContent = url;
  cardInfo.appendChild(newUrl);
  return card;
}

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell',
];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
const loop = followersArray.map((item) => {
  return item;
})

function combine(url, name) {
  return url + name;
}

loop.forEach((e) => {
  axios.get(combine("https://api.github.com/users/", e))
  .then( response => {
    const data = response.data;
    const newProfile = profileCreator(data);
    cards.appendChild(newProfile);
    function profileCreator(obj) {
      const card = document.createElement('div');
      card.classList.add('card')
      card.style.flexDirection = 'column';
      //picture
      const profileImg = document.createElement('img');
      profileImg.src = obj.avatar_url;
      card.appendChild(profileImg);
      //cardinfo
      const cardInfo = document.createElement('div');
      cardInfo.classList.add('card-info');
      card.appendChild(cardInfo);
      //name
      const newName = document.createElement('h3');
      newName.classList.add('name');
      newName.textContent = obj.name;
      cardInfo.appendChild(newName);
      //username
      const userName = document.createElement('p');
      userName.classList.add('username')
      userName.textContent = obj.login;
      cardInfo.appendChild(userName);
      //location
      const newLocation = document.createElement('p');
      newLocation.textContent = obj.location;
      cardInfo.appendChild(newLocation);
      //profile
      const label = document.createElement('p');
      cardInfo.appendChild(label);
      const profile = document.createElement('a');
      label.textContent = 'Profile: ' + profile;
      profile.setAttribute('href', obj.html_url);
      profile.textContent = obj.html_url;
      cardInfo.appendChild(profile);
      //followers
      const label2 = document.createElement('p');
      cardInfo.appendChild(label2);
      const numOfFollowers = document.createElement('a');
      label2.textContent = 'Followers: ' + obj.followers;
      cardInfo.appendChild(numOfFollowers);
      //followers
      const label3 = document.createElement('p');
      cardInfo.appendChild(label3);
      const numOfFollowing = document.createElement('a');
      label3.textContent = 'Following: ' + obj.following;
      cardInfo.appendChild(numOfFollowing);
      //bio
      const newBio = document.createElement('p');
      newBio.textContent = obj.bio;
      cardInfo.appendChild(newBio);
      return card;
    }
  })
})





/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

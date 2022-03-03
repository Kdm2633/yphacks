//To Do:
//Add function that displays friend list!
//Add function that adds and removes friend from list.
//Add function that matches user to people with similar study topics selected

//user currently logged in
//var loggedInUser = users[1];

var search = document.getElementById("searchInput");
search.addEventListener("keypress", event =>{
  if(event.key === "Enter"){
   userSearch();
  }
});

//Remove this after testing
function testing(){
    console.log("123");
}

  function userSearch(){
    var numUsersFound = 0;
    //Goes through users collection to see if a user has the searched username
  for (var i = 0; i < users.length; i++) {
    if(users[i].username.includes(search.value)){
        addProfile(users[i].username, users[i].pfp);
        numUsersFound++;
     }
  }
  //If no users are found then it will display a no users found message.
  //bug: when just pressing enter it returns it's searching for something, idk why 
  if(numUsersFound==0){
    const profileList = document.querySelector(".profileList");
    const noUserContainer = document.createElement("DIV");
    noUserContainer.setAttribute("class", "noUserFound");
    const noUserImg = document.createElement("IMG");
    noUserImg.setAttribute("src", "assets/mug-hot.png");
    const noUserText = document.createElement("P");
    noUserText.innerText = "No Users Found";

    profileList.appendChild(noUserContainer);
  noUserContainer.appendChild(noUserImg, noUserText);
 } 
}

//Adds profiles found to search output
function addProfile(user, picture){
    const profileList = document.querySelector(".profileList");
    const newUserProfile = document.createElement("DIV");
    newUserProfile.setAttribute("class","userProfile");
    const newUserImg = document.createElement("IMG");
    newUserImg.setAttribute("src", picture);
    const newUserName = document.createElement("p");
    newUserName.id= user;
    profileList.appendChild(newUserProfile);
    newUserProfile.appendChild(newUserImg);
    newUserProfile.appendChild(newUserName);
    document.getElementById(user).innerHTML = user;
}

function clearSearchOutput(){
    console.log("clear started");
    const profileList = document.querySelector(".profileList");
    const  profiles = document.querySelectorAll(".userProfile");
    profileList.remove(profiles);
    console.log("clear ended");
}

function addFriend(){
  
}

function removeFriend(){
  
}

 function loadInfo(){
   console.log("checkpoint");
  for (var i = 0; i < loggedInUser.friends.length; i++) {
    console.log(loggedInUser.friends[i]);    
    //addProfile(users[i].username, users[i].pfp);
  }
 }

//To Do:
//Add function that displays friend list
//Add function that adds and removes friend from list.
//Add function that matches user to people with similar study topics selected
//<div class="userProfile"><img src="assets/user.png" alt="username"></img> <p>name</p></div>;
//Temporary list of users, will replace later
var users = ["bob", "kamya", "sean", "nihal", "sam"];
var kamyaFriends = ["bob", "sam"];

//When a user press enter after entering an input, the website will search for users
var search = document.getElementById("searchInput");
search.addEventListener("keypress", event =>{
  if(event.key === "Enter"){
   userSearch();
  }
  if(event.key==="m"){ //For testing purposes for the clearSearchOutput method
      clearSearchOutput();
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
    if(users[i].includes(search.value)){
        addProfile();
        numUsersFound++;
     }
  }
  //If no users are found then it will display a no users found message.
  //bug: when just pressing enter it returns it's searching for something, idk why 
  if(numUsersFound==0){
    const profileList = document.querySelector(".profileList");
    const noUserImg = document.createElement("IMG");
    noUserImg.setAttribute("src", "assets/mug-hot.png");
    noUserImg.setAttribute("class", "noUserFound");
    const label = document.createElement("H1");
    label.innerText = "No Users Found";

    profileList.appendChild(noUserImg, label);
 } 
}

function addProfile(){
    const profileList = document.querySelector(".profileList");
    const newUserProfile = document.createElement("DIV");
    newUserProfile.setAttribute("class","userProfile");
    const newUserImg = document.createElement("IMG");
    newUserImg.setAttribute("src", "assets/user.png");
    const newUserName = document.createElement("P");
    newUserName.innerText = "name";

    profileList.appendChild(newUserProfile);
    newUserProfile.appendChild(newUserImg, newUserName);
}

function clearSearchOutput(){
    const profileList = document.querySelector(".profileList");
    profileList.removeChild(document.querySelector("userProfile"));   
}



//To Do:
//Add function that adds and removes friend from list.
//Add function that matches user to people with similar study topics selected

//Globals
var search = document.getElementById("searchInput");
const userPFP = document.getElementById("profilePic");
var userID;

//user currently logged in
loadUserInfo("bob");

//Events
search.addEventListener("keypress", event =>{
  if(event.key === "Enter"){
    clearSearchOutput();   
    userSearch();
  }
});

userPFP.addEventListener("mouseenter", event => {
console.log("hovered");
});



//Functions

//Remove this after testing
function testing(){
    console.log("123");
}

  function userSearch(){
    var numUsersFound = 0;
    //Goes through users collection to see if a user has the searched username
  for (var i = 0; i < users.length; i++) {
    if(users[i].username.includes(search.value)){
        addProfile("searchedList", users[i].username, users[i].pfp);
        numUsersFound++;
     }
  }
  //If no users are found then it will display a no users found message.
  //bug: when just pressing enter it returns it's searching for something, idk why 
  if(numUsersFound==0){
    const profileList = document.getElementById("searchedList");
    const noUserContainer = document.createElement("DIV");
    noUserContainer.setAttribute("class", "noUserFound");
    const noUserImg = document.createElement("IMG");
    noUserImg.setAttribute("src", "assets/mug-hot.png");
    const noUserText = document.createElement("H1");
    noUserText.id = "noUserFoundTxt";
    profileList.appendChild(noUserContainer);
    noUserContainer.appendChild(noUserImg);
    noUserContainer.appendChild(noUserText);
    document.getElementById(noUserText.id).innerHTML = "No Users Found";
 } 
}

//Adds profiles found to outputs
function addProfile(target, user, picture){
    const profileList = document.getElementById(target);
    const newUserProfile = document.createElement("DIV");
    newUserProfile.setAttribute("class","userProfile");
    const newUserImg = document.createElement("IMG");
    newUserImg.setAttribute("src", picture);
    newUserImg.setAttribute("class", "userProfileImg");
    const newUserName = document.createElement("p");
    newUserName.id= user + "user";

    //Adding elements to user profile container
    profileList.appendChild(newUserProfile);
    newUserProfile.appendChild(newUserImg);
    newUserProfile.appendChild(newUserName);
    if (target === "searchedList"){
      const addBtn = document.createElement("IMG");
      addBtn.setAttribute("src", "assets/add-icon.png");
      addBtn.setAttribute("class", "addButton");
      var userBtn = user + "AddButton";
      addBtn.id= userBtn;
      newUserProfile.appendChild(addBtn);
      document.getElementById(addBtn.id).setAttribute("onclick", "addFriend("+user+")");
    }
    document.getElementById(newUserName.id).innerHTML = user;
}

//clears search output everytime a user is searched
function clearSearchOutput(){
    const profileList = document.getElementById("searchedList");
    while(profileList.childElementCount>0){
      profileList.lastChild.remove();
    }
}

function addFriend(user){
  console.log("hello " + user);
}

function removeFriend(){
  
}

//Loads the logged in user
 function loadUserInfo(user){
//Finds the user
  for (var i = 0; i < users.length; i++) {
    if(users[i].username === user){
      //This variable allows for the user's id to be called anywhere
      userID = i; 
      //Loads user's friend list
      for (var x = 0; x < users[i].friends.length; x++) {
        addProfile("friendsList", users[users[i].friends[x]].username, users[users[i].friends[x]].pfp);
      }

      // Updates user stat bar
      const numStudyGroups = document.getElementById("studyStats");
      const numFriends = document.getElementById("friendStats");
      userPFP.innerHTML = users[i].pfp
     }
  }

 }

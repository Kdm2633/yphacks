//To Do:
//Add function that displays friend list!
//Add function that adds and removes friend from list.
//Add function that matches user to people with similar study topics selected
//Temporary list of users, will replace later
/*var users = ["bob", "kamya", "sean", "nihal", "sam"];
var kamyaFriends = ["bob", "sam"];
var userPFPs = ["assets/bobPFP.png","assets/kamyaPFP.png","assets/seanPFP.png","assets/nihalPFP.png","assets/samPFP.png"];
*///When a user press enter after entering an input, the website will search for users
var search = document.getElementById("searchInput");
search.addEventListener("keypress", event =>{
  if(event.key === "Enter"){
   userSearch();
  }
  if(event.key===";"){ //For testing purposes for the clearSearchOutput method
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
    if(users[i].username.includes(search.value)){
        //clearSearchOutput();
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
  console.log("add started");
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
   console.log("add ended");
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


// Navbar
const closeBtn = document.getElementsByClassName("close-btn")[0]
const openBtn = document.getElementsByClassName("open-btn")[0]
const sidebar = document.getElementsByClassName("sidebar")[0]
function slowOpen() {
    var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    if(vw > 746) {
        document.querySelector("body").style.marginLeft = "16%"
    } 
    else if (vw <= 746) {
        document.querySelector("body").style.marginLeft = "25%" 
    }
}
function slowClose() {
    document.querySelector("body").style.marginLeft = "0%"
}
function width() {
    var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    if(vw > 746) {
        sidebar.style.width = "17.5%"
    } 
    else if (vw <= 746) {
        sidebar.style.width = "25%"
    }
}
closeBtn.addEventListener("click", ()=> {
    setTimeout(slowClose, 0)
    sidebar.style.width = "0%"
})
openBtn.addEventListener("click", ()=> {
    width()
    setTimeout(slowOpen, 1000)
    
})

//To Do:
//Add function that displays friend list
//Add function that adds and removes friend from list.
//Add function that matches user to people with similar study topics selected
//<div class="userProfile"><img src="assets/user.png" alt="username"></img> <p>name</p></div>;
//Temporary list of users, will replace later
var users = ["bob", "kamya", "sean", "nihal", "sam"];
var kamyaFriends = ["bob", "sam"];

var search = document.getElementById("searchInput");
search.addEventListener("keypress", event =>{
  if(event.key === "Enter"){
    document.querySelector("profileList").append('<div class="userProfile"><img src="assets/user.png" alt="username"></img> <p>name</p></div>');
  }
});

function testing(){
    console.log("123");
}

function userSearch(){
  for (let i = 0; i < users.length; i++) {
    if(users[i].includes(document.getElementById("searchInput"))){
        console.log("working");
        const profileList = document.querySelector(".profileList");
        const newUserProfile = document.createElement("DIV");
        const newUserImg = document.createElement("IMG");
        const newUserName = document.createElement("P");

        profileList.appendChild(newUserProfile);
        newUserProfile.appendChild(newUserImg, newUserName);
     }else{
        console.log("no name found");
        document.getElementsByClassName("profileList").innerHTML += '<img class="noUserFound" alt="no users found" src="assets/mug-hot.png"><h1>No Users Found</h1>';
    }
  };
}

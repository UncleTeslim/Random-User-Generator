var url = "https://randomuser.me/api/";
var btn = document.querySelector("#btn");
var nameDisp = document.querySelector("#fullname");
var avi = document.querySelector("#avatar");
var username = document.querySelector("#username");
var city = document.querySelector("#city");
var mail = document.querySelector("#email");

btn.addEventListener("click", function(){
  fetch(url)
  .then(handleErrors)
  .then(parseJSON)
  .then(updateProfile)
  .catch(displayErrors);
});


function handleErrors(res){
  if(!res.ok){
    throw Error(res.status);
  }
  return res;
}

function parseJSON (res){
  return res.json().then(function(parsedData){
    return parsedData.results[0];
  })
}

function updateProfile (data){
    var fullname = data.name.first + " " + data.name.last;
    nameDisp.innerText = fullname;
    avi.src = data.picture.medium;
    username.innerText = data.login.username;
    city.innerText = data.location.city;
    mail.innerText = data.email;
  }
function displayErrors (err){
    console.log(err);
  }
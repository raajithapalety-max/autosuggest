function randomUser(){
    fetch("https://randomuser.me/api/")
    .then(function(res){
        return res.json();
    }
)
.then(function(data){
    var user=data.results[0];
    var fullName=user.name.title+" "+user.name.first+" "+user.name.last;
    document.getElementById('image').src = user.picture.large;
    document.getElementById('userName').innerText = fullName;
    document.getElementById('userGender').innerText = user.gender;
}
)
.catch(function(err){
    console.log("Error:"+err);
})
}
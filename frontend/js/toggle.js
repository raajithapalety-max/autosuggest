var users = [
    {
        "name": "John",
        "gender": "male",
        "image": "../images/john.png"
    },
    {
        "name": "Jane",
        "gender": "female",
        "image": "../images/jane.png"
    }
];

var curId = 0;

function toggle() {
    
    curId = (curId + 1) % 2; 
    
   
    document.getElementById('image').src = users[curId].image;
    document.getElementById('userName').innerText = users[curId].name;
    document.getElementById('userGender').innerText = users[curId].gender;
}
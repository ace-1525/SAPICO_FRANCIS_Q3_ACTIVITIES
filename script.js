//variables and console log
console.log("System Initialized...");
let agentScore = 95.5;
let agentName = "Bond";
console.log("Profile"+ agentName + "Score" + agentScore);
console.log(typeof agentName );

//change text content
document.getElementById("btn-mission").addEventListener("click", function() {
document.getElementById("status-text").textContent = "Status: Mission Active - Do not disturb.";
});

//change text color
document.getElementById("btn-color").addEventListener("click", function() {
    const profile = document.getElementById("agent-profile");
    profile.style.borderColor = "red";
    profile.style.color = "red";
});

//toggle image source
document.getElementById("btn-disguise").addEventListener("click", function() {
   const img = document.getElementById("agent-avatar");
   img.src = img.src.includes("./images/img1.jpeg") ?
   "./images/img2.jpeg" : "./images/img1.jpeg";
  
});

//Hide element(Display)
document.getElementById("btn-stealth").addEventListener("click", function (){ 
    document.getElementById("agent-profile").style.display = "none";
});

//Input Event
const input = document.getElementById( 'codename-input');
const greeting = document.getElementById('agent-name');

input.addEventListener('input', () => {
    greeting.textContent = 'Agent:' + input.value;
});
 
//instruction 7
document.getElementById('keydown', (event) => {
     console.log('Security Alert: Key pressed:' + event.key);
});
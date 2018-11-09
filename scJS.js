//html asset requests
const findTarget= document.getElementById("findTarget");

//action center
findTarget.addEventListener('click', ()=>{
	targetScore.value= parseInt(tCC1.value) + parseInt(tCC2.value) + parseInt(tCC3.value)
});

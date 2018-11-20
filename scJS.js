//html asset requests
const findTarget= document.getElementById("findTarget");
const gameEnd=document.getElementById("eGame");
const newGame= document.getElementById("nG");
const randiRule= document.getElementById("randiRules");

//action center
findTarget.addEventListener('click', ()=>{
	targetScore.value= parseInt(tCC1.value) + parseInt(tCC2.value) + parseInt(tCC3.value)
});

gameEnd.addEventListener('click',()=>{
playerTotal.value= parseInt(recVal.value)+parseInt(indVal.value)+parseInt(resVal.value)+parseInt(comVal.value)+
parseInt(ccR1.value)+parseInt(ccR2.value)+parseInt(ccR3.value)-parseInt(Roads.value)+parseInt(poiA.value)+
parseInt(kaiju.value)+parseInt(Constr.value)

playerGraded.value=parseInt(playerTotal.value)/parseInt(targetScore.value)*100;
});

newGame.addEventListener('click',()=>{
tCC1.value="First card";
tCC2.value="Second Card";
tCC3.value="Third Card";
targetScore.value="0";
resVal.value="0";
indVal.value="0";
comVal.value="0";
recVal.value="0";
ccR1.value="0";
ccR2.value="0";
ccR3.value="0";
Roads.value="0";
poiA.value="0";
Constr.value="0";
kaiju.value="0";
playerTotal.value="0";
playerGraded.value="0";
});

randiRule.addEventListener('click',()=>{
	tCC1.value= parseInt(Math.random()*(18-1)+1);
	tCC2.value =parseInt(Math.random()*(18-1)+1);
	tCC3.value=parseInt(Math.random()*(18-1)+1);
	targetScore.value = parseInt(tCC1.value)+parseInt(tCC2.value)+parseInt(tCC3.value);
});
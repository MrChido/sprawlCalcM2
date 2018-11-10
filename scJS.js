//html asset requests
const findTarget= document.getElementById("findTarget");
const gameEnd=document.getElementById("eGame");
const newGame= document.getElementById("nG");

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
tCC1.value="0";
tCC2.value="0";
tCC3.value="0";
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
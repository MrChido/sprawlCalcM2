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
tCC1.value="First card";
tCC2.value="Second Card";
tCC3.value="Third Card";
targetScore.value="0";
resVal.value="Residential";
indVal.value="Industrial";
comVal.value="Commercial";
recVal.value="Recreational";
ccR1.value="First Condition";
ccR2.value="Second Condition";
ccR3.value="Third Condition";
Roads.value="Roads";
poiA.value="Point of Interest";
Constr.value="Construction Issues";
kaiju.value="Kaiju";
playerTotal.value="0";
playerGraded.value="0";
});
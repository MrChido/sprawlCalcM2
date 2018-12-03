//html asset requests
const findTarget= document.getElementById("findTarget");
const gameEnd=document.getElementById("eGame");
const newGame= document.getElementById("nG");
const randiRule= document.getElementById("randiRules");

//action center
findTarget.addEventListener('click', ()=>{
	targetScore.value= parseInt(tCC1.value) + parseInt(tCC2.value) + parseInt(tCC3.value)
	if (tCC1.value =="18" && tCC2.value =="16" && tCC3.value == "17") {
		SCtitlePic.src="./eeg/eeg4.jpg"}
	if (tCC1.value =="8"&& tCC2.value =="3"&& tCC3.value =="2") {
		SCtitlePic.src="./eeg/eeg3.png"}
	if (tCC1.value == "2" && tCC2.value=="9"&& tCC3.value =="1") {
		SCtitlePic.src="./eeg/eeg2.png"}
	if (tCC1.value =="2"&& tCC2.value=='6'&& tCC3.value== '7') {
		SCtitlePic.src="./eeg/eeg1.png"}
		if(tCC1.value=='4'&&tCC2.value=='5'&&tCC3.value=='9'){ 
		SCtitlePic.src="./eeg/eeg5.png"}
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
//dupication catching	
	if(tCC1.value == tCC2.value || tCC3.value){
	tCC1.value=parseInt(Math.random()*(18-1)+2);}
	
	if(tCC2.value == tCC1.value || tCC3.value){
	tCC2.value=parseInt(Math.random()*(18-1)+2);}
	
	if(tCC3.value == tCC2.value || tCC1.value){
	tCC3.value=parseInt(Math.random()*(18-1)+2);}
	
	targetScore.value = parseInt(tCC1.value)+parseInt(tCC2.value)+parseInt(tCC3.value);
});
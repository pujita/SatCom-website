function toggleTestPlan(){
	var beaconContainer = document.getElementById("beacon_container");	
	var transponderContainer = document.getElementById("transponder_container");
	var toggleButton = document.getElementById("toggle_button");
	var beaconList = document.getElementById("beacon_list");
	var transponderList = document.getElementById("transponder_list");

	if(beaconContainer.style.display == "" || beaconContainer.style.display == "block" ) {
		beaconContainer.style.display = "none";
		transponderContainer.style.display = "block";
		toggleButton.childNodes[0].innerHTML = "Switch to beacon test plan »";
		beaconList.style.display = "none";
		transponderList.style.display = "block";
		document.getElementById("page_heading").innerHTML = "Transponder Test Plan";

	} else {
		beaconContainer.style.display = "block";
		transponderContainer.style.display = "none";
		toggleButton.childNodes[0].innerHTML = "Switch to transponder test plan »";
		beaconList.style.display = "block";
		transponderList.style.display = "none";
		document.getElementById("page_heading").innerHTML = "Beacon Test Plan";
	}	
}
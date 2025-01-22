function pressureVacuumSensorMimic(){
	

	$("#Header").html("	<center><span >SIMULATION</span></center>");
	
	
	htm=''
		+'<div class="row titlePart"  style="border-style: unset;padding:7px;">'
		+'<center><span >PROCESS MONITORING PANEL</span></center>'
		+'</div>'
	
		+'<div class="row">'
		+'<div class="col-sm-6">'
		+'<button id="startBtn" class="btn btn-danger" style="width:100%;margin-bottom:10px" disabled>Start</button>'
		+'</div>'
		+'<div class="col-sm-6">'
		+'<button id="resetBtn" class="btn btn-danger" style="width:100%;margin-bottom:10px" >Reset</button>'
		+'</div>'
		+'</div>'
		+'<div class="row">'
		+'<div class="col-sm-6">'
		+'<button id="datasheetBtn" class="btn btn-danger" style="width:100%;margin-bottom:10px" data-toggle="modal" data-target="#datasheetModel" disabled>View Datasheet</button>'
		+'</div>'
		+'<div class="col-sm-6">'
		+'<button type="button" class="btn btn-danger"  id="graph" style="width:100%;margin-bottom:10px" data-toggle="modal" data-target="#modalTrends1" disabled>Trends </button>'
		+'</div>'
		+'</div>'
		+'<div class="row titlePart"  style="border-style: unset;padding:7px;">'
		+'<center><span >READINGS</span></center>'
		+'</div>'
		+'<div class="row conf" >'
		+'<table class="table table-bordered">'
		+' <thead>'
//		+'  <tr>'
//		+'    <th>Firstname</th>'
//		+'   <th>Lastname</th>'
//		+'    <th>Email</th>'
//		+' </tr>'
		+'</thead>'
		+'<tbody>'
		+' <tr>'
		+'   <td><label><b>S1 </b></label></td>'
		+'   <td><label class="PMCValue" id="s1">0</label>%</td>'
		+'  </tr>'
		+'  <tr>'
		+' <td><label><b>S2</b></label></td>'
		+' <td><label class="PMCValue" id="s2">0</label>%</td>'
		+'  </tr>'
		+'  <tr>'
		+' <td><label><b>S3 </b></label></td>'
		+' <td><label class="PMCValue" id="s3">0</label>lph</td>'
		+'  </tr>'
		+'  <tr>'
		+' <td><label><b>S4</b></label></td>'
		+' <td><label class="PMCValue" id="s4">0</label>lph</td>'
		+'  </tr>'
		+'  <tr>'
		+' <td><label><b>S5</b></label></td>'
		+' <td><label class="PMCValue" id="s5">0</label>lph</td>'
		+'  </tr>'
		
		+'  <tr>'
		+' <td><label><b>CV</b></label></td>'
		+' <td><label class="PMCValue" id="cv">0</label>lph</td>'
		+'  </tr>'
	
		+'</tbody>'
		+'</table>'

		+'</div>'
		
		+'<div class="col-sm-12">'
		+'<button type="button" class="btn btn-danger"  id="btnResult" style="margin-top:10px;width:100%" disabled>Result</button>'
		+'</div>'
		
		+'<div class="modal fade " id="datasheetModel">'
		+'<div class="modal-dialog modal-xl" >'
		+'<div class="modal-content">'
		+'<div class="modal-header">'
		+'<h4 class="modal-title"><center>Datasheet</center></h4>'
		+'<button type="button" class="close" data-dismiss="modal">&times;</button>'
		+'</div>'
		+'<div class="modal-body" id="datasheetBody">'
		+'</div>'
		+'<div class="modal-footer">'
//		+'<button type="button" class="btn btn-danger" data-dismiss="modal" >OK</button>'
		+'</div>'
		+'</div>'
		+'</div>'
		+'</div>'
		
		+'<div class="modal fade " id="modalTrends1">'
		+'<div class="modal-dialog modal-xl" >'
		+'<div class="modal-content">'
		+'<div class="modal-header">'
		+'<h4 class="modal-title"><center>Graph</center></h4>'
		+'<button type="button" class="close" data-dismiss="modal">&times;</button>'
		+'</div>'
		+'<div class="modal-body" id="trends1">'
		+'</div>'
		+'<div class="modal-footer">'
//		+'<button type="button" class="btn btn-danger" data-dismiss="modal" >OK</button>'
		+'</div>'
		+'</div>'
		+'</div>'
		+'</div>'
		
		
//		+'<div class="modal fade " id="modalTrends">'
//		+'<div class="modal-dialog modal-xl" >'
//		+'<div class="modal-content">'
//		+'<div class="modal-header">'
//		+'<h4 class="modal-title"><center></center></h4>'
//		+'<button type="button" class="close" data-dismiss="modal">&times;</button>'
//		+'</div>'
//		+'<div class="modal-body" id="bodyTrends">'
//		+'</div>'
//		+'<div class="modal-footer">'
////		+'       <button type="button" class="btn btn-danger"  id="download" style="margin-top:10px;float: right;" >Download </button>'
//	
////		+'<button type="button" class="btn btn-danger" data-dismiss="modal" >Ok</button>'
//		+'</div>'
//		+'</div>'
//		+'</div>'
//		+'</div>'
	$("#Selection").html(htm);
	animateVacuumSensor();
	$("#BoilerHeatExchangerPost").click(function(){
		
		pressureVacuumPostQuestion();
		
	});
	
}
var dataAr = [];
function animateVacuumSensor(){
$("#diagram").empty();
var data = {};
var dataArr = [];
//var dataArrUp = [];
//var paper = Raphael("diagram", 1500, 700);

var w = 1500;
var h = 700;

	if ($(window).width() < 500) {
		width = $(this).width();
		paper = new Raphael(document.getElementById('diagram'), '80%', '80%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	} else{
		paper = new Raphael(document.getElementById('diagram'), '80%', '80%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	}
	

	paper.clear();
	var x = 50, y = 40;
	var time = 500;
	var txtColor = "#00cc88"; 
	var color = '#b4eff3';
	var backColor = "#818080";
	var vacuumColor = "#ddf4f6";
	var s1=0, s2=0, s3=0, s4=0, s5=0, valveCnt = 0;
	var flag = false;
	
	//	Electricity and air flow indicators
	paper.rect((x+220),(y+80),270,215,5);
			
	paper.text((x + 250), (y +130), "Electricity Status : ").attr({ 'font-size': 17, 'font-weight': 'bold' ,'text-anchor': 'start'  });
	var eleOn = paper.image("images/green.png", (x + 425), (y + 110), 40, 40);
	var eleOff = paper.image("images/red.png", (x +425), (y + 110), 40, 40);
			
	paper.text((x + 250), (y +170), "Start up process : ").attr({ 'font-size': 17, 'font-weight': 'bold','text-anchor': 'start'  });
	var stOn = paper.image("images/green.png", (x + 425), (y + 150), 40, 40);
	var stOff = paper.image("images/red.png", (x + 425), (y + 150), 40, 40);
			
	paper.text((x + 250), (y +210), "Running Process : ").attr({ 'font-size': 17, 'font-weight': 'bold','text-anchor': 'start'  });
	var rnOn = paper.image("images/green.png", (x + 425), (y + 190), 40, 40);
	var rnOff = paper.image("images/red.png", (x + 425), (y + 190), 40, 40);
			
	paper.text((x + 250), (y +250), "Shutdown Process : ").attr({ 'font-size': 17, 'font-weight': 'bold','text-anchor': 'start'  });
	var shOn = paper.image("images/green.png", (x + 425), (y + 230), 40, 40);
	var shOff = paper.image("images/red.png", (x + 425), (y + 230), 40, 40);
	
	paper.text((x + 290), (y +365), "Vacuum Pump").attr({ 'font-size': 13, 'font-weight': 'bold','text-anchor': 'start'  });
	paper.text((x + 480), (y +600), "Moterized Butterfly Valve").attr({ 'font-size': 13, 'font-weight': 'bold','text-anchor': 'start'  });
	
	paper.text((x + 890), (y +60), "Vent").attr({ 'font-size': 13, 'font-weight': 'bold','text-anchor': 'start'  });
	paper.text((x + 890), (y +125), "SV").attr({ 'font-size': 13, 'font-weight': 'bold','text-anchor': 'start'  });
	
	
	paper.text((x + 670), (y +45), "Sensor 1").attr({ 'font-size': 13, 'font-weight': 'bold','text-anchor': 'start'  });
	paper.text((x + 540), (y +180), "Sensor 2").attr({ 'font-size': 13, 'font-weight': 'bold','text-anchor': 'start'  });
	paper.text((x + 610), (y +345), "Sensor 3").attr({ 'font-size': 13, 'font-weight': 'bold','text-anchor': 'start'  });
	paper.text((x + 1100), (y), "Sensor 4").attr({ 'font-size': 13, 'font-weight': 'bold','text-anchor': 'start'  });
	paper.text((x + 1320), (y +90), "Sensor 5").attr({ 'font-size': 13, 'font-weight': 'bold','text-anchor': 'start'  });
	
	
	paper.path("M" + (x + 360) + " " + (y + 520) + " l  640 0 l 0 -170").attr({ "stroke-width": 24, "stroke": backColor, "stroke-linejoin": "round" });
	paper.path("M" + (x + 360) + " " + (y + 520) + " l  640 0 l 0 -170").attr({ "stroke-width": 20, "stroke": color, "stroke-linejoin": "round" });
	
	var mtrOn = paper.image("images/on.png", (x + 290), (y + 375), 60, 40).hide();
	var mtrOff = paper.image("images/off.png", (x +290), (y + 375), 60, 40);
	
	var btrOn = paper.image("images/on.png", (x + 517), (y + 555), 60, 40).hide();
	var btrOff = paper.image("images/off.png", (x +517), (y + 555), 60, 40);
	
//left side sensor path from top
	
//	Main sensor Path
	paper.path("M" + (x + 775) + " " + (y+92 ) + " l  0 50 l 135 0 l 22 30").attr({ "stroke-width": 12, "stroke": backColor, "stroke-linejoin": "round" });
	var s1path = paper.path("M" + (x + 775) + " " + (y+92 ) + " l  0 50 l 135 0 l 22 30").attr({ "stroke-width": 8, "stroke": color, "stroke-linejoin": "round" });
	
	//air vent connection path
	paper.path("M" + (x + 825) + " " + (y+138 ) + " l  0 -62 l 100 0 ").attr({ "stroke-width": 12, "stroke": backColor, "stroke-linejoin": "round" });
	var s11path = paper.path("M" + (x + 825) + " " + (y+138 ) + " l  0 -62 l 100 0 ").attr({ "stroke-width": 8, "stroke": color, "stroke-linejoin": "round" });
	
	
	paper.path("M" + (x + 645) + " " + (y+220 ) + " l  0 30 l 245 0").attr({ "stroke-width": 12, "stroke": backColor, "stroke-linejoin": "round" });
	var s2path = paper.path("M" + (x + 645) + " " + (y+220 ) + " l  0 30 l 245 0").attr({ "stroke-width": 8, "stroke": color, "stroke-linejoin": "round" });
	
	//air vent connection path
	paper.path("M" + (x + 705) + " " + (y+246 ) + " l  0 -62 l 100 0 ").attr({ "stroke-width": 12, "stroke": backColor, "stroke-linejoin": "round" });
	var s21path = paper.path("M" + (x + 705) + " " + (y+246 ) + " l  0 -62 l 100 0 ").attr({ "stroke-width": 8, "stroke": color, "stroke-linejoin": "round" });
	
	
	paper.path("M" + (x + 705) + " " + (y+393 ) + " l  0 20 l 155 0 l 70 -87").attr({ "stroke-width": 12, "stroke": backColor, "stroke-linejoin": "round" });
	var s3path = paper.path("M" + (x + 705) + " " + (y+393 ) + " l  0 20 l 155 0 l 70 -87").attr({ "stroke-width": 8, "stroke": color, "stroke-linejoin": "round" });
	
	//air vent connection path
	paper.path("M" + (x + 760) + " " + (y+409 ) + " l  0 -62 l 100 0 ").attr({ "stroke-width": 12, "stroke": backColor, "stroke-linejoin": "round" });
	var s31path = paper.path("M" + (x + 760) + " " + (y+409 ) + " l  0 -62 l 100 0 ").attr({ "stroke-width": 8, "stroke": color, "stroke-linejoin": "round" });
	
//	right side sensor path from top
	
	paper.path("M" + (x + 1230) + " " + (y+92 ) + " l  0 50 l -135 0 l -22 30").attr({ "stroke-width": 12, "stroke": backColor, "stroke-linejoin": "round" });
	var s4path = paper.path("M" + (x + 1230) + " " + (y+92 ) + " l  0 50 l -135 0 l -22 30").attr({ "stroke-width": 8, "stroke": color, "stroke-linejoin": "round" });
	
	//air vent connection path
	paper.path("M" + (x + 1175) + " " + (y+138 ) + " l  0 -62 l -100 0 ").attr({ "stroke-width": 12, "stroke": backColor, "stroke-linejoin": "round" });
	var s41path = paper.path("M" + (x + 1175) + " " + (y+138 ) + " l  0 -62 l -100 0 ").attr({ "stroke-width": 8, "stroke": color, "stroke-linejoin": "round" });
	
	paper.path("M" + (x + 1355) + " " + (y+220 ) + " l  0 30 l -245 0").attr({ "stroke-width": 12, "stroke": backColor, "stroke-linejoin": "round" });
	var s5path = paper.path("M" + (x + 1355) + " " + (y+220 ) + " l  0 30 l -245 0").attr({ "stroke-width": 8, "stroke": color, "stroke-linejoin": "round" });
	
	//air vent connection path
	paper.path("M" + (x + 1300) + " " + (y+246 ) + " l  0 -62 l -100 0 ").attr({ "stroke-width": 12, "stroke": backColor, "stroke-linejoin": "round" });
	var s51path = paper.path("M" + (x + 1300) + " " + (y+246 ) + " l  0 -62 l -100 0 ").attr({ "stroke-width": 8, "stroke": color, "stroke-linejoin": "round" });
	
	paper.path("M" + (x + 1073) + " " + (y+333 ) + " l 70 80 l 130 0").attr({ "stroke-width": 12, "stroke": backColor, "stroke-linejoin": "round" });
	var openPath = paper.path("M" + (x + 1073) + " " + (y+333 ) + " l 70 80 l 130 0").attr({ "stroke-width": 8, "stroke": color, "stroke-linejoin": "round" });


	var vacuumPump = paper.image("images/vacuum_pump.png", (x + 70), (y + 350), 340, 250);
	
	paper.image("images/connectorSocket.png", (x + 522), (y + 496), 20, 50);
	var butterflyValve = paper.image("images/butterfly.png", (x + 430), (y + 420), 220, 140);
	paper.image("images/connectorSocket.png", (x + 556), (y + 494), 20, 50).attr({'transform': 'r' + 180});
	
	var sensorCircle = paper.circle((x+1000), (y+250), 100).attr({"stroke-width":7, "stroke":backColor, "fill":color});
	
	
	paper.image("images/connectorSocket.png", (x + 883), (y + 230), 20, 40);
	
	paper.image("images/connectorSocket.png", (x + 920), (y + 150), 20, 40).attr({'transform': 'r' + 49});
	
	paper.image("images/connectorSocket.png", (x + 1061), (y + 150), 20, 40).attr({'transform': 'r' + 134});
	
	paper.image("images/connectorSocket.png", (x + 1097), (y + 230), 20, 40).attr({'transform': 'r' + 180});
	
	paper.image("images/connectorSocket.png", (x + 920), (y + 310), 20, 40).attr({'transform': 'r' + 313});
	
	paper.image("images/connectorSocket.png", (x + 1061), (y + 310), 20, 40).attr({'transform': 'r' + 228});
	
//left sensor from top
	var capVacuum = paper.image("images/capVacuum.png", (x + 700), (y), 150, 110);
	
	var capVacuum = paper.image("images/capVacuum.png", (x + 570), (y+130 ), 150, 110);
	
	var capVacuum = paper.image("images/capVacuum.png", (x + 630), (y+300 ), 150, 110);
	
//right sensor from top	
	var capVacuum = paper.image("images/capVacuum.png", (x + 1155), (y), 150, 110);
	
	var capVacuum = paper.image("images/capVacuum.png", (x + 1280), (y+130 ), 150, 110);

//left side valve from top
	
	var s1gVent = paper.image("images/svValveH2G.png", (x + 850), (y + 30), 40, 60);
	var s1rVent = paper.image("images/svValveH1R.png", (x + 850), (y + 30), 40, 60);
	
	var s1gMain = paper.image("images/svValveH2G.png", (x + 850), (y + 95.5), 40, 60);
	var s1rMain = paper.image("images/svValveH1R.png", (x + 850), (y + 95.5), 40, 60);
	
	var s2gVent = paper.image("images/svValveH2G.png", (x + 740), (y + 138), 40, 60);
	var s2rVent = paper.image("images/svValveH1R.png", (x + 740), (y + 138), 40, 60);
	
	var s2gMain = paper.image("images/svValveH2G.png", (x + 740), (y + 203.5), 40, 60);
	var s2rMain = paper.image("images/svValveH1R.png", (x + 740), (y + 203.5), 40, 60);
	
	var s3gVent = paper.image("images/svValveH2G.png", (x + 790), (y + 301), 40, 60);
	var s3rVent = paper.image("images/svValveH1R.png", (x + 790), (y + 301), 40, 60);
	
	var s3gMain = paper.image("images/svValveH2G.png", (x + 790), (y + 366.5), 40, 60);
	var s3rMain = paper.image("images/svValveH1R.png", (x + 790), (y + 366.5), 40, 60);
	
	
//	right side valve from top
	var s4gVent = paper.image("images/svValveH2G.png", (x + 1115), (y + 30), 40, 60);
	var s4rVent = paper.image("images/svValveH1R.png", (x + 1115), (y + 30), 40, 60);
	
	var s4gMain = paper.image("images/svValveH2G.png", (x + 1115), (y + 95.5), 40, 60);
	var s4rMain = paper.image("images/svValveH1R.png", (x + 1115), (y + 95.5), 40, 60);

	var s5gVent = paper.image("images/svValveH2G.png", (x + 1230), (y + 138), 40, 60);
	var s5rVent = paper.image("images/svValveH1R.png", (x + 1230), (y + 138), 40, 60);
	
	var s5gMain = paper.image("images/svValveH2G.png", (x + 1230), (y + 203.5), 40, 60);
	var s5rMain = paper.image("images/svValveH1R.png", (x + 1230), (y + 203.5), 40, 60);
	
	var opengVent = paper.image("images/svValveH2G.png", (x + 1170), (y + 366.5), 40, 60);
	var openrVent = paper.image("images/svValveH1R.png", (x + 1170), (y + 366.5), 40, 60);
	
	function rectTextBoxes(x,y){
		paper.rect((x+130),(y+85),70,28,5).attr({"fill":"#000","stroke":"#9d9d9e","stroke-width":3});
	} 
	
	rectTextBoxes((x+450),(y+375)); 	
	var btrflyReading = paper.text((x+615), (y+475), "00").attr({"font-size":18,"font-family":"digital-clock-font","fill":txtColor,"font-weight":"bold"});
			
	rectTextBoxes((x+610),(y-105)); 	
	var s1Reading = paper.text((x+775), (y-5), "00").attr({"font-size":18,"font-family":"digital-clock-font","fill":txtColor,"font-weight":"bold"});
	
	rectTextBoxes((x+483),(y+25)); 	
	var s2Reading = paper.text((x+648), (y+125), "00").attr({"font-size":18,"font-family":"digital-clock-font","fill":txtColor,"font-weight":"bold"});
	
	rectTextBoxes((x+540),(y+197)); 	
	var s3Reading = paper.text((x+705), (y+297), "00").attr({"font-size":18,"font-family":"digital-clock-font","fill":txtColor,"font-weight":"bold"});
	
	rectTextBoxes((x+1065),(y-105)); 	
	var s4Reading = paper.text((x+1230), (y-5), "00").attr({"font-size":18,"font-family":"digital-clock-font","fill":txtColor,"font-weight":"bold"});
	
	rectTextBoxes((x+1190),(y+25)); 	
	var s5Reading = paper.text((x+1355), (y+125), "00").attr({"font-size":18,"font-family":"digital-clock-font","fill":txtColor,"font-weight":"bold"});
	
	let activeTimeouts = [];
	
	setTimeout(() => {
		eleOn.toFront();
		stOn.toFront();
		$("#startBtn").prop("disabled", false);
	}, 2000);
	
	$("#resetBtn").on("click", function (e) {
		e.preventDefault();
		
		activeTimeouts.forEach((timeout) => clearTimeout(timeout));
    	activeTimeouts = [];
		
		clearTimeout(initTimeout);
		clearTimeout(anim);	
		clearTimeout(timeout1);
		clearTimeout(timeout2);
		clearTimeout(timeout3);
		clearTimeout(timeout4);
		clearTimeout(timeout5);
		$("#container").html('');
		animateVacuumSensor();
		s1=0, s2=0, s3=0, s4=0, s5=0, valveCnt = 0;
		flag = false;
	})
	
	var initTimeout, anim, timeout1,timeout2, timeout3,timeout4,timeout5 ;
	
//	 click event listener for fill tank button
	$("#startBtn").on("click", function (e) {
		e.preventDefault();
		$("#startBtn").off("click");
		$("#startBtn").prop("disabled", true);
		
		console.log("startBtn");
		a = [];
		setTimeout(() => {
			opengVent.toFront();
			initTimeout = setTimeout(() => {
				openrVent.toFront();
				timeout1 =setTimeout(() => {
					stOff.toFront();
					rnOn.toFront();
					mtrOff.hide();
					mtrOn.show();
					 anim =  setTimeout(() => {
						a[0] =paper.path('M' + (x + 528) + " " + (y+520) + " l  0 0 ").attr({ "stroke-width": 18, "stroke": vacuumColor, "stroke-linejoin": "round" });
						a[0].animate({path: 'M' + (x + 528) + " " + (y+520) + " l  -162 0 "}, time, function(){
							btrOff.hide();
							btrOn.show();
							
							s1gMain.toFront();
							s2gMain.toFront();
							s3gMain.toFront();
							s4gMain.toFront();
							s5gMain.toFront();
							
								s1path.attr({"stroke": vacuumColor});
								s2path.attr({"stroke": vacuumColor});
								s3path.attr({"stroke": vacuumColor});
								s4path.attr({"stroke": vacuumColor});
								s5path.attr({"stroke": vacuumColor});
								s11path.attr({"stroke": vacuumColor});
								s21path.attr({"stroke": vacuumColor});
								s31path.attr({"stroke": vacuumColor});
								s41path.attr({"stroke": vacuumColor});
								s51path.attr({"stroke": vacuumColor});
								openPath.attr({"stroke": vacuumColor});
								vacuumReadings();
								timeout2 = setTimeout(() => {
									sensorCircle.attr({"fill": "r(0.5, 0.5)#d5f1f3-#ffffff"});
									a[1] =paper.path('M' + (x + 1000) + " " + (y+353) + " l  0 0 ").attr({ "stroke-width": 18, "stroke": vacuumColor, "stroke-linejoin": "round" });
									a[1].animate({path: 'M' + (x + 1000) + " " + (y+353) + " l 0 170 "}, time, function(){	
										a[2] =paper.path('M' + (x + 1005) + " " + (y+520) + " l  0 0 ").attr({ "stroke-width": 18, "stroke": vacuumColor, "stroke-linejoin": "round" });
										a[2].animate({path: 'M' + (x + 1006) + " " + (y+520) + " l -435 0 "}, time, function(){
											
										});
									});
								}, time*2);
							});
					}, 2000);
				}, 1000);
			}, 5000);
		}, 1000);
	})
	
	
	var evaluate = function(v, ve, max, min){
				v = v + 38; 
				ve = diff = Math.random() * (max - min) + min; 
				randomSign = Math.random() < 0.5 ? -1 : 1;
				perv = (38/100)*ve;
				perv = randomSign * perv;
//				console.log("V : " + v+  " ve : " + ve + " perv : "+ perv + " v+perv : " + (v+perv));
				return v + perv;
			}
		
		
	var vacuumReadings = function(){
//		console.log("vacuumReading");
		dataArr = [];
		var s2e = 0, s3e = 0, s4e = 0, s5e = 0;
					
		let s2min = 0.25;
		let s2max = 2;
					
		let s3min = 0;
		let s3max = 1;
			
		let s4min = 0;
		let s4max = 2;
					
		let s5min = 0;
		let s5max = 0.5;
		
		for(i = 0 ; i < 20 ; i++){
		
			timeout3 = setTimeout(() => {
				round = {};
				s2 = evaluate(s1, s2e, s2max, s2min);	
				s3 = evaluate(s1, s3e, s3max, s3min);	
				s4 = evaluate(s1, s4e, s4max, s4min);	
				s5 = evaluate(s1, s5e, s5max, s5min);	
				
				s1 = s1 + 38;
				
				valveCnt = valveCnt + 5;
				
				round.s1 = s1.toFixed(2);
				round.s2 = s2.toFixed(2);
				round.s3 = s3.toFixed(2);
				round.s4 = s4.toFixed(2);
				round.s5 = s5.toFixed(2);
				round.valveCnt = valveCnt.toFixed(2);
				
				dataArr.push(round);
				
				btrflyReading.attr('text', valveCnt);
				s1Reading.attr('text', s1.toFixed(2));
				s2Reading.attr('text', s2.toFixed(2));
				s3Reading.attr('text', s3.toFixed(2));
				s4Reading.attr('text', s4.toFixed(2));
				s5Reading.attr('text', s5.toFixed(2));
				$("#cv").html(valveCnt);
				$("#s1").html(s1.toFixed(2));
				$("#s2").html(s2.toFixed(2));
				$("#s3").html(s3.toFixed(2));
				$("#s4").html(s4.toFixed(2));
				$("#s5").html(s5.toFixed(2));
				
				timeout4 = setTimeout(() => {
					if(flag === false){
						flag = true;
						closeAllMainValveAndOpenVent(); 
					}else{
						return;
					} 
				}, i*(time));
				activeTimeouts.push(timeout4);
			}, i*(time)); 
			activeTimeouts.push(timeout3);
		}
	}
	
	var closeAllMainValveAndOpenVent = function(){ 
		
		data = {};
		data.data = dataArr;
		dataAr.push(data);
		console.log(dataAr);
		
		rnOff.toFront();
		shOn.toFront();
		s1gVent .toFront();
		s2gVent.toFront();
		s3gVent.toFront();
		s4gVent.toFront();
		s5gVent.toFront();
		mtrOn.hide();
		mtrOff.show();
		btrOn.hide();
		btrOff.show();
//		console.log(dataArr);
		timeout5 = setTimeout(() => {
			s1path.attr({"stroke": color});
			s2path.attr({"stroke": color});
			s3path.attr({"stroke": color});
			s4path.attr({"stroke": color});
			s5path.attr({"stroke": color});
			s11path.attr({"stroke": color});
			s21path.attr({"stroke": color});
			s31path.attr({"stroke": color});
			s41path.attr({"stroke": color});
			s51path.attr({"stroke": color});
			openPath.attr({"stroke": color});
			sensorCircle.attr({"fill": color});
			
			s1Reading.attr('text', "0");
			s2Reading.attr('text', "0");
			s3Reading.attr('text', "0");
			s4Reading.attr('text', "0");
			s5Reading.attr('text', "0");
			btrflyReading.attr('text', "0");
			
			a[1] =paper.path('M' + (x + 1000) + " " + (y+353) + " l  0 0 ").attr({ "stroke-width": 18, "stroke": color, "stroke-linejoin": "round" });
			a[1].animate({path: 'M' + (x + 1000) + " " + (y+353) + " l 0 170 "}, time/2, function(){	
				a[2] =paper.path('M' + (x + 1005) + " " + (y+520) + " l  0 0 ").attr({ "stroke-width": 18, "stroke": color, "stroke-linejoin": "round" });
				a[2].animate({path: 'M' + (x + 1006) + " " + (y+520) + " l -435 0 "}, time/2, function(){
					a[0] =paper.path('M' + (x + 528) + " " + (y+520) + " l  0 0 ").attr({ "stroke-width": 18, "stroke": color, "stroke-linejoin": "round" });
					a[0].animate({path: 'M' + (x + 528) + " " + (y+520) + " l  -162 0 "}, time/2);
					shOff.toFront();
//					$("#startBtn").prop("disabled", false);
				});
			});
		}, time);
	}
	
	
	
}
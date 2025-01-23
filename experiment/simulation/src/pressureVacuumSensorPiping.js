ComponentMasterJson = {};


function pressureVacuumSensorPiping()
{
var StdCompInstruCount=28;

var StdACCount=1;
var StdSVCount=22;
var StdVPumpCount=1;
var StdBVCount=1;
var StdStepperCount=1;
var StdRingHeater7Count=1;
var StdRingHeater10Count=1;

var preACCount;
var preSVCount;
var preVPumpCount;
var preBVCount;
var preStepperCount;
var preRingHeater7Count;
var preRingHeater10Count;

var ac;
var sv;
var vpump;
var bv;
var stepper;
var ring7;
var ring10;

//var wt;
	$("#Header").html("	<center><span>PRESSURE & VACUUM - PIPING DIAGRAM</span></center>");
	htm=''
		+'<div class="row titlePart"  style="border-style: unset;padding:7px;">'
		+'<center><span >CONFIGURATION</span></center>'
		+'</div>'
	
     	+'<div class="row conf" >'
	
		+'<div class="col-sm-12">'
		+'<label><b>Select no of air compressor</b></label>'
		+' <input class="form-select" id="ac" type="number" min="0" max="5" value="1" tabindex="1" ></input>'
		+'</div>'
		
		+'<div class="col-sm-12">'
		+'<label><b>Select no of Solenoid valve(AC -230 V)</b></label>'
		+' <input class="form-select" id="sv" type="number" min="0" max="22" value="22" tabindex="2" ></input>'
		+'</div>'
		
	
		
		+'<div class="col-sm-12">'
		+'<label><b>Select no of vaccum pump</b></label>'
		+' <input class="form-select" id="vpump"  type="number" min="0" max="5" value="1" tabindex="3" ></input>'
		+'</div>'
		+'<div class="col-sm-12">'
		+'<label><b>Select no of Butterfly valve</b></label>'
		+' <input class="form-select" id="bv"  type="number" min="0" max="5" value="1" tabindex="4" ></input>'
		+'</div>'
		+'<div class="col-sm-12">'
		+'<label><b>Select no of Stepper motor</b></label>'
		+' <input class="form-select" id="stepper"  type="number" min="0" max="5" value="1" tabindex="5" ></input>'
		+'</div>'
		+'<div class="col-sm-12">'
		+'<label><b>Select no of ring header with 7 input</b></label>'
		+' <input class="form-select" id="ring7"  type="number" min="0" max="5" value="1" tabindex="6" ></input>'
		+'</div>'
		+'<div class="col-sm-12">'
		+'<label><b>Select no of ring header with 10 outlet</b></label>'
		+' <input class="form-select" id="ring10"  type="number" min="0" max="5" value="1" tabindex="7" ></input>'
		+'</div>'
		+'<div class="col-sm-12">'
		+'<label><b>Utilities</b></label>'
		+'<select class="form-select" id="Utilities" multiple="multiple" tabindex="8">'
		+'  <option value="Water" selected>Water</option>'
		+'  <option value="Air">Air</option>'
		+'  <option value="Steam">Steam </option>'
		+'  <option value="Electricity">Electricity</option>'
		+'  <option value="Sterile_Water">Sterile Water </option>'
		+'  <option value="Heating_Ventilation_Air_Conditioning(HVAC)"> Heating Ventilation Air Conditioning(HVAC)</option>'
		+'  <option value="CCTV_Surveillance">CCTV - Surveillance</option>'
		+'  <option value="Access_Control"> Access Control</option>'
		
	
		+'</select>'
		+'</div>'
		
		+'<div class="col-sm-12">'
		+'<button type="button" class="btn btn-danger"  id="verifyComponents" style="margin-top:10px;margin-bottom:10px;width:100%" data-toggle="modal" data-target="#myModal" tabindex="9">Verify Components </button>'
		
//		+'	  <!-- The Modal -->'
		+'  <div class="modal fade " id="myModal">'
		+'    <div class="modal-dialog " id="modelDialog">'
		+'	      <div class="modal-content">'
//		+'	        <!-- Modal Header -->'
		+'	        <div class="modal-header">'
		+'	          <h4 class="modal-title"><center id="modelTitle"></center></h4>'
		+'	          <button type="button" class="close" data-dismiss="modal">&times;</button>'
		+'	        </div>'
//		+'	        <!-- Modal body -->'
		+'	        <div class="modal-body" id="modelBody">'
		
		+'	        </div>'
//		+'	        <!-- Modal footer -->'
		+'	        <div class="modal-footer">'
		+'	          <button type="button" class="btn btn-danger" data-dismiss="modal" >Ok</button>'
		+'	        </div>'
		+'	      </div>'
		+'	    </div>'
		+'	  </div>'
//		+'	  <!-- End Modal -->'
		+'</div>'
		+'<div class="col-sm-12">'
		+'<button type="button" class="btn btn-danger"  id="nextLevel1" style="margin-top:10px;margin-bottom:10px;width:100%" tabindex="10" hidden>Next Level</button>'
		+'</div>'
		
		+'</div>'
	$("#Selection").html(htm);
	htm=''
		+'<div class="row" >'
		+'<div class="container main-container">'
		+' <h5 class="text-center" style="color: #f8f9fa;background-color: #343a40;padding-bottom:10px;padding-top:10px">PROBLEM STATEMENT</h5>'
		+'<ul class="nav nav-tabs" id="tabMenu" role="tablist">'
		+'  <li class="nav-item">'
		+'    <button class="nav-link active" id="customer-tab1" data-bs-toggle="tab" data-bs-target="#customer1" type="button" role="tab" aria-controls="customer1" aria-selected="true">Customer Requirements</button>'
		+'  </li>'
		+'  <li class="nav-item">'
		+'    <button class="nav-link" id="operation-tab1" data-bs-toggle="tab" data-bs-target="#operation1" type="button" role="tab" aria-controls="operation1" aria-selected="false">Operational Requirements</button>'
		+'  </li>'
		+' </ul>'
		+' <div class="tab-content mt-3" id="tabContent">'
//		+'   <!-- Customer Requirements -->'
		+'<div class="tab-pane fade show active" id="customer1" role="tabpanel" aria-labelledby="customer-tab1">'
//		+'    <h2 class="tab-title">Customer Requirements</h2>'
		+'<b style="font-size:18px;">Customer Requirements: (Design and development of Pressure and Vacuum sensor calibration facility)</b><br>'
		+'   <p style="    font-size: 18px;">The customer intends to set-up a pressure and vacuum calibration facility which will test '
		+'pressure and vacuum sensors of following types as minimum requirement. For all the sensors the process connection will be either ½” NPT (F), '
		+'screwed type OR flange type. The vacuum and pressure range will be from -300 mmWC to 20 Bar.</p>'
		+'<br>'
		+'    <ul class="list-group">'
		+'     <li class="list-group-item">1. Diaphragm type</li>'
		+'     <li class="list-group-item">2. Strain Gauge type</li>'
		+'     <li class="list-group-item">3. Piezoelectric sensors</li>'
		+'     <li class="list-group-item">4. Capacitive sensor</li>'
		+'     <li class="list-group-item">5. Bourdon tube type sensor</li>'
		+'     <li class="list-group-item">6. Bellow type sensor and</li>'
		+'     <li class="list-group-item">7. Provision for any other type of flow sensor which fits in this category</li>'
		+'   </ul>'
		+' </div>'
		
//		+' <!-- Operational Requirements -->'
		+'  <div class="tab-pane fade" id="operation1" role="tabpanel" aria-labelledby="operation-tab1">'
//		+'   <h2 class="tab-title">Operational Requirements</h2>'
		+'   <ul class="list-group">'
		+'     <li class="list-group-item">1.	The set-up for pressure and vacuum sensor calibration must be same and selection is to be made before starting the set-up</li>'
		+'     <li class="list-group-item">2.	Minimum energy is to be used for testing of the sensors</li>'
		+'     <li class="list-group-item">3.	The entire process of characterizing of sensor must be fully automated</li>'
		+'     <li class="list-group-item">4.	In case of power failure the set-up should continue from the last reading</li>'
		+'     <li class="list-group-item">5.	A provision must be made to reduce the pressure and vacuum turbulence</li>'
		+'     <li class="list-group-item">6.	Multi point characterizing (Calibration) must be provided, the points will be selected by the customer</li>'
		+'     <li class="list-group-item">7.	The set-up should test three sensors (minimum) at a time</li>'
		+'     <li class="list-group-item">8.	The duration of the test should not be more than two hours in view of all the characteristics</li>'
		+'     <li class="list-group-item">9.	For dynamic characteristics a provision should be made as per demand</li>'
		+'     <li class="list-group-item">10.	The provision is to be made to acquire health of the plant before starting any test</li>'
		+'     <li class="list-group-item">11.	The entire analysis and report should be made automatically with validation of data, removing outliers, and having audit trail so as to secure the data.</li>'
		+'     <li class="list-group-item">12.	The test reports need to be stored for minimum one year</li>'
		+'     <li class="list-group-item">13.	The visualization tool to be deployed for the operators</li>'
		+'     <li class="list-group-item">14.	Role based reporting structure and dash boards to be implemented using open source software </li>'
		+'     <li class="list-group-item">15.	The minimum level financial sustainability of the set up is to be ensured and reported as pointers of efficiency</li>'
		+'     <li class="list-group-item">17.	The alarms and events are to be generated for critical parameters and to be shared based on role.</li>'


		+'   </ul>'
		+'   </div>'
	+' </div>'
	    +' </div>'
		+'</div>'
	$("#diagram").html(htm);
       var temp=0;
	  
	   var totalComp;
	   var flag=0;
	   var  selectedValues;
	   var selectedArray=[];
	$("#verifyComponents").click(function(){
		

		 ac=parseInt($("#ac").val());
		 sv=parseInt($("#sv").val());
		 vpump=parseInt($("#vpump").val());
		 bv=parseInt($("#bv").val());
		 stepper=parseInt($("#stepper").val());
		 ring7=parseInt($("#ring7").val());
		 ring10=parseInt($("#ring10").val());
		 
		 const selectedValues = $("#Utilities").val();
		 
		 
		 if (selectedValues) {
	          selectedValues.forEach(value => {
	            if (!selectedArray.includes(value)) {
	              selectedArray.push(value);
	            }
	          });

//	          $("#output").text("Values in Array: " + selectedArray.join(", "));
	        }
	
		 
		 CountComp();
		 
	
		  if(totalComp==0 ||(ac === ""  || sv === "" || vpump=="" || bv=="" || stepper=="" || ring7=="" || ring10=="" )){
			  $("#modelDialog").removeClass("modal-xl");
				$("#modelDialog").addClass("modal-md");
				 $("#modelTitle").html("Error box ");
				  $("#modelBody").html("<b>Select components</b> ");
				  $("#modelBody").css("color","red");
		  }
		  else{
			  if(temp<3){
				  CountComp();
			  }else{
				  if(flag==0){
					  $("#modelDialog").removeClass("modal-md");
					  $("#modelDialog").addClass("modal-xl");
					  $("#modelTitle").html("Required configuration ");
					  htm=''
						  +'<div class="row">'
						  +'<div class="col-sm-6" >'
						+'<table class="table table-striped table-bordered">'
						+' <tbody>'
						+'    <tr class="table-dark text-dark">'
						+'     <td colspan="2"><center>REQUIRED COMPONENTS</center></td>'
						+'   </tr>'
						+'    <tr>'
						+'     <td><center>Air compressor</center></td>'
						+'     <td><center>1</center></td>'
						+'   </tr>'
						+'    <tr>'
						+'     <td><center>Solenoid valve</center></td>'
						+'     <td><center>22</center></td>'
						+'   </tr>'
						+'    <tr>'
						+'     <td><center>Vacuum pump</center></td>'
						+'     <td><center>1</center></td>'
						+'   </tr>'
						+'   <tr>'
						+'     <td><center>Butterfly valve</center></td>'
						+'     <td><center>1</center></td>'
						+'   </tr>'
						+'   <tr>'
						+'     <td><center>Stepper motor</center></td>'
						+'     <td><center>1</center></td>'
						+'   </tr>'
						+'    <tr>'
						+'     <td><center>Ring header with 7 input</center></td>'
						+'     <td><center>1</center></td>'
						+'   </tr>'
						+'    <tr>'
						+'     <td><center>Ring header with 10 outlet</center></td>'
						+'     <td><center>1</center></td>'
						+'   </tr>'
						
						 +' </tbody>'
						+'</table>'
						+'</div>'
						 +'<div class="col-sm-6" >'
							+'<table class="table table-striped table-bordered">'
							+' <tbody>'
							+'    <tr class="table-dark text-dark">'
							+'     <td colspan="2"><center> REQUIRED UTILITIES</center></td>'
							+'   </tr>'
							+'    <tr>'
							+'     <td><center>AIR</center></td>'
							+'     <td><center><i class="fa fa-check-square icon" style=""></i></center></td>'
							+'   </tr>'
							+'   <tr>'
							+'     <td><center>ELECTRICITY</center></td>'
							+'     <td><center><i class="fa fa-check-square icon" ></i></center></td>'
							+'   </tr>'
							+'   <tr>'
							+'     <td><center>COMMUNICATION NETWORK</center></td>'
							+'     <td><center><i class="fa fa-check-square icon"></i></center></td>'
							+'   </tr>'
							
							+'    <tr>'
							+'     <td><center>ACCESS CONTROL</center></td>'
							+'     <td><center><i class="fa fa-check-square icon"></i></center></td>'
							
							+'   </tr>'
							
							+'    <tr>'
							+'     <td><center>CCTV</center></td>'
							+'     <td><center><i class="fa fa-check-square icon" ></i></center></td>'
							
							+'   </tr>'
						    +' </tbody>'
							+'</table>'
							+'</div>'
							+'</div>'

						+"<img src='images/Vacuum_P.png' class='img-fluid' style='border-style: double;border-color: black;'>"
					  
						 $("#modelBody").html(htm);
						  $("#modelBody").css("color","red");   
				  }
				  else
					  {
					  CountComp();
					  }
				  
			  }
			  temp++;
		  }
	
	});
		  
	function CountComp(){
	
		 if(totalComp==0 ||(ac === ""  || sv === "" || vpump=="" || bv=="" || stepper=="" || ring7=="" || ring10=="" )){
			  $("#modelDialog").removeClass("modal-xl");
				$("#modelDialog").addClass("modal-md");
				 $("#modelTitle").html("Error box");
				  $("#modelBody").html("<b>Select components</b> ");
				  $("#modelBody").css("color","red");
		  }
		
	else{
		
		if((ac==StdACCount) && (sv==StdSVCount)  &&( StdVPumpCount==vpump) && (bv==StdBVCount)  &&( StdStepperCount==stepper) &&( StdRingHeater7Count==ring7) && (StdRingHeater10Count== ring10) ){
			
			if(selectedArray.length==0){
				
				 $("#modelDialog").removeClass("modal-xl");
					$("#modelDialog").addClass("modal-md");
					 $("#modelTitle").html("Error box");
					  $("#modelBody").html("<b>Select utilities.</b> ");
					  $("#modelBody").css("color","red");
			}
			else
				{
					 $("#modelDialog").removeClass("modal-xl");
					 $("#modelDialog").addClass("modal-md");
					 $("#modelTitle").html("Message box ");
					 $("#modelBody").html("<b>Click on 'Next level' button.</b>");
					$("#modelBody").css("color","green");
					$("#ac,#sv,#vpump,#verifyComponents,#Utilities,#stepper,#ring7,#ring10,#bv").prop("disabled",true);
					
					flag=1;
					addToMasterJson();
					htm=''
						+'<div class="col-sm-12" >'
						+"<img src='images/Vacuum_P.png' class='img-fluid' id='partA1' style=' width: 100px;height:100px;position: relative; margin: 20px;'  >"
						+'</div>'
						
					$("#diagram").html(htm);
					 $("#partA1").animate(
					          {
					            width: "90%",
					            height: "60%",
					           left: "+=50px",
		//			            background-color:"red"
					            
					          },
					          1000,
					          
					        );
						$("#nextLevel1").prop("hidden",false);
				}	
		}
		else{
		
			
			 perACCount=parseFloat((ac*100)/StdACCount);
			 perSVCount=parseFloat((sv*100)/StdSVCount);
			 perVPumpCount=parseFloat((vpump*100)/StdVPumpCount);
			 perBVCount=parseFloat((bv*100)/StdBVCount);
			 perStepperCount=parseFloat((stepper*100)/StdStepperCount);
			 preRingHeater7Count=parseFloat((ring7*100)/StdRingHeater7Count);
			 preRingHeater10Count=parseFloat((stepper*100)/StdRingHeater10Count);
			 
			  console.log(" perACCount "+perACCount);
			  console.log(" perSVCount "+perSVCount);
			  console.log(" perVPumpCount "+perVPumpCount);
			  console.log(" perBVCount "+perBVCount);
			  console.log(" perStepperCount "+perStepperCount);
			   console.log(" preRingHeater7Count "+preRingHeater7Count);
			  console.log(" preRingHeater10Count "+preRingHeater10Count);
			  
				totalComp=perACCount+perSVCount+perVPumpCount+perBVCount+perStepperCount+preRingHeater7Count+preRingHeater10Count;
			  avg=parseInt(totalComp/7);
			  
			  console.log(" avg "+avg);
			  console.log(" totalComp "+totalComp);
				 $("#modelDialog").removeClass("modal-xl");
				$("#modelDialog").addClass("modal-md");
				if((ac>StdACCount) || (sv>StdSVCount) || (vpump>StdVPumpCount) || (bv>StdBVCount) || (stepper>StdStepperCount) ||(ring7>StdRingHeater7Count) ||(ring10>StdRingHeater10Count)){
					
					$("#modelBody").css("color","red"); 
					 $("#modelTitle").html("Error box");
					$("#modelBody").html("<b>More components than expected. </b>");
				}else
					{
						if(avg<100){
							$("#modelBody").css("color","red");
							$("#modelTitle").html("Message box");
							 $("#modelBody").html("<b>"+avg+" % Correctness</b>");
								
						}else{
							$("#modelBody").css("color","red");
							 $("#modelTitle").html("Error box");
							 $("#modelBody").html("<b>More components than expected.</b>");
						}
					}
		}
	}
		
	}
	function addToMasterJson()
	{
		
		tempMasterJsonComp = {
		"totalComponent":"5",
		"Chamber":"2",
		"pump":"1",
		"Heater":"1",
		"Piston":"1",
		"Chiller":"1",
//		"Utilities":selectedArray,
		};
		
		ComponentMasterJson.Component=tempMasterJsonComp;
		ComponentMasterJson.Component.Utilities=selectedArray;
		console.log(ComponentMasterJson);
	}
	
	$("#nextLevel1").click(function(){
		pressureVacuumSensorInstrument();
	});
	
	
	
}


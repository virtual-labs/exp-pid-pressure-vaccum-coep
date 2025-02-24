var InstrMasterJson = {};


function pressureVacuumSensorInstrument()
{
	var instrActualCount=0;
	var StdCompInstruCount=18;
	
	var StdPICount=1;
	var StdAFRCount=1;
	var StdPTWirelessCount=2;
	var StdPTWiredCount=7;
	var StdPRVCount=1;
	var StdVTWiredCount=4;
	var StdVTWirelessCount=1;
	var StdWirelessGatewayCount=1;

	var perPICount;
	var perAFRCount;
	var perPTWirelessCount;
	var perPTWiredCount;
	var perPRVCount;
	var perVTWiredCount;
	var perVTWirelessCount;
	var perWirelessGatewayCount;
	
	var pi;
	var afr;
	var wgateway;
	var PTwireless;
	var PTwired;
	var VTwireless;
	var VTwired;
	var prv;
	
	timerMasterJson.piping=$("#counter").text();
//	console.log(timerMasterJson);
	seconds = 0;
	  updateCounter();
	$("#Header").html("	<center><span >PRESSURE & VACUUM - INSTRUMENT DIAGRAM</span></center>");
	$("#Selection").css({"overflow": "auto","height":" 837px"});
	htm=''
		+'<div class="row titlePart" style="    border-style: unset;">'
		+'<center><span >CONFIGURATION</span></center>'
		+'</div>'
	
     	+'<div class="row conf" >'
		
		
		
		+'<div class="col-sm-12">'
		+'<label><b>Select no of pressure indicator (PI)</b></label>'
		+' <input class="form-select" id="pi" type="number" min="0" max="5" value="0" tabindex="1"></input>'
		+'</div>'
		
		+'<div class="col-sm-12">'
		+'<label><b>Select no of  air filter regulator (AFR)</b></label>'
		+' <input class="form-select" id="afr" type="number" min="0" max="5" value="0" tabindex="2"></input>'
		+'</div>'
		
		+'<div class="col-sm-12">'
		+'<label><b>Select no of wireless gateway </b></label>'
		+' <input class="form-select" id="wgateway" type="number" min="0" max="5" value="0" tabindex="3"></input>'
		+'</div>'
		+'<div class="col-sm-12">'
		+'<label><b>Select no of vaccum transmitter wired </b></label>'
		+' <input class="form-select" id="vwired"  type="number" min="0" max="6" value="0" tabindex="4"></input>'
		+'</div>'
		+'<div class="col-sm-12">'
		+'<label><b>Select no of vaccum transmitter wireless </b></label>'
		+' <input class="form-select" id="vwireless"  type="number" min="0" max="7" value="0" tabindex="5" ></input>'
		+'</div>'
		+'<div class="col-sm-12">'
		+'<label><b>Select no of pressure transmitter wired</b></label>'
		+' <input class="form-select" id="ptwired" type="number" min="0" max="5" value="0" tabindex="6"></input>'
		+'</div>'
		
		+'<div class="col-sm-12">'
		+'<label><b>Select no of pressure transmitter wireless</b></label>'
		+' <input class="form-select" id="ptwireless" type="number" min="0" max="5" value="0" tabindex="7"></input>'
		+'</div>'
		
		+'<div class="col-sm-12">'
		+'<label><b>Select no of PRV auto Valve</b></label>'
		+' <input class="form-select" id="prv" type="number" min="0" max="5" value="0" tabindex="8"></input>'
		+'</div>'
		
		+'<div class="col-sm-12">'
		+'<button type="button" class="btn btn-danger"  id="verifyInstr" style="margin-top:10px;width:100%" data-toggle="modal" data-target="#myModal1" tabindex="9">Verify Instrument </button>'
		
//		+'	  <!-- The Modal -->'
		+'  <div class="modal fade " id="myModal1">'
		+'    <div class="modal-dialog " id="modelDialog1">'
		+'	      <div class="modal-content">'
//		+'	        <!-- Modal Header -->'
		+'	        <div class="modal-header">'
		+'	          <h4 class="modal-title"><center id="modelTitle1"></center></h4>'
		+'	          <button type="button" class="close" data-dismiss="modal">&times;</button>'
		+'	        </div>'
//		+'	        <!-- Modal body -->'
		+'	        <div class="modal-body" id="modelBody1">'
		
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
		+'<button type="button" class="btn btn-danger"  id="nextLevel2" style="margin-top:10px;margin-bottom:10px;width:100%" tabindex="10" hidden>Next level</button>'
		+'</div>'
		
		+'</div>'
		
	$("#Selection").html(htm);
	
       var temp=0;
	  var totalComp1=0;
	   var flag=0;
	$("#verifyInstr").click(function(){
		instrActualCount++;
		 pi=parseInt($("#pi").val());
		 afr=parseInt($("#afr").val());
		 wgateway=parseInt($("#wgateway").val());
		 VTwaired=parseInt($("#vwired").val());
		 VTwireless=parseInt($("#vwireless").val());
		 PTwired=parseInt($("#ptwired").val());
		 PTwireless=parseInt($("#ptwireless").val());
		 prv=parseInt($("#prv").val());
		 
		
		 console.log(" pi "+pi);
		  console.log(" afr "+afr);
		  console.log(" wgateway "+wgateway);
		  console.log(" VTwireless "+VTwireless);
		  console.log(" PTwired "+PTwired);
		  console.log(" VTwaired "+VTwaired);
		  console.log(" PTwireless "+PTwireless);
		  console.log(" prv "+prv);
		 CountComp1();
		 
		  
		 
		  if(totalComp1==0 ||(pi==""||wgateway==""||afr==""||VTwireless==""||PTwired==""||PTwireless==""||prv=="" ||VTwaired=="")){
				$("#modelDialog1").addClass("modal-md");
				$("#modelTitle1").html("Error box");
				  $("#modelBody1").html("<b>Select Components</b> ");
				  $("#modelBody1").css("color","red");
		  }
		  else{
			  if(temp<3){
				  CountComp1();
			  }else {
				  if(flag==0){
					  $("#modelDialog1").addClass("modal-xl");
					  $("#modelTitle1").html("Required configuration ");
						htm=''
					  
						+'<div class="col-sm-12" >'
						+'<center>REQUIRED COMPONENTS</center>'
						+'</div>'
					  +'<div class="col-sm-12" >'
						+'<table class="table table-striped table-bordered">'
						+' <tbody>'
						+'    <tr class="table-dark text-dark">'
						+'     <td><center>Pressure transmitter wireless</center></td>'
						+'     <td><center>Pressure transmitter wired</center></td>'
						+'     <td><center>AFR</center></td>'
						+'     <td><center>PI</center></td>'
						+'     <td><center>PRV</center></td>'
						+'     <td><center>Wireless gateway</center></td>'
						+'     <td><center>vaccum transmitter wired</center></td>'
						+'     <td><center>vaccum transmitter wireless</center></td>'
						+'   </tr>'
						+'    <tr>'
						+'     <td><center>2</center></td>'
						+'     <td><center>7</center></td>'
						+'     <td><center>1</center></td>'
						+'     <td><center>1</center></td>'
						+'     <td><center>1</center></td>'
						+'     <td><center>1</center></td>'
						+'     <td><center>4</center></td>'
						+'     <td><center>1</center></td>'
						+'   </tr>'
					    +' </tbody>'
						+'</table>'
						+'</div>'
						+"<img src='images/Vacuum_P_and_Id.png' class='img-fluid' style='border-style: double;border-color: black;'>"
						 $("#modelBody1").html(htm);
						  $("#modelBody1").css("color","red"); 
				  }
				  else
					  {
					  CountComp1();
					  }
				
			  }
			  temp++;
		  }
	
	});
		  
	function CountComp1(){
		
		
		if((pi==StdPICount) && (wgateway==StdWirelessGatewayCount) && (afr==StdAFRCount) && (PTwired==StdPTWiredCount) && 
				(PTwireless==StdPTWirelessCount) && (VTwaired==StdVTWiredCount)&&( VTwireless==StdVTWirelessCount) &&(prv==StdPRVCount) ){
			$("#modelDialog1").removeClass("modal-xl");
			 $("#modelDialog1").addClass("modal-md");
			 $("#modelTitle1").html("Message box");
			 $("#modelBody1").html("<b>Click on 'Next level' button.</b>");
			$("#modelBody1").css("color","green");
			$("#pi,#wgateway,#vwired,#afr,#vwireless,#ptwired,#ptwireless,#prv,#verifyInstr").prop("disabled",true);
			addToMasterJson();
		
			flag=1;
			htm=''
				
				+'<div class="col-sm-12" >'
				+"<img src='images/Vacuum_P_and_Id.png' class='img-fluid' id='partB1' style=' width: 100px;height:100px;position: relative; margin: 20px;'  >"
				+'</div>'
			  $("#diagram").html(htm);
			  $("#partB1").animate(
			          {
			            width: "95%",
			            height: "100%",
			            left: "+=50px",
			          },
			          1000,
			          
			        );
				$("#nextLevel2").prop("hidden",false);
		}
		else{
			
			
			
			perAFRCount=parseFloat((afr*100)/StdAFRCount);
			perPICount=parseFloat((pi*100)/StdPICount);
			perWirelessGatewayCount=parseFloat((wgateway*100)/StdWirelessGatewayCount);
			perPTWirelessCount=parseFloat((PTwireless*100)/StdPTWirelessCount);
			perPTWiredCount=parseFloat((PTwired*100)/StdPTWiredCount);
			perVTWirelessCount=parseFloat((VTwireless*100)/StdVTWirelessCount);
			perVTWiredCount=parseFloat((VTwaired*100)/StdVTWiredCount);
			perPRVCount=parseFloat((prv*100)/StdPRVCount);
			
			 console.log(" perAFRCount "+perAFRCount);
			 console.log(" perPICount "+perPICount);
			 console.log(" perWirelessGatewayCount "+perWirelessGatewayCount);
			 console.log(" perPTWirelessCount "+perPTWirelessCount);
			 console.log(" perPTWiredCount "+perPTWiredCount);
			 console.log(" perVTWirelessCount "+perVTWirelessCount);
			 console.log(" perVTWiredCount "+perVTWiredCount);
			 console.log(" prv "+prv);
				totalComp1=perAFRCount+perPICount+perWirelessGatewayCount+perPTWirelessCount+perPTWiredCount+perVTWirelessCount+perVTWiredCount+perPRVCount;
			  avg=parseInt(totalComp1/8);
			  console.log(" avg "+avg);
			
				 $("#modelDialog1").removeClass("modal-xl");
				$("#modelDialog1").addClass("modal-md");
			
				if((pi>StdPICount) && (wgateway>StdWirelessGatewayCount) && (afr>StdAFRCount) && (PTwired>StdPTWiredCount) && 
						(PTwireless>StdPTWirelessCount) && (VTwireless>StdVTWiredCount)&&(VTwaired>StdVTWirelessCount) ){
					$("#modelBody1").css("color","red"); 
					$("#modelTitle1").html("Error box");
					$("#modelBody1").html("<b>More components than expected.</b>");
				}else
					{
						if(avg<100){
							$("#modelTitle1").html("Message box");
							$("#modelBody1").css("color","red");
							 $("#modelBody1").html("<b>"+avg+" % Correctness</b>");
								
						}else{
							$("#modelBody1").css("color","red");
							$("#modelTitle1").html("Error box");
							 $("#modelBody1").html("<b>More components than expected. </b>");
						}
					}
				
		}
		
	}
	function addToMasterJson()
	{
		tempMasterJsonInstr = {
				"totalComp":"18",
				"pressureTransmitterWireless":"2",
				"pressureTrasmitterWired":"7",
				"AFR":"1",
				"ARP":"1",
				"Vaccum_transmitter_wired":"4",
				"Vaccum_transmitter_wireless":"1",
				"wireless_gateway":"1",
				
				
				};
				
		InstrMasterJson.Instrument=tempMasterJsonInstr;
		console.log(InstrMasterJson);
		resultJson.instrument=instrActualCount;
		console.log(resultJson);
	}
	$("#nextLevel2").click(function(){
		if(flag==1){
			pressureVacuumsquActivities();
		}
	
	});
	
	
	
}


$("#simDemo").click(function () {

			 $("#modelDialog").removeClass("modal-md");
			 $("#modelDialog").addClass("modal-xl");
			htm=''
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
//					+'   <!-- Customer Requirements -->'
					+'<div class="tab-pane fade show active" id="customer1" role="tabpanel" aria-labelledby="customer-tab1">'
//					+'    <h2 class="tab-title">Customer Requirements</h2>'
					+'<b style="font-size:18px;">Customer Requirements: (Design and development of Pressure and Vacuum sensor calibration facility)</b><br>'
					+'   <p style="    font-size: 18px;">The customer intends to set-up a Pressure and Vacuum calibration facility which will test '
					+'flow sensors of following types as minimum requirement. For all the sensors the process connection will be either ½” NPT (F), '
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
					
//					+' <!-- Operational Requirements -->'
					+'  <div class="tab-pane fade" id="operation1" role="tabpanel" aria-labelledby="operation-tab1">'
//					+'   <h2 class="tab-title">Operational Requirements</h2>'
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
			$("#proStrBody").html(htm);
			
		});
			
$("#procedure2").click(function () {
	 $("#modelDialog").removeClass("modal-xl");
	 $("#modelDialog").addClass("modal-md");
//	$("#modalTitle").html("PROCEDURE");
	htm=''
		+' '
	$("#procedureBody").html(htm);
});
			$("#tagDetails").click(function () {
				 $("#modelDialog").removeClass("modal-xl");
				 $("#modelDialog").addClass("modal-md");
//				$("#modalTitle").html("PROCEDURE");
				var htm=''
				+'<table class="table table-bordered table-hover" style="font-size:larger;">'
					+' <thead>'
					+'<tr class="table-info">'
					+'<th>Tag</th>'
					+'<th>Tag Details</th>'
					+'</tr>'
					+'</thead>'
					+' <tbody>'
					+'<tr>'
					+'<td>CV</td>'
					+'<td>Butterfly Valve </td>'
					+'</tr>'
					+'<tr>'
					+'<td>S1</td>'
					+'<td>Piezoelectric sensor</td>'
					+'</tr>'
					+'<tr>'
					+'<td>S2</td>'
					+'<td>Strain Gauge type sensor</td>'
					+'</tr>'
					+'<tr>'
					+'<td>S3</td>'
					+'<td>Capacitive sensor </td>'
					+'</tr>'
					+'<tr>'
					+'<td>S4</td>'
					+'<td>Bourdon tube type sensor</td>'
					+'</tr>'
					+'<tr>'
					+'<td>S5</td>'
					+'<td>Bellow type sensor </td>'
					+'</tr>'
				
					+'</tbody>'
					+'</table>'
				$("#tagBody").html(htm);
			});
				
	
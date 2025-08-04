function Datasheet(){

	var htm=''
	 +' <div class="row">'

	 +' <!-- Tabs and Content Container -->'
	 +'  <ul class="nav nav-tabs" id="dynamicTabs" role="tablist"></ul>'
	 +'  <div class="tab-content" id="dynamicTabContent"></div>'
	 +'</div>'
	 +' <button id="generatePdf" class="btn btn-danger" style=" float: right; margin-top: 10px;">Download</button>'
	 
$("#datasheetBody").html(htm);


      // Clear existing tabs and content
      $('#dynamicTabs').empty();
      $('#dynamicTabContent').empty();

      for (let i = 0; i < dataAr.length; i++) {
    	  // Add tab
    	  const activeClass = i === 0 ? 'active' : ''; // Activate the first tab
    	  const tabItem = `
    	    <li class="nav-item" role="presentation">
    	      <button class="nav-link ${activeClass}" id="tab-${i}" data-bs-toggle="tab" data-bs-target="#content-${i}" type="button" role="tab">
    	        Test cycle - ${i + 1}
    	      </button>
    	    </li>`;
    	  $('#dynamicTabs').append(tabItem);

    	  // Generate table rows dynamically
    	  let rows = ` `;
    	  for (let j = 0; j < dataAr[i].data.length; j++) {
    	    rows += `
    	      <tr>
    	        <td>${j + 1}</td>
    	        <td>${dataAr[i].data[j].s1}</td>
    	        <td>${dataAr[i].data[j].s2}</td>
    	        <td>${dataAr[i].data[j].s3}</td>
    	        <td>${dataAr[i].data[j].s4}</td>
    	        <td>${dataAr[i].data[j].s5}</td>
    	        <td>${dataAr[i].data[j].s6}</td>
    	        <td>${dataAr[i].data[j].s7}</td>
    	        <td>${dataAr[i].data[j].s8}</td>
    	         <td>${dataAr[i].data[j].s9}</td>
    	      </tr>`;
    	  }

    	  // Add tab content
    	  const tabContent = `
    	    <div class="tab-pane fade ${activeClass ? 'show active' : ''}" id="content-${i}" role="tabpanel">
    	      <table class="table table-bordered mt-3"  style="overflow-y: auto; overflow-x: auto;">
    	        <thead>
    	          <tr>
    	            <th>Sr no</th>
    	            <th>S1</th>
    	            <th>S2</th>
    	            <th>S3</th>
    	            <th>S4</th>
    	            <th>S5</th>
    	            <th>S6</th>
    	            <th>S7</th>
    	            <th>S8</th>
    	            <th>S9</th>
    	          </tr>
    	        </thead>
    	        <tbody>
    	          ${rows}
    	        </tbody>
    	      </table>
    	    </div>`;
    	  $('#dynamicTabContent').append(tabContent);
    	}
      
      
      
      document.getElementById('generatePdf').addEventListener('click', function () {
    	    const { jsPDF } = window.jspdf; // Access jsPDF library
    	    const doc = new jsPDF();

    	    const tables = document.querySelectorAll('#dynamicTabContent .table'); // Select all tables
    	    tables.forEach((table, index) => {
    	      if (index > 0) {
    	        doc.addPage(); // Add a new page for each table after the first
    	      }
    	      doc.autoTable({
    	        html: table, // Generate PDF table from HTML table
    	        theme: 'grid', // Optional: Table styling (striped, grid, plain)
    	        startY: 10, // Starting Y position
    	        margin: { top: 10, bottom: 10 }, // Optional margins
    	      });
    	    });

    	    doc.save('Flow_sensor_test_cycles.pdf'); // Download the generated PDF
    	  });
}
	

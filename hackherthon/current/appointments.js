// JSON data
const appointmentData = [
  {
    "id": "1",
    "patientName": "John Doe",
    "userName": "johndoe123",
    "date": "2024-03-05T10:00:00Z",
    "visitDate": "2024-03-10T09:30:00Z",
    "clinicId": "clinic123",
    "clinicName": "City Clinic",
    "doctor": {
      "name": "Dr. Smith",
      "specialty": "Cardiology"
    },
    "appointmentType": "Upcoming",
    "tokenNumber": 123,
    "mode": "online"
  },
  {
    "id": "2",
    "patientName": "Alice Johnson",
    "userName": "alice123",
    "date": "2024-03-05T11:00:00Z",
    "visitDate": "2024-03-15T11:15:00Z",
    "clinicId": "clinic456",
    "clinicName": "Community Health Center",
    "doctor": {
      "name": "Dr. Brown",
      "specialty": "Pediatrics"
    },
    "appointmentType": "Completed",
    "tokenNumber": 456,
    "mode": "offline"
  }
];


  // Function to generate HTML for each item in the JSON data
  function generateHTML(data, changeDoc) {
    // Iterate through each appointment object in the data array
    data.forEach(item => {
        // Create a new table row
        const tr = changeDoc.createElement('tr');

        // Create table data cells for each property
        const tdTokenNumber = changeDoc.createElement('td');
        tdTokenNumber.textContent = item.tokenNumber;
        tr.appendChild(tdTokenNumber);

        const tdVisitDate = changeDoc.createElement('td');
        tdVisitDate.textContent = new Date(item.visitDate).toLocaleString();
        tr.appendChild(tdVisitDate);

        const tdPatientName = changeDoc.createElement('td');
        tdPatientName.textContent = item.patientName;
        tr.appendChild(tdPatientName);

        const tdDoctorName = changeDoc.createElement('td');
        tdDoctorName.textContent = item.doctor.name;
        tr.appendChild(tdDoctorName);

        const tdStatus = changeDoc.createElement('td');
        // Check the appointmentType property and create a button accordingly
        if (item.appointmentType === 'Upcoming') {
            const button = changeDoc.createElement('button');
            button.textContent = 'Take Action';
            // Add event listener or any other properties you need for the button
            tdStatus.appendChild(button);
        } else {
            tdStatus.textContent = item.appointmentType;
        }
        tr.appendChild(tdStatus);

        // Append the table row to your table
        const table = changeDoc.querySelector('table');
        table.appendChild(tr);
    });
}


  // Function to render the generated HTML to the DOM
  function renderData() {
    const tableBody = document.getElementById('data-body');
    generateHTML(appointmentData,tableBody);
  }

  // Render the data when the page loads
  document.addEventListener('DOMContentLoaded', renderData);
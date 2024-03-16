 // JSON data
 const jsonData = [
  {
      "name": "John Doe",
      "date": "01-5-2022",
      "status": "Offline",
      "reason": "General checkup"
  },
  {
      "name": "Pranav",
      "date": "01-10-2023",
      "status": "Online",
      "reason": "Fracture",

  }
];

// Function to generate HTML for each item in the JSON data
function generateHTML(data) {
  return data.map(item => `
      <tr>
          <td>
              <img src="boy.png">
              <p>${item.name}</p>
          </td>
          <td>${item.date}</td>
          <td><span class="status ${item.status.toLowerCase()}">${item.status}</span></td>
          <td>${item.reason}</td>
      </tr>
  `).join('');
}

// Function to render the generated HTML to the DOM
function renderData() {
  const tableBody = document.getElementById('data-body');
  tableBody.innerHTML = generateHTML(jsonData);
}

// Render the data when the page loads
document.addEventListener('DOMContentLoaded', renderData);
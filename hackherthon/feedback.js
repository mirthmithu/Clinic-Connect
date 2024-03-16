const appointmentData = 
[
  {
    "Name": "johndoe",
    "specialist": "Skin care",
    "comments": "good",
    
  },
  {
    "Name": "Eiser john",
    "specialist": "dentist",
    "comments": "satisfactary",
  },
  { "Name": "johndoe123",
  "specialist": "Skin care",
  "comments": "good",
}
];
function generateHTML(data) {
    return data.map(item => `
<div class="review">
<div class="body-review">
    <div class="name-review">${item.Name}</div>
    <div class="place-review">${item.specialist}</div>
    <div class="rating">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half-alt"></i> 
    </div>
    <div class="desc-review">${item.comments}</div>
</div>
</div>
`).join('');
}

// Function to render the generated HTML to the DOM
function renderData() {
    const reviewContainer = document.querySelector('.reviews');
    reviewContainer.innerHTML = generateHTML(appointmentData);
}

// Render the data when the page loads
document.addEventListener('DOMContentLoaded', renderData);
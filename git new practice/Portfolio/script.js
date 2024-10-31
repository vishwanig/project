// Smooth Scroll for Navigation Links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Scroll to Top Button Visibility
window.onscroll = function() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
};

// Scroll to Top Functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Modal for Project Details
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modal-body');

function showProjectDetails(projectId) {
    modal.style.display = 'flex';
    let content = '';

    if (projectId === 'project1') {
        content = `<h3>OTT Movies</h3>
        <img src="my pic1.png" alt="OTT Movies" style=" width: 250px;
    border-radius: 10px;
    margin-top: 1rem;"> 
    <p>Developed a dynamic UI for OTT Movies platform with impressive templates containg different language movies by using html,css and JavaScript.</p>`;
    } else if (projectId === 'project2') {
        content = `<h3>Yoga Tracker</h3>  
        <img src="pic 2.png" alt="Yoga Tracker" style=" width: 250px;
    border-radius: 10px;
    margin-top: 1rem;"> 
    <p>Created a Yoga Tracker to shedule the yoga timings with impressive templates that containas different yoga types and briefly describes about the kind of yoga.</p>`;
    }
    modalBody.innerHTML = content;
}

function closeModal() {
    modal.style.display = 'none';
}

// Close Modal when Clicking Outside
window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
};
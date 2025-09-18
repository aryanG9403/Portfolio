document.addEventListener('DOMContentLoaded' , ()=>{
    const navLinks  = document.querySelectorAll('header a[href^="#"],#home a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
        // 1. Select the button
    const backToTopButton = document.querySelector("#back-to-top-btn");

    // 2. Add a scroll event listener to the window
    window.addEventListener("scroll", () => {
        // If user has scrolled down more than 300px
        if (window.scrollY > 700) {
            // Add the 'show' class to the button
            backToTopButton.classList.add("show");
        } else {
            // Otherwise, remove the 'show' class
            backToTopButton.classList.remove("show");
        }
    });

    // 3. Add a click event listener to the button
    backToTopButton.addEventListener("click", (event) => {
        event.preventDefault(); // Stop the default # jump
        // Scroll to the top of the page smoothly
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // --- COMPLETE CONTACT FORM SCRIPT (for Netlify) ---

const form = document.querySelector("#contact-form");

if (form) {
    const formStatus = document.querySelector("#form-status");
    
    // A helper function to encode the form data
    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Run your validation checks
        const name = form.elements.name.value.trim();
        const email = form.elements.email.value.trim();
        const message = form.elements.message.value.trim();
        if (name === "" || email === "" || message === "") {
            displayMessage("Please fill out all fields.", false);
            return;
        }

        // If validation passes, create the form data object
        const formData = {
            'form-name': form.getAttribute('name'),
            'name': name,
            'email': email,
            'message': message
        };

        // Submit the form data to Netlify
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode(formData)
        })
        .then(() => {
            displayMessage("Thanks for your message! I'll get back to you soon.", true);
            form.reset();
        })
        .catch(error => {
            displayMessage("Oops! There was a problem submitting your form.", false);
        });
    });

    function displayMessage(message, isSuccess) {
        formStatus.innerHTML = message;
        formStatus.style.color = isSuccess ? 'var(--accent-color)' : 'red';
    }
}

    const myProjects = [
        {
            title: "Portfolio Website",
            description: "The very site you're on now, built with HTML, CSS, and interactive JavaScript features.",
            imageUrl: "path/to/your/project-image1.jpg", // Replace with a real image path
            liveLink: "https://aryanbuilds.netlify.app", // You can't link to the live site yet, but can for others
            codeLink: "https://github.com/aryanG9403/Portfolio" // Replace with your GitHub link
        },
        {
            title: "Another Cool Project",
            description: "Describe your second project here. What technologies did you use?",
            imageUrl: "path/to/your/project-image2.jpg",
            liveLink: "https://project-two-live-demo.com", // Replace with your live demo link
            codeLink: "https://github.com/aryanG9403/Teamsync"
        }
        // Add more project objects here as needed
    ];
    const projectsContainer = document.querySelector(".projects-container");

    if(projectsContainer){
        myProjects.forEach(project => {//here the project is each object in the array
           //create a div for each project
            const projectCard =document.createElement('div');
            projectCard.className = 'project-card'; //Adds a className to the div so as to apply CSS

            projectCard.innerHTML = `
              <img src ="${project.imageUrl}" alt = "${project.title} screenshot">
              <h3>${project.title}</h3>
              <p>${project.description}</p>
              <div class="project-links">
                  <a href="${project.liveLink}" target="_blank" class="btn btn-secondary">Live Demo</a>
                  <a href="${project.codeLink}" target="_blank" class="btn btn-secondary">Source Code</a>
              </div>
            `;
            projectsContainer.appendChild(projectCard);
        })
    }
   // Hamburger Menu Toggle
// In your script.js file
// --- COMPLETE HAMBURGER MENU SCRIPT ---

const hamburger = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".main-nav");
const navl = document.querySelectorAll(".main-nav a");
let menuTimer;

// Logic for clicking the HAMBURGER BUTTON
hamburger.addEventListener("click", () => {
    // Always clear any existing timer when the button is clicked
    clearTimeout(menuTimer);

    // Toggle the menu's active state
    navMenu.classList.toggle("is-active");

    // Check if the menu is now open
    if (navMenu.classList.contains("is-active")) {
        // If open, change icon to 'X'
        hamburger.innerHTML = '&times;';

        // Set a timer to close the menu after 5 seconds (5000 milliseconds)
        menuTimer = setTimeout(() => {
            navMenu.classList.remove("is-active");
            hamburger.innerHTML = '&#9776;'; // Change icon back to hamburger
        }, 5000);

    } else {
        // If closed, change icon back to hamburger
        hamburger.innerHTML = '&#9776;';
    }
});

// Logic for clicking a LINK INSIDE THE MENU
navl.forEach(link => {
    link.addEventListener("click", () => {
        // Immediately close the menu
        navMenu.classList.remove("is-active");
        // Reset the hamburger icon
        hamburger.innerHTML = '&#9776;';
        // Cancel the auto-close timer
        clearTimeout(menuTimer);
    });
});
});

    

const API_URL = "http://localhost:3000/jobs";

let jobs = [];

// Load jobs from backend
async function loadJobs() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Failed to fetch jobs");
        }

        jobs = await response.json();

        displayJobs(jobs);

    } catch (error) {
        console.error("Error loading jobs:", error);
    }
}

// Display jobs
function displayJobs(jobList) {

    const container = document.querySelector(".job-container");

    if (!container) return;

    container.innerHTML = "";

    jobList.forEach(job => {

        container.innerHTML += `
            <div class="job-card">

                <h3>${job.title}</h3>

                <p><strong>Company:</strong> ${job.company}</p>

                <p><strong>Location:</strong> ${job.location}</p>

                <p><strong>Type:</strong> ${job.type}</p>

                <p><strong>Salary:</strong> ${job.salary}</p>

                <p><strong>Skills:</strong> ${job.skills.join(", ")}</p>

                <button>Apply Now</button>

            </div>
        `;

    });

}

// Search jobs
function searchJob() {

    const searchValue = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    if (searchValue === "") {
        displayJobs(jobs);
        return;
    }

    const filteredJobs = jobs.filter(job =>
        job.title.toLowerCase().includes(searchValue) ||
        job.company.toLowerCase().includes(searchValue) ||
        job.skills.join(" ").toLowerCase().includes(searchValue)
    );

    displayJobs(filteredJobs);

}

document.addEventListener("DOMContentLoaded", loadJobs);
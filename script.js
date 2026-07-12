const API_URL = "http://localhost:3000/jobs";

let jobs = [];

// Load all jobs
async function loadJobs() {

    const container = document.querySelector(".job-container");

    if (!container) return;

    container.innerHTML = "<h3>Loading Jobs...</h3>";

    try {

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Unable to fetch jobs.");
        }

        jobs = await response.json();

        displayJobs(jobs);

    } catch (error) {

        console.error(error);

        container.innerHTML = `
            <h3>Unable to load jobs.</h3>
            <p>Please make sure the backend server is running.</p>
        `;

    }

}

// Display jobs
function displayJobs(jobList) {

    const container = document.querySelector(".job-container");

    container.innerHTML = "";

    if (jobList.length === 0) {

        container.innerHTML = "<h3>No jobs found.</h3>";

        return;

    }

    jobList.forEach(job => {

        container.innerHTML += `

        <div class="job-card">

            <h3>${job.title}</h3>

            <p><strong>Company:</strong> ${job.company}</p>

            <p><strong>Location:</strong> ${job.location}</p>

            <p><strong>Type:</strong> ${job.type}</p>

            <p><strong>Salary:</strong> ${job.salary}</p>

            <p><strong>Skills:</strong> ${job.skills.join(", ")}</p>

            <button onclick="applyJob('${job.title}')">
                Apply Now
            </button>

        </div>

        `;

    });

}

// Search
function searchJob() {

    const value = document
        .getElementById("searchInput")
        .value
        .trim()
        .toLowerCase();

    if (value === "") {

        displayJobs(jobs);

        return;

    }

    const filtered = jobs.filter(job =>

        job.title.toLowerCase().includes(value) ||

        job.company.toLowerCase().includes(value) ||

        job.location.toLowerCase().includes(value) ||

        job.skills.join(" ").toLowerCase().includes(value)

    );

    displayJobs(filtered);

}

// Apply button
function applyJob(jobTitle) {

    alert(`Application submitted for ${jobTitle}!`);

}

// Load data
document.addEventListener("DOMContentLoaded", loadJobs);
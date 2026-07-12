const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let jobs = [
    {
        id: 1,
        title: "Frontend Developer Intern",
        company: "Google",
        location: "Bangalore",
        type: "Internship",
        salary: "₹30,000/month",
        skills: ["HTML", "CSS", "JavaScript"]
    },
    {
        id: 2,
        title: "Backend Developer",
        company: "Amazon",
        location: "Pune",
        type: "Full Time",
        salary: "₹10 LPA",
        skills: ["Node.js", "Express.js", "MongoDB"]
    },
    {
        id: 3,
        title: "Data Analyst",
        company: "Microsoft",
        location: "Hyderabad",
        type: "Full Time",
        salary: "₹8 LPA",
        skills: ["Python", "SQL", "Power BI", "Excel"]
    },
    {
        id: 4,
        title: "Full Stack Developer",
        company: "Infosys",
        location: "Bangalore",
        type: "Full Time",
        salary: "₹7 LPA",
        skills: ["HTML", "CSS", "JavaScript", "Node.js"]
    },
    {
        id: 5,
        title: "Software Engineer Intern",
        company: "TCS",
        location: "Nagpur",
        type: "Internship",
        salary: "₹25,000/month",
        skills: ["Java", "Spring Boot", "SQL"]
    },
    {
        id: 6,
        title: "Cloud Engineer",
        company: "Accenture",
        location: "Mumbai",
        type: "Full Time",
        salary: "₹9 LPA",
        skills: ["Azure", "AWS", "Linux"]
    }
];

// Home Route
app.get("/", (req, res) => {
    res.send("🚀 CareerConnect API is Running...");
});

// Get All Jobs
app.get("/jobs", (req, res) => {
    res.json(jobs);
});

// Get Job By ID
app.get("/jobs/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const job = jobs.find(j => j.id === id);

    if (!job) {
        return res.status(404).json({
            message: "Job not found"
        });
    }

    res.json(job);

});

// Add New Job
app.post("/jobs", (req, res) => {

    const {
        title,
        company,
        location,
        type,
        salary,
        skills
    } = req.body;

    if (
        !title ||
        !company ||
        !location ||
        !type ||
        !salary ||
        !skills
    ) {

        return res.status(400).json({
            message: "Please fill all required fields."
        });

    }

    const newJob = {

        id: jobs.length + 1,

        title,

        company,

        location,

        type,

        salary,

        skills

    };

    jobs.push(newJob);

    res.status(201).json({

        message: "Job Added Successfully",

        job: newJob

    });

});

// Delete Job
app.delete("/jobs/:id", (req, res) => {

    const id = parseInt(req.params.id);

    jobs = jobs.filter(job => job.id !== id);

    res.json({

        message: "Job deleted successfully."

    });

});

// Start Server
app.listen(PORT, () => {

    console.log(`🚀 Server running on http://localhost:${PORT}`);

});
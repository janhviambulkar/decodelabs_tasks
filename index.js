const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("🚀 DecodeLabs Student Portal API is Running");
});

app.get("/student", (req, res) => {

    res.json({

        name: "Janhvi Ambulkar",

        college: "KDK College of Engineering",

        course: "B.Tech Computer Science & Engineering",

        internship: "DecodeLabs",

        year: "Third Year",

        cgpa: "8.99",

        email: "janhvi@example.com",

        skills: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Node.js",
            "Express.js",
            "REST API",
            "Git",
            "GitHub"
        ]

    });

});

app.listen(PORT, () => {

    console.log(`🚀 Server running at http://localhost:${PORT}`);

});
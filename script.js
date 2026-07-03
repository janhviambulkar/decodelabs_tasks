async function getStudent() {

    try {

        const response = await fetch("http://localhost:3000/student");

        if (!response.ok) {
            throw new Error("Server response was not OK");
        }

        const data = await response.json();

        document.getElementById("studentData").innerHTML = `

        <div class="student-card">

            <h2>👩 ${data.name}</h2>

            <hr>

            <p><strong>🎓 College :</strong> ${data.college}</p>

            <p><strong>💻 Course :</strong> ${data.course}</p>

            <p><strong>🏢 Internship :</strong> ${data.internship}</p>

            <p><strong>📅 Year :</strong> ${data.year}</p>

            <p><strong>⭐ CGPA :</strong> ${data.cgpa}</p>

            <p><strong>📧 Email :</strong> ${data.email}</p>

            <p><strong>🛠 Skills :</strong></p>

            <ul>

                ${data.skills.map(skill => `<li>${skill}</li>`).join("")}

            </ul>

        </div>

        `;

    }

    catch (error) {

        console.error(error);

        document.getElementById("studentData").innerHTML = `

        <h2 style="color:red">

        Unable to connect to server.

        </h2>

        `;

    }

}
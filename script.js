document.getElementById("surveyForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const surveyResponse = `
        **Survey Response**
        - Will you respect the developers? ${formData.get("respect")}
        - Will you wear gear? ${formData.get("wearGear")}
        - Roblox Username: ${document.getElementById("robloxUsername").value}
        - Will you join the group and Discord server? ${formData.get("joinGroup")}
        - Discord Username: ${document.getElementById("discordUsername").value || "Not Provided"}
    `;

    const webhookUrl = "https://discord.com/api/webhooks/1312656345119457280/84dLSGe3-BasCUO0uC7TCA-YPY35fDSQXGRZ4S4LWoQLye8Hq53OlU70_oIZcOaLnRSB";

    await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: surveyResponse }),
    });

    alert("Survey submitted successfully!");
});
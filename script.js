async function getAiTest(language, level) {
  const response = await fetch("https://ai-language-backend.onrender.com/generate-test", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ language, level })
  });

  const data = await response.json();
  document.getElementById("test-output").innerText = data.test;
}

// Form yuborilganda chaqiriladi
document.getElementById("test-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const language = document.getElementById("language").value;
  const level = document.getElementById("level").value;
  getAiTest(language, level);
});

const form = document.getElementById("urlshorten-form");
const input = document.getElementById("url");
const result = document.getElementById("result");
const error = document.getElementById("error");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  error.textContent = "";
  result.innerHTML = "";

  const url = input.value;

  const response = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url: url }),
  });

  const data = await response.json();

  if (!response.ok) {
    error.textContent = data.error;
  } else {
    const fullUrl = window.location.origin + data.short_url;
    result.innerHTML = `Shortened URL is <a href="${fullUrl}" target="_blank">${fullUrl}</a>`;
  }
});

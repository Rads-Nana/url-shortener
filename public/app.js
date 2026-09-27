const form = document.getElementById("urlshorten-form");
const input = document.getElementById("url");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const url = input.value;

  const response = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url: url }),
  });

  const data = await response.json();

  console.log(data);
});

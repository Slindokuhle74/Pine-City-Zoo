const form = document.getElementById("feedback");
const thankYou = document.getElementById("thank-you");

form.addEventListener("submit", function (event) {
  event.preventDefault(); 
  
  const name = document.getElementById("name").value;
  const feedback = document.getElementById("feedback").value;
  console.log("Feedback from", name + ":", feedback);

  
  form.reset();
  thankYou.style.display = "block";
});

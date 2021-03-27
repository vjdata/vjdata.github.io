---
layout: default
---

# We Offer
* Development of websites
* Development of customized software
* Maintenance of existing systems
* Technical troubleshooting

We want to help you find solutions to your IT issues.

# Contact Us
<form id="my-form" action="https://formspree.io/f/xayawaae" method="POST">
  <label>Name:</label>
  <input type="text" name="name" /><br>
  <label>Email:</label>
  <input type="email" name="email" /><br>
  <label>Message:</label>
  <input type="text" name="message" /><br>
  <button id="my-form-button" class="btn">Submit</button>
  <p id="my-form-status"></p>
</form>

<script>
    var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Thanks for your submission!";
        form.reset()
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)
</script>

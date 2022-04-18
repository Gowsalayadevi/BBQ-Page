let emailCollectorForm = document.getElementById("email-collector");
emailCollectorForm.addEventListener("submit",event=>{
    event.preventDefault();
    let ourFormData = new FormData(event.target);
     let userFirstName= ourFormData.get("firstName");
     let userEmail = ourFormData.get("emailAddress");
     let UpdatedHtmlContent = 
     ` 
     <h2>Congratulations,${userFirstName}!</h2>
     <p>You're on your way to becoming a BBQ Master!!</p>
     <p class="fine-print">We'll get our weeekly BBQ tips sent to ${userEmail}</p>
     `
     let mainContent = document.getElementById("main-content");
     mainContent.innerHTML = UpdatedHtmlContent;
})
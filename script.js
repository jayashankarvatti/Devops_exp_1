document.getElementById("registrationForm").addEventListener("submit",function(e){
    e.preventDefault();

    //Simulating successfull registration
    const successMessage = document.getElementById("successMessage");
    successMessage.classList.remove("hidden");

    //Resetting the form
    this.reset();
});
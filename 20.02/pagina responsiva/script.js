 const btnContact = document.getElementById("btn-contact");
    const modalContact = document.getElementById("modal-contact");
    const closeModal = document.getElementById("close-modal");

 
    btnContact.addEventListener("click", function (e) {
        e.preventDefault(); 
        modalContact.style.display = "flex";
    });

   
    closeModal.addEventListener("click", function () {
        modalContact.style.display = "none";
    });

    
    window.addEventListener("click", function (e) {
        if (e.target === modalContact) {
            modalContact.style.display = "none";
        }
    });


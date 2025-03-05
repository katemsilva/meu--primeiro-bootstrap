function toggleContact(event) {
    if (event) event.preventDefault();
    const contactSection = document.getElementById("contact-info");
    const overlay = document.getElementById("overlay");
    const isVisible = contactSection.style.display === "block";
    contactSection.style.display = isVisible ? "none" : "block";
    overlay.style.display = isVisible ? "none" : "block";
}

function atualizarCidades() {
    const estado = document.getElementById("estado").value;
    const cidadeSelect = document.getElementById("cidade");
    cidadeSelect.innerHTML = '<option value="">Selecione sua Cidade</option>';
    
    const cidades = {
        "SP": ["São Paulo", "Campinas", "Santos"],
        "RJ": ["Rio de Janeiro", "Niterói", "Petrópolis"],
        "MG": ["Belo Horizonte", "Uberlândia", "Juiz de Fora"],
        "SC": ["Joinville", "Florianópolis", "Blumenau"]
    };
    
    if (cidades[estado]) {
        cidades[estado].forEach(cidade => {
            const option = document.createElement("option");
            option.value = cidade;
            option.textContent = cidade;
            cidadeSelect.appendChild(option);
        });
    }
}

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("notification").style.display = "block";
    setTimeout(() => {
        document.getElementById("notification").style.display = "none";
    }, 3000);
    toggleContact();
});

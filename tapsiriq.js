document.getElementById("daxilolBtn").addEventListener("click", validateInputs);

function validateInputs() {
  const ad = document.getElementById("ad").value;
  const soyad = document.getElementById("soyad").value;
  const gmail = document.getElementById("gmail").value;
  const sifre = document.getElementById("sifre").value;

  if (ad.length < 8 || soyad.length < 8) {
    alert("Ad ve soyad en az 8 herif olmalıdır.");
    return;
  }

  if (!gmail.includes("@com")) {
    alert("Gmail adresi @gmail.com olmalidir.");
    return;
  }

  if (sifre[0] !== sifre[0].toUpperCase()) {
    alert("Sifreniz yalnisdir.");
    return;
  }

}
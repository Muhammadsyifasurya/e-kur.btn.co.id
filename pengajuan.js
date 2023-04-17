const form = document.querySelector(".form-container");
const steps = [...document.querySelectorAll(".step")];
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const submitButton = document.getElementById("submit");
const circles = [...document.querySelectorAll(".circle")];

let currentStep = 0;

nextButton.addEventListener("click", handleNextClick);
prevButton.addEventListener("click", handlePrevClick);

updateStep();
updateButtons();
updateProgress();

function submit(namaLengkap, email, pekerjaan, nomorKtp) {
  alert(
    "Data berhasil disimpan\n" +
      "Nama anda : " +
      namaLengkap +
      "\n" +
      "Email anda : " +
      email +
      "\n" +
      "Pekerjaan anda : " +
      pekerjaan +
      "\n" +
      "Nomor KTP : " +
      nomorKtp +
      "\n"
  );
}

function updateProgress() {
  circles.forEach((circle, index) => {
    if (index < currentStep + 1) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".circle.active");
  const progress = ((actives.length - 1) / (circles.length - 1)) * 100;
  document.querySelector(".indicator").style.width = `${progress}%`;
}

function updateButtons() {
  if (currentStep === 0) {
    prevButton.disabled = true;
  } else if (currentStep === steps.length - 1) {
    nextButton.disabled = true;
  } else {
    prevButton.disabled = false;
    nextButton.disabled = false;
  }
}

function updateStep() {
  steps.forEach((step, index) => {
    if (index === currentStep) {
      step.style.display = "block";
    } else {
      step.style.display = "none";
    }
  });
}

function updateConfirmation() {
  const namaLengkap = document.getElementById("nama-lengkap").value;
  const nomorKtp = document.getElementById("nomor-ktp").value;
  const email = document.getElementById("email").value;
  const pekerjaan = document.getElementById("pekerjaan").value;
  // const username = document.getElementById("username").value;

  document.getElementById("konfirmasi-nama").innerHTML = namaLengkap;
  document.getElementById("konfirmasi-email").innerHTML = email;
  document.getElementById("konfirmasi-pekerjaan").innerHTML = pekerjaan;
  document.getElementById("konfirmasi-ktp").innerHTML = nomorKtp;

  submitButton.addEventListener("click", submit);
  submit(namaLengkap, email, pekerjaan, nomorKtp);
}

function handleNextClick(event) {
  event.preventDefault();
  currentStep += 1;
  updateStep();
  updateButtons();
  updateProgress();
  if (currentStep === steps.length - 1) {
    updateConfirmation();
  }
}

function handlePrevClick(event) {
  event.preventDefault();
  currentStep -= 1;
  updateStep();
  updateButtons();
  updateProgress();
}

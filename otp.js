function sendOTP() {
  const email = document.getElementById('email');
  const otpvalid = document.getElementsByClassName('otp-valid')[0];

  let otp_value = Math.floor(Math.random() * 10000);
  let emailbody = `<h2>Your OTP </h2>${otp_value}`;

  Email.send({
    SecureToken: "13c7d98f-e420-4304-94b6-fcbd117a9890",
    To: email.value,
    From: "qasimkhattak209@gmail.com",
    Subject: "OTP using Javascript",
    Body: emailbody,
  }).then((message) => {
    if (message === "OK") {
      alert("OTP send to your Email " + email.value);
      otpvalid.style.display = "flex";

      const otp_input = document.getElementById('otp_input');
      const otp_btn = document.getElementById('otp_btn');

      otp_btn.addEventListener("click", () => {
        if (otp_input.value == otp_value) {
          alert("Email address verified....");
        } else {
          alert("Enter Valid OTP Please");
        }
      })
    }
  });
}

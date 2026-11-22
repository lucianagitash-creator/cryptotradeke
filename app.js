
document.addEventListener("DOMContentLoaded", function () {

  // Automatically update the copyright year
  const footerText = document.querySelector("footer p");

  if (footerText) {
    footerText.textContent =
      `© ${new Date().getFullYear()} CryptoTrade KE. All rights reserved.`;
  }

  // Add a welcome message in the browser console
  console.log("Welcome to CryptoTrade KE!");

});

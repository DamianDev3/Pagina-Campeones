
document.addEventListener("DOMContentLoaded", () => {
  const campeonesMiniLogo = document.getElementById("campeonesminiLogo");
  window.addEventListener("scroll",() => {
    if (window.scrollY >= 50)
    {
    campeonesMiniLogo.classList.remove("opacity-0", "pointer-events-none");
    campeonesMiniLogo.classList.add("opacity-100");
    } else
    {
    campeonesMiniLogo.classList.remove("opacity-100");
    campeonesMiniLogo.classList.add("opacity-0", "pointer-events-none");
    }
  })
});

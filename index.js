// WhatsApp order buttons
let whatsappNumber = "2347019236731";

const orderButtons = document.querySelectorAll(".order-btn");
if (orderButtons.length > 0) {
  orderButtons.forEach(button => {
    button.addEventListener("click", () => {
      const productName = button.getAttribute("data-product");
      const message = `Hi! I want to order: ${productName}`;
      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    });
  });
}

// Reveal animation
function luxuryReveal() {
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    const triggerPoint = window.innerHeight * 0.85;
    if (rect.top < triggerPoint) {
      el.classList.add("active");
    }
  });
}
window.addEventListener("scroll", luxuryReveal);
window.addEventListener("load", luxuryReveal);

// Order Form
const sendOrderBtn = document.getElementById("sendOrderBtn");
if (sendOrderBtn) {
  sendOrderBtn.addEventListener("click", function () {
    const orderText = document.getElementById("orderInput").value.trim();
    if (!orderText) return alert("Please enter your order before sending.");

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(orderText)}`;
    window.open(url, "_blank");
  });
}

const contactBtn = document.getElementById("contactBtn");
if (contactBtn) {
  contactBtn.addEventListener("click", function () {
    const message = "Hello, I’d like to make an enquiry.";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
  });
}

// Filter System
// 
(function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const productCards = document.querySelectorAll(".product-card");

  if (!filterButtons.length || !productCards.length) return;

  function applyFilter(value) {
    const filter = value.toLowerCase();

    productCards.forEach(card => {
      const cat = (card.dataset.category || "").toLowerCase();

      if (filter === "all" || cat === filter) {
        // SHOW CARD
        card.style.display = "block";   // Return it to layout
        setTimeout(() => {
          card.classList.remove("hide"); // Fade in
        }, 10);
      } else {
        // HIDE CARD
        card.classList.add("hide"); // Fade out
        setTimeout(() => {
          card.style.display = "none"; // Remove from layout after fade
        }, 300); // must match CSS transition timing
      }
    });
  }

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.dataset.filter || btn.textContent;
      applyFilter(filterValue);
    });
  });

  const activeBtn = document.querySelector(".filter-btn.active");
  applyFilter(activeBtn ? activeBtn.textContent : "all");
})();

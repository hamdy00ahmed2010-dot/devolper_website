
"use strict";

// ==================================
// 1. YOUR PERSONAL INFORMATION
// ==================================

// اكتب رقم واتساب الخاص بك بدل الرقم التجريبي.
// استخدم كود الدولة بدون + أو مسافات.
// مثال مصري: 201012345678

const WHATSAPP_NUMBER = "201550344130";

// ==================================
// 2. MOBILE NAVIGATION
// ==================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  // Close the menu when a navigation link is clicked
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");

      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");

      menuToggle.textContent = "☰";
    });
  });
}

// ==================================
// 3. AUTOMATIC COPYRIGHT YEAR
// ==================================

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// ==================================
// 4. WHATSAPP CONTACT
// ==================================

const whatsappLink = document.getElementById("whatsappLink");

if (whatsappLink) {
  const message =
    "Hello Hamdy! I visited your portfolio and would like to discuss a website project.";

  const cleanNumber = WHATSAPP_NUMBER.replace(/\D/g, "");

  whatsappLink.href =
    `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

// ==================================
// 5. ACTIVE NAVIGATION LINK
// ==================================

const sections = document.querySelectorAll(
  "main section[id]"
);

const navigationLinks = document.querySelectorAll(
  ".nav-links a"
);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navigationLinks.forEach((link) => {
            const isActive =
              link.getAttribute("href") ===
              `#${entry.target.id}`;

            link.classList.toggle("active", isActive);
          });
        }
      });
    },
    {
      rootMargin: "-20% 0px -65% 0px"
    }
  );

  sections.forEach((section) => observer.observe(section));
}

// ==================================
// 6. CONSOLE MESSAGE
// ==================================

console.log(
  "%cHamdy Ahmed | Web Developer",
  "color: #9875ff; font-size: 18px; font-weight: bold;"
);

console.log("Portfolio loaded successfully!");

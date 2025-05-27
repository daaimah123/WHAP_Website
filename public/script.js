// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav-toggle")
  const navMenu = document.getElementById("nav-menu")

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active")

      // Animate hamburger menu
      const bars = navToggle.querySelectorAll(".bar")
      bars.forEach((bar) => {
        bar.classList.toggle("active")
      })
    })

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll(".nav-link")
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active")
        const bars = navToggle.querySelectorAll(".bar")
        bars.forEach((bar) => {
          bar.classList.remove("active")
        })
      })
    })

    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
      const isClickInsideNav = navMenu.contains(event.target) || navToggle.contains(event.target)

      if (!isClickInsideNav && navMenu.classList.contains("active")) {
        navMenu.classList.remove("active")
        const bars = navToggle.querySelectorAll(".bar")
        bars.forEach((bar) => {
          bar.classList.remove("active")
        })
      }
    })
  }

  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]')
  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href").substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        const headerHeight = document.querySelector(".header").offsetHeight
        const targetPosition = targetElement.offsetTop - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })

  // Add scroll effect to header
  let lastScrollTop = 0
  const header = document.querySelector(".header")

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Scrolling down
      header.style.transform = "translateY(-100%)"
    } else {
      // Scrolling up
      header.style.transform = "translateY(0)"
    }

    lastScrollTop = scrollTop
  })

  // Animate elements on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe elements for animation
  const animateElements = document.querySelectorAll(".service-card, .service-detail-card, .team-member, .timeline-item")
  animateElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })

  // Counter animation for stats
  const stats = document.querySelectorAll(".stat-number")
  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target
          const finalNumber = target.textContent
          const numericValue = Number.parseInt(finalNumber.replace(/\D/g, ""))

          if (numericValue) {
            animateCounter(target, numericValue, finalNumber)
          }

          statsObserver.unobserve(target)
        }
      })
    },
    { threshold: 0.5 },
  )

  stats.forEach((stat) => {
    statsObserver.observe(stat)
  })

  function animateCounter(element, target, originalText) {
    let current = 0
    const increment = target / 50
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        element.textContent = originalText
        clearInterval(timer)
      } else {
        const suffix = originalText.includes("+") ? "+" : ""
        element.textContent = Math.floor(current) + suffix
      }
    }, 40)
  }
})

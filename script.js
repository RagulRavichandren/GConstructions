const menuToggle = document.querySelector(".menu-toggle");
const mainNavigation = document.querySelector(".main-nav");

menuToggle?.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? "Open navigation" : "Close navigation");
  mainNavigation?.classList.toggle("is-open", !isExpanded);
});

mainNavigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Open navigation");
    mainNavigation.classList.remove("is-open");
  });
});

const currentYear = document.querySelector("#current-year");
if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}

const serviceProjects = {
  residential: {
    title: "Residential construction",
    projects: [
      {
        title: "Contemporary family home",
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1500&q=85",
        alt: "Light-filled contemporary family home interior",
      },
      {
        title: "Modern home with garden views",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1100&q=85",
        alt: "Contemporary home exterior surrounded by greenery",
      },
    ],
  },
  planning: {
    title: "Design & planning",
    projects: [
      {
        title: "Architectural concept planning",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85",
        alt: "Architect sketching a building plan at a desk",
      },
      {
        title: "Building design and details",
        image: "https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&w=1100&q=85",
        alt: "Architectural design plans and material samples",
      },
    ],
  },
  renovation: {
    title: "Renovation & interiors",
    projects: [
      {
        title: "Warm, refreshed living space",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1100&q=85",
        alt: "Warm modern interior with carefully chosen finishes",
      },
      {
        title: "Contemporary interior update",
        image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1100&q=85",
        alt: "Updated contemporary home interior",
      },
    ],
  },
  commercial: {
    title: "Commercial spaces",
    projects: [
      {
        title: "Contemporary workplace",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1500&q=85",
        alt: "Bright modern commercial office interior",
      },
      {
        title: "Modern commercial building",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1100&q=85",
        alt: "Modern commercial building exterior",
      },
    ],
  },
};

const serviceCards = document.querySelectorAll(".service-card[data-service]");
const projectGrid = document.querySelector("#project-grid");
const projectsTitle = document.querySelector("#projects-title");
const showcaseIntro = document.querySelector("#showcase-intro");
let revealObserver = null;

function showServiceProjects(serviceId, shouldScroll) {
  const service = serviceProjects[serviceId];
  if (!service || !projectGrid || !projectsTitle || !showcaseIntro) {
    return;
  }

  serviceCards.forEach((card) => {
    const isSelected = card.dataset.service === serviceId;
    card.classList.toggle("is-selected", isSelected);
    card.setAttribute("aria-pressed", String(isSelected));
  });

  projectsTitle.textContent = service.title;
  showcaseIntro.textContent = `${service.title} — illustrative example images`;
  projectGrid.replaceChildren(
    ...service.projects.map((project, index) => {
      const card = document.createElement("article");
      card.className = "project-card reveal-on-scroll";

      const image = document.createElement("img");
      image.src = project.image;
      image.alt = project.alt;
      image.loading = "lazy";

      const meta = document.createElement("div");
      meta.className = "project-meta";
      meta.textContent = `EXAMPLE IMAGE ${String(index + 1).padStart(2, "0")}`;

      const title = document.createElement("h3");
      title.textContent = project.title;

      card.append(image, meta, title);
      revealObserver?.observe(card);
      return card;
    }),
  );

  if (shouldScroll) {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  }
}

serviceCards.forEach((card) => {
  card.addEventListener("click", () => {
    showServiceProjects(card.dataset.service, true);
  });
});

showServiceProjects("residential", false);

if ("IntersectionObserver" in window) {
  revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  document.body.classList.add("reveal-ready");
  document
    .querySelectorAll(
      ".about-content, .about-photo, .about-stats, .section-heading, .service-card, .project-card, .process-grid > *, .reviews-heading, .review-card, .contact-content",
    )
    .forEach((element) => {
      element.classList.add("reveal-on-scroll");
      revealObserver.observe(element);
    });
}

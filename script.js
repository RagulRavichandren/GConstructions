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

const reviewToggle = document.querySelector(".review-toggle");
const reviewTrack = document.querySelector("#review-track");

reviewToggle?.addEventListener("click", () => {
  const isPaused = reviewTrack?.classList.toggle("is-paused") ?? false;
  reviewToggle.setAttribute("aria-pressed", String(isPaused));
  reviewToggle.textContent = isPaused ? "Play reviews" : "Pause reviews";
});

const serviceProjects = {
  "residential-commercial": {
    title: "Residential & Commercial Spaces",
    projects: [
      {
        title: "Residential construction",
        image: "residential/residential-construction-thirumangalam.png",
        alt: "Residential construction site with workers building a home",
        location: "Thirumangalam(Madurai)",
      },
      {
        title: "Commercial construction",
        image: "assets/commercial-construction-thirumangalam.png",
        alt: "Commercial building construction site with brickwork and structural reinforcement",
        location: "Thirumangalam(Madurai)",
      },
    ],
  },
  residential: {
    title: "Residential construction",
    projects: [
      {
        title: "Residential construction",
        image: "residential/residential-construction-thirumangalam.png",
        alt: "Residential construction site with workers building a home",
        location: "Thirumangalam(Madurai)",
      },
    ],
  },
  planning: {
    title: "Design & planning",
    projects: [
      {
        title: "Residential floor plan",
        image: "Planning/floor-plan-thirumangalam.png",
        alt: "Residential ground and first floor plans for a proposed home",
        location: "Thirumangalam",
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
        title: "Commercial construction",
        image: "assets/commercial-construction-thirumangalam.png",
        alt: "Commercial building construction site with brickwork and structural reinforcement",
        location: "Thirumangalam(Madurai)",
      },
    ],
  },
  consultant: {
    title: "Consultant",
    projects: [
      {
        title: "Project advisory and planning",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85",
        alt: "Consultants discussing a project strategy at a table",
      },
      {
        title: "Project guidance and milestones",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1100&q=85",
        alt: "Professional team reviewing plans and schedules together",
      },
    ],
  },
  "plan-approval": {
    title: "Building plan approval",
    projects: [
      {
        title: "Approved building plan review",
        image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=85",
        alt: "Architectural plans and approval documents laid out for review",
      },
      {
        title: "Authority-ready documentation",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1100&q=85",
        alt: "Project documentation and site plans organized for approval",
      },
    ],
  },
  "layout-approval": {
    title: "Layout approval (DTCP)",
    projects: [
      {
        title: "DTCP layout review",
        image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=85",
        alt: "Detailed site layout and land planning document",
      },
      {
        title: "Prepared layout submissions",
        image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1100&q=85",
        alt: "Site plan and route layout on a drawing table",
      },
    ],
  },
  "building-estimate": {
    title: "Building Estimate",
    projects: [
      {
        title: "Detailed construction estimate",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=85",
        alt: "Numbers, cost sheets and planning documents for a build estimate",
      },
      {
        title: "Scope and budget planning",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1100&q=85",
        alt: "Budget planning and project costing documents laid out on a desk",
      },
    ],
  },
  turnkey: {
    title: "Turnkey contracts",
    projects: [
      {
        title: "Turnkey project delivery",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85",
        alt: "Completed home exterior delivered under a turnkey project model",
      },
      {
        title: "Single-point project handover",
        image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1100&q=85",
        alt: "Finished modern home ready for handover and occupancy",
      },
    ],
  },
  elevation: {
    title: "Elevation (3D)",
    projects: [
      {
        title: "Night-time exterior elevation",
        image: "Elevation/WhatsApp%20Image%202026-10-16%20at%2012.37.53.jpeg",
        alt: "Night-time 3D rendering of a modern two-storey home elevation",
        location: "Thirumangalam",
      },
      {
        title: "Modern 3D house elevation",
        image: "Elevation/WhatsApp%20Image%202026-10-16%20at%2012.37.53%20%282%29.jpeg",
        alt: "3D rendering of a white modern two-storey house",
        location: "Thirumangalam",
      },
      {
        title: "Architectural model view",
        image: "Elevation/WhatsApp%20Image%202026-10-16%20at%2012.37.53%20%281%29.jpeg",
        alt: "Screenshot of a 3D architectural model of a two-storey home",
        location: "Thirumangalam",
      },
      {
        title: "Detailed exterior rendering",
        image: "Elevation/WhatsApp%20Image%202026-10-16%20at%2012.37.52.jpeg",
        alt: "Detailed 3D rendering of a contemporary house facade",
        location: "Thirumangalam",
      },
      {
        title: "Front elevation concept",
        image: "Elevation/WhatsApp%20Image%202026-10-16%20at%2012.37.52%20%281%29.jpeg",
        alt: "Front-facing 3D rendering of a contemporary two-storey house",
        location: "Thirumangalam",
      },
    ],
  },
};

const serviceCards = document.querySelectorAll(".service-card[data-service]");
const serviceGrid = document.querySelector(".service-grid");
const projectGrid = document.querySelector("#project-grid");
const projectsTitle = document.querySelector("#projects-title");
const showcaseIntro = document.querySelector("#showcase-intro");
let revealObserver = null;

if (serviceGrid) {
  let dragStartX = 0;
  let dragStartScrollLeft = 0;
  let activePointerId = null;
  let dragged = false;

  serviceGrid.addEventListener("pointerdown", (event) => {
    if (event.pointerType !== "mouse" || event.button !== 0) {
      return;
    }

    dragStartX = event.clientX;
    dragStartScrollLeft = serviceGrid.scrollLeft;
    activePointerId = event.pointerId;
    dragged = false;
  });

  serviceGrid.addEventListener("pointermove", (event) => {
    if (activePointerId !== event.pointerId) {
      return;
    }

    const distance = event.clientX - dragStartX;
    if (Math.abs(distance) > 5) {
      dragged = true;
      serviceGrid.classList.add("is-dragging");
      if (!serviceGrid.hasPointerCapture(event.pointerId)) {
        serviceGrid.setPointerCapture(event.pointerId);
      }
      serviceGrid.scrollLeft = dragStartScrollLeft - distance;
    }
  });

  const finishDrag = (event) => {
    if (activePointerId !== event.pointerId) {
      return;
    }

    if (serviceGrid.hasPointerCapture(event.pointerId)) {
      serviceGrid.releasePointerCapture(event.pointerId);
    }
    activePointerId = null;
    serviceGrid.classList.remove("is-dragging");
  };

  serviceGrid.addEventListener("pointerup", finishDrag);
  serviceGrid.addEventListener("pointercancel", finishDrag);
  serviceGrid.addEventListener(
    "click",
    (event) => {
      if (dragged) {
        event.preventDefault();
        event.stopPropagation();
        dragged = false;
      }
    },
    true,
  );

  serviceGrid.addEventListener(
    "wheel",
    (event) => {
      if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
        const maxScrollLeft = serviceGrid.scrollWidth - serviceGrid.clientWidth;
        const nextScrollLeft = Math.max(0, Math.min(maxScrollLeft, serviceGrid.scrollLeft + event.deltaY));
        if (nextScrollLeft !== serviceGrid.scrollLeft) {
          serviceGrid.scrollLeft = nextScrollLeft;
          event.preventDefault();
        }
      }
    },
    { passive: false },
  );
}

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
  showcaseIntro.textContent = service.title;
  projectGrid.replaceChildren(
    ...service.projects.map((project) => {
      const card = document.createElement("article");
      card.className = "project-card reveal-on-scroll";

      const image = document.createElement("img");
      image.src = project.image;
      image.alt = project.alt;
      image.loading = "lazy";

      const title = document.createElement("h3");
      title.textContent = project.title;

      card.append(image);
      if (project.location) {
        const location = document.createElement("div");
        location.className = "project-meta";
        location.textContent = project.location;
        card.append(location);
      }
      card.append(title);
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

showServiceProjects("residential-commercial", false);

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

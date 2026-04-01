"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Interactions() {
  const pathname = usePathname();

  /* ── ONE-TIME SETUP — cursor, scroll, nav, forms ── */
  useEffect(() => {
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isPointerFine = window.matchMedia("(pointer: fine)").matches;

    /* ── CURSOR — fine pointer + no reduced motion only ── */
    if (isPointerFine && !isReducedMotion) {
      const dot = document.getElementById("cursor-dot");
      const ring = document.getElementById("cursor-ring");
      let mx = 0,
        my = 0,
        rx = 0,
        ry = 0;
      document.addEventListener("mousemove", (e) => {
        mx = e.clientX;
        my = e.clientY;
        if (dot) {
          dot.style.left = mx + "px";
          dot.style.top = my + "px";
        }
      });
      (function tick() {
        rx += (mx - rx) * 0.1;
        ry += (my - ry) * 0.1;
        if (ring) {
          ring.style.left = rx + "px";
          ring.style.top = ry + "px";
        }
        requestAnimationFrame(tick);
      })();
      document.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("mouseenter", () => ring && ring.classList.add("hover"));
        el.addEventListener("mouseleave", () => ring && ring.classList.remove("hover"));
      });
      document.addEventListener("mouseleave", () => {
        if (dot) dot.style.opacity = "0";
      });
      document.addEventListener("mouseenter", () => {
        if (dot) dot.style.opacity = "1";
      });
    }

    /* ── SCROLL PROGRESS ── */
    const bar = document.getElementById("scroll-progress");
    const handleScrollProgress = () => {
      if (!bar) return;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + "%";
    };
    window.addEventListener("scroll", handleScrollProgress, { passive: true });

    /* ── NAV SCROLL STATE ── */
    const nav = document.getElementById("nav");
    const handleNavScroll = () => {
      if (nav) nav.classList.toggle("scrolled", window.scrollY > 20);
    };
    window.addEventListener("scroll", handleNavScroll, { passive: true });

    /* ── MOBILE NAV — ESC close, focus trap ── */
    const burger = document.querySelector(".nav__burger") as HTMLButtonElement | null;
    const mobileNav = document.querySelector(".nav__mobile") as HTMLElement | null;
    const navLinks = mobileNav ? Array.from(mobileNav.querySelectorAll("a")) : [];

    function openNav() {
      if (!mobileNav) return;
      mobileNav.classList.add("open");
      burger && burger.classList.add("open");
      burger && burger.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
      if (navLinks[0]) setTimeout(() => navLinks[0].focus(), 50);
    }
    function closeNav() {
      if (!mobileNav) return;
      mobileNav.classList.remove("open");
      burger && burger.classList.remove("open");
      burger && burger.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
      burger && burger.focus();
    }

    if (burger) {
      burger.addEventListener("click", () =>
        mobileNav && mobileNav.classList.contains("open") ? closeNav() : openNav()
      );
    }
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileNav && mobileNav.classList.contains("open")) closeNav();
    };
    document.addEventListener("keydown", handleKeydown);
    if (mobileNav && navLinks.length) {
      mobileNav.addEventListener("keydown", (e) => {
        if (e.key !== "Tab") return;
        const first = navLinks[0],
          last = navLinks[navLinks.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      });
    }
    navLinks.forEach((a) => a.addEventListener("click", closeNav));
    const handleResize = () => {
      if (window.innerWidth > 768 && mobileNav && mobileNav.classList.contains("open")) closeNav();
    };
    window.addEventListener("resize", handleResize);

    /* ── FORMS — Netlify submission ── */
    function handleForm(
      formId: string,
      successId: string,
      errorId: string | null,
      btnLabel: string
    ) {
      const form = document.getElementById(formId) as HTMLFormElement | null;
      const success = document.getElementById(successId);
      const error = errorId ? document.getElementById(errorId) : null;
      if (!form) return;
      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]') as HTMLButtonElement | null;
        const email = form.querySelector('input[type="email"]') as HTMLInputElement | null;
        if (email && !email.validity.valid) {
          if (error) error.style.display = "block";
          return;
        }
        if (error) error.style.display = "none";
        if (btn) {
          btn.disabled = true;
          btn.textContent = "Submitting…";
        }
        try {
          const res = await fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            body: new URLSearchParams(new FormData(form) as any).toString(),
          });
          if (res.ok) {
            form.style.display = "none";
            if (success) success.style.display = "block";
          } else {
            throw new Error();
          }
        } catch {
          if (btn) {
            btn.disabled = false;
            btn.textContent = btnLabel || "Submit";
          }
          if (error) {
            error.textContent = "Something went wrong. Please try again.";
            error.style.display = "block";
          }
        }
      });
    }

    handleForm("capture-form", "capture-success", "capture-error", "Subscribe for Updates");

    const ff = document.getElementById("footer-form") as HTMLFormElement | null;
    const fs = document.getElementById("footer-success");
    if (ff) {
      ff.addEventListener("submit", async (e) => {
        e.preventDefault();
        const btn = ff.querySelector("button") as HTMLButtonElement | null;
        const em = document.getElementById("footer-email") as HTMLInputElement | null;
        if (!em || !em.validity.valid) return;
        if (btn) {
          btn.disabled = true;
          btn.textContent = "…";
        }
        try {
          const res = await fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            body: new URLSearchParams(new FormData(ff) as any).toString(),
          });
          if (res.ok) {
            ff.style.display = "none";
            if (fs) fs.style.display = "block";
          }
        } catch {
          if (btn) {
            btn.disabled = false;
            btn.textContent = "→";
          }
        }
      });
    }

    /* ── PATHWAYS SCROLL HINT ── */
    const pathwayList = document.querySelector(".pathway-list") as HTMLElement | null;
    const hint = document.querySelector(".pathways__hint") as HTMLElement | null;
    if (pathwayList && hint) {
      let hinted = false;
      pathwayList.addEventListener(
        "scroll",
        () => {
          if (!hinted && pathwayList.scrollLeft > 20) {
            hint.style.opacity = "0";
            hinted = true;
          }
        },
        { passive: true }
      );
    }

    return () => {
      window.removeEventListener("scroll", handleScrollProgress);
      window.removeEventListener("scroll", handleNavScroll);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  /* ── PER-PAGE EFFECTS — re-run on every navigation ── */
  useEffect(() => {
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* Scroll back to top on navigation */
    window.scrollTo(0, 0);

    /* ── REVEALS ── */
    if (!isReducedMotion) {
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("visible");
              obs.unobserve(e.target);
            }
          });
        },
        { threshold: 0.07, rootMargin: "0px 0px -32px 0px" }
      );
      document.querySelectorAll(".reveal:not(.visible)").forEach((el) => obs.observe(el));
      return () => obs.disconnect();
    } else {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
    }
  }, [pathname]);

  /* ── ACTIVE NAV — update on every navigation ── */
  useEffect(() => {
    const path = window.location.pathname;
    document.querySelectorAll(".nav__links a, .nav__mobile a").forEach((a) => {
      a.classList.remove("active");
      const href = (a as HTMLAnchorElement).getAttribute("href");
      if (!href) return;
      const clean = href.replace(/^\//, "");
      if (
        (clean === "" && path === "/") ||
        (clean !== "" && (path === `/${clean}` || path.startsWith(`/${clean}/`)))
      ) {
        a.classList.add("active");
      }
    });
  }, [pathname]);

  return null;
}

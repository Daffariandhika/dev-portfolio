import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
gsap.registerPlugin(ScrollTrigger);

const transitions = {
    SpringUp: {
        from: {
            opacity: 0,
            scale: 0.75,
        },
        to: {
            ease: "elastic.out(0.6,0.14)",
            opacity: 1,
            scale: 1,
            duration: 4.25,
            delay: 1.25,
            stagger: 0.15,
            scrollTrigger: {
                trigger: '.Spring_Up',
            }
        }
    },
    Stagger: {
        from: {
            opacity: 0,
            y: 50,
        },
        to: {
            opacity: 1,
            y: 0,
            delay: .125,
            duration: 1.125,
            stagger: 0.125,
            ease: "power2.out"
        }
    },
    FadeUp: {
        from: {
            opacity: 0,
            y: 50,
        },
        to: {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
        }
    },
    FadeDown: {
        from: {
            opacity: 0,
            y: -50,
        },
        to: {
            opacity: 1,
            y: 0,
            delay: 0.25,
            duration: 1,
            stagger: 0.15,
            ease: "power2.out",
        }
    },
}

// Hero Spring Animation
ScrollTrigger.batch(".Spring_Up", {
    start: "top bottom",
    onEnter: elements => {
        gsap.fromTo(elements, transitions.SpringUp.from, transitions.SpringUp.to);
    },
    once: true
});

// Stagger Animation
ScrollTrigger.batch(".Fade_Stagger", {
    start: "top bottom",
    onEnter: elements => {
        gsap.fromTo(elements, transitions.Stagger.from, transitions.Stagger.to);

    },
    once: true
});

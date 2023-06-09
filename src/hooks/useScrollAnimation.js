import {useEffect} from 'react'

export default function useScrollAnimation(elementRef) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'animLineUp 2s ease-out 0.5s forwards';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    elementRef.current.forEach((element) => {
      observer.observe(element);
    });

    return observer;
}
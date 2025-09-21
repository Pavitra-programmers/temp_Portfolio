import { useEffect, useRef } from 'react';
import { CipherAnimation } from '../utils/cipherAnimation';

interface UseScrollCipherAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  delay?: number;
  duration?: number;
}

export function useScrollCipherAnimation(
  text: string,
  options: UseScrollCipherAnimationOptions = {}
) {
  const { threshold = 0.1, triggerOnce = true, delay = 0, duration = 500 } = options;
  const elementRef = useRef<HTMLElement>(null);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!triggerOnce || !hasTriggered.current)) {
          setTimeout(() => {
            CipherAnimation.animateText(element, text, duration);
            hasTriggered.current = true;
          }, delay);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [text, threshold, triggerOnce, delay, duration]);

  return elementRef;
}
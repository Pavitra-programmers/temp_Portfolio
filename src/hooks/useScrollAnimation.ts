import { useEffect, useRef, useState } from 'react';
import { CipherAnimation } from '../utils/cipherAnimation';

interface UseScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  delay?: number;
  duration?: number;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const { threshold = 0.1, triggerOnce = true, delay = 0, duration = 500 } = options;
  const elementRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!triggerOnce || !hasTriggered)) {
          setTimeout(() => {
            setIsVisible(true);
            setHasTriggered(true);
            
            // Trigger cipher animation on the element
            const text = element.textContent || '';
            if (text.trim() && element.tagName && ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(element.tagName)) {
              CipherAnimation.animateText(element, text, duration);
            }
          }, delay);
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, triggerOnce, delay, hasTriggered, duration]);

  return { elementRef, isVisible };
}

export function useScrollAnimationMultiple(
  count: number,
  options: UseScrollAnimationOptions = {}
) {
  const { threshold = 0.1, triggerOnce = true, delay = 0 } = options;
  const elementRefs = useRef<(HTMLElement | null)[]>([]);
  const [visibleElements, setVisibleElements] = useState<boolean[]>(
    new Array(count).fill(false)
  );
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    elementRefs.current.forEach((element, index) => {
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && (!triggerOnce || !hasTriggered)) {
            setTimeout(() => {
              setVisibleElements(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
              setHasTriggered(true);
            }, delay + index * 100); // Staggered delay
          } else if (!triggerOnce) {
            setVisibleElements(prev => {
              const newState = [...prev];
              newState[index] = false;
              return newState;
            });
          }
        },
        { threshold }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [threshold, triggerOnce, delay, hasTriggered, count]);

  return { elementRefs, visibleElements };
}
import { useEffect, useRef } from 'react';
import { CipherAnimation } from '../utils/cipherAnimation';

interface UseCipherAnimationOptions {
  duration?: number;
  delay?: number;
  trigger?: boolean;
}

export function useCipherAnimation(
  text: string,
  options: UseCipherAnimationOptions = {}
) {
  const elementRef = useRef<HTMLElement>(null);
  const { duration = 2000, delay = 0, trigger = true } = options;

  useEffect(() => {
    if (!trigger || !elementRef.current) return;

    const timer = setTimeout(() => {
      CipherAnimation.animateText(elementRef.current!, text, duration);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, duration, delay, trigger]);

  return elementRef;
}

export function useCipherAnimationMultiple(
  texts: string[],
  options: UseCipherAnimationOptions = {}
) {
  const elementRefs = useRef<(HTMLElement | null)[]>([]);
  const { duration = 2000, delay = 0, trigger = true } = options;

  useEffect(() => {
    if (!trigger || elementRefs.current.length === 0) return;

    const timer = setTimeout(() => {
      const validElements = elementRefs.current.filter(Boolean) as HTMLElement[];
      CipherAnimation.animateMultipleTexts(validElements, texts, duration, 200);
    }, delay);

    return () => clearTimeout(timer);
  }, [texts, duration, delay, trigger]);

  return elementRefs;
}
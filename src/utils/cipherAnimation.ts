export class CipherAnimation {
  private static readonly CHARS = '¤¢§¶';
  private static readonly CIPHER_SEQUENCES = [
    '}∆Ωµ_',
    '¥₩€_£$',
    '+-*/_¤¢§¶',
    '_~^:;!?',
    '|}/_',
    '°•■',
    '_○●□>',  
    '{_<#',
    '<_>',
    '≈≠∇±_'
  ];
  
  static animateText(
    element: HTMLElement,
    finalText: string,
    duration: number = 2000,
    onComplete?: () => void
  ): void {
    // Start with cipher text immediately - no real text should show
    const initialCipher = this.generateInitialCipherText(finalText);
    element.textContent = initialCipher;
    
    const startTime = Date.now();
    let lastUpdateTime = startTime;
    const updateInterval = 150; // Update every 150ms instead of every frame
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      if (progress < 1) {
        const now = Date.now();
        // Only update if enough time has passed
        if (now - lastUpdateTime >= updateInterval) {
          const cipherText = this.generateCipherText(finalText, progress);
          element.textContent = cipherText;
          lastUpdateTime = now;
        }
        requestAnimationFrame(animate);
      } else {
        element.textContent = finalText;
        onComplete?.();
      }
    };
    
    // Start animation immediately
    requestAnimationFrame(animate);
  }
  
  private static generateInitialCipherText(text: string): string {
    return text
      .split('')
      .map((char, index) => {
        if (char === ' ') return ' ';
        if (char === '\n') return '\n';
        
        const sequenceIndex = index % this.CIPHER_SEQUENCES.length;
        const sequence = this.CIPHER_SEQUENCES[sequenceIndex];
        const randomIndex = Math.floor(Math.random() * sequence.length);
        return sequence[randomIndex];
      })
      .join('');
  }
  
  private static generateCipherText(text: string, progress: number): string {
    const totalChars = text.split('').filter(char => char !== ' ' && char !== '\n').length;
    const charsRevealed = Math.floor(progress * totalChars);
    
    // Create array of character indices (excluding spaces and newlines)
    const charIndices = text.split('').map((char, index) => 
      char !== ' ' && char !== '\n' ? index : null
    ).filter(index => index !== null) as number[];
    
    // Shuffle the indices to get random order
    const shuffledIndices = [...charIndices].sort(() => Math.random() - 0.5);
    
    // Take only the number of characters that should be revealed
    const revealedIndices = shuffledIndices.slice(0, charsRevealed);
    
    return text
      .split('')
      .map((char, index) => {
        if (char === ' ') return ' ';
        if (char === '\n') return '\n';
        
        // If this character should be revealed (random order)
        if (revealedIndices.includes(index)) {
          return char; // Show the actual character
        }
        
        // Otherwise show cipher character
        const sequenceIndex = index % this.CIPHER_SEQUENCES.length;
        const sequence = this.CIPHER_SEQUENCES[sequenceIndex];
        const randomIndex = Math.floor(Math.random() * sequence.length);
        return sequence[randomIndex];
      })
      .join('');
  }
  
  static animateMultipleTexts(
    elements: HTMLElement[],
    finalTexts: string[],
    duration: number = 100,
    stagger: number = 0,
    onComplete?: () => void
  ): void {
    let completedCount = 0;
    
    elements.forEach((element, index) => {
      setTimeout(() => {
        this.animateText(element, finalTexts[index], duration, () => {
          completedCount++;
          if (completedCount === elements.length) {
            onComplete?.();
          }
        });
      }, index * stagger);
    });
  }
}
//
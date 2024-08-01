// types/smooth-scroll.d.ts

declare module 'smooth-scroll' {
    interface SmoothScrollOptions {
      speed?: number;
      speedAsDuration?: boolean;
    }
  
    export default class SmoothScroll {
      constructor(selector: string, options?: SmoothScrollOptions);
    }
  }
  
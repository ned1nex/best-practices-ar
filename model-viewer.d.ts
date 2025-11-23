declare namespace JSX {
  interface IntrinsicElements {
    'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      src?: string;
      poster?: string;
      alt?: string;
      'shadow-intensity'?: string;
      'camera-controls'?: boolean;
      'auto-rotate'?: boolean;
      'rotation-per-second'?: string;
      loading?: 'auto' | 'lazy' | 'eager';
      ar?: boolean;
      'ar-modes'?: string;
      'ios-src'?: string;
      'ar-scale'?: string;
      'camera-orbit'?: string;
      'min-camera-orbit'?: string;
      'max-camera-orbit'?: string;
      'camera-target'?: string;
      'field-of-view'?: string;
      ref?: React.Ref<HTMLElement>;
      children?: React.ReactNode;
    };
  }
}

export {};

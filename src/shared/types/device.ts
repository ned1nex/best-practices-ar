export interface DeviceInfo {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  supportsAR: boolean;
  os: 'ios' | 'android' | 'windows' | 'macos' | 'linux' | 'unknown';
}

export interface ARSupport {
  supportsWebXR: boolean;
  supportsSceneViewer: boolean;
  supportsQuickLook: boolean;
  hasAnySupport: boolean;
}

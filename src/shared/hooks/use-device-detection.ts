'use client';

import { useState, useEffect } from 'react';
import type { DeviceInfo, ARSupport } from '@/shared/types';

/**
 * Hook to detect device type and capabilities
 */
export function useDeviceDetection(): DeviceInfo {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    supportsAR: false,
    os: 'unknown',
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const userAgent = navigator.userAgent.toLowerCase();
    const platform = navigator.platform?.toLowerCase() || '';

    // Detect OS
    let os: DeviceInfo['os'] = 'unknown';
    if (/iphone|ipad|ipod/.test(userAgent)) {
      os = 'ios';
    } else if (/android/.test(userAgent)) {
      os = 'android';
    } else if (/win/.test(platform)) {
      os = 'windows';
    } else if (/mac/.test(platform)) {
      os = 'macos';
    } else if (/linux/.test(platform)) {
      os = 'linux';
    }

    // Detect device type
    const isMobile = /android|webos|iphone|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
    const isTablet = /ipad|android(?!.*mobile)|tablet/i.test(userAgent);
    const isDesktop = !isMobile && !isTablet;

    // AR is supported on mobile devices (iOS with ARKit, Android with ARCore)
    const supportsAR = (os === 'ios' || os === 'android') && (isMobile || isTablet);

    setDeviceInfo({
      isMobile,
      isTablet,
      isDesktop,
      supportsAR,
      os,
    });
  }, []);

  return deviceInfo;
}

/**
 * Hook to detect AR support capabilities
 */
export function useARSupport(): ARSupport {
  const [arSupport, setARSupport] = useState<ARSupport>({
    supportsWebXR: false,
    supportsSceneViewer: false,
    supportsQuickLook: false,
    hasAnySupport: false,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkARSupport = async () => {
      const userAgent = navigator.userAgent.toLowerCase();

      // Check WebXR support (modern AR standard)
      const supportsWebXR = 'xr' in navigator;

      // Check Scene Viewer support (Android)
      const supportsSceneViewer = /android/i.test(userAgent);

      // Check Quick Look support (iOS)
      const supportsQuickLook = /iphone|ipad|ipod/i.test(userAgent);

      const hasAnySupport = supportsWebXR || supportsSceneViewer || supportsQuickLook;

      setARSupport({
        supportsWebXR,
        supportsSceneViewer,
        supportsQuickLook,
        hasAnySupport,
      });
    };

    checkARSupport();
  }, []);

  return arSupport;
}

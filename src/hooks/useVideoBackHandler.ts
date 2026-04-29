"use client";
import { useEffect, useCallback } from "react";

/**
 * When a fullscreen video is playing, pushes a history state.
 * When the user presses the mobile back button, closes the video
 * instead of navigating away from the website.
 */
export function useVideoBackHandler(
  isPlaying: boolean,
  onClose: () => void
) {
  const handlePopState = useCallback(() => {
    if (isPlaying) {
      onClose();
    }
  }, [isPlaying, onClose]);

  useEffect(() => {
    if (isPlaying) {
      // Push a dummy state so back button triggers popstate
      window.history.pushState({ videoPlaying: true }, "");
      window.addEventListener("popstate", handlePopState);
    }

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [isPlaying, handlePopState]);
}

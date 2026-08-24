import { EditorialMedia, EditorialMediaSource } from "./EditorialMedia";

type MediaPairProps = {
  primary: EditorialMediaSource;
  secondary: EditorialMediaSource;
  className?: string;
  primaryPriority?: boolean;
};

export function MediaPair({
  primary,
  secondary,
  className = "",
  primaryPriority = false
}: MediaPairProps) {
  return (
    <div className={`media-pair ${className}`.trim()}>
      <EditorialMedia
        {...primary}
        className="media-pair__primary"
        priority={primaryPriority}
        sizes="(min-width: 980px) 48vw, 92vw"
      />
      <EditorialMedia
        {...secondary}
        className="media-pair__secondary"
        sizes="(min-width: 980px) 24vw, 58vw"
      />
    </div>
  );
}

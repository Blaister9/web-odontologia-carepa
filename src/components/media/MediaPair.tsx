import { EditorialMedia, EditorialMediaSource } from "./EditorialMedia";

type MediaPairProps = {
  primary: EditorialMediaSource;
  secondary: EditorialMediaSource;
  className?: string;
};

export function MediaPair({ primary, secondary, className = "" }: MediaPairProps) {
  return (
    <div className={`media-pair ${className}`.trim()}>
      <EditorialMedia
        {...primary}
        className="media-pair__primary"
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

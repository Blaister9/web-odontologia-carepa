import Image from "next/image";

export type EditorialMediaSource = {
  src: string;
  alt: string;
  caption?: string;
  position?: string;
};

type EditorialMediaProps = EditorialMediaSource & {
  className?: string;
  priority?: boolean;
  sizes: string;
};

export function EditorialMedia({
  src,
  alt,
  caption,
  className = "",
  position,
  priority = false,
  sizes
}: EditorialMediaProps) {
  return (
    <figure className={`editorial-media ${className}`.trim()}>
      <div className="editorial-media__frame">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          style={position ? { objectPosition: position } : undefined}
        />
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

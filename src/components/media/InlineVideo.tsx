type InlineVideoProps = {
  src: string;
  poster: string;
  label: string;
  caption?: string;
};

export function InlineVideo({ src, poster, label, caption }: InlineVideoProps) {
  return (
    <figure className="inline-video">
      <div className="inline-video__frame">
        <video
          aria-label={label}
          controls
          playsInline
          poster={poster}
          preload="none"
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

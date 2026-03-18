interface PhotoViewProps {
  url: string
  caption: string
}

export default function PhotoView({ url, caption }: PhotoViewProps) {
  return (
    <figure className="w-full">
      <div className="w-full rounded-xl overflow-hidden shadow-sm bg-gray-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={url}
          alt={caption}
          className="w-full h-auto object-cover"
          style={{ maxHeight: '400px', objectFit: 'contain' }}
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm font-dm text-gray-500 italic px-4">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

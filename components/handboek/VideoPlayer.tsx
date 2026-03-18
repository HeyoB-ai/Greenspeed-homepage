interface VideoPlayerProps {
  url: string
  title: string
}

export default function VideoPlayer({ url, title }: VideoPlayerProps) {
  if (!url) {
    return (
      <div
        className="w-full rounded-xl flex items-center justify-center bg-gray-100 text-gray-400 font-dm text-sm"
        style={{ aspectRatio: '16/9' }}
      >
        Geen video beschikbaar
      </div>
    )
  }

  return (
    <div className="w-full rounded-xl overflow-hidden shadow-sm" style={{ aspectRatio: '16/9' }}>
      <iframe
        src={url}
        title={title}
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ border: 'none' }}
      />
    </div>
  )
}

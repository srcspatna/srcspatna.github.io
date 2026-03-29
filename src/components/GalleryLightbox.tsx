import React, { useEffect, useRef, useState } from 'react';

export interface GalleryLightboxProps {
  images: { src: string; alt?: string; caption?: string }[];
}

export default function GalleryLightbox({ images }: GalleryLightboxProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const captionRef = useRef<HTMLDivElement>(null);
  const [currentIdx, setCurrentIdx] = useState<number | null>(null);

  useEffect(() => {
    if (currentIdx !== null && modalRef.current && imgRef.current && captionRef.current) {
      const img = images[currentIdx];
      imgRef.current.src = img.src;
      imgRef.current.alt = img.alt || '';
      captionRef.current.textContent = img.caption || img.alt || '';
      modalRef.current.classList.remove('hidden');
      modalRef.current.classList.add('flex');
    } else if (modalRef.current) {
      modalRef.current.classList.add('hidden');
      modalRef.current.classList.remove('flex');
    }
  }, [currentIdx]);

  function open(idx: number) {
    setCurrentIdx(idx);
  }
  function close() {
    setCurrentIdx(null);
  }
  function prev() {
    if (currentIdx !== null) setCurrentIdx((currentIdx - 1 + images.length) % images.length);
  }
  function next() {
    if (currentIdx !== null) setCurrentIdx((currentIdx + 1) % images.length);
  }

  return (
    <>
      <div className="gallery-images mx-auto max-w-4xl py-6">
        <h2 className="text-2xl font-bold mb-4">Gallery Images</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {images.map((img, idx) => (
            <figure key={idx} className="rounded-xl overflow-hidden border bg-white dark:bg-slate-900 shadow cursor-pointer">
              <div className="aspect-4/3 w-full overflow-hidden bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                <img src={img.src} alt={img.alt || ''} className="w-full h-full object-cover transition-transform duration-200 hover:scale-105" loading="lazy" onClick={() => open(idx)} />
              </div>
              {(img.caption || img.alt) && (
                <figcaption className="p-2 text-center text-sm text-slate-600 dark:text-slate-300">
                  {img.caption || img.alt}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
      <div ref={modalRef} className="fixed inset-0 z-50 hidden items-center justify-center bg-black/80" style={{ backdropFilter: 'blur(2px)' }}>
        <button onClick={close} className="absolute top-4 right-4 text-white text-3xl font-bold cursor-pointer" aria-label="Close">&times;</button>
        <div className="flex flex-col items-center justify-center h-full w-full">
          <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl font-bold px-2 cursor-pointer" aria-label="Previous">&#8592;</button>
          <img ref={imgRef} src="" alt="" className="max-h-[80vh] max-w-[90vw] rounded-xl shadow-lg border-2 border-white object-contain bg-white dark:bg-slate-900" />
          <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl font-bold px-2 cursor-pointer" aria-label="Next">&#8594;</button>
          <div ref={captionRef} className="mt-4 text-white text-center text-lg max-w-2xl"></div>
        </div>
      </div>
    </>
  );
}

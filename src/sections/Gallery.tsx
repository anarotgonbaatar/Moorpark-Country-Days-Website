import { useState } from 'react'

// Note: In Vite, use import.meta.glob instead:
const images = Object.values(
    import.meta.glob('../assets/gallery/*.jpg', { eager: true, as: 'url' })
) as string[];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string>(images[0]);

    return (
        <section id="gallery-section" className="bg-[var(--gold)]">
            <h2>Gallery</h2>

            {/* Big image display */}
            <div className="flex justify-center mb-8">
                <img
                    src={selectedImage}
                    alt="Selected"
                    className="max-w-full max-h-[35rem] border-2 border-[var(--green-dark)] rounded-[1rem] shadow-[0_0_0.5rem]"
                />
            </div>

            {/* Thumbnails */}
            <div className="flex overflow-x-auto gap-[0.25rem]">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Thumbnail ${index + 1}`}
                        className={`h-[3.5rem] w-auto cursor-pointer rounded border-2 rounded-[0.5rem] ${
                            selectedImage === src
                                ? 'border-[white]'
                                : 'border-[var(--green-dark)]'
                        }`}
                        onClick={() => setSelectedImage(src)}
                    />
                ))}
            </div>
        </section>
    );
}

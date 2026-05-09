const carouselImages = [
  {
    src: "https://rise-atseven.transforms.svdcdn.com/production/images/energy-drink-1080x1080px_2025-10-31-082733_epmf.jpg?w=800&h=800&q=80&fm=webp&fit=crop",
    alt: "Energy drink",
  },
  {
    src: "https://rise-atseven.transforms.svdcdn.com/production/images/dog-food-1080x1080px.jpg?w=800&h=800&q=80&fm=webp&fit=crop",
    alt: "Dog food",
  },
  {
    src: "https://rise-atseven.transforms.svdcdn.com/production/images/mascara-1080x1080px.jpg?w=800&h=800&q=80&fm=webp&fit=crop",
    alt: "Mascara",
  },
  {
    src: "https://rise-atseven.transforms.svdcdn.com/production/images/over-50s-moisturiser-1080x1080px.jpg?w=800&h=800&q=80&fm=webp&fit=crop",
    alt: "Over 50s moisturiser",
  },
  {
    src: "https://rise-atseven.transforms.svdcdn.com/production/images/car-rental-1080x1080px.jpg?w=800&h=800&q=80&fm=webp&fit=crop",
    alt: "Car rental",
  },
  {
    src: "https://rise-atseven.transforms.svdcdn.com/production/images/dog-friendly-lodges-1080x1080px.jpg?w=800&h=800&q=80&fm=webp&fit=crop",
    alt: "Dog friendly lodges",
  },
];

export default function ImageMarqueeSection() {
  const repeatedImages = [...carouselImages, ...carouselImages, ...carouselImages];

  return (
    <section className="w-full pb-12 xl:pb-24">
      <style>{`
        @keyframes imageMarquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.3333%);
          }
        }

        .image-marquee-track {
          animation: imageMarquee 28s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .image-marquee-track {
            animation: none;
          }
        }
      `}</style>

      <div className="w-full px-4 md:px-7">
        <div className="grid grid-cols-12 gap-x-3 gap-y-3 md:gap-x-5 md:gap-y-7">
          <div className="col-span-12 overflow-hidden">
            <div className="relative z-0 flex w-[120vw] -translate-x-[10vw] overflow-hidden">
              <div className="image-marquee-track flex w-max">
                {repeatedImages.map((image, index) => (
                  <div
                    key={`${image.alt}-${index}`}
                    className="w-[72vw] shrink-0 px-1.5 md:w-[34vw] md:px-2.5 lg:w-[26vw]"
                  >
                    <div className="w-full overflow-hidden rounded-2xl bg-red-600/20 lg:rounded-3xl">
                      <div className="relative aspect-square w-full overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="absolute inset-0 h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

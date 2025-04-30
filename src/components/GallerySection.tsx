
import { AspectRatio } from "@/components/ui/aspect-ratio";

const GallerySection = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1599789231253-bc92c362e37d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      alt: "Розовые розы",
      title: "Нежность"
    },
    {
      src: "https://images.unsplash.com/photo-1583228858294-37d3cad8b87c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      alt: "Смешанный букет",
      title: "Яркость"
    },
    {
      src: "https://images.unsplash.com/photo-1557903286-ac7e5d34c6fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      alt: "Свадебный букет",
      title: "Безмятежность"
    },
    {
      src: "https://images.unsplash.com/photo-1591986830259-535a9d89cb1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      alt: "Полевые цветы",
      title: "Свежесть"
    },
    {
      src: "https://images.unsplash.com/photo-1560897851-7d37a2c78b91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      alt: "Красные розы",
      title: "Страсть"
    },
    {
      src: "https://images.unsplash.com/photo-1584211930076-148b6019f84e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      alt: "Весенние цветы",
      title: "Вдохновение"
    }
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Наши работы</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Каждый букет создается с любовью и вниманием к деталям. Наши флористы вкладывают душу в каждую композицию.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-md hover-scale transition-all">
              <AspectRatio ratio={4/5}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                />
              </AspectRatio>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 transition-opacity group-hover:opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-xl font-bold">{image.title}</h3>
                <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

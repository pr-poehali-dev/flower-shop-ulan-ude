
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Zap, Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">О нашем бутике</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            "T.Flower" - это цветочный бутик, расположенный в самом сердце Улан-Удэ, на пешеходной улице Ленина (Арбат).
            Мы предлагаем широкий ассортимент свежих цветов, стильные букеты и композиции, а также сопутствующие товары.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="hover-scale transition-all">
            <CardContent className="p-6 text-center">
              <div className="mx-auto bg-purple-100 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Наша миссия</h3>
              <p className="text-gray-600">
                Дарить радость и красоту, предоставляя высококачественные цветы и профессиональные флористические услуги.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-scale transition-all">
            <CardContent className="p-6 text-center">
              <div className="mx-auto bg-purple-100 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Наше видение</h3>
              <p className="text-gray-600">
                Стать ведущим цветочным бутиком в Улан-Удэ, известным своим креативным подходом, качеством продукции и высоким уровнем обслуживания.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-scale transition-all">
            <CardContent className="p-6 text-center">
              <div className="mx-auto bg-purple-100 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                <Sparkles className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Наши ценности</h3>
              <p className="text-gray-600">
                Свежесть цветов, креативность, профессионализм, индивидуальный подход, надежность.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

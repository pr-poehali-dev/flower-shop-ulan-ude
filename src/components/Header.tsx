
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-100 to-pink-100 py-24 px-6 md:px-12">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-6 md:w-1/2">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
              Цветочный бутик <span className="text-purple-600">T.Flower</span>
            </h1>
            <p className="text-xl text-gray-700">
              Дарим радость и красоту жителям и гостям Улан-Удэ, предоставляя высококачественные цветы и профессиональные флористические услуги.
            </p>
            <div className="flex gap-4 pt-2">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Заказать букет
              </Button>
              <Button variant="outline" size="lg" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                Наши услуги
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1561181286-d5c73231ae53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
              alt="Свежие цветы" 
              className="w-full h-auto rounded-lg shadow-lg hover-scale"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;


import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-purple-400">T.Flower</h3>
            <p className="text-gray-400 mb-4">
              Цветочный бутик в самом сердце Улан-Удэ. Свежие цветы, стильные букеты и профессиональный сервис.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/catalog/bouquets" className="hover:text-purple-400 transition-colors">Букеты</Link></li>
              <li><Link to="/catalog/compositions" className="hover:text-purple-400 transition-colors">Композиции</Link></li>
              <li><Link to="/catalog/roses" className="hover:text-purple-400 transition-colors">Розы</Link></li>
              <li><Link to="/catalog/gifts" className="hover:text-purple-400 transition-colors">Подарки</Link></li>
              <li><Link to="/delivery" className="hover:text-purple-400 transition-colors">Доставка</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Информация</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-purple-400 transition-colors">О нас</Link></li>
              <li><Link to="/contact" className="hover:text-purple-400 transition-colors">Контакты</Link></li>
              <li><Link to="/faq" className="hover:text-purple-400 transition-colors">Частые вопросы</Link></li>
              <li><Link to="/blog" className="hover:text-purple-400 transition-colors">Блог</Link></li>
              <li><Link to="/reviews" className="hover:text-purple-400 transition-colors">Отзывы</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Улан-Удэ, ул. Ленина (Арбат)</li>
              <li>+7 (301) 222-33-44</li>
              <li>info@tflower.ru</li>
              <li>Ежедневно с 8:00 до 20:00</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 T.Flower. Все права защищены.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-gray-400 text-sm">
              <li><Link to="/privacy" className="hover:text-purple-400 transition-colors">Политика конфиденциальности</Link></li>
              <li><Link to="/terms" className="hover:text-purple-400 transition-colors">Условия использования</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

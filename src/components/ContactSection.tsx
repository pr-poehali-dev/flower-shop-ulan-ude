
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Свяжитесь с нами</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Мы всегда рады ответить на ваши вопросы и помочь с выбором или заказом букета.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Наши контакты</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-purple-600" />
                  <span>+7 (301) 222-33-44</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-purple-600" />
                  <span>info@tflower.ru</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-purple-600" />
                  <span>Улан-Удэ, ул. Ленина (Арбат)</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-3 text-purple-600" />
                  <span>Ежедневно с 8:00 до 20:00</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Наше расположение</h3>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2989.8548542754776!2d107.57813037630626!3d51.833459689568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5da83fe85f39e2b1%3A0x8fcf1c2cfe14a1fc!2z0JvQtdC90LjQvdCwINGD0LsuLCDQo9C70LDQvS3Qo9C00Y8!5e0!3m2!1sru!2sru!4v1682952784955!5m2!1sru!2sru" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-6">Отправить сообщение</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Имя</label>
                  <Input id="name" placeholder="Ваше имя" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
                  <Input id="phone" placeholder="+7 (___) ___-__-__" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Сообщение</label>
                <Textarea id="message" placeholder="Ваше сообщение..." rows={5} />
              </div>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Отправить сообщение</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

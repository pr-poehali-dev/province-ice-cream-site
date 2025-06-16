import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: "MapPin",
      title: "Адрес",
      info: "ул. Центральная, 15",
      subInfo: "Центр города, рядом с парком",
    },
    {
      icon: "Phone",
      title: "Телефон",
      info: "+7 (495) 123-45-67",
      subInfo: "Бронирование и доставка",
    },
    {
      icon: "Clock",
      title: "Режим работы",
      info: "Ежедневно 9:00 - 22:00",
      subInfo: "Без выходных",
    },
    {
      icon: "Truck",
      title: "Доставка",
      info: "30-60 минут • от 500₽",
      subInfo: "В пределах 15 км от кафе",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-tiffany-pale to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact info */}
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-tiffany/10 text-tiffany text-sm font-medium mb-6">
              <Icon name="MapPin" size={16} className="mr-2" />
              Контакты
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Приходите к нам в<span className="text-tiffany"> гости</span>
            </h2>

            <p className="text-xl text-gray-600 mb-8">
              Мы находимся в самом сердце города и всегда рады видеть вас в
              нашем уютном кафе
            </p>

            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-tiffany/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon
                      name={item.icon as any}
                      className="w-6 h-6 text-tiffany"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 font-medium">{item.info}</p>
                    <p className="text-gray-500 text-sm">{item.subInfo}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/delivery">
                <Button
                  size="lg"
                  className="bg-tiffany hover:bg-tiffany/90 text-white px-6"
                >
                  <Icon name="Truck" size={20} className="mr-2" />
                  Заказать доставку
                </Button>
              </Link>
              <Link to="/booking">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-tiffany text-tiffany hover:bg-tiffany hover:text-white px-6"
                >
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Забронировать стол
                </Button>
              </Link>
              <Link to="/contacts">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-tiffany text-tiffany hover:bg-tiffany hover:text-white px-6"
                >
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Связаться с нами
                </Button>
              </Link>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="relative">
            <Card className="overflow-hidden border-0 shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-tiffany-light to-tiffany flex items-center justify-center relative">
                <img
                  src="https://images.unsplash.com/photo-1577086861348-0ee47e3a1b3d?w=600&h=600&fit=crop"
                  alt="Интерьер кафе"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                {/* Map overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-tiffany rounded-full flex items-center justify-center">
                        <Icon name="MapPin" className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Кафе "Провинция"
                        </h4>
                        <p className="text-sm text-gray-600">
                          ул. Центральная, 15
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Rating badge */}
            <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-lg p-4 border border-tiffany-light/20">
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={16}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <div className="text-sm font-semibold text-gray-900">4.9</div>
                <div className="text-xs text-gray-500">156 отзывов</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

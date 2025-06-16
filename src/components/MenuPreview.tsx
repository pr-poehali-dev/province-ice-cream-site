import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const MenuPreview = () => {
  const menuCategories = [
    {
      title: "Мороженое",
      description: "Итальянское джелато, сорбеты и авторские вкусы",
      icon: "IceCream",
      image:
        "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=400&h=300&fit=crop",
      items: ["Пистачио", "Страчателла", "Манго-маракуйя"],
      price: "от 180₽",
    },
    {
      title: "Вафли",
      description: "Хрустящие бельгийские и венские вафли",
      icon: "Cookie",
      image:
        "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=400&h=300&fit=crop",
      items: ["Классические", "Шоколадные", "С ягодами"],
      price: "от 280₽",
    },
    {
      title: "Пасты",
      description: "Домашняя паста и итальянские соусы",
      icon: "UtensilsCrossed",
      image:
        "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop",
      items: ["Карбонара", "Аматричана", "Песто"],
      price: "от 420₽",
    },
    {
      title: "Супы",
      description: "Сезонные супы и бульоны",
      icon: "ChefHat",
      image:
        "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop",
      items: ["Тыквенный", "Минестроне", "Том-ям"],
      price: "от 320₽",
    },
    {
      title: "Салаты",
      description: "Свежие салаты из сезонных продуктов",
      icon: "Salad",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
      items: ["Цезарь", "Капрезе", "Нисуаз"],
      price: "от 380₽",
    },
    {
      title: "Комплексные обеды",
      description: "Полноценные обеды в европейском стиле",
      icon: "UtensilsCrossed",
      image:
        "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
      items: ["Бизнес-ланч", "Семейный обед", "Детское меню"],
      price: "от 590₽",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-tiffany/10 text-tiffany text-sm font-medium mb-6">
            <Icon name="ChefHat" size={16} className="mr-2" />
            Наше меню
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Изысканные блюда и<span className="text-tiffany"> десерты</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            От освежающего мороженого до сытных обедов — каждое блюдо готовится
            с любовью из лучших ингредиентов
          </p>
        </div>

        {/* Menu grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {menuCategories.map((category, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Icon
                      name={category.icon as any}
                      className="w-6 h-6 text-tiffany"
                    />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-tiffany text-white px-3 py-1 rounded-full text-sm font-medium">
                    {category.price}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {category.description}
                </p>

                <div className="space-y-1 mb-4">
                  {category.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-gray-500"
                    >
                      <div className="w-1 h-1 bg-tiffany rounded-full mr-2"></div>
                      {item}
                    </div>
                  ))}
                </div>

                <Button
                  variant="ghost"
                  className="w-full text-tiffany hover:bg-tiffany hover:text-white transition-colors group"
                >
                  Подробнее
                  <Icon
                    name="ArrowRight"
                    size={16}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu">
              <Button
                size="lg"
                className="bg-tiffany hover:bg-tiffany/90 text-white px-8 py-3"
              >
                <Icon name="Menu" size={20} className="mr-2" />
                Посмотреть полное меню
              </Button>
            </Link>
            <Link to="/delivery">
              <Button
                variant="outline"
                size="lg"
                className="border-tiffany text-tiffany hover:bg-tiffany hover:text-white px-8 py-3"
              >
                <Icon name="Truck" size={20} className="mr-2" />
                Заказать доставку
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;

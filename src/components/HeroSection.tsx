import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-tiffany-pale via-white to-tiffany-light/20"></div>
      <div className="absolute top-20 right-10 w-32 h-32 bg-tiffany/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-tiffany-light/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-tiffany/10 text-tiffany text-sm font-medium">
                <Icon name="Sparkles" size={16} className="mr-2" />
                Премиальное качество
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Кафе-мороженое
              <span className="block text-tiffany mt-2">Провинция</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Изысканное итальянское мороженое, авторские вафли и европейская
              кухня в атмосфере элегантности и французского шарма
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link to="/menu">
                <Button
                  size="lg"
                  className="bg-tiffany hover:bg-tiffany/90 text-white px-8 py-3 text-lg"
                >
                  <Icon name="ChefHat" size={20} className="mr-2" />
                  Посмотреть меню
                </Button>
              </Link>
              <Link to="/delivery">
                <Button
                  size="lg"
                  className="bg-tiffany hover:bg-tiffany/90 text-white px-8 py-3 text-lg"
                >
                  <Icon name="Truck" size={20} className="mr-2" />
                  Заказать доставку
                </Button>
              </Link>
              <Link to="/booking">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-tiffany text-tiffany hover:bg-tiffany hover:text-white px-8 py-3 text-lg"
                >
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Забронировать стол
                </Button>
              </Link>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 text-center lg:text-left">
              <div className="flex flex-col items-center lg:items-start">
                <div className="w-12 h-12 bg-tiffany/10 rounded-full flex items-center justify-center mb-3">
                  <Icon name="IceCream" className="w-6 h-6 text-tiffany" />
                </div>
                <span className="text-sm font-medium text-gray-700">
                  15+ вкусов мороженого
                </span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="w-12 h-12 bg-tiffany/10 rounded-full flex items-center justify-center mb-3">
                  <Icon name="Cookie" className="w-6 h-6 text-tiffany" />
                </div>
                <span className="text-sm font-medium text-gray-700">
                  Свежие вафли
                </span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="w-12 h-12 bg-tiffany/10 rounded-full flex items-center justify-center mb-3">
                  <Icon
                    name="UtensilsCrossed"
                    className="w-6 h-6 text-tiffany"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700">
                  Европейская кухня
                </span>
              </div>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-tiffany-light to-tiffany rounded-3xl shadow-2xl flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1488900128323-21503983a07e?w=600&h=600&fit=crop&crop=center"
                alt="Изысканное мороженое"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-tiffany">15+</div>
                <div className="text-xs text-gray-600">вкусов</div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-tiffany">★★★★★</div>
                <div className="text-xs text-gray-600">рейтинг</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const navigation = [
    { name: "Главная", href: "/", icon: "Home" },
    { name: "Меню", href: "/menu", icon: "ChefHat" },
    { name: "Вафли", href: "/waffles", icon: "Cookie" },
    {
      name: "Комплексные обеды",
      href: "/combo-meals",
      icon: "UtensilsCrossed",
    },
    { name: "Бронирование", href: "/booking", icon: "Calendar" },
    { name: "Отзывы", href: "/reviews", icon: "Star" },
    { name: "Контакты", href: "/contacts", icon: "MapPin" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-tiffany-pale to-white">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-sm border-b border-tiffany-light/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-tiffany rounded-full flex items-center justify-center">
                <Icon name="IceCream" className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-tiffany">Провинция</h1>
                <p className="text-sm text-tiffany-light font-medium">
                  кафе-мороженое
                </p>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === item.href
                      ? "bg-tiffany text-white shadow-md"
                      : "text-gray-700 hover:bg-tiffany-pale hover:text-tiffany"
                  }`}
                >
                  <Icon name={item.icon as any} size={16} />
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button className="md:hidden p-2 rounded-lg hover:bg-tiffany-pale">
              <Icon name="Menu" size={24} className="text-tiffany" />
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-white border-t border-tiffany-light/20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-tiffany rounded-full flex items-center justify-center">
                  <Icon name="IceCream" className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-tiffany">Провинция</h3>
                  <p className="text-sm text-tiffany-light">кафе-мороженое</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Изысканное мороженое и европейская кухня в атмосфере
                элегантности и уюта
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} className="text-tiffany" />
                  <span>ул. Центральная, 15</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} className="text-tiffany" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} className="text-tiffany" />
                  <span>Ежедневно 9:00 - 22:00</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">
                Следите за нами
              </h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-tiffany-pale rounded-full flex items-center justify-center hover:bg-tiffany hover:text-white transition-colors"
                >
                  <Icon name="Instagram" size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-tiffany-pale rounded-full flex items-center justify-center hover:bg-tiffany hover:text-white transition-colors"
                >
                  <Icon name="Facebook" size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-tiffany-pale rounded-full flex items-center justify-center hover:bg-tiffany hover:text-white transition-colors"
                >
                  <Icon name="Twitter" size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-tiffany-light/20 mt-8 pt-8 text-center text-sm text-gray-500">
            <p>&copy; 2024 Кафе-мороженое "Провинция". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

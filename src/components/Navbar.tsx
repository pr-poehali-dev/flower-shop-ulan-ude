
import React from "react";
import { Link } from "react-router-dom";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { PhoneCall, MapPin, Clock } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto py-4 px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Link to="/" className="text-2xl font-bold text-purple-600">
            T.Flower
          </Link>
        </div>
        
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Главная
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Каталог</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem title="Букеты" href="/catalog/bouquets">
                    Свежие букеты на любой вкус и повод
                  </ListItem>
                  <ListItem title="Композиции" href="/catalog/compositions">
                    Уникальные цветочные композиции
                  </ListItem>
                  <ListItem title="Розы" href="/catalog/roses">
                    Широкий ассортимент роз различных сортов
                  </ListItem>
                  <ListItem title="Подарки" href="/catalog/gifts">
                    Дополнения к цветам для особых случаев
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/about">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  О нас
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/delivery">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Доставка
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/contacts">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Контакты
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="hidden md:flex items-center text-sm text-gray-700">
          <PhoneCall className="h-4 w-4 mr-1 text-purple-600" />
          <span>+7 (301) 222-33-44</span>
        </div>
      </div>
      
      <div className="bg-purple-50 py-2 text-xs text-gray-700 hidden md:block">
        <div className="container mx-auto px-6 flex justify-center md:justify-between items-center">
          <div className="flex items-center">
            <MapPin className="h-3 w-3 mr-1 text-purple-600" />
            <span>Улан-Удэ, ул. Ленина (Арбат)</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-3 w-3 mr-1 text-purple-600" />
            <span>Ежедневно с 8:00 до 20:00</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;

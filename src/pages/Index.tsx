import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const services = [
    {
      icon: 'Camera',
      title: 'Видеонаблюдение',
      description: 'Профессиональная установка систем видеонаблюдения любой сложности',
      features: ['IP-камеры', 'Аналоговые системы', 'Облачное хранение', 'Мобильный доступ']
    },
    {
      icon: 'Radio',
      title: 'Домофоны',
      description: 'Монтаж видеодомофонов и переговорных устройств',
      features: ['Видеодомофоны', 'Аудиодомофоны', 'IP-домофоны', 'Интеграция с телефоном']
    },
    {
      icon: 'Wifi',
      title: 'Интернет',
      description: 'Настройка сетевого оборудования и Wi-Fi',
      features: ['Wi-Fi роутеры', 'Mesh-системы', 'Кабельные сети', 'Настройка VPN']
    },
    {
      icon: 'Lock',
      title: 'СКУД',
      description: 'Системы контроля и управления доступом',
      features: ['Электронные замки', 'Считыватели карт', 'Биометрия', 'Турникеты']
    },
    {
      icon: 'Shield',
      title: 'Охранная сигнализация',
      description: 'Установка охранных и пожарных систем',
      features: ['GSM-сигнализация', 'Датчики движения', 'Пожарная сигнализация', 'Тревожная кнопка']
    },
    {
      icon: 'ShoppingCart',
      title: 'Продажа оборудования',
      description: 'Широкий ассортимент сертифицированного оборудования',
      features: ['Hikvision', 'Dahua', 'Ajax', 'Mikrotik']
    }
  ];

  const equipment = [
    {
      category: 'Камеры видеонаблюдения',
      items: ['IP-камеры 2-8 МП', 'PTZ-камеры', 'Камеры с ИК-подсветкой', 'Панорамные камеры']
    },
    {
      category: 'Регистраторы и серверы',
      items: ['DVR регистраторы', 'NVR регистраторы', 'Гибридные системы', 'Серверное ПО']
    },
    {
      category: 'Контроль доступа',
      items: ['Электромагнитные замки', 'Считыватели RFID', 'Биометрия', 'Контроллеры СКУД']
    },
    {
      category: 'Домофоны',
      items: ['Видеодомофоны', 'Вызывные панели', 'IP-домофоны', 'Переговорные устройства']
    }
  ];

  const portfolio = [
    {
      title: 'Торговый центр',
      description: 'Система видеонаблюдения на 120 камер',
      image: 'https://cdn.poehali.dev/projects/9ddf1c9e-821c-47e4-8fb9-295760b9a567/files/57dd716e-593b-4f3e-8992-8f8e8d27bb69.jpg'
    },
    {
      title: 'Офисное здание',
      description: 'СКУД на 50 дверей с биометрией',
      image: 'https://cdn.poehali.dev/projects/9ddf1c9e-821c-47e4-8fb9-295760b9a567/files/3b26ac69-9e14-4668-a0c4-254d449b6ec8.jpg'
    },
    {
      title: 'Жилой комплекс',
      description: 'Видеодомофоны на 200 квартир',
      image: 'https://cdn.poehali.dev/projects/9ddf1c9e-821c-47e4-8fb9-295760b9a567/files/32d148c0-3ffd-425a-b246-63c00f0013f3.jpg'
    }
  ];

  const pricing = [
    { service: 'Установка IP-камеры', price: 'от 3 000 ₽' },
    { service: 'Установка видеодомофона', price: 'от 5 000 ₽' },
    { service: 'Монтаж СКУД (1 точка)', price: 'от 7 000 ₽' },
    { service: 'Установка GSM-сигнализации', price: 'от 8 000 ₽' },
    { service: 'Настройка сетевого оборудования', price: 'от 2 000 ₽' },
    { service: 'Прокладка кабеля (1 м)', price: 'от 150 ₽' }
  ];

  const faqs = [
    {
      question: 'Какая гарантия на оборудование?',
      answer: 'Мы предоставляем официальную гарантию от производителя на все оборудование. Срок гарантии зависит от производителя и модели: обычно от 1 до 3 лет.'
    },
    {
      question: 'Сколько времени занимает монтаж?',
      answer: 'Время установки зависит от объема работ. Установка 1-2 камер занимает 2-4 часа. Комплексные системы на объектах могут занять от нескольких дней до нескольких недель.'
    },
    {
      question: 'Можно ли просматривать камеры через телефон?',
      answer: 'Да, мы устанавливаем системы с возможностью удаленного просмотра через мобильные приложения для iOS и Android. Вы сможете наблюдать за объектом из любой точки мира.'
    },
    {
      question: 'Предоставляете ли вы сервисное обслуживание?',
      answer: 'Да, мы предлагаем полный спектр услуг по обслуживанию: плановые проверки, настройка, ремонт, модернизация систем. Доступны разовые выезды и договоры на абонентское обслуживание.'
    },
    {
      question: 'Работаете ли с юридическими лицами?',
      answer: 'Да, мы работаем как с физическими, так и с юридическими лицами. Для компаний предоставляем полный пакет документов, работаем по договору, выдаем акты и счета-фактуры.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-roboto">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 font-montserrat font-bold text-2xl text-primary">
            <Icon name="Shield" size={32} />
            <span>SecurePro</span>
          </div>
          <div className="hidden md:flex gap-6 font-medium">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#equipment" className="hover:text-primary transition-colors">Оборудование</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Прайс</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90">
            <Icon name="Phone" size={18} className="mr-2" />
            +7 (999) 123-45-67
          </Button>
        </nav>
      </header>

      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="font-montserrat text-5xl md:text-6xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Системы безопасности под ключ
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in">
            Профессиональный монтаж видеонаблюдения, домофонов, СКУД и охранных систем. Продажа сертифицированного оборудования с гарантией.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 animate-scale-in">
              Получить консультацию
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 animate-scale-in border-2">
              Рассчитать стоимость
              <Icon name="Calculator" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="font-montserrat text-4xl font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-primary"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <Icon name={service.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle className="font-montserrat text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Icon name="CheckCircle2" size={18} className="text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="equipment" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="font-montserrat text-4xl font-bold text-center mb-12">Оборудование</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipment.map((eq, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="font-montserrat text-xl">{eq.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {eq.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Icon name="Package" size={16} className="text-secondary flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="font-montserrat text-4xl font-bold text-center mb-12">Портфолио</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-montserrat">{project.title}</CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-montserrat text-4xl font-bold text-center mb-12">Прайс-лист</h2>
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <div className="space-y-4">
                {pricing.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex justify-between items-center py-4 border-b last:border-0 hover:bg-slate-50 px-4 rounded-lg transition-colors"
                  >
                    <span className="font-medium text-lg">{item.service}</span>
                    <span className="font-montserrat text-xl font-bold text-primary">{item.price}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-6 text-center">
                * Окончательная стоимость рассчитывается после осмотра объекта
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="faq" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-montserrat text-4xl font-bold text-center mb-12">Частые вопросы</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 shadow-sm">
                <AccordionTrigger className="text-lg font-medium hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-16 px-4 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-montserrat text-4xl font-bold text-center mb-12">Оставить заявку</h2>
          <Card className="shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Ваше имя</label>
                  <Input 
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="text-lg py-6"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Телефон</label>
                  <Input 
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                    className="text-lg py-6"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Сообщение</label>
                  <Textarea 
                    placeholder="Опишите вашу задачу..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={5}
                    className="text-base"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-lg py-6">
                  Отправить заявку
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 font-montserrat font-bold text-2xl mb-4">
                <Icon name="Shield" size={28} />
                <span>SecurePro</span>
              </div>
              <p className="text-gray-400">
                Профессиональные системы безопасности для вашего дома и бизнеса
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-lg mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  <span>info@securepro.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  <span>г. Москва, ул. Примерная, д. 1</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-lg mb-4">Режим работы</h3>
              <div className="space-y-2 text-gray-400">
                <p>Пн-Пт: 9:00 - 19:00</p>
                <p>Сб: 10:00 - 16:00</p>
                <p>Вс: выходной</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SecurePro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

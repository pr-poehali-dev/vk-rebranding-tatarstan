import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 0,
      title: 'Ребрендинг VK для Республики Татарстан',
      subtitle: 'Адаптивный дизайн с учетом региональной идентичности',
      content: 'hero'
    },
    {
      id: 1,
      title: 'Исходный логотип VK',
      subtitle: 'Текущая версия бренда',
      content: 'original'
    },
    {
      id: 2,
      title: 'Бриф и Исследование',
      subtitle: 'Маркетинговый анализ и мудборд',
      content: 'brief'
    },
    {
      id: 3,
      title: 'Новый Логотип',
      subtitle: 'Редизайн с татарскими мотивами',
      content: 'redesign'
    },
    {
      id: 4,
      title: 'Логобук',
      subtitle: 'Руководство по использованию',
      content: 'logobook'
    },
    {
      id: 5,
      title: 'Анимированный Логотип',
      subtitle: 'Динамическая версия для подразделений',
      content: 'animation'
    },
    {
      id: 6,
      title: 'Шоппер Маруся',
      subtitle: 'Применение фирменного стиля',
      content: 'shopper'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const renderSlideContent = () => {
    const slide = slides[currentSlide];

    switch (slide.content) {
      case 'hero':
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-7xl font-bold bg-gradient-to-r from-[hsl(var(--vk-blue))] via-[hsl(var(--tatar-green))] to-[hsl(var(--accent-red))] bg-clip-text text-transparent">
                Ребрендинг VK
              </h1>
              <h2 className="text-4xl font-semibold text-[hsl(var(--foreground))]">
                для Республики Татарстан
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Адаптивный дизайн логотипа с учетом национальных и региональных особенностей
            </p>
            <div className="flex gap-4 mt-8">
              <Badge variant="secondary" className="px-6 py-3 text-lg">
                Региональная идентичность
              </Badge>
              <Badge variant="secondary" className="px-6 py-3 text-lg">
                Современный стиль
              </Badge>
              <Badge variant="secondary" className="px-6 py-3 text-lg">
                Культурные мотивы
              </Badge>
            </div>
          </div>
        );

      case 'original':
        return (
          <div className="flex flex-col items-center justify-center h-full space-y-12">
            <div className="bg-white p-16 rounded-3xl shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="w-24 h-24 bg-[hsl(var(--vk-blue))] rounded-2xl flex items-center justify-center">
                  <Icon name="MessageCircle" size={48} className="text-white" />
                </div>
                <span className="text-6xl font-bold text-[hsl(var(--vk-blue))]">ВКонтакте</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-8 max-w-4xl">
              <Card className="p-6 text-center">
                <Icon name="Users" size={32} className="mx-auto mb-3 text-[hsl(var(--vk-blue))]" />
                <h3 className="font-semibold mb-2">Крупнейшая аудитория</h3>
                <p className="text-sm text-muted-foreground">Лидер рунета по охвату</p>
              </Card>
              <Card className="p-6 text-center">
                <Icon name="Target" size={32} className="mx-auto mb-3 text-[hsl(var(--vk-blue))]" />
                <h3 className="font-semibold mb-2">Миссия компании</h3>
                <p className="text-sm text-muted-foreground">Человек в центре экосистемы</p>
              </Card>
              <Card className="p-6 text-center">
                <Icon name="Lightbulb" size={32} className="mx-auto mb-3 text-[hsl(var(--vk-blue))]" />
                <h3 className="font-semibold mb-2">Инновации</h3>
                <p className="text-sm text-muted-foreground">Доступные технологии</p>
              </Card>
            </div>
          </div>
        );

      case 'brief':
        return (
          <div className="grid grid-cols-2 gap-8 h-full">
            <div className="space-y-6 overflow-auto pr-4">
              <h3 className="text-3xl font-bold mb-6">Бриф</h3>
              <Card className="p-6">
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Icon name="Users" size={20} className="text-[hsl(var(--vk-blue))]" />
                  Целевая аудитория
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Молодежь и активные пользователи 18-45 лет, ценящие региональную идентичность, культурное наследие и современные технологии. Патриоты Татарстана, интересующиеся национальной культурой.
                </p>
              </Card>
              <Card className="p-6">
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Icon name="MapPin" size={20} className="text-[hsl(var(--tatar-green))]" />
                  Региональные особенности
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Татарские орнаменты, тюльпан как национальный символ, сочетание зеленого (природа, рост) и красного (энергия, наследие) цветов. Баланс между традициями и современностью.
                </p>
              </Card>
              <Card className="p-6">
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Icon name="TrendingUp" size={20} className="text-[hsl(var(--accent-red))]" />
                  Новая аудитория
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Расширение охвата среди татарской молодежи, привлечение пользователей, интересующихся региональным контентом, укрепление связи с местными сообществами и культурными инициативами.
                </p>
              </Card>
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-bold mb-6">Мудборд</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-gradient-to-br from-[hsl(var(--tatar-green))] to-[hsl(var(--vk-blue))] rounded-xl flex items-center justify-center text-white text-6xl">
                  🌷
                </div>
                <div className="aspect-square bg-gradient-to-br from-[hsl(var(--accent-red))] to-[hsl(var(--gold))] rounded-xl flex items-center justify-center">
                  <div className="w-full h-full p-6 flex items-center justify-center">
                    <div className="border-4 border-white rounded-full w-20 h-20 flex items-center justify-center">
                      <div className="text-white text-3xl">❋</div>
                    </div>
                  </div>
                </div>
                <div className="aspect-square bg-[hsl(var(--vk-blue))] rounded-xl flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-2 p-4">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-white/30 rounded-sm" />
                    ))}
                  </div>
                </div>
                <div className="aspect-square bg-gradient-to-tr from-[hsl(var(--tatar-green))] via-[hsl(var(--gold))] to-[hsl(var(--accent-red))] rounded-xl flex items-center justify-center text-white text-5xl font-bold">
                  ТТ
                </div>
              </div>
            </div>
          </div>
        );

      case 'redesign':
        return (
          <div className="flex flex-col items-center justify-center h-full space-y-12">
            <div className="bg-white p-16 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[hsl(var(--tatar-green))]/10 rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[hsl(var(--accent-red))]/10 rounded-tr-full" />
              <div className="flex items-center gap-6 relative z-10">
                <div className="w-28 h-28 bg-gradient-to-br from-[hsl(var(--vk-blue))] to-[hsl(var(--tatar-green))] rounded-2xl flex items-center justify-center relative shadow-xl">
                  <div className="absolute inset-2 bg-white/20 rounded-xl" />
                  <div className="text-7xl z-10">🌷</div>
                </div>
                <div className="flex flex-col">
                  <span className="text-6xl font-bold bg-gradient-to-r from-[hsl(var(--vk-blue))] to-[hsl(var(--tatar-green))] bg-clip-text text-transparent">
                    ВКонтакте
                  </span>
                  <span className="text-2xl font-semibold text-[hsl(var(--accent-red))] mt-1">
                    Татарстан
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6 max-w-4xl">
              <Card className="p-6 text-center bg-gradient-to-br from-white to-blue-50">
                <div className="text-4xl mb-3">🌷</div>
                <h4 className="font-semibold mb-2">Тюльпан</h4>
                <p className="text-sm text-muted-foreground">Национальный символ Татарстана</p>
              </Card>
              <Card className="p-6 text-center bg-gradient-to-br from-white to-green-50">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-[hsl(var(--vk-blue))] to-[hsl(var(--tatar-green))] rounded-lg" />
                <h4 className="font-semibold mb-2">Градиент</h4>
                <p className="text-sm text-muted-foreground">Слияние традиций и технологий</p>
              </Card>
              <Card className="p-6 text-center bg-gradient-to-br from-white to-red-50">
                <div className="text-4xl mb-3">❋</div>
                <h4 className="font-semibold mb-2">Орнамент</h4>
                <p className="text-sm text-muted-foreground">Элементы татарской культуры</p>
              </Card>
            </div>
          </div>
        );

      case 'logobook':
        return (
          <div className="grid grid-cols-2 gap-8 h-full overflow-auto">
            <div className="space-y-6">
              <Card className="p-8 bg-white">
                <h4 className="font-semibold mb-4">Основная версия</h4>
                <div className="flex items-center gap-4 justify-center py-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-[hsl(var(--vk-blue))] to-[hsl(var(--tatar-green))] rounded-xl flex items-center justify-center text-5xl shadow-lg">
                    🌷
                  </div>
                  <span className="text-4xl font-bold bg-gradient-to-r from-[hsl(var(--vk-blue))] to-[hsl(var(--tatar-green))] bg-clip-text text-transparent">
                    ВКонтакте
                  </span>
                </div>
              </Card>
              <Card className="p-8 bg-gray-900">
                <h4 className="font-semibold mb-4 text-white">Версия для темного фона</h4>
                <div className="flex items-center gap-4 justify-center py-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-[hsl(var(--vk-blue))] to-[hsl(var(--tatar-green))] rounded-xl flex items-center justify-center text-5xl shadow-lg">
                    🌷
                  </div>
                  <span className="text-4xl font-bold text-white">
                    ВКонтакте
                  </span>
                </div>
              </Card>
              <Card className="p-8 bg-white">
                <h4 className="font-semibold mb-4">Черно-белая версия</h4>
                <div className="flex items-center gap-4 justify-center py-8">
                  <div className="w-20 h-20 bg-black rounded-xl flex items-center justify-center text-5xl shadow-lg">
                    🌷
                  </div>
                  <span className="text-4xl font-bold text-black">
                    ВКонтакте
                  </span>
                </div>
              </Card>
            </div>
            <div className="space-y-6">
              <Card className="p-8">
                <h4 className="font-semibold mb-6">Цветовая палитра</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-[hsl(var(--vk-blue))] rounded-lg shadow-md" />
                    <div>
                      <p className="font-medium">VK Blue</p>
                      <p className="text-sm text-muted-foreground">#0077FF</p>
                      <p className="text-xs text-muted-foreground">CMYK: 100, 53, 0, 0</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-[hsl(var(--tatar-green))] rounded-lg shadow-md" />
                    <div>
                      <p className="font-medium">Tatar Green</p>
                      <p className="text-sm text-muted-foreground">#00A650</p>
                      <p className="text-xs text-muted-foreground">CMYK: 100, 0, 80, 0</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-[hsl(var(--accent-red))] rounded-lg shadow-md" />
                    <div>
                      <p className="font-medium">Accent Red</p>
                      <p className="text-sm text-muted-foreground">#E63946</p>
                      <p className="text-xs text-muted-foreground">CMYK: 0, 85, 65, 0</p>
                    </div>
                  </div>
                </div>
              </Card>
              <Card className="p-8">
                <h4 className="font-semibold mb-6">Охранное поле</h4>
                <div className="bg-gray-50 p-8 rounded-lg flex items-center justify-center">
                  <div className="relative">
                    <div className="border-2 border-dashed border-gray-300 p-8">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-[hsl(var(--vk-blue))] to-[hsl(var(--tatar-green))] rounded-lg flex items-center justify-center text-2xl">
                          🌷
                        </div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-[hsl(var(--vk-blue))] to-[hsl(var(--tatar-green))] bg-clip-text text-transparent">
                          VK
                        </span>
                      </div>
                    </div>
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs text-muted-foreground whitespace-nowrap">
                      Минимум 1x высоты логотипа
                    </div>
                  </div>
                </div>
              </Card>
              <Card className="p-8">
                <h4 className="font-semibold mb-4">Минимальный размер</h4>
                <p className="text-sm text-muted-foreground mb-4">Логотип: 100 мм по длинной стороне</p>
                <p className="text-sm text-muted-foreground">Иконка: 24×24 px (цифровой формат)</p>
              </Card>
            </div>
          </div>
        );

      case 'animation':
        return (
          <div className="flex flex-col items-center justify-center h-full space-y-12">
            <h3 className="text-4xl font-bold">Анимированные версии для подразделений</h3>
            <div className="grid grid-cols-3 gap-8 w-full max-w-5xl">
              <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="space-y-4 text-center">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--vk-blue))] to-purple-500 rounded-xl flex items-center justify-center text-3xl animate-pulse">
                      🌷
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      маруся
                    </h4>
                    <p className="text-sm text-muted-foreground">Голосовой ассистент</p>
                  </div>
                </div>
              </Card>
              <Card className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="space-y-4 text-center">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--vk-blue))] to-[hsl(var(--tatar-green))] rounded-xl flex items-center justify-center text-3xl animate-pulse">
                      🌷
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      работа
                    </h4>
                    <p className="text-sm text-muted-foreground">Карьерная платформа</p>
                  </div>
                </div>
              </Card>
              <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="space-y-4 text-center">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--tatar-green))] to-emerald-500 rounded-xl flex items-center justify-center text-3xl animate-pulse">
                      🌷
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      здоровье
                    </h4>
                    <p className="text-sm text-muted-foreground">Медицинские услуги</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        );

      case 'shopper':
        return (
          <div className="flex items-center justify-center h-full">
            <div className="grid grid-cols-2 gap-12 items-center max-w-6xl">
              <div className="space-y-6">
                <h3 className="text-4xl font-bold">Шоппер «Маруся»</h3>
                <p className="text-lg text-muted-foreground">
                  Холщовая сумка с применением фирменного стиля для подразделения «Маруся»
                </p>
                <div className="space-y-4">
                  <Card className="p-4">
                    <div className="flex items-center gap-3">
                      <Icon name="Palette" size={24} className="text-purple-600" />
                      <div>
                        <h5 className="font-semibold">Цветовая схема</h5>
                        <p className="text-sm text-muted-foreground">Градиент VK Blue → Purple</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-4">
                    <div className="flex items-center gap-3">
                      <Icon name="Flower2" size={24} className="text-[hsl(var(--tatar-green))]" />
                      <div>
                        <h5 className="font-semibold">Графика</h5>
                        <p className="text-sm text-muted-foreground">Тюльпан + татарские орнаменты</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-4">
                    <div className="flex items-center gap-3">
                      <Icon name="QrCode" size={24} className="text-[hsl(var(--vk-blue))]" />
                      <div>
                        <h5 className="font-semibold">Интерактив</h5>
                        <p className="text-sm text-muted-foreground">QR-код на corp.mail.ru</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
              <div className="relative perspective-1000">
                <div className="relative w-[380px] h-[480px] transform rotate-y-[-8deg]" style={{ transformStyle: 'preserve-3d' }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-stone-100 via-stone-50 to-stone-100 rounded-sm shadow-[0_20px_60px_rgba(0,0,0,0.25)] border-[1px] border-stone-200/50">
                    <div className="relative w-full h-full p-8 flex flex-col">
                      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-48 h-4 bg-gradient-to-r from-transparent via-stone-300/40 to-transparent rounded-full" />
                      <div className="absolute top-8 left-12 right-12 flex justify-between">
                        <div className="w-2 h-8 bg-stone-300/30 rounded-full" />
                        <div className="w-2 h-8 bg-stone-300/30 rounded-full" />
                      </div>
                      
                      <div className="flex-1 flex flex-col items-center justify-center space-y-8 mt-12">
                        <div className="relative">
                          <div className="w-28 h-28 bg-gradient-to-br from-[hsl(var(--vk-blue))] to-purple-500 rounded-2xl flex items-center justify-center text-6xl shadow-lg transform -rotate-3">
                            🌷
                          </div>
                          <div className="absolute -top-2 -right-2 w-8 h-8 bg-[hsl(var(--tatar-green))] rounded-full opacity-20" />
                        </div>
                        
                        <div className="space-y-3 text-center">
                          <h4 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent tracking-tight">
                            маруся
                          </h4>
                          <p className="text-xs text-stone-500 tracking-wider uppercase">VK Voice Assistant</p>
                        </div>

                        <div className="flex gap-2 justify-center">
                          {[...Array(7)].map((_, i) => (
                            <div 
                              key={i} 
                              className="w-1.5 h-1.5 rounded-full"
                              style={{
                                backgroundColor: `hsl(${250 + i * 10}, 70%, ${60 + i * 3}%)`,
                                opacity: 0.4
                              }}
                            />
                          ))}
                        </div>

                        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
                          <div className="w-16 h-16 bg-white rounded-lg p-1.5 shadow-md">
                            <div className="w-full h-full bg-gray-900 rounded flex items-center justify-center">
                              <div className="grid grid-cols-3 gap-0.5">
                                {[...Array(9)].map((_, i) => (
                                  <div key={i} className="w-2 h-2 bg-white rounded-sm" />
                                ))}
                              </div>
                            </div>
                          </div>
                          <p className="text-[10px] text-center text-stone-500 mt-2">corp.mail.ru</p>
                        </div>
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/20 pointer-events-none mix-blend-overlay" />
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-30" />
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[85%] h-12 bg-gradient-to-b from-black/20 to-transparent rounded-full blur-xl" />
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-green-50">
      <div className="container mx-auto px-4 py-8 h-screen flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[hsl(var(--vk-blue))] to-[hsl(var(--tatar-green))] rounded-xl flex items-center justify-center text-2xl">
              🌷
            </div>
            <div>
              <h1 className="text-2xl font-bold">VK × Татарстан</h1>
              <p className="text-sm text-muted-foreground">Презентация ребрендинга</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-[hsl(var(--vk-blue))] w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        <Card className="flex-1 p-12 shadow-2xl bg-white/80 backdrop-blur-sm">
          <div className="h-full flex flex-col">
            <div className="mb-6">
              <h2 className="text-4xl font-bold mb-2">{slides[currentSlide].title}</h2>
              <p className="text-xl text-muted-foreground">{slides[currentSlide].subtitle}</p>
            </div>
            <div className="flex-1 overflow-auto">{renderSlideContent()}</div>
          </div>
        </Card>

        <div className="flex justify-between items-center mt-6">
          <Button
            onClick={prevSlide}
            variant="outline"
            size="lg"
            className="gap-2"
            disabled={currentSlide === 0}
          >
            <Icon name="ChevronLeft" size={20} />
            Назад
          </Button>
          <span className="text-sm text-muted-foreground">
            Слайд {currentSlide + 1} из {slides.length}
          </span>
          <Button
            onClick={nextSlide}
            size="lg"
            className="gap-2"
            disabled={currentSlide === slides.length - 1}
          >
            Далее
            <Icon name="ChevronRight" size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
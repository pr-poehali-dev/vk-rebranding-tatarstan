import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState<'covers' | 'fonts'>('covers');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const bookCovers = [
    { 
      id: 1, 
      title: 'Oil and Marble', 
      author: 'Stephanie Storey', 
      color: 'from-amber-600 to-stone-800',
      style: 'Классическая обложка с золотыми акцентами',
      elements: ['Мраморная текстура', 'Золотая типографика', 'Историческая атмосфера']
    },
    { 
      id: 2, 
      title: 'Raphael, Painter in Rome', 
      author: 'Stephanie Storey', 
      color: 'from-red-700 to-amber-900',
      style: 'Тёплая палитра эпохи Возрождения',
      elements: ['Красные тона', 'Классические шрифты', 'Архитектурные мотивы']
    },
    { 
      id: 3, 
      title: 'The Agony and the Ecstasy', 
      author: 'Irving Stone', 
      color: 'from-blue-900 to-purple-800',
      style: 'Драматичная композиция с фресками',
      elements: ['Синие тона Сикстинской капеллы', 'Барельефные текстуры', 'Крупная типографика']
    },
    { 
      id: 4, 
      title: 'The Birth of Venus', 
      author: 'Sarah Dunant', 
      color: 'from-teal-700 to-blue-600',
      style: 'Флорентийская палитра',
      elements: ['Морские оттенки', 'Изящные шрифты', 'Символизм Ренессанса']
    },
    { 
      id: 5, 
      title: 'The Passion of Artemisia', 
      author: 'Susan Vreeland', 
      color: 'from-rose-800 to-amber-700',
      style: 'Женская перспектива в искусстве',
      elements: ['Тёплые терракотовые тона', 'Кисти художника', 'Элегантная композиция']
    },
    { 
      id: 6, 
      title: 'The Botticelli Secret', 
      author: 'Marina Fiorato', 
      color: 'from-emerald-700 to-yellow-800',
      style: 'Загадочный триллер эпохи Возрождения',
      elements: ['Изумрудно-золотая палитра', 'Интрига', 'Флорентийские узоры']
    },
    { 
      id: 7, 
      title: 'The Marriage Portrait', 
      author: "Maggie O'Farrell", 
      color: 'from-purple-900 to-pink-700',
      style: 'Королевские портреты',
      elements: ['Пурпурные королевские тона', 'Портретная живопись', 'Богатые текстуры']
    },
    { 
      id: 8, 
      title: 'The Architect\'s Apprentice', 
      author: 'Elif Shafak', 
      color: 'from-cyan-800 to-orange-700',
      style: 'Восточная архитектура Возрождения',
      elements: ['Бирюзово-оранжевые акценты', 'Купола и минареты', 'Орнаментальные узоры']
    },
    { 
      id: 9, 
      title: 'The Medici Series', 
      author: 'Sarah Dunant', 
      color: 'from-red-900 to-yellow-700',
      style: 'Династическая сага',
      elements: ['Красно-золотая геральдика', 'Медичейский герб', 'Властные мотивы']
    },
    { 
      id: 10, 
      title: 'In the Company of the Courtesan', 
      author: 'Sarah Dunant', 
      color: 'from-violet-800 to-red-700',
      style: 'Венецианская роскошь',
      elements: ['Фиолетово-красная драпировка', 'Венецианское стекло', 'Роскошь']
    },
    { 
      id: 11, 
      title: 'Leonardo\'s Swans', 
      author: 'Karen Essex', 
      color: 'from-slate-700 to-amber-600',
      style: 'Придворная жизнь Ренессанса',
      elements: ['Серебряно-золотые тона', 'Лебединая грация', 'Дворцовые интерьеagedy']
    },
    { 
      id: 12, 
      title: 'The Girl with a Pearl Earring', 
      author: 'Tracy Chevalier', 
      color: 'from-indigo-900 to-amber-500',
      style: 'Голландский золотой век',
      elements: ['Синие с золотом', 'Жемчужные акценты', 'Интимная атмосфера']
    },
    { 
      id: 13, 
      title: 'The Venetian Affair', 
      author: 'Andrea Di Robilant', 
      color: 'from-teal-800 to-rose-600',
      style: 'Романтическая Венеция',
      elements: ['Лагунные оттенки', 'Мосты и каналы', 'Любовная драма']
    },
    { 
      id: 14, 
      title: 'Michelangelo and the Pope\'s Ceiling', 
      author: 'Ross King', 
      color: 'from-stone-800 to-blue-700',
      style: 'Документальная драма',
      elements: ['Каменные текстуры', 'Небесные фрески', 'Архитектурные формы']
    },
    { 
      id: 15, 
      title: 'The Venus Throw', 
      author: 'Steven Saylor', 
      color: 'from-amber-800 to-red-700',
      style: 'Римский детектив',
      elements: ['Мраморные колонны', 'Античные статуи', 'Криминальная интрига']
    },
    { 
      id: 16, 
      title: 'The Last Painting of Sara de Vos', 
      author: 'Dominic Smith', 
      color: 'from-gray-800 to-blue-600',
      style: 'Многослойное повествование',
      elements: ['Зимние пейзажи', 'Холодные оттенки', 'Временные слои']
    },
    { 
      id: 17, 
      title: 'The Glassblower of Murano', 
      author: 'Marina Fiorato', 
      color: 'from-cyan-700 to-amber-600',
      style: 'Венецианское стекло',
      elements: ['Прозрачные текстуры', 'Огненные блики', 'Ремесленные традиции']
    },
    { 
      id: 18, 
      title: 'Sacred Hearts', 
      author: 'Sarah Dunant', 
      color: 'from-rose-900 to-indigo-700',
      style: 'Монастырская жизнь',
      elements: ['Розово-пурпурные тона', 'Религиозные символы', 'Клаустрофобная атмосфера']
    },
    { 
      id: 19, 
      title: 'The Painter\'s Apprentice', 
      author: 'Laura Morelli', 
      color: 'from-amber-700 to-green-800',
      style: 'Мастерская художника',
      elements: ['Земляные тона', 'Палитры и кисти', 'Учебный процесс']
    },
    { 
      id: 20, 
      title: 'The Book of Lost Fragrances', 
      author: 'M.J. Rose', 
      color: 'from-purple-800 to-pink-600',
      style: 'Парфюмерная история',
      elements: ['Флаконы и ароматы', 'Фиолетово-розовая дымка', 'Загадочность']
    },
    { 
      id: 21, 
      title: 'The Borgia Confessions', 
      author: 'Alyssa Palombo', 
      color: 'from-red-800 to-black',
      style: 'Тёмная сторона Ренессанса',
      elements: ['Кроваво-чёрные тона', 'Интриги Ватикана', 'Опасность']
    },
    { 
      id: 22, 
      title: 'The School of Beauty and Charm', 
      author: 'Melanie Sumner', 
      color: 'from-pink-700 to-blue-600',
      style: 'Современное прочтение классики',
      elements: ['Контрастные цвета', 'Двойная временная линия', 'Элегантность']
    }
  ];

  const renaissanceFonts = [
    {
      id: 1,
      name: 'Garamond',
      designer: 'Claude Garamond',
      year: '1530-е',
      description: 'Классический шрифт эпохи Возрождения с элегантными пропорциями и превосходной читаемостью',
      usage: 'Oil and Marble, исторические романы',
      characteristics: ['Старостильная антиква', 'Умеренный контраст', 'Изящные засечки', 'Гуманистический стиль']
    },
    {
      id: 2,
      name: 'Bembo',
      designer: 'Francesco Griffo',
      year: '1495',
      description: 'Венецианский шрифт, вдохновлённый рукописями гуманистов',
      usage: 'Raphael Painter in Rome, книги по истории искусства',
      characteristics: ['Венецианская антиква', 'Каллиграфический характер', 'Органичные формы', 'Классические пропорции']
    },
    {
      id: 3,
      name: 'Palatino',
      designer: 'Hermann Zapf',
      year: '1949 (вдохновлён Ренессансом)',
      description: 'Современная интерпретация ренессансной каллиграфии',
      usage: 'Современные издания классики, элегантные заголовки',
      characteristics: ['Широкие пропорции', 'Сильный контраст', 'Выразительные засечки', 'Читаемость']
    },
    {
      id: 4,
      name: 'Jenson',
      designer: 'Nicolas Jenson',
      year: '1470',
      description: 'Один из первых римских шрифтов, образец типографического совершенства',
      usage: 'Исторические издания, репринты',
      characteristics: ['Гуманистическая антиква', 'Умеренные контрасты', 'Открытые формы', 'Стабильный ритм']
    },
    {
      id: 5,
      name: 'Centaur',
      designer: 'Bruce Rogers',
      year: '1914 (по мотивам Jenson)',
      description: 'Изысканная реконструкция венецианской типографики XV века',
      usage: 'Художественные издания, коллекционные книги',
      characteristics: ['Венецианский стиль', 'Деликатные формы', 'Элегантность', 'Историческая точность']
    },
    {
      id: 6,
      name: 'Caslon',
      designer: 'William Caslon',
      year: '1722',
      description: 'Английская интерпретация голландских старостильных шрифтов',
      usage: 'Классическая литература, исторические публикации',
      characteristics: ['Старостильная антиква', 'Надёжность', 'Вариативность', 'Универсальность']
    },
    {
      id: 7,
      name: 'Trajan',
      designer: 'Carol Twombly',
      year: '1989 (римские надписи)',
      description: 'Капительный шрифт на основе надписей колонны Траяна',
      usage: 'Заголовки книг об античности и Ренессансе, кинопостеры',
      characteristics: ['Только заглавные', 'Монументальность', 'Классические пропорции', 'Императорский стиль']
    },
    {
      id: 8,
      name: 'Adobe Jenson Pro',
      designer: 'Robert Slimbach',
      year: '1996 (по Jenson)',
      description: 'Цифровая версия классического Jenson с расширенными возможностями',
      usage: 'Современные издания исторической фикшен',
      characteristics: ['Цифровое качество', 'Полный набор символов', 'OpenType функции', 'Универсальность']
    },
    {
      id: 9,
      name: 'Minion Pro',
      designer: 'Robert Slimbach',
      year: '1990',
      description: 'Современный старостильный шрифт с духом Ренессанса',
      usage: 'Тексты романов, академические издания',
      characteristics: ['Неоклассическая антиква', 'Отличная читаемость', 'Множество начертаний', 'Универсальность']
    },
    {
      id: 10,
      name: 'Sabon',
      designer: 'Jan Tschichold',
      year: '1967',
      description: 'Шрифт на основе работ Гарамона, идеален для книжного набора',
      usage: 'Длинные тексты, романы',
      characteristics: ['Гармоничные пропорции', 'Комфорт чтения', 'Классический стиль', 'Стабильность']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-50 to-rose-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-700 to-red-800 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
              📚
            </div>
            <div>
              <h1 className="text-4xl font-bold text-stone-800">Книги Стефани Стори</h1>
              <p className="text-lg text-stone-600">Референсы обложек исторической фикшн и шрифты эпохи Возрождения</p>
            </div>
          </div>

          <div className="flex gap-3 mb-6">
            <Button
              onClick={() => setActiveTab('covers')}
              variant={activeTab === 'covers' ? 'default' : 'outline'}
              size="lg"
              className="gap-2"
            >
              <Icon name="BookOpen" size={20} />
              Обложки книг (22)
            </Button>
            <Button
              onClick={() => setActiveTab('fonts')}
              variant={activeTab === 'fonts' ? 'default' : 'outline'}
              size="lg"
              className="gap-2"
            >
              <Icon name="Type" size={20} />
              Шрифты Ренессанса (10)
            </Button>
          </div>
        </div>

        {activeTab === 'covers' && (
          <div>
            <div className="mb-6 p-6 bg-white rounded-xl shadow-md border border-amber-200">
              <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
                <Icon name="Palette" size={24} className="text-amber-700" />
                Визуальные референсы обложек
              </h2>
              <p className="text-stone-600 mb-4">
                Коллекция обложек исторической фикшн в стиле Стефани Стори: от её собственных произведений 
                об эпохе Возрождения до схожих работ других авторов. Обратите внимание на цветовые палитры, 
                типографику и композиционные решения.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Мраморные текстуры</Badge>
                <Badge variant="secondary">Золотая типографика</Badge>
                <Badge variant="secondary">Тёплые палитры</Badge>
                <Badge variant="secondary">Классические шрифты</Badge>
                <Badge variant="secondary">Историческая атмосфера</Badge>
                <Badge variant="secondary">Портретная живопись</Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {bookCovers.map((cover) => (
                <Card
                  key={cover.id}
                  className="group cursor-pointer hover:shadow-2xl transition-all duration-300 overflow-hidden"
                  onClick={() => setSelectedImage(cover.id)}
                >
                  <div className={`h-80 bg-gradient-to-br ${cover.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 w-full">
                        <h3 className="text-2xl font-bold text-white mb-2 line-clamp-2">
                          {cover.title}
                        </h3>
                        <p className="text-white/90 font-medium">{cover.author}</p>
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Icon name="ZoomIn" size={20} className="text-stone-800" />
                    </div>
                  </div>
                  <div className="p-4 bg-white">
                    <p className="text-sm font-semibold text-stone-700 mb-2">{cover.style}</p>
                    <div className="flex flex-wrap gap-1">
                      {cover.elements.map((element, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {element}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'fonts' && (
          <div>
            <div className="mb-6 p-6 bg-white rounded-xl shadow-md border border-amber-200">
              <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
                <Icon name="BookType" size={24} className="text-amber-700" />
                Типографика эпохи Возрождения
              </h2>
              <p className="text-stone-600 mb-4">
                Шрифты, вдохновлённые типографикой XV-XVI веков. Эти гарнитуры идеально подходят для обложек 
                исторической фикшн, передавая дух Ренессанса через классические пропорции, элегантные засечки 
                и гуманистический характер.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Garamond</Badge>
                <Badge variant="secondary">Bembo</Badge>
                <Badge variant="secondary">Jenson</Badge>
                <Badge variant="secondary">Palatino</Badge>
                <Badge variant="secondary">Trajan</Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {renaissanceFonts.map((font) => (
                <Card key={font.id} className="p-6 hover:shadow-xl transition-shadow">
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-3xl font-bold text-stone-800 mb-1" style={{ fontFamily: 'serif' }}>
                          {font.name}
                        </h3>
                        <p className="text-sm text-stone-600">
                          {font.designer} • {font.year}
                        </p>
                      </div>
                      <Badge className="bg-amber-600">{font.year.slice(0, 4)}</Badge>
                    </div>
                    
                    <div className="mb-4 p-4 bg-stone-50 rounded-lg border border-stone-200">
                      <p className="text-5xl font-serif text-stone-800 mb-2">Aa Bb Gg</p>
                      <p className="text-2xl font-serif text-stone-600">The Renaissance</p>
                    </div>
                  </div>

                  <p className="text-sm text-stone-700 mb-4">{font.description}</p>

                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-stone-500 uppercase mb-1">Применение</p>
                      <p className="text-sm text-stone-700">{font.usage}</p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-stone-500 uppercase mb-2">Характеристики</p>
                      <div className="flex flex-wrap gap-1">
                        {font.characteristics.map((char, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {char}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="mt-8 p-8 bg-gradient-to-br from-amber-50 to-stone-100">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Icon name="Info" size={24} />
                Рекомендации по использованию
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="BookText" size={18} className="text-amber-600" />
                    Для заголовков
                  </h4>
                  <ul className="space-y-2 text-sm text-stone-700">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-green-600 mt-0.5" />
                      <span><strong>Trajan</strong> — монументальные заголовки</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-green-600 mt-0.5" />
                      <span><strong>Garamond</strong> — элегантные названия</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-green-600 mt-0.5" />
                      <span><strong>Palatino</strong> — выразительные акценты</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="FileText" size={18} className="text-amber-600" />
                    Для основного текста
                  </h4>
                  <ul className="space-y-2 text-sm text-stone-700">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-green-600 mt-0.5" />
                      <span><strong>Bembo</strong> — идеален для романов</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-green-600 mt-0.5" />
                      <span><strong>Sabon</strong> — длинные тексты</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-green-600 mt-0.5" />
                      <span><strong>Minion Pro</strong> — универсальный выбор</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        )}

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <Card className="max-w-2xl w-full p-8">
              {bookCovers.find(c => c.id === selectedImage) && (
                <>
                  <div className={`h-96 bg-gradient-to-br ${bookCovers.find(c => c.id === selectedImage)?.color} rounded-xl mb-6 flex items-center justify-center text-center p-8`}>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 w-full">
                      <h2 className="text-4xl font-bold text-white mb-3">
                        {bookCovers.find(c => c.id === selectedImage)?.title}
                      </h2>
                      <p className="text-xl text-white/90">
                        {bookCovers.find(c => c.id === selectedImage)?.author}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Стиль обложки</h4>
                      <p className="text-stone-600">
                        {bookCovers.find(c => c.id === selectedImage)?.style}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Ключевые элементы</h4>
                      <div className="flex flex-wrap gap-2">
                        {bookCovers.find(c => c.id === selectedImage)?.elements.map((el, idx) => (
                          <Badge key={idx} variant="secondary">{el}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Button
                    onClick={() => setSelectedImage(null)}
                    className="w-full mt-6"
                    size="lg"
                  >
                    Закрыть
                  </Button>
                </>
              )}
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;

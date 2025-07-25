import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-cyber-dark font-orbitron">
      {/* Header */}
      <header className="bg-cyber-darker border-b border-cyber-cyan/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-3xl font-bold text-cyber-cyan animate-neon-glow">
                BETMATES
              </h1>
              <Badge className="bg-cyber-magenta/20 text-cyber-magenta border-cyber-magenta">
                BETA
              </Badge>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Button variant="ghost" className="text-cyber-cyan hover:bg-cyber-cyan/10">
                <Icon name="Home" className="mr-2" size={16} />
                Главная
              </Button>
              <Button variant="ghost" className="text-cyber-cyan hover:bg-cyber-cyan/10">
                <Icon name="Wallet" className="mr-2" size={16} />
                Кошелек
              </Button>
              <Button variant="ghost" className="text-cyber-cyan hover:bg-cyber-cyan/10">
                <Icon name="User" className="mr-2" size={16} />
                Профиль
              </Button>
              <Button variant="ghost" className="text-cyber-cyan hover:bg-cyber-cyan/10">
                <Icon name="Shield" className="mr-2" size={16} />
                Безопасность
              </Button>
            </nav>
            <Button className="bg-gradient-to-r from-cyber-cyan to-cyber-magenta text-cyber-dark font-bold">
              Войти
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-dark via-cyber-electric to-cyber-darker opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <h2 className="text-6xl md:text-8xl font-black text-transparent bg-gradient-to-r from-cyber-cyan via-cyber-magenta to-cyber-cyan bg-clip-text animate-neon-glow mb-6">
              БУДУЩЕЕ
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold text-cyber-cyan mb-8">
              АЗАРТНЫХ ИГР
            </h3>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Играйте друг против друга в безопасной киберпространственной среде. 
              Пополняйте баланс криптовалютой и выигрывайте в играх будущего.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-cyber-cyan to-cyber-magenta text-cyber-dark font-bold text-lg px-8 py-4 animate-pulse-border">
                <Icon name="Play" className="mr-2" size={20} />
                Начать играть
              </Button>
              <Button size="lg" variant="outline" className="border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan/10 text-lg px-8 py-4">
                <Icon name="Shield" className="mr-2" size={20} />
                Безопасность
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-cyber-darker/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-cyber-cyan mb-12">
            Возможности платформы
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-cyber-electric/20 border-cyber-cyan/30 p-6 hover:bg-cyber-cyan/5 transition-colors">
              <Icon name="Gamepad2" className="text-cyber-cyan mb-4" size={40} />
              <h3 className="text-xl font-bold text-cyber-cyan mb-2">P2P Игры</h3>
              <p className="text-gray-300">Играйте напрямую с другими игроками в честных матчах</p>
            </Card>
            <Card className="bg-cyber-electric/20 border-cyber-magenta/30 p-6 hover:bg-cyber-magenta/5 transition-colors">
              <Icon name="Bitcoin" className="text-cyber-magenta mb-4" size={40} />
              <h3 className="text-xl font-bold text-cyber-magenta mb-2">Криптоплатежи</h3>
              <p className="text-gray-300">Мгновенные депозиты и выводы в криптовалюте</p>
            </Card>
            <Card className="bg-cyber-electric/20 border-cyber-cyan/30 p-6 hover:bg-cyber-cyan/5 transition-colors">
              <Icon name="Shield" className="text-cyber-cyan mb-4" size={40} />
              <h3 className="text-xl font-bold text-cyber-cyan mb-2">Безопасность</h3>
              <p className="text-gray-300">Проверенная система защиты ваших средств</p>
            </Card>
            <Card className="bg-cyber-electric/20 border-cyber-magenta/30 p-6 hover:bg-cyber-magenta/5 transition-colors">
              <Icon name="Zap" className="text-cyber-magenta mb-4" size={40} />
              <h3 className="text-xl font-bold text-cyber-magenta mb-2">Мгновенно</h3>
              <p className="text-gray-300">Быстрые транзакции и мгновенные выплаты</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Game Rooms */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-cyber-cyan mb-12">
            Игровые комнаты
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((room) => (
              <Card key={room} className="bg-gradient-to-br from-cyber-electric/20 to-cyber-darker/40 border-cyber-cyan/30 p-6 hover:border-cyber-magenta/50 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-cyber-cyan">Комната #{room}</h3>
                  <Badge className="bg-cyber-magenta/20 text-cyber-magenta border-cyber-magenta">
                    LIVE
                  </Badge>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Ставка:</span>
                    <span className="text-cyber-cyan font-bold">0.001 BTC</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Игроки:</span>
                    <span className="text-cyber-magenta">2/2</span>
                  </div>
                  <Progress value={100} className="h-2 bg-cyber-dark" />
                  <Button className="w-full bg-gradient-to-r from-cyber-cyan to-cyber-magenta text-cyber-dark font-bold">
                    Присоединиться
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Wallet Section */}
      <section className="py-20 bg-cyber-darker/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-cyber-cyan mb-12">
              Криптокошелек
            </h2>
            <Tabs defaultValue="balance" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-cyber-electric/20">
                <TabsTrigger value="balance" className="text-cyber-cyan">Баланс</TabsTrigger>
                <TabsTrigger value="deposit" className="text-cyber-cyan">Пополнить</TabsTrigger>
                <TabsTrigger value="withdraw" className="text-cyber-cyan">Вывести</TabsTrigger>
              </TabsList>
              <TabsContent value="balance" className="space-y-6">
                <Card className="bg-gradient-to-r from-cyber-electric/20 to-cyber-darker/40 border-cyber-cyan/30 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-cyber-cyan">Общий баланс</h3>
                      <p className="text-4xl font-black text-transparent bg-gradient-to-r from-cyber-cyan to-cyber-magenta bg-clip-text">
                        0.00127 BTC
                      </p>
                    </div>
                    <Icon name="Bitcoin" className="text-cyber-magenta" size={60} />
                  </div>
                </Card>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="bg-cyber-electric/20 border-cyber-cyan/30 p-4">
                    <div className="flex items-center space-x-3">
                      <Icon name="TrendingUp" className="text-green-400" size={24} />
                      <div>
                        <p className="text-sm text-gray-400">Выигрыши</p>
                        <p className="font-bold text-green-400">+0.00050 BTC</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="bg-cyber-electric/20 border-cyber-magenta/30 p-4">
                    <div className="flex items-center space-x-3">
                      <Icon name="TrendingDown" className="text-red-400" size={24} />
                      <div>
                        <p className="text-sm text-gray-400">Проигрыши</p>
                        <p className="font-bold text-red-400">-0.00023 BTC</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="deposit" className="space-y-6">
                <Card className="bg-cyber-electric/20 border-cyber-cyan/30 p-6">
                  <h3 className="text-xl font-bold text-cyber-cyan mb-4">Пополнить баланс</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      <Button variant="outline" className="border-cyber-cyan text-cyber-cyan">
                        <Icon name="Bitcoin" className="mr-2" size={16} />
                        BTC
                      </Button>
                      <Button variant="outline" className="border-cyber-magenta text-cyber-magenta">
                        ETH
                      </Button>
                      <Button variant="outline" className="border-cyber-cyan text-cyber-cyan">
                        USDT
                      </Button>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-cyber-cyan to-cyber-magenta text-cyber-dark font-bold">
                      Создать адрес
                    </Button>
                  </div>
                </Card>
              </TabsContent>
              <TabsContent value="withdraw" className="space-y-6">
                <Card className="bg-cyber-electric/20 border-cyber-magenta/30 p-6">
                  <h3 className="text-xl font-bold text-cyber-magenta mb-4">Вывести средства</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400">Адрес кошелька</label>
                      <input 
                        className="w-full p-3 bg-cyber-dark border border-cyber-cyan/30 rounded-lg text-cyber-cyan"
                        placeholder="bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400">Сумма (BTC)</label>
                      <input 
                        className="w-full p-3 bg-cyber-dark border border-cyber-magenta/30 rounded-lg text-cyber-magenta"
                        placeholder="0.001"
                      />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-cyber-magenta to-cyber-cyan text-cyber-dark font-bold">
                      Вывести
                    </Button>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cyber-darker border-t border-cyber-cyan/30 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-cyber-cyan mb-4">BETMATES</h3>
              <p className="text-gray-400">Будущее азартных игр уже здесь</p>
            </div>
            <div>
              <h4 className="font-bold text-cyber-cyan mb-4">Игры</h4>
              <ul className="space-y-2 text-gray-400">
                <li>P2P Покер</li>
                <li>Блэкджек</li>
                <li>Рулетка</li>
                <li>Слоты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-cyber-cyan mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li>FAQ</li>
                <li>Чат 24/7</li>
                <li>Telegram</li>
                <li>Email</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-cyber-cyan mb-4">Правила</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Условия использования</li>
                <li>Политика конфиденциальности</li>
                <li>Ответственная игра</li>
                <li>KYC/AML</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-cyber-cyan/30 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2024 BetMates. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
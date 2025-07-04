import Header from './components/Header'

export default function HomePage() {
  return (
    <>
      <Header />

      <section className="bg-gray-100 text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Профессиональные утилиты для 3D</h1>
        <p className="text-lg text-gray-700 mb-8">Создавайте уникальные дизайны с нашими инструментами для 3ds Max</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition">Начать</button>
      </section>

      <section className="py-16 px-4 md:px-10 text-center bg-white">
        <h2 className="text-3xl font-semibold mb-6">Наша миссия - упрощать</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Мы создаем современные утилиты для 3D дизайнеров, которые помогают в работе с 3ds Max.
          Наша цель — облегчить процесс дизайна и вдохновить на новые творческие идеи.
        </p>
      </section>

      <section id="services" className="py-16 bg-gray-50 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Наши услуги</h2>
        <div className="max-w-3xl mx-auto text-gray-600 space-y-4">
          <p>Подписка на уникальные утилиты для создания интерьер-дизайнов.</p>
          <p>Профессиональная помощь и поддержка дизайнеров.</p>
          <p>Готовые проекты и кейсы для вдохновения.</p>
        </div>
      </section>

      <section id="gallery" className="py-16 bg-white text-center">
        <h2 className="text-2xl font-bold mb-6">Галерея</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-4">
          Портфолио работ, созданных с помощью наших утилит.
        </p>
      </section>

      <section className="bg-gray-100 py-12 px-4 text-center">
        <h2 className="text-xl font-semibold mb-4">Ваш email для подписки</h2>
        <input
          type="email"
          placeholder="Введите ваш email"
          className="px-4 py-2 border rounded-l-md w-64 max-w-full"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700">Подписаться</button>
      </section>

      <footer className="bg-gray-800 text-white py-8 text-center text-sm">
        <p>artrender.info@gmail.com | +7(952)-123-23-32</p>
        <p className="mt-2">Контакты | Услуги и подписки</p>
        <p className="mt-2">© 2025 All rights reserved.</p>
      </footer>
    </>
  )
}
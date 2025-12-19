import React from 'react'
import { motion } from 'framer-motion'
import { Card } from './components/ui/card'
import { CardContent } from './components/ui/CardContent'
import { Button } from './components/ui/button'

export default function MyFirstReadingLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-rose-50 to-sky-50 text-stone-700">

      {/* HERO */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/80 rounded-3xl shadow-lg p-10 md:p-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-rose-700 mb-6">
            My First Reading and Writing
          </h1>
          <p className="text-xl mb-4">Домашние задания — это слёзы и напряжение?</p>
          <p className="mb-4">
            Курс помогает детям преодолеть трудности в чтении и правописании,
            вернуть уверенность и учиться спокойно — без стресса.
          </p>
        </motion.div>
      </section>

      {/* FOR WHO */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-sky-700 mb-10">📌 Для кого курс</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="rounded-3xl bg-white shadow-md">
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">1–2 класс</h3>
              <p>Дети, которые не знают алфавит и не умеют читать</p>
            </CardContent>
          </Card>
          <Card className="rounded-3xl bg-white shadow-md">
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">2–4 класс</h3>
              <p>Дети, которые читают, но испытывают трудности</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* PROGRAM */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-emerald-700 mb-10">📚 Программа курса</h2>
        <div className="space-y-6">
          <Card className="rounded-3xl bg-emerald-50">
            <CardContent>
              <h3 className="text-2xl font-semibold mb-2">Уровень 1</h3>
              <p>Звуки алфавита, чтение первых слов и предложений, основы правописания</p>
            </CardContent>
          </Card>
          <Card className="rounded-3xl bg-sky-50">
            <CardContent>
              <h3 className="text-2xl font-semibold mb-2">Уровень 2</h3>
              <p>Все основные правила чтения и продвинутое правописание</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-rose-700 mb-6">📢 Набор открыт!</h2>
        <Button className="text-xl px-10 py-6 rounded-full shadow-lg">
          Записаться на курс
        </Button>
      </section>

    </div>
  )
}

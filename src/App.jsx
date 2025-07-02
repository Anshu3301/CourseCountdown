import { useState, useEffect } from 'react'
import CountdownCard from './components/CountdownCard'
import './App.css'

function App() {
  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0
  })

  const targetDate = new Date('2026-06-30T23:59:59').getTime()

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30.44))
        const weeks = Math.floor((difference % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24 * 7))
        const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)
        const milliseconds = Math.floor((difference % 1000) / 10)

        setTimeLeft({
          months,
          weeks,
          days,
          hours,
          minutes,
          seconds,
          milliseconds
        })
      }
    }, 10)

    return () => clearInterval(timer)
  }, [targetDate])

  const timeUnits = [
    { label: 'Months', value: timeLeft.months, color: 'from-purple-500 to-pink-500' },
    { label: 'Weeks', value: timeLeft.weeks, color: 'from-blue-500 to-cyan-500' },
    { label: 'Days', value: timeLeft.days, color: 'from-green-500 to-emerald-500' },
    { label: 'Hours', value: timeLeft.hours, color: 'from-yellow-500 to-orange-500' },
    { label: 'Minutes', value: timeLeft.minutes, color: 'from-red-500 to-pink-500' },
    { label: 'Seconds', value: timeLeft.seconds, color: 'from-indigo-500 to-purple-500' },
    { label: 'MILLISECs', value: timeLeft.milliseconds, color: 'from-teal-500 to-cyan-500' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-pink-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="relative z-10 text-center mb-8 sm:mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse-slow">
          Time Left...
        </h1>
{/*         <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-2">
          Time remaining until graduation
        </p>
        <p className="text-sm sm:text-base md:text-lg text-gray-400">
          June 30th, 2026
        </p>
        <div className="mt-4 h-1 w-24 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div> */}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 sm:gap-6 lg:gap-8 max-w-7xl w-full relative z-10">
        {timeUnits.map((unit, index) => (
          <CountdownCard
            key={unit.label}
            label={unit.label}
            value={unit.value}
            color={unit.color}
            delay={index * 100}
          />
        ))}
      </div>

      <div className="mt-8 sm:mt-12 text-center relative z-10">
        <p className="text-gray-400 text-sm sm:text-base">
          The clock is ticking! 
        </p>
      </div>
    </div>
  )
}

export default App

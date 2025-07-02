import { useState } from 'react'

const CountdownCard = ({ label, value, color, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`
        group relative transform transition-all duration-300 ease-in-out
        hover:scale-105 hover:-translate-y-2 cursor-pointer
        ${isHovered ? 'z-20' : 'z-10'}
      `}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card glow effect */}
      <div className={`
        absolute inset-0 bg-gradient-to-r ${color} rounded-2xl blur-xl opacity-0 
        group-hover:opacity-30 transition-opacity duration-300 scale-110
      `}></div>
      
      {/* Main card */}
      <div className={`
        relative backdrop-blur-lg bg-white/10 rounded-2xl p-4 sm:p-6 lg:p-8
        border border-white/20 shadow-2xl overflow-hidden
        hover:bg-white/15 hover:border-white/30 transition-all duration-300
        hover:shadow-glow-lg
      `}>
        {/* Inner glow */}
        <div className={`
          absolute inset-0 bg-gradient-to-r ${color} opacity-0 
          group-hover:opacity-10 transition-opacity duration-300 rounded-2xl
        `}></div>
        
        {/* Content */}
        <div className="relative z-10 text-center">
          <div className={`
            text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2
            bg-gradient-to-r ${color} bg-clip-text text-transparent
            group-hover:scale-110 transition-transform duration-300
          `}>
            {value.toString().padStart(2, '0')}
          </div>
          
          <div className="text-xs sm:text-sm lg:text-base text-gray-300 font-medium uppercase tracking-wider">
            {label}
          </div>
        </div>

        {/* Animated border */}
        <div className={`
          absolute inset-0 rounded-2xl bg-gradient-to-r ${color} opacity-0
          group-hover:opacity-20 transition-opacity duration-300
          animate-pulse-slow
        `}></div>

        {/* Corner accent */}
        <div className={`
          absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl ${color} 
          opacity-20 group-hover:opacity-40 transition-opacity duration-300
          rounded-bl-2xl rounded-tr-2xl
        `}></div>
      </div>
    </div>
  )
}

export default CountdownCard
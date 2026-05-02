"use client"

import React, { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

interface CalendarCardProps {
  onDateChange?: (date: Date) => void
  onTimeChange?: (time: string) => void
}

export const CalendarCard = ({ onDateChange, onTimeChange }: CalendarCardProps) => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [time, setTime] = useState("11:30")
  const [timeFormat, setTimeFormat] = useState<"12h" | "24h">("24h")

  const handleTimeFormatToggle = (format: "12h" | "24h") => {
    if (format === timeFormat) return
    
    setTimeFormat(format)
    
    // Parse current time (handling both 24h and 12h formats)
    const match = time.match(/(\d+):(\d+)\s*([ap]m)?/i)
    if (!match) return

    let hours = parseInt(match[1])
    const minutes = match[2]
    const period = match[3]?.toLowerCase()

    if (format === "12h") {
      // Convert from 24h to 12h
      const p = hours >= 12 ? "pm" : "am"
      const h = hours % 12 || 12
      setTime(`${h}:${minutes}${p}`)
    } else {
      // Convert from 12h to 24h
      let h = hours
      if (period === "pm" && h < 12) h += 12
      if (period === "am" && h === 12) h = 0
      setTime(`${h.toString().padStart(2, "0")}:${minutes}`)
    }
  }

  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate()
  const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay()

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  const handleDateClick = (day: number) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    
    if (newDate >= today) {
      setSelectedDate(newDate)
      onDateChange?.(newDate)
    }
  }

  const renderDays = () => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const totalDays = daysInMonth(year, month)
    const startDay = firstDayOfMonth(year, month)
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const days = []
    
    // Empty slots for previous month's end
    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10 w-10" />)
    }

    for (let day = 1; day <= totalDays; day++) {
      const date = new Date(year, month, day)
      const isSelected = selectedDate.getDate() === day && 
                         selectedDate.getMonth() === month && 
                         selectedDate.getFullYear() === year
      const isPast = date < today
      const isToday = date.getTime() === today.getTime()

      const dayOfWeek = date.getDay()
      const isWeekday = dayOfWeek >= 1 && dayOfWeek <= 5

      days.push(
        <button
          key={day}
          onClick={() => handleDateClick(day)}
          disabled={isPast}
          className={cn(
            "h-10 w-10 flex items-center justify-center rounded-md text-sm transition-all duration-200 relative",
            isSelected ? "bg-white text-black font-semibold" : "text-neutral-400 hover:bg-neutral-800",
            !isSelected && isWeekday && !isPast && "bg-neutral-800/50",
            isPast && "opacity-20 cursor-not-allowed hover:bg-transparent",
            isToday && !isSelected && "text-white font-bold"
          )}
        >
          {day}
          {isToday && !isSelected && (
            <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
          )}
        </button>
      )
    }
    return days
  }

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

  const formatSelectedDate = () => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    return `${days[selectedDate.getDay()]} ${selectedDate.getDate().toString().padStart(2, '0')}`
  }

  return (
    <Card className="w-full max-w-md bg-neutral-900 border-neutral-800 shadow-2xl rounded-[32px] overflow-hidden">
      <CardContent className="p-8">
        {/* Month Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-medium text-neutral-200">
            {monthNames[currentDate.getMonth()]} <span className="text-neutral-500">{currentDate.getFullYear()}</span>
          </h2>
          <div className="flex gap-1">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handlePrevMonth}
              className="text-neutral-500 hover:text-white hover:bg-neutral-800 rounded-full h-8 w-8"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleNextMonth}
              className="text-neutral-500 hover:text-white hover:bg-neutral-800 rounded-full h-8 w-8"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Day Names */}
        <div className="grid grid-cols-7 mb-4">
          {dayNames.map(day => (
            <div key={day} className="text-center text-[10px] font-bold text-neutral-500 tracking-widest">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-y-1">
          {renderDays()}
        </div>

        {/* Time Section */}
        <div className="mt-8 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-neutral-200">{formatSelectedDate()}</span>
            <div className="flex bg-neutral-800 rounded-full p-1">
              <button
                onClick={() => handleTimeFormatToggle("12h")}
                className={cn(
                  "px-3 py-1 text-[10px] font-bold rounded-full transition-all duration-200",
                  timeFormat === "12h" ? "bg-neutral-700 text-white" : "text-neutral-500 hover:text-neutral-300"
                )}
              >
                12h
              </button>
              <button
                onClick={() => handleTimeFormatToggle("24h")}
                className={cn(
                  "px-3 py-1 text-[10px] font-bold rounded-full transition-all duration-200",
                  timeFormat === "24h" ? "bg-neutral-700 text-white" : "text-neutral-500 hover:text-neutral-300"
                )}
              >
                24h
              </button>
            </div>
          </div>

          <div className="relative">
            <Input
              type="text"
              value={time}
              onChange={(e) => {
                setTime(e.target.value)
                onTimeChange?.(e.target.value)
              }}
              className="w-full bg-transparent border-neutral-700 rounded-2xl py-6 text-center text-lg font-medium text-white focus:border-white transition-colors"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

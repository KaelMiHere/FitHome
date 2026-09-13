import React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/dashboard')({
  component: DashboardPage,
})

function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#0C0C0E]">
      <iframe src="/dashboard.html" title="Dashboard" className="w-full h-screen border-0" />
    </div>
  )
}

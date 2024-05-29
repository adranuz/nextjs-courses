'use client'
import React from 'react'
import { SimpleWidget } from '@/components'
import { IoCartOutline } from 'react-icons/io5'
import { useAppSelector } from '@/store'

const widgets = [
  { title: 'Counter', icon: <IoCartOutline size={50} />, subTitle: 'Counter Client Side', label: 'Counter', href: '/dashboard/counter' },
]

export const WidgetsGrid = () => {
  const isCart = useAppSelector(state => state.counterReducer.count)
  return (
    <div className="flex flex-wrap p-2 gap-2 justify-center">
      <SimpleWidget {...widgets[0]} title={isCart.toString()}/>
    </div>
  )
}

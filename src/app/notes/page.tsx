import React from 'react'
import NoteItem from '../components/NoteItem'

const Page = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-10">
      <NoteItem />
      <NoteItem />
      <NoteItem />
      <NoteItem />
    </div>
  )
}

export default Page

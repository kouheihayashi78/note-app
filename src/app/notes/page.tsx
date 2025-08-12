import React from 'react'
import NoteItem from '../components/NoteItem'
import { getNotesList } from '@/lib/client'
import { Note } from './type';

const Page = async () => {
    const noteList = await getNotesList();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-10">
        {noteList.contents.map((note: Note) => (
            <NoteItem key={note.id} note={note}/>
        ))}
    </div>
  )
}

export default Page

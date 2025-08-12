import Link from "next/link";
import React from "react";
import { Note } from "../notes/type";

type NoteProps = {
  note: Note;
};

const getPlainTextExcerpt = (html: string, maxLength: number = 15): string => {
  // htmlタグを削除する
  const text = html
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();
  const chars = Array.from(text);
  // 15文字より大きい場合は、16文字目以降を削除して「...」をつける
  return chars.length > maxLength
    ? chars.slice(0, maxLength).join("") + "..."
    : text;
};

const NoteItem = ({ note }: NoteProps) => {
  return (
    <div className="bg-gray-100 rounded-lg p-5 relative">
      <Link href="/notes" className="absolute -top-4 left-4">
        <span className="w-8 h-8 inline-flex justify-center items-center bg-purple-500 hover:bg-purple-700 text-white rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 25 25"
            fill="currentColor"
          >
            <path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z" />
          </svg>
        </span>
      </Link>
      <Link href="/notes">
        <h3 className="text-purple-500 hover:text-purple-700 text-lg md:text-xl font-semibold mb-3 underline">
          {note.title}
        </h3>
        {getPlainTextExcerpt(note.content)}
      </Link>
    </div>
  );
};

export default NoteItem;

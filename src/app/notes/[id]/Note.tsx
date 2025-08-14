import React from "react";
// 下のコンポーネントとimportした型の競合が起きたため、このように記述している
import type { Note as NoteType } from "../type";
import parse from "html-react-parser";

type NoteProps = {
  note: NoteType;
};

const Note = ({ note }: NoteProps) => {
  return (
    <div className="flex flex-col bg-gray-100 rounded-lg p-5 gap-2.5">
      <h3 className="text-red-500 text-lg md:text-xl font-semibold">
        {note.title}
      </h3>
      <div className="mt-3 ml-5">
        {parse(note.content)}
      </div>
    </div>
  );
};

export default Note;
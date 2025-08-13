import Link from "next/link";
import Note from "./Note";
import { getNotesDetail } from "@/lib/client";

export default async function page({ params }: { params: { id:string }  }) {
    const id = await params.id
    const note = await getNotesDetail(id);
    return (
        <main className="mx-2 sm:mx-4">
            <Link href='/notes'>← back</Link>
            <h2 className="my-4 text-gray-400 text-xs">View Note</h2>
            <Note key={note.id} note={note}/>
        </main>
    );
}

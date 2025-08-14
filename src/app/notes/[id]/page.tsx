import Link from "next/link";
import Note from "./Note";
import { getNotesDetail, getNotesList } from "@/lib/client";

export default async function page({ params }: { params: Promise<{ id: string }>; }) {
    // paramsの中からidを抽出する
    const { id } = await params;
    const note = await getNotesDetail(id);
    return (
        <main className="mx-2 sm:mx-4">
            <Link href='/notes'>← back</Link>
            <h2 className="my-4 text-gray-400 text-xs">View Note</h2>
            <Note key={note.id} note={note}/>
        </main>
    );
}

// 静的エクスポート時ではダイナミックルートに対してgenerateStaticParams指定必須
export async function generateStaticParams() {
    const {contents} = await getNotesList();
    // idのプロパティにしているが、ここはフォルダーの名前に合わせる
    return contents.map((n) => ({ id: n.id }));
}

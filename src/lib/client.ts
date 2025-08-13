import { Note } from "@/app/notes/type";
import { createClient, MicroCMSQueries } from "microcms-js-sdk";

// microcms-js-sdkのセットアップ
export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN || "",
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY || "",
});

// ノート一覧取得
export const getNotesList = async () => {
  const noteList = await client.getList<Note>({
    endpoint: "notes",
  });
  return noteList;
};

// ノート詳細取得
export const getNotesDetail = async (id: string, queries?: MicroCMSQueries) => {
  const note = await client.getListDetail<Note>({
    endpoint: "notes",
    contentId: id,
    queries: queries
  });
  return note;
};

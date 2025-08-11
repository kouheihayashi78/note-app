import { createClient } from "microcms-js-sdk";

// microcms-js-sdkのセットアップ
export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN || "",
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY || "",
});

// ノート一覧取得
export const getNotesList = async () => {
  const noteList = await client.get({
    endpoint: "notes",
  });
  return noteList.contents;
};

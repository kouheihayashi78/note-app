import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // 静的エクスポート(s3にアップするための静的ファイルに変換)
  trailingSlash: true // 末尾にスラッシュがあるものをスラッシュのないurlにリダイレクト
};

export default nextConfig;

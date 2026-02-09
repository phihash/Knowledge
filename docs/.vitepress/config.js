export default {
  title: "備忘録",
  description: "個人的な備忘録",
  base: "/Knowledge/",
  themeConfig: {
    nav: [{ text: "ホーム", link: "/" }],
    sidebar: [
      {
        text: "React",
        items: [{ text: "React", link: "/react/" }],
      },
      {
        text: "Atcoder",
        items: [{ text: "Atcoder", link: "/atcoder/" }],
      },
      {
        text: "メモ",
        items: [
          { text: "はじめに", link: "/notes/" },
          { text: "サンプル", link: "/notes/sample" },
        ],
      },
    ],
  },
};

// サイト全体の設定ファイル　（タイトル、ナビゲーション、サイドバーなど）

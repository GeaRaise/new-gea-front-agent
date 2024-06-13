/**
 * 顧問先管理 Constants
 */

/**
 * 顧問先管理一覧ステータスフィルターアイテム
 */
export const STATUS_FILTER_ITEMS: { value: string; label: string }[] = [
  {
    value: "0",
    label: "すべて",
  },
  {
    value: "7",
    label: "承認済み",
  },
  {
    value: "8",
    label: "招待済み",
  },
  {
    value: "10",
    label: "代理登録",
  },
]

/**
 * 承認ステータスによるアクション
 */
export const STATUS_ACTIONS = [
  {
    id: "7",
    name: "登録済み",
    action: [
      {
        id: "1",
        label: "詳細",
        onClick: () => console.log("詳細ページに遷移"),
      },
      {
        id: "2",
        label: "削除",
        onClick: () => console.log("削除モーダル表示"),
      },
    ],
  },
  {
    id: "8",
    name: "招待済み",
    action: [
      {
        id: "1",
        label: "代理登録",
        onClick: () => console.log("代理登録ページに遷移"),
      },
      {
        id: "2",
        label: "再招待",
        onClick: () => console.log("再招待モーダル表示"),
      },
      {
        id: "3",
        label: "削除",
        onClick: () => console.log("削除モーダル表示"),
      },
    ],
  },
  {
    id: "10",
    name: "代理登録",
    action: [
      {
        id: "1",
        label: "代理登録",
        onClick: () => console.log("代理登録ページに遷移"),
      },
      {
        id: "2",
        label: "新規招待",
        onClick: () => console.log("新規招待モーダル表示"),
      },
      {
        id: "3",
        label: "削除",
        onClick: () => console.log("削除モーダル表示"),
      },
    ],
  },
  {
    id: "11",
    name: "代理登録",
    action: [
      {
        id: "1",
        label: "代理登録",
        onClick: () => console.log("代理登録ページに遷移"),
      },
      {
        id: "2",
        label: "削除",
        onClick: () => console.log("削除モーダル表示"),
      },
    ],
  },
]

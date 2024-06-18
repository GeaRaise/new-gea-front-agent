// 動的にメタデータ生成する場合は以下のようにする
// 参考：https://zenn.dev/ryota_09/articles/06ec306f0ef9ee
// export const generateMetadata = async ({ params }: { params: { id: string } }): Promise<Metadata> => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
//   const data = (await res.json()) as Post;

//   return {
//     title: `${params.id}: ${data.title}`,
//     description: `ディスクリプション:${params.id} ${data.body}`,
//   };
// }

const ClientsDetailPage = ({
  params: { id },
}: {
  params: {
    id: string
  }
}) => {
  return (
    <div>
      <h1>顧問先詳細ページ</h1>
      <p>顧問先ID: {id}</p>
    </div>
  )
}

export default ClientsDetailPage

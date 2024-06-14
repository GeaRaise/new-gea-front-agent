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

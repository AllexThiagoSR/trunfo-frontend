// User cookies para guardar o token de autenticação para usá-lo dentro da função getServerSideProps

export async function getServerSideProps(context) {
  return { props: { } }
}

export default function ProfileID() {
  return <div>Teste Mermão</div>
}

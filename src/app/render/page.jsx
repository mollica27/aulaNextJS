export default function render1() {
  const listaAprovados = ["João", "Jose", "Maria", "Stark", "zezinho"];

  function renderizaLista() {
    return listaAprovados.map((nome, i) => <li key={i}>{nome}</li>)
  }
  console.log(renderizaLista())

  return (
    <div>
        <h1>Lista</h1>
      <ul>{renderizaLista()}</ul>
    </div>
  );
}

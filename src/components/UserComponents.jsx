import { useFetch } from "../hooks/useFetch";

export const UserComponents = () => {
  const {state} = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const {data, isLoading, errors} = state


  return (
    <>
      {
      isLoading ? (
        <h4>Cargando...</h4>
      ) : errors ? (
        <p>Ha ocurrido un error</p>
      ) : (
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Website</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => {
              return (
                <tr key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.website}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      <h1>Lista de usuarions</h1>
    </>
  );
};

import { useFetchData } from "../hooks/useFetchData";

export const UserList = ({endPoint}) => {
  
  const {data, isLoading} = useFetchData({endPoint})
  return (
    <>
      <ul>
        {isLoading ? <p>CARGANDO...</p> : endPoint == "users"
          ? data.map((item) => <li key={item.id}>{item.name}Hola</li>)
          : data.map((comment) => <li key={comment.id}>{comment.body}</li>)}
      </ul>
    </>
  );
};

export function Testtt({ data }: any) {
  return (
    <div>
      {data ? (
        data.map((user: any) => <div key={user.id}>{user.name}</div>)
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

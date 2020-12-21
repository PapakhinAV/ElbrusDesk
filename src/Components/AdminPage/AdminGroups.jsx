const AdminGroups = ({ element }) => {
  return (
    <div>
      <p>{element.name}</p>
      <p>{element.city}</p>
      <p>{element.dateStart}</p>
      <p>{element.dateEnd}</p>
      <button>кнопка</button>
    </div>
  );
}

export default AdminGroups;

import "./employee.css";

export default function EmployeeList({ data, selectEmployee, handleDel }) {
  return (
    <div>
      <h2 className="header">Employee List</h2>

      {data.map((obj) => {
        return (
          <div
            onClick={() => {
              selectEmployee(obj);
            }}
            className="item"
          >
            <span>{obj.name}</span>
            <span
              onClick={() => {
                handleDel(obj.id);
              }}
            >
              ❌
            </span>
          </div>
        );
      })}
    </div>
  );
}

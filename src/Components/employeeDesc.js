import "./employee.css";
export default function EmployeeDesc({ selected }) {
  return (
    <div>
      <h2 className="header">Employee Detail</h2>
      <div className="desc">
        {selected && (
          <div>
            <icon>👤</icon>
            <h4>{selected.name}</h4>
            <p>Designation : {selected.designation}</p>
            <p>Department : {selected.department}</p>
          </div>
        )}
      </div>
    </div>
  );
}

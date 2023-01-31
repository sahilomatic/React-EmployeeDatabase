import { useState } from "react";
import datajson from "./data";
import EmployeeDesc from "./employeeDesc";
import EmployeeList from "./employeeList";
import "./employee.css";

import Model from "./Model/model";

export default function Preview() {
  const [data, setData] = useState(datajson);
  const [selected, setSelected] = useState();
  const [model, setModel] = useState(false);

  function selectEmployee(obj) {
    setSelected(obj);
  }

  function handleDel(id) {
    setData((prev) => {
      return prev.filter((obj) => {
        return obj.id != id;
      });
    });

    setSelected((prev) => {
      if (prev.id == id) {
        return null;
      }
    });
  }

  return (
    <div>
      <h1>Employee Database</h1>
      {model && <Model setModel={setModel} />}
      <div className="add-employee">
        <label> Add Employee :</label>{" "}
        <button
          onClick={() => {
            setModel(true);
          }}
        >
          ➕
        </button>
      </div>
      <div className="database">
        <div className="list">
          <EmployeeList
            data={data}
            selectEmployee={selectEmployee}
            handleDel={handleDel}
          />
        </div>
        <div className="detail">
          <EmployeeDesc selected={selected} />
        </div>
      </div>
    </div>
  );
}

import "./model.css";
export default function Model({ setModel }) {
  return (
    <div className="model-wrapper">
      <div className="model-container">
        <button
          style={{ float: "right", margin: "20px" }}
          onClick={() => {
            setModel(false);
          }}
        >
          ❌
        </button>
        <form>
          <div>
            <div>
              <label>Name</label> <input type="text" />
            </div>
            <div>
              <label>Designation</label> <input type="text" />
            </div>
            <div>
              <label>Department</label> <input type="text" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

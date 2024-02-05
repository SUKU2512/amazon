import React from "react";
import Card from "react-bootstrap/Card";

export default function Cards({ data }) {
  return (
    <div>
      {data.map((element) => {
        return (
          <div className="round">
            <label>
              <Card style={{ width: "22rem", border: "none" }}>
                <h4 className="mt-2" key={element.id}>
                  {element.name}
                </h4>
              </Card>
            </label>
          </div>
        );
      })}
    </div>
  );
}

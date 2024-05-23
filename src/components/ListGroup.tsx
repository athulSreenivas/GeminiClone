import { useState } from "react";
import { Button } from "./Button";
import Alert from "./Alert";
interface Props {
  list: string[];
}

function ListGroup({ list }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [visible, setVisibility] = useState(false);
  const [selectedTitle, setselectedTitle] = useState("Select the Title");

  let onchang = (head: string) => {
    setselectedTitle(head);
    setVisibility(true);
  };

  return (
    <>
      {visible && (
        <Alert
          message={selectedTitle}
          onChanges={() => {
            setVisibility(false);
          }}
        ></Alert>
      )}

      <ol className="list-group list-group-numbered">
        {list.map((item, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-start"
            onClick={() => {}}
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{item.heading}</div>
              {item.content}
            </div>
            <Button
              name={index}
              onChanges={() => onchang(item.heading)}
            ></Button>
          </li>
        ))}
      </ol>
    </>
  );
}

export default ListGroup;

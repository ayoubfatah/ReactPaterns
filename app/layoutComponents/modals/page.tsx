import { Modal, Open, Window } from "../../components/Modal";

export default function page() {
  return (
    <div>
      <Modal>
        {" "}
        <Open opens="test">
          <button>click here</button>
        </Open>
        <Window name="test">
          <div>ksjdljsdlakjdlaj</div>
        </Window>
      </Modal>

      <Modal>
        {" "}
        <Open opens="jjj">
          <button>open list </button>
        </Open>
        <Window name="jjj">
          <Content />
        </Window>
      </Modal>
    </div>
  );
}

function Content() {
  return (
    <div className="p-10">
      <p>Here is some random content for the modal.</p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  );
}

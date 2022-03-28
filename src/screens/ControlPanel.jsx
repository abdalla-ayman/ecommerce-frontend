import AddItem from "../components/AddItem";

function ControlPanel() {
  return (
    <div className="min-h-screen">
      <div className="h-64 bg-blue-600 text-white flex flex-col justify-center items-center text-4xl">
        <i class="fa-solid fa-worm mb-4 animate-bounce"></i>
        <h1>Control Panel</h1>
      </div>
      <div className="p-16">
        <AddItem />
      </div>
    </div>
  );
}

export default ControlPanel;
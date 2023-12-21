const ManageTask = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="rounded-sm overflow-hidden">
        <div className="header bg-slate-600 p-3">
          <h2 className="text-lg font-semibold text-center">To Do List</h2>
        </div>
      </div>
      <div className="rounded-sm overflow-hidden">
        <div className="header bg-slate-600 p-3">
          <h2 className="text-lg font-semibold text-center"> Ongoing list</h2>
        </div>
      </div>

      <div className="rounded-sm overflow-hidden">
        <div className="header bg-slate-600 p-3">
          <h2 className="text-lg font-semibold text-center"> Completed</h2>
        </div>
      </div>
    </div>
  );
};

export default ManageTask;

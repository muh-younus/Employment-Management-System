import React from "react";

function Createtask() {
  return (
    <div>
      <div className="mw-full mx-auto mt-6 bg-zinc-900 rounded-xl shadow-lg p-4">
        <h2 className="text-2xl font-semibold  text-white">Create New Task</h2>

        <form className="flex flex-wrap md:flex-nowrap gap-6">
          {/* LEFT SIDE */}
          <div className="w-full md:w-1/2 space-y-2">
            <div>
              <label className="block text-sm font-medium text-white">
                Task Title
              </label>
              <input
                type="text"
                placeholder="Make a UI design"
                className="mt-1 w-full rounded-md bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-400 px-3 py-1 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white">
                Date
              </label>
              <input
                type="date"
                className="mt-1 w-full rounded-md bg-zinc-800 border border-zinc-700 text-white px-3 py-1 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white">
                Assign To
              </label>
              <input
                type="text"
                placeholder="Employee Name"
                className="mt-1 w-full rounded-md bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-400 px-3 py-1 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white">
                Category
              </label>
              <input
                type="text"
                placeholder="Design, Development, etc"
                className="mt-1 w-full rounded-md bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-400 px-3 py-1 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full md:w-1/2 flex flex-col">
            <label className="block text-sm font-medium text-white">
              Description
            </label>
            <textarea
              rows="7"
              placeholder="Write task details here..."
              className="mt-1 w-full rounded-md bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-400 px-3 py-1 resize-none focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>

            <button
              type="submit"
              className="mt-4 self-end bg-emerald-500 hover:bg-emerald-700 text-white px-6 py-2 rounded-md  transition"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Createtask;

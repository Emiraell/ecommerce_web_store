export default function Login() {
  return (
    <div className=" m-auto pt-48 w-fit tracking-wider md:text-lg">
      <div className="py-10">
        <p className=" text-green-700 font-rochester text-xl md:text-2xl">
          Welcome to emirael store
        </p>
      </div>
      <form
        action=""
        className="bg-blue-950 px-12 py-10 rounded-lg text-slate-200 "
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="block rounded text-gray-900 p-1"
            placeholder="user"
          />
        </div>
        <div className="my-4">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="block rounded text-gray-900 p-1"
            placeholder="Enter password"
          />
        </div>
        <button className=" bg-green-700 w-full rounded-md hover:opacity-80 py-2 mt-3">
          submit
        </button>
      </form>
    </div>
  );
}

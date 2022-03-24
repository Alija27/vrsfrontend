const Vehicles = () => {
  const [user] = useContext(UserContext);
  const [types, setTypes] = useState([]);
  const [locations, setLocations] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  const [type, setType] = useState("");

  function submitForm() {
    useAxios
      .get("/vehicles")
      .then((res) => {
        setVehicles(res.data);
      })
      .catch((err) => {
        alert("Cannot fetch vehicles");
      });
  }

  useEffect(() => {
    useAxios
      .get("/types")
      .then((res) => {
        setTypes(res.data);
      })
      .catch((err) => {
        alert("ERROR");
      });
  }, []);

  useEffect(() => {
    useAxios
      .get("/vehicles")
      .then((res) => {
        setTypes(res.data);
      })
      .catch((err) => {
        alert("ERROR");
      });
  }, []);

  useEffect(() => {
    useAxios
      .get("/locations")
      .then((res) => {
        setLocations(res.data);
      })
      .catch((err) => {
        alert("ERROR");
      });
  }, []);

  return (
    <div>
      <div
        className="relative overflow-hidden text-center bg-center bg-no-repeat bg-cover h-96 p-50"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80")',
        }}
      >
        <div
          className="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submitForm();
            }}
          >
            <div className="flex items-center justify-center h-full">
              <div
                className="w-full gap-2 mx-8 rounded-full xl:flex my-15"
                style={{ height: "60px" }}
              >
                <div className="w-full mb-3 xl:w-1/5 ">
                  <select className="items-center block w-full px-3 m-0 my-2 font-normal text-gray-700 transition ease-in-out bg-white bg-no-repeat border border-gray-300 border-solid rounded-full appearance-none form-select bg-clip-padding focus:text-grey-900 focus:bg-white focus:border-white focus:outline-none">
                    <option value="">Vehicle Type</option>
                    {types.map((type) => (
                      <option value={type.id}>{type.name}</option>
                    ))}
                  </select>
                </div>
                <div className="w-full mb-3 xl:w-1/5 ">
                  <select className="items-center block w-full px-3 m-0 my-2 font-normal text-gray-700 transition ease-in-out bg-white bg-no-repeat border border-gray-300 border-solid rounded-full appearance-none form-select bg-clip-padding focus:text-grey-900 focus:bg-white focus:border-white focus:outline-none">
                    <option value="">Location</option>
                    {locations.map((location) => (
                      <option value={location.id}>{location.name}</option>
                    ))}
                  </select>
                </div>

                <div className="w-full mb-3 xl:w-1/5">
                  <input
                    type="datetime-local"
                    name=""
                    className="items-center block w-full px-3 m-0 my-2 font-normal text-gray-700 transition ease-in-out bg-white bg-no-repeat border border-gray-300 border-solid rounded-full appearance-none form-select bg-clip-padding focus:text-grey-900 focus:bg-white focus:border-white focus:outline-none"
                    id=""
                  />
                </div>
                <div className="w-full mb-3 xl:w-1/5">
                  <input
                    type="datetime-local"
                    name=""
                    className="items-center block w-full px-3 m-0 my-2 font-normal text-gray-700 transition ease-in-out bg-white bg-no-repeat border border-gray-300 border-solid rounded-full appearance-none form-select bg-clip-padding focus:text-grey-900 focus:bg-white focus:border-white focus:outline-none"
                    id=""
                  />
                </div>
                <div className="w-full py-2 xl:w-1/5">
                  <button className="w-full py-2 text-white bg-indigo-700 rounded-full">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </form>

          {/* <div className="text-white">
          <h2 className="mb-4 text-4xl font-semibold">Heading</h2>
          <h4 className="mb-6 text-xl font-semibold">Subheading</h4>
          <a
            className="inline-block py-3 mb-1 text-sm font-medium leading-snug text-gray-200 uppercase transition duration-150 ease-in-out border-2 border-gray-200 rounded px-7 hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
            href="#!"
            role="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            Call to action
          </a>
        </div> */}
        </div>
      </div>
      <div class="flex justify-center">
        <div class="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img
              class="rounded-t-lg"
              src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
              alt=""
            />
          </a>
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
            <p class="text-gray-700 text-base mb-4">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button
              type="button"
              class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vehicles;

import { useEffect, useState } from "react";
import getApi from "./api/api";
import DataCard from "./components/DataCard";
import { useAuth0 } from "@auth0/auth0-react";
import LoginBtn from "./components/LoginBtn";

const CACHE_KEY = "github_users";
const CACHE_EXPIRY = 10 * 1000;

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check cache
        const cachedData = localStorage.getItem(CACHE_KEY);
        if (cachedData) {
          const { data, timestamp } = JSON.parse(cachedData);
          const isExpired = Date.now() - timestamp > CACHE_EXPIRY;

          if (!isExpired) {
            console.log("Using Cached Data ");
            setData(data);
            setLoading(false);
            return;
          } else {
            console.log("Cache Expired, Fetching New Data ");
          }
        }

        // Fetch new data
        const res = await getApi();
        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({ data: res, timestamp: Date.now() })
        );

        setData(res);
      } catch (err) {
        setError("Failed to fetch data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredData = data.filter((item) =>
    item.login.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <h1 className="text-white">Loading...</h1>;
  if (error) return <h1 className="text-red-500">{error}</h1>;

  return (
    <div
      className={` flex justify-center items-center w-full ${
        isAuthenticated ? "h-full" : "h-screen"
      }`}
    >
      {isAuthenticated ? (
        <div className=" w-full flex flex-col justify-center items-center text-white">
          <div>
            <h1 className=" text-4xl">Hey welcome {user.name}</h1>
          </div>
          <div className=" w-full flex justify-center items-center m-6 gap-11">
            <input
              type="text"
              placeholder="Search User..."
              className="border-2 border-gray-400/50 w-[70%] p-2"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <LoginBtn />
          </div>

          {filteredData.map((item) => (
            <DataCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-10 text-white">
          <h1 className="text-4xl">Hey you are not Authenticated</h1>
          <div className=" flex justify-center items-center gap-5">
            {" "}
            Please ! <LoginBtn />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

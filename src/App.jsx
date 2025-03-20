import DataCard from "./components/DataCard";
import { useAuth0 } from "@auth0/auth0-react";
import LoginBtn from "./components/LoginBtn";
import DataList from "./components/DataList";

const URL = "https://api.github.com/users";

function App() {
  const { user, isAuthenticated } = useAuth0();

  return (
    <div
      className={` flex justify-center items-center w-full ${
        isAuthenticated ? "h-full" : "h-screen"
      }`}
    >
      {isAuthenticated ? (<div className="w-full">
        <DataList url={URL} user={user} /></div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-10 text-white">
          <h1 className="text-4xl">Hey you are not Authenticated</h1>
          <div className=" flex justify-center items-center gap-5">
            Please ! <LoginBtn />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

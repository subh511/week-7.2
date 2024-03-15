import { RecoilRoot, useRecoilValue } from "recoil";
import { networkAtom } from "./components/store/atom";

function App() {
  return (
    <RecoilRoot>
      <Buttons />
    </RecoilRoot>
  );
}

function Buttons() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  return (
    <div>
      <button>Home </button>
      <button>
        My Network (
        {networkNotificationCount >= 100 ? "99+" : networkNotificationCount})
      </button>
      <button>Jobs ()</button>
      <button>Messaging ()</button>
      <button>Notification ()</button>
      <button>Me </button>
    </div>
  );
}

export default App;

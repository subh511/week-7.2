import { RecoilRoot, useRecoilValue } from "recoil";
import {
  jobsAtom,
  messageAtom,
  networkAtom,
  notificationAtom,
} from "./components/store/atom";

function App() {
  return (
    <RecoilRoot>
      <Buttons />
    </RecoilRoot>
  );
}

function Buttons() {
  
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const messageAtomCount = useRecoilValue(messageAtom);
  const notificationAtomCount = useRecoilValue(notificationAtom);

  return (
    <div>
      <button>Home </button>
      <button>
        My Network (
        {networkNotificationCount >= 100 ? "99+" : networkNotificationCount})
      </button>
      <button>Jobs ({jobsAtomCount})</button>
      <button>Messaging ({messageAtomCount})</button>
      <button>Notification ({notificationAtomCount})</button>
      <button>Me </button>
    </div>
  );
}

export default App;

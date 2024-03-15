import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
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
  const notificationAtomCount = useRecoilValue(notificationAtom);
  const messageAtomCount = useRecoilValue(messageAtom);

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
      <ButtonUpdater />
    </div>
  );
}

function ButtonUpdater() {
  const setMessageAtomCount = useSetRecoilState(messageAtom);
  return (
    <div>
      <button
        onClick={() => {
          setMessageAtomCount((count) => count + 1);
        }}
      >
        Me{" "}
      </button>
    </div>
  );
}

export default App;

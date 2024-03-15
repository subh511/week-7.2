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
import { useMemo } from "react";

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

  // const totalNotification =
  //   networkNotificationCount +
  //   jobsAtomCount +
  //   networkNotificationCount +
  //   messageAtomCount;

  const totalNotification = useMemo(() => {
    return (
      networkNotificationCount +
      jobsAtomCount +
      networkNotificationCount +
      messageAtomCount
    );
  }, [
    networkNotificationCount,
    jobsAtomCount,
    networkNotificationCount,
    messageAtomCount,
  ]);

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
      <button>Me ({totalNotification})</button>
    </div>
  );
}

// function ButtonUpdater() {
//   const setMessageAtomCount = useSetRecoilState(messageAtom);
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setMessageAtomCount((count) => count + 1);
//         }}
//       >
//         Me
//       </button>
//     </div>
//   );
// }

export default App;

import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "NetworkAtom",
  default: 102,
});

export const jobsAtom = atom({
  key: "JobsAtom",
  default: 0,
});

export const messageAtom = atom({
  key: "MessageAtom",
  default: 0,
});

export const notificationAtom = atom({
  key: "NotificationAtom",
  default: 12,
});

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const networkAtomCount = get(networkAtom);
    const jobsAtomCount = get(jobsAtom);
    const messageAtomCount = get(messageAtom);
    const notificationAtomCount = get(networkAtom);

    return (
      networkAtomCount +
      jobsAtomCount +
      messageAtomCount +
      notificationAtomCount
    );
  },
});

//enclosing with asynchronous data

/**
 * export const notification = atom({
 * key:"networkAtom",
 * default: selector({
 * key:"networkAtomSelector",
 * get: async()=>{
 * await new promise(r=> setTimeout(r,5000))
 * const res = await axios.get("https://sum-server.100xdevs.com/notification")
 * return res.data
 * }
 * })
 * })
 */

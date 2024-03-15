import { atom } from "recoil";

export const NetworkAtom = atom({
  key: "NetworkAtom",
  default: 102,
});

export const JobsAtom = atom({
  key: "JobsAtom",
  default: 0,
});

export const MessageAtom = atom({
  key: "MessageAtom",
  default: 0,
});

export const NotificationAtom = atom({
  key: "NotificationAtom",
  default: 12,
});

import {
  Home,
  Discount,
  Heart,
  Messages,
  Notification,
} from "./icons";

export const SIDEBAR_MENU = [
  { id: "menu", icon: Home, path: "/menu" },
  { id: "orders", icon: Discount, path: "/menu/orders" },
  { id: "favorites", icon: Heart, path: "/menu/favorites" },
  { id: "messages", icon: Messages, path: "/menu/messages" },
  { id: "notifications", icon: Notification, path: "/menu/notifications" },
];

"use client";

import { DndProvider as Provider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function DndProvider({ children }) {
  return <Provider backend={HTML5Backend}>{children}</Provider>;
}

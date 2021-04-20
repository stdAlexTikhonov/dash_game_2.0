import React from "react";
import GameStore from "../../store/GameStore";
import { observer } from "mobx-react-lite";

export const Dev = observer(() => {
  return (
    <pre
      style={{
        background: "white",
        margin: "auto",
        fontFamily: "monospace",
        fontSize: 25,
      }}
    >
      {GameStore.level_map &&
        GameStore.level_map.map((item) => item.join(" ")).join("\n\r")}
    </pre>
  );
});

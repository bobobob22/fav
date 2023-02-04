import ReactDOM from "react-dom/client";

import "./translation/i18n";

import { App } from "./App";
import { Theme } from "./theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Theme>
    <App />
  </Theme>
);

import { showToast, Toast } from "@raycast/api";
import { runAppleScript } from "run-applescript";
import { buildScriptEnsuringTimIsRunning } from "./utils";

export default async () => {
  try {
    const script = buildScriptEnsuringTimIsRunning(`toggletimer`);
    await runAppleScript(script);
    showToast({
      title: "Success",
      message: "Timer toggled",
      style: Toast.Style.Success,
    });
  } catch (error) {
    showToast({
      title: "Error",
      message: "Could not toggle timer",
      style: Toast.Style.Failure,
    });
  }
};

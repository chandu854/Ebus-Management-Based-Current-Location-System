import { registerUser } from "./auth.js";
import { logAction } from "./logger.js";

document.getElementById("createDriver").onclick = () => {
  registerUser(
    email.value,
    password.value,
    "driver"
  );
  logAction("ADMIN_CREATE_DRIVER", email.value);
};

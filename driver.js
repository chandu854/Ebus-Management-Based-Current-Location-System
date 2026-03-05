import { db } from "./firebase.js";
import { collection, addDoc } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { logAction } from "./logger.js";

document.getElementById("postBus").onclick = async () => {
  await addDoc(collection(db, "buses"), {
    busNo: busNo.value,
    type: type.value,
    source: source.value,
    destination: destination.value,
    contact: contact.value
  });

  logAction("BUS_POSTED", busNo.value);
  alert("Bus Added");
};
 
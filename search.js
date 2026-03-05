import { db } from "./firebase.js";
import { collection, getDocs, query, where } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { logAction } from "./logger.js";

document.getElementById("getLocation").onclick = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      source.value = `${lat}, ${lng}`;
    });
  } else {
    alert("Geolocation not supported");
  }
};

document.getElementById("searchBus").onclick = async () => {
  const src = source.value;
  const dest = destination.value;
  let output = "";

  const loading = document.getElementById("loading");
  loading.style.display = "block";
  result.innerHTML = "";

  try {
    const q = query(collection(db, "buses"), where("source", "==", src), where("destination", "==", dest));
    const snapshot = await getDocs(q);
    const busBody = document.getElementById("busBody");
    busBody.innerHTML = "";
    snapshot.forEach(doc => {
      const b = doc.data();
      const row = document.createElement("tr");
      row.innerHTML = `<td>${b.busNo}</td><td>${b.type}</td><td>${b.source}</td><td>${b.destination}</td><td>${b.contact}</td>`;
      busBody.appendChild(row);
    });
    if (snapshot.size > 0) {
      document.getElementById("busTable").style.display = "table";
    } else {
      document.getElementById("busTable").style.display = "none";
    }
  } catch (error) {
    result.innerHTML = "Error searching buses";
  }
  logAction("SEARCH", `${src} to ${dest}`);
};

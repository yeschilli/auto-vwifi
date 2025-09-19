function setStatus(val) {
	document.querySelector("h5").textContent = val;
}

document.addEventListener(
	"DOMContentLoaded",
	function () {
		chrome.runtime.onMessage.addListener(function (request) {
			if (request.logout_success) setStatus("✅ Logged out");
			else if (request.network_error) setStatus("⛔ Network Error ⛔");
			else if (!request.logout_success) setStatus("🛜 Logged out");
		});
		var infoButton = document.getElementById("info");
		var logoutButton = document.getElementById("logout");

		// Login button click
		console.log(document.getElementsByClassName("button"))
		infoButton.addEventListener("click", function () {
			// chrome.tabs.create({
			// 	url: "http://136.233.9.110/registration/Main.jsp?wispId=1",
			// });
		});

		// Logout button click
		logoutButton.addEventListener("click", function () {
			setStatus("🚧 Logging out");
			chrome.runtime.sendMessage({ logout: true });
		});
	},
	false
);

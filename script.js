function showTab(tabId, event) {
  console.log("Tab clicked:", tabId);

  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => tab.classList.remove('active'));

  const buttons = document.querySelectorAll('.tab-button');
  buttons.forEach(button => button.classList.remove('active'));

  const selectedTab = document.getElementById(tabId);
  if (selectedTab) {
    selectedTab.classList.add('active');
    selectedTab.scrollIntoView({ behavior: "smooth" });
  } else {
    console.warn("Tab not found for id:", tabId);
  }

  event.target.classList.add('active');
}

// ✅ This must be OUTSIDE showTab function
function toggleTheme() {
  document.body.classList.toggle('light-mode');
  console.log("Theme toggled!");
}

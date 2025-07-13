const outputDiv = document.getElementById("output");
const copyBtn = document.getElementById("copyBtn");

// 🔹 Function to load summary when popup opens
function loadSummary() {
  chrome.storage.local.get("summary", ({ summary }) => {
    outputDiv.textContent = summary || "📋 No summary available yet. Select text on a webpage.";
  });
}

// 🔹 Load summary once on popup load
document.addEventListener("DOMContentLoaded", () => {
  loadSummary();
});

// 🔹 Listen for real-time updates to chrome.storage
chrome.storage.onChanged.addListener((changes, areaName) => {
  if (areaName === "local" && changes.summary) {
    const newSummary = changes.summary.newValue;
    outputDiv.textContent = newSummary || "⚠️ Updated but empty summary.";
  }
});

// 🔹 Handle copy button
copyBtn.addEventListener("click", () => {
  const textToCopy = outputDiv.textContent;
  if (textToCopy && textToCopy !== "📋 No summary available yet. Select text on a webpage.") {
    navigator.clipboard.writeText(textToCopy).then(() => {
      alert("Summary copied to clipboard!");
    }).catch(err => {
      alert("Failed to copy.");
      console.error("Copy error:", err);
    });
  }
});

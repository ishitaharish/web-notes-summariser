const COHERE_API_KEY = "your_key_here";

async function summarize(text) {
  const response = await fetch("https://api.cohere.ai/v1/chat", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${COHERE_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "command-r-plus",
      message: `Summarize the following text into structured, pointwise notes but dont skip the important information:\n\n${text}`,
      temperature: 0.3
    })
  });

  const data = await response.json();
  return data.text || "⚠️ No summary generated.";
}

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === "TEXT_SELECTED") {
    chrome.storage.local.set({ summary: "Summarizing new selection..." });
    summarize(msg.data)
      .then(summary => {
        chrome.storage.local.set({ summary });
      })
      .catch(error => {
        console.error("Summarization error:", error);
        chrome.storage.local.set({ summary: "Error summarizing." });
      });
  }
});

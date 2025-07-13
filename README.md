# web-notes-summariser
A **Chrome extension** that allows users to select text on any webpage and generate structured, pointwise notes using Cohere's NLP API.

This extension enables users to **select any text on a webpage** and instantly generate **structured, detailed, pointwise notes** using the Cohere `command-r-plus` language model. Summaries are styled for readability and can be easily copied to the clipboard for use in documents, notes, or reports.


## Installation

1. Clone or download this repository.
2. Update your **API key** in Line 1, `background.js`.
3. Open Chrome and navigate to `chrome://extensions/`.
4. Enable **Developer mode** in the top-right corner.
5. Click **"Load unpacked"** and select the project folder.
6. The extension icon will appear in your toolbar.


## How It Works

1. The user selects text on any webpage.
2. `content.js` sends the selected text to `background.js`.
3. `background.js` submits the text to **Cohere's command-r-plus** model.
4. The resulting summary is stored via `chrome.storage.local`.
5. `popup.js` retrieves and displays the latest summary in `popup.html`.


## Summarization Prompt

The model is instructed with the following prompt to ensure informative output, but you may alter it to suit your specific requirements in Line 12, `background.js`.

>"Summarize the following text into structured, pointwise notes but dont skip the important information"


## Usage

1. Highlight any paragraph or text on a webpage.
2. Click the extension icon.
3. The popup will display a structured summary.
4. Click Copy to Clipboard to store it for further use.

  

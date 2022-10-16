const batchSize = 200;

function removeEmails() {
  for (let i = 0; i < 400; i++) {
    console.log("removed: " + (i * batchSize));
    const threads = GmailApp.search("category:forums", 0, batchSize);
    threads.forEach(thread => {
      thread.moveToTrash();
    });
    if (threads.length < batchSize) {
      break;
    }
  }
}

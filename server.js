const readline = require("readline");
const chalk=require("chalk");//this is to enable color in text in the terminal
var Table = require('cli-table3');//this is for displaying the output in more formatted way


// --- Table formatting ---
const table = new Table({
  head: [
    chalk.yellow("No"),
    chalk.green("Repository"),
    chalk.cyan("Stars"),
    chalk.magenta("Language"),
    chalk.blue("URL")
  ],
  colWidths: [5, 40, 10, 15, 60], // adjust widths as needed
  wordWrap: true
});



// --- Set up readline ---
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "habiba$🚀 "
});

//preparing the past date based on the current date to can get the repos that was created on this past date
function getPastDate(duration) {
  const now = new Date();
  const past = new Date();
  switch (duration) {
    case "day": past.setDate(now.getDate() - 1); break;
    case "week": past.setDate(now.getDate() - 7); break;
    case "month": past.setMonth(now.getMonth() - 1); break;
    case "year": past.setFullYear(now.getFullYear() - 1); break;
    default: past.setDate(now.getDate() - 7);
  }
  return past.toISOString().split("T")[0];
}

//now lets fetch and we will define the paramters with default values 
async function fetchTrending(duration = "week", limit = 10) {
  const createdDate = getPastDate(duration);
  const url = `https://api.github.com/search/repositories?q=language:java+created:>${createdDate}&sort=stars&order=desc&per_page=${limit}`;
  
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`GitHub API returned ${res.status}`);
    const data = await res.json();
    
    if (!data.items || data.items.length === 0) {
      console.log("No repositories found for this criteria.\n");
      return;
    }
//making output formating
    console.log(`\nTop ${limit} Java repos from the past ${duration}:\n`);
    data.items.forEach((repo, i) => {
      table.push([
        i + 1,
        repo.full_name,
        repo.stargazers_count,
        repo.language || "N/A",
        repo.html_url
      ]);
    });
    
    // Print the table
    console.log(table.toString());

  } catch (err) {
    console.error("Error fetching trending repos:", err.message);
  }
}

// --- Welcome  ---
console.log("Hello! CLI tool to fetch trending GitHub repos 🤍");
console.log("Use: trending-repos --duration <day|week|month|year> --limit <number>");
console.log("Type 'exit' to quit.\n");

// --- Start prompt ---
rl.prompt();
//and here we will just wait for the input the user will enter to the prompt
rl.on("line", async (line) => {
  const input = line.trim();

  if (input.toLowerCase() === "exit") {
    rl.close();
    return;
  }

  // putting them with the default values and will check if the user enter them or no to get their values
  let duration = "week";
  let limit = 10;

  const durationMatch = input.match(/--duration\s+(\w+)/);
  const limitMatch = input.match(/--limit\s+(\d+)/);

  if (durationMatch) duration = durationMatch[1];
  if (limitMatch) limit = parseInt(limitMatch[1]);

  // --- Fetch and display trending repos ---
  await fetchTrending(duration, limit);

  rl.prompt();
}).on("close", () => {
  console.log("\nGoodbye! 🚀");
  process.exit(0);
});

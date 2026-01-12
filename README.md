# 🚀 GitHub Trending Repos CLI

> A sleek command-line tool to discover trending GitHub repositories with style ✨

## 📹 Demo

[Watch the demo video here](https://drive.google.com/file/d/1ca1WKU7uRpt-4699bMjEMMyCOhXNOD4-/view?usp=sharing)

---

## 📖 Overview

**GitHub Trending Repos CLI** is a powerful yet simple command-line interface tool that helps you discover the hottest Java repositories on GitHub. Filter by time range, customize result limits, and get beautifully formatted output right in your terminal!

## ✨ Features

- 🔍 **Smart Filtering**: Browse trending repos by day, week, month, or year
- 🎯 **Customizable Results**: Control how many repositories you want to see
- 🎨 **Beautiful Output**: Color-coded, tabular display for easy reading
- ⚡ **Fast & Efficient**: Direct GitHub API integration with robust error handling
- 🛡️ **Error Resilient**: Comprehensive error handling for API failures and invalid inputs
- 📦 **Zero Authentication**: Works out of the box with public repositories

## 🎯 Key Highlights

✅ Fetches trending Java repositories from GitHub (there is will be an option to getting the repositories based on the language the user enter it)
✅ Sorts by star count automatically  
✅ Displays repository name, stars, language, and direct URL  
✅ Interactive prompt-based interface  
✅ Clean and professional table formatting  

---

## 📋 Requirements

- Node.js (v14 or higher)
- npm or yarn

---

## 🚀 Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/trending-repos-cli.git
cd trending-repos-cli
```

### 2️⃣ Install Dependencies
```bash
npm install
```

Required packages:
- `chalk` - For colorful terminal output
- `cli-table3` - For beautiful table formatting

---

## 📚 Usage

### Starting the CLI

Run the application:
```bash
node index.js
```

You'll see a welcome message and an interactive prompt:
```
Hello! CLI tool to fetch trending GitHub repos 🤍
Use: trending-repos --duration <day|week|month|year> --limit <number>
Type 'exit' to quit.

habiba$🚀
```

### Command Syntax
```bash
trending-repos --duration <time-range> --limit <number>
```

### Available Options

| Option | Values | Default | Description |
|--------|--------|---------|-------------|
| `--duration` | `day`, `week`, `month`, `year` | `week` | Time range for trending repos |
| `--limit` | Any positive integer | `10` | Number of repositories to display |

### 💡 Example Commands

**1. Get top 10 repos from the past week (default):**
```bash
trending-repos
```

**2. Get top 20 repos from the past month:**
```bash
trending-repos --duration month --limit 20
```

**3. Get top 5 repos from yesterday:**
```bash
trending-repos --duration day --limit 5
```

**4. Get top 50 repos from the past year:**
```bash
trending-repos --duration year --limit 50
```

### 🎨 Sample Output
```
Top 20 Java repos from the past month:

┌─────┬──────────────────────────────────────────┬──────────┬─────────────────┬────────────────────────────────────────────────────────────┐
│ No  │ Repository                               │ Stars    │ Language        │ URL                                                        │
├─────┼──────────────────────────────────────────┼──────────┼─────────────────┼────────────────────────────────────────────────────────────┤
│ 1   │ awesome/java-project                     │ 45230    │ Java            │ https://github.com/awesome/java-project                    │
├─────┼──────────────────────────────────────────┼──────────┼─────────────────┼────────────────────────────────────────────────────────────┤
│ 2   │ cool-dev/spring-microservices            │ 32180    │ Java            │ https://github.com/cool-dev/spring-microservices           │
└─────┴──────────────────────────────────────────┴──────────┴─────────────────┴────────────────────────────────────────────────────────────┘
```

### 🚪 Exiting the Application

Simply type:
```bash
exit
```

---

## 🏗️ Project Structure
```
trending-repos-cli/
│
├── index.js              # Main application file
├── package.json          # Project dependencies
├── package-lock.json     # Dependency lock file
└── README.md            # Documentation (you are here!)
```

---

## 🔧 How It Works

1. **Date Calculation**: The tool calculates the past date based on your chosen duration
2. **API Query**: Sends a request to GitHub's Search API with filters:
   - Language: Java
   - Created after: calculated past date
   - Sorted by: stars (descending)
3. **Data Processing**: Parses JSON response and extracts relevant information
4. **Display**: Formats data into a beautiful color-coded table
5. **Error Handling**: Catches and displays any errors gracefully

---

## 🛡️ Error Handling

The CLI includes comprehensive error handling for:

- ❌ Invalid API responses
- ❌ Network failures
- ❌ Rate limiting issues
- ❌ Empty result sets
- ❌ Malformed user input

All errors are displayed with clear, user-friendly messages.

---

## 🌐 GitHub API Information

This tool uses the [GitHub REST API v3](https://docs.github.com/en/rest) specifically:
- **Endpoint**: `/search/repositories`
- **Rate Limit**: 60 requests/hour (unauthenticated)
- **Authentication**: None required for public repositories

---

## 🔮 Future Enhancements

Some ideas for future versions i will try to add it ان شاء الله :

- [ ] Support for multiple programming languages
- [ ] Export results to JSON/CSV
- [ ] GitHub authentication for higher rate limits
- [ ] More sorting options (forks, issues, etc.)
- [ ] Filter by specific topics or keywords
- [ ] Save favorite searches
- [ ] Integration with GitHub GraphQL API

---

<div align="center">

### Made with ❤️ by Habiba Abdelgowad

⭐ If there is any feedback or any advice i will be so grateful!

</div>

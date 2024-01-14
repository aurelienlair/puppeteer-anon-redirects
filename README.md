# Puppeteer-Anon-Redirects

The objective of the Puppeteer-Anon-Redirects project is to provide a simple tool for navigating the web with enhanced privacy and anonymity. This project specializes in handling URL redirects, ensuring a seamless and secure browsing experience while removing unnecessary query parameters. Whether you're web scraping, automating tasks, or simply exploring the internet, Puppeteer-Anon-Redirects prioritizes user privacy by cleaning URLs and leaving no trace.

Within this repository, you'll find comprehensive guidelines, code excerpts, and setups for constructing and executing automated URL cleanup using Puppeteer within a Node.js environment.

## Table of Contents

1. [Pre-requirements](#pre-requirements)
2. [Installation](#installation)
3. [Running the Script](#running-the-script)

## Pre-requirements

To get started with this project, you'll need to install the following tools:

- [Node.js](https://nodejs.org/): Node.js is a JavaScript runtime used for executing scripts and applications. Download and install it from the official website.

- [npm](https://www.npmjs.com/): npm is the Node.js package manager and is included with Node.js installation.

- [Tor](https://www.torproject.org/): Tor is a privacy-focused web browser and network that enables anonymous communication. Install Tor from the official website.

Please ensure that you have Node.js and npm installed on your machine before proceeding. For Tor, download and install it according to the instructions provided on the official Tor Project website.

Once you have these tools installed, you'll be ready to proceed with the experimentation project.

## Installation

This chapter guides you through the installation process, ensuring that you have all the necessary tools and dependencies to run the script.

### Navigate to the Project Directory

```bash
cd puppeteer-anon-redirects
```

### Install Dependencies

Install the required dependencies using npm:

```bash
npm install
```

## Running the Script

To execute the script and see the final URL without query parameters, follow these steps:

1. Ensure Tor is running:

   Before running the script, make sure that Tor is up and running. Open another terminal and start Tor using the `tor` command.

2. Open the `print_url_without_analytics.js` script in a text editor
3. Locate the following line in the script:

    ```javascript
    const url = "https://example.com/path/to/page?utm_source=tracking&utm_medium=annoying&utm_campaign=spam&other_param=value";
    ```

4. Replace the example URL with the one you want to test. You can use URLs with annoying tracking parameters
5. Save the changes
6. Open a terminal and navigate to the project directory:

    ```bash
    cd puppeteer-anon-redirects
    ```

7. Run the script:

```bash
node print_url_without_analytics.js
Final URL without query string: https://example.com/path/to/page 
```

This will execute the script with the specified URL, and the final URL without annoying tracking parameters will be printed in the console.

Feel free to experiment with different URLs by updating the url variable in the script. If you have any questions or encounter issues, refer to the project's [GitHub repository](https://github.com/aurelienlair/puppeteer-anon-redirects) for additional information and support.

## Conventions

### Git commit message convention

#### Format

`<type>(<scope>): <subject>`

| Type | Description |
|------| ----------- |
| `style` | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc) |
| `chore` | Changes to the build process or auxiliary tools and libraries such as documentation generation |
| `docs` | Documentation Updates |
| `feat` | New Features |
| `fix`  | Bug Fixes |
| `refactor` | Code Refactoring |
| `test` | Adding missing tests |
| `perf` | A code change that improves performance |

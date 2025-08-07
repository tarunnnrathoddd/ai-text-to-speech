# AI Text-to-Speech Web Application

A modern web application that converts text to speech using AI technology, built with React and Puter.ai.

## Features

- 🎯 Real-time text-to-speech conversion
- 🎨 Modern UI with blue-black gradient theme
- ⚡ Fast and responsive
- 🔊 Audio playback controls
- ⏱️ Character limit monitoring
- 🛑 Error handling
- 💫 Loading states and animations

## Tech Stack

- React
- Vite
- Tailwind CSS
- Puter.ai API for text-to-speech

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- A Puter.ai account

## Setup Instructions

1. Clone the repository:

```bash
git clone <your-repo-url>
cd text-to-speech
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Add Puter.ai Script:
   Add the following script tag to your `index.html`:

```html
<script src="https://app.puter.com/puter.js"></script>
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

## Usage

1. Wait for the "AI Ready" indicator to turn green
2. Enter your text in the textarea (max 3000 characters)
3. Click the "Speak" button to convert text to speech
4. Use the "Stop" button to stop audio playback

## Forking Instructions

1. Fork the repository using GitHub's fork button

2. Clone your forked repository:

```bash
git clone https://github.com/your-username/text-to-speech.git
```

3. Create a new branch:

```bash
git checkout -b feature/your-feature-name
```

4. Make your changes and commit:

```bash
git add .
git commit -m "Add your commit message"
```

5. Push to your fork:

```bash
git push origin feature/your-feature-name
```

6. Create a Pull Request from your fork to the main repository

## Project Structure

```
text-to-speech/
├── src/
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Entry point
│   └── index.html       # HTML template
├── package.json         # Dependencies and scripts
└── README.md           # Project documentation
```

## Contributing

1. Ensure any changes maintain existing functionality
2. Update documentation as needed
3. Follow the existing code style
4. Test your changes thoroughly

## License

MIT License - feel free to use this project for your own purposes

## Acknowledgments

- Puter.ai for providing the text-to-speech API
- React and Vite communities
- Tailwind CSS for styling utilities

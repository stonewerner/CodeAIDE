# 🤖 CodeAIDE - An AI-Powered IDE

[![License](https://img.shields.io/github/license/stonewerner/codeaide?color=2185d0&style=flat-square)](LICENSE)
![AI Model](https://img.shields.io/badge/AI-Deepseek--R1-purple)
![Based on](https://img.shields.io/badge/Based%20on-Judge0%20IDE-blue)
![OpenRouter](https://img.shields.io/badge/API-OpenRouter-green)

CodeAIDE enhances the powerful [Judge0 IDE](https://github.com/judge0/ide) with advanced AI coding assistance, providing developers with real-time AI-powered code suggestions, explanations, and problem-solving capabilities.

![CodeAIDE Screenshot](screenshot.png)

## ✨ Features

### Original Judge0 Features
- 💻 Rich set of supported programming languages
- ⚡ Quick code execution
- 🌐 Browser-based development environment
- 📝 Clean, intuitive interface

### AI Enhancements
- 🤖 AI coding assistant powered by Deepseek-R1
- 🔍 Code explanation on demand
- 📚 Documentation generation
- 🎯 Problem-solving guidance

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- Docker (optional, for local development)
- OpenRouter API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/stonewerner/codeaide.git
cd codeaide
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
# Create .env file
OPENROUTER_API_KEY=your_api_key
JUDGE0_API_KEY=your_judge0_api_key  # Optional
```

4. Start the development server:
```bash
npm run dev
```

## 🔧 Configuration


### Judge0 Configuration
Refer to the [Judge0 IDE documentation](https://github.com/judge0/ide) for base IDE configuration options.

## 💡 Usage

1. **Code Execution**
   - Write code in the editor
   - Select programming language
   - Click "Run" to execute


## 🔒 Security

- AI requests are processed through OpenRouter's secure API
- User code and data are not stored permanently
- Rate limiting implemented for API calls
- Secure authentication for premium features

## 🛠️ Architecture



## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Judge0 IDE](https://github.com/judge0/ide) - The foundation of this project
- [Herman Zvonimir Došilović](https://github.com/hermanzdosilovic) - Creator of Judge0 IDE
- [OpenRouter](https://openrouter.ai/) - AI API provider
- [Deepseek](https://deepseek.ai/) - AI model provider

## 📞 Support

- [Report a bug](https://github.com/yourusername/codeaide/issues)
- [Request a feature](https://github.com/yourusername/codeaide/issues)
- [Join our Discord](your-discord-link)

---

Built with ❤️ by [Your Name]

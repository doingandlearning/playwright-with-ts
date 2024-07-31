### Session 1: Introduction and Setup

#### 1. Introduction

##### Course Objectives and Structure

- **Objective**: By the end of this workshop, participants will be able to create, run, and manage automated tests using Playwright and TypeScript.
- **Structure**: The workshop is divided into sessions focusing on different aspects of Playwright and TypeScript, with hands-on exercises to reinforce learning. Please do interrupt me if you're confused because I haven't been clear enough.

##### Overview of Playwright and TypeScript

- **Playwright**: A powerful end-to-end testing framework that allows for automated testing of web applications across different browsers.
  - **Key Features**:
    - Cross-browser testing
    - Automatic waiting
    - Network interception
    - Screenshots and videos
- **TypeScript**: A statically typed superset of JavaScript that enhances code quality and developer productivity.
  - **Key Features**:
    - Static typing
    - Modern JavaScript features
    - Improved tooling and refactoring capabilities

##### Importance of Playwright for Testing

- **Efficient and Reliable Testing**: Playwright's robust feature set ensures reliable tests.
- **Cross-browser Compatibility**: Test across Chromium, Firefox, and WebKit.
- **Ease of Use**: Simple setup and comprehensive documentation make it accessible.

#### 2. Getting Started

##### Setting up a new project

- Move into the student directory and run:

```
npm init playwright@latest
```

- Open the project up in VSCode - that might mean opening VSCode and then opening the folder or using the `code` CLI command.
- Explore the project - what are each of the files doing?
- Run the example test

```
npx playwright test
```

- View the report

```
npx playwright show-report
```

- Run the test in UI mode

```
npx playwright test --ui
```

##### Configuring the Development Environment (VSCode Setup)

**VSCode Extensions**:

- **Recommended Extensions**:
  - **ESLint**: To maintain code quality.
  - **Prettier**: To format code consistently.
  - **Playwright Test for VSCode**: To run and debug Playwright tests within VSCode.

**VSCode Settings**:

- Open the command palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on macOS) and select `Preferences: Open Settings (JSON)`.
- Add the following configurations:
  ```json
  {
    "editor.formatOnSave": true,
    "typescript.validate.enable": true,
    "files.autoSave": "onFocusChange",
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  }
  ```

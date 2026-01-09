# CLAUDE.MD - Project Context for AI Assistant

## Project Overview

**Project Name**: Nina Vessel (lifespark)
**Type**: React Frontend Application
**Purpose**: Web interface for interacting with the Nina AI system, providing real-time status monitoring, chat capabilities, and log viewing.

## Architecture

### Tech Stack
- **Framework**: React 19.2.0
- **Build Tool**: Create React App (react-scripts 5.0.1)
- **UI Components**: Custom components with inline styles
- **Icons**: Lucide React
- **Testing**: Jest + React Testing Library
- **Code Quality**: ESLint, Husky, lint-staged

### Project Structure
```
/lifespark
├── src/
│   ├── App.jsx              # Main app component, renders all panels
│   ├── SuperNina.jsx        # Chat interface with Nina AI
│   ├── HeartbeatPanel.jsx   # Status monitoring component
│   ├── LogViewer.jsx        # Log display component
│   ├── api.js               # API layer for backend communication
│   ├── index.js             # React app entry point
│   └── setupTests.js        # Test configuration
├── public/                  # Static assets
├── .husky/                  # Git hooks (pre-commit)
└── package.json
```

### Backend Integration
- **API Base URL**: `http://localhost:8080`
- **Endpoints**:
  - `GET /status.json` - System status
  - `GET /logs` - Log entries
  - `POST /message` - Send message to Nina AI

## Coding Conventions

### Component Style
- **Functional Components**: Use function declarations with `export default`
- **Hooks**: React hooks (useState, useEffect) for state management
- **Styling**: Inline styles using style prop (no CSS modules yet)
- **File Extension**: `.jsx` for components, `.js` for utilities

### Code Quality
- **Pre-commit Hook**: Runs `lint-staged` before commits
- **ESLint**: Configured with `react-app` and `react-app/jest` extends
- **Testing**: Write tests for components using React Testing Library

### API Patterns
- All API calls use `async/await`
- Error handling with try/catch blocks
- Graceful fallbacks (return null or empty arrays on error)
- JSON communication format

### State Management
- Currently using local component state (useState)
- No global state management library (Redux, Context, etc.) yet

## Development Workflow

### Available Scripts
```bash
npm start    # Development server (localhost:3000)
npm test     # Run tests in watch mode
npm build    # Production build
```

### Git Workflow
- Husky enforces pre-commit hooks
- Lint-staged runs on staged files before commit
- Clean commit history expected

## Component Responsibilities

### App.jsx
- Top-level container
- Renders all main panels
- Simple layout with padding and typography

### SuperNina.jsx
- Chat interface for user-AI interaction
- Manages conversation history
- Sends messages via API and displays responses

### HeartbeatPanel.jsx
- Monitors system status
- Polls `/status.json` endpoint
- Displays health information

### LogViewer.jsx
- Fetches and displays logs
- Parses newline-separated log entries
- Provides log monitoring interface

### api.js
- Abstraction layer for backend communication
- Three main functions: getStatus(), getLogs(), sendMessage()
- Handles fetch requests and error cases

## Dependencies of Note

### Production
- `react` & `react-dom` - Core framework
- `lucide-react` - Icon library
- `web-vitals` - Performance monitoring
- `@testing-library/*` - Testing utilities

### Development
- `husky` - Git hooks automation
- `lint-staged` - Run linters on staged files

## Important Context

### Design Decisions
1. **No CSS Framework**: Currently using inline styles for simplicity
2. **CRA Not Ejected**: Using standard Create React App setup
3. **No Routing**: Single-page app without react-router
4. **Local State Only**: No global state management needed yet

### Future Considerations
- May need error boundary components
- Consider styling solution (CSS modules, styled-components, Tailwind)
- May need routing if app grows
- Consider WebSocket for real-time updates instead of polling

## Testing Strategy
- Unit tests for components using React Testing Library
- Test user interactions and component rendering
- Mock API calls in tests
- Configuration in setupTests.js

## Environment & Browser Support
- **Development**: Latest Chrome, Firefox, Safari
- **Production**: >0.2% usage, not dead, not op_mini

## Known Limitations
- Backend must be running on localhost:8080
- No authentication/authorization yet
- No error boundaries for graceful error handling
- Polling-based updates (no WebSocket)

## AI Assistant Guidelines

When helping with this project:

1. **Maintain Consistency**: Follow existing patterns for components and API calls
2. **Keep It Simple**: Avoid over-engineering; match the current simplicity level
3. **Inline Styles**: Continue using inline styles unless migrating to a styling solution
4. **Error Handling**: Always include try/catch for API calls with graceful fallbacks
5. **Testing**: Write tests for new components following existing patterns
6. **React 19**: Be aware of React 19 features and breaking changes
7. **No Premature Optimization**: Keep code readable and maintainable over clever

## Questions to Ask Before Implementation

- Should this component maintain local state or integrate with future global state?
- Does this need to be a separate component or part of an existing one?
- Should we add loading/error states for this API call?
- Does this require tests? (Usually yes for components)
- Will this work with the localhost:8080 backend contract?

---

Last Updated: 2026-01-09
Project Status: Early development, vessel foundation established

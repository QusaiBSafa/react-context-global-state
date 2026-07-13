# Infrastructure Overview
This application is a simple React app that uses the Context API for managing user authentication state.

## Data Models
- User: { id: string, username: string, token: string }

## API Design
- **POST /api/login**: Accepts username and password, returns user object with token.
- **POST /api/logout**: Clears the authentication state.

## Key Decisions
- Using Context API for state management to avoid prop drilling.
- Keeping the app simple and focused on authentication.
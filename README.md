# Chrome Extension for Zendesk Ticket Management

## Overview

This Chrome Extension is designed to enhance ticket management in Zendesk by providing automated response suggestions, searchable email templates, and efficient tab management based on issue types. Built with a combination of React.js, Node.js, Express, and PostgreSQL, this tool aims to streamline customer support workflows.

## Features

- **Ticket Suggestions**: Get automated response suggestions based on the ticket subject.
- **Template Search**: Easily search and retrieve email templates using keywords.
- **Grouped Tab Opener**: Open predefined groups of URLs based on specific issue types.

## Architecture

### Frontend (React.js)

- **TicketSuggestions Component**: Fetches and displays suggested responses.
- **TemplateSearch Component**: Allows searching of email templates by keywords.
- **TabGroupManager Component**: Manages and displays tab groups based on issue types.
- **Chrome Extension Manifest**: Configures permissions and entry points for the extension.

### Backend (Node.js, Express, Prisma)

- **API Routes**:
  - `POST /api/suggestions`: Provides suggestions based on ticket content.
  - `GET /api/templates`: Retrieves email templates based on search criteria.
  - `POST /api/templates`: Adds new email templates to the database.
  - `GET /api/tab-groups`: Fetches predefined groups of URLs by issue type.
  - `POST /api/tab-groups`: Adds or updates URL groups for specific issues.
- **Database Schema**:
  - **Template**: Stores email templates with subjects, bodies, and keywords.
  - **TabGroup**: Manages URL groups associated with different issue types.

### Database (PostgreSQL)

- **Prisma ORM**: Manages database interactions and schema modeling.

### Chrome Extension Scripts

- **Background Script**: Manages background tasks like opening tab groups.
- **Content Script**: Integrates with Zendesk to read ticket subjects and trigger suggestions.

## Integration

- **Zendesk**: Utilizes Zendesk APIs or DOM parsing to extract ticket details and provide relevant suggestions.
- **Suggestion Engine**: Basic string matching or advanced AI-based suggestions (e.g., OpenAI) for improved response recommendations.

## Installation and Usage

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/your-repo.git

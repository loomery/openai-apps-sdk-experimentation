# Travel Buddy MCP server (Node)

This directory contains a minimal Model Context Protocol (MCP) server implemented with the official TypeScript SDK. The server exposes the Travel Buddy demo widgets so you can experiment with UI-bearing tools in ChatGPT developer mode.

## Prerequisites

- Node.js 18+
- pnpm, npm, or yarn for dependency management

## Install dependencies

```bash
pnpm install
```

If you prefer npm or yarn, adjust the command accordingly.

## Run the server

```bash
pnpm start
```

The script bootstraps the server over SSE (Server-Sent Events), which makes it compatible with the MCP Inspector as well as ChatGPT connectors. Once running you can list the tools and invoke any of the travel planning experiences.

Each tool responds with:

- `content`: a short text confirmation that mirrors the original Travel Buddy examples.
- `structuredContent`: a small JSON payload that echoes the travel parameters, demonstrating how to ship data alongside widgets.
- `_meta.openai/outputTemplate`: metadata that binds the response to the matching Skybridge widget shell.

## Available Widgets

- **Pre-trip Planner**: Plan your travel itinerary with detailed scheduling and recommendations
- **Spontaneous Booking**: Find and book last-minute travel options and experiences

Feel free to extend the handlers with real data sources, authentication, and persistence.

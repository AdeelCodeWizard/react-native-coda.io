# Language Exercise App

## Description

This is a language exercise app built with React Native, TypeScript, and Firestore. Users guess English-to-German translations.

## Tech Stack

- React Native
- TypeScript
- Firestore

## Usage

1. Clone this repo.
2. Install dependencies with `npm install` or `yarn install`.
3. Run with `expo start`.

## Data Schema

Firestore data structure:

- **Collection:** `exercises`
- **Document:** Exercise document
 - **Field:** `english` (String) - The English phrase.
 - **Field:** `german` (String) - The correct German translation.
 - **Field:** `options` (Array of Strings) - Multiple-choice options for the translation.
 - **Field:** `answer` (String) - The correct answer from the options.


## Contributing

Contributions welcome! Open issues or PRs.

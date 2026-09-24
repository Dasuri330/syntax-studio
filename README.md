# Syntax Studio

> A modern personal portfolio website built with Angular and Bootstrap.

## Overview

**Syntax Studio** is my personal developer portfolio website, created to showcase my skills, projects, experience, and background as a software developer.

The portfolio uses a modern dark-themed interface with cyan and purple accents, responsive layouts, and reusable Angular components.

## Features

- Modern dark-themed portfolio design
- Responsive layout for desktop, tablet, and mobile
- Hero section
- Featured projects section
- Project showcase
- About section
- Skills and technologies
- Experience section
- Contact section
- Responsive navigation
- Reusable Angular components
- Client-side routing

## Technologies

### Frontend

- Angular 22
- TypeScript
- HTML5
- CSS3
- Bootstrap
- Bootstrap Icons

### Development Tools

- Visual Studio Code
- Git
- GitHub
- npm

## Project Structure

```text
src
 ┣ app
 ┃ ┣ app.config.ts
 ┃ ┣ app.css
 ┃ ┣ app.html
 ┃ ┣ app.routes.ts
 ┃ ┣ app.spec.ts
 ┃ ┗ app.ts
 ┣ components
 ┃ ┣ cta.component
 ┃ ┃ ┣ cta.component.css
 ┃ ┃ ┣ cta.component.html
 ┃ ┃ ┣ cta.component.spec.ts
 ┃ ┃ ┗ cta.component.ts
 ┃ ┣ navbar.component
 ┃ ┃ ┣ navbar.component.css
 ┃ ┃ ┣ navbar.component.html
 ┃ ┃ ┣ navbar.component.spec.ts
 ┃ ┃ ┗ navbar.component.ts
 ┃ ┗ project-list.component
 ┃ ┃ ┣ project-list.component.css
 ┃ ┃ ┣ project-list.component.html
 ┃ ┃ ┣ project-list.component.spec.ts
 ┃ ┃ ┗ project-list.component.ts
 ┣ environments
 ┃ ┣ environment.prod.ts
 ┃ ┣ environment.template.ts
 ┃ ┗ environment.ts
 ┣ models
 ┃ ┣ about.ts
 ┃ ┣ experience.ts
 ┃ ┣ featuredproject.ts
 ┃ ┣ skill.ts
 ┃ ┣ stat.ts
 ┃ ┗ techlogo.ts
 ┣ pages
 ┃ ┣ about
 ┃ ┃ ┗ about.component
 ┃ ┃ ┃ ┣ about.component.css
 ┃ ┃ ┃ ┣ about.component.html
 ┃ ┃ ┃ ┣ about.component.spec.ts
 ┃ ┃ ┃ ┗ about.component.ts
 ┃ ┣ case-study
 ┃ ┃ ┗ case-study.component
 ┃ ┃ ┃ ┣ case-study.component.css
 ┃ ┃ ┃ ┣ case-study.component.html
 ┃ ┃ ┃ ┣ case-study.component.spec.ts
 ┃ ┃ ┃ ┗ case-study.component.ts
 ┃ ┣ home
 ┃ ┃ ┣ featured-projects.component
 ┃ ┃ ┃ ┣ featured-projects.component.css
 ┃ ┃ ┃ ┣ featured-projects.component.html
 ┃ ┃ ┃ ┣ featured-projects.component.spec.ts
 ┃ ┃ ┃ ┗ featured-projects.component.ts
 ┃ ┃ ┗ home.component
 ┃ ┃ ┃ ┣ home.component.css
 ┃ ┃ ┃ ┣ home.component.html
 ┃ ┃ ┃ ┣ home.component.spec.ts
 ┃ ┃ ┃ ┗ home.component.ts
 ┃ ┗ projects
 ┃ ┃ ┣ projects.component.css
 ┃ ┃ ┣ projects.component.html
 ┃ ┃ ┣ projects.component.spec.ts
 ┃ ┃ ┗ projects.component.ts
 ┣ services
 ┃ ┣ contact-modal.service.spec.ts
 ┃ ┗ contact-modal.service.ts
 ┣ index.html
 ┣ main.ts
 ┗ styles.css
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm
- Angular CLI

### Installation

Clone the repository:

```bash
git clone https://github.com/Dasuri330/syntax-studio.git
```

Navigate to the project directory:

```bash
cd syntax-studio
```

Install the project dependencies:

```bash
npm install
```

### Development Server

Start the Angular development server:

```bash
ng serve
```

Then open your browser and navigate to:

```text
http://localhost:4200/
```

The application will automatically reload whenever you modify the source files.

## Building the Project

To create a production build:

```bash
ng build
```

The compiled application will be generated in the `dist/` directory.

## Running Tests

To execute the unit tests:

```bash
ng test
```

The project uses **Vitest** as its test runner.

## Preview

> Screenshots will be added as the portfolio design progresses.

<!--
Example:

![Syntax Studio Homepage](./screenshots/homepage.png)
-->

## Project Goals

The main goals of **Syntax Studio** are to:

- Build a professional personal portfolio
- Practice modern Angular development
- Improve frontend development skills
- Apply responsive web design principles
- Demonstrate component-based architecture
- Showcase academic and professional projects
- Create a portfolio that can be shared with potential employers

## Featured Projects

### AquaLuminus

A mobile UV water filtration monitoring system designed to provide real-time water quality and system insights.

**Technologies:**

- Angular
- React
- Tailwind CSS
- Python

### CGH Digitalization

A healthcare digitalization project focused on supporting patient care workflows and clinical operations.

**Technologies:**

- AngularJS
- JavaScript
- SCSS
- Bootstrap
- Docker

## Learning Focus

This project is also being used to continuously improve my skills in:

- Angular
- TypeScript
- Responsive Web Design
- Component-Based Architecture
- Git & GitHub
- UI/UX Implementation
- Frontend Development
- Full-Stack Development

## Author

**Dexter Cabubas**

BS Information Technology  
Mobile and Internet Technology

### Connect With Me

- GitHub: [@Dasuri330](https://github.com/Dasuri330)

---

If you find this project interesting, feel free to explore the repository.

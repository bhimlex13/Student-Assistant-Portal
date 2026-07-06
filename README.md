# Student Assistant Portal (SAP)

> _"It's reviewing time."_

**Student Assistant Portal (SAP)** is a lightweight, fully client-side study companion that transforms academic modules into interactive, gamified quizzes. Built entirely with vanilla web technologies and powered by JSON-driven content, SAP lets students review Prelims, Midterms, Prefinals, and Finals handouts across multiple subjects through three distinct play modes — **Classic**, **Hardcore**, and **Chill (Flashcards)** — alongside class and exam schedule lookups and a built-in Excel-to-JSON authoring tool.

The application requires no build step, no server, and no backend. It boots from a single `index.html`, fetches its data manifests, and runs entirely in the browser — making it ideal for static hosting providers such as GitHub Pages.

---

## Table of Contents

1. [Features](#features)
2. [Live Demo](#live-demo)
3. [Tech Stack](#tech-stack)
4. [Dependencies](#dependencies)
5. [System Architecture](#system-architecture)
6. [Application Flowcharts](#application-flowcharts)
7. [Data Schema](#data-schema)
8. [Data Flow](#data-flow)
9. [File Structure](#file-structure)
10. [Getting Started](#getting-started)
11. [Local Development](#local-development)
12. [Adding a New Quiz](#adding-a-new-quiz)
13. [Configuration](#configuration)
14. [Contributors](#contributors)
15. [Reporting Issues](#reporting-issues)
16. [License](#license)

---

## Features

### Quiz Engine
- **Three play modes**, switchable from the starter screen before each session:
  - **Classic** — Multiple-choice format where only one of the displayed choices is correct.
  - **Hardcore / Identification** — Type the answer free-form; the response must exactly match the correct answer to be validated.
  - **Chill (Flashcards)** — No scoring; tap the question to reveal the answer for stress-free review.
- **Automatic question shuffling** — Question order is randomized on every load for varied practice.
- **Inline rich media** — Questions and individual choices may attach images (with graceful fallback when assets fail to load).
- **Per-question progress tracking** — Live progress bar, question counter, and a sidebar question navigator.
- **Scored finisher screen** — End-of-quiz summary with raw score, percentage, and celebratory GIF finishers (toggleable via Settings).
- **Sound effects** — Correct/incorrect/perfect/good/bad audio cues driven from `Assets/Sound_Effects/` (toggleable via Settings).

### Explorer
- **Three-level navigation hierarchy**: Subject → Module (term) → Quiz set.
- Thumbnails and last-modified dates surfaced per item.
- **Back navigation** between hierarchy levels with state-aware breadcrumbs.
- Handles empty/active sets gracefully via a status banner.

### Schedules
- **Class schedules** and **Exam schedules** presented in segmented tabs, organized by day.
- Driven entirely from JSON manifests so schedules stay version-controlled.

### Other / Tools
- **Settings panel** — Toggle sound effects, GIF finishers, dark mode (persisted in `localStorage`).
- **Developer Tools**
  - **Excel → JSON Converter** — Convert `.xls`/`.xlsx` handouts directly into the SAP quiz JSON schema, with field-level include/exclude checkboxes and clipboard copy.
- **Quiz Outliner** — Authoring view for inspecting quiz data.
- **About page** — Project purpose, contributor credits, and external links.

### UX & Infrastructure
- Responsive layout with collapsible sidebar (`SAP_Stylesheet_Responsiveness.css`).
- Custom animation library wrapped via **ERUMA-UI** (an external UI toolkit loaded via CDN).
- SEO/social metadata via Open Graph tags.
- Splash screen gated by a per-session flag (`sessionStorage`) to avoid showing repeatedly within the same session.

---

## Live Demo

The canonical deployment lives on GitHub Pages:

```
https://bhimlex13.github.io/Student-Assistant-Portal/
```

Open the link above to use the latest deployed build. The `development` branch is the working branch; production releases are merged and published from the main branch.

---

## Tech Stack

| Layer            | Technology                                                             | Notes |
|------------------|------------------------------------------------------------------------|-------|
| Markup           | HTML5                                                                  | Static `.html` entry points per page. |
| Styling          | CSS3 (custom)                                                          | No preprocessor; modular stylesheet files per feature. |
| Logic            | Vanilla JavaScript (ES5/ES6)                                           | No framework, no bundler, no transpiler. |
| Data             | JSON                                                                   | Manifests and individual quiz files. |
| Storage          | `localStorage` / `sessionStorage`                                     | Settings persistence and splash-session gating. |
| Authoring Tool   | [SheetJS](https://sheetjs.com/) (`xlsx.full.min.js`)                    | Used in `fileConverter.html` to parse Excel files. |
| UI Toolkit       | [ERUMA-UI](https://github.com/ElmerF5445/ERUMA-UI)                    | Loaded via CDN; supplies shared interaction primitives (`Tabs_ChangeTab`, `Element_Attribute_Set`, animations, etc.). |
| Bootstrap        | Bootstrap 5.3.3 + Popper.js 2.11.8                                    | Used only on the About page for legacy modal scaffolding. |
| jQuery           | jQuery 3.5.1 (slim)                                                    | Used only on the About page for Bootstrap compatibility. |
| Hosting          | GitHub Pages                                                           | Static-site hosting; no server runtime required. |
| Version Control  | Git + GitHub                                                           | Branching strategy uses `development` for active work. |

---

## Dependencies

### External (CDN-loaded)
| Dependency                                       | Version   | Loaded From                                      | Purpose |
|--------------------------------------------------|-----------|--------------------------------------------------|---------|
| ERUMA-UI Debug stylesheet                        | latest    | `elmerf5445.github.io/ERUMA-UI`                  | Debug/visual layer. |
| ERUMA-UI `App_Javascript_Debugging.js`          | latest    | `elmerf5445.github.io/ERUMA-UI`                  | Debug helpers. |
| ERUMA-UI `App_Javascript_ERUMAUI.js`             | latest    | `elmerf5445.github.io/ERUMA-UI`                  | UI interactions. |
| ERUMA-UI `App_Javascript_ERUMAUI_Core.js`        | latest    | `elmerf5445.github.io/ERUMA-UI`                  | Core element/attribute helpers. |
| SheetJS `xlsx.full.min.js`                        | 0.18.x    | `cdnjs.cloudflare.com`                           | Excel parsing in the File Converter. |
| Bootstrap Bundle                                  | 5.3.3     | `cdn.jsdelivr.net`                               | About-page modal scaffolding. |
| Popper.js Core                                    | 2.11.8    | `cdn.jsdelivr.net`                               | Bootstrap positioning engine. |
| jQuery slim                                       | 3.5.1     | `code.jquery.com`                                | Bootstrap dependency on About page. |

### Local (in-repository)
- `Scripts/*.js` — application logic (Home, Quiz Player, Quiz Outliner, Settings, UI, Renderer).
- `Scripts/*.css` — application styles, broken down by feature (Explorer, QuizPlayer, Responsiveness, Animations, etc.).
- `Assets/*.json` — subject manifest and class/exam schedules.
- `quizzes/*.json` — the actual quiz content (one file per quiz set).

### Runtime Requirements
- A modern, evergreen browser with JavaScript enabled (Chrome, Edge, Firefox, Safari).
- `fetch` and `XMLHttpRequest` support (required for JSON data loading).
- No package manager, no Node.js, no build pipeline required — SAP runs directly from the file system or any static host.

---

## System Architecture

SAP follows a **static single-page style architecture** organized as a small set of HTML entry points that share a common JavaScript/CSS core and consume JSON data sources. There is no application server; all logic runs in the browser.

```
┌──────────────────────────────────────────────────────────────────────┐
│                         Client Browser                               │
│                                                                       │
│   ┌────────────┐   ┌────────────┐   ┌────────────┐   ┌────────────┐ │
│   │ index.html │   │quizPlayer. │   │quizOutliner│   │fileConverter│ │
│   │            │   │   html     │   │   .html    │   │   .html    │ │
│   └─────┬──────┘   └─────┬──────┘   └─────┬──────┘   └─────┬──────┘ │
│         │                │                │                │         │
│         ▼                ▼                ▼                ▼         │
│   ┌───────────────────────────────────────────────────────────────┐ │
│   │                  SAP JavaScript Core (Scripts/)                │ │
│   │  SAP_Javascript_Main · SAP_Javascript_Home                      │ │
│   │  SAP_Javascript_QuizPlayer · SAP_Javascript_QuizOutliner        │ │
│   │  SAP_Javascript_Settings · SAP_Javascript_UI · Renderer         │ │
│   └───────────────────────────────────────────────────────────────┘ │
│                                 │                                    │
│                                 ▼                                    │
│   ┌───────────────────────────────────────────────────────────────┐ │
│   │              ERUMA-UI (CDN) — shared UI primitives             │ │
│   │  Tabs · Element Attribute API · Animations · Modals · Toasts     │ │
│   └───────────────────────────────────────────────────────────────┘ │
│                                 │                                    │
│         ┌───────────────────────┼───────────────────────┐           │
│         ▼                       ▼                       ▼           │
│   ┌─────────────┐      ┌────────────────┐      ┌─────────────┐     │
│   │ localStorage │      │ sessionStorage  │      │  fetch / XHR │    │
│   │ (settings)   │      │ (splash gating) │      │  (quizzes/)  │    │
│   └─────────────┘      └────────────────┘      └──────┬──────┘     │
│                                                        │            │
│                                                        ▼            │
│   ┌───────────────────────────────────────────────────────────────┐ │
│   │                    Static JSON Data Layer                       │ │
│   │  SAP-Subject-Manifest.json · SAP-Class-Schedule.json            │ │
│   │  SAP-Exam-Schedule.json · quizzes/*.json                         │ │
│   └───────────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────────────┘
```

### Architectural Principles

1. **No build step.** All sources ship as the deployment artifacts — edits land live on push.
2. **Page-per-route.** Each top-level view (`index.html`, `quizPlayer.html`, `quizOutliner.html`, `fileConverter.html`, `about.html`) is its own HTML document; navigation between them is full-page (`Page_ChangePage(url)`).
3. **Declarative data.** Content lives in JSON manifests, edits to which immediately change available quizzes/schedules.
4. **Attribute-driven UI.** Components communicate state through custom HTML attributes (`State`, `Level`, `Stage`, `Display`, `Radio_ActiveButton`, `IsActive`, etc.) manipulated through ERUMA-UI helpers instead of inline style mutations.
5. **Settings persistence.** Per-user preferences (`localStorage`) and per-session gating (`sessionStorage`) decouple splash/auth-style flows from developer-controlled defaults.
6. **Externalized UI toolkit.** ERUMA-UI is consumed from a CDN so UI primitives stay consistent with sibling projects and updates ship without bundling.

---

## Application Flowcharts

### High-Level User Flow

```
            ┌─────────────┐
            │  Open SAP    │
            └──────┬──────┘
                   ▼
       ┌───────────────────────┐
       │ Splash (Home_Splash)   │
       │ sessionStorage check  │
       └───────────┬───────────┘
                   │ First load this session?
          ┌────────┴────────┐
          ▼ Yes             ▼ No / Returning
   ┌──────────────┐   ┌──────────────────┐
   │ Show Welcome  │   │ Skip to Home_Start│
   │ "Confirm" btn │   └────────┬─────────┘
       └─────┬────┘            │
             ▼                 │
   ┌──────────────────┐        │
   │ Home_Start()      │◄───────┘
   │ Load manifests    │
   └────────┬─────────┘
            ▼
   ┌──────────────────────────────────────────┐
   │ Sidebar navigation (3 primary tabs)      │
   ├──────────────┬───────────────┬───────────┤
   │   Quizzes    │   Schedules   │   Others  │
   └──────┬───────┴───────┬───────┴─────┬─────┘
          ▼               ▼             ▼
   Explorer walk      Class/Exam       Settings/
   Subject→Module→    tabs             Tools/About
   Quiz set                            (File Converter)
          │
          ▼
   ┌──────────────────────┐
   │ quizPlayer.html?Quiz=│
   │       <file>          │
   └────────┬──────────────┘
            ▼
   ┌──────────────────────┐
   │ Starter → Mode select │
   │ Classic/Hardcore/Chill│
   └────────┬──────────────┘
            ▼
   ┌──────────────────────┐
   │ Question loop         │
   │ Shuffle → Render next │
   │ → Evaluate → Feedback │
   └────────┬──────────────┘
            │ All questions answered?
            ├──── No ──► next question
            ▼
   ┌──────────────────────┐
   │ Finisher screen       │
   │ Score · % · GIF · Retry│
   └──────────────────────┘
```

### Quiz Player Question Loop

```
                  ┌────────────────────────┐
                  │ Quiz_Load_Data()        │
                  │ fetch quizzes/<id>.json │
                  └──────────┬─────────────┘
                             ▼
                  ┌──────────────────────┐
                  │ Quiz_Order_Shuffle()  │
                  └──────────┬───────────┘
                             ▼
                  ┌──────────────────────┐
                  │ Quiz_Question_Build() │
                  │ Sets question, image, │
                  │ choices / input area   │
                  └──────────┬───────────┘
                             ▼
              ┌──────────────┴───────────────┐
              ▼                              ▼
  ┌────────────────────┐         ┌────────────────────┐
  │ Mode = Multi/Ident │         │ Mode = Flashcards   │
  │ Submit answer      │         │ Tap to reveal       │
  └─────────┬──────────┘         └─────────┬───────────┘
            ▼                              ▼
  ┌────────────────────┐         ┌────────────────────┐
  │ Quiz_Evaluate_      │         │ Quiz_Flashcard_     │
  │   Answer()          │         │   Toggle() / Next   │
  └─────────┬──────────┘         └─────────┬───────────┘
            ▼                              ▼
  ┌────────────────────┐
  │ Show CORRECT/WRONG  │
  │ overlay (with sfx)  │
  └─────────┬──────────┘
            ▼
   ┌────────────────────┐
   │ More questions?     │
   └──┬──────────────┬───┘
      │ Yes          │ No
      ▼             ▼
   next q    Quiz_Finisher screen
```

### Schedule & Settings Flow

```
        ┌──────────────────────────────┐
        │ index.html → Schedules tab   │
        └───────────────┬──────────────┘
                        ▼
        ┌──────────────────────────────┐
        │ Load SAP-Class-Schedule.json   │
        │ Load SAP-Exam-Schedule.json    │
        └───────────────┬──────────────┘
                        ▼
               ┌────────┴────────┐
               ▼                 ▼
       Class tab             Exam tab
   (per-day sections)    (date-grouped)

        ┌──────────────────────────────┐
        │ Others → Settings             │
        │ Buttons_Toggle() → Settings_ │
        │ Save() → localStorage write  │
        └──────────────────────────────┘
```

---

## Data Schema

All data sources are JSON. There are four logical schema families.

### 1. Subject Manifest — `Assets/SAP-Subject-Manifest.json`

This file is the canonical index driving the Quizzes Explorer. It models a three-level hierarchy (Subject → Module → Subfolder).

```jsonc
{
  "Subject": [
    {
      "Subject_ID":        "C3_S1_ADET",                          // Unique subject identifier, also naming prefix for child IDs
      "Subject_Name":      "Application Development and Emerging Technologies",
      "Subject_Thumbnail": "Assets/Images/Thumbnails/Thumbnail_ADET.png",
      "Subject_Status":    "Active",                             // "Active" | "Disabled" — controls visibility in Explorer
      "Subject_Module": [
        {
          "Module_ID":          "C3_S1_ADET_Prelims",            // Term ID
          "Module_Name":        "Prelims",                        // Display name
          "Module_Thumbnail":   "Assets/Images/Thumbnails/Thumbnail_Prelims_1.png",
          "Module_Status":      "Active",
          "Module_LastModified":"20 September 2024",
          "Module_Subfolders": [
            {
              "Subfolder_ID":          "C3_S1_ADET_Prelims_1",
              "Subfolder_Name":        "Emerging Technologies",
              "Subfolder_Description": "Description of the subfolder here",
              "Subfolder_Link":        "quizPlayer.html?Quiz=C3_S1_ADET_Prelims_1",
              "Subfolder_Author":      ["Elmer Felisilda"],
              "Subfolder_LastModified":"20 September 2024",
              "Subfolder_Status":      "Active"
            }
          ]
        }
      ]
    }
  ]
}
```

**ID Naming Convention** — `C#_S#_<SubjectAbbr>_<Term>_<Index>`
- `C3` = course year, `S1` = semester
- Subject abbreviation, e.g. `ADET`, `ASIA`, `GB`, `MIS`, `MST`, `PL`, `WST`
- Term: `Prelims` | `Midterms` | `Prefinals` | `Finals`
- Index: position within that term (1-based)

See `Guide - Adding a quiz in the updated quiz player system.txt` for the authoritative step-by-step.

### 2. Quiz Data — `quizzes/<ID>.json`

One JSON file per quiz. A reference/template lives at `quizzes/SAMPLE_DATA.json`.

```jsonc
{
  "quizInfo": {
    "Subject":     "Great Books",                  // Free-text subject name (shown in player header)
    "Term":        "Prelims",
    "Title":       "01 Handout 1",
    "LastModified":"19 February 2025",
    "Authors":     ["Alexander Oro"],
    "References":  ["01 Handout 1"]
  },
  "quizData": [
    {
      "question":  "What is the process of thinking and remembering?",
      "answer":    "Cognitive Process",            // Must equal the matching choice's text or value
      "choices":   [                              // Array of strings OR {text, image}
        "Reading Styles and Techniques",
        "Decoding",
        "Deriving",
        "Cognitive Process"
      ],
      "reference": "01 Handout 1",                 // Where this question came from
      "term":      "Prelims"
    },
    // A question may attach an image:
    {
      "question": "...",
      "answer":   "...",
      "choices":  [],
      "reference":"...",
      "term":     "...",
      "image":     "path/or/url/to/image.png"      // Optional
    },
    // A choice may be an object carrying its own image:
    {
      "question": "...",
      "answer":   "...",
      "choices": [
        { "text": "Choice A", "image": "url" },
        "Plain-string choice"
      ],
      "reference":"...",
      "term":     "..."
    }
  ]
}
```

**Choice element types**
- `string` — plain-text choice.
- `object` — `{ "text": string, "image"?: string }`. The `text` property is the comparison key for correctness evaluation.

**Image handling**
- Question-level `image` renders above the question text.
- Choice-level `image` renders above the choice text.
- Broken images automatically hide themselves via the `onerror="Element_Attribute_Set(this.id, 'Display', 'none')"` pattern.

**Encoding**
- HTML entities (`&lt;`, `&gt;`, `&amp;`) may be used inside `question` text to render reserved characters literally.

### 3. Class Schedule — `Assets/SAP-Class-Schedule.json`

```jsonc
{
  "Status":            "Active",
  "Schedule_Semester": "Second",
  "Schedule_Section": [
    {
      "Section_Status":  "Active",
      "Section_ID":       "C3_S1_IT501A",
      "Section_Name":     "IT501-A",
      "Section_Schedule": [
        {
          "Schedule_Day":      "Monday",
          "Schedule_Subjects": [
            {
              "Subject_Name":     "Application Development and Emerging Technologies",
              "Subject_Duration":  ["6:30 AM", "8:00 AM"],   // [start, end]
              "Subject_Location":  "Comp. Lab 1"
            }
          ]
        }
      ]
    }
  ]
}
```

### 4. Exam Schedule — `Assets/SAP-Exam-Schedule.json`

Structurally identical to the class schedule, except `Schedule_Day` carries a rich date label (e.g. `"Dec. 16 | Monday"`) and `Schedule_Semester` defaults to the current exam cycle.

### 5. Settings — Persisted in `localStorage`

Key: `SAP_Settings_2`
```jsonc
{
  "SoundEffects":  "Active",   // "Active" | "Inactive"
  "GIFFinishers":  "Active",
  "DarkMode":      "Active",
  "QuizMode":      "Mode_1"    // "Mode_1" Classic | "Mode_2" Hardcore | "Mode_3" Chill
}
```

Splash gating: `sessionStorage["SAP_UserHasSignedIn"]` (`true` after the first `Home_Start()` in a session).

---

## Data Flow

### Startup Sequence (index.html)

1. Browser loads `index.html` → scripts execute in order:
   - `SAP_Javascript_Main.js` — declares `App_Property` defaults.
   - ERUMA-UI core utilities become available globally (CDN).
   - `SAP_Javascript_Home.js` registers `window.onload`.
2. `window.onload` fires → `Settings_Load_Data()` + `Settings_Load_Values()` hydrate the UI from `localStorage`.
3. Splash gate:
   - If `sessionStorage.SAP_UserHasSignedIn` is unset → render Welcome splash, wait for user to click **Confirm**.
   - Otherwise → quietly fade out overlays and jump directly to `Home_Start()`.
4. `Home_Start()`:
   - Clicks the Quizzes tab (`document.getElementById("Quizzes").click()`).
   - Invokes three async fetches:
     - `Quizzes_Manifest_Load(Quizzes_Manifest_FileURL)` → loads `Assets/SAP-Subject-Manifest.json`.
     - `Schedules_Class_Load(...)` and `Schedules_Exams_Load(...)` → load the schedule manifests.
5. Once the subject manifest resolves, `Quizzes_Explorer_Load_Subject()` renders Level-1 explorer items for all `Subject_Status == "Active"` subjects.
6. User clicks a subject → `Quizzes_Explorer_Load_Module(index)` (Level 2), then a module → `Quizzes_Explorer_Load_Quizzes(subject, module)` (Level 3). Each level gracefully animates items in/out via ERUMA-UI batch query helpers and respects `*_Status` flags.
7. Clicking a quiz item navigates to `quizPlayer.html?Quiz=<Subfolder_ID>` via `Page_ChangePage()`.

### Quiz Player Sequence (quizPlayer.html)

1. `DOMContentLoaded` → `Settings_Load_Data()` re-hydrates settings; the previously chosen mode is restored from `Settings_Data.QuizMode`.
2. `Quiz_Load_Data()`:
   - Parses the `?Quiz=` URL parameter (`UF_Parameter_Get("Quiz")`).
   - Synchronously fetches `quizzes/<id>.json` via `XMLHttpRequest`.
   - On success, splits the response into `Quiz_Data_Metadata` (`quizInfo`) and `Quiz_Data_Questions` (`quizData`, shuffled via `Quiz_Order_Shuffle`).
   - Header + sidebar question list are populated; finisher GIFs are pre-selected (if enabled).
   - On failure, the starter screen renders an error message and hides the Start controls.
3. User picks a mode → `Quiz_Mode_Set()` updates `Quiz_Mode` and persists the selection.
4. **Start** → `Quiz_Start()` hides the starter and calls `Quiz_Question_Build()`:
   - Renders the current question's text/image, choices (multi) or textarea (hardcore) or flashcard toggle.
5. Answer submission → `Quiz_Evaluate_Answer()`:
   - Validates against `Quiz_Data_Questions[i].answer`.
   - Triggers the CORRECT/WRONG overlay (`Quiz_Checker_Correct` / `Quiz_Checker_Wrong`).
   - Plays the relevant sound (`Sound_Good` / `Sound_Bad` / `Sound_Perfect` / etc.) when `Settings_Data.SoundEffects == "Active"`.
   - Increments score, advances question index.
6. When the question pool is exhausted → `Quiz_Finisher` overlay:
   - Displays finalized score + percentage.
   - Surfaces a celebratory GIF finisher image (selected by performance band) if `Settings_Data.GIFFinishers == "Active"`.
   - Retry (reload current page) or "Go back to home" (`index.html`).
7. `beforeunload` listener prompts restart confirmation via `Subwindows_Open('Quiz_Refresh')`.

### File Converter Sequence (fileConverter.html)

1. User selects an `.xls`/`.xlsx` file.
2. SheetJS parses the workbook into row objects.
3. The chosen include-checkboxes (Question / Correct Answer / Choices / Reference / Term / Status) control which fields are emitted.
4. Resulting JSON conformant with the SAP `quizzes/*.json` schema is rendered into the on-page output area.
5. **Copy** button writes the JSON to the clipboard for direct paste into a new `quizzes/<id>.json` file.

---

## File Structure

```
Student Assistant Portal/
├── index.html                       # Main entry point (Home + Quizzes + Schedules + Others)
├── Home.html                        # Alternate home page (older variant)
├── about.html                       # About page (purpose + contributors + links)
├── quizPlayer.html                  # Quiz runtime page (driven by ?Quiz=<id>)
├── quizOutliner.html                # Authoring/inspection view for quiz data
├── fileConverter.html               # Excel → JSON converter (SheetJS)
├── Guide - Adding a quiz in the updated quiz player system.txt
│                                    # Step-by-step contributor runbook
├── .gitignore                       # Ignores *.psd working files
│
├── Assets/                          # Static resources + JSON manifests
│   ├── SAP-Subject-Manifest.json    # Canonical subject/module/quiz index
│   ├── SAP-Class-Schedule.json      # Class schedule data
│   ├── SAP-Exam-Schedule.json       # Exam schedule data
│   ├── SAP-Subject-Manifest-Adam.json
│   ├── SAP-Exam-Schedule-Adam.json
│   ├── Icons/                       # UI icons (SAP_1, Quizzes_1, Schedules_1, etc.)
│   ├── Images/                      # Thumbnails, branding, contributor photos
│   ├── Sound_Effects/               # in.ogg, Good.mp3, Bad.mp3, challenge_complete_old.ogg
│   └── style_miscellaneous.css      # Shared legacy styles
│
├── Scripts/                          # Application logic and stylesheets
│   ├── SAP_Javascript_Main.js       # App_Property declaration
│   ├── SAP_Javascript_Home.js       # Explorer (Subjects → Modules → Quizzes)
│   ├── SAP_Javascript_QuizPlayer.js  # Quiz engine (modes, scoring, finisher)
│   ├── SAP_Javascript_QuizOutliner.js
│   ├── SAP_Javascript_Settings.js   # localStorage-backed settings
│   ├── SAP_Javascript_UI.js
│   ├── AB_Javascript_Renderer.js    # About-page renderer
│   │
│   ├── SAP_Main.css                  # Global stylesheet entry
│   ├── SAP_Stylesheet_Animations.css
│   ├── SAP_Stylesheet_Explorer.css  # Explorer component styles
│   ├── SAP_Stylesheet_Home.css
│   ├── SAP_Stylesheet_Miscellaneous.css
│   ├── SAP_Stylesheet_QuizOutliner.css
│   ├── SAP_Stylesheet_QuizPlayer.css
│   ├── SAP_Stylesheet_Reference.css
│   ├── SAP_Stylesheet_Responsiveness.css
│   ├── SAP_Stylesheet_UI.css
│   └── *-Adam.css / *-Adam.js        # Alternate (legacy) variants per branch
│
├── quizzes/                          # Individual quiz content (one JSON per quiz)
│   ├── SAMPLE_DATA.json              # Reference schema + example
│   ├── C3_S1_GB_Prelims_1.json
│   ├── C3_S1_ADET_Prelims_1.json
│   ├── ...                           # ~100 subject/term quiz files
│   └── OLD/                          # Deprecated/legacy question packs
│
├── Sample/                           # Sample assets / sample content
├── net_tech_1/                       # Networking-1 supplement materials
│   └── finals/
│
├── index-Adam.html                   # Adam branch variant of index
├── about-Adam.html
├── quizPlayer-Adam.html
├── UITest_QuizPlayer_Universal.html  # Universal test harness for the quiz player
└── test.html                         # Ad-hoc test page
```

### Naming Conventions

- **JavaScript modules:** `SAP_Javascript_<Area>.js` — one area per concern (Home, QuizPlayer, Settings, UI, etc.).
- **Stylesheets:** `SAP_Stylesheet_<Area>.css` — mirrored relationship with the JS modules.
- **Quiz files:** `<Course>_<Semester>_<SubjectAbbr>_<Term>_<Index>.json` (zero padding where applicable).
- **Schedules/Manifests:** `SAP-<Purpose>.json` kebab-cased.
- **Branch variants:** A `-Adam` suffix denotes an alternate lineage maintained in parallel.

---

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for review and development.

### Prerequisites

There are **no** software prerequisites beyond a modern browser and, optionally, a local static-file server. Recommended for live reload:

- [Node.js](https://nodejs.org/) (any LTS) — only needed if you want to use `browser-sync`.
- Any modern text editor (VS Code is recommended; configuration ships under `.vscode/`).

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/bhimlex13/Student-Assistant-Portal.git
cd Student-Assistant-Portal

# 2a. Option A — Open directly
#    Simply double-click index.html in your file explorer, OR
open index.html      # macOS
start index.html     # Windows
xdg-open index.html  # Linux

# 2b. Option B — Serve locally (recommended; some browsers restrict file:// fetches)
python -m http.server 8000
#   Then visit http://localhost:8000/

# 2c. Option C — Live reload via browser-sync
npx browser-sync start --server --index index.html --files "**/*"
```

> **Note:** Modern browsers may block `fetch`/`XMLHttpRequest` calls against `file://` URLs due to CORS policies. Use Option B or C above for full functionality (the Quiz Player fetches quiz JSON dynamically).

---

## Local Development

1. Create a feature branch off of `development`:
   ```bash
   git checkout development
   git pull
   git checkout -b feature/<my-feature>
   ```
2. Make your changes. There is no build pipeline and no linter wired up — verify your changes by reloading the page in the browser.
3. For quiz content work, refer to [Adding a New Quiz](#adding-a-new-quiz).
4. Commit with descriptive messages following the existing style (e.g. `Add ASIA 05 and 06 Handout Questions`).
5. Push and open a pull request against `development`.

### Editing Settings Defaults

Default settings live in `Scripts/SAP_Javascript_Settings.js` (`Settings_Data`). Changing these defaults will affect new users who have not yet opted into `localStorage` preferences.

### Editing Schedules

Update `Assets/SAP-Class-Schedule.json` (for weekly class schedules) or `Assets/SAP-Exam-Schedule.json` (for exam-week schedules). Toggle the `"Status"` / `"Section_Status"` flags to `"Active"` / `"Disabled"` to control visibility without deleting content.

---

## Adding a New Quiz

Follow the steps below (mirrored from `Guide - Adding a quiz in the updated quiz player system.txt`):

1. **Duplicate the template.** Make a copy of `quizzes/SAMPLE_DATA.json` (or any existing file with the same structure).
2. **Replace `quizInfo`.** Set `Subject`, `Term`, `Title`, `LastModified`, `Authors`, and `References`.
3. **Paste your questions into `quizData`.** Each entry requires `question`, `answer`, `choices`, `reference`, and `term`. Question and choice fields may include optional `image` URLs.
4. **Save and rename** following the naming convention:
   `<Course>_<Semester>_<SubjectAbbr>_<Term>_<Index>.json`
   - Example: the third Finals-period quiz for Integrative Programming → `C3_S1_IP_Finals_3.json`.
5. **Register the quiz in the manifest.** Open `Assets/SAP-Subject-Manifest.json` and add a `Module_Subfolders` entry in the appropriate subject/module:
   - `Subfolder_ID` → the file name (without `.json`).
   - `Subfolder_Link` → `quizPlayer.html?Quiz=<Subfolder_ID>`.
   - Populate `Subfolder_Name`, `Subfolder_Description`, `Subfolder_Author`, `Subfolder_LastModified`, and `Subfolder_Status`.
6. **Verify.** Refresh SAP, browse to your subject/module, and confirm the new quiz loads and plays correctly. If it fails, the starter screen will display a descriptive error — typically the file path or the manifest entry is misnamed.

> Tip: Use **Developer Tools → File Converter** in-app to convert an `.xlsx` handout directly into SAP-compliant JSON before pasting into a new `quizzes/*.json` file.

---

## Configuration

There is no central configuration file. Runtime configuration is performed through:

| Concern                                | Where                                                              | How |
|----------------------------------------|--------------------------------------------------------------------|-----|
| Splash requirement / one-per-session    | `Scripts/SAP_Javascript_Home.js` — `Onload_Requirements`           | Boolean toggles |
| Default settings (sound, GIFs, mode)   | `Scripts/SAP_Javascript_Settings.js` — `Settings_Data`              | Object literal |
| App appearance & sidebar widths        | `Scripts/SAP_Javascript_Main.js` — `App_Property`                  | Object literal |
| Active quizzes / subjects / modules    | `Assets/SAP-Subject-Manifest.json` — `*_Status` fields             | `"Active"` / `"Disabled"` |
| Active sections / semesters            | `Assets/SAP-Subject-Manifest.json` — `*_Status` fields             | Same |
| Manifest file paths                    | `Scripts/SAP_Javascript_Home.js` — `Quizzes_Manifest_FileURL` etc. | String constants |
| Sound effect assets                    | `Scripts/SAP_Javascript_QuizPlayer.js` — `Sound_*` declarations   | File paths |

---

## Contributors

| Name             | Role                |
|------------------|---------------------|
| **Alexander Oro**   | Lead Developer       |
| **Elmer Felisilda** | UI and Design        |
| **JC Matias**       | Quiz Contributor     |
| **Kyll Madriaga**   | Quiz Contributor     |

The full contributor profiles and bios are available on the in-app About screen (`about.html`).

---

## Reporting Issues

Bugs, content corrections, and feature suggestions are tracked on GitHub:

- **Repository:** https://github.com/bhimlex13/Student-Assistant-Portal
- **Issues:** https://github.com/bhimlex13/Student-Assistant-Portal/issues

When filing an issue, please include:
- Browser + version
- Steps to reproduce
- Expected vs. actual behavior
- Any console errors (open DevTools → Console tab)
- The affected subject/module/quiz file name

---

## License

This project is released under the **MIT License**. The full license text is available in [`LICENSE.txt`](./LICENSE.txt).

```
MIT License

Copyright (c) 2024–present Student Assistant Portal contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

_Student Assistant Portal — built for students, by students. Happy reviewing!_
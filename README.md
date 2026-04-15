# GigaPet — COMP 484 Project 2

An online pet simulator game written in HTML, CSS and JavaScript (jQuery).
Take care of **ZORP**, an alien pet, by feeding, playing, exercising, and putting him to sleep.

## Repo Link

https://github.com/gtech29/comp484-project2

## Github Pages Link

[gtech29.github.io/comp484-project2](https://gtech29.github.io/comp484-project2/ "https://gtech29.github.io/comp484-project2/")

## How to Run

Open `index.html` in Google Chrome. No build step or server required.

## Features

- **Pet stats** — Happiness, Weight, Hunger, Energy, and Age tracked in real time
- **Animated speech bubble** — Zorp reacts to every button press (no alerts or console logs)
- **Dynamic sprite** — Zorp's image changes based on happiness level (normal / happy / sad)
- **Sad mode** — The device color scheme shifts when Zorp's happiness drops below 3
- **Stat bars** — Visual progress bars for each stat update smoothly on every action

## Buttons

| Button   | Effect                                          |
| -------- | ----------------------------------------------- |
| FEED     | Happiness ↑, Weight ↑, Hunger ↓, Energy ↑   |
| PLAY     | Happiness ↑, Weight ↓, Hunger ↑, Energy ↓   |
| EXERCISE | Happiness ↓, Weight ↓, Hunger ↑, Energy ↓↓ |
| SLEEP    | Energy ↑, Happiness ↑, Hunger ↑              |

All the stats are bounded in a range of 0 to 10.

## jQuery Methods Used

1. **`.fadeIn(duration)`** — Fades the speech bubble in and out in less than 400 ms, making the reactions of Zorp a slow rolling entrance instead of a bang.
2. **`.addClass(className)` / `.removeClass(className)`** — The sad-mode CSS class on the device shell is dynamically switched on or off, when the happiness of Zorp is under 3, and not the CSS file while it is running looks any different.

## Project Structure

```
comp484-project2/
├── index.html        # Page structure and stat display
├── script.js         # Game logic and jQuery interactions
├── style.css         # Styling and sad-mode theme
└── images/
    ├── zorp-normal.png
    ├── zorp-happy.png
    └── zorp-sad.png
```

## Author

Juan Rodriguez — CSUN COMP 484, Spring 2026

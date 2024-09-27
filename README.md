# Strava Judge

![example screenshot](https://private-user-images.githubusercontent.com/8932430/371319953-ac28c366-8c19-4ff8-b808-46b3953ef502.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjczODYxOTQsIm5iZiI6MTcyNzM4NTg5NCwicGF0aCI6Ii84OTMyNDMwLzM3MTMxOTk1My1hYzI4YzM2Ni04YzE5LTRmZjgtYjgwOC00NmIzOTUzZWY1MDIucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MDkyNiUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDA5MjZUMjEyNDU0WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9YzFkNDUwNzgzNzAwODI4MDkwNmFlMzNkZjZhMmViYzY0ZTFjNzU2YzVkZDIxZmE0MmFhMmQ2NDFhMTczMzgyYyZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.mdMJ63MMWsi9dMMI7-lj9Z9XUGt63pImFoRehBuJ9jw)

Strava Judge is a web application that analyzes workout images using the new multimodal LLaMA-3.2 hosted on [Cloudflare Workers AI](https://developers.cloudflare.com/workers/ai/) in a Cloudflare Worker web app to provide personalized fitness advice and commentary! You can see more [models hosted on Cloudflare here](https://developers.cloudflare.com/ai/models/). (Beta models are free to run inference on on Cloudflare!) 

[Test it out yourself in the browser here](https://strava-judge.lizziepika.workers.dev/).

To run the code--clone the repo and run the following:

```
npm install
npm run dev
```
To deploy:
```
npm run deploy
```
# URL Shortener

A URL shortening app built with Node.js, Express and TypeScript, along with HTML, CSS and JS on the front-end.

## Set up

```bash
npm install
npm run dev
```

Head to http://localhost:4000

## API

POST /
Body: 
```json
{ "url": "http://www.google.com"}
```
Response: 
```json
{ "short_url": "/qrs123", "url": "http://www.google.com"}
````
GET /:code
Redirects with 301 to original URL, or a 404 if the code does not exist.

## Notes
- URLs stored in memory, hence they'll be lost if the server restarts
- URLs validated on the front and back end

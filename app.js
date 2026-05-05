const express = require('express');
const app = express();
const port = 3000;

const premiumHTML = (title, content) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <style>
        :root {
            --primary: #6366f1;
            --bg: #0f172a;
            --text: #f8fafc;
            --card-bg: rgba(30, 41, 59, 0.7);
        }
        body {
            margin: 0;
            padding: 0;
            font-family: 'Inter', -apple-system, sans-serif;
            background-color: var(--bg);
            color: var(--text);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            overflow: hidden;
            background: radial-gradient(circle at top left, #1e1b4b, #0f172a);
        }
        .container {
            text-align: center;
            padding: 3rem;
            background: var(--card-bg);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 24px;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
            animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
            background: linear-gradient(to right, #818cf8, #c084fc);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 800;
        }
        p {
            color: #94a3b8;
            font-size: 1.25rem;
        }
        .accent {
            width: 60px;
            height: 4px;
            background: var(--primary);
            margin: 1.5rem auto;
            border-radius: 2px;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>${title}</h1>
        <div class="accent"></div>
        <p>${content}</p>
    </div>
</body>
</html>
`;

app.get('/', (req, res) => {
    res.send(premiumHTML('App Page', 'Welcome to the core application experience.'));
});

app.get('/hello', (req, res) => {
    res.send(premiumHTML('Hello Page', 'Greetings! This is the secondary endpoint.'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
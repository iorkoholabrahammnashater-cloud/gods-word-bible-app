<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>God's Word Bible App</title>
  <style>
    body {
      background-color: #0A1128;
      color: #FFFFFF;
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
    }
    .app-container {
      width: 100%;
      max-width: 480px;
      min-height: 100vh;
      box-sizing: border-box;
      padding: 20px;
      padding-bottom: 80px;
    }
    .header {
      margin-bottom: 20px;
    }
    .sub-title {
      font-size: 11px;
      color: #00D2FF;
      font-weight: bold;
      letter-spacing: 1px;
    }
    .main-title {
      font-size: 20px;
      margin-top: 4px;
    }
    .game-card {
      background-color: #1C2541;
      border-radius: 16px;
      padding: 12px;
      margin-top: 15px;
    }
  </style>
</head>
<body>
  <div class="app-container">
    <div class="header">
      <div class="sub-title">GOOD MORNING!</div>
      <h1 class="main-title">God's Word Bible App</h1>
    </div>

    <h2>Bible Word Matching Game</h2>
    <p style="color: #A0AABF; font-size: 14px;">Match the Bible characters with their descriptions!</p>

    <div class="game-card">
      <iframe 
        style="max-width:100%; border-radius: 12px;" 
        src="https://wordwall.net/embed/play/118084/627/889" 
        width="100%" 
        height="380" 
        frameborder="0" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</body>
</html>

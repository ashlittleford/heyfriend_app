@echo off
echo ==========================================
echo Starting Hey Friend App...
echo ==========================================

REM Check if Node.js is installed
node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo Node.js is not installed or not in your PATH.
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b
)

echo Navigating to heyfriend-app directory...
cd heyfriend-app
if %errorlevel% neq 0 (
    echo Directory 'heyfriend-app' not found!
    pause
    exit /b
)

echo.
echo Starting local server...
echo The app will open in your default browser at http://localhost:3000
echo.
echo DO NOT CLOSE THIS WINDOW while using the app.
echo.

REM Start the server in the background (new window) or same window?
REM Start node server.js and then open browser.
REM Using 'start' to run node in a separate window so we can continue script execution
start "HeyFriend Server" node server.js

REM Wait a moment for server to start
timeout /t 2 >nul

REM Open browser
start http://localhost:3000

echo App is running. Close the server window to stop.
pause

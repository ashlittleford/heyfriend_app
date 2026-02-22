@echo off
echo ==========================================
echo Starting UCA Formation App...
echo ==========================================

REM Check if Node.js is installed
node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo Node.js is not installed or not in your PATH.
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b
)

echo Navigating to uca-formation-app directory...
cd uca-formation-app

if %errorlevel% neq 0 (
    echo Directory 'uca-formation-app' not found!
    pause
    exit /b
)

echo Installing dependencies...
call npm install

if %errorlevel% neq 0 (
    echo Failed to install dependencies.
    pause
    exit /b
)

echo Starting development server...
call npm run dev

pause

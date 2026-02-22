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

echo Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo.
    echo ==========================================
    echo npm install failed. Attempting to fix...
    echo Cleaning npm cache and removing node_modules...
    echo ==========================================
    call npm cache clean --force
    if exist node_modules rmdir /s /q node_modules
    if exist package-lock.json del package-lock.json

    echo Retrying npm install...
    call npm install
    if %errorlevel% neq 0 (
        echo.
        echo ==========================================
        echo Failed to install dependencies even after cleanup.
        echo Please check your internet connection or permissions.
        echo You might need to run this script as Administrator.
        echo ==========================================
        pause
        exit /b
    )
)

echo Starting development server...
call npm run dev
pause

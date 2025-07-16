@echo off
cd project
npm install
npm run build

REM Clear existing static files
rmdir /s /q ..\static\js
rmdir /s /q ..\static\css
rmdir /s /q ..\static\media

REM Copy build files to Flask static folder
xcopy /E /I build\static\js ..\static\js
xcopy /E /I build\static\css ..\static\css
if exist build\static\media xcopy /E /I build\static\media ..\static\media

REM Copy index.html to templates
copy build\index.html ..\templates\index.html

echo React build completed and files moved to Flask folders
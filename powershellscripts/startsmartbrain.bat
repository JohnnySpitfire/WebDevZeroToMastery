@echo off

:MENU
cls
ECHO.
ECHO ...............................................
ECHO PRESS 1, 2, 3 or 5 to select your task, or 5 to EXIT.
ECHO ...............................................
ECHO.
ECHO 1 - Start Server
ECHO 2 - Restart Server
ECHO 3 - Stop All
ECHO 4 - Retrive Database
ECHO 5 - Exit
ECHO.

SET /P M=Type 1, 2, 3, 4 or 5 then press ENTER:
IF %M%==1 GOTO STARTSERVER
IF %M%==2 GOTO RESTARTSERVER
IF %M%==3 GOTO STOPALL
IF %M%==4 GOTO RETRIVEDATABASE
IF %M%==5 GOTO EXIT

:RESTARTSERVER
call getCmdPID
set "current_pid=%errorlevel%"

for /f "skip=3 tokens=2 delims= " %%a in ('tasklist /fi "imagename eq cmd.exe"') do (
    if "%%a" neq "%current_pid%" (
        TASKKILL /PID %%a /f /T >nul 2>nul
    )
)
TIMEOUT/t 3
start cmd /k powershell.exe -ExecutionPolicy Unrestricted -Command ". 'C:\Users\benan\Documents\GitHub\WebDevZeroToMastery\powershellscripts\StartServer.ps1'"
start cmd /k powershell.exe -ExecutionPolicy Unrestricted -Command ". 'C:\Users\benan\Documents\GitHub\WebDevZeroToMastery\powershellscripts\StartFrontEnd.ps1'"
start cmd /k
echo Server Restarting ! :D
TIMEOUT /t 1
GOTO MENU

:STOPALL

call getCmdPID
set "current_pid=%errorlevel%"

for /f "skip=3 tokens=2 delims= " %%a in ('tasklist /fi "imagename eq cmd.exe"') do (
    if "%%a" neq "%current_pid%" (
        TASKKILL /PID %%a /f /T >nul 2>nul
    )
)
echo Server Stopping! :D
TIMEOUT /t 1
GOTO MENU

:STARTSERVER
start cmd /k powershell.exe -ExecutionPolicy Unrestricted -Command ". 'C:\Users\benan\Documents\GitHub\WebDevZeroToMastery\powershellscripts\StartServer.ps1'"
start cmd /k powershell.exe -ExecutionPolicy Unrestricted -Command ". 'C:\Users\benan\Documents\GitHub\WebDevZeroToMastery\powershellscripts\StartFrontEnd.ps1'"
start cmd /k
echo Server Starting ! :D
TIMEOUT /t 1
GOTO MENU

:RETRIVEDATABASE
start cmd /k powershell.exe -ExecutionPolicy Unrestricted -Command ". 'C:\Users\benan\Documents\GitHub\WebDevZeroToMastery\powershellscripts\RetrieveDatabase.ps1'"
GOTO MENU

:EXIT
call getCmdPID
set "current_pid=%errorlevel%"

for /f "skip=3 tokens=2 delims= " %%a in ('tasklist /fi "imagename eq cmd.exe"') do (
    if "%%a" neq "%current_pid%" (
        TASKKILL /PID %%a /f /T >nul 2>nul
    )
)



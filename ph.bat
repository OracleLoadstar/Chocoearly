@echo off
set home=%cd%
if not exist "%home%\projecthelper" (
    mkdir "%home%\projecthelper"
    mkdir "%home%\projecthelper\data"
)
set module=%home%\projecthelper
set data=%home%\projecthelper\data
if "%1" == "" (
    goto help
) else (
    goto custom
)

:help
if not exist "%module%\help.txt" (
    echo "write help here!" > "%module%\help.txt"
    goto eof
)
echo ======°ïÖú======
powershell cat "%module%\help.txt"
echo ================
goto eof

:custom
set filename=%1
set fullname=%module%\%filename%.bat
if not exist "%fullname%" (
    echo error:command not define.
    goto eof
)
call "%fullname%"
goto eof

:eof
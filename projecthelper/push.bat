::询问用户是否创建github tag
set /p "qa=是否创建tag?(y/n)"
if "%qa%" == "y" (
    set /p "qa_a=请输入tag名:"
)
::commit
set /p "qb=请输入提交信息: "
::push后电源操作
set /p "qc=请输入push后电源操作(0=无,1=关机,2=重启): "
:print
echo =========
echo 请确认
echo 是否创建tag: %qa% (qa)
echo tag名: %qa_a% (qa_a)
echo 提交信息: %qb% (qb)
echo push后电源操作: %qc% (qc)
echo =========
set /p "qd=请确认是否继续?(y/n/每项后字母：重新设置该项): "
if "%qd%" == "qa" (
    set /p "qa=是否创建tag?(y/n)"
    if "%qa%" == "y" (
        set /p "qa_a=请输入tag名:"
    )
    goto print
)
if "%qd%" == "qb" (
    set /p "qb=请输入提交信息: "
    goto print
)
if "%qd%" == "qc" (
    set /p "qc=请输入push后电源操作(0=无,1=关机,2=重启): "
    goto print
)

if "%qd%" == "n" goto eof
if "%qd%" == "" goto eof
if "%qd%" == "y" goto a
:a
git pull -v
if %errorlevel% neq 0 (
    goto a
)
git add . -v 
git commit -m "%qb%" -v
:loop
git push -v
if %errorlevel% neq 0 (
    goto loop
)
if "%qa%" == "0" (
    goto eof
)
git tag -a "%qa_a%" -m "%qb%" -v
:loop_a
git push --tags -v
if %errorlevel% neq 0 (
    goto loop_a
)

:eof
if "%qc%" == "1" (
    shutdown /s /t 0
) else if "%qc%" == "2" (
    shutdown /r /t 0
)
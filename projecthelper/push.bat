::ѯ���û��Ƿ񴴽�github tag
set /p "qa=�Ƿ񴴽�tag?(y/n)"
if "%qa%" == "y" (
    set /p "qa_a=������tag��:"
)
::commit
set /p "qb=�������ύ��Ϣ: "
::push���Դ����
set /p "qc=������push���Դ����(0=��,1=�ػ�,2=����): "
:print
echo =========
echo ��ȷ��
echo �Ƿ񴴽�tag: %qa% (qa)
echo tag��: %qa_a% (qa_a)
echo �ύ��Ϣ: %qb% (qb)
echo push���Դ����: %qc% (qc)
echo =========
set /p "qd=��ȷ���Ƿ����?(y/n/ÿ�����ĸ���������ø���): "
if "%qd%" == "qa" (
    set /p "qa=�Ƿ񴴽�tag?(y/n)"
    if "%qa%" == "y" (
        set /p "qa_a=������tag��:"
    )
    goto print
)
if "%qd%" == "qb" (
    set /p "qb=�������ύ��Ϣ: "
    goto print
)
if "%qd%" == "qc" (
    set /p "qc=������push���Դ����(0=��,1=�ػ�,2=����): "
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
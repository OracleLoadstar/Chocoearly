set work=%data%\proxy
if not exist "%work%" (
    mkdir "%work%"
)
if exist "%work%\laster.bat" (
    goto a
)
goto c
:a
set /p "ans=�Ƿ�ʹ���ϴ����ã�(y/n)"
if "%ans%" == "y" (
    goto b
) else (
    goto c
)
:b
if exist "%work%\laster.bat" (
    call "%work%\laster.bat"
)
goto eof

:c
set /p "ip=����������ַ: "
set /p "port=���������˿�: "
set /p "user=����������û���: "
set /p "pass=�������������: "
set http_proxy=http://%user%:%pass%@%ip%:%port%
set https_proxy=https://%user%:%pass%@%ip%:%port%

::д���ļ�
(
    echo set http_proxy=http://%user%:%pass%@%ip%:%port%
    echo set https_proxy=https://%user%:%pass%@%ip%:%port%
) > "%work%\laster.bat"

:eof
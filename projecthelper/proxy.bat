set work=%data%\proxy
if not exist "%work%" (
    mkdir "%work%"
)
if exist "%work%\laster.bat" (
    goto a
)
goto c
:a
set /p "ans=是否使用上次配置？(y/n)"
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
set /p "ip=请输入代理地址: "
set /p "port=请输入代理端口: "
set /p "user=请输入代理用户名: "
set /p "pass=请输入代理密码: "
set http_proxy=http://%user%:%pass%@%ip%:%port%
set https_proxy=https://%user%:%pass%@%ip%:%port%

::写入文件
(
    echo set http_proxy=http://%user%:%pass%@%ip%:%port%
    echo set https_proxy=https://%user%:%pass%@%ip%:%port%
) > "%work%\laster.bat"

:eof
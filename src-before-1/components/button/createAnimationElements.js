function createAnimationElements() {
    // 获取所有具有类"ols-filled-imp"的按钮
    const st_ols_sys_filled_imp_btns = document.querySelectorAll('.ols-filled-imp');
    if (st_ols_sys_filled_imp_btns.length === 0) {
        console.warn('未找到 .ols-filled-imp 元素');
        return;
    }
    st_ols_sys_filled_imp_btns.forEach(st_ols_sys_filled_imp_btn => {
        // 创建悬停动画元素1
        const hover1 = document.createElement('span');
        hover1.className = 'ols-sys-ani-hover-1';

        // 创建悬停动画元素2
        const hover2 = document.createElement('span');
        hover2.className = 'ols-sys-ani-hover-2';

        // 创建点击动画元素1
        const active1 = document.createElement('span');
        active1.className = 'ols-sys-ani-active-1';

        // 创建点击动画元素2
        const active2 = document.createElement('span');
        active2.className = 'ols-sys-ani-active-2';

        // 将元素添加到按钮中 - 确保在文本元素之前添加
        st_ols_sys_filled_imp_btn.prepend(hover1, hover2, active1, active2);

        console.log('已为按钮添加动画元素', st_ols_sys_filled_imp_btn);
    });


    const st_ols_sys_filled_btns = document.querySelectorAll('.ols-filled');
    if(st_ols_sys_filled_btns.length === 0){
        console.warn('未找到 .ols-filled 元素');
        return;
    }
    st_ols_sys_filled_btns.forEach(st_ols_sys_filled_btn =>{
        const hover1 = document.createElement('span');
        hover1.className = 'ols-sys-ani-hover-1';

        const hover2 = document.createElement('span');
        hover2.className = 'ols-sys-ani-hover-2';

        st_ols_sys_filled_btn.prepend(hover1, hover2);
        console.log('已为按钮添加动画元素', st_ols_sys_filled_btn);
    });
}

// 确保在DOM完全加载后执行
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createAnimationElements);
} else {
    // DOMContentLoaded 已经触发
    createAnimationElements();
}
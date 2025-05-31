const ols_sys_button_visual_btn = document.querySelector('.ols-visual');
const ols_sys_button_visual_overlay = document.querySelector('.ols-sys-button-visual-spotlight-overlay ');

ols_sys_button_visual_btn.addEventListener('mouseenter', () => {
    const rect = ols_sys_button_visual_btn.getBoundingClientRect();
    currentX = rect.left + rect.width / 2;
    currentY = rect.top + rect.height / 2;

    // 悬停：从全屏黑色(0%) → 按钮中心透明(150vmax)
    ols_sys_button_visual_overlay.style.clipPath = `circle(0% at ${currentX}px ${currentY}px)`; // 起点
    setTimeout(() => {
        ols_sys_button_visual_overlay.style.clipPath = `circle(150vmax at ${currentX}px ${currentY}px)`; // 终点
    }, 10);
});

ols_sys_button_visual_btn.addEventListener('mouseleave', () => {
    // 移出：从按钮中心透明(150vmax) → 全屏黑色(0%)
    ols_sys_button_visual_overlay.style.clipPath = `circle(150vmax at ${currentX}px ${currentY}px)`; // 起点
    setTimeout(() => {
        ols_sys_button_visual_overlay.style.clipPath = `circle(0% at ${currentX}px ${currentY}px)`; // 终点
    }, 10);
});

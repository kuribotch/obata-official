// script.js

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('menu-toggle');
    const mainMenu = document.getElementById('main-menu');

    if (toggleButton && mainMenu) {
        
        // 初期状態を設定
        mainMenu.classList.add('is-closed');
        
        // ハンバーガーボタンがクリックされた時の処理
        toggleButton.addEventListener('click', () => {
            
            const isOpen = mainMenu.classList.contains('is-open');

            if (isOpen) {
                // メニューを閉じる処理 (フェードアウト)
                mainMenu.classList.remove('is-open');
                mainMenu.style.opacity = '0';
                
                // フェードアウトが完了してから display: none にする
                setTimeout(() => {
                    mainMenu.classList.remove('is-open');
                    mainMenu.classList.add('is-closed');
                    mainMenu.style.display = 'none';
                    toggleButton.setAttribute('aria-expanded', 'false');
                }, 500); // CSSのtransition時間と同じか、少し長めに設定 (ここでは0.5秒)

            } else {
                // メニューを開く処理 (フェードイン)
                mainMenu.classList.remove('is-closed');
                mainMenu.style.display = 'block'; // まず表示し、その後に透過度を変更
                
                // display:blockが適用された後、わずかな遅延（または次のフレーム）でopacityを変更
                // これによりフェードインが機能する
                setTimeout(() => {
                    mainMenu.classList.add('is-open');
                    mainMenu.style.opacity = '1';
                    toggleButton.setAttribute('aria-expanded', 'true');
                }, 10);
            }
        });
        
        // メニュー項目がクリックされたら閉じる
        const menuLinks = mainMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    // スマホサイズでのみ閉じる処理を実行
                    mainMenu.style.opacity = '0';
                    setTimeout(() => {
                        mainMenu.classList.remove('is-open');
                        mainMenu.classList.add('is-closed');
                        mainMenu.style.display = 'none';
                        toggleButton.setAttribute('aria-expanded', 'false');
                    }, 500);
                }
            });
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // メニューバーのリンクを取得
    const menuLinks = document.querySelectorAll('.menu-bar a');

    // 各リンクにクリックイベントを設定
    menuLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // ページ全体のリロードを防ぐ
            // event.preventDefault();

            // リンクのhref属性からターゲットのIDを取得 (例: #home)
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // スムーズなスクロールを実行
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
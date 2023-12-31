// タイトルの動き
document.addEventListener('DOMContentLoaded', function () {
    const patapatitles = document.querySelectorAll('.patapatitle');
    let index = 0;
    let isRotation = false; // 2回目の回転を追跡するフラグ

    setInterval(function () {
        let currentIndex = index % patapatitles.length;
        if (isRotation) {
            patapatitles[currentIndex].classList.add('rotating2');
            patapatitles[currentIndex].classList.remove('rotating');
            index++;
        } else {
            // 通常→反転
            patapatitles[currentIndex].classList.add('rotating');
            patapatitles[currentIndex].classList.remove('rotating2');
            // インデックスを更新
            index++;
        }
        // 全ての要素が回転した後、フラグを切り替える
        if (index % patapatitles.length === 0) {
            isRotation = !isRotation;
        }
    }, 1000); // 1秒ごと
});


// 話題の動き
document.addEventListener('DOMContentLoaded', function () {
    const topics = [
        "今年一番印象に残ったことは？",
        "来年の抱負は何ですか？",
        "今年新しく始めた趣味はありますか？",
        "今年読んだ本で、一番影響を受けたものは何ですか？",
        "今年の失敗から学んだ大切な教訓は？",
        "今年旅行した中で、一番印象的だった場所はどこですか？",
        "来年の抱負は何ですか？",
        "来年挑戦してみたいことは？",
        "来年旅行してみたい場所はどこですか？",
        "来年の自分に期待することは何ですか？",
        "来年はどんな新しい趣味を始めたいですか？",
        "今年、一番楽しかった瞬間は何でしたか？",
        "今年、泣いた映画や本は？",
        "マイ・今年の漢字は？",
        "個人的流行語大賞は？",
        "今年の買ってよかったものは？",
        "今年一年で成長したと感じる点は何ですか？",
        "今年一番のいい写は？",
        "今年、大変だったこと",
        "今年、嬉しかったこと",
        "今年、悲しかったこと",
        "今年食べた美味しかったものは？",
        "来年習慣にしたいことは？",
        "一年前の自分に伝えたいことは？",
        "一年後の自分に伝えたいことは？",
        "来年楽しみなことは？",
        "今年、一番聞いた曲は？",
        "今年の春のベストショットは？",
        "今年の夏のベストショットは？",
        "今年の秋のベストショットは？",
        "今年の冬のベストショットは？",
    ];

    const flipCard = document.getElementById('flip-card');
    const flipCardFront = document.querySelector('.flip-card-front');
    const flipCardBack = document.querySelector('.flip-card-back');
    let degree = 0; // 回転角度を追跡する変数

    document.getElementById('flip-button').addEventListener('click', function () {
        degree -= 540; // 180度追加して回転
        flipCard.style.transform = 'rotateX(' + degree + 'deg)'; // 回転角度を更新

        // 回転アニメーションの途中で話題を変更する
        setTimeout(function () {
            // 新しい話題を設定
            const randomIndex = Math.floor(Math.random() * topics.length);
            if (degree / 180 % 2 === 0) {
                flipCardFront.textContent = topics[randomIndex];
            } else {
                flipCardBack.textContent = topics[randomIndex];
            }
        }, 100);
    });
});

// カウントダウン
document.addEventListener('DOMContentLoaded', function() {
    const newYearDate = new Date('2024-01-01T00:00:00');

    function updateCountdown() {
        const currentTime = new Date();
        const diff = newYearDate - currentTime;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
        const seconds = Math.floor((diff % (1000 * 60)) / 1000).toString().padStart(2, '0');

        document.getElementById('days-tens').textContent = days[0];
        document.getElementById('days-units').textContent = days[1];

        document.getElementById('hours-tens').textContent = hours[0];
        document.getElementById('hours-units').textContent = hours[1];

        document.getElementById('minutes-tens').textContent = minutes[0];
        document.getElementById('minutes-units').textContent = minutes[1];

        document.getElementById('seconds-tens').textContent = seconds[0];
        document.getElementById('seconds-units').textContent = seconds[1];
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
});

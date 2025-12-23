// ゲーム状態管理
let gameState = { ...INITIAL_STATE };
let isAutoMode = false;
let isSkipping = false;
let autoTimer = null;
let textSpeed = 50;
let autoSpeed = 2000;

// 初期化
document.addEventListener('DOMContentLoaded', () => {
    loadSettings();
    setupEventListeners();
});

// イベントリスナー設定
function setupEventListeners() {
    // クリックでテキスト進行
    document.getElementById('text-box').addEventListener('click', advance);
    document.addEventListener('keydown', handleKeyPress);
}

// キー入力処理
function handleKeyPress(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        advance();
    } else if (e.key === 'Escape') {
        showMenu();
    }
}

// 新規ゲーム開始
function startNewGame() {
    gameState = { ...INITIAL_STATE };
    gameState.affection = { ...INITIAL_STATE.affection };
    gameState.flags = {};
    gameState.backlog = [];
    gameState.readScenes = [];

    switchScreen('title-screen', 'game-screen');
    loadScene('prologue');
}

// 画面切り替え
function switchScreen(fromId, toId) {
    const fromScreen = document.getElementById(fromId);
    const toScreen = document.getElementById(toId);

    if (fromScreen) fromScreen.classList.remove('active');
    if (toScreen) toScreen.classList.add('active');
}

// シーン読み込み
function loadScene(sceneName) {
    if (sceneName === 'title_screen') {
        switchScreen('game-screen', 'title-screen');
        return;
    }

    if (!SCENARIO[sceneName]) {
        console.error('Scene not found:', sceneName);
        return;
    }

    gameState.currentScene = sceneName;
    gameState.currentLine = 0;

    // 既読シーンに追加
    if (!gameState.readScenes.includes(sceneName)) {
        gameState.readScenes.push(sceneName);
    }

    // シーン開始時にキャラクターをリセット
    hideAllCharacters();

    processLine();
}

// 行処理
function processLine() {
    const scene = SCENARIO[gameState.currentScene];
    if (!scene || gameState.currentLine >= scene.length) {
        return;
    }

    const line = scene[gameState.currentLine];

    switch (line.type) {
        case 'background':
            setBackground(line.bg);
            hideAllCharacters(); // 背景変更時はキャラクターもリセット
            advance();
            break;
        case 'narration':
            showNarration(line.text);
            break;
        case 'dialogue':
            showDialogue(line.character, line.text, line.position, line.expression);
            break;
        case 'choice':
            showChoices(line.choices);
            break;
        case 'scene':
            loadScene(line.next);
            break;
        default:
            advance();
    }
}

// 背景設定
function setBackground(bgKey) {
    const bg = document.getElementById('background');
    const bgFile = BACKGROUNDS[bgKey];

    if (bgFile) {
        // 画像パスを修正
        const imagePath = `./${bgFile}`;
        bg.style.backgroundImage = `url('${imagePath}')`;
    } else {
        bg.style.backgroundImage = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    }
}

// ナレーション表示
function showNarration(text) {
    const speakerName = document.getElementById('speaker-name');
    const dialogueText = document.getElementById('dialogue-text');

    speakerName.textContent = '';
    speakerName.style.display = 'none';

    // キャラクターを非表示
    // hideAllCharacters(); // ナレーション時もキャラを残すかどうか。通常は残すか、薄くするか。今回は残す。

    // テキストアニメーション
    typeText(dialogueText, text);

    // バックログに追加
    addToBacklog('', text);
}

// ダイアログ表示
function showDialogue(characterKey, text, position = null, expression = null) {
    const character = CHARACTERS[characterKey];
    const speakerName = document.getElementById('speaker-name');
    const dialogueText = document.getElementById('dialogue-text');

    // 位置決定
    let pos = position;
    if (!pos) {
        pos = character.defaultPosition || 'center';
    }

    // 話者名表示
    speakerName.textContent = character.name;
    speakerName.style.display = 'block';
    speakerName.style.color = character.color;

    // キャラクター表示
    if (character.image || (character.expressions && expression)) {
        showCharacter(characterKey, pos, expression);
    }

    // テキストアニメーション
    typeText(dialogueText, text);

    // バックログに追加
    addToBacklog(character.name, text);
}

// キャラクター表示
function showCharacter(characterKey, position, expression = null) {
    // 全員のspeakingを外す
    document.querySelectorAll('.character').forEach(c => c.classList.remove('speaking'));

    const character = CHARACTERS[characterKey];

    let imageFn = character.image;
    if (expression && character.expressions && character.expressions[expression]) {
        imageFn = character.expressions[expression];
    }

    if (!imageFn) return;

    const positionMap = {
        'left': 'character-left',
        'center': 'character-center',
        'right': 'character-right'
    };

    const elementId = positionMap[position] || 'character-center';
    const charElement = document.getElementById(elementId);

    // キャラクターIDを要素に記録（表示管理用）
    charElement.dataset.character = characterKey;
    // Somaの場合はクラスなどで特別扱いも可能だが、IDでチェックする

    // 表示ロジック：
    // 「話を終えた人の立ち絵は非表示にして、主人公の立ち絵だけ残るようにして下さい」
    // -> 今回の話者(characterKey)と、主人公(soma)以外は非表示にする。

    // 表示ロジック：
    // 会話中は表示させたままにするため、他キャラ非表示ロジックは削除
    // 場面転換時に hideAllCharacters() を呼ぶことで対応

    // 画像パスを修正
    const imagePath = `./${imageFn}`;

    // 同じ画像ならセットしない（ちらつき防止）
    if (!charElement.src.endsWith(imageFn)) {
        charElement.src = imagePath;
    }

    charElement.style.display = 'block';
    charElement.classList.add('speaking');
}

// 全キャラクター非表示
function hideAllCharacters() {
    const characters = document.querySelectorAll('.character');
    characters.forEach(char => {
        char.style.display = 'none';
        char.classList.remove('speaking');
    });
}

// タイプライター効果
function typeText(element, text) {
    element.textContent = '';
    let index = 0;

    // 前のタイマーがあれば消す (advanceで消しているので本来不要だが念のため)
    if (element.dataset.typingInterval) {
        clearInterval(parseInt(element.dataset.typingInterval));
    }

    const interval = setInterval(() => {
        if (index < text.length) {
            element.textContent += text[index];
            index++;
        } else {
            clearInterval(interval);
            delete element.dataset.typingInterval;

            // オートモード処理
            if (isAutoMode) {
                autoTimer = setTimeout(() => {
                    advance();
                }, autoSpeed);
            }
        }
    }, textSpeed);

    element.dataset.typingInterval = interval;
}

// 選択肢表示
function showChoices(choices) {
    const container = document.getElementById('choice-container');
    container.innerHTML = '';
    container.style.display = 'flex';

    choices.forEach(choice => {
        // 条件チェック
        if (choice.condition) {
            let canShow = true;
            for (const [char, requiredAffection] of Object.entries(choice.condition)) {
                if (gameState.affection[char] < requiredAffection) {
                    canShow = false;
                    break;
                }
            }
            if (!canShow) return;
        }

        const button = document.createElement('button');
        button.className = 'choice-btn';
        button.textContent = choice.text;
        button.onclick = () => selectChoice(choice);
        container.appendChild(button);
    });
}

// 選択肢選択
function selectChoice(choice) {
    // 好感度更新
    if (choice.affection) {
        for (const [char, value] of Object.entries(choice.affection)) {
            gameState.affection[char] = (gameState.affection[char] || 0) + value;
        }
    }

    // 選択肢非表示
    document.getElementById('choice-container').style.display = 'none';

    // 次のシーンへ
    if (choice.next) {
        loadScene(choice.next);
    } else {
        advance();
    }
}

// テキスト進行
function advance() {
    // オートモードタイマーをクリア
    if (autoTimer) {
        clearTimeout(autoTimer);
        autoTimer = null;
    }

    // タイピング中の場合、即時表示して終了
    const dialogueText = document.getElementById('dialogue-text');
    if (dialogueText.dataset.typingInterval) {
        clearInterval(parseInt(dialogueText.dataset.typingInterval));
        delete dialogueText.dataset.typingInterval;

        // 現在の行の全文を表示
        const scene = SCENARIO[gameState.currentScene];
        if (scene && scene[gameState.currentLine] && (scene[gameState.currentLine].type === 'dialogue' || scene[gameState.currentLine].type === 'narration')) {
            dialogueText.textContent = scene[gameState.currentLine].text;

            // オートモード処理
            if (isAutoMode) {
                autoTimer = setTimeout(() => {
                    advance();
                }, autoSpeed);
            }
            return;
        }
    }

    gameState.currentLine++;
    processLine();
}

// バックログ追加
function addToBacklog(speaker, text) {
    gameState.backlog.push({ speaker, text });

    // 最大100件まで保持
    if (gameState.backlog.length > 100) {
        gameState.backlog.shift();
    }
}

// バックログ表示
function showBacklog() {
    const content = document.getElementById('backlog-content');
    content.innerHTML = '';

    gameState.backlog.forEach(entry => {
        const entryDiv = document.createElement('div');
        entryDiv.className = 'backlog-entry';

        if (entry.speaker) {
            const speakerDiv = document.createElement('div');
            speakerDiv.className = 'backlog-speaker';
            speakerDiv.textContent = entry.speaker;
            entryDiv.appendChild(speakerDiv);
        }

        const textDiv = document.createElement('div');
        textDiv.className = 'backlog-text';
        textDiv.textContent = entry.text;
        entryDiv.appendChild(textDiv);

        content.appendChild(entryDiv);
    });

    switchScreen('game-screen', 'backlog-screen');
}

// バックログ閉じる
function closeBacklog() {
    switchScreen('backlog-screen', 'game-screen');
}

// メニュー表示
function showMenu() {
    switchScreen('game-screen', 'menu-screen');
}

// ゲームに戻る
function resumeGame() {
    switchScreen('menu-screen', 'game-screen');
}

// セーブ画面表示
function showSaveScreen() {
    showSaveLoadScreen('save');
}

// ロード画面表示
function showLoadScreen() {
    showSaveLoadScreen('load');
}

// セーブ/ロード画面
function showSaveLoadScreen(mode) {
    const title = document.getElementById('save-load-title');
    title.textContent = mode === 'save' ? 'セーブ' : 'ロード';

    const container = document.getElementById('save-slots');
    container.innerHTML = '';

    for (let i = 1; i <= 10; i++) {
        const slot = document.createElement('div');
        slot.className = 'save-slot';

        const saveData = localStorage.getItem(`save_slot_${i}`);

        if (saveData) {
            const data = JSON.parse(saveData);
            slot.innerHTML = `
                <div class="save-slot-info">スロット ${i}: ${data.sceneName}</div>
                <div class="save-slot-date">${data.date}</div>
            `;
        } else {
            slot.className = 'save-slot empty';
            slot.innerHTML = `<div class="save-slot-info">スロット ${i}: 空</div>`;
        }

        slot.onclick = () => {
            if (mode === 'save') {
                saveGame(i);
            } else {
                loadGame(i);
            }
        };

        container.appendChild(slot);
    }

    // メニュー画面から来た場合
    const currentScreen = document.querySelector('.screen.active');
    switchScreen(currentScreen.id, 'save-load-screen');
}

// ゲームセーブ
function saveGame(slot) {
    const saveData = {
        gameState: gameState,
        date: new Date().toLocaleString('ja-JP'),
        sceneName: gameState.currentScene
    };

    localStorage.setItem(`save_slot_${slot}`, JSON.stringify(saveData));
    alert(`スロット ${slot} にセーブしました`);
    closeSaveLoad();
}

// ゲームロード
function loadGame(slot) {
    const saveData = localStorage.getItem(`save_slot_${slot}`);

    if (saveData) {
        const data = JSON.parse(saveData);
        gameState = data.gameState;

        switchScreen('save-load-screen', 'game-screen');
        loadScene(gameState.currentScene);
    } else {
        alert('セーブデータがありません');
    }
}

// セーブ/ロード画面を閉じる
function closeSaveLoad() {
    const activeScreen = document.querySelector('.screen.active:not(#save-load-screen)');
    if (activeScreen) {
        switchScreen('save-load-screen', activeScreen.id);
    } else {
        switchScreen('save-load-screen', 'menu-screen');
    }
}

// 設定表示
function showSettings() {
    const currentScreen = document.querySelector('.screen.active');
    switchScreen(currentScreen.id, 'settings-screen');

    // 現在の設定を反映
    document.getElementById('text-speed').value = textSpeed;
    document.getElementById('auto-speed').value = autoSpeed;
}

// 設定を閉じる
function closeSettings() {
    // 設定を保存
    textSpeed = parseInt(document.getElementById('text-speed').value);
    autoSpeed = parseInt(document.getElementById('auto-speed').value);

    saveSettings();

    const activeScreen = document.querySelector('.screen.active:not(#settings-screen)');
    if (activeScreen) {
        switchScreen('settings-screen', activeScreen.id);
    } else {
        switchScreen('settings-screen', 'title-screen');
    }
}

// 設定保存
function saveSettings() {
    localStorage.setItem('settings', JSON.stringify({
        textSpeed,
        autoSpeed
    }));
}

// 設定ロード
function loadSettings() {
    const settings = localStorage.getItem('settings');
    if (settings) {
        const data = JSON.parse(settings);
        textSpeed = data.textSpeed || 50;
        autoSpeed = data.autoSpeed || 2000;
    }
}

// オートモード切り替え
function toggleAutoMode() {
    isAutoMode = !isAutoMode;
    const btn = document.getElementById('auto-btn');

    if (isAutoMode) {
        btn.classList.add('active');
        advance(); // すぐに進行開始
    } else {
        btn.classList.remove('active');
        if (autoTimer) {
            clearTimeout(autoTimer);
            autoTimer = null;
        }
    }
}

// スキップ切り替え
function toggleSkip() {
    isSkipping = !isSkipping;
    const btn = document.getElementById('skip-btn');

    if (isSkipping) {
        btn.classList.add('active');
        skipMode();
    } else {
        btn.classList.remove('active');
    }
}

// スキップモード
function skipMode() {
    if (!isSkipping) return;

    // 既読シーンのみスキップ
    if (gameState.readScenes.includes(gameState.currentScene)) {
        setTimeout(() => {
            advance();
            skipMode();
        }, 100);
    } else {
        isSkipping = false;
        document.getElementById('skip-btn').classList.remove('active');
    }
}

// タイトルに戻る
function returnToTitle() {
    if (confirm('タイトルに戻りますか？')) {
        switchScreen('menu-screen', 'title-screen');
    }
}

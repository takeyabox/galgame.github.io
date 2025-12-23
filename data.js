// キャラクター設定
const CHARACTERS = {
    soma: {
        name: "颯真",
        nameReading: "そうま",
        color: "#4A90E2",
        image: "natuumi_normal.png", // Default
        defaultPosition: "left",
        expressions: {
            "normal": "natuumi_normal.png",
            "smiling": "natuumi_smiling.png",
            "surprised": "natuumi_surprised.png",
            "troubled": "natuumi_troubled.png"
        }
    },
    juri: {
        name: "珠梨",
        nameReading: "じゅり",
        color: "#FFB7C5",
        image: "juri_normal.png",
        defaultPosition: "right",
        expressions: {
            "normal": "juri_normal.png",
            "smiling": "juri_smiling.png",
            "surprised": "juri_surprised.png",
            "embarresed": "juri_embarressed.png"
        }
    },
    souka: {
        name: "奏花",
        nameReading: "そうか",
        color: "#A78BFA",
        image: "souka_normal.png",
        defaultPosition: "right",
        expressions: {
            "normal": "souka_normal.png",
            "smiling": "souka_smiling.png",
            "surprised": "souka_surprised.png",
            "embarresed": "souka_embarresed.png"
        }
    },
    shokiko: {
        name: "翔希子",
        nameReading: "しょきこ",
        color: "#FCD34D",
        image: "shokiko_normal.png",
        defaultPosition: "right",
        expressions: {
            "normal": "shokiko_normal.png",
            "smiling": "shokiko_smiling.png",
            "surprised": "shokiko_surprised.png",
            "embarresed": "shokiko_embarressed.png"
        }
    },
    miyuki: {
        name: "美由紀",
        nameReading: "みゆき",
        color: "#F472B6",
        image: "miyuki_normal.png",
        defaultPosition: "right",
        expressions: {
            "normal": "miyuki_normal.png",
            "smiling": "miyuki_smiling.png",
            "surprised": "miyuki_surprising.png",
            "embarresed": "miyuki_embarresed.png"
        }
    },
    shoji: {
        name: "湘爾",
        nameReading: "しょうじ",
        color: "#60A5FA",
        image: "shoji_normal.png",
        defaultPosition: "right",
        expressions: {
            "normal": "shoji_normal.png",
            "smiling": "shoji_smiling.png",
            "surprised": "shoji_surprised.png",
            "embarresed": "shoji_embarresed.png"
        }
    }
};

// 背景設定
const BACKGROUNDS = {
    classroom: "bg_classroom_1.png",
    school: "bg_school.jpg",
    rooftop: "bg_rooftop.jpg", // 代用: 通学路
    corridor: "bg_corridor.jpg",
    scienceroom: "bg_scienceroom.png",
    gym: "bg_gym.png",
    clothingRoom: "bg_coveringroom.jpg",
    stairs: "bg_corridor.jpg", // 代用
    courtyard: "bg_rooftop.jpg", // 代用
    black: "",
    hospitalRoom: "bg_hospital.png" // 代用: 保健室
};

// シナリオデータ
const SCENARIO = {
    // プロローグ
    prologue: [
        {
            type: "background",
            bg: "school" // 通学路の代用
        },
        {
            type: "narration",
            text: "（小鳥のさえずり）"
        },
        {
            type: "narration",
            text: "……眠い。"
        },
        {
            type: "narration",
            text: "春の陽気ってやつは、どうしてこうも人間の意識を奪っていくんだろうか。昨晩、ついゲームをやりすぎたせいでもあるが。"
        },
        {
            type: "dialogue",
            character: "juri", // ???だが音声的には
            text: "おーい！　ちょっと、颯真ってば！",
            expression: "normal"
        },
        {
            type: "narration",
            text: "（タタタッという軽い足音）"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "……ん？"
        },
        {
            type: "dialogue",
            character: "juri",
            text: "おはよー！　って、あんたまた死にそうな顔して歩いてんね〜。ちゃんと寝た？",
            expression: "smiling"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "ああ……お早う、珠梨。寝たよ、三時間くらい。"
        },
        {
            type: "dialogue",
            character: "juri",
            text: "うわ、すくなっ！　あんたまたゲームやってたっしょ？　ほんと懲りないよねー。",
            expression: "normal" // 呆れ顔の代用
        },
        {
            type: "dialogue",
            character: "juri",
            text: "ほら、髪の毛も！　ここ、ピョンってなってんよ。寝癖！",
            expression: "normal"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "え、マジで？　……あー、直らないなこれ。"
        },
        {
            type: "dialogue",
            character: "juri",
            text: "もー、貸して！",
            expression: "normal"
        },
        {
            type: "narration",
            text: "（衣擦れの音）"
        },
        {
            type: "dialogue",
            character: "juri",
            text: "はい、ちょいちょいっ……と。よし、これでオッケー！　イケメンが台無しだよ、まったく。",
            expression: "normal"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "イケメンはお世辞だろ……。サンキュ。"
        },
        {
            type: "dialogue",
            character: "juri",
            text: "ふっ、どういたしまして！　……あ、そういえば今日の小テスト勉強した？",
            expression: "smiling"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "……忘れてた。"
        },
        {
            type: "dialogue",
            character: "juri",
            text: "やっぱね〜！　あたし、ヤマ張ってきたから後で見せてあげる！　感謝しなさいよね〜！",
            expression: "smiling"
        },
        {
            type: "narration",
            text: "高橋珠梨。俺の幼馴染であり、クラスでも一目置かれるいわゆる『ギャル』だ。見た目は派手だが、こうして何かと気にかけてくれる。"
        },
        {
            type: "narration",
            text: "（モブ男子A）お、高橋さんだ！　やっぱ可愛ええなぁ……"
        },
        {
            type: "narration",
            text: "（モブ男子B）朝から眼福だぜ。隣の夏海が羨ましいわ"
        },
        {
            type: "narration",
            text: "……まあ、こうやって注目を浴びるのもいつものことだが。"
        },
        {
            type: "dialogue",
            character: "juri",
            text: "ほら、あくびしない！　シャキッとする！　学校着くまで競争ね！",
            expression: "surprised"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "え、ちょ、待っ……！"
        },
        {
            type: "narration",
            text: "（走り去る足音）"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "……元気すぎるだろ。"
        },
        {
            type: "scene",
            next: "scene2"
        }
    ],

    scene2: [
        {
            type: "background",
            bg: "classroom"
        },
        {
            type: "narration",
            text: "教室に入ると、いつもの喧騒の中に、一つだけ重苦しい空気を纏った背中があった。"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "……おい、吉本。朝から眉間にシワ寄せてどうした？"
        },
        {
            type: "dialogue",
            character: "shoji",
            text: "あ、夏海くん……おはようございます。",
            expression: "normal" // 困り顔代用
        },
        {
            type: "dialogue",
            character: "soma",
            text: "おはよう。で、何をそんなに悩んでるんだ？　また学級委員の仕事か？"
        },
        {
            type: "dialogue",
            character: "shoji",
            text: "いえ、仕事というか……個人的な問題なんだけど。",
            expression: "normal"
        },
        {
            type: "dialogue",
            character: "shoji",
            text: "実は、図書室で次に借りる本を『源氏物語の現代語訳』にするか、『最新の量子力学入門』にするかで迷っていて……。",
            expression: "normal"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "……は？"
        },
        {
            type: "dialogue",
            character: "shoji",
            text: "源氏物語で情緒を育むべきか、量子力学で論理的思考を鍛えるべきか……今の私に必要なのはどちらなのか、答えが出ないの。",
            expression: "normal"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "どっちも借りればよくないか？"
        },
        {
            type: "dialogue",
            character: "shoji",
            text: "だめよ。一度に二冊も借りたら、読む時間が分散してしまうわ。一つのことに集中しないと、真の理解には到達できないもの。",
            expression: "normal"
        },
        {
            type: "narration",
            text: "（相変わらず真面目というか、極端だな……）"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "じゃあ、今日は国語の授業があるから源氏物語にしとけば？"
        },
        {
            type: "dialogue",
            character: "shoji",
            text: "！　そうね……予習の観点も含めれば、合理的だわ。ありがとう、夏海くん。君のおかげで蒙が啓けた気分よ。",
            expression: "surprised" // ハッとした顔
        },
        {
            type: "dialogue",
            character: "soma",
            text: "いや、大げさだって。"
        },
        {
            type: "dialogue",
            character: "shoji",
            text: "ふふ、やっぱり夏海くんは頼りになるわね。相談してよかった。",
            expression: "smiling"
        },
        {
            type: "narration",
            text: "吉本湘爾。真面目でしっかり者のクラス委員長だが、こうして些細なことで悩みすぎることもあるんだよな。でも、その実直さが彼女の良さでもある。"
        },
        {
            type: "scene",
            next: "scene3"
        }
    ],

    scene3: [
        {
            type: "background",
            bg: "corridor"
        },
        {
            type: "narration",
            text: "（キーンコーンカーンコーン）"
        },
        {
            type: "narration",
            text: "さて、昼飯にするか。購買のパン争奪戦は終わった頃だろうし……"
        },
        {
            type: "narration",
            text: "？？？「どっかーーーーーん！！」"
        },
        {
            type: "narration",
            text: "（ぶつかる音）"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "ぐはっ！？"
        },
        {
            type: "dialogue",
            character: "shokiko",
            text: "センパイ！　おっはよーございまーーす！！",
            expression: "smiling" // 満面の笑み
        },
        {
            type: "dialogue",
            character: "soma",
            text: "……お前なぁ、昼休みだぞ。おはようじゃなくてこんにちは、だし、いきなり背中からタックルするやつがあるか。"
        },
        {
            type: "dialogue",
            character: "shokiko",
            text: "えへへ〜、細かいことは気にしない気にしない！　スキンシップですよ、愛の！",
            expression: "smiling"
        },
        {
            type: "narration",
            text: "谷藤翔希子。一年の後輩で、吹奏楽部に所属している。見ての通り、台風のようなやつだ。"
        },
        {
            type: "dialogue",
            character: "shokiko",
            text: "あ、センパイそのパン、焼きそばパンですね？　いいな〜、私売り切れで買えなかったんですよ〜。",
            expression: "normal" // じーっと見る目代用
        },
        {
            type: "dialogue",
            character: "soma",
            text: "……あげないぞ。"
        },
        {
            type: "dialogue",
            character: "shokiko",
            text: "ちぇーっ！　ケチ！　センパイのケチんぼ！　末代まで語り継いでやる〜！",
            expression: "surprised" // ぷんぷん顔代用（embarresed?）
        },
        {
            type: "dialogue",
            character: "soma",
            text: "どんな伝説だよ。……ほら、半分やるから。"
        },
        {
            type: "dialogue",
            character: "shokiko",
            text: "えっ！　マジですか！？　センパイ神！　仏！　焼きそばパンの化身！",
            expression: "surprised" // 輝く瞳代用
        },
        {
            type: "dialogue",
            character: "soma",
            text: "最後のは悪口だろ。"
        },
        {
            type: "dialogue",
            character: "shokiko",
            text: "いただきまーす！　……んぐっ、ん〜！　おいし〜！",
            expression: "smiling"
        },
        {
            type: "dialogue",
            character: "shokiko",
            text: "やっぱセンパイといると面白いこと起きますね！　じゃ、エネルギー補給完了したんで部活行ってきまーす！　午後もファイティン！",
            expression: "smiling"
        },
        {
            type: "narration",
            text: "（嵐のように去る音）"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "……ほんと、あいつがいるだけで場が騒がしくなるな。"
        },
        {
            type: "narration",
            text: "だが、あの底抜けの明るさに救われている奴も多いんだろうな。"
        },
        {
            type: "scene",
            next: "scene4"
        }
    ],

    scene4: [
        {
            type: "background",
            bg: "corridor"
        },
        {
            type: "narration",
            text: "今日は部活も休みだし、少し早めに帰るか。……ん？"
        },
        {
            type: "narration",
            text: "あれは……一年の竹重か。危なっかしいな、あんなに抱えて。"
        },
        {
            type: "dialogue",
            character: "souka",
            text: "……（よろよろ）",
            expression: "normal"
        },
        {
            type: "dialogue",
            character: "souka",
            text: "……あ、重力が……重心が……ずれ……",
            expression: "normal"
        },
        {
            type: "narration",
            text: "（ガッシャーン！！）"
        },
        {
            type: "dialogue",
            character: "souka",
            text: "あうっ！",
            expression: "surprised"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "大丈夫か！？"
        },
        {
            type: "dialogue",
            character: "souka",
            text: "うぅ……実験器具の配置における空間的エントロピーが……",
            expression: "surprised" // 目を回している代用
        },
        {
            type: "dialogue",
            character: "soma",
            text: "とりあえず、怪我はないか？　派手に転んでたけど。"
        },
        {
            type: "dialogue",
            character: "souka",
            text: "……！　先輩……。",
            expression: "normal" // 真顔
        },
        {
            type: "dialogue",
            character: "soma",
            text: "手伝うよ。これ、理科室に運ぶんだろ？"
        },
        {
            type: "dialogue",
            character: "souka",
            text: "あ、あの……ありがとうございます。えっと……",
            expression: "embarresed"
        },
        {
            type: "narration",
            text: "（奏花の視線が彷徨う）"
        },
        {
            type: "dialogue",
            character: "souka",
            text: "……今日の降水確率は20%だそうです。",
            expression: "normal"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "……は？　ああ、そうだな。"
        },
        {
            type: "dialogue",
            character: "souka",
            text: "あと、朝ごはんはトーストでした。ジャムはイチゴです。",
            expression: "normal"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "……そうか。おいしかったか？"
        },
        {
            type: "dialogue",
            character: "souka",
            text: "はい。非常に。",
            expression: "normal"
        },
        {
            type: "narration",
            text: "（こいつ、パニックになって全然関係ない話し始めたぞ……）"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "とりあえず片付けるぞ。落ち着け。"
        },
        {
            type: "dialogue",
            character: "souka",
            text: "は、はい！　もう平気です！",
            expression: "surprised"
        },
        {
            type: "narration",
            text: "竹重奏花。理系女子で優秀らしいが、この通りかなりの天然だ。白衣が似合っているようで、中身は年相応以上に子供っぽいのかもしれない。"
        },
        {
            type: "scene",
            next: "scene5"
        }
    ],

    scene5: [
        {
            type: "background",
            bg: "rooftop" // 旧校舎裏代用
        },
        {
            type: "narration",
            text: "近道しようと思って旧校舎裏に来てみたが……"
        },
        {
            type: "narration",
            text: "（ピコピコ……という電子音）"
        },
        {
            type: "narration",
            text: "（誰かいる？）"
        },
        {
            type: "dialogue",
            character: "miyuki",
            text: "……そこ。右。……ジャンプキャンセルからの……昇龍。",
            expression: "normal" // 真剣な顔
        },
        {
            type: "narration",
            text: "（あれは……3年の高杉先輩？）"
        },
        {
            type: "narration",
            text: "高杉美由紀先輩。美人でスタイルもいいが、冷徹で近寄りがたいと噂の先輩だ。そんな人がこんなところで……"
        },
        {
            type: "dialogue",
            character: "miyuki",
            text: "……よし、K.O.。……ふっ、他愛ない。",
            expression: "smiling" // 勝利の余韻
        },
        {
            type: "narration",
            text: "（うわ、普段絶対見せないような顔で笑ってる……）"
        },
        {
            type: "narration",
            text: "（カサッ）"
        },
        {
            type: "dialogue",
            character: "miyuki",
            text: "ッ！？",
            expression: "surprised"
        },
        {
            type: "dialogue",
            character: "miyuki",
            text: "……誰？",
            expression: "normal" // 鋭い睨み代用
        },
        {
            type: "dialogue",
            character: "soma",
            text: "あ、いえ、通りかかっただけで……"
        },
        {
            type: "dialogue",
            character: "miyuki",
            text: "……見た？",
            expression: "normal"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "えっと……見事なコンボでした。"
        },
        {
            type: "dialogue",
            character: "miyuki",
            text: "……。",
            expression: "embarresed" // 顔を赤らめて
        },
        {
            type: "dialogue",
            character: "miyuki",
            text: "……誰かに言ったら殺すわよ。",
            expression: "embarresed"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "は、はい！　記憶から消します！"
        },
        {
            type: "dialogue",
            character: "miyuki",
            text: "……ならいいわ。……ふん。",
            expression: "normal"
        },
        {
            type: "narration",
            text: "去り際に一瞬見えた耳は真っ赤だった。……意外と可愛い人なのかもしれない。"
        },
        {
            type: "scene",
            next: "scene6"
        }
    ],

    scene6: [
        {
            type: "background",
            bg: "rooftop" // 通学路代用
        },
        {
            type: "narration",
            text: "……なんか、今日は濃い一日だったな。"
        },
        {
            type: "narration",
            text: "幼馴染に、真面目委員長、嵐のような後輩、ドジな理系女子、隠れゲーマーの先輩……。"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "平穏な高校生活を送りたい俺だが、どうやら退屈はしなさそうだ。"
        },
        {
            type: "narration",
            text: "― プロローグ　完 ―"
        },
        {
            type: "scene",
            next: "scene7"
        }
    ],

    scene7: [
        {
            type: "background",
            bg: "classroom"
        },
        {
            type: "narration",
            text: "担任「えー、というわけで。今年の文化祭のクラス出し物を決める。……委員長、頼んだぞ。」"
        },
        {
            type: "dialogue",
            character: "shoji",
            text: "はい。……それじゃあ皆さん、静かに。何か提案がある人は手を挙げてください。",
            expression: "normal"
        },
        {
            type: "narration",
            text: "颯真（モノローグ）「始まったか……。毎年恒例、血で血を洗う出し物決め会議。」"
        },
        {
            type: "dialogue",
            character: "juri",
            text: "はーい！　あたし、映えるタピオカ屋さんがいいと思いまーす！",
            expression: "smiling"
        },
        {
            type: "narration",
            text: "男子生徒A「お、いいじゃん！　高橋さんが看板娘なら絶対売れるって！」"
        },
        {
            type: "dialogue",
            character: "shoji",
            text: "それは却下ね。",
            expression: "surprised"
        },
        {
            type: "dialogue",
            character: "juri",
            text: "えーっ！？　なんでよ委員長〜！　瞬殺！？",
            expression: "surprised"
        },
        {
            type: "dialogue",
            character: "shoji",
            text: "タピオカはもうブームが過ぎているし、今更やっても珍しくないわ。今やるなら、もっと新しい……そうね、『完全栄養食カフェ』なんてどう？　栄養満点で健康的だし。",
            expression: "normal"
        },
        {
            type: "narration",
            text: "颯真「（それ、絶対客来ないだろ……）」"
        },
        {
            type: "narration",
            text: "女子生徒B「あ、あの……無難にお化け屋敷とかは……？」"
        },
        {
            type: "dialogue",
            character: "shoji",
            text: "お化け屋敷ね。一応候補には入れておくわ。でも、安全管理とか、驚いた人が怪我しないような対策とか、考えることが山積みよ？",
            expression: "normal"
        },
        {
            type: "narration",
            text: "颯真「（固いな吉本…これじゃ何も決まらないよ。）」"
        },
        {
            type: "dialogue",
            character: "juri",
            text: "もー、そんな小難しいこと言ってたら何も決まんないって！　もっとこう、パッと盛り上がるやつにしよーよ！",
            expression: "normal"
        },
        {
            type: "dialogue",
            character: "shoji",
            text: "盛り上がるのも大事だけど、ちゃんと実現できるかとか、高校生らしいかどうかも考えなくちゃ。",
            expression: "normal"
        },
        {
            type: "narration",
            text: "（SE：ガヤガヤ……）"
        },
        {
            type: "narration",
            text: "颯真（モノローグ）「……案の定、まとまらない。珠梨の言う『楽しさ』と、湘爾の言う『合理性』。どっちも極端なんだよな。」"
        },
        {
            type: "dialogue",
            character: "shoji",
            text: "……皆さん静かに！このままでは議論がまとまらない……どうしましょう。",
            expression: "troubled" // 困り眉があれば。normalかtroubled
        },
        {
            type: "narration",
            text: "颯真「（……仕方ない）」"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "おい、折衷案だ。飲食系で、かつ準備が楽で、ある程度独自性が出せるやつ。『レトロ喫茶』とかどうだ？"
        },
        {
            type: "narration",
            text: "クラス一同「おぉ……」"
        },
        {
            type: "dialogue",
            character: "juri",
            text: "あ、それいいかも！　レトロな制服とか可愛いし！",
            expression: "smiling"
        },
        {
            type: "dialogue",
            character: "shoji",
            text: "……喫茶店なら、運営もしやすいし現実的ね。……わかった、それを採用案にしましょう。",
            expression: "normal"
        },
        {
            type: "narration",
            text: "颯真（モノローグ）「ふぅ……なんとか収まったか。」"
        },
        {
            type: "dialogue",
            character: "shoji",
            text: "では、実行委員長は私、吉本が務めますが……副委員長として、提案者の夏海くんを指名します。",
            expression: "smiling"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "は？"
        },
        {
            type: "dialogue",
            character: "juri",
            text: "賛成ー！　颯真なら適任だし！",
            expression: "smiling"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "おい待て、俺は平穏に過ごしたいだけ……"
        },
        {
            type: "dialogue",
            character: "shoji",
            text: "夏海くん、これはクラスのみんなも賛成してるの。逃げちゃだめよ。",
            expression: "normal"
        },
        {
            type: "narration",
            text: "颯真「くっ……（墓穴を掘った……！）」"
        },
        {
            type: "scene",
            next: "scene8"
        }
    ],

    scene8: [
        {
            type: "background",
            bg: "corridor"
        },
        {
            type: "narration",
            text: "颯真（モノローグ）「こうして、怒涛の準備期間が始まった。」"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "俺の仕事は、全体の進捗管理と、トラブルシューティング。つまり……雑用だ。"
        },
        {
            type: "background",
            bg: "clothingRoom"
        },
        {
            type: "dialogue",
            character: "juri",
            text: "ねーねー颯真！　こっちのフリルとこっちのリボン、どっちが『エモい』と思う！？",
            expression: "normal"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "……エモいの定義にもよるとしか言えないが、"
        },
        {
            type: "choice",
            choices: [
                {
                    text: "正直さ、どっちでもよくね？",
                    next: "scene8_bad_juri"
                },
                {
                    text: "右の方が似合ってるんじゃないか？"
                }
            ]
        },
        {
            type: "dialogue",
            character: "soma",
            text: "右の方が似合ってるんじゃないか？"
        },
        {
            type: "dialogue",
            character: "juri",
            text: "でしょー！　さすが颯真、わかってる〜！　採用！",
            expression: "smiling"
        },
        {
            type: "background",
            bg: "classroom"
        },
        {
            type: "dialogue",
            character: "shoji",
            text: "夏海くん、シフト表がどうしてもうまくいかないの。A君とBさんの休憩時間が衝突して……",
            expression: "normal" // 困り顔
        },
        {
            type: "dialogue",
            character: "soma",
            text: "手動でずらせばいいだろ。ほら、ここをこうして……"
        },
        {
            type: "dialogue",
            character: "shoji",
            text: "……すごっ。夏海くん、頭の中に計算機でも入ってるの？",
            expression: "surprised"
        },

        {
            type: "choice",
            choices: [
                {
                    text: "まあまあまあ、俺にかかればこんなもんっしょ",
                    next: "scene8_bad_shoji"
                },
                {
                    text: "普通だよ。"
                }
            ]
        },
        {
            type: "dialogue",
            character: "soma",
            text: "普通だよ。"
        },
        {
            type: "background",
            bg: "courtyard"
        },
        {
            type: "narration",
            text: "（SE：ドンドコドンドコ）"
        },
        {
            type: "dialogue",
            character: "shokiko",
            text: "センパーイ！　見てくださいこのお祭り太鼓！　吹奏楽部の余り物借りてきました！",
            expression: "smiling"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "お前、それクラスとなんの関係があるんだ？"
        },
        {
            type: "dialogue",
            character: "shokiko",
            text: "客引きですよ！　バイブス上げていきましょーー！！",
            expression: "smiling"
        },

        {
            type: "choice",
            choices: [
                {
                    text: "気持ちはありがたいけど程々にな。"
                },
                {
                    text: "やっぱこいつが気違いだろww",
                    next: "scene8_bad_shokiko"
                }
            ]
        },
        {
            type: "dialogue",
            character: "soma",
            text: "気持ちはありがたいけど程々にな。"
        },
        {
            type: "background",
            bg: "scienceroom"
        },
        {
            type: "dialogue",
            character: "souka",
            text: "先輩。コーヒーの旨味成分を極限まで抽出するための、遠心分離機です。",
            expression: "normal"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "喫茶店にそんなもん持ち込むな。普通のドリップでいいんだよ。"
        },
        {
            type: "dialogue",
            character: "souka",
            text: "ですが、ペーパードリップでは紙の繊維の味が……",
            expression: "normal"
        },

        {
            type: "choice",
            choices: [
                {
                    text: "はいバカーwww　てことだけは伝えておきますね。",
                    next: "scene8_bad_souka"
                },
                {
                    text: "誰も気にしないから心配いらないよ。"
                }
            ]
        },
        {
            type: "dialogue",
            character: "soma",
            text: "誰も気にしないから心配いらないよ。"
        },
        {
            type: "background",
            bg: "stairs"
        },

        {
            type: "choice",
            choices: [
                {
                    text: "……あれ？　高杉先輩、またサボりですか？"
                },
                {
                    text: "どしたん話きこか？",
                    next: "scene8_bad_miyuki"
                }
            ]
        },
        {
            type: "dialogue",
            character: "soma",
            text: "……あれ？　高杉先輩、またサボりですか？"
        },
        {
            type: "dialogue",
            character: "miyuki",
            text: "……人聞きが悪いわね。これは精神統一よ。",
            expression: "normal"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "ゲーム機持って精神統一できる人は初めて見ました。"
        },
        {
            type: "dialogue",
            character: "miyuki",
            text: "……ふん。余計なお世話よ。",
            expression: "normal"
        },
        {
            type: "scene",
            next: "scene9"
        }
    ],

    scene9: [
        {
            type: "background",
            bg: "classroom"
        },
        {
            type: "narration",
            text: "颯真（モノローグ）「文化祭前日。準備は佳境を迎えている……というより、修羅場だ。」"
        },
        {
            type: "narration",
            text: "颯真「（あちこちでトラブルの気配がする。……俺の体は一つしかない。どこへ向かうべきか……）」"
        },
        {
            type: "choice",
            choices: [
                {
                    text: "何かが割れたような音のするほうへ行ってみる",
                    next: "route_entry_juri",
                    affection: { juri: 1 }
                },
                {
                    text: "教室を見回る",
                    next: "route_entry_shoji",
                    affection: { shoji: 1 }
                },
                {
                    text: "中庭のステージ設営を手伝う",
                    next: "route_entry_shokiko",
                    affection: { shokiko: 1 }
                },
                {
                    text: "不穏な煙の方へ行く",
                    next: "route_entry_souka",
                    affection: { souka: 1 }
                },
                {
                    text: "休憩に行く",
                    next: "route_entry_miyuki",
                    affection: { miyuki: 1 }
                }
            ]
        }
    ],

    route_entry_juri: [
        {
            type: "background",
            bg: "clothingRoom"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "絶対に何かが壊れた音がした。……やっぱり、珠梨のところが一番心配だな。"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "おーい、珠梨。生きてるか？"
        },
        {
            type: "dialogue",
            character: "juri",
            text: "あ、颯真〜！　来てくれたんだ〜！　もうマジで大ピンチ！　ミシン壊れたし！",
            expression: "surprised"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "お前なぁ……貸してみろ。……これ、糸が絡まってるだけだぞ。"
        },
        {
            type: "dialogue",
            character: "juri",
            text: "えっ、うそ！？　さすが颯真、神！　一生ついてく！",
            expression: "smiling"
        },
        {
            type: "narration",
            text: "颯真（モノローグ）「調子のいいやつだ。……だが、こいつの笑顔を見ると、疲れも少し飛ぶ気がする。」"
        },
        {
            type: "scene",
            next: "scene_j1"
        }
    ],

    route_entry_shoji: [
        {
            type: "background",
            bg: "classroom"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "教室に誰かいないかなー。　サボりの一人や二人くらい…"
        },
        {
            type: "dialogue",
            character: "shoji",
            text: "うぅ……予算が合わない……領収書の整理も終わらないし……",
            expression: "normal" // 困り顔
        },
        {
            type: "dialogue",
            character: "soma",
            text: "あれは吉本？また何か思い詰めている様子だな。"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "おい、大丈夫か？　顔色が悪いぞ。疲れているのか？"
        },
        {
            type: "dialogue",
            character: "shoji",
            text: "あ、夏海くん……。ううん、疲れてるわけじゃないの。ちょっと糖分が足りなくて、頭が回ってないだけ……。",
            expression: "normal"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "それを『疲れてる』って言うんだよ。ほら、チョコやるから。"
        },
        {
            type: "dialogue",
            character: "shoji",
            text: "……！　ありがとう、夏海くん。救世主みたい。",
            expression: "smiling"
        },
        {
            type: "narration",
            text: "颯真（モノローグ）「オーバーだな。……でも、少しでも負担を減らしてやりたいと思う。」"
        },
        {
            type: "scene",
            next: "scene_s1"
        }
    ],

    route_entry_shokiko: [
        {
            type: "background",
            bg: "courtyard"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "……あいつ、また何かやらかしてないだろうな。"
        },
        {
            type: "dialogue",
            character: "shokiko",
            text: "とりゃーー！！　……あだっ！！",
            expression: "surprised"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "何やってんだお前は……。"
        },
        {
            type: "dialogue",
            character: "shokiko",
            text: "あ、センパイ！　いや〜、看板設置しようとしたら、足元のバナナの皮に滑って……",
            expression: "smiling"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "なんでそんなベタな展開があるんだよ。……怪我はないか？"
        },
        {
            type: "dialogue",
            character: "shokiko",
            text: "へいきへいき！　私、バナナ耐性あるんで！　それよりセンパイ、ここ持ってください！",
            expression: "smiling"
        },
        {
            type: "narration",
            text: "颯真（モノローグ）「こいつといると、退屈する暇がないな。……まあ、悪くないか。」"
        },
        {
            type: "scene",
            next: "scene_k1"
        }
    ],

    route_entry_souka: [
        {
            type: "background",
            bg: "scienceroom"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "……不穏な煙が見えた気がする。さてはこっちだな？"
        },
        {
            type: "dialogue",
            character: "souka",
            text: "……おかしいですね。コーヒーゼリーが完成するはずが、黒い煙がでてくるんです。",
            expression: "normal" // 困り顔
        },
        {
            type: "dialogue",
            character: "soma",
            text: "爆発の前兆じゃないだろうな？"
        },
        {
            type: "dialogue",
            character: "souka",
            text: "あ、先輩。……今のところ、爆発確率はおよそ50%程度でしょう。",
            expression: "normal"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "高すぎるわ！　……まったく、俺が見ててやるから、手順を一から確認するぞ。"
        },
        {
            type: "dialogue",
            character: "souka",
            text: "はい……！先輩はコーヒーゼリーが好きだと聞いたので、本番でサプライズを……あ、言ってしまいました……",
            expression: "embarresed"
        },
        {
            type: "narration",
            text: "颯真（モノローグ）「放っておけない危うさがある。……それが、奏花の魅力なのかもしれない。」"
        },
        {
            type: "scene",
            next: "scene_so1"
        }
    ],

    route_entry_miyuki: [
        {
            type: "background",
            bg: "stairs"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "たまには休憩もいいよな。……そういえば高杉先輩をみないな。絶対どこかでサボってるはずだ……"
        },
        {
            type: "dialogue",
            character: "miyuki",
            text: "……zzz",
            expression: "normal" // 寝顔代用
        },
        {
            type: "dialogue",
            character: "soma",
            text: "……寝てる。"
        },
        {
            type: "narration",
            text: "颯真「（普段あんなにツンツンしてるのに、寝顔は子供みたいだな……）」"
        },
        {
            type: "dialogue",
            character: "miyuki",
            text: "……ん……。……何見てんのよ。",
            expression: "normal" // 寝起き・不機嫌
        },
        {
            type: "dialogue",
            character: "soma",
            text: "うわ、起きた。"
        },
        {
            type: "dialogue",
            character: "miyuki",
            text: "……勝手に見ないで。減るもんじゃないけど……恥ずかしいじゃない。",
            expression: "embarresed"
        },
        {
            type: "narration",
            text: "颯真（モノローグ）「夕日に照らされた横顔が、妙に綺麗で。俺は目を逸らせなかった。」"
        },
        {
            type: "scene",
            next: "scene_m1"
        }
    ],

    // ==========================================
    // 高橋 珠梨 ルート
    // ==========================================
    scene_j1: [
        {
            type: "background",
            bg: "clothingRoom"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "……よし、ミシン復活。これで縫えるはずだ。"
        },
        {
            type: "dialogue",
            character: "juri",
            text: "うわ〜、助かった〜！　颯真がいなきゃ詰んでたよ〜。",
            expression: "smiling"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "お前、本当に不器用だよな。ボタン付けも怪しいんじゃないか？"
        },
        {
            type: "dialogue",
            character: "juri",
            text: "うっさいな〜！　あたしはプロデュース専門なの！　細かい作業は颯真の担当！",
            expression: "normal"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "勝手に決めるな。"
        },
        {
            type: "dialogue",
            character: "juri",
            text: "……でもさ、ありがとね。ほんとに。",
            expression: "smiling"
        },
        {
            type: "dialogue",
            character: "juri",
            text: "あたし、口だけで何にもできないなって、ちょっと凹んでたから。",
            expression: "normal" // しおらしい顔
        },
        {
            type: "dialogue",
            character: "soma",
            text: "……珍しいな、お前がそんなこと言うなんて。"
        },
        {
            type: "dialogue",
            character: "juri",
            text: "だってさ〜、ギャルだし？　見た目派手だし？　こういう地味な作業とか、みんな期待してないじゃん。『珠梨ちゃんは盛り上げ役だから〜』みたいな。",
            expression: "normal"
        },
        {
            type: "dialogue",
            character: "juri",
            text: "本当は、もっと……ちゃんと役に立ちたかったんだけどな。"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "……お前は十分に役に立ってるよ。"
        },
        {
            type: "dialogue",
            character: "juri",
            text: "え？",
            expression: "surprised"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "お前のその明るさが、クラスの空気を良くしてるんだ。お前が笑えば、みんな安心する。それって、誰にでもできることじゃないぞ。"
        },
        {
            type: "dialogue",
            character: "juri",
            text: "……！",
            expression: "surprised"
        },
        {
            type: "dialogue",
            character: "juri",
            text: "……なによ、急に。口説いてんの？",
            expression: "embarresed" // 照れ顔
        },
        {
            type: "dialogue",
            character: "soma",
            text: "事・実・だ。"
        },
        {
            type: "dialogue",
            character: "juri",
            text: "……ふーん。そっか。……へへっ。",
            expression: "smiling"
        },
        {
            type: "scene",
            next: "scene_j2"
        }
    ],

    scene_j2: [
        {
            type: "background",
            bg: "classroom"
        },
        {
            type: "dialogue",
            character: "juri",
            text: "いらっしゃいませー！　2年B組のレトロ喫茶へようこそ〜！",
            expression: "smiling"
        },
        {
            type: "narration",
            text: "客A（男子）「うおっ、高橋さん超可愛い！」"
        },
        {
            type: "narration",
            text: "客B（男子）「写真いいですか！？」"
        },
        {
            type: "dialogue",
            character: "juri",
            text: "いーよー！　どんどん拡散してね〜！",
            expression: "smiling"
        },
        {
            type: "narration",
            text: "颯真（モノローグ）「……すごい人気だ。看板娘ってレベルじゃないな。」"
        },
        {
            type: "dialogue",
            character: "juri",
            text: "あ、颯真！　オーダー入ったよ！　オムライス3つ！",
            expression: "normal"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "了解。……って、お前、スカート短すぎないか？"
        },
        {
            type: "dialogue",
            character: "juri",
            text: "え〜？　これくらいが可愛くない？　JKは足出してナンボっしょ！",
            expression: "smiling"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "……他が騒ぎ立てるのが面白くないんだよ。"
        },
        {
            type: "dialogue",
            character: "juri",
            text: "……へ？",
            expression: "surprised"
        },
        {
            type: "dialogue",
            character: "juri",
            text: "……え、なによ。……独占欲？",
            expression: "embarresed"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "……仕事に戻る。"
        },
        {
            type: "dialogue",
            character: "juri",
            text: "あ、ちょ、逃げんなー！　……もう、颯真のバカ。",
            expression: "embarresed"
        },
        {
            type: "scene",
            next: "scene_j3"
        }
    ],

    scene_j3: [
        {
            type: "background",
            bg: "classroom" // 夕焼け差分があればベストだが、一端通常教室で
        },
        {
            type: "narration",
            text: "（背景：夕焼けの教室・片付け後）"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "ふぅ……やっと片付いたな。"
        },
        {
            type: "dialogue",
            character: "juri",
            text: "おつかれ〜！　いや〜、大成功だったね！",
            expression: "smiling"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "ああ。お前が頑張ったおかげだ。"
        },
        {
            type: "dialogue",
            character: "juri",
            text: "……ねえ、颯真。",
            expression: "normal"
        },
        {
            type: "dialogue",
            character: "juri",
            text: "あたしね、今日、すごく楽しかった。",
            expression: "smiling"
        },
        {
            type: "dialogue",
            character: "juri",
            text: "でも、それ以上に……颯真がそばにいてくれて、嬉しかった。",
            expression: "normal"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "珠梨……？"
        },
        {
            type: "dialogue",
            character: "juri",
            text: "昔からずっと一緒だったから、当たり前だと思ってたけど……違うんだね。",
            expression: "normal"
        },
        {
            type: "dialogue",
            character: "juri",
            text: "颯真が他の子と話してるとモヤモヤするし、優しくされるとドキドキする。",
            expression: "embarresed"
        },
        {
            type: "narration",
            text: "（珠梨、一歩近づく）"
        },
        {
            type: "dialogue",
            character: "juri",
            text: "あたし、もう幼馴染やめたい。",
            expression: "normal"
        },
        {
            type: "dialogue",
            character: "juri",
            text: "……颯真の、彼女になりたい。",
            expression: "embarresed"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "……俺もだ。珠梨、お前が好きだ。"
        },
        {
            type: "dialogue",
            character: "juri",
            text: "……！　……うそ、ほんとに？",
            expression: "surprised"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "ああ。"
        },
        {
            type: "dialogue",
            character: "juri",
            text: "やったぁ……！！　大好き！　颯真大好きーー！！",
            expression: "smiling"
        },
        {
            type: "narration",
            text: "（珠梨が飛びついてくる）"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "うわっ、危ないって！"
        },
        {
            type: "dialogue",
            character: "juri",
            text: "えへへ〜、もう離さないからね！　覚悟しなよ、ダーリン♪",
            expression: "smiling"
        },
        {
            type: "narration",
            text: "― 高橋 珠梨 ルート　完 ―"
        },
        {
            type: "choice",
            choices: [
                {
                    text: "タイトルに戻る",
                    next: "title_screen"
                }
            ]
        }
    ],

    // ==========================================
    // 吉本 湘爾 ルート
    // ==========================================
    scene_s1: [
        {
            type: "background",
            bg: "classroom"
        },
        {
            type: "dialogue",
            character: "shoji",
            text: "うぅ……この資料を会計に渡さなければ……",
            expression: "normal" // 困り顔
        },
        {
            type: "dialogue",
            character: "soma",
            text: "おい、吉本。顔真っ青だぞ。少しは休め。"
        },
        {
            type: "dialogue",
            character: "shoji",
            text: "だめよ。私が休んだら、クラスの経済が崩壊するわ……。",
            expression: "normal"
        },
        {
            type: "narration",
            text: "湘爾「私が……やらなきゃ……」"
        },
        {
            type: "narration",
            text: "（ドサッ）"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "おいっ、吉本！！"
        },
        {
            type: "narration",
            text: "（暗転）"
        },
        {
            type: "background",
            bg: "black" // 保健室がないので暗いままか、教室か
        },
        {
            type: "dialogue",
            character: "shoji",
            text: "……ん……あれ、私……",
            expression: "normal"
        },
        {
            type: "background",
            bg: "hospitalRoom" // 保健室代用
        },
        {
            type: "dialogue",
            character: "soma",
            text: "気がついたか。過労で倒れたんだよ。"
        },
        {
            type: "dialogue",
            character: "shoji",
            text: "……夏海くん？　どうして……",
            expression: "surprised"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "ここまで運んだんだよ。……まったく、完璧主義もほどほどにしろ。"
        },
        {
            type: "dialogue",
            character: "shoji",
            text: "……ごめんなさい。私、自己管理もできないなんて……非合理的ね。",
            expression: "normal" // 落ち込み
        },
        {
            type: "dialogue",
            character: "soma",
            text: "そうやって自分を責めるな。お前が頑張ってるのはみんな知ってる。"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "……ほら、水。飲めるか？"
        },
        {
            type: "dialogue",
            character: "shoji",
            text: "……ありがとう。",
            expression: "smiling"
        },
        {
            type: "narration",
            text: "（立ち絵：湘爾・少し顔を赤らめる）"
        },
        {
            type: "dialogue",
            character: "shoji",
            text: "……変ね。",
            expression: "normal"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "何が？"
        },
        {
            type: "dialogue",
            character: "shoji",
            text: "何だか汗かいてきた。……病気かしら？",
            expression: "normal" // 顔赤い
        },
        {
            type: "dialogue",
            character: "soma",
            text: "……さあな。熱でもあるんじゃないか？"
        },
        {
            type: "scene",
            next: "scene_s2"
        }
    ],

    scene_s2: [
        {
            type: "background",
            bg: "classroom"
        },
        {
            type: "narration",
            text: "女子生徒「ちょ、大変！　コーヒーメーカーが壊れた！」"
        },
        {
            type: "dialogue",
            character: "shoji",
            text: "なんですって！？　予備のマシンは……もうないわ。どうしましょう……",
            expression: "surprised"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "落ち着け。今の客入りなら、ハンドドリップに切り替えても回せる。"
        },
        {
            type: "dialogue",
            character: "shoji",
            text: "でも、このままじゃ店が回らないわ。売り上げを落とすわけにもいかないし……",
            expression: "normal" // 焦り
        },
        {
            type: "dialogue",
            character: "soma",
            text: "『一杯ずつ丁寧に手淹れします』って売りにすればいい。付加価値に変えるんだ。"
        },
        {
            type: "dialogue",
            character: "shoji",
            text: "……！　なるほど。ピンチをチャンスに変える発想……やっぱり天才だわ。",
            expression: "surprised"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "俺がドリップする。吉本はフロアのコントロールを頼む。"
        },
        {
            type: "dialogue",
            character: "shoji",
            text: "了解したわ。……夏海くん、貴方って本当に……",
            expression: "smiling"
        },
        {
            type: "scene",
            next: "scene_s3"
        }
    ],

    scene_s3: [
        {
            type: "background",
            bg: "classroom" // 図書室がないので教室で代用
        },
        {
            type: "narration",
            text: "（背景：夕暮れの図書室）"
        },
        {
            type: "dialogue",
            character: "shoji",
            text: "……あ、夏海くん。ここかなって思ったわ。",
            expression: "normal"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "吉本か。さぼりか？"
        },
        {
            type: "dialogue",
            character: "shoji",
            text: "休憩よ。……ねえ、夏海くん。",
            expression: "normal"
        },
        {
            type: "dialogue",
            character: "shoji",
            text: "私ね、ずっと考えてたの。",
            expression: "normal"
        },
        {
            type: "dialogue",
            character: "shoji",
            text: "どうして貴方を目で追ってしまうのか。どうして、声を聞くと安心するのか。",
            expression: "normal"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "……答えは見つかったか？"
        },
        {
            type: "dialogue",
            character: "shoji",
            text: "ええ。どの本にも載っていなかったけれど……やっと分かったわ。",
            expression: "smiling"
        },
        {
            type: "narration",
            text: "（湘爾、一歩近づき、顔を赤らめて俯く）"
        },
        {
            type: "dialogue",
            character: "shoji",
            text: "私……貴方のことが、好きみたい。",
            expression: "smiling" // 照れ
        },
        {
            type: "dialogue",
            character: "shoji",
            text: "自分でも分からないの。こんなに胸が苦しくて、でも……貴方が隣にいると、すごく幸せで。",
            expression: "smiling"
        },
        {
            type: "dialogue",
            character: "shoji",
            text: "もう、頭で考えるの……どうでもよくなっちゃった。",
            expression: "smiling"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "……俺もだ。お前と一緒にいると、調子が狂う。でも、悪くない。"
        },
        {
            type: "dialogue",
            character: "shoji",
            text: "ふふ。……ねえ、夏海くん。",
            expression: "smiling"
        },
        {
            type: "dialogue",
            character: "shoji",
            text: "私という物語を、ずっとそばで読み続けてくれる？",
            expression: "smiling"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "……ああ。望むところだ。"
        },
        {
            type: "narration",
            text: "― 吉本 湘爾 ルート　完 ―"
        },
        {
            type: "choice",
            choices: [
                {
                    text: "タイトルに戻る",
                    next: "title_screen"
                }
            ]
        }
    ],

    // ==========================================
    // 谷藤 翔希子 ルート
    // ==========================================
    scene_k1: [
        {
            type: "background",
            bg: "courtyard"
        },
                {
            type: "dialogue",
            character: "soma",
            text: "……やることが山積みで遅くなってしまった。"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "忘れ物取りに来ただけだが……こんな時間に誰だ？"
        },
        {
            type: "narration",
            text: "（タタッ、ターン……）"
        },
        {
            type: "dialogue",
            character: "shokiko",
            text: "……ワン、ツー、スリー……くぅ、もう一回！",
            expression: "normal" // 真剣な顔があれば
        },
        {
            type: "narration",
            text: "颯真（モノローグ）「あれは……谷藤か？　普段のおちゃらけた様子とは別人のように真剣な顔だ。」"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "おい、谷藤。こんな時間まで何やってんだ？"
        },
        {
            type: "dialogue",
            character: "shokiko",
            text: "！！　ひゃああ！？",
            expression: "surprised"
        },
        {
            type: "narration",
            text: "（SE：ドテッ）"
        },
        {
            type: "dialogue",
            character: "shokiko",
            text: "あたた……って、センパイ！？　びっくりさせないでくださいよ〜！",
            expression: "surprised"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "悪い。……練習か？"
        },
        {
            type: "dialogue",
            character: "shokiko",
            text: "えへへ……まあ、見つかっちゃいましたか。内緒にしてたんですけどね〜。",
            expression: "smiling"
        },
        {
            type: "dialogue",
            character: "shokiko",
            text: "私、運動神経いいキャラで売ってるじゃないですか？　だから、影で練習してるとか、なんかかっこ悪いっていうか。",
            expression: "normal"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "かっこ悪いなんてこと、あるかよ。"
        },
        {
            type: "dialogue",
            character: "shokiko",
            text: "え？",
            expression: "surprised"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "誰も見てないところで努力できるやつが、一番かっこいいんだよ。"
        },
        {
            type: "dialogue",
            character: "shokiko",
            text: "……！　うぅ〜、センパイ、そういうことサラッと言うのズルイです……。",
            expression: "smiling" // 照れ
        },
        {
            type: "dialogue",
            character: "shokiko",
            text: "……惚れてまうやろー！　ってやつですよ！",
            expression: "smiling"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "また茶化すな。……ほら、ジュースやるよ。"
        },
        {
            type: "dialogue",
            character: "shokiko",
            text: "わーい！　センパイの奢りだ〜！　一生ついていきます！",
            expression: "smiling"
        },
        {
            type: "scene",
            next: "scene_k2"
        }
    ],

    scene_k2: [
        {
            type: "background",
            bg: "courtyard"
        },
                {
            type: "dialogue",
            character: "soma",
            text: "文化祭当日。次の幕は谷藤が練習していたダンスの本番だ。"
        },
        {
            type: "narration",
            text: "司会「続いては、1年A組のダンスパフォーマンスだー！！」"
        },
        {
            type: "narration",
            text: "（大歓声）"
        },
        {
            type: "narration",
            text: "颯真（モノローグ）「始まったな。」"
        },
        {
            type: "dialogue",
            character: "shokiko",
            text: "みんなー！　盛り上がってるー！？　今日は最高の思い出作っちゃおー！！",
            expression: "smiling"
        },
        {
            type: "narration",
            text: "颯真（モノローグ）「すごい……。昨日の練習の成果どころか、本番でさらに化けたな。」"
        },
        {
            type: "dialogue",
            character: "shokiko",
            text: "……センパイ！　見ててね！！",
            expression: "smiling"
        },
        {
            type: "narration",
            text: "（翔希子、客席の颯真を指差してウインク）"
        },
        {
            type: "narration",
            text: "女子生徒たち「キャー！　翔希子さまー！！」"
        },
        {
            type: "narration",
            text: "男子生徒たち「うおおおお！！　すげえええ！！」"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "……あいつ、俺に向けてやったのか？"
        },
        {
            type: "narration",
            text: "颯真（モノローグ）「心臓が、変な跳ね方をした気がした。」"
        },
        {
            type: "scene",
            next: "scene_k3"
        }
    ],

    scene_k3: [
        {
            type: "background",
            bg: "courtyard"
        },
        {
            type: "dialogue",
            character: "shokiko",
            text: "はぁ〜、終わっちゃいましたね〜。",
            expression: "normal"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "お疲れ。昨日の今日でよくあれだけ動けるな。"
        },
        {
            type: "dialogue",
            character: "shokiko",
            text: "センパイが見ててくれたからです！",
            expression: "smiling"
        },
        {
            type: "dialogue",
            character: "shokiko",
            text: "センパイ、私ね、今日気づいちゃったんです。",
            expression: "normal"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "何を？"
        },
        {
            type: "dialogue",
            character: "shokiko",
            text: "みんなが騒いでくれてるのも嬉しいけど……センパイが一人、私のことを見ててくれるのが、一番嬉しいなって。",
            expression: "normal"
        },
        {
            type: "dialogue",
            character: "shokiko",
            text: "センパイ……私を、『ただの面白い後輩』で終わらせないでください。",
            expression: "embarressed"
        },
        {
            type: "dialogue",
            character: "shokiko",
            text: "私、センパイの『一番』になりたいです。",
            expression: "embarressed"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "……翔希子。"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "俺にとっても、今日一番輝いてたのはお前だ。……ずっと見てたよ。"
        },
        {
            type: "dialogue",
            character: "shokiko",
            text: "……！",
            expression: "surprised"
        },
        {
            type: "dialogue",
            character: "shokiko",
            text: "センパイ……！　大好きですっ！！",
            expression: "smiling"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "はいはい。……俺もだよ。"
        },
        {
            type: "dialogue",
            character: "shokiko",
            text: "えへへ……やった！　これでセンパイは私のものだー！",
            expression: "smiling"
        },
        {
            type: "narration",
            text: "― 谷藤 翔希子 ルート　完 ―"
        },
        {
            type: "choice",
            choices: [
                {
                    text: "タイトルに戻る",
                    next: "title_screen"
                }
            ]
        }
    ],

    // ==========================================
    // 竹重 奏花 ルート
    // ==========================================
    scene_so1: [
        {
            type: "background",
            bg: "scienceroom"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "……よし、機材の搬入はこれで全部か？"
        },
        {
            type: "dialogue",
            character: "souka",
            text: "はい。ご協力感謝します、先輩。……はぁ……。",
            expression: "normal"
        },
        {
            type: "narration",
            text: "（立ち絵：奏花・少し顔が赤い）"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "おい、顔赤いぞ。大丈夫か？"
        },
        {
            type: "narration",
            text: "（颯真、奏花のおでこに手を当てる）"
        },
        {
            type: "dialogue",
            character: "souka",
            text: "ひゃっ……！？",
            expression: "surprised"
        },
        {
            type: "narration",
            text: "（SE：ピピピピピ！）"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "うわっ、なんだ！？"
        },
        {
            type: "dialogue",
            character: "souka",
            text: "心拍計が急に……壊れたのでしょうか？",
            expression: "surprised"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "熱があるのか？　少し休んだ方がいい。"
        },
        {
            type: "dialogue",
            character: "souka",
            text: "いえ、体温は正常です。ですが……先輩に触れられると、胸の奥が締め付けられるような……。",
            expression: "embarresed"
        },
        {
            type: "dialogue",
            character: "souka",
            text: "これって……風邪、でしょうか……？",
            expression: "embarresed"
        },
        {
            type: "narration",
            text: "颯真「（そんな目で見られると、こっちがおかしくなりそうだ……）」"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "……とりあえず、座れ。水持ってくる。"
        },
        {
            type: "dialogue",
            character: "souka",
            text: "……はい。",
            expression: "normal"
        },
        {
            type: "narration",
            text: "奏花（モノローグ）「（おかしいです。先輩がいなくなると、少し寂しい……これも、風邪の症状でしょうか？）」"
        },
        {
            type: "scene",
            next: "scene_so2"
        }
    ],

    scene_so2: [
        {
            type: "background",
            bg: "classroom"
        },
        {
            type: "narration",
            text: "客A「へー、この色が変わるハーブティーすげー！」"
        },
        {
            type: "narration",
            text: "客B「竹重さん、解説お願いしていい？」"
        },
        {
            type: "dialogue",
            character: "souka",
            text: "はい。これはアントシアニンのpH依存性を利用した……",
            expression: "normal"
        },
        {
            type: "narration",
            text: "（奏花、淡々と解説するが、視線はチラチラと颯真の方へ）"
        },
        {
            type: "narration",
            text: "（颯真、他の女子と話している）"
        },
        {
            type: "narration",
            text: "女子生徒「夏海くーん、ここ手伝ってー！」"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "おう、今行く。"
        },
        {
            type: "dialogue",
            character: "souka",
            text: "……。",
            expression: "normal" // 暗い表情
        },
        {
            type: "narration",
            text: "奏花（モノローグ）「（胸が……モヤモヤします。実験が成功しているのに、ちっとも嬉しくありません。）」"
        },
        {
            type: "narration",
            text: "客B「あれ、竹重さん？　どうしたの？」"
        },
        {
            type: "dialogue",
            character: "souka",
            text: "……いえ。なんでもありません。ただ……不確定性原理が……。",
            expression: "normal"
        },
        {
            type: "narration",
            text: "客B「え？」"
        },
        {
            type: "dialogue",
            character: "souka",
            text: "先輩が……遠いです。",
            expression: "normal"
        },
        {
            type: "scene",
            next: "scene_so3"
        }
    ],

    scene_so3: [
        {
            type: "background",
            bg: "scienceroom"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "竹重、ここにいたのか。"
        },
        {
            type: "dialogue",
            character: "souka",
            text: "……先輩。",
            expression: "normal"
        },
        {
            type: "narration",
            text: "（立ち絵：奏花・白衣の裾を握りしめている）"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "ずっと姿が見えないから探したぞ。……何かあったのか？"
        },
        {
            type: "dialogue",
            character: "souka",
            text: "……検証作業をしていました。",
            expression: "normal"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "検証？"
        },
        {
            type: "dialogue",
            character: "souka",
            text: "この、胸の痛みと、熱の原因についてです。",
            expression: "normal"
        },
        {
            type: "narration",
            text: "（奏花、一歩近づく）"
        },
        {
            type: "dialogue",
            character: "souka",
            text: "原因を探ってみましたが、異常は見当たりませんでした。……ですが、たった一つ、合致する現象がありました。",
            expression: "normal"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "……それは？"
        },
        {
            type: "dialogue",
            character: "souka",
            text: "『恋』……です。",
            expression: "embarresed"
        },
        {
            type: "narration",
            text: "（立ち絵：奏花・真っ赤な顔で俯く）"
        },
        {
            type: "dialogue",
            character: "souka",
            text: "先輩を見ると、嬉しくて。でも、他の人と話してると、悲しくて。……この気持ちの名前、私でもわかりました。",
            expression: "embarresed"
        },
        {
            type: "narration",
            text: "（奏花、勇気を振り絞って顔を上げる）"
        },
        {
            type: "dialogue",
            character: "souka",
            text: "先輩……好き、です。……先輩はどうですか？",
            expression: "embarresed"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "……俺もだよ。最初はおっちょこちょいな後輩だと思ってたけど……いつの間にか、目が離せなくなってた。"
        },
        {
            type: "dialogue",
            character: "souka",
            text: "……！　本当、ですか……？",
            expression: "surprised"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "ああ。……これからは、恋人としてそばにいてくれないか？"
        },
        {
            type: "dialogue",
            character: "souka",
            text: "……はい！　喜んで……！",
            expression: "smiling"
        },
        {
            type: "narration",
            text: "― 竹重 奏花 ルート　完 ―"
        },
        {
            type: "choice",
            choices: [
                {
                    text: "タイトルに戻る",
                    next: "title_screen"
                }
            ]
        }
    ],

    // ==========================================
    // 高杉 美由紀 ルート
    // ==========================================
    scene_m1: [
        {
            type: "background",
            bg: "rooftop"
        },
        {
            type: "dialogue",
            character: "miyuki",
            text: "……ふぅ。やっとクリアした。",
            expression: "normal"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "またサボりですか、先輩。"
        },
        {
            type: "dialogue",
            character: "miyuki",
            text: "！！",
            expression: "surprised"
        },
        {
            type: "dialogue",
            character: "miyuki",
            text: "……なによ、夏海。ストーカー？",
            expression: "normal" // 不機嫌？
        },
        {
            type: "dialogue",
            character: "soma",
            text: "違いますよ。先輩がまた消えたから、探しに来たんです。"
        },
        {
            type: "dialogue",
            character: "miyuki",
            text: "……ふん。暇人ね。",
            expression: "normal"
        },
        {
            type: "narration",
            text: "（美由紀、缶コーヒーを一口飲む）"
        },
        {
            type: "dialogue",
            character: "miyuki",
            text: "……ねえ。あんた、進路とか決めてんの？",
            expression: "normal"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "え？　いや、まだ漠然としか……。"
        },
        {
            type: "dialogue",
            character: "miyuki",
            text: "そう。……私もよ。",
            expression: "normal"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "先輩、成績優秀なのに？"
        },
        {
            type: "dialogue",
            character: "miyuki",
            text: "勉強ができることと、やりたいことは別でしょ。……私には、何もない気がして。ゲーム以外。",
            expression: "normal" // 寂しげな顔
        },
        {
            type: "dialogue",
            character: "soma",
            text: "……俺は、先輩のこと何も知らないですけど。でも、ゲームしてる時の先輩は楽しそうです。"
        },
        {
            type: "dialogue",
            character: "miyuki",
            text: "……子供っぽいって言いたいの？",
            expression: "normal"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "いいえ。好きなものに嘘をつかないのは、いいことだと思います。"
        },
        {
            type: "dialogue",
            character: "miyuki",
            text: "……。",
            expression: "normal"
        },
        {
            type: "narration",
            text: "（美由紀、少し笑う）"
        },
        {
            type: "dialogue",
            character: "miyuki",
            text: "……あんた、意外と生意気ね。……でも、嫌いじゃないわ。",
            expression: "smiling"
        },
        {
            type: "scene",
            next: "scene_m2"
        }
    ],

    scene_m2: [
        {
            type: "background",
            bg: "corridor"
        },
        {
            type: "narration",
            text: "颯真「（……やっぱりいない。高杉先輩、またどこかでサボってるな）」"
        },
        {
            type: "narration",
            text: "（颯真、廊下を歩いていると美由紀を見つける）"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "あ、先輩！"
        },
        {
            type: "dialogue",
            character: "miyuki",
            text: "……げっ。",
            expression: "surprised"
        },
        {
            type: "narration",
            text: "（美由紀、逃げようとする）"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "逃がしませんよ！"
        },
        {
            type: "narration",
            text: "（颯真、美由紀の手を掴む）"
        },
        {
            type: "dialogue",
            character: "miyuki",
            text: "ちょ、離しなさいよ！　私は人混みが嫌いなの！",
            expression: "normal"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "クラスの出し物はどうするんですか！　シフト入ってますよね？"
        },
        {
            type: "dialogue",
            character: "miyuki",
            text: "……5分だけ出るわ。",
            expression: "normal"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "短っ！　……はぁ。じゃあ、サボるのを見逃す代わりに、条件があります。"
        },
        {
            type: "dialogue",
            character: "miyuki",
            text: "……なに？",
            expression: "normal"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "俺とデートしてください。"
        },
        {
            type: "dialogue",
            character: "miyuki",
            text: "……はぁ！？",
            expression: "surprised"
        },
        {
            type: "dialogue",
            character: "miyuki",
            text: "な、何言ってんのよ、あんた。",
            expression: "surprised" // 呆気にとられた顔
        },
        {
            type: "dialogue",
            character: "soma",
            text: "人混みが嫌いなら、俺が壁になります。だから……一緒に回りましょう。"
        },
        {
            type: "dialogue",
            character: "miyuki",
            text: "……。",
            expression: "normal"
        },
        {
            type: "narration",
            text: "（美由紀、ため息をついて）"
        },
        {
            type: "dialogue",
            character: "miyuki",
            text: "……生意気な後輩。",
            expression: "normal"
        },
        {
            type: "dialogue",
            character: "miyuki",
            text: "……いいわよ。付き合ってあげる。",
            expression: "smiling"
        },
        {
            type: "scene",
            next: "scene_m3"
        }
    ],

    scene_m3: [
        {
            type: "background",
            bg: "rooftop" // 夕焼け
        },
        {
            type: "dialogue",
            character: "soma",
            text: "……意外と楽しかったですね。"
        },
        {
            type: "dialogue",
            character: "miyuki",
            text: "ま、悪くなかったわ。",
            expression: "normal"
        },
        {
            type: "narration",
            text: "（美由紀、フェンスに寄りかかる）"
        },
        {
            type: "dialogue",
            character: "miyuki",
            text: "……ねえ、夏海。",
            expression: "normal"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "はい。"
        },
        {
            type: "dialogue",
            character: "miyuki",
            text: "今日のデート、何点？",
            expression: "normal"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "えっ……うーん、80点くらいですかね？"
        },
        {
            type: "dialogue",
            character: "miyuki",
            text: "……低いわね。",
            expression: "normal"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "残りの20点は、これから埋めていけばいいかなって。"
        },
        {
            type: "dialogue",
            character: "miyuki",
            text: "……ふふっ。",
            expression: "smiling"
        },
        {
            type: "dialogue",
            character: "miyuki",
            text: "……夏海。私、ゲームはずっとソロプレイ派だったの。",
            expression: "normal"
        },
        {
            type: "dialogue",
            character: "miyuki",
            text: "誰かと足並み揃えるのなんて面倒だし、一人の方が気楽だし。",
            expression: "normal"
        },
        {
            type: "dialogue",
            character: "miyuki",
            text: "でも……今日は、悪くなかった。",
            expression: "smiling"
        },
        {
            type: "narration",
            text: "（美由紀、ゲーム機を取り出す）"
        },
        {
            type: "dialogue",
            character: "miyuki",
            text: "……これ、あげる。",
            expression: "normal"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "え？　これ、先輩の大事なデータじゃ……"
        },
        {
            type: "dialogue",
            character: "miyuki",
            text: "いいの。……ゲームの協力プレイとか、もうどうでもいいわ。",
            expression: "normal"
        },
        {
            type: "narration",
            text: "（美由紀、真っ直ぐに颯真を見つめる）"
        },
        {
            type: "dialogue",
            character: "miyuki",
            text: "私が欲しいのは、データじゃない。……貴方よ。",
            expression: "normal"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "……先輩。"
        },
        {
            type: "dialogue",
            character: "miyuki",
            text: "単刀直入に言うわ。……私と付き合いなさい。拒否権はないから。",
            expression: "normal"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "……はい？"
        },
        {
            type: "dialogue",
            character: "miyuki",
            text: "嫌なの？",
            expression: "normal"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "……いいえ。とても光栄です。"
        },
        {
            type: "dialogue",
            character: "miyuki",
            text: "よろしい。",
            expression: "smiling"
        },
        {
            type: "narration",
            text: "（立ち絵：美由紀・耳まで真っ赤にして微笑む）"
        },
        {
            type: "dialogue",
            character: "miyuki",
            text: "……これから、私のこと……名前で呼んでいいわよ。",
            expression: "embarresed" // 照れ
        },
        {
            type: "dialogue",
            character: "miyuki",
            text: "……美由紀、って。",
            expression: "embarresed"
        },
        {
            type: "dialogue",
            character: "soma",
            text: "……はい、美由紀先輩。"
        },
        {
            type: "narration",
            text: "― 高杉 美由紀 ルート　完 ―"
        },
        {
            type: "choice",
            choices: [
                {
                    text: "タイトルに戻る",
                    next: "title_screen"
                }
            ]
        }
    ],

    scene8_bad_juri: [
        {
            type: "dialogue",
            character: "juri",
            text: "え、おまえさあ、ほんとそれでいいの？まじで",
            expression: "surprised"
        },
        {
            type: "scene",
            next: "scene_gameover_common"
        }
    ],

    scene8_bad_shoji: [
        {
            type: "dialogue",
            character: "shoji",
            text: "え、そんなこと言うの？ちょっといま、傷ついたんだけど",
            expression: "surprised"
        },
        {
            type: "scene",
            next: "scene_gameover_common"
        }
    ],

    scene8_bad_shokiko: [
        {
            type: "dialogue",
            character: "shokiko",
            text: "えーー、それはちょっとやばいかなw",
            expression: "surprised"
        },
        {
            type: "scene",
            next: "scene_gameover_common"
        }
    ],

    scene8_bad_souka: [
        {
            type: "dialogue",
            character: "souka",
            text: "あー、先輩も、そういうこという人だったんですね。",
            expression: "surprised"
        },
        {
            type: "scene",
            next: "scene_gameover_common"
        }
    ],

    scene8_bad_miyuki: [
        {
            type: "dialogue",
            character: "miyuki",
            text: "あ？てめなめてんだろ",
            expression: "surprised"
        },
        {
            type: "scene",
            next: "scene_gameover_common"
        }
    ],

    scene_gameover_common: [
        {
            type: "narration",
            text: "俺はその一言で、高校生活のすべてを失った。やっぱり俺はいつまでも彼女なんてできないのかな。大切なコミュニケーションって、なぁんなんですかねぇ⤴"
        },
        {
            type: "scene",
            next: "title_screen"
        }
    ]
};

// タイトルへ戻るためのダミーシーン 
// 実はloadSceneで "title_screen" を特別扱いするか、ここで定義するか。
// game.jsで "title_screen" が来たらタイトルに戻る処理を入れたので、データ側は定義不要だが、
// 念の為、nextの値として有効であることのメモとして残す。

// 初期ゲーム状態
const INITIAL_STATE = {
    currentScene: "prologue",
    currentLine: 0,
    affection: {
        juri: 0,
        souka: 0,
        shokiko: 0,
        miyuki: 0,
        shoji: 0
    },
    flags: {},
    backlog: [],
    readScenes: []
};

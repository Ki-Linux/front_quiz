const questionAdvanced: { question: string; answer: string; }[] = [
    { 
        question: '日本で初めてマクドナルドが上陸したのは何年？',
        answer:'1971年'
    },
    { 
        question: 'いないのは？',
        answer:'さいごしゃちょー'
    },
    { 
        question: '「艸」から連想できるものは？',
        answer:'笑'
    },
    { 
        question: '次の中で1番遅くにできたサービスは？',
        answer:'ニコニコ動画'
    },
    { 
        question: '阿部寛のものまねをしている芸人の名前は？',
        answer:'ラパルフェ'
    },
    { 
        question: 'iPhoneやiPadなどのapple製品で使われている充電ケーブル端子の名前は？',
        answer:'ライトニング端子'
    },
    { 
        question: 'ダイヤモンドの誕生月は？',
        answer:'4月'
    },
    { 
        question: 'マッスルフォーに入っていないのは？',
        answer:'八木'
    },
    { 
        question: '2009年に公開された映画は？',
        answer:'サマーウォーズ'
    },
    { 
        question: 'YouTubeの登録者数が一番多いのは？',
        answer:'中田敦彦のYouTube大学'
    },
    { 
        question:'店舗の数が2000件に1番近い牛丼チェーンは？',
        answer:'すき家'
    },
    { 
        question:'BTSのメンバーは？',
        answer:'RM'
    },
    { 
        question: 'αマンとは？',
        answer:'ウナコーワのキャラクター'
    },
    { 
        question: '「口 口 口 口」口の数は？',
        answer:'6'
    },
    { 
        question: 'ドラえもんのひみつ道具にないものは？',
        answer:'成長薬'
    },
    { 
        question: '2016年に放送されたドラマは？',
        answer:'逃げるは恥だが役に立つ'
    },
    { 
        question:'メルカリは最大いくらの値段で売ることができる？',
        answer:'999万9999円'
    },
    { 
        question:'世界一短い曲の長さは？',
        answer:'1.316秒'
    },
    { 
        question:'ヨギボーとは？',
        answer:'ソファ'
    },
    { 
        question: 'オスとメスの区別がない生物は？',
        answer:'カタツムリ'
    },
    { 
        question: 'ウルトラマンに出てこない怪獣は？',
        answer:'キングダーク'
    },
    { 
        question: '日本でも採れる宝石は？',
        answer:'サファイア'
    },
    { 
        question: 'どうぶつの森にいるのは？',
        answer:'タランチュラ'
    },
    { 
        question: 'マリオの本名は？',
        answer:'マリオ・マリオ'
    },
    { 
        question: 'テレビ放送が始まったのが1番遅い漫画は？',
        answer:'サザエさん'
    },
    { 
        question: 'パブロ・ディエゴ・ホセ・フランシスコ・デ・パウラ・ホアン・ネポムセーノ･マリーア・デ・ロス・レメディオス・クリスピン・クリスピアーノ・デ・ラ・サンディシマ・トリニダード･ルイス・「」・ピカソの「」に入るのは？',
        answer:'イ'
    },
    { 
        question: 'UberEatsが日本で始まった年は？',
        answer:'2016年'
    },
    { 
        question: 'YouTube Premiumは何か月無料？',
        answer:'3か月'
    }

]

const answerAdvanced: { select: string; judge: boolean; }[][] = [

    [
        {
            select: '1971年',
            judge: true
        },
        {
            select: 'さいごしゃちょー',
            judge: true
        },
        {
            select: '笑',
            judge: true
        },
        {
            select: 'ニコニコ動画',
            judge: true
        },
        {
            select: 'ラパルフェ',
            judge: true
        },
        {
            select: 'ライトニング端子',
            judge: true
        },
        {
            select: '4月',
            judge: true
        },
        {
            select: '八木',
            judge: true
        },
        {
            select: 'サマーウォーズ',
            judge: true
        },
        {
            select: 'セイキン',
            judge: false
        },
        {
            select: '吉野家',
            judge: false
        },
        {
            select: 'SHO',
            judge: false
        },
        {
            select: '香川県のゆるキャラ',
            judge: false
        },
        {
            select: '4',
            judge: false
        },
        {
            select: 'ソウナルじょう',
            judge: false
        },
        {
            select: '半沢直樹',
            judge: false
        },
        {
            select: '1000万円',
            judge: false
        },
        {
            select: '1.442秒',
            judge: false
        },
        {
            select: 'お菓子',
            judge: false
        },
        {
            select: 'コウモリ',
            judge: false
        },
        {
            select: 'ガタノゾーア',
            judge: false
        },
        {
            select: 'エメラルド',
            judge: false
        },
        {
            select:'ホワイトクジラ',
            judge: false
        },
        {
            select:'マリオッツヲ・マリオ',
            judge: false
        },
        {
            select: '怪物くん',
            judge: false
        },
        {
            select: 'ヘ',
            judge: false
        },
        {
            select: '2020年',
            judge: false
        },
        {
            select: '2か月',
            judge: false
        }
    ],
    [
        {
            select: '1969年',
            judge: false
        },
        {
            select: '西村ひろゆかない',
            judge: false
        },
        {
            select: 'かぐや姫',
            judge: false
        },
        {
            select: 'YouTube',
            judge: false
        },
        {
            select: 'ホリ',
            judge: false
        },
        {
            select: 'アップルチャージ端子',
            judge: false
        },
        {
            select: '5月',
            judge: false
        },
        {
            select: '庄司',
            judge: false
        },
        {
            select: '崖の上のポニョ',
            judge: false
        },
        {
            select: '中田敦彦のYouTube大学',
            judge: true
        },
        {
            select: 'すき家',
            judge: true
        },
        {
            select: 'RM',
            judge: true
        },
        {
            select: 'ウナコーワのキャラクター',
            judge: true
        },
        {
            select: '6',
            judge: true
        },
        {
            select: '成長薬',
            judge: true
        },
        {
            select: '逃げるは恥だが役に立つ',
            judge: true
        },
        {
            select: '999万9999円',
            judge: true
        },
        {
            select: '1.316秒',
            judge: true
        },
        {
            select: 'ぬいぐるみ',
            judge: false
        },
        {
            select: 'セミ',
            judge: false
        },
        {
            select: 'ピグモン',
            judge: false
        },
        {
            select: 'ビッグジュエル',
            judge: false
        },
        {
            select:'アナコンダ',
            judge: false
        },
        {
            select:'マリオ',
            judge: false
        },
        {
            select: '鉄腕アトム',
            judge: false
        },
        {
            select: 'ミ',
            judge: false
        },
        {
            select: '2018年',
            judge: false
        },
        {
            select: '1か月',
            judge: false
        }
    ],
    [
        {
            select: '1973年',
            judge: false
        },
        {
            select: 'マックスうざい',
            judge: false
        },
        {
            select: '予備校',
            judge: false
        },
        {
            select: 'mixi',
            judge: false
        },
        {
            select: 'ラパラファエ',
            judge: false
        },
        {
            select: 'エレクトロニクス端子',
            judge: false
        },
        {
            select: '6月',
            judge: false
        },
        {
            select: '春日',
            judge: false
        },
        {
            select: '桐島、部活やめるってよ',
            judge: false
        },
        {
            select: 'カジサック',
            judge: false
        },
        {
            select: '松屋',
            judge: false
        },
        {
            select: 'YN',
            judge: false
        },
        {
            select: 'アイアンマンの登場人物',
            judge: false
        },
        {
            select: '5',
            judge: false
        },
        {
            select: '吸音機',
            judge: false
        },
        {
            select: 'ガリレオ',
            judge: false
        },
        {
            select: '9万9999円',
            judge: false
        },
        {
            select: '1.810秒',
            judge: false
        },
        {
            select: 'ソファ',
            judge: true
        },
        {
            select: 'カタツムリ',
            judge: true
        },
        {
            select: 'キングダーク',
            judge: true
        },
        {
            select: 'サファイア',
            judge: true
        },
        {
            select:'タランチュラ',
            judge: true
        },
        {
            select:'マリオ・マリオ',
            judge: true
        },
        {
            select: 'サザエさん',
            judge: true
        },
        {
            select: 'イ',
            judge: true
        },
        {
            select: '2016年',
            judge: true
        },
        {
            select: '3か月',
            judge: true
        }
    ]
    
]

export {questionAdvanced, answerAdvanced}
const questionBeginner: string[] =  [
    'ドクターXの言葉は？',
    '1番辛いのは？',
    'スマートフォンを略して？',
    'ヨーロッパにある国は？',
    '次の中でアンパンマンのキャラクターは？',
    '人数が一番少ないのは？',
    '2017年流行語大賞は？',
    '勤労感謝の日がある月は？',
    'YouTube金の盾はチャンネル登録者が何万人になればもらえる？',
    '1番高いのは？',
    '1番多い苗字は？',
    '次の中から日本で1番多いものはどれか？',
    '1作目のポケモンは何匹いる？',
    'この中で人口が1番多い国は？',
    'パチンコに入ってもいい年齢は？',
    'ランクル300とは？',
    '東京オリンピックは何年に開催された？',
    '「嚔」の読み方は？',
    'この中でカフェインが1番多い飲み物は？',
    '武蔵小杉はどこにある？',
    '1番多くの人に使われているのは？',
    'マンモスはいついた？',
    'ポテトチップスの味にないものは？',
    '恐竜でないのは？',
    'この中で歴代発行部数が1番多い漫画は？',
    'ボールを蹴るスポーツは？'
]

const answerBeginner: { select: string; judge: boolean; }[][] = [
    
    [
        {
            select:'私、失敗しないので。',
            judge: true
        },   
        {
            select:'ウルトラデスソース',
            judge: true
        },
        {
            select:'スマホ',
            judge: true
        },
        {
            select:'フランス',
            judge: true
        },
        {
            select:'あくびどり',
            judge: true
        },
        {
            select:'コムドット',
            judge: true
        },
        {
            select:'インスタ映え',
            judge: true
        },
        {
            select:'11月',
            judge: true
        },
        {
            select:'50万人',
            judge: false
        },
        {
            select:'ピサの斜塔',
            judge: false
        },
        {
            select:'山田',
            judge: false
        },
        {
            select:'コンビニ',
            judge: false
        },
        {
            select:'189',
            judge: false
        },
        {
            select:'インド',
            judge: false
        },
        {
            select:'16歳',
            judge: false
        },
        {
            select:'芸人',
            judge: false
        },
        {
            select:'1960年',
            judge: false
        },
        {
            select:'かばん',
            judge: false
        },
        {
            select:'コーヒー',
            judge: false
        },
        {
            select:'埼玉県',
            judge: false
        },
        {
            select:'Facebook',
            judge: false
        },
        {
            select:'200万年前',
            judge: false
        },
        {
            select:'鯛めし',
            judge: false
        },
        {
            select:'マイアサウラ',
            judge: false
        },
        {
            select:'ドラえもん',
            judge: false
        },
        {
            select:'ゲートボール',
            judge: false
        }
    ],
    [
        {
            select: 'あなたは人質です。',
            judge: false
        },
        {
            select: 'メガデスソース',
            judge: false
        },
        {
            select: 'スフォン',
            judge: false
        },
        {
            select: '日本',
            judge: false
        },
        {
            select:'りんごパンマン',
            judge: false
        },
        {
            select: 'フィッシャーズ',
            judge: false
        },
        {
            select: 'ひふみん',
            judge: false
        },
        {
            select: '10月',
            judge: false
        },
        {
            select: '100万人',
            judge: true
        },
        {
            select: 'スカイツリー',
            judge: true
        },
        {
            select: '佐藤',
            judge: true
        },
        {
            select: '美容院',
            judge: true
        },
        {
            select:'151',
            judge: true
        },
        {
            select: '中国',
            judge: true
        },
        {
            select: '18歳',
            judge: true
        },
        {
            select: '車',
            judge: true
        },
        {
            select: '1964年',
            judge: true
        },
        {
            select: 'あくび',
            judge: false
        },
        {
            select: '抹茶',
            judge: false
        },
        {
            select: '東京都',
            judge: false
        },
        {
            select: 'Instagram',
            judge: false
        },
        {
            select: '900万年前',
            judge: false
        },
        {
            select: '笹だんご',
            judge: false
        },
        {
            select: 'ディロフォサウルス',
            judge: false
        },
        {
            select: 'ジョジョの奇妙な冒険',
            judge: false
        },
        {
            select: 'スカッシュ',
            judge: false
        }
    ],
    [
        {
            select: '片っ端から、救ってやるよ。',
            judge: false
        },
        {
            select: 'サドンデスソース',
            judge: false
        },
        {
            select: 'スマー',
            judge: false
        },
        {
            select: 'アメリカ',
            judge: false
        },
        {
            select:'だいこんちゃん',
            judge: false
        },
        {
            select: '東海オンエア',
            judge: false
        },
        {
            select: 'プレミアムフライデー',
            judge: false
        },
        {
            select: '12月',
            judge: false
        },
        {
            select: '10万人',
            judge: false
        },
        {
            select: 'エッフェル塔',
            judge: false
        },
        {
            select: '鈴木',
            judge: false
        },
        {
            select: 'ラーメン屋',
            judge: false
        },
        {
            select:'136',
            judge: false
        },
        {
            select: 'アメリカ',
            judge: false
        },
        {
            select: '20歳',
            judge: false
        },
        {
            select: '銃',
            judge: false
        },
        {
            select: '1962年',
            judge: false
        },
        {
            select: 'くしゃみ',
            judge: true
        },
        {
            select: '玉露',
            judge: true
        },
        {
            select: '神奈川県',
            judge: true
        },
        {
            select: 'Twitter',
            judge: true
        },
        {
            select: '400万年前',
            judge: true
        },
        {
            select: '親子丼',
            judge: true
        },
        {
            select: 'プテラノドン',
            judge: true
        },
        {
            select: 'ゴルゴ13',
            judge: true
        },
        {
            select: 'フットサル',
            judge: true
        }
    ] 

]

export { questionBeginner, answerBeginner }
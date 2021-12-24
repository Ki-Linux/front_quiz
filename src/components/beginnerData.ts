const questionBeginner: {question: string; answer: string}[] =  [
    {
        question: 'ドクターXの言葉は？',
        answer:'私、失敗しないので。',
    },
    {
        question: '1番辛いのは？',
        answer: 'ウルトラデスソース',
    },
    {
        question: '千鳥の大吾がキングコング西野に言ったことは？',
        answer: '捕まってないだけの詐欺師',
    },
    {
        question: 'ヨッシーは何者？',
        answer: 'カメ',
    },
    {
        question: '次の中でアンパンマンのキャラクターは？',
        answer: 'あくびどり',
    },
    {
        question: '人数が一番少ないのは？',
        answer: 'コムドット',
    },
    {
        question: '2017年流行語大賞は？',
        answer: 'インスタ映え',
    },
    {
        question: '秋田の方言である「んが」の意味に1番近いのは？',
        answer: 'あなた',
    },
    {
        question: 'YouTube金の盾はチャンネル登録者が何万人になればもらえる？',
        answer: '100万人',
    },
    {
        question: '1番高いのは？',
        answer: 'スカイツリー',
    },
    {
        question: '1番多い苗字は？',
        answer: '佐藤',
    },
    {
        question: '次の中から日本で1番多いものはどれか？',
        answer: '美容院',
    },
    {
        question: '1作目のポケモンは何匹いる？',
        answer: '151',
    },
    {
        question: 'お菓子として売っているのは？',
        answer: '地球グミ',
    },
    {
        question: 'パチンコに入ってもいい年齢は？',
        answer: '18歳',
    },
    {
        question: 'ランクル300とは？',
        answer: '車',
    },
    {
        question: 'SKY-HIとは？',
        answer: 'アーティスト',
    },
    {
        question: 'ピアノが弾けないのは？',
        answer: 'カバちゃん',
    },
    {
        question: '全く違うのは？',
        answer: 'クライアント',
    },
    {
        question: 'ラコステのマークは？',
        answer: 'ワニ',
    },
    {
        question: '1番多くの人に使われているのは？',
        answer: 'Twitter',
    },
    {
        question: '表しかない本は？',
        answer: '占いの本',
    },
    {
        question: 'ポテトチップスの味にないものは？',
        answer: '親子丼',
    },
    {
        question: '恐竜でないのは？',
        answer: 'プテラノドン',
    },
    {
        question: 'この中で歴代発行部数が1番多い漫画は？',
        answer: 'ゴルゴ13',
    },
    {
        question: 'ボールを蹴るスポーツは？',
        answer: 'フットサル',
    },
    {
        question: '寿司がケースの中にあるのは？',
        answer: 'くら寿司',
    },
    {
        question: '最初はグーは誰が考えた？',
        answer: '志村けん'
    }
    
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
            select:'捕まってないだけの詐欺師',
            judge: true
        },
        {
            select:'カメ',
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
            select:'あなた',
            judge: true
        },
        {
            select:'100万人',
            judge: true
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
            select:'太陽グミ',
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
            select:'飛行機',
            judge: false
        },
        {
            select:'ハラミちゃん',
            judge: false
        },
        {
            select:'アイアント',
            judge: false
        },
        {
            select:'タカ',
            judge: false
        },
        {
            select:'Facebook',
            judge: false
        },
        {
            select:'科学の本',
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
        },
        {
            select:'かっぱ寿司',
            judge: false
        },
        {
            select:'明石家さんま',
            judge: false
        },
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
            select: 'もうすぐ捕まりそうな詐欺師',
            judge: false
        },
        {
            select: '恐竜',
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
            select: 'このやろう',
            judge: false
        },
        {
            select: '50万人',
            judge: false
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
            select: '地球グミ',
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
            select: 'アーティスト',
            judge: true
        },
        {
            select: 'カバちゃん',
            judge: true
        },
        {
            select: 'キメラアント',
            judge: false
        },
        {
            select: 'カブトムシ',
            judge: false
        },
        {
            select: 'Instagram',
            judge: false
        },
        {
            select: '筋肉の本',
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
        },
        {
            select: 'はま寿司',
            judge: false
        },
        {
            select: 'タモリ',
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
            select: '捕まえられない詐欺師',
            judge: false
        },
        {
            select: 'チンパンジー',
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
            select: 'おいら',
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
            select: '月グミ',
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
            select: '高層ビル',
            judge: false
        },
        {
            select: 'けいちゃん',
            judge: false
        },
        {
            select: 'クライアント',
            judge: true
        },
        {
            select: 'ワニ',
            judge: true
        },
        {
            select: 'Twitter',
            judge: true
        },
        {
            select: '占いの本',
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
        },
        {
            select: 'くら寿司',
            judge: true
        },
        {
            select: '志村けん',
            judge: true
        }
    ] 

]

export { questionBeginner, answerBeginner }
const questionIntermediate: { question: string; answer: string; }[] = [

    { question:'人口が3番目に多い県は？',
      answer:'大阪府'
    },
    { question:'エベレストの高さは？',
      answer:'約8849m'
    },
    { question:'現役宇宙飛行士は何人？',
      answer:'7人'
    },
    { question: 'キューピー『たまご白書』の調査開始から1位を取り続けている人気卵料理は？',
      answer:'目玉焼き'
    },
    { question: 'ヒカキンの本名は？',
      answer:'かいはつひかる'
    },
    { question: 'うまい棒で1番人気の味は？',
      answer:'コーンポタージュ味'
    },
    { question: '日本で歴代興行収入3位の映画は？',
      answer:'タイタニック'
    },
    { question: '名探偵コナンの連載が始まったのは？',
      answer:'1994年'
    },
    { question: '学生数が1番多い大学は？',
      answer:'日本大学'
    },
    { question: 'プロ野球のセ・リーグとパ・リーグのチーム数はそれぞれいくつある？',
      answer:'6'
    },
    { question: '嵐の曲は？',
      answer:'Love so sweet'
    },
    { question: 'ネズミの下にある料理は？',
      answer:'中華料理'
    },
    { question: 'アイスの商品名として日本に実際にあったものは？',
      answer:'宝石箱'
    },
    { question: '2018年にテレビで放送されたアニメは？',
      answer:'サンリオ男子'
    },
    { question: '1年は何分？',
      answer:'525600分'
    },
    { question: 'YouTubeの歴代ミュージックビデオで再生回数が日本国内1位は？',
      answer:'米津玄師『Lemon』'
    },
    { question: 'ドラえもんのひみつ道具の登場回数1位は？',
      answer:'タケコプター'
    },
    { question: '青と黄色を混ぜると？',
      answer:'みどり'
    },
    { question: 'サワーとは？',
      answer:'お酒'
    },
    { question: 'マクドナルドの人気ハンバーガー1位は？（2021年「LINEリサーチ」の調査）',
      answer:'ビッグマック'
    },
    { question: 'サイダーガールとは？',
      answer:'バンド'
    },
    { question: 'Facebookを創業したのは？',
      answer:'マーク・ザッカーバーグ'
    },
    { question: '結婚できるのは？',
      answer:'いとこ'
    },
    { question: '「やまざき串だんご（あん）」1パックのだんごの玉の数は？',
      answer:'12玉'
    },
    { question: '日清カップヌードルの種類にないもいのは？',
      answer:'てりやき'
    },
    { question: '実際にある駅名は？',
      answer:'半家（はげ）'
    },
    { question: 'アドベンチャーワールドはどこにある？',
      answer:'和歌山県'
    },
    { question: 'カラットとは？',
      answer:'宝石の重さ'
    }
]

const answerIntermediate: { select: string; judge: boolean; }[][] = [
    
    [
        {
            select: '大阪府',
            judge: true
        },
        {
            select: '約8849m',
            judge: true
        },
        {
            select: '7人',
            judge: true
        },
        {
            select: '目玉焼き',
            judge: true
        },
        {
            select: 'かいはつひかる',
            judge: true
        },
        {
            select: 'コーンポタージュ味',
            judge: true
        },
        {
            select: 'タイタニック',
            judge: true
        },
        {
            select: '1994年',
            judge: true
        },
        {
            select: '日本大学',
            judge: true
        },
        {
            select: '5',
            judge: false
        },
        {
            select:'Pretender',
            judge: false
        },
        {
            select: '日本料理',
            judge: false
        },
        {
            select: 'ホワイトフォックス',
            judge: false
        },
        {
            select: '鬼滅の刃',
            judge: false
        },
        {
            select: '219000分',
            judge: false
        },
        {
            select: 'King Gnu『白日』',
            judge: false
        },
        {
            select: 'どこでもドア',
            judge: false
        },
        {
            select: 'むらさき',
            judge: false
        },
        {
            select: '夏',
            judge: false
        },
        {
            select: 'てりやきマックバーガー',
            judge: false
        },
        {
            select:'ご当地アイドル',
            judge: false
        },
        {
            select: 'スティーブ・ジョブズ',
            judge: false
        },
        {
            select: 'アニメのキャラクター',
            judge: false
        },
        {
            select: '9玉',
            judge: false
        },
        {
            select: '抹茶',
            judge: false
        },
        {
            select: '時時井（じじい）',
            judge: false
        },
        {
            select: '福岡県',
            judge: false
        },
        {
            select: '宝石の大きさ',
            judge: false
        }
    ],
    [
        {
            select: '愛知県',
            judge: false
        },
        {
            select: '約8823m',
            judge: false
        },
        {
            select: '12人',
            judge: false
        },
        {
            select: '卵焼き',
            judge: false
        },
        {
            select: 'かいはつひからない',
            judge: false
        },
        {
            select: 'めんたい味',
            judge: false
        },
        {
            select: '千と千尋の神隠し',
            judge: false
        },
        {
            select: '1992年',
            judge: false
        },
        {
            select: '早稲田大学',
            judge: false
        },
        {
            select: '6',
            judge: true
        },
        {
            select:'Love so sweet',
            judge: true
        },
        {
            select: '中華料理',
            judge: true
        },
        {
            select: '宝石箱',
            judge: true
        },
        {
            select: 'サンリオ男子',
            judge: true
        },
        {
            select: '525600分',
            judge: true
        },
        {
            select: '米津玄師『Lemon』',
            judge: true
        },
        {
            select: 'タケコプター',
            judge: true
        },
        {
            select: 'みどり',
            judge: true
        },
        {
            select: '人気YouTuberの名前',
            judge: false
        },
        {
            select: 'ハンバーガー',
            judge: false
        },
        {
            select:'YouTuber',
            judge: false
        },
        {
            select: 'ビル・ゲイツ',
            judge: false
        },
        {
            select: '既婚者',
            judge: false
        },
        {
            select: '16玉',
            judge: false 
        },
        {
            select: 'バーニャカウダ',
            judge: false
        },
        {
            select: '草蘇我木（くそがき）',
            judge: false
        },
        {
            select: '岡山県',
            judge: false
        },
        {
            select: '宝石の価値',
            judge: false
        }
    ],
    [
        {
            select: '神奈川県',
            judge: false
        },
        {
            select: '約8104m',
            judge: false
        },
        {
            select: '9人',
            judge: false
        },
        {
            select: 'ゆで卵',
            judge: false
        },
        {
            select: 'すずきひかる',
            judge: false
        },
        {
            select: 'チーズ味',
            judge: false
        },
        {
            select: '君の名は。',
            judge: false
        },
        {
            select: '1997年',
            judge: false
        },
        {
            select: '近畿大学',
            judge: false
        },
        {
            select: '8',
            judge: false
        },
        {
            select:'This is a pen',
            judge: false
        },
        {
            select: 'スペイン料理',
            judge: false
        },
        {
            select: '雪玉',
            judge: false
        },
        {
            select: 'はたらく細胞',
            judge: false
        },
        {
            select: '864000分',
            judge: false
        },
        {
            select: 'ピコ太郎『PPAP』',
            judge: false
        },
        {
            select: 'タイムマシン',
            judge: false
        },
        {
            select: 'オレンジ',
            judge: false
        },
        {
            select: 'お酒',
            judge: true
        },
        {
            select: 'ビッグマック',
            judge: true
        },
        {
            select:'バンド',
            judge: true
        },
        {
            select: 'マーク・ザッカーバーグ',
            judge: true
        },
        {
            select: 'いとこ',
            judge: true
        },
        {
            select: '12玉',
            judge: true
        },
        {
            select: 'てりやき',
            judge: true 
        },
        {
            select: '半家（はげ）',
            judge: true
        },
        {
            select: '和歌山県',
            judge: true
        },
        {
            select: '宝石の重さ',
            judge: true
        }
    ]

]

export {questionIntermediate, answerIntermediate}
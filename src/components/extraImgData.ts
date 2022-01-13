const questionExtra: { question: string; answer: string; }[] =  [
    {
        question: 'ハワイの地図は？',
        answer: '1つめ'
    },
    {
        question: '日向坂46のポーズは？',
        answer: '1つめ'
    },
    {
        question: 'イッヌは？',
        answer: '1つめ (2つめがキツネ、3つめがネコ）'
    },
    {
        question:'爬虫類は？',
        answer: '1つめ'
    },
    {
        question: '八百長とは？',
        answer: '1つめ'
    },
    /*{
        question: 'ぴょこはどれ？',
        answer: '1つめ'
    },*/
    {
        question: 'クトゥルフは？',
        answer: '1つめ'
    },
    {
        question: 'クラッカーは？',
        answer: '2つめ'
    },
    {
        question: '京都はどれ？',
        answer: '2つめ'
    },
    {
        question: '日本はどれ？',
        answer: '2つめ'
    },
    {
        question: 'AK-47は？',
        answer: '2つめ'
    },
    {
        question: '世界一高いビルはどれ？',
        answer: '2つめ'
    },
    {
        question: 'ミズグモはどれ？',
        answer: '2つめ'
    },
    {
        question: 'パンタグラフはどれ？',
        answer: '3つめ'
    },
    {
        question: 'キリスト教に関係ないのは？',
        answer: '3つめ'
    },
    {
        question: 'この中で人数が一番多いのは？',
        answer: '3つめ'
    },
    {
        question: '口の開きが1番大きいのは？',
        answer: '3つめ'
    },
    /*{
        question: 'キラークイーンのジョジョ立ちは？',
        answer: '3つめ'
    },*/
    {
        question: 'おとめ座は？',
        answer: '3つめ'
    }
    
]

const answerExtra: { select: HTMLImageElement; judge: boolean; }[][] = [

    [
        {
            select: require("@/assets/hawaiiTrue.png"),
            judge: true
        },
        {
            select: require("@/assets/hinata_true.png"),
            judge: true
        },
        {
            select: require("@/assets/inu1_true.png"),
            judge: true
        },
        {
            select: require("@/assets/imori.png"),
            judge: true
        },
        {
            select: require("@/assets/race.png"),
            judge: true
        },
        /*{
            select: require("@/assets/pyoko.png"),
            judge: true
        },*/
        {
            select: require("@/assets/kutwurufu.png"),
            judge: true
        },
        {
            select: require("@/assets/hakka.png"),
            judge: false
        },
        {
            select: require("@/assets/karuizawa.png"),
            judge: false
        },
        {
            select: require("@/assets/suisu.png"),
            judge: false
        },
        {
            select: require("@/assets/juu1_false.png"),
            judge: false
        },
        {
            select: require("@/assets/towerF.png"),
            judge: false
        },
        {
            select: require("@/assets/mizuF1.png"),
            judge: false
        },
        {
            select: require("@/assets/pantaF1.png"),
            judge: false
        },
        {
            select: require("@/assets/harowin.png"),
            judge: false
        },
        {
            select: require("@/assets/lowyer.png"),
            judge: false
        },
        {
            select: require("@/assets/kuti1.png"),
            judge: false
        },
        /*{
            select: require("@/assets/jojo1_false.png"),
            judge: false
        },*/
        {
            select: require("@/assets/seiza2_false.png"),
            judge: false
        }
    ],
    [
        {
            select: require("@/assets/hawaiiFalse2.png"),
            judge: false
        },
        {
            select: require("@/assets/hinata2_false.png"), 
            judge: false
        },
        {
            select: require("@/assets/inu2_false.png"), 
            judge: false
        },
        {
            select: require("@/assets/kame.png"),
            judge: false
        },
        {
            select: require("@/assets/nou.png"),
            judge: false
        },
        /*{
            select: require("@/assets/sanji.png"),
            judge: false
        },*/
        {
            select: require("@/assets/monster.png"),
            judge: false
        },
        {
            select: require("@/assets/kurakka.png"),
            judge: true
        },
        {
            select: require("@/assets/kyoto.png"),
            judge: true
        },
        {
            select: require("@/assets/japan.png"),
            judge: true
        },
        {
            select: require("@/assets/juu2_true.png"),
            judge: true
        },
        {
            select: require("@/assets/towerTrue.png"),
            judge: true
        },
        {
            select: require("@/assets/mizuT.png"),
            judge: true
        },
        {
            select: require("@/assets/pantaF2.png"),
            judge: false
        },
        {
            select: require("@/assets/kurisumasu.png"),
            judge: false
        },
        {
            select: require("@/assets/nurce.png"),
            judge: false
        },
        {
            select: require("@/assets/kuti3.png"),
            judge: false
        },
        /*{
            select: require("@/assets/jojo2_false.png"),
            judge: false
        },*/
        {
            select: require("@/assets/seiza3_false.png"),
            judge: false
        }
    ],
    [
        {
            select: require("@/assets/hawaiiFalse1.png"),
            judge: false
        },
        {
            select: require("@/assets/hinata3_false.png"), 
            judge: false
        },
        {
            select: require("@/assets/inu3_false.png"), 
            judge: false
        },
        {
            select: require("@/assets/same.png"),
            judge: false
        },
        {
            select: require("@/assets/saiya.png"),
            judge: false
        },
        /*{
            select: require("@/assets/fugu.png"),
            judge: false
        },*/
        {
            select: require("@/assets/chuunibyou.png"),
            judge: false
        },
        {
            select: require("@/assets/cookie.png"),
            judge: false
        },
        {
            select: require("@/assets/miyajima.png"),
            judge: false
        },
        {
            select: require("@/assets/igirisu.png"),
            judge: false
        },
        {
            select: require("@/assets/juu3_false.png"),
            judge: false
        },
        {
            select: require("@/assets/towerF2.png"),
            judge: false
        },
        {
            select: require("@/assets/mizuF2.png"),
            judge: false
        },
        {
            select: require("@/assets/pantaT.png"),
            judge: true
        },
        {
            select: require("@/assets/harowin2.png"),
            judge: true
        },
        {
            select: require("@/assets/doctor.png"),
            judge: true
        },
        {
            select: require("@/assets/inu1_true.png"),
            judge: true
        },
        /*{
            select: require("@/assets/jojo3_true.png"),
            judge: true
        },*/
        {
            select: require("@/assets/seiza1_true.png"),
            judge: true
        }
    ]
]

export { questionExtra, answerExtra }

const questionTry = [
    'ハワイの地図は？',
    '八百長とは？',
    'クトゥルフは？',
    '日向坂46のポーズは？',
    'ミズグモはどれ？'
]

const answerTry: { select: HTMLImageElement; judge: boolean; }[][] = [

    [
        {
            select: require("@/assets/hawaiiTrue.png"),
            judge: true
        },
        {
            select: require("@/assets/saiya.png"),
            judge: false
        },
        {
            select: require("@/assets/kutwurufu.png"),
            judge: true
        },
        {
            select: require("@/assets/hinata2_false.png"),
            judge: false
        },
        {
            select: require("@/assets/mizuF1.png"),
            judge: false
        }
    ],
    [
        {
            select: require("@/assets/hawaiiFalse2.png"),
            judge: false
        },
        {
            select: require("@/assets/race.png"),
            judge: true
        },
        {
            select: require("@/assets/monster.png"),
            judge: false
        },
        {
            select: require("@/assets/hinata_true.png"),
            judge: true
        },
        {
            select: require("@/assets/mizuF2.png"),
            judge: false
        }
    ],
    [
        {
            select: require("@/assets/hawaiiFalse1.png"),
            judge: false
        },
        {
            select: require("@/assets/nou.png"),
            judge: false
        },
        {
            select: require("@/assets/chuunibyou.png"),
            judge: false
        },
        {
            select: require("@/assets/hinata3_false.png"),
            judge: false
        },
        {
            select: require("@/assets/mizuT.png"),
            judge: true
        }
    ]
]

export { questionTry, answerTry }
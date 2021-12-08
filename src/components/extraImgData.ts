const questionExtra: string[] =  [
    'ハワイの地図は？',
    '爬虫類は？',
    '八百長とは？',
    'ぴょこはどれ？',
    'クトゥルフは？',
    'クラッカーは？',
    '京都はどれ？',
    '日本はどれ？',
    '世界一高いビルはどれ？',
    'ミズグモはどれ？',
    'パンタグラフはどれ？',
    'キリスト教に関係ないのは？',
    'この中で人数が一番多いのは？',
    '1番口が大きいのは？',
    '爆笑とは？'
]

const answerExtra: { select: HTMLImageElement; judge: boolean; }[][] = [

    [
        {
            select: require("@/assets/hawaiiTrue.png"),
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
        {
            select: require("@/assets/pyoko.png"),
            judge: true
        },
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
        }
    ],
    [
        {
            select: require("@/assets/hawaiiFalse2.png"),
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
        {
            select: require("@/assets/sanji.png"),
            judge: false
        },
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
        }
    ],
    [
        {
            select: require("@/assets/hawaiiFalse1.png"),
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
        {
            select: require("@/assets/fugu.png"),
            judge: false
        },
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
        }
    ]
]

export { answerExtra }

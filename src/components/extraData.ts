const questionExtra: string[] = [
    'Adoの歌は？',
    'スイカの種は１玉何個くらいある？',
    'じゃんけんで一番出すことが多いのは？',
    'フレンチバーミリオンとは？',
    'ひろゆきが言っていないことは？',
    '5GのGは？',
    '「ららぽーと」はどこにない？',
    '日本で２番目に多いコンビニは？',
    '珍珍珍はなんのお店？',
    'スシローの裏メニューは？',
    '世界一長い消しカスは何メートル？',
    'にゃんこ大戦争のキャタクターは？',
    '「原神」はなんて読む？',
    '乃木坂46の曲は？',
    '痩せ我慢の対義語は？',
    '黄昏の森とは？',
    'スーパーに売っていないものは？',
    '「○○ 東京ガールズコレクション」で○○に入るのは？',
    '世界一甘い食べ物は？',
    'イクラを油で揚げるとどうなる？',
    'ヨーダは？',
    'ばかうけとは？',
    'カプリコの味にあるのは？',
    '世界一YouTubeで再生されている動画は？',
    '意味が全く違うのは？'
]    

const answerExtra: { select: string; judge: boolean; }[][] = [
    
    [
        {
            select:'阿修羅ちゃん',
            judge: true
        },
        {
            select:'500',
            judge: true
        },
        {
            select:'グー',
            judge: true
        },
        {
            select:'色',
            judge: true
        },
        {
            select:'なんかそういう確証あるんですか？',
            judge: true
        },
        {
            select:'ジェネレーション',
            judge: true
        },
        {
            select:'アメリカ',
            judge: true
        },
        {
            select:'ファミリーマート',
            judge: true
        },
        {
            select:'ラーメン',
            judge: true
        },
        {
            select:'特大エビ天',
            judge: false
        },
        {
            select:'15メートル23センチ',
            judge: false
        },
        {
            select:'風の精霊ウィンド',
            judge: false
        },
        {
            select:'はらかみ',
            judge: false
        },
        {
            select:'会いたかった',
            judge: false
        },
        {
            select:'デブ走り',
            judge: false
        },
        {
            select:'荒野行動のステージ',
            judge: false
        },
        {
            select:'牛角のキムチ',
            judge: false
        },
        {
            select:'リクルート',
            judge: false
        },
        {
            select:'チョコボール',
            judge: false
        },
        {
            select:'イクラが溶ける',
            judge: false
        },
        {
            select:'バットマン',
            judge: false
        },
        {
            select:'漫才',
            judge: false
        },
        {
            select:'チョコレートケーキ味',
            judge: false
        },
        {
            select:'リアルポケモン',
            judge: false
        },
        {
            select: 'キメハラ',
            judge: false
        }
    ],
    [
        {
            select:'たぶん',
            judge: false
        },
        {
            select:'100',
            judge: false
        },
        {
            select:'チョキ',
            judge: false
        },
        {
            select:'食べ物',
            judge: false
        },
        {
            select:'なんだろう。嘘つくのやめてもらっていいですか。',
            judge: false
        },
        {
            select:'ゴミ',
            judge: false
        },
        {
            select:'船橋',
            judge: false
        },
        {
            select:'ローソン',
            judge: false
        },
        {
            select:'餃子',
            judge: false
        },
        {
            select:'海鮮漬け',
            judge: true
        },
        {
            select:'9メートル19センチ',
            judge: true
        },
        {
            select:'雷の精霊ボルト',
            judge: true
        },
        {
            select:'げんしん',
            judge: true
        },
        {
            select:'会いたかったかもしれない',
            judge: true
        },
        {
            select:'デブ大暴れ',
            judge: true
        },
        {
            select:'芸人',
            judge: true
        },
        {
            select:'すき家のキムチ',
            judge: true
        },
        {
            select:'楽天',
            judge: false
        },
        {
            select:'パンナコッテル',
            judge: false
        },
        {
            select:'イクラが飛び跳ねる',
            judge: false
        },
        {
            select:'ポケモン',
            judge: false
        },
        {
            select:'ゲーム',
            judge: false
        },
        {
            select:'いちごしょうゆ味',
            judge: false
        },
        {
            select:'ヒカキンビートボックス',
            judge: false
        },
        {
            select:'オワハラ',
            judge: false
        }        
    ],
    [
        {
            select:'流れ弾',
            judge: false
        },
        {
            select:'700',
            judge: false
        },
        {
            select:'パー',
            judge: false
        },
        {
            select:'歌',
            judge: false
        },
        {
            select:'それってあなたの感想ですよね？',
            judge: false
        },
        {
            select:'グローバル',
            judge: false
        },
        {
            select:'中国',
            judge: false
        },
        {
            select:'ミニストップ',
            judge: false
        },
        {
            select:'ビデオ',
            judge: false
        },
        {
            select:'マグロ盛り',
            judge: false
        },
        {
            select:'6メートル48センチ',
            judge: false
        },
        {
            select:'水の精霊ウォーター',
            judge: false
        },
        {
            select:'はらがみ',
            judge: false
        },
        {
            select:'会いたかったなんて言えない',
            judge: false
        },
        {
            select:'デブ駆けて',
            judge: false
        },
        {
            select:'宮崎にある森',
            judge: false
        },
        {
            select:'吉野家のキムチ',
            judge: false
        },
        {
            select:'マイナビ',
            judge: true
        },
        {
            select:'グラブジャムン',
            judge: true
        },
        {
            select:'破裂する',
            judge: true
        },
        {
            select:'スター・ウォーズ',
            judge: true
        },
        {
            select:'お菓子',
            judge: true
        },
        {
            select:'生ハムメロン味',
            judge: true
        },
        {
            select:'ベイビーシャークダンス',
            judge: true
        },
        {
            select:'アオハラ',
            judge: true
        }       
    ]
]

export { questionExtra, answerExtra }
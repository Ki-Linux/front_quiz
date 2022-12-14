const questionExtra: { question: string; answer: string; }[] = [
    { question: 'Adoの歌は？',
      answer:'阿修羅ちゃん'
    },
    { question: '「ダブルパチンコ」は誰のネタ？',
      answer:'Yes!アキト'
    },
    { question: 'じゃんけんで一番出すことが多いのは？',
      answer:'グー'
    },
    { question:'フレンチバーミリオンとは？',
      answer:'色'
    },
    { question: 'ひろゆきが言っていないことは？',
      answer:'なんかそういう確証あるんですか？'
    },
    { question: '5GのGは？',
      answer:'ジェネレーション'
    },
    { question: 'Abemaの「」に勝ったら1000万円シリーズで「」に当てはまらないのは？',
      answer:'朝倉海'
    },
    { question: '日本で２番目に多いコンビニは？',
      answer:'ファミリーマート'
    },
    { question: '珍珍珍はなんのお店？',
      answer:'ラーメン'
    },
    { question: 'スシローの裏メニューは？',
      answer:'海鮮漬け'
    },
    { question: '世界一長い消しカスは何メートル？',
      answer:'9メートル19センチ'
    },
    { question: 'にゃんこ大戦争のキャタクターは？',
      answer:'雷の精霊ボルト'
    },
    { question: 'カミナリに似ているのは？',
      answer:'岩倉使節団'
    },
    { question: '乃木坂46の曲は？',
      answer:'会いたかったかもしれない'
    },
    { question: '痩せ我慢の対義語は？',
      answer:'デブ大暴れ'
    },
    { question: '黄昏の森とは？',
      answer:'芸人'
    },
    { question: 'ねるねるねるねは何ばんまである？',
      answer:'3ばん'
    },
    { question: 'TGCとは？',
      answer:'東京ガールズコレクション'
    },
    { question: '世界一甘い食べ物は？',
      answer:'グラブジャムン'
    },
    { question: 'イクラを油で揚げるとどうなる？',
      answer:'破裂する'
    },
    { question: 'ヨーダは？',
      answer:'スター・ウォーズ'
    },
    { question: 'ブライアンがものまねをしていないのは？',
      answer:'アンジャッシュ渡部'
    },
    { question: 'カプリコの味にあるのは？',
      answer:'生ハムメロン味'
    },
    { question: '世界一YouTubeで再生されている動画は？',
      answer:'ベイビーシャークダンス'
    },
    { question: '意味が全く違うのは？',
      answer:'アオハラ'
    },
    { question: 'このサイトの作成者が中1の時に理科のテストで取った点数は？',
      answer:'7点'
    },
    { question: 'イオンがない県は？',
      answer:'福井県'
    },
    { question: 'Nintendoのゲームは？',
      answer:'ピクミン'
    }
]    

const answerExtra: { select: string; judge: boolean; }[][] = [
    
    [
        {
            select:'阿修羅ちゃん',
            judge: true
        },
        {
            select:'Yes!アキト',
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
            select:'朝倉海',
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
            select:'新選組',
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
            select:'2ばん',
            judge: false
        },
        {
            select:'東京ゴッドコレクション',
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
            select:'関暁夫',
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
        },
        {
            select: '5点',
            judge: false
        },
        {
            select: '高知県',
            judge: false
        },
        {
            select: 'ソニック',
            judge: false
        }
    ],
    [
        {
            select:'たぶん',
            judge: false
        },
        {
            select:'ジョイマン',
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
            select:'朝青龍',
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
            select:'岩倉使節団',
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
            select:'3ばん',
            judge: true
        },
        {
            select:'東京ガールズコレクション',
            judge: true
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
            select:'櫻井翔',
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
            select:'パワハラ',
            judge: false
        },
        {
            select:'10点',
            judge: false
        },
        {
            select: '青森県',
            judge: false
        },
        {
            select: 'パックマン',
            judge: false
        }         
    ],
    [
        {
            select:'流れ弾',
            judge: false
        },
        {
            select:'ハリウッドザコシショウ',
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
            select:'那須川天心',
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
            select:'天正遣欧少年使節',
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
            select:'4ばん',
            judge: false
        },
        {
            select:'東京ゴキブリコレクション',
            judge: false
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
            select:'アンジャッシュ渡部',
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
        },
        {
            select:'7点',
            judge: true
        },
        {
            select:'福井県',
            judge: true
        },
        {
            select:'ピクミン',
            judge: true
        }        
    ]
]

export { questionExtra, answerExtra }
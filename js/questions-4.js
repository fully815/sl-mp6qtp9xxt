/* ==========================================================
   questions-4.js  追加の問題データ（言語系の問題を増やす分）
   ・書き方は js/questions.js のテンプレートと同じです。
   ・このファイルの定数は、ほかと重ならないよう Q4_ で始めています。
   すべて学習用の独自作成です。実際の試験問題は載せません。
   ========================================================== */

/* 熟語の成り立ちの選択肢（並び順は固定） */
const Q4_IDIOM_CHOICES = ['似た意味の漢字を重ねている', '反対の意味の漢字を重ねている', '前の漢字が後ろの漢字を修飾している', '動詞のあとに目的語がきている'];

const Q4_PASSAGE_NAP = '　短い昼寝は、午後の集中力を保つのに役立つとされる。ただし、30分を超えて眠ると深い眠りに入り、起きた直後に頭がぼんやりしやすい。また、夕方以降の昼寝は、夜の寝つきを悪くすることがある。昼寝をするなら、午後の早い時間に、短く切り上げるのがよい。';
const Q4_PASSAGE_MARKET = '　ある商店街では、3年前から毎月第2日曜日に朝市を開いている。朝市の日は、ふだんの日曜日に比べて来場者がおよそ2倍になる。出店しているのは商店街の店だけでなく、近隣の農家も含まれる。一方、来場者の増加にともない、周辺の道路で渋滞が起きるようになった。';
const Q4_PASSAGE_WATER = '　ある大学は、構内の自動販売機でのペットボトル飲料の販売を昨年やめ、代わりに給水機を10台設置した。学生へのアンケートでは、回答者の約6割が、水筒を持ち歩くようになったと答えた。ただし、給水機が設置されていない建物もあり、増設を求める声が出ている。';
const Q4_PASSAGE_MISTAKE = '　失敗を報告しやすい職場は、結果として事故が少ないといわれる。小さな失敗が早い段階で共有されれば、大きな問題になる前に手を打てるからだ。ところが、失敗した人を責める雰囲気があると、人は失敗を隠そうとする。失敗そのものを減らそうとする前に、まず失敗を安心して話せる環境を整えることが大切である。';
const Q4_PASSAGE_MANUAL = '　手順書は、詳しく書けば書くほどよいというものではない。細かすぎる手順書は読むのに時間がかかり、肝心な注意点が埋もれてしまう。読む人が迷いやすい箇所と、間違えると取り返しのつかない箇所にしぼって書くほうが、結果として守られやすい。';
const Q4_PASSAGE_SOLAR = '　ある町は、公共施設の屋根に太陽光パネルを設置する事業を5年前に始めた。現在は小中学校を中心に12の施設に設置されており、発電した電力は各施設で使われている。使い切れなかった電力は電力会社に売っているが、その収入は当初の見込みを下回っている。町は、蓄電池を導入して、施設内で使う割合を高めることを検討している。';
const Q4_PASSAGE_TRAINING = '　ある企業は、新入社員の研修を、集合形式からオンライン形式に切り替えた。会場費や移動にかかる費用は大きく減った。受講後のテストの平均点は、切り替えの前後でほとんど変わらなかった。一方、新入社員どうしが知り合う機会が減ったという意見が多く寄せられたため、同社は研修の最終日だけを集合形式に戻すことにした。';
const Q4_PASSAGE_EXPERT = '　専門家の意見は尊重すべきだが、それは専門家が誤らないからではない。専門家は、自分の判断の根拠を示し、他の専門家からの批判を受けて考えを改める仕組みの中にいる。私たちが信頼すべきなのは、個々の専門家の発言というより、誤りを見つけて直していくこの仕組みのほうである。';
const Q4_PASSAGE_PARK = '　ある公園では、今年の春から、犬を放して遊ばせることのできる区画を設けた。利用できるのは午前9時から午後5時までで、利用料はかからない。';

QUESTIONS.push(
  /* ================= SPI3：言語 ================= */
  {
    id: 'spi3-verbal-101', examType: 'spi3', category: 'verbal', subCategory: '二語の関係',
    difficulty: 1, questionType: 'single',
    questionText: '「小麦：パン」と同じ関係になっている組み合わせはどれか。',
    choices: ['パン：ごはん', '大豆：豆腐', '牛乳：牛', '米：稲'],
    correctAnswer: 1,
    explanation: '「小麦」は「パン」の原料です。「原料：それから作られるもの」の関係なので、「大豆：豆腐」が同じです。「牛乳：牛」「米：稲」は、できたものが左、もとになるものが右で、順番が逆です。',
    shortCut: '「AからBを作る」という文に当てはめます。',
    commonMistakes: '関係は合っていても、左右の順番が逆の選択肢があります。順番まで確かめます。',
    targetSeconds: 25, tags: ['語彙', '関係'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-verbal-102', examType: 'spi3', category: 'verbal', subCategory: '二語の関係',
    difficulty: 1, questionType: 'single',
    questionText: '「開始：終了」と同じ関係になっている組み合わせはどれか。',
    choices: ['収入：給料', '開始：出発', '収入：支出', '終了：完了'],
    correctAnswer: 2,
    explanation: '「開始」と「終了」は反対の意味の語です。「収入」と「支出」も反対の意味なので、同じ関係です。「終了：完了」は似た意味、「収入：給料」は給料が収入の一種という関係です。',
    shortCut: '最初の2語が「反対」「似た意味」「含む・含まれる」のどれかを先に決めます。',
    commonMistakes: '例と同じ語（開始、終了）が入っている選択肢に引かれないようにします。',
    targetSeconds: 25, tags: ['語彙', '関係'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-verbal-103', examType: 'spi3', category: 'verbal', subCategory: '二語の関係',
    difficulty: 2, questionType: 'single',
    questionText: '「ページ：本」と同じ関係になっている組み合わせはどれか。',
    choices: ['車輪：自動車', '自動車：道路', '本：読書', '運転：自動車'],
    correctAnswer: 0,
    explanation: '「ページ」は「本」を作っている一部分です。「部分：全体」の関係なので、「車輪：自動車」が同じです。',
    shortCut: '「AはBの一部」と言えるかを確かめます。',
    commonMistakes: '「自動車：道路」は関連がありますが、自動車は道路の一部ではありません。',
    targetSeconds: 25, tags: ['語彙', '関係'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-verbal-104', examType: 'spi3', category: 'verbal', subCategory: '二語の関係',
    difficulty: 1, questionType: 'single',
    questionText: '「賛成：同意」と同じ関係になっている組み合わせはどれか。',
    choices: ['賛成：反対', '欠点：長所', '原因：結果', '欠点：短所'],
    correctAnswer: 3,
    explanation: '「賛成」と「同意」は似た意味の語です。「欠点」と「短所」も似た意味なので、同じ関係です。「賛成：反対」「欠点：長所」は反対の意味です。',
    shortCut: '2語を入れ替えても文の意味が変わらなければ、似た意味の関係です。',
    commonMistakes: '反対の意味の組が2つ混ざっています。例の関係を先に確かめてから選びます。',
    targetSeconds: 25, tags: ['語彙', '関係'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-verbal-105', examType: 'spi3', category: 'verbal', subCategory: '二語の関係',
    difficulty: 2, questionType: 'single',
    questionText: '「書店：本」と同じ関係になっている組み合わせはどれか。',
    choices: ['薬：病院', '薬局：薬', '本：作家', '薬局：薬剤師'],
    correctAnswer: 1,
    explanation: '「書店」は「本」を売る店です。「店：そこで売っているもの」の関係なので、「薬局：薬」が同じです。「薬局：薬剤師」は「店：そこで働く人」の関係です。',
    shortCut: '「AはBを売る店」という文に当てはめます。',
    commonMistakes: '「薬局：薬剤師」も左が店ですが、右が「人」になっていて関係が違います。',
    targetSeconds: 25, tags: ['語彙', '関係'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-verbal-106', examType: 'spi3', category: 'verbal', subCategory: '語句の意味',
    difficulty: 2, questionType: 'single',
    questionText: '「準備などが細かいところまで行き届いていて、手落ちがないこと」という意味に最も近い語はどれか。',
    choices: ['周到', '周知', '到達', '用心'],
    correctAnswer: 0,
    explanation: '「周到」は、すみずみまで注意が行き届いていることです。「周知」は広く知れわたっていること、「到達」は行き着くこと、「用心」は気をつけることです。',
    shortCut: '「用意周到」という言い方を思い出します。',
    commonMistakes: '同じ漢字を含む「周知」「到達」を選ばないようにします。',
    targetSeconds: 25, tags: ['語彙'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-verbal-107', examType: 'spi3', category: 'verbal', subCategory: '語句の意味',
    difficulty: 1, questionType: 'single',
    questionText: '「物事がとどこおらず、すらすらと進むこと」という意味に最も近い語はどれか。',
    choices: ['円満', '迅速', '円滑', '順延'],
    correctAnswer: 2,
    explanation: '「円滑」は、物事がさしさわりなく進むことです。「円満」は争いがなく穏やかなこと、「迅速」はとても速いこと、「順延」は予定を順に先へ延ばすことです。',
    shortCut: '「滑」は「なめらか」という意味の漢字です。',
    commonMistakes: '「迅速」は速さを表す語で、とどこおりのなさを表す語ではありません。',
    targetSeconds: 25, tags: ['語彙'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-verbal-108', examType: 'spi3', category: 'verbal', subCategory: '語句の意味',
    difficulty: 2, questionType: 'single',
    questionText: '「ほかと比べて、はるかにすぐれていること」という意味に最も近い語はどれか。',
    choices: ['超過', '優遇', '突破', '卓越'],
    correctAnswer: 3,
    explanation: '「卓越」は、ほかよりはるかにすぐれていることです。「超過」は決まった数量をこえること、「優遇」は手厚くもてなすこと、「突破」は困難などを破って進むことです。',
    shortCut: '「卓越した技術」のように、能力をほめる場面で使う語を探します。',
    commonMistakes: '「超過」は量が多いことを表すだけで、すぐれているという意味はありません。',
    targetSeconds: 25, tags: ['語彙'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-verbal-109', examType: 'spi3', category: 'verbal', subCategory: '語句の意味',
    difficulty: 2, questionType: 'single',
    questionText: '「はっきりとは言わず、それとなく示すこと」という意味に最も近い語はどれか。',
    choices: ['指摘', '示唆', '明示', '誇示'],
    correctAnswer: 1,
    explanation: '「示唆」は、それとなく示すことです。「指摘」は問題点などをはっきり取り上げて示すこと、「明示」ははっきり示すこと、「誇示」は得意になって見せつけることです。',
    shortCut: '「それとなく」に合うのは示唆だけです。「明示」は反対の意味になります。',
    commonMistakes: 'どれも「示す」に関係する語です。示し方の違いで選びます。',
    targetSeconds: 25, tags: ['語彙'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-verbal-110', examType: 'spi3', category: 'verbal', subCategory: '語句の意味',
    difficulty: 2, questionType: 'single',
    questionText: '「自分の主張の一部を引っこめて、相手の考えに歩み寄ること」という意味に最も近い語はどれか。',
    choices: ['謙遜', '服従', '譲歩', '妥結'],
    correctAnswer: 2,
    explanation: '「譲歩」は、自分の主張をおさえて相手に歩み寄ることです。「謙遜」はへりくだること、「服従」は命令に従うこと、「妥結」は話し合いがまとまることです。',
    shortCut: '「歩み寄る」と「譲歩」の「歩」が対応しています。',
    commonMistakes: '「妥結」は話し合いの結果を表す語です。歩み寄るという行動そのものではありません。',
    targetSeconds: 25, tags: ['語彙'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-verbal-111', examType: 'spi3', category: 'verbal', subCategory: '語句の用法',
    difficulty: 2, questionType: 'single',
    questionText: '次の文の「とる」と、最も近い意味で使われているものはどれか。\n「会議でメモをとる。」',
    choices: ['講義の記録をとる。', '来週、休みをとる。', '失敗の責任をとる。', '室内で帽子をとる。'],
    correctAnswer: 0,
    explanation: '例文の「とる」は「書き記す」の意味です。「記録をとる」も同じ意味です。「休みをとる」は得る、「責任をとる」は引き受ける、「帽子をとる」は外すという意味です。',
    shortCut: '「とる」を「書く」に置き換えて、意味が通るものを探します。',
    commonMistakes: 'どれもよく使う言い方です。別の言葉に置き換えて、意味の違いを確かめます。',
    targetSeconds: 40, tags: ['語彙', '多義語'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-verbal-112', examType: 'spi3', category: 'verbal', subCategory: '語句の用法',
    difficulty: 2, questionType: 'single',
    questionText: '次の文の「で」と、同じ働きをしているものはどれか。\n「台風で電車が止まった。」',
    choices: ['公園で遊ぶ。', '鉛筆で書く。', '三人で出かける。', '風邪で学校を休む。'],
    correctAnswer: 3,
    explanation: '例文の「で」は、原因や理由を表しています（台風のために）。「風邪で学校を休む」も、風邪が理由です。「公園で」は場所、「鉛筆で」は手段、「三人で」は人数を表します。',
    shortCut: '「で」を「のために」に置き換えて、意味が通るものを探します。',
    commonMistakes: '「鉛筆で」は「鉛筆を使って」という意味で、理由ではありません。',
    targetSeconds: 40, tags: ['文法', '助詞'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-verbal-113', examType: 'spi3', category: 'verbal', subCategory: '語句の用法',
    difficulty: 2, questionType: 'single',
    questionText: '次の文の「明るい」と、最も近い意味で使われているものはどれか。\n「彼は、この町の地理に明るい。」',
    choices: ['明るい色の服を選ぶ。', '法律に明るい人に相談する。', '彼女は明るい性格だ。', '将来の見通しは明るい。'],
    correctAnswer: 1,
    explanation: '例文の「明るい」は「よく知っている」という意味です。「法律に明るい」も同じです。ほかは、色があざやかなこと、性格が朗らかなこと、希望がもてることを表します。',
    shortCut: '「〜に明るい」の形になっているものを探します。',
    commonMistakes: '「見通しは明るい」は、よく知っているという意味ではなく、希望がもてるという意味です。',
    targetSeconds: 40, tags: ['語彙', '多義語'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-verbal-114', examType: 'spi3', category: 'verbal', subCategory: '空欄補充',
    difficulty: 2, questionType: 'single',
    questionText: '空欄に入る最も適切な語はどれか。\n「盛り上がっていた話し合いに、彼の一言が水を（　　）。」',
    choices: ['流した', 'まいた', '差した', '注いだ'],
    correctAnswer: 2,
    explanation: '「水を差す」は、うまく進んでいる物事のじゃまをするという意味の決まった言い方です。',
    shortCut: '「水を差す」「水に流す」「火に油を注ぐ」を、別々の言い方として区別して覚えます。',
    commonMistakes: '「水に流す」は、過去のことをなかったことにするという別の言い方です。助詞も「に」です。',
    targetSeconds: 30, tags: ['慣用表現'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-verbal-115', examType: 'spi3', category: 'verbal', subCategory: '空欄補充',
    difficulty: 1, questionType: 'single',
    questionText: '空欄に入る最も適切な語はどれか。\n「この店は値段が安い。（　　）、味もよい。」',
    choices: ['そのうえ', 'ところが', 'なぜなら', 'それとも'],
    correctAnswer: 0,
    explanation: '前の文（安い）に、同じ向きのよい点（味がよい）を付け加えています。付け加えるときは「そのうえ」を使います。',
    shortCut: '後ろの文の「も」が手がかりです。同じ向きの内容を足しています。',
    commonMistakes: '「ところが」は、前の内容から予想されることと逆の内容をつなぐときに使います。',
    targetSeconds: 25, tags: ['接続詞'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-verbal-116', examType: 'spi3', category: 'verbal', subCategory: '空欄補充',
    difficulty: 1, questionType: 'single',
    questionText: '空欄に入る最も適切な語はどれか。\n「（　　）失敗しても、あきらめずに挑戦を続けたい。」',
    choices: ['まさか', 'たとえ', '決して', 'おそらく'],
    correctAnswer: 1,
    explanation: '「たとえ〜ても」は、「もし〜だとしても」という意味の決まった組み合わせです。',
    shortCut: '文の後ろにある「ても」と組になる語を探します。',
    commonMistakes: '「決して」は「〜ない」と、「まさか」は「〜ないだろう」と組になります。',
    targetSeconds: 25, tags: ['文法', '副詞'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-verbal-117', examType: 'spi3', category: 'verbal', subCategory: '空欄補充',
    difficulty: 2, questionType: 'single',
    questionText: '空欄に入る最も適切な語はどれか。\n「先輩の助言に耳を（　　）、計画を見直すことにした。」',
    choices: ['疑い', 'そろえ', 'ふさぎ', '傾け'],
    correctAnswer: 3,
    explanation: '「耳を傾ける」は、注意して熱心に聞くという意味です。助言をよく聞いたので、計画を見直したという流れに合います。',
    shortCut: '後半の「計画を見直すことにした」から、助言を受け入れたことが分かります。',
    commonMistakes: '「耳をふさぐ」は聞こうとしないこと、「耳を疑う」は聞いたことが信じられないことです。どちらも後半と合いません。',
    targetSeconds: 30, tags: ['慣用表現'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-verbal-118', examType: 'spi3', category: 'verbal', subCategory: '文の並べ替え',
    difficulty: 1, questionType: 'single',
    questionText: 'ア〜エを並べ替えて文を完成させるとき、2番目にくるものはどれか。\n「この薬は、［1］［2］［3］［4］。」\nア　飲む\nイ　食事の\nウ　ことになっている\nエ　あとに',
    choices: ['ア', 'イ', 'ウ', 'エ'],
    correctAnswer: 3,
    explanation: '「食事の（イ）／あとに（エ）／飲む（ア）／ことになっている（ウ）」となります。2番目は「エ」です。',
    shortCut: '「食事の」の後ろには名詞がきます。名詞として使えるのは「あと」だけです。',
    commonMistakes: '問われている順番（2番目）を取り違えないようにします。',
    targetSeconds: 40, tags: ['文法', '並べ替え'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-verbal-119', examType: 'spi3', category: 'verbal', subCategory: '文の並べ替え',
    difficulty: 2, questionType: 'single',
    questionText: 'ア〜エを並べ替えて文を完成させるとき、2番目にくるものはどれか。\n「雨が［1］［2］［3］［4］出発しよう。」\nア　うちに\nイ　ない\nウ　降ら\nエ　強く',
    choices: ['ア', 'イ', 'ウ', 'エ'],
    correctAnswer: 2,
    explanation: '「強く（エ）／降ら（ウ）／ない（イ）／うちに（ア）出発しよう」となります。2番目は「ウ」です。',
    shortCut: '「降ら」の後ろには「ない」しか続きません。この2つを先につなぎます。',
    commonMistakes: '「〜ないうちに」は「〜する前に」という意味です。「うちに」は「ない」の後ろにきます。',
    targetSeconds: 40, tags: ['文法', '並べ替え'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-verbal-120', examType: 'spi3', category: 'verbal', subCategory: '文の並べ替え',
    difficulty: 2, questionType: 'single',
    questionText: 'ア〜エを並べ替えて文を完成させるとき、3番目にくるものはどれか。\n「会場には、［1］［2］［3］［4］人が集まった。」\nア　ほど\nイ　きれない\nウ　多くの\nエ　数え',
    choices: ['ア', 'イ', 'ウ', 'エ'],
    correctAnswer: 0,
    explanation: '「数え（エ）／きれない（イ）／ほど（ア）／多くの（ウ）人が集まった」となります。3番目は「ア」です。',
    shortCut: '最後の「人」に直接つながるのは「多くの」だけです。後ろから決めます。',
    commonMistakes: '「数えきれない」は2つに分かれています。「数え」と「きれない」を先につなぎます。',
    targetSeconds: 40, tags: ['文法', '並べ替え'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-verbal-121', examType: 'spi3', category: 'verbal', subCategory: '熟語の成り立ち',
    difficulty: 1, questionType: 'single',
    questionText: '熟語「永久」の成り立ちとして、最も適切なものはどれか。',
    choices: Q4_IDIOM_CHOICES,
    correctAnswer: 0,
    explanation: '「永」は「ながい」、「久」は「ひさしい」で、どちらも時間が長いことを表します。似た意味の漢字を重ねた熟語です。',
    shortCut: '2つの漢字を別々に訓読みして、意味を比べます。',
    commonMistakes: '「永い久しさ」のように、前が後ろを修飾していると考えないようにします。2字は対等です。',
    targetSeconds: 20, tags: ['熟語'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-verbal-122', examType: 'spi3', category: 'verbal', subCategory: '熟語の成り立ち',
    difficulty: 1, questionType: 'single',
    questionText: '熟語「洗顔」の成り立ちとして、最も適切なものはどれか。',
    choices: Q4_IDIOM_CHOICES,
    correctAnswer: 3,
    explanation: '「洗顔」は「顔を洗う」と読めます。前の漢字が動作、後ろの漢字がその対象です。',
    shortCut: '下の字から上の字へ「〜を〜する」と読めるかを試します。',
    commonMistakes: '「洗う顔」と読んで、前が後ろを修飾していると考えないようにします。',
    targetSeconds: 20, tags: ['熟語'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-verbal-123', examType: 'spi3', category: 'verbal', subCategory: '熟語の成り立ち',
    difficulty: 1, questionType: 'single',
    questionText: '熟語「深海」の成り立ちとして、最も適切なものはどれか。',
    choices: Q4_IDIOM_CHOICES,
    correctAnswer: 2,
    explanation: '「深海」は「深い海」と読めます。前の漢字が、後ろの漢字をくわしく説明しています。',
    shortCut: '上の字から下の字へ「〜い〜」「〜な〜」と読めるかを試します。',
    commonMistakes: '「海が深い」と読むと主語と述語の関係に見えますが、熟語の意味は「深い海」です。',
    targetSeconds: 20, tags: ['熟語'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-verbal-124', examType: 'spi3', category: 'verbal', subCategory: '長文読解',
    difficulty: 2, questionType: 'single',
    passage: Q4_PASSAGE_NAP,
    questionText: '本文の内容と合っているものはどれか。',
    choices: ['昼寝は、長く眠るほど午後の集中力が高まる。', '長すぎる昼寝をすると、起きた直後に頭がぼんやりしやすい。', '夕方以降の昼寝は、夜の眠りを深くする。', '昼寝は体に悪いので、避けたほうがよい。'],
    correctAnswer: 1,
    explanation: '本文に「30分を超えて眠ると…起きた直後に頭がぼんやりしやすい」とあります。夕方以降の昼寝は寝つきを悪くすると書かれており、昼寝そのものは役立つとされています。',
    shortCut: '選択肢を1つずつ本文に戻して確かめます。',
    commonMistakes: '本文は昼寝を否定していません。「短い昼寝は役立つ」と述べています。',
    targetSeconds: 70, tags: ['読解'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-verbal-125', examType: 'spi3', category: 'verbal', subCategory: '長文読解',
    difficulty: 1, questionType: 'single',
    passage: Q4_PASSAGE_NAP,
    questionText: '筆者がすすめている昼寝のしかたはどれか。',
    choices: ['夕方に、30分以上眠る。', '午後の早い時間に、1時間ほど眠る。', '午後の早い時間に、短く眠る。', '眠くなったときに、好きなだけ眠る。'],
    correctAnswer: 2,
    explanation: '最後の文に「午後の早い時間に、短く切り上げるのがよい」とあります。',
    shortCut: '「〜するのがよい」のように、すすめる表現がある文を探します。',
    commonMistakes: '時間帯だけでなく、長さの条件（短く）も確かめます。',
    targetSeconds: 50, tags: ['読解'], figureData: null, sourceType: 'original'
  },

  /* ================= SPI3：構造的把握力 ================= */
  {
    id: 'spi3-structure-101', examType: 'spi3', category: 'structure', subCategory: '言語の構造',
    difficulty: 2, questionType: 'single',
    questionText: '次の例と、前半と後半の関係が同じものはどれか。\n例：「都市部では人口が増えているが、農村部では減っている。」',
    choices: ['雪が積もったので、道路が通行止めになった。', '予約をすれば、待たずに入れる。', '父は朝型だが、母は夜型だ。', '彼は口数が少ない。つまり、寡黙だ。'],
    correctAnswer: 2,
    explanation: '例は、2つのものを比べて違いを示す「対比」の関係です。「父は朝型だが、母は夜型だ」が同じです。ほかは、原因と結果、条件、言い換えの関係です。',
    shortCut: '前半と後半の主語が別々で、内容が反対になっていれば対比です。',
    commonMistakes: '「が」があるかどうかではなく、2つを比べているかどうかで判断します。',
    targetSeconds: 50, tags: ['構造把握'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-structure-102', examType: 'spi3', category: 'structure', subCategory: '言語の構造',
    difficulty: 3, questionType: 'single',
    questionText: '次の例と、論理の組み立てが同じものはどれか。\n例：「すべての鳥には羽がある。ペンギンは鳥である。だから、ペンギンには羽がある。」',
    choices: ['すべての社員は名札をつけている。田中さんは社員である。だから、田中さんは名札をつけている。', 'すべての魚は泳ぐ。イルカは泳ぐ。だから、イルカは魚である。', '多くの学生は自転車で通学する。山田さんは学生である。だから、山田さんは自転車で通学する。', '猫は動物である。犬も動物である。だから、猫は犬である。'],
    correctAnswer: 0,
    explanation: '例は「すべてのAはBである。CはAである。だからCはBである」という形です。同じ形になっているのは、社員と名札の文だけです。2つ目は「CはBである」から「CはAである」を導いており、形が違います。3つ目は「すべて」ではなく「多く」です。',
    shortCut: '文をA、B、Cの記号に置き換えて、形を比べます。',
    commonMistakes: '内容が正しそうかどうかではなく、組み立ての形で比べます。',
    targetSeconds: 70, tags: ['構造把握', '論理'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-structure-103', examType: 'spi3', category: 'structure', subCategory: '言語の構造',
    difficulty: 2, questionType: 'single',
    questionText: '次の例と、前半と後半の関係が同じものはどれか。\n例：「運動不足を解消するために、毎朝歩くことにした。」',
    choices: ['大雨が降ったために、遠足が延期された。', '歩いて行けば、30分かかる。', '彼は医師であり、作家でもある。', '電気代を減らすために、照明をLEDに替えた。'],
    correctAnswer: 3,
    explanation: '例は「目的 → そのための手段」の関係です。「電気代を減らす（目的）ために、照明を替えた（手段）」が同じです。「大雨が降ったために」は、同じ「ために」でも原因を表しています。',
    shortCut: '「ために」を「という目的で」に置き換えて、意味が通るかを確かめます。',
    commonMistakes: '「ために」という言葉が同じでも、目的を表す場合と原因を表す場合があります。',
    targetSeconds: 50, tags: ['構造把握'], figureData: null, sourceType: 'original'
  },

  /* ================= 玉手箱：言語 ================= */
  {
    id: 'tamatebako-verbal-101', examType: 'tamatebako', category: 'verbal', subCategory: '論理的読解',
    difficulty: 1, questionType: 'judge',
    passage: Q4_PASSAGE_MARKET,
    questionText: '次の文は、本文の内容に照らしてどれに当たるか。\n「朝市は、毎週日曜日に開かれている。」',
    choices: JUDGE_CHOICES,
    correctAnswer: 1,
    explanation: '本文に「毎月第2日曜日に朝市を開いている」とあります。月に1回なので、「毎週」は誤りです。',
    shortCut: '回数や日付の表現（毎月、毎週、第2）を、本文と照らし合わせます。',
    commonMistakes: '「日曜日」が合っているだけで、正しいと判断しないようにします。',
    targetSeconds: 35, tags: ['読解', '論理'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tamatebako-verbal-102', examType: 'tamatebako', category: 'verbal', subCategory: '論理的読解',
    difficulty: 1, questionType: 'judge',
    passage: Q4_PASSAGE_MARKET,
    questionText: '次の文は、本文の内容に照らしてどれに当たるか。\n「朝市には、商店街の店以外も出店している。」',
    choices: JUDGE_CHOICES,
    correctAnswer: 0,
    explanation: '本文に「商店街の店だけでなく、近隣の農家も含まれる」とあります。商店街の店以外も出店しているので、正しいです。',
    shortCut: '「〜だけでなく〜も」は、両方が当てはまることを表します。',
    commonMistakes: '「農家」という言葉が設問にないため、判断できないと考えがちです。農家は「商店街の店以外」に当たります。',
    targetSeconds: 35, tags: ['読解', '論理'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tamatebako-verbal-103', examType: 'tamatebako', category: 'verbal', subCategory: '論理的読解',
    difficulty: 2, questionType: 'judge',
    passage: Q4_PASSAGE_MARKET,
    questionText: '次の文は、本文の内容に照らしてどれに当たるか。\n「朝市の日は、商店街の店の売上が、ふだんの日曜日の2倍になる。」',
    choices: JUDGE_CHOICES,
    correctAnswer: 2,
    explanation: '本文で2倍になると書かれているのは「来場者」です。売上については書かれていないので、判断できません。',
    shortCut: '数字が合っていても、「何の」数字かが本文と同じかどうかを確かめます。',
    commonMistakes: '来場者が2倍なら売上も2倍だろう、と推測しないようにします。',
    targetSeconds: 40, tags: ['読解', '論理'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tamatebako-verbal-104', examType: 'tamatebako', category: 'verbal', subCategory: '論理的読解',
    difficulty: 1, questionType: 'judge',
    passage: Q4_PASSAGE_WATER,
    questionText: '次の文は、本文の内容に照らしてどれに当たるか。\n「給水機は、構内のすべての建物に設置されている。」',
    choices: JUDGE_CHOICES,
    correctAnswer: 1,
    explanation: '本文に「給水機が設置されていない建物もあり」とあります。「すべての建物に設置されている」は誤りです。',
    shortCut: '「すべて」「必ず」などの強い表現は、本文に例外が書かれていないかを確かめます。',
    commonMistakes: '10台という数字から、十分に設置されていると思い込まないようにします。',
    targetSeconds: 35, tags: ['読解', '論理'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tamatebako-verbal-105', examType: 'tamatebako', category: 'verbal', subCategory: '論理的読解',
    difficulty: 2, questionType: 'judge',
    passage: Q4_PASSAGE_WATER,
    questionText: '次の文は、本文の内容に照らしてどれに当たるか。\n「アンケートに回答した学生の半数以上が、水筒を持ち歩くようになったと答えた。」',
    choices: JUDGE_CHOICES,
    correctAnswer: 0,
    explanation: '本文に「回答者の約6割」とあります。約6割は半数（5割）より多いので、正しいです。',
    shortCut: '「約6割」と「半数以上」のように、言い方が違っても同じ内容かどうかを確かめます。',
    commonMistakes: '本文と同じ言葉が使われていないからといって、判断できないとは限りません。',
    targetSeconds: 40, tags: ['読解', '論理'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tamatebako-verbal-106', examType: 'tamatebako', category: 'verbal', subCategory: '論理的読解',
    difficulty: 2, questionType: 'judge',
    passage: Q4_PASSAGE_WATER,
    questionText: '次の文は、本文の内容に照らしてどれに当たるか。\n「この取り組みによって、大学から出るごみの量は減った。」',
    choices: JUDGE_CHOICES,
    correctAnswer: 2,
    explanation: '本文は、販売をやめたこと、給水機の設置、アンケートの結果を述べているだけです。ごみの量については書かれていません。',
    shortCut: '本文にない話題（ここではごみの量）は、正しいとも誤りとも言えません。',
    commonMistakes: 'ペットボトルの販売をやめたのだからごみは減ったはずだ、と推測しないようにします。',
    targetSeconds: 40, tags: ['読解', '論理'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tamatebako-verbal-107', examType: 'tamatebako', category: 'verbal', subCategory: '趣旨判定',
    difficulty: 2, questionType: 'single',
    passage: Q4_PASSAGE_MISTAKE,
    questionText: '次の文は、どれに当てはまるか。\n「まず、失敗を安心して話せる環境を整えることが大切だ。」',
    choices: GIST_CHOICES,
    correctAnswer: 0,
    explanation: '本文の最後の一文と同じ内容です。「〜ことが大切である」と結ばれており、筆者が最も訴えたいことです。',
    shortCut: '「〜が大切である」「〜べきだ」で終わる文に、趣旨が表れやすいです。',
    commonMistakes: '本文に書かれているだけでなく、結論として述べられているかどうかを確かめます。',
    targetSeconds: 40, tags: ['読解', '趣旨'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tamatebako-verbal-108', examType: 'tamatebako', category: 'verbal', subCategory: '趣旨判定',
    difficulty: 2, questionType: 'single',
    passage: Q4_PASSAGE_MISTAKE,
    questionText: '次の文は、どれに当てはまるか。\n「失敗した人を責める雰囲気があると、人は失敗を隠そうとする。」',
    choices: GIST_CHOICES,
    correctAnswer: 1,
    explanation: '本文に書かれていますが、結論を導くための説明の部分です。筆者が訴えたいのは、その先の「安心して話せる環境を整えること」です。',
    shortCut: '理由や例として使われている文は、趣旨そのものではありません。',
    commonMistakes: '本文に書かれているという理由だけで「趣旨」を選ばないようにします。',
    targetSeconds: 40, tags: ['読解', '趣旨'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tamatebako-verbal-109', examType: 'tamatebako', category: 'verbal', subCategory: '趣旨判定',
    difficulty: 1, questionType: 'single',
    passage: Q4_PASSAGE_MISTAKE,
    questionText: '次の文は、どれに当てはまるか。\n「失敗の多い人は、別の部署に異動させるのがよい。」',
    choices: GIST_CHOICES,
    correctAnswer: 2,
    explanation: '本文は、異動や配置については何も述べていません。本文とは関係のない内容です。',
    shortCut: '本文にない話題（ここでは異動）が出てきたら、「関係ない」と判断できます。',
    commonMistakes: '「失敗」という同じ言葉が出てくるだけで、本文の内容だと思い込まないようにします。',
    targetSeconds: 30, tags: ['読解', '趣旨'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tamatebako-verbal-110', examType: 'tamatebako', category: 'verbal', subCategory: '趣旨把握',
    difficulty: 2, questionType: 'single',
    passage: Q4_PASSAGE_MANUAL,
    questionText: '筆者の訴えに最も近いものはどれか。',
    choices: ['手順書は、できるだけ詳しく書くべきだ。', '手順書は、読む人が自分で作るべきだ。', '経験があれば、手順書がなくても作業はできる。', '手順書は、重要な箇所にしぼって書くほうがよい。'],
    correctAnswer: 3,
    explanation: '最後の文で、迷いやすい箇所と取り返しのつかない箇所に「しぼって書くほうが、結果として守られやすい」と述べています。',
    shortCut: '最初の文の「〜というものではない」で否定されている考えは、趣旨ではありません。',
    commonMistakes: '1つ目は、本文の最初で否定されている考えです。',
    targetSeconds: 60, tags: ['読解', '趣旨'], figureData: null, sourceType: 'original'
  },

  /* ================= GAB／Web-GAB：言語理解 ================= */
  {
    id: 'gab-verbal-101', examType: 'gab', category: 'verbal', subCategory: '長文読解',
    difficulty: 1, questionType: 'judge',
    passage: Q4_PASSAGE_SOLAR,
    questionText: '次の文は、本文の内容に照らしてどれに当たるか。\n「発電した電力は、すべて電力会社に売られている。」',
    choices: JUDGE_CHOICES,
    correctAnswer: 1,
    explanation: '本文に「発電した電力は各施設で使われている」とあり、売っているのは「使い切れなかった電力」だけです。「すべて」は誤りです。',
    shortCut: '「すべて」のような強い表現は、本文と合っているかを確かめます。',
    commonMistakes: '「電力会社に売っている」という部分だけを見て、正しいと判断しないようにします。',
    targetSeconds: 40, tags: ['読解', '論理'], figureData: null, sourceType: 'original'
  },
  {
    id: 'gab-verbal-102', examType: 'gab', category: 'verbal', subCategory: '長文読解',
    difficulty: 1, questionType: 'judge',
    passage: Q4_PASSAGE_SOLAR,
    questionText: '次の文は、本文の内容に照らしてどれに当たるか。\n「電力を売って得た収入は、当初の見込みより少ない。」',
    choices: JUDGE_CHOICES,
    correctAnswer: 0,
    explanation: '本文に「その収入は当初の見込みを下回っている」とあります。「下回っている」は「より少ない」と同じ意味です。',
    shortCut: '「下回る」「上回る」は、「少ない」「多い」に言い換えて比べます。',
    commonMistakes: '言い方が違うだけで、内容は本文と同じです。',
    targetSeconds: 35, tags: ['読解', '論理'], figureData: null, sourceType: 'original'
  },
  {
    id: 'gab-verbal-103', examType: 'gab', category: 'verbal', subCategory: '長文読解',
    difficulty: 2, questionType: 'judge',
    passage: Q4_PASSAGE_SOLAR,
    questionText: '次の文は、本文の内容に照らしてどれに当たるか。\n「太陽光パネルの設置によって、公共施設の電気代は半分になった。」',
    choices: JUDGE_CHOICES,
    correctAnswer: 2,
    explanation: '本文は、発電した電力を各施設で使っていると述べていますが、電気代がどれだけ減ったかには触れていません。',
    shortCut: '「半分」のような具体的な数字は、本文に根拠があるかを確かめます。',
    commonMistakes: '電力を自分で作っているのだから電気代は減ったはずだ、と推測しないようにします。',
    targetSeconds: 40, tags: ['読解', '論理'], figureData: null, sourceType: 'original'
  },
  {
    id: 'gab-verbal-104', examType: 'gab', category: 'verbal', subCategory: '長文読解',
    difficulty: 1, questionType: 'judge',
    passage: Q4_PASSAGE_TRAINING,
    questionText: '次の文は、本文の内容に照らしてどれに当たるか。\n「オンライン形式に切り替えたあと、受講後のテストの平均点は大きく下がった。」',
    choices: JUDGE_CHOICES,
    correctAnswer: 1,
    explanation: '本文に、平均点は「切り替えの前後でほとんど変わらなかった」とあります。「大きく下がった」は誤りです。',
    shortCut: '変化を表す言葉（増えた、減った、変わらない）を、本文と照らし合わせます。',
    commonMistakes: '一部を集合形式に戻したという結論から、成績が下がったと思い込まないようにします。',
    targetSeconds: 35, tags: ['読解', '論理'], figureData: null, sourceType: 'original'
  },
  {
    id: 'gab-verbal-105', examType: 'gab', category: 'verbal', subCategory: '長文読解',
    difficulty: 1, questionType: 'judge',
    passage: Q4_PASSAGE_TRAINING,
    questionText: '次の文は、本文の内容に照らしてどれに当たるか。\n「研修の最終日は、集合形式で行われることになった。」',
    choices: JUDGE_CHOICES,
    correctAnswer: 0,
    explanation: '本文の最後に「研修の最終日だけを集合形式に戻すことにした」とあります。',
    shortCut: '本文の最後にある、会社の決定を確かめます。',
    commonMistakes: '「最終日だけ」という範囲も、設問と合っているかを確かめます。',
    targetSeconds: 35, tags: ['読解', '論理'], figureData: null, sourceType: 'original'
  },
  {
    id: 'gab-verbal-106', examType: 'gab', category: 'verbal', subCategory: '長文読解',
    difficulty: 2, questionType: 'judge',
    passage: Q4_PASSAGE_TRAINING,
    questionText: '次の文は、本文の内容に照らしてどれに当たるか。\n「オンライン形式の研修を受けた新入社員は、以前より早く仕事に慣れた。」',
    choices: JUDGE_CHOICES,
    correctAnswer: 2,
    explanation: '本文は、費用、テストの平均点、知り合う機会について述べているだけです。仕事に慣れる早さには触れていません。',
    shortCut: '本文で取り上げられている項目を数え、設問の話題がその中にあるかを確かめます。',
    commonMistakes: 'テストの点が変わらなかったことから、仕事への慣れも同じだと推測しないようにします。',
    targetSeconds: 40, tags: ['読解', '論理'], figureData: null, sourceType: 'original'
  },

  /* ================= TG-WEB：言語（従来型） ================= */
  {
    id: 'tgweb-verbal-classic-101', examType: 'tgweb', category: 'verbal-classic', subCategory: '空欄補充',
    difficulty: 3, questionType: 'single',
    questionText: '空欄に入る最も適切な語句はどれか。\n「言葉は、考えを伝える手段であると同時に、考えそのものを（　　）働きをもつ。言葉にしてみて初めて、自分が何を考えていたのかが分かることがあるからだ。」',
    choices: ['形づくる', '隠す', '弱める', 'まねる'],
    correctAnswer: 0,
    explanation: '後ろの文に「言葉にしてみて初めて、何を考えていたのかが分かる」とあります。言葉が考えをはっきりした形にする、という内容になる「形づくる」が入ります。',
    shortCut: '空欄の後ろにある、理由を述べた文（〜からだ）を手がかりにします。',
    commonMistakes: '「隠す」「弱める」は、後ろの文の内容と反対になります。',
    targetSeconds: 50, tags: ['空欄補充'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-verbal-classic-102', examType: 'tgweb', category: 'verbal-classic', subCategory: '空欄補充',
    difficulty: 3, questionType: 'single',
    questionText: '空欄に入る最も適切な語はどれか。\n「選択肢が多いことは、必ずしも満足につながらない。選べるものが増えるほど、選ばなかったものへの（　　）も大きくなるからである。」',
    choices: ['感謝', '無関心', '心残り', '信頼'],
    correctAnswer: 2,
    explanation: '最初の文は「満足につながらない」と述べています。その理由になるのは、選ばなかったものが気になるという内容です。「心残り」が入ります。',
    shortCut: '最初の文の結論（満足につながらない）に合う、よくない気持ちを表す語を選びます。',
    commonMistakes: '「無関心」では、満足が下がる理由になりません。',
    targetSeconds: 50, tags: ['空欄補充'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-verbal-classic-103', examType: 'tgweb', category: 'verbal-classic', subCategory: '文の並べ替え',
    difficulty: 3, questionType: 'single',
    questionText: 'ア〜エの文を、意味が通るように並べ替えたものはどれか。\nア　つまり、写真は記憶の代わりではなく、記憶を引き出す手がかりなのである。\nイ　旅先で、写真をたくさん撮る人は多い。\nウ　しかし、あとで見返すと、撮ったときの気持ちまでよみがえることがある。\nエ　撮ることに夢中になると、目の前の景色をよく見なくなるという指摘もある。',
    choices: ['イ → ウ → エ → ア', 'エ → イ → ア → ウ', 'イ → ア → エ → ウ', 'イ → エ → ウ → ア'],
    correctAnswer: 3,
    explanation: 'イで話題を示し、エで写真のよくない面を挙げます。ウ「しかし」でよい面を示し、ア「つまり」でまとめます。',
    shortCut: '「しかし」「つまり」で始まる文は、最初にはきません。「つまり」のあるアが最後です。',
    commonMistakes: 'ウの「しかし」は、直前によくない面（エ）があって初めて意味が通ります。イの直後には置けません。',
    targetSeconds: 70, tags: ['並べ替え', '接続詞'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-verbal-classic-104', examType: 'tgweb', category: 'verbal-classic', subCategory: '文の並べ替え',
    difficulty: 2, questionType: 'single',
    questionText: '次のア〜エを意味が通るように並べ替えたとき、3番目に来るものはどれか。\nア　そこで、駅前に自転車の置き場が新しく作られた。\nイ　その結果、歩道をふさぐ自転車は大きく減った。\nウ　この駅の周辺では、歩道に置かれた自転車が通行の妨げになっていた。\nエ　ただし、置き場は朝のうちに満車になるため、さらに広げることが検討されている。',
    choices: ['ア', 'イ', 'ウ', 'エ'],
    correctAnswer: 1,
    explanation: 'ウ（問題）→ ア（対策）→ イ（結果）→ エ（残った課題）の順になります。3番目は「イ」です。',
    shortCut: '「そこで」「その結果」「ただし」のつなぎの言葉から、問題・対策・結果・課題の順を組み立てます。',
    commonMistakes: '「その結果」は、対策（ア）のあとにしか置けません。',
    targetSeconds: 60, tags: ['並べ替え', '接続詞'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-verbal-classic-105', examType: 'tgweb', category: 'verbal-classic', subCategory: '長文読解',
    difficulty: 3, questionType: 'single',
    passage: Q4_PASSAGE_EXPERT,
    questionText: '筆者の主張に最も近いものはどれか。',
    choices: ['専門家は誤らないので、その意見に従うべきだ。', '専門家の意見は互いに食い違うので、信頼できない。', '信頼すべきなのは、誤りを見つけて直していく仕組みである。', '専門家でない人の意見も、同じように尊重すべきだ。'],
    correctAnswer: 2,
    explanation: '最後の文で、信頼すべきなのは個々の発言よりも「誤りを見つけて直していくこの仕組みのほうである」と述べています。',
    shortCut: '「AというよりB」の形では、Bが筆者の言いたいことです。',
    commonMistakes: '1つ目は、最初の文で「専門家が誤らないからではない」と否定されています。',
    targetSeconds: 80, tags: ['読解', '主張'], figureData: null, sourceType: 'original'
  },

  /* ================= TG-WEB：言語（新型） ================= */
  {
    id: 'tgweb-verbal-new-101', examType: 'tgweb', category: 'verbal-new', subCategory: '同義語',
    difficulty: 1, questionType: 'single',
    questionText: '「我慢」と意味が最も近い語はどれか。',
    choices: ['努力', '我流', '忍耐', '遠慮'],
    correctAnswer: 2,
    explanation: '「我慢」は、つらいことをこらえることです。「忍耐」が最も近い意味です。「努力」は力をつくすこと、「我流」は自分だけのやり方、「遠慮」は控えめにすることです。',
    shortCut: '「こらえる」という意味をもつ語を探します。',
    commonMistakes: '同じ漢字を含む「我流」を選ばないようにします。',
    targetSeconds: 12, tags: ['語彙'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-verbal-new-102', examType: 'tgweb', category: 'verbal-new', subCategory: '同義語',
    difficulty: 1, questionType: 'single',
    questionText: '「欠乏」と意味が最も近い語はどれか。',
    choices: ['欠席', '不足', '貧困', '減少'],
    correctAnswer: 1,
    explanation: '「欠乏」は、必要なものが足りないことです。「不足」が最も近い意味です。「減少」は減ることで、足りないかどうかは表しません。',
    shortCut: '「ビタミンの欠乏」を「ビタミンの不足」と言い換えられることで確かめます。',
    commonMistakes: '「減少」は量が減ることを表すだけで、必要な量に足りないという意味はありません。',
    targetSeconds: 12, tags: ['語彙'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-verbal-new-103', examType: 'tgweb', category: 'verbal-new', subCategory: '同義語',
    difficulty: 1, questionType: 'single',
    questionText: '「著名」と意味が最も近い語はどれか。',
    choices: ['著作', '顕著', '有能', '有名'],
    correctAnswer: 3,
    explanation: '「著名」は、世の中に名前がよく知られていることです。「有名」が最も近い意味です。「顕著」ははっきり目立つこと、「有能」は能力があることです。',
    shortCut: '「著名な作家」を「有名な作家」と言い換えられることで確かめます。',
    commonMistakes: '同じ漢字を含む「著作」「顕著」を選ばないようにします。',
    targetSeconds: 12, tags: ['語彙'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-verbal-new-104', examType: 'tgweb', category: 'verbal-new', subCategory: '対義語',
    difficulty: 1, questionType: 'single',
    questionText: '「原因」の対義語はどれか。',
    choices: ['結果', '理由', '動機', '過程'],
    correctAnswer: 0,
    explanation: '「原因」は物事を引き起こすもと、「結果」はそれによって生じたことで、対になる語です。「理由」は原因と似た意味です。',
    shortCut: '「原因と結果」のように、組で使う言葉として覚えます。',
    commonMistakes: '似た意味の「理由」を選ばないようにします。',
    targetSeconds: 12, tags: ['語彙'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-verbal-new-105', examType: 'tgweb', category: 'verbal-new', subCategory: '対義語',
    difficulty: 2, questionType: 'single',
    questionText: '「慎重」の対義語はどれか。',
    choices: ['丁寧', '軽快', '軽率', '冷静'],
    correctAnswer: 2,
    explanation: '「慎重」は注意深く、軽々しく行動しないことです。「軽率」は、よく考えずに軽々しく行動することで、対になる語です。',
    shortCut: '「慎重な判断」と「軽率な判断」を並べて確かめます。',
    commonMistakes: '「軽快」は動きが軽やかなことで、よくない意味はありません。',
    targetSeconds: 12, tags: ['語彙'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-verbal-new-106', examType: 'tgweb', category: 'verbal-new', subCategory: '対義語',
    difficulty: 1, questionType: 'single',
    questionText: '「具体」の対義語はどれか。',
    choices: ['全体', '実際', '空想', '抽象'],
    correctAnswer: 3,
    explanation: '「具体」は、はっきりした形や内容をもっていること、「抽象」は、個々のものから共通する点を抜き出してまとめることで、対になる語です。',
    shortCut: '「具体的」と「抽象的」を組で覚えます。',
    commonMistakes: '「空想」は現実にないことを思い描くことで、具体の対義語ではありません。',
    targetSeconds: 12, tags: ['語彙'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-verbal-new-107', examType: 'tgweb', category: 'verbal-new', subCategory: 'ことわざ',
    difficulty: 1, questionType: 'single',
    questionText: '「猿も木から落ちる」の意味として、最も適切なものはどれか。',
    choices: ['身のほどを知らずに行動すると、失敗する。', 'その道にすぐれた人でも、ときには失敗することがある。', '何度失敗しても、くじけずに立ち上がる。', '失敗は、あとの成功のもとになる。'],
    correctAnswer: 1,
    explanation: '木登りの上手な猿でも木から落ちることがある、ということから、名人でも失敗することがあるという意味です。',
    shortCut: '「猿＝木登りの名人」と置き換えて考えます。',
    commonMistakes: '失敗に関することわざは多くあります。「名人でも」という点がこのことわざの中心です。',
    targetSeconds: 12, tags: ['ことわざ'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-verbal-new-108', examType: 'tgweb', category: 'verbal-new', subCategory: 'ことわざ',
    difficulty: 1, questionType: 'single',
    questionText: '「百聞は一見にしかず」の意味として、最も適切なものはどれか。',
    choices: ['人から何度も聞くより、一度自分の目で見るほうが確かである。', '人の話は、何度も聞いて確かめるべきである。', '見た目だけで物事を判断してはいけない。', '多くの人の意見を聞けば、よい考えが浮かぶ。'],
    correctAnswer: 0,
    explanation: '「しかず」は「及ばない」という意味です。百回聞くことは、一回見ることに及ばない、つまり自分で見るほうが確かだという意味です。',
    shortCut: '「百聞（百回聞く）＜一見（一回見る）」という大小の関係で覚えます。',
    commonMistakes: '「見る」ことをすすめることわざです。見た目で判断するなという意味ではありません。',
    targetSeconds: 12, tags: ['ことわざ'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-verbal-new-109', examType: 'tgweb', category: 'verbal-new', subCategory: '長文読解',
    difficulty: 1, questionType: 'single',
    passage: Q4_PASSAGE_PARK,
    questionText: '本文の内容と合っているものはどれか。',
    choices: ['この区画は、夜間も利用できる。', 'この区画は、昨年の春に設けられた。', 'この区画を利用するには、事前の予約が必要である。', 'この区画は、無料で利用できる。'],
    correctAnswer: 3,
    explanation: '本文に「利用料はかからない」とあります。利用できるのは午後5時までで、設けられたのは今年の春です。予約については書かれていません。',
    shortCut: '時間、時期、料金の3つを、本文と1つずつ照らし合わせます。',
    commonMistakes: '本文に書かれていないこと（予約）は、「合っている」とは言えません。',
    targetSeconds: 25, tags: ['読解'], figureData: null, sourceType: 'original'
  },

  /* ================= その他：一般常識 ================= */
  {
    id: 'other-general-101', examType: 'other', category: 'general', subCategory: '国語',
    difficulty: 1, questionType: 'single',
    questionText: '「見る」の謙譲語はどれか。',
    choices: ['ご覧になる', '拝見する', '見られる', 'お見えになる'],
    correctAnswer: 1,
    explanation: '「拝見する」は、自分が見ることをへりくだって言う謙譲語です。「ご覧になる」「見られる」は相手の動作を高める尊敬語、「お見えになる」は「来る」の尊敬語です。',
    shortCut: '「拝」のつく語（拝見、拝聴、拝借）は、自分の動作に使う謙譲語です。',
    commonMistakes: '「お見えになる」は「見る」ではなく「来る」の敬語です。',
    targetSeconds: 15, tags: ['一般常識', '敬語'], figureData: null, sourceType: 'original'
  },
  {
    id: 'other-general-102', examType: 'other', category: 'general', subCategory: '国語',
    difficulty: 1, questionType: 'single',
    questionText: '四字熟語「試行錯誤」の意味として、最も適切なものはどれか。',
    choices: ['最初に決めた方針を、最後まで変えないこと', '周りの意見に流されて、自分の考えをもたないこと', 'いろいろ試して失敗を重ねながら、解決に近づくこと', '細かい違いはあっても、ほとんど同じであること'],
    correctAnswer: 2,
    explanation: '「試行」は試しに行うこと、「錯誤」はまちがいです。試してはまちがえることをくり返しながら、よい方法を見つけていくという意味です。',
    shortCut: '4字を2字ずつに分けて、それぞれの意味から考えます。',
    commonMistakes: 'ほかの選択肢は、それぞれ「初志貫徹」「付和雷同」「大同小異」の意味です。',
    targetSeconds: 15, tags: ['一般常識', '四字熟語'], figureData: null, sourceType: 'original'
  },
  {
    id: 'other-general-103', examType: 'other', category: 'general', subCategory: '社会',
    difficulty: 2, questionType: 'single',
    questionText: '日本国憲法が定める「国民の三大義務」に含まれないものはどれか。',
    choices: ['勤労の義務', '納税の義務', '子どもに普通教育を受けさせる義務', '選挙で投票する義務'],
    correctAnswer: 3,
    explanation: '国民の三大義務は、子どもに普通教育を受けさせる義務、勤労の義務、納税の義務です。選挙で投票することは権利であり、憲法上の義務ではありません。',
    shortCut: '「教育・勤労・納税」の3つを組で覚えます。',
    commonMistakes: '問われているのは「含まれないもの」です。義務に当たるものを選ばないようにします。',
    targetSeconds: 20, tags: ['一般常識', '政治'], figureData: null, sourceType: 'original'
  },
  {
    id: 'other-general-104', examType: 'other', category: 'general', subCategory: '理科',
    difficulty: 1, questionType: 'single',
    questionText: '水がこおって氷になるとき、体積はどうなるか。',
    choices: ['増える', '減る', '変わらない', '半分になる'],
    correctAnswer: 0,
    explanation: '水は、こおると体積が約1.1倍に増えます。重さは変わりません。水を入れた容器を凍らせるとふくらむのは、このためです。',
    shortCut: '「氷が水に浮く」ことと結びつけます。同じ重さで体積が大きいので、水より軽くなり浮きます。',
    commonMistakes: '多くの物質は、冷やして固体になると体積が減ります。水は例外です。',
    targetSeconds: 15, tags: ['一般常識', '理科'], figureData: null, sourceType: 'original'
  }
);

checkQuestions(QUESTIONS);

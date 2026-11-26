/* ==========================================================
   questions-5.js  追加の問題データ（英語）
   ・書き方は js/questions.js のテンプレートと同じです。
   すべて学習用の独自作成です。実際の試験問題は載せません。
   ========================================================== */

const Q5_PASSAGE_PARK = 'A small town built a new park near the station three years ago. At first, few people used it because there were no benches or trees. After the town planted trees and added benches last year, the number of visitors increased greatly.';
const Q5_PASSAGE_CAFETERIA = 'A university cafeteria started offering a vegetarian lunch set in April. The set costs 400 yen, which is 100 yen cheaper than the regular lunch set. In a survey taken in June, about 40 percent of the students said they had tried it at least once.';
const Q5_PASSAGE_SHUTTLE = 'A hotel runs a free shuttle bus between the hotel and the airport. The bus leaves the hotel every thirty minutes from 6 a.m. to 10 p.m. Guests who want to use it must make a reservation at the front desk by the day before.';
const Q5_PASSAGE_LANGUAGE = 'A language school offers evening classes for working adults. Each class has no more than eight students, so everyone has many chances to speak. Students who attend all the lessons in a term receive a ten percent discount on the fee for the next term.';
const Q5_PASSAGE_SOLAR = 'A town installed solar panels on the roofs of all its public schools five years ago. The panels now supply about 30 percent of the electricity the schools use. The town is considering installing panels on the city hall as well, but no decision has been made yet.';
const Q5_PASSAGE_BOOKCLUB = 'A company started a monthly book club for its employees last year. Members read the same book and discuss it during lunch on the last Friday of each month. Participation is voluntary, and about twenty employees join each meeting. The company pays for the books.';

const Q5_JUDGE_LEAD = '次の文は、本文の内容に照らしてどれに当たるか。\n';

QUESTIONS.push(
  /* ================= SPI3：英語 ================= */
  {
    id: 'spi3-english-201', examType: 'spi3', category: 'english', subCategory: '同意語',
    difficulty: 1, questionType: 'single',
    questionText: '"assist" と最も意味が近い語はどれか。',
    choices: ['help', 'hide', 'hurt', 'hold'],
    correctAnswer: 0,
    explanation: '"assist" は「手伝う、助ける」という意味で、"help" が最も近い語です。hide は「隠す」、hurt は「傷つける」、hold は「持つ」です。',
    shortCut: '名詞の "assistant（助手）" から、「助ける」という意味を思い出します。',
    commonMistakes: 'h で始まる短い語が並んでいます。つづりの見た目で選ばないようにします。',
    targetSeconds: 20, tags: ['英単語'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-english-202', examType: 'spi3', category: 'english', subCategory: '同意語',
    difficulty: 2, questionType: 'single',
    questionText: '"enormous" と最も意味が近い語はどれか。',
    choices: ['tiny', 'huge', 'narrow', 'ordinary'],
    correctAnswer: 1,
    explanation: '"enormous" は「非常に大きい」という意味で、"huge" が最も近い語です。tiny は「とても小さい」、narrow は「狭い」、ordinary は「ふつうの」です。',
    shortCut: '"an enormous building（巨大な建物）" のように、名詞と組にして覚えます。',
    commonMistakes: '大きさを表す語として、反対の意味の "tiny" を選ばないようにします。',
    targetSeconds: 20, tags: ['英単語'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-english-203', examType: 'spi3', category: 'english', subCategory: '同意語',
    difficulty: 1, questionType: 'single',
    questionText: '"select" と最も意味が近い語はどれか。',
    choices: ['refuse', 'collect', 'choose', 'deliver'],
    correctAnswer: 2,
    explanation: '"select" は「選ぶ」という意味で、"choose" が最も近い語です。refuse は「断る」、collect は「集める」、deliver は「届ける」です。',
    shortCut: '名詞の "selection（選ぶこと、品ぞろえ）" と結びつけて覚えます。',
    commonMistakes: 'つづりが似ている "collect" と取り違えないようにします。',
    targetSeconds: 20, tags: ['英単語'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-english-204', examType: 'spi3', category: 'english', subCategory: '同意語',
    difficulty: 2, questionType: 'single',
    questionText: '"accurate" と最も意味が近い語はどれか。',
    choices: ['recent', 'ancient', 'polite', 'correct'],
    correctAnswer: 3,
    explanation: '"accurate" は「正確な」という意味で、"correct" が最も近い語です。recent は「最近の」、ancient は「古代の」、polite は「礼儀正しい」です。',
    shortCut: '"accurate information（正確な情報）" の形で覚えます。',
    commonMistakes: '語の終わりが似ている "ancient" を選ばないようにします。',
    targetSeconds: 20, tags: ['英単語'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-english-205', examType: 'spi3', category: 'english', subCategory: '同意語',
    difficulty: 2, questionType: 'single',
    questionText: '"obtain" と最も意味が近い語はどれか。',
    choices: ['give', 'get', 'keep', 'lose'],
    correctAnswer: 1,
    explanation: '"obtain" は「手に入れる」という意味で、"get" が最も近い語です。give は「与える」、keep は「持ち続ける」、lose は「失う」です。',
    shortCut: '"obtain" は "get" のあらたまった言い方です。',
    commonMistakes: '"keep" は、すでに持っているものを持ち続ける意味です。新しく手に入れる意味はありません。',
    targetSeconds: 20, tags: ['英単語'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-english-206', examType: 'spi3', category: 'english', subCategory: '反意語',
    difficulty: 1, questionType: 'single',
    questionText: '"ancient" と反対の意味をもつ語はどれか。',
    choices: ['old', 'modern', 'historic', 'famous'],
    correctAnswer: 1,
    explanation: '"ancient" は「古代の、大昔の」、"modern" は「現代の」で反対の意味です。old と historic は似た意味、famous は「有名な」です。',
    shortCut: '"ancient city（古代都市）" と "modern city（現代の都市）" の組で覚えます。',
    commonMistakes: '似た意味の "old" や "historic" を選ばないようにします。',
    targetSeconds: 20, tags: ['英単語'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-english-207', examType: 'spi3', category: 'english', subCategory: '反意語',
    difficulty: 1, questionType: 'single',
    questionText: '"increase" と反対の意味をもつ語はどれか。',
    choices: ['decrease', 'improve', 'include', 'raise'],
    correctAnswer: 0,
    explanation: '"increase" は「増える、増やす」、"decrease" は「減る、減らす」で反対の意味です。raise は「上げる」で似た意味、improve は「改善する」、include は「含む」です。',
    shortCut: '"in-" と "de-" が対になっている語です。',
    commonMistakes: '"in" で始まる "include" を、つづりだけで選ばないようにします。',
    targetSeconds: 20, tags: ['英単語'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-english-208', examType: 'spi3', category: 'english', subCategory: '反意語',
    difficulty: 2, questionType: 'single',
    questionText: '"accept" と反対の意味をもつ語はどれか。',
    choices: ['receive', 'expect', 'agree', 'reject'],
    correctAnswer: 3,
    explanation: '"accept" は「受け入れる」、"reject" は「拒否する」で反対の意味です。receive は「受け取る」、agree は「同意する」で似た意味、expect は「予期する」です。',
    shortCut: '"accept an offer（申し出を受ける）" と "reject an offer（申し出を断る）" の組で覚えます。',
    commonMistakes: 'つづりが似ている "expect" を選ばないようにします。',
    targetSeconds: 20, tags: ['英単語'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-english-209', examType: 'spi3', category: 'english', subCategory: '反意語',
    difficulty: 3, questionType: 'single',
    questionText: '"generous" と反対の意味をもつ語はどれか。',
    choices: ['kind', 'wealthy', 'stingy', 'gentle'],
    correctAnswer: 2,
    explanation: '"generous" は「気前のよい」、"stingy" は「けちな」で反対の意味です。kind は「親切な」、wealthy は「裕福な」、gentle は「やさしい」です。',
    shortCut: '"generous" は、お金や物を惜しまず与える様子を表します。その反対を考えます。',
    commonMistakes: '"wealthy（裕福な）" は、お金を持っているかどうかを表す語で、気前のよさとは別です。',
    targetSeconds: 25, tags: ['英単語'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-english-210', examType: 'spi3', category: 'english', subCategory: '反意語',
    difficulty: 2, questionType: 'single',
    questionText: '"arrive" と反対の意味をもつ語はどれか。',
    choices: ['reach', 'return', 'depart', 'appear'],
    correctAnswer: 2,
    explanation: '"arrive" は「到着する」、"depart" は「出発する」で反対の意味です。reach は「着く」で似た意味、return は「戻る」、appear は「現れる」です。',
    shortCut: '空港の表示 "Arrivals（到着）" と "Departures（出発）" の組で覚えます。',
    commonMistakes: '似た意味の "reach" を選ばないようにします。',
    targetSeconds: 20, tags: ['英単語'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-english-211', examType: 'spi3', category: 'english', subCategory: '空欄補充',
    difficulty: 1, questionType: 'single',
    questionText: '空欄に入る最も適切な語はどれか。\n"She is good (   ) playing the piano."',
    choices: ['at', 'in', 'on', 'for'],
    correctAnswer: 0,
    explanation: '"be good at 〜" で「〜が得意だ」という意味です。「彼女はピアノを弾くのが得意だ」となります。',
    shortCut: '"be good at -ing" を1つのかたまりとして覚えます。',
    commonMistakes: '"be good for 〜" は「〜のためになる」という別の意味です。',
    targetSeconds: 20, tags: ['熟語', '前置詞'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-english-212', examType: 'spi3', category: 'english', subCategory: '空欄補充',
    difficulty: 2, questionType: 'single',
    questionText: '空欄に入る最も適切な語句はどれか。\n"If it (   ) tomorrow, we will cancel the picnic."',
    choices: ['will rain', 'rained', 'rains', 'raining'],
    correctAnswer: 2,
    explanation: '「もし〜なら」を表す if の中では、未来のことでも現在形を使います。主語が it なので "rains" です。',
    shortCut: '条件を表す if や、時を表す when の中では、will を使いません。',
    commonMistakes: '"tomorrow" があるので "will rain" を選びがちです。will は後半の文だけに使います。',
    targetSeconds: 25, tags: ['文法', '時制'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-english-213', examType: 'spi3', category: 'english', subCategory: '空欄補充',
    difficulty: 2, questionType: 'single',
    questionText: '空欄に入る最も適切な語はどれか。\n"This is the house (   ) my grandfather built."',
    choices: ['who', 'where', 'what', 'which'],
    correctAnswer: 3,
    explanation: '空欄の後ろの "built" には「何を建てたか」にあたる語がありません。その代わりになる関係代名詞 "which" が入ります。「これは祖父が建てた家だ」となります。',
    shortCut: '後ろの文に足りない語があれば which、足りない語がなければ where を考えます。',
    commonMistakes: '前が場所（house）なので "where" を選びがちです。"where" の後ろには、欠けたところのない文がきます。',
    targetSeconds: 30, tags: ['文法', '関係詞'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-english-214', examType: 'spi3', category: 'english', subCategory: '空欄補充',
    difficulty: 1, questionType: 'single',
    questionText: '空欄に入る最も適切な語はどれか。\n"He has (   ) finished his homework, so he can go out now."',
    choices: ['yet', 'already', 'ever', 'still'],
    correctAnswer: 1,
    explanation: '"already" は「すでに」という意味で、現在完了の肯定文で has と過去分詞の間に置きます。「彼はもう宿題を終えたので、出かけられる」となります。',
    shortCut: '肯定文なら already、否定文や疑問文なら yet、と使い分けます。',
    commonMistakes: '"yet" も「もう」と訳すことがありますが、肯定文のこの位置には置けません。',
    targetSeconds: 20, tags: ['文法', '現在完了'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-english-215', examType: 'spi3', category: 'english', subCategory: '空欄補充',
    difficulty: 2, questionType: 'single',
    questionText: '空欄に入る最も適切な語句はどれか。\n"The train was delayed (   ) the heavy snow."',
    choices: ['because', 'although', 'while', 'because of'],
    correctAnswer: 3,
    explanation: '空欄の後ろは "the heavy snow" という名詞のかたまりです。名詞の前に置いて理由を表せるのは "because of" です。',
    shortCut: '後ろが「主語＋動詞」の文なら because、名詞だけなら because of です。',
    commonMistakes: '"because" の後ろには、主語と動詞のある文が必要です。',
    targetSeconds: 25, tags: ['文法', '接続詞と前置詞'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-english-216', examType: 'spi3', category: 'english', subCategory: '英英辞典',
    difficulty: 1, questionType: 'single',
    questionText: '次の説明に最も合う語はどれか。\n"a doctor who takes care of people\'s teeth"',
    choices: ['dentist', 'surgeon', 'nurse', 'pharmacist'],
    correctAnswer: 0,
    explanation: '「人の歯の手当てをする医師」は "dentist（歯科医）" です。surgeon は外科医、nurse は看護師、pharmacist は薬剤師です。',
    shortCut: '説明文の中の具体的な語（ここでは teeth）に注目します。',
    commonMistakes: 'どれも医療の仕事です。"teeth（歯）" を読み落とさないようにします。',
    targetSeconds: 20, tags: ['英単語'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-english-217', examType: 'spi3', category: 'english', subCategory: '英英辞典',
    difficulty: 2, questionType: 'single',
    questionText: '次の説明に最も合う語はどれか。\n"money that people must pay to the government, based on their income or the things they buy"',
    choices: ['fare', 'fee', 'tax', 'tip'],
    correctAnswer: 2,
    explanation: '「収入や買い物に応じて、政府に払わなければならないお金」は "tax（税金）" です。fare は運賃、fee は料金や手数料、tip はチップです。',
    shortCut: '"to the government（政府に）" が決め手です。',
    commonMistakes: 'どれもお金を表す語です。「誰に払うか」で区別します。',
    targetSeconds: 25, tags: ['英単語'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-english-218', examType: 'spi3', category: 'english', subCategory: '英英辞典',
    difficulty: 2, questionType: 'single',
    questionText: '次の説明に最も合う語はどれか。\n"to make something smaller in size or amount"',
    choices: ['repeat', 'remove', 'recover', 'reduce'],
    correctAnswer: 3,
    explanation: '「大きさや量を小さくする」は "reduce（減らす）" です。repeat は「くり返す」、remove は「取り除く」、recover は「回復する」です。',
    shortCut: '説明文の "smaller（より小さく）" に注目します。',
    commonMistakes: '"remove" は、減らすのではなく、なくしてしまう意味です。',
    targetSeconds: 25, tags: ['英単語'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-english-219', examType: 'spi3', category: 'english', subCategory: '英英辞典',
    difficulty: 2, questionType: 'single',
    questionText: '次の説明に最も合う語はどれか。\n"a period of ten years"',
    choices: ['century', 'decade', 'season', 'generation'],
    correctAnswer: 1,
    explanation: '「10年間」は "decade" です。century は100年（世紀）、season は季節、generation は世代です。',
    shortCut: '期間を表す語は、年数と組にして覚えます（decade＝10年、century＝100年）。',
    commonMistakes: '"century（100年）" と取り違えないようにします。',
    targetSeconds: 20, tags: ['英単語'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-english-220', examType: 'spi3', category: 'english', subCategory: '誤文訂正',
    difficulty: 1, questionType: 'single',
    questionText: '次の文で、誤りを含む部分はどれか。\n"He (A) don\'t like (B) to eat vegetables, (C) but he likes (D) fruit very much."',
    choices: ['(A) don\'t like', '(B) to eat', '(C) but he likes', '(D) fruit'],
    correctAnswer: 0,
    explanation: '主語が "He" なので、否定の形は "doesn\'t like" になります。',
    shortCut: '最初に、主語と動詞の形が合っているかを確かめます。',
    commonMistakes: '後半の "he likes" は正しい形です。前半だけが誤っています。',
    targetSeconds: 30, tags: ['文法', '主語と動詞'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-english-221', examType: 'spi3', category: 'english', subCategory: '誤文訂正',
    difficulty: 2, questionType: 'single',
    questionText: '次の文で、誤りを含む部分はどれか。\n"There (A) is (B) a lot of useful (C) informations (D) on this website."',
    choices: ['(A) is', '(B) a lot of', '(C) informations', '(D) on this website'],
    correctAnswer: 2,
    explanation: '"information" は数えられない名詞なので、複数形の s をつけません。"a lot of useful information" が正しい形です。',
    shortCut: 'information、advice、furniture、news は、s をつけない名詞として覚えます。',
    commonMistakes: '"a lot of" は、数えられない名詞にも使えます。ここは誤りではありません。',
    targetSeconds: 35, tags: ['文法', '名詞'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-english-222', examType: 'spi3', category: 'english', subCategory: '誤文訂正',
    difficulty: 1, questionType: 'single',
    questionText: '次の文で、誤りを含む部分はどれか。\n"My sister (A) is (B) more taller (C) than (D) I was at her age."',
    choices: ['(A) is', '(B) more taller', '(C) than', '(D) I was'],
    correctAnswer: 1,
    explanation: '"tall" の比較級は "taller" です。"more" を重ねて使うことはできません。',
    shortCut: '短い形容詞は -er、長い形容詞は more をつけます。両方を同時には使いません。',
    commonMistakes: '"I was at her age（私が彼女の年齢だったとき）" は正しい表現です。',
    targetSeconds: 30, tags: ['文法', '比較'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-english-223', examType: 'spi3', category: 'english', subCategory: '和文英訳',
    difficulty: 2, questionType: 'single',
    questionText: '次の日本語の意味を最もよく表している英文はどれか。\n「私は彼に、窓を開けるように頼んだ。」',
    choices: ['I asked him open the window.', 'I asked to him to open the window.', 'I asked him opening the window.', 'I asked him to open the window.'],
    correctAnswer: 3,
    explanation: '「人に〜するように頼む」は "ask + 人 + to + 動詞の原形" の形で表します。',
    shortCut: 'ask、tell、want は「動詞 + 人 + to do」の形をとります。',
    commonMistakes: '"ask" のすぐ後ろに人を置きます。"ask to him" のように to は入れません。',
    targetSeconds: 35, tags: ['文法', '不定詞'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-english-224', examType: 'spi3', category: 'english', subCategory: '和文英訳',
    difficulty: 2, questionType: 'single',
    questionText: '次の日本語の意味を最もよく表している英文はどれか。\n「この本は、私には難しすぎて読めない。」',
    choices: ['This book is difficult enough for me to read.', 'This book is too difficult that I can read it.', 'This book is too difficult for me to read.', 'This book is not so difficult for me to read.'],
    correctAnswer: 2,
    explanation: '「〜すぎて…できない」は "too + 形容詞 + for 人 + to + 動詞の原形" の形で表します。',
    shortCut: '"too 〜 to …" には、否定の語がなくても「できない」という意味が含まれます。',
    commonMistakes: '"too 〜 that" という形はありません。that を使うときは "so 〜 that I can\'t …" になります。',
    targetSeconds: 40, tags: ['文法', '不定詞'], figureData: null, sourceType: 'original'
  },
  {
    id: 'spi3-english-225', examType: 'spi3', category: 'english', subCategory: '長文読解',
    difficulty: 2, questionType: 'single',
    passage: Q5_PASSAGE_PARK,
    questionText: 'Why did few people use the park at first?',
    choices: ['Because it had no benches or trees.', 'Because it was far from the station.', 'Because it was closed last year.', 'Because the town charged an entrance fee.'],
    correctAnswer: 0,
    explanation: '本文に "few people used it because there were no benches or trees"（ベンチも木もなかったので、利用する人が少なかった）とあります。公園は駅の近くにあり、休園や入場料については書かれていません。',
    shortCut: '設問の "at first" と同じ語句を本文から探し、その後ろの because を読みます。',
    commonMistakes: '本文に "near the station（駅の近く）" とあるので、「駅から遠い」は本文と逆です。',
    targetSeconds: 70, tags: ['読解'], figureData: null, sourceType: 'original'
  },

  /* ================= 玉手箱：英語 ================= */
  {
    id: 'tamatebako-english-201', examType: 'tamatebako', category: 'english', subCategory: '論理的読解',
    difficulty: 2, questionType: 'judge',
    passage: Q5_PASSAGE_CAFETERIA,
    questionText: Q5_JUDGE_LEAD + '"The regular lunch set costs 500 yen."',
    choices: JUDGE_CHOICES,
    correctAnswer: 0,
    explanation: '本文に、ベジタリアン用のセットは400円で、通常のセットより100円安いとあります。通常のセットは 400 + 100 = 500円です。',
    shortCut: '本文に直接書かれていなくても、数字を計算すれば分かる内容は「正しい」と判断できます。',
    commonMistakes: '500円という数字が本文にないため「判断できない」としないようにします。',
    targetSeconds: 40, tags: ['読解', '論理'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tamatebako-english-202', examType: 'tamatebako', category: 'english', subCategory: '論理的読解',
    difficulty: 2, questionType: 'judge',
    passage: Q5_PASSAGE_CAFETERIA,
    questionText: Q5_JUDGE_LEAD + '"In the June survey, more than half of the students said they had tried the vegetarian set."',
    choices: JUDGE_CHOICES,
    correctAnswer: 1,
    explanation: '本文では、試したことがあると答えた学生は約40%です。半数を超えていないので、誤りです。',
    shortCut: '"more than half" は50%より多いことを表します。本文の数字と比べます。',
    commonMistakes: '"at least once（少なくとも1回）" は回数の説明です。人数の割合は約40%のままです。',
    targetSeconds: 40, tags: ['読解', '論理'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tamatebako-english-203', examType: 'tamatebako', category: 'english', subCategory: '論理的読解',
    difficulty: 2, questionType: 'judge',
    passage: Q5_PASSAGE_CAFETERIA,
    questionText: Q5_JUDGE_LEAD + '"The vegetarian lunch set is the most popular item in the cafeteria."',
    choices: JUDGE_CHOICES,
    correctAnswer: 2,
    explanation: '本文は、ほかのメニューと人気を比べていません。最も人気があるかどうかは判断できません。',
    shortCut: '"the most" のような比較の表現は、本文に比べた結果が書かれているかを確かめます。',
    commonMistakes: '値段が安いことから、人気があるはずだと推測しないようにします。',
    targetSeconds: 40, tags: ['読解', '論理'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tamatebako-english-204', examType: 'tamatebako', category: 'english', subCategory: '論理的読解',
    difficulty: 1, questionType: 'judge',
    passage: Q5_PASSAGE_SHUTTLE,
    questionText: Q5_JUDGE_LEAD + '"Guests need to reserve the shuttle bus in advance."',
    choices: JUDGE_CHOICES,
    correctAnswer: 0,
    explanation: '本文に、利用したい宿泊客は前日までにフロントで予約しなければならない、とあります。',
    shortCut: '"in advance（前もって）" と、本文の "by the day before（前日までに）" が同じ内容です。',
    commonMistakes: '言い換えられた表現を、別の内容だと考えないようにします。',
    targetSeconds: 35, tags: ['読解', '論理'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tamatebako-english-205', examType: 'tamatebako', category: 'english', subCategory: '論理的読解',
    difficulty: 1, questionType: 'judge',
    passage: Q5_PASSAGE_SHUTTLE,
    questionText: Q5_JUDGE_LEAD + '"Guests have to pay to use the shuttle bus."',
    choices: JUDGE_CHOICES,
    correctAnswer: 1,
    explanation: '本文の最初に "a free shuttle bus（無料のシャトルバス）" とあります。料金は必要ないので、誤りです。',
    shortCut: '"free" には「無料の」という意味があります。',
    commonMistakes: '"must" という語が本文にありますが、必要なのは予約で、支払いではありません。',
    targetSeconds: 35, tags: ['読解', '論理'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tamatebako-english-206', examType: 'tamatebako', category: 'english', subCategory: '論理的読解',
    difficulty: 3, questionType: 'judge',
    passage: Q5_PASSAGE_SHUTTLE,
    questionText: Q5_JUDGE_LEAD + '"It takes about thirty minutes for the shuttle bus to get to the airport."',
    choices: JUDGE_CHOICES,
    correctAnswer: 2,
    explanation: '本文の「30分」は、バスが出発する間隔です。空港までにかかる時間は書かれていません。',
    shortCut: '同じ数字が出てきたら、何についての数字かを確かめます。',
    commonMistakes: '"every thirty minutes（30分ごと）" を、所要時間と読み違えないようにします。',
    targetSeconds: 40, tags: ['読解', '論理'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tamatebako-english-207', examType: 'tamatebako', category: 'english', subCategory: '長文読解（設問選択）',
    difficulty: 1, questionType: 'single',
    passage: Q5_PASSAGE_LANGUAGE,
    questionText: 'What is the largest number of students that a class can have?',
    choices: ['Six', 'Eight', 'Ten', 'Twelve'],
    correctAnswer: 1,
    explanation: '本文に "Each class has no more than eight students"（どのクラスも8人以下）とあります。',
    shortCut: '"no more than 〜" は「多くても〜」という意味です。',
    commonMistakes: '割引の説明に出てくる "ten percent" の ten と取り違えないようにします。',
    targetSeconds: 50, tags: ['読解'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tamatebako-english-208', examType: 'tamatebako', category: 'english', subCategory: '長文読解（設問選択）',
    difficulty: 2, questionType: 'single',
    passage: Q5_PASSAGE_LANGUAGE,
    questionText: 'How can students get a discount on the fee for the next term?',
    choices: ['By introducing a friend to the school.', 'By taking two classes at the same time.', 'By attending every lesson in a term.', 'By paying the fee early.'],
    correctAnswer: 2,
    explanation: '最後の文に、学期中のすべての授業に出席した生徒は、次の学期の料金が10%割引になる、とあります。',
    shortCut: '設問の "discount" を本文から探し、その前にある条件を読みます。',
    commonMistakes: '実際の学校でよくある割引（紹介、早期の支払い）でも、本文に書かれていなければ選べません。',
    targetSeconds: 50, tags: ['読解'], figureData: null, sourceType: 'original'
  },

  /* ================= GAB：英語 ================= */
  {
    id: 'gab-english-201', examType: 'gab', category: 'english', subCategory: '長文読解',
    difficulty: 1, questionType: 'judge',
    passage: Q5_PASSAGE_SOLAR,
    questionText: Q5_JUDGE_LEAD + '"The schools get all of their electricity from the solar panels."',
    choices: JUDGE_CHOICES,
    correctAnswer: 1,
    explanation: '本文では、太陽光パネルがまかなっているのは、学校で使う電気の約30%です。「すべて」ではないので、誤りです。',
    shortCut: '"all" や "every" などの語は、本文の数字と合っているかを確かめます。',
    commonMistakes: '"all its public schools（すべての公立学校）" の all は、設置した学校の範囲を表しています。',
    targetSeconds: 40, tags: ['読解', '論理'], figureData: null, sourceType: 'original'
  },
  {
    id: 'gab-english-202', examType: 'gab', category: 'english', subCategory: '長文読解',
    difficulty: 2, questionType: 'judge',
    passage: Q5_PASSAGE_SOLAR,
    questionText: Q5_JUDGE_LEAD + '"The town has not yet decided whether to install solar panels on the city hall."',
    choices: JUDGE_CHOICES,
    correctAnswer: 0,
    explanation: '本文に、市役所への設置を検討しているが、まだ決定はされていない、とあります。',
    shortCut: '本文の "no decision has been made yet" と同じ内容です。',
    commonMistakes: '"is considering（検討している）" は、決めたという意味ではありません。',
    targetSeconds: 40, tags: ['読解', '論理'], figureData: null, sourceType: 'original'
  },
  {
    id: 'gab-english-203', examType: 'gab', category: 'english', subCategory: '長文読解',
    difficulty: 3, questionType: 'judge',
    passage: Q5_PASSAGE_SOLAR,
    questionText: Q5_JUDGE_LEAD + '"The solar panels have cut the schools\' electricity costs by 30 percent."',
    choices: JUDGE_CHOICES,
    correctAnswer: 2,
    explanation: '本文の「約30%」は、使う電気の量のうちパネルがまかなう割合です。電気代がどれだけ減ったかは書かれていません。',
    shortCut: '同じ数字でも、「量」の話か「費用」の話かを区別します。',
    commonMistakes: '電気の30%をまかなうなら費用も30%減るはずだ、と推測しないようにします。設置や維持の費用は本文から分かりません。',
    targetSeconds: 45, tags: ['読解', '論理'], figureData: null, sourceType: 'original'
  },
  {
    id: 'gab-english-204', examType: 'gab', category: 'english', subCategory: '長文読解',
    difficulty: 1, questionType: 'judge',
    passage: Q5_PASSAGE_BOOKCLUB,
    questionText: Q5_JUDGE_LEAD + '"The book club meets once a month."',
    choices: JUDGE_CHOICES,
    correctAnswer: 0,
    explanation: '本文に "a monthly book club（月に1回の読書会）" とあり、毎月最後の金曜日に話し合うと書かれています。',
    shortCut: '"monthly" は「月に1回の」という意味です。',
    commonMistakes: '"once a month" と "monthly" が同じ内容だと気づかず、「判断できない」としないようにします。',
    targetSeconds: 35, tags: ['読解', '論理'], figureData: null, sourceType: 'original'
  },
  {
    id: 'gab-english-205', examType: 'gab', category: 'english', subCategory: '長文読解',
    difficulty: 1, questionType: 'judge',
    passage: Q5_PASSAGE_BOOKCLUB,
    questionText: Q5_JUDGE_LEAD + '"Members must buy the books with their own money."',
    choices: JUDGE_CHOICES,
    correctAnswer: 1,
    explanation: '本文の最後に "The company pays for the books（本の代金は会社が払う）" とあります。',
    shortCut: '「誰が払うか」を本文から探します。',
    commonMistakes: '参加が自由であることと、費用を誰が負担するかは別の話です。',
    targetSeconds: 35, tags: ['読解', '論理'], figureData: null, sourceType: 'original'
  },
  {
    id: 'gab-english-206', examType: 'gab', category: 'english', subCategory: '長文読解',
    difficulty: 2, questionType: 'judge',
    passage: Q5_PASSAGE_BOOKCLUB,
    questionText: Q5_JUDGE_LEAD + '"The book club has improved communication among the employees."',
    choices: JUDGE_CHOICES,
    correctAnswer: 2,
    explanation: '本文は、読書会の進め方と参加人数を述べているだけです。社員どうしの意思疎通がよくなったかどうかは書かれていません。',
    shortCut: '効果や結果についての文は、本文に根拠があるかを確かめます。',
    commonMistakes: '話し合いをしているのだから意思疎通もよくなったはずだ、と推測しないようにします。',
    targetSeconds: 40, tags: ['読解', '論理'], figureData: null, sourceType: 'original'
  },
  {
    id: 'gab-english-207', examType: 'gab', category: 'english', subCategory: '長文読解',
    difficulty: 2, questionType: 'judge',
    passage: Q5_PASSAGE_BOOKCLUB,
    questionText: Q5_JUDGE_LEAD + '"Every employee of the company is required to join the book club."',
    choices: JUDGE_CHOICES,
    correctAnswer: 1,
    explanation: '本文に "Participation is voluntary（参加は自由）" とあります。全員が参加しなければならないわけではないので、誤りです。',
    shortCut: '"voluntary（自由参加の）" と "required（必須の）" は反対の意味です。',
    commonMistakes: '"voluntary" の意味が分からないときは、「約20人が参加」という部分からも、全員ではないと判断できます。',
    targetSeconds: 40, tags: ['読解', '論理'], figureData: null, sourceType: 'original'
  },

  /* ================= TG-WEB：英語 ================= */
  {
    id: 'tgweb-english-201', examType: 'tgweb', category: 'english', subCategory: '空欄補充',
    difficulty: 2, questionType: 'single',
    questionText: '空欄に入る最も適切な語はどれか。\n"The report must be submitted (   ) the end of this week."',
    choices: ['until', 'by', 'since', 'during'],
    correctAnswer: 1,
    explanation: '「〜までに（期限）」は "by" で表します。「報告書は今週末までに提出しなければならない」となります。',
    shortCut: '1回で終わる動作の期限は by、ある時点まで続く動作は until を使います。',
    commonMistakes: '"until" も「〜まで」と訳しますが、「〜までずっと続ける」という意味です。提出は1回の動作なので使えません。',
    targetSeconds: 25, tags: ['文法', '前置詞'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-english-202', examType: 'tgweb', category: 'english', subCategory: '空欄補充',
    difficulty: 2, questionType: 'single',
    questionText: '空欄に入る最も適切な語はどれか。\n"Neither the manager (   ) the staff knew about the change."',
    choices: ['nor', 'or', 'and', 'but'],
    correctAnswer: 0,
    explanation: '"neither A nor B" で「AもBも〜ない」という意味です。「部長もスタッフも、その変更を知らなかった」となります。',
    shortCut: 'neither と nor、either と or、both と and は、組で覚えます。',
    commonMistakes: '"or" は "either" と組になる語です。',
    targetSeconds: 20, tags: ['文法', '相関接続詞'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-english-203', examType: 'tgweb', category: 'english', subCategory: '空欄補充',
    difficulty: 2, questionType: 'single',
    questionText: '空欄に入る最も適切な語はどれか。\n"The meeting room is large (   ) to hold fifty people."',
    choices: ['so', 'too', 'very', 'enough'],
    correctAnswer: 3,
    explanation: '"形容詞 + enough + to do" で「〜するのに十分…だ」という意味です。「その会議室は、50人が入れるほど広い」となります。',
    shortCut: '形容詞の「後ろ」に置けるのは enough だけです。',
    commonMistakes: 'so、too、very は、形容詞の前に置く語です。',
    targetSeconds: 20, tags: ['文法', '語順'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-english-204', examType: 'tgweb', category: 'english', subCategory: '空欄補充',
    difficulty: 3, questionType: 'single',
    questionText: '空欄に入る最も適切な語はどれか。\n"I would appreciate it (   ) you could reply by tomorrow."',
    choices: ['that', 'what', 'if', 'so'],
    correctAnswer: 2,
    explanation: '"I would appreciate it if you could 〜" は、「〜していただけるとありがたいです」という、ていねいな依頼の決まった言い方です。',
    shortCut: '仕事のメールでよく使う表現です。文ごと覚えます。',
    commonMistakes: '"appreciate it that" とは言いません。it の後ろは if で始めます。',
    targetSeconds: 25, tags: ['文法', '依頼の表現'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-english-205', examType: 'tgweb', category: 'english', subCategory: '言い換え',
    difficulty: 2, questionType: 'single',
    questionText: '次の文の "ran out of" と最も意味が近い語句はどれか。\n"We ran out of paper for the printer."',
    choices: ['used up', 'looked for', 'threw away', 'paid for'],
    correctAnswer: 0,
    explanation: '"run out of 〜" は「〜を使い果たす、〜が切れる」という意味です。"use up（使い切る）" が最も近い表現です。',
    shortCut: '"out" には「なくなって」という意味があります。',
    commonMistakes: '"threw away（捨てた）" も紙がなくなりますが、使ってなくなったという意味ではありません。',
    targetSeconds: 25, tags: ['熟語'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-english-206', examType: 'tgweb', category: 'english', subCategory: '言い換え',
    difficulty: 2, questionType: 'single',
    questionText: '次の文の "came up with" と最も意味が近い語句はどれか。\n"She came up with a new idea for the event."',
    choices: ['gave up', 'forgot', 'refused', 'thought of'],
    correctAnswer: 3,
    explanation: '"come up with 〜" は「〜を思いつく」という意味です。"think of（思いつく）" が最も近い表現です。',
    shortCut: '後ろに "idea"、"plan"、"solution" などがくることが多い表現です。',
    commonMistakes: '"up" を含む "gave up（あきらめた）" を選ばないようにします。',
    targetSeconds: 25, tags: ['熟語'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-english-207', examType: 'tgweb', category: 'english', subCategory: '言い換え',
    difficulty: 1, questionType: 'single',
    questionText: '次の文の "fill out" と最も意味が近い語はどれか。\n"Please fill out this form before your appointment."',
    choices: ['copy', 'return', 'complete', 'fold'],
    correctAnswer: 2,
    explanation: '"fill out a form" は「用紙に必要なことを記入する」という意味です。"complete a form" も同じ意味で使います。',
    shortCut: '"complete" には「完成させる」のほかに、「（用紙に）すべて記入する」という意味があります。',
    commonMistakes: '用紙に関係する動作でも、"return（返す）" は記入するという意味ではありません。',
    targetSeconds: 25, tags: ['熟語'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-english-208', examType: 'tgweb', category: 'english', subCategory: '短文読解',
    difficulty: 2, questionType: 'single',
    questionText: '次の英文の内容に合うものはどれか。\n"Passengers may bring one small bag on board, but larger bags must be checked in."',
    choices: [
      '乗客は、かばんを1つも機内に持ち込めない。',
      '乗客は、大きなかばんを1つだけ機内に持ち込める。',
      '乗客は、かばんをすべて預けなければならない。',
      '小さなかばんは1つ機内に持ち込めるが、大きなかばんは預けなければならない。'
    ],
    correctAnswer: 3,
    explanation: '前半は「小さなかばんを1つ持ち込んでよい」、後半は「大きなかばんは預けなければならない」という意味です。',
    shortCut: '"but" の前と後ろで、内容を2つに分けて読みます。',
    commonMistakes: '"may（〜してよい）" と "must（〜しなければならない）" を取り違えないようにします。',
    targetSeconds: 35, tags: ['読解'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-english-209', examType: 'tgweb', category: 'english', subCategory: '短文読解',
    difficulty: 2, questionType: 'single',
    questionText: '次の英文の内容に合うものはどれか。\n"The store will remain open during the renovation, though some sections will be closed."',
    choices: [
      '改装中も店は営業するが、一部の売り場は閉まる。',
      '改装が終わるまで、店は休業する。',
      '改装中は、すべての売り場が通常どおり営業する。',
      '改装が終わったあと、一部の売り場はなくなる。'
    ],
    correctAnswer: 0,
    explanation: '"remain open" は「営業を続ける」、"though" は「〜だけれども」という意味です。店は営業を続けますが、一部の売り場は閉まります。',
    shortCut: '"though" の後ろには、前半と反対の方向の内容がきます。',
    commonMistakes: '"closed" だけを見て、店全体が休業すると読まないようにします。閉まるのは "some sections（一部の売り場）" です。',
    targetSeconds: 35, tags: ['読解'], figureData: null, sourceType: 'original'
  },
  {
    id: 'tgweb-english-210', examType: 'tgweb', category: 'english', subCategory: '短文読解',
    difficulty: 3, questionType: 'single',
    questionText: '次の英文の内容に合うものはどれか。\n"Hardly anyone noticed the change in the schedule."',
    choices: [
      'ほとんどの人が、予定の変更に気づいた。',
      '予定の変更に気づいた人は、ほとんどいなかった。',
      '予定の変更に気づくのは、難しくなかった。',
      '予定は、ほとんど変更されなかった。'
    ],
    correctAnswer: 1,
    explanation: '"hardly anyone" は「ほとんど誰も〜ない」という否定の意味です。',
    shortCut: '"hardly" は "hard（難しい、熱心に）" とは別の語で、「ほとんど〜ない」を表します。',
    commonMistakes: '"hardly" を "hard" と同じ意味だと考えて、「難しい」と訳さないようにします。',
    targetSeconds: 30, tags: ['読解', '否定表現'], figureData: null, sourceType: 'original'
  }
);

checkQuestions(QUESTIONS);

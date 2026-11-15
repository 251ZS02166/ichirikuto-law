// 一陸特（第一級陸上特殊無線技士）「法規」問題データベース（全12問）
const LAW_QUESTIONS = [
  {
    id: "law-01",
    topic: "総則・電波法の目的",
    question: "電波法第1条に規定する「電波法の目的」として、正しいものはどれか。",
    choices: [
      { text: "電波の公平且つ能率的な利用を確保することによつて、公共の福祉を増進すること。", isCorrect: true },
      { text: "電波の独占的かつ迅速な利用を推進することによつて、電気通信事業の利益を増進すること。", isCorrect: false },
      { text: "無線設備の技術基準を統一することによつて、国際通信の安全のみを確保すること。", isCorrect: false },
      { text: "放送及び通信の自由を制限することによつて、電波の混信を完全に防止すること。", isCorrect: false }
    ],
    explanation: "電波法第1条は「この法律は、電波の公平且つ能率的な利用を確保することによつて、公共の福祉を増進することを目的とする。」と定めています。"
  },
  {
    id: "law-02",
    topic: "無線局の免許",
    question: "電波法に規定する陸上特殊無線技士が操作を行う一般的な陸上移動局（特定実験試験局等を除く）の免許の有効期間は、原則として何年か。",
    choices: [
      { text: "5年", isCorrect: true },
      { text: "3年", isCorrect: false },
      { text: "1年", isCorrect: false },
      { text: "10年", isCorrect: false }
    ],
    explanation: "電波法第13条により、無線局の免許の有効期間は原則として5年（放送局等は除く）と定められています。"
  },
  {
    id: "law-03",
    topic: "無線従事者の操作範囲",
    question: "電波法施行令に定める「第一級陸上特殊無線技士」の操作範囲に該当するものはどれか。",
    choices: [
      { text: "陸上の無線局の空中線電力500W以下の多重無線設備で30MHz以上の周波数の電波を使用するもの（放送局を除く）の技術操作", isCorrect: true },
      { text: "すべての無線局の無線設備の通信操作および技術操作", isCorrect: false },
      { text: "陸上の無線局の空中線電力10W以下の多重無線設備で30MHz以上の周波数の電波を使用するもののみの技術操作", isCorrect: false },
      { text: "船舶局および航空機局の無線設備のレーダーの技術操作", isCorrect: false }
    ],
    explanation: "一陸特は、陸上の無線局の空中線電力500W以下の多重無線設備（30MHz以上、放送局を除く）の技術操作などを行えます。なお、10W以下は第二級陸上特殊無線技士（二陸特）の操作範囲です。"
  },
  {
    id: "law-04",
    topic: "変更検査",
    question: "無線設備の変更の工事をした免許人は、原則として総務大臣の検査を受けた後でなければその無線設備を運用してはならないが、例外として変更検査を要しない場合はどれか。",
    choices: [
      { text: "総務省令で定める軽微な変更の工事をする場合", isCorrect: true },
      { text: "空中線電力を2倍に増加させる工事をする場合", isCorrect: false },
      { text: "新たな周波数の電波を追加する工事をする場合", isCorrect: false },
      { text: "送信装置の設置場所を別の都道府県へ移転する場合", isCorrect: false }
    ],
    explanation: "電波法第18条により、電波の質に影響を及ぼさない「総務省令で定める軽微な変更の工事」については、変更検査を受けずに運用することが認められています。"
  },
  {
    id: "law-05",
    topic: "免許証の携帯",
    question: "無線従事者が無線設備の操作を行う場合の「無線従事者免許証」の取扱いとして、電波法施行規則に照らし正しいものはどれか。",
    choices: [
      { text: "その業務に従事しているときは、免許証を携帯していなければならない。", isCorrect: true },
      { text: "送信装置のある場所の見やすい箇所に掲げておかなければならない。", isCorrect: false },
      { text: "無線業務日誌とともに主たる送信装置の近くに備え付けておかなければならない。", isCorrect: false },
      { text: "免許証の写し（コピー）を携帯していれば、原本を携帯する必要はない。", isCorrect: false }
    ],
    explanation: "無線従事者は業務に従事している間、無線従事者免許証（原本）を「携帯」しなければなりません（電波法施行規則第38条）。※見やすい箇所に掲げておくのは「無線局免許状」です。"
  },
  {
    id: "law-06",
    topic: "目的外通信の禁止",
    question: "無線局は、免許状に記載された目的または通信の相手方若しくは通信事項の範囲を超えて運用してはならないが、例外として運用が認められている通信に含まれないものはどれか。",
    choices: [
      { text: "免許人の日常的な社内業務連絡通信", isCorrect: true },
      { text: "遭難通信", isCorrect: false },
      { text: "緊急通信", isCorrect: false },
      { text: "非常通信", isCorrect: false }
    ],
    explanation: "電波法第52条により、遭難通信・緊急通信・安全通信・非常通信・放送の受信などは目的外通信の例外として認められていますが、日常の業務連絡通信は認められません。"
  },
  {
    id: "law-07",
    topic: "秘密の保護",
    question: "電波法第59条に規定する「無線通信の秘密の保護」に関する記述として、正しいものはどれか。",
    choices: [
      { text: "何人も法律に別段の定めがある場合を除くほか、特定の相手方に対して行われる無線通信を傍受してその存在若しくは内容を漏らし、又はこれを窃用してはならない。", isCorrect: true },
      { text: "無線従事者に限り、業務上知り得た無線通信の秘密を漏らしてはならないが、一般人には適用されない。", isCorrect: false },
      { text: "暗号化された無線通信であっても、個人で解読して内容を第三者に公表することは禁止されていない。", isCorrect: false },
      { text: "無線通信の秘密の保護は、無線従事者がその職を退いた後は適用されない。", isCorrect: false }
    ],
    explanation: "電波法第59条は「何人も（すべての人が）」対象であり、特定の相手方に対して行われる無線通信を傍受してその存在や内容を漏らしたり窃用したりすることを禁止しています。"
  },
  {
    id: "law-08",
    topic: "免許の承継",
    question: "無線局の免許人について「相続」があった場合、その相続人が免許人の地位を承継するための手続きとして正しいものはどれか。（放送局等を除く）",
    choices: [
      { text: "相続人は免許人の地位を承継し、遅滞なくその事実を証する書面を添えてその旨を総務大臣に届け出なければならない。", isCorrect: true },
      { text: "相続人はあらかじめ総務大臣の許可を受けなければ、免許人の地位を承継することができない。", isCorrect: false },
      { text: "相続があった時点で免許は自動的に失効するため、新たに免許の申請をしなければならない。", isCorrect: false },
      { text: "相続後1年以内に総務大臣の登録検査等事業者の点検を受けなければならない。", isCorrect: false }
    ],
    explanation: "電波法第20条により、相続の場合は「当然に承継し、遅滞なく総務大臣へ届出」を行います。なお、法人の合併や分割による承継の場合は「あらかじめ総務大臣の許可」が必要です。"
  },
  {
    id: "law-09",
    topic: "監督・電波の発射の停止",
    question: "総務大臣は、無線局が発射する電波の質が総務省令で定めるものに適合していないと認めるとき、どのような措置をとることができるか。",
    choices: [
      { text: "当該無線局に対して臨時に電波の発射の停止を命ずることができる。", isCorrect: true },
      { text: "直ちに当該無線局の免許を取り消さなければならない。", isCorrect: false },
      { text: "当該無線局の無線従事者に対し、直接罰金を科すことができる。", isCorrect: false },
      { text: "3年以内の期間を定めて、無線設備の没収を命ずることができる。", isCorrect: false }
    ],
    explanation: "電波法第72条第1項により、総務大臣は発射する電波の質が技術基準に適合していないと認めるとき、当該無線局に対して「臨時に電波の発射の停止」を命ずることができます。"
  },
  {
    id: "law-10",
    topic: "主任無線従事者",
    question: "電波法第39条に規定する「主任無線従事者」に関する記述として、誤っているものはどれか。",
    choices: [
      { text: "免許人は、主任無線従事者を選任しようとするときは、あらかじめ総務大臣の許可を受けなければならない。", isCorrect: false },
      { text: "免許人は、主任無線従事者を選任したときは、遅滞なくその旨を総務大臣に届け出なければならない。", isCorrect: true },
      { text: "主任無線従事者は、無線設備の操作の監督に関し総務省令で定める職務を誠実に行わなければならない。", isCorrect: true },
      { text: "主任無線従事者の監督を受けて行う無線設備の操作は、無線従事者でない者も行える場合がある。", isCorrect: true }
    ].map((c, idx) => idx === 0 ? { text: "免許人は、主任無線従事者を選任しようとするときは、あらかじめ総務大臣の許可を受けなければならない。", isCorrect: true } : { text: c.text, isCorrect: false }),
    explanation: "主任無線従事者の選任・解任は事前許可制ではなく、「選任（または解任）したときに遅滞なく総務大臣に届け出る」制度です（電波法第39条第4項）。"
  },
  {
    id: "law-11",
    topic: "無線局の廃止",
    question: "免許人が無線局を廃止するときにとるべき手続きと、免許の効力に関する記述として正しいものはどれか。",
    choices: [
      { text: "その旨を総務大臣に届け出なければならず、無線局を廃止したときは免許はその効力を失う。", isCorrect: true },
      { text: "あらかじめ総務大臣の許可を受けなければならず、許可の日から1か月後に免許は効力を失う。", isCorrect: false },
      { text: "廃止後1年以内に届け出ればよく、免許の有効期間が満了するまでは免許の効力は存続する。", isCorrect: false },
      { text: "無線設備を撤去すれば届出は不要であり、届出がない限り免許は効力を失わない。", isCorrect: false }
    ],
    explanation: "電波法第22条および第23条により、免許人が無線局を廃止するときはその旨を総務大臣に届け出なければならず、無線局を廃止したときは免許はその効力を失います。"
  },
  {
    id: "law-12",
    topic: "書類の備付け・掲示",
    question: "無線局に備え付けておかなければならない書類等に関する記述として、電波法施行規則に照らし正しいものはどれか。",
    choices: [
      { text: "免許状は、主たる送信装置のある場所の見やすい箇所に掲げておかなければならない。（掲示を困難とするもの等を除く）", isCorrect: true },
      { text: "無線従事者免許証は、常に無線局の送信装置の横に貼り付けておかなければならない。", isCorrect: false },
      { text: "免許の申請書の添付書類の写しは、すべて廃棄しなければならない。", isCorrect: false },
      { text: "陸上移動局であっても、必ず無線業務日誌を毎日作成して5年間保存しなければならない。", isCorrect: false }
    ],
    explanation: "電波法施行規則第38条により、無線局免許状は「主たる送信装置のある場所の見やすい箇所に掲げておく」ことが原則です（陸上移動局など掲示が困難な場合は送信装置のある場所に備え付けます）。"
  }
];

// 状態管理
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let isAnswered = false;
let lastMode = "exam";

// 苦手問題IDをlocalStorageから取得・保存
function getWeakIds() {
  return JSON.parse(localStorage.getItem("ichirikuto_law_weak_ids")) || [];
}

function saveWeakIds(ids) {
  localStorage.setItem("ichirikuto_law_weak_ids", JSON.stringify([...new Set(ids)]));
  updateWeakCount();
}

function updateWeakCount() {
  const count = getWeakIds().length;
  document.getElementById("weak-count").textContent = count;
  document.getElementById("weak-mode-btn").disabled = count === 0;
}

// 配列シャッフル（フィッシャー–イェーツ）
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// DOM要素
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

// クイズ開始
function startQuiz(mode) {
  lastMode = mode;
  let selected = [];

  if (mode === "exam") {
    selected = shuffleArray(LAW_QUESTIONS);
  } else if (mode === "quick") {
    selected = shuffleArray(LAW_QUESTIONS).slice(0, 5);
  } else if (mode === "weak") {
    const weakIds = getWeakIds();
    selected = shuffleArray(LAW_QUESTIONS.filter((q) => weakIds.includes(q.id)));
  }

  if (selected.length === 0) return;

  // 選択肢もランダムにシャッフル
  currentQuestions = selected.map((q) => ({
    ...q,
    shuffledChoices: shuffleArray(q.choices)
  }));

  currentIndex = 0;
  score = 0;

  startScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  renderQuestion();
}

// 問題描画
function renderQuestion() {
  isAnswered = false;
  const q = currentQuestions[currentIndex];
  const total = currentQuestions.length;

  document.getElementById("topic-tag").textContent = q.topic;
  document.getElementById("progress-text").textContent = `第 ${currentIndex + 1} 問 / 全 ${total} 問`;
  document.getElementById("progress-bar-fill").style.width = `${(currentIndex / total) * 100}%`;
  document.getElementById("question-text").textContent = q.question;

  const choicesContainer = document.getElementById("choices-container");
  choicesContainer.innerHTML = "";

  q.shuffledChoices.forEach((choice, idx) => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.innerHTML = `<span class="choice-num">${idx + 1}</span><span>${choice.text}</span>`;
    btn.addEventListener("click", () => selectAnswer(idx));
    choicesContainer.appendChild(btn);
  });

  document.getElementById("explanation-box").classList.add("hidden");
}

// 回答判定
function selectAnswer(selectedIndex) {
  if (isAnswered) return;
  isAnswered = true;

  const q = currentQuestions[currentIndex];
  const choiceBtns = document.querySelectorAll(".choice-btn");
  const selectedChoice = q.shuffledChoices[selectedIndex];
  let weakIds = getWeakIds();

  choiceBtns.forEach((btn, idx) => {
    btn.disabled = true;
    if (q.shuffledChoices[idx].isCorrect) {
      btn.classList.add("correct");
    } else if (idx === selectedIndex) {
      btn.classList.add("wrong");
    }
  });

  const judgeBanner = document.getElementById("judge-banner");
  if (selectedChoice.isCorrect) {
    score++;
    judgeBanner.textContent = "⭕ 正解！";
    judgeBanner.className = "judge-banner ok";
    weakIds = weakIds.filter((id) => id !== q.id);
  } else {
    judgeBanner.textContent = "❌ 不正解…";
    judgeBanner.className = "judge-banner ng";
    weakIds.push(q.id);
  }
  saveWeakIds(weakIds);

  document.getElementById("explanation-text").textContent = q.explanation;
  const nextBtn = document.getElementById("next-btn");
  nextBtn.textContent = currentIndex + 1 < currentQuestions.length ? "次の問題へ →" : "結果を見る →";
  document.getElementById("explanation-box").classList.remove("hidden");
}

// 次の問題 or 結果表示
function handleNext() {
  currentIndex++;
  if (currentIndex < currentQuestions.length) {
    renderQuestion();
  } else {
    showResult();
  }
}

// 結果画面表示（本試験基準：12問中8問＝約66.7%以上で合格判定）
function showResult() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  const total = currentQuestions.length;
  const percent = Math.round((score / total) * 100);
  const passingScore = Math.ceil(total * (8 / 12));

  document.getElementById("score-percent").textContent = `${percent}%`;
  document.getElementById("score-detail").textContent = `${score} / ${total} 問正解`;

  const passJudge = document.getElementById("pass-judge");
  const resultComment = document.getElementById("result-comment");

  if (score >= passingScore) {
    passJudge.textContent = `🎉 合格ライン突破！（基準：${passingScore}問以上正解）`;
    passJudge.className = "pass-judge passed";
    resultComment.textContent = "素晴らしい成績です！一陸特「法規」の本試験でも十分合格できる知識が身についています。";
  } else {
    passJudge.textContent = `🔥 あと少し！（合格基準：${passingScore}問以上正解）`;
    passJudge.className = "pass-judge failed";
    resultComment.textContent = "間違えた問題は「苦手問題を復習する」モードに自動登録されました。条文のポイントを確認して再挑戦しましょう！";
  }
}

// イベント登録
document.querySelectorAll(".mode-btn").forEach((btn) => {
  btn.addEventListener("click", () => startQuiz(btn.dataset.mode));
});

document.getElementById("next-btn").addEventListener("click", handleNext);
document.getElementById("retry-btn").addEventListener("click", () => startQuiz(lastMode));
document.getElementById("home-btn").addEventListener("click", () => {
  resultScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
  updateWeakCount();
});

// キーボードショートカット
document.addEventListener("keydown", (e) => {
  if (quizScreen.classList.contains("hidden")) return;

  if (!isAnswered && ["1", "2", "3", "4"].includes(e.key)) {
    const idx = parseInt(e.key, 10) - 1;
    if (idx < currentQuestions[currentIndex].shuffledChoices.length) {
      selectAnswer(idx);
    }
  } else if (isAnswered && e.key === "Enter") {
    handleNext();
  }
});

// 初期化
updateWeakCount();
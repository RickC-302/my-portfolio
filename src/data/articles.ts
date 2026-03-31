export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  tag: 'Design' | 'Life' | 'Nature' | 'Tech';
  date: string;
}

export const articles: Article[] = [
  {
    id: 'forest-quiet',
    title: '森林裡的安靜時刻',
    excerpt: '在芬蘭的森林中，我學會了如何與孤獨相處。這種安靜轉化成了我在編程時的專注力。',
    content: `
      <p>在芬蘭的森林中，我學會了如何與孤獨相處。這種安靜轉化成了我在編程時的專注力。</p>
      <p>當你置身於無邊無際的綠意中，風聲穿過松針的沙沙聲是唯一的背景音樂。在這種環境下，大腦會自動過濾掉那些無關緊要的雜訊，進入一種近乎冥想的狀態。</p>
      <p>這種狀態與編程中的「Flow」極其相似。當我回到電腦前，我發現自己能更輕易地進入那種深度工作的狀態，將複雜的邏輯結構化，就像森林裡的樹木，雖然茂密卻各有其位。</p>
      <img src="https://picsum.photos/seed/sisu1/1200/800" alt="Forest" />
      <p>安靜不是缺失，而是一種充滿力量的存在。</p>
    `,
    image: 'https://picsum.photos/seed/sisu1/800/600',
    tag: 'Nature',
    date: '2026-03-15'
  },
  {
    id: 'minimalist-aesthetic',
    title: '極簡主義的代碼美學',
    excerpt: '少即是多。不僅在建築中如此，在軟體架構中，簡潔往往意味著更高的穩固性。',
    content: `
      <p>少即是多。不僅在建築中如此，在軟體架構中，簡潔往往意味著更高的穩固性。</p>
      <p>極簡主義並非簡單地刪減，而是精確地保留。在代碼中，這意味著清晰的命名、單一職責的函數，以及避免過度設計。</p>
      <p>當我們試圖用最少的代碼解決最複雜的問題時，我們實際上是在追求一種優雅。這種優雅不僅讓代碼易於維護，更讓後來的開發者能一眼看穿邏輯的本質。</p>
      <img src="https://picsum.photos/seed/sisu2/1200/800" alt="Architecture" />
      <p>好的設計是看不見的，它只是在那裡，完美地運作著。</p>
    `,
    image: 'https://picsum.photos/seed/sisu2/800/600',
    tag: 'Design',
    date: '2026-03-10'
  },
  {
    id: 'morning-ritual',
    title: '早晨的儀式感',
    excerpt: '一杯手沖咖啡，一份當日的待辦清單。這是開啟高效開發日的必備儀式。',
    content: `
      <p>一杯手沖咖啡，一份當日的待辦清單。這是開啟高效開發日的必備儀式。</p>
      <p>儀式感是為了給大腦一個信號：工作時間開始了。當熱水的香氣與咖啡豆的研磨聲交織，我的思維也隨之甦醒。</p>
      <p>在清單上寫下今日最重要的三個目標，這不僅是為了管理時間，更是為了管理精力。在技術的世界裡，我們很容易迷失在無盡的細節中，而早晨的這份清醒，是導航塔。</p>
      <img src="https://picsum.photos/seed/sisu3/1200/800" alt="Coffee" />
      <p>節奏感比速度更重要。</p>
    `,
    image: 'https://picsum.photos/seed/sisu3/800/600',
    tag: 'Life',
    date: '2026-03-05'
  }
];

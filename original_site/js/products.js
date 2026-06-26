const PRODUCTS = [

  {
    id: 1,
    slug: 'banka-fuffu',
    category: 'body',
    nameCs: 'Baňka FUFFU BYELMARIE®',
    nameEn: 'FUFFU Cup BYELMARIE®',
    priceCZK: 1190,
    priceMax: 3490,
    hasVariants: true,
    variants: [
      { id: 'S', nameCs: 'S', nameEn: 'S', priceCZK: 1190 },
      { id: 'M', nameCs: 'M', nameEn: 'M', priceCZK: 1290 },
      { id: 'L', nameCs: 'L', nameEn: 'L', priceCZK: 1390 },
      { id: 'SET', nameCs: 'SET – S, M, L', nameEn: 'SET – S, M, L', priceCZK: 3490 },
    ],
    image: 'https://cdn.myshoptet.com/usr/www.byelmarie.com/user/shop/big/54_1763284028-5ca53abe-59d8-4d98-bfe3-d6b23e7a2113.png?691994cf',
    images: [
      'https://cdn.myshoptet.com/usr/www.byelmarie.com/user/shop/big/54_1763284028-5ca53abe-59d8-4d98-bfe3-d6b23e7a2113.png?691994cf',
      'https://cdn.myshoptet.com/usr/www.byelmarie.com/user/shop/big/54-1_1763285208-6ab673f9-0060-4a1a-bcb0-dccf09169155.png?6919995a'
    ],
    inStock: true,
    badgeCs: 'Bestseller',
    badgeEn: 'Bestseller',
    shortDescCs: [
      'Podporuje krevní oběh a stimuluje lymfu',
      'Pomáhá s celulitidou a vyhlazením pokožky',
      'Uvolňuje napjaté svaly, fascie a ulevuje od bolesti',
      'Formuje postavu',
      'Výborný doplněk při hubnutí',
    ],
    shortDescEn: [
      'Supports blood circulation and stimulates lymph',
      'Helps with cellulite and skin smoothing',
      'Releases tense muscles, fascia and relieves pain',
      'Shapes the figure',
      'Excellent complement to weight loss',
    ],
    descCs: `
<p><strong>SKLENĚNÁ MASÁŽNÍ BAŇKA S REGULACÍ PODTLAKU</strong></p>
<p>Speciálně navržená baňka FUFFU se skládá ze silikonového balonku (pumpičky), který reguluje podtlak díky dvěma ventilkům, a skleněné baňky z certifikovaného českého skla. Její specifický tvar navíc zajišťuje velmi dobrou přilnavost a účinné nasátí.</p>
<p>Ventilky v balonku mají za úkol tkáň precizně a přitom jednoduše nasát a dle potřeb podtlak během procedury různě regulovat bez toho, aniž byste baňku opakovaně odsávali z kůže. Manipulace je jednoduchá a z letitých osobních zkušeností také mnohem efektivnější než u jiných materiálů.</p>
<h4>Hlavní výhody a účinky:</h4>
<ul>
  <li><strong>Regulace podtlaku</strong> – baňku můžete kdykoliv znovu připumpovat přímo během ošetření.</li>
  <li><strong>České sklo nejvyšší kvality</strong> – pevné, dostatečně tlusté, udržuje stálý tvar a snadno se čistí.</li>
  <li><strong>Úleva od bolesti</strong> – uvolňuje natažené svaly, fascie, bolestivost zad, šíje a kloubů.</li>
  <li><strong>Redukce celulitidy a strií</strong> – pohybem do všech stran podtlak odvádí přebytečné tekutiny a toxiny, uvolňuje srůsty a vyhlazuje pokožku.</li>
  <li><strong>Podpora lymfatického systému</strong> – stimuluje krevní oběh a přirozeně detoxikuje organismus.</li>
</ul>
<h4>Dostupné velikosti:</h4>
<ul>
  <li><strong>S (1 190 Kč)</strong> – menší baňka ideální pro cílené a citlivé partie (paže, dekolt, obličej).</li>
  <li><strong>M (1 290 Kč)</strong> – univerzální velikost pro většinu partií těla.</li>
  <li><strong>L (1 390 Kč)</strong> – velká baňka pro rozsáhlé partie (stehna, hýždě, záda).</li>
  <li><strong>SET S+M+L (3 490 Kč)</strong> – kompletní sada za výhodnou cenu pro komplexní péči.</li>
</ul>
<p><strong>Jak na domácí baňkování:</strong> Před ošetřením je důležité otevřít lymfu. Doporučujeme kombinovat s válečky CELSLIMROLL pro maximální synergický efekt při formování a zpevnění těla.</p>`,
    descEn: `
<p><strong>GLASS MASSAGE CUP WITH VACUUM CONTROL</strong></p>
<p>The specially designed FUFFU cup consists of a silicone bulb (pump) that regulates suction via two valves, and a glass cup made of certified Czech glass. Its specific shape ensures excellent adhesion and effective suction.</p>
<p>The valves in the bulb allow you to precisely and easily suction the tissue and adjust the vacuum as needed during the procedure, without repeatedly removing the cup from the skin.</p>
<h4>Main Benefits & Effects:</h4>
<ul>
  <li><strong>Vacuum Regulation</strong> – re-pump the bulb at any time during treatment.</li>
  <li><strong>Top Quality Czech Glass</strong> – strong, thick, holds its shape, easy to sanitize.</li>
  <li><strong>Pain & Muscle Relief</strong> – releases tense muscles, fascia, back and joint pain.</li>
  <li><strong>Cellulite Reduction</strong> – sweeps away excess fluids and toxins, smoothing out skin texture.</li>
  <li><strong>Lymphatic Support</strong> – stimulates blood flow and naturally detoxifies the body.</li>
</ul>
<h4>Available Sizes:</h4>
<ul>
  <li><strong>S</strong> – smaller cup ideal for targeted areas (arms, décolleté, face).</li>
  <li><strong>M</strong> – universal size for most body areas.</li>
  <li><strong>L</strong> – large cup for extensive areas (legs, buttocks, back).</li>
  <li><strong>SET S+M+L</strong> – complete set at a discounted price for comprehensive care.</li>
</ul>`,
  },
  {
    id: 2,
    slug: 'oblicejove-banky',
    category: 'body',
    nameCs: 'Baňky na obličej / Face Cupping',
    nameEn: 'Face Cupping Cups',
    priceCZK: 590,
    priceMax: 1190,
    hasVariants: true,
    variants: [
      { id: 'Mini', nameCs: 'Mini', nameEn: 'Mini', priceCZK: 590 },
      { id: 'Regular', nameCs: 'Regular', nameEn: 'Regular', priceCZK: 690 },
      { id: 'SET', nameCs: 'SET (Mini + Regular)', nameEn: 'SET (Mini + Regular)', priceCZK: 1190 },
    ],
    image: 'https://cdn.myshoptet.com/usr/www.byelmarie.com/user/shop/big/63_1763283684-00b55450-be92-42d4-910e-98a6833bf1ef.png?69199340',
    images: [
      'https://cdn.myshoptet.com/usr/www.byelmarie.com/user/shop/big/63_1763283684-00b55450-be92-42d4-910e-98a6833bf1ef.png?69199340',
    ],
    inStock: true,
    badgeCs: null,
    badgeEn: null,
    shortDescCs: [
      'Vyhlazují jemné linky, vrásky a jizvy',
      'Rozjasňují pleť a zlepšují její texturu',
      'Uvolňují napětí obličejových svalů',
      'Redukují otoky a pomáhají formovat kontury',
      'Mini baňka ideální pro oční okolí a rty',
    ],
    shortDescEn: [
      'Smooth fine lines, wrinkles and scars',
      'Brighten skin and improve texture',
      'Release facial muscle tension',
      'Reduce puffiness and help define contours',
      'Mini cup ideal for eye area and lips',
    ],
    descCs: `
<p>Baňky na obličej BYELMARIE® jsou skvělým nástrojem pro <strong>podtlakovou masáž</strong> obličeje a dekoltu, která efektivně podporuje <strong>lymfatický tok</strong>, zlepšuje pružnost pokožky a pomáhá redukovat jemné linky a vrásky.</p>
<p>Obličejové baňkování stimuluje krevní oběh, díky čemuž <strong>pleť získává svěží vzhled</strong> a lepší hydrataci. Pravidelným používáním dosáhnete <strong>pevnějších kontur obličeje, snížení otoků a vyhlazení drobných vrásek</strong> – zcela přirozeně, bez invazivních zásahů.</p>
<h4>Jak používat baňky na obličej?</h4>
<ol>
  <li><strong>Příprava pleti:</strong> Naneste obličejový olej, který zajistí snadné klouzání baněk po pokožce a podpoří účinek masáže.</li>
  <li><strong>Otevření lymfatického toku:</strong> Před baňkováním jemně promasírujte oblast krku a klíční kosti, aby se aktivoval lymfatický systém.</li>
  <li><strong>Vytvoření podtlaku:</strong> Baňku lehce zmáčkněte, přiložte na pleť a pomalu uvolněte.</li>
  <li><strong>Techniky baňkování:</strong>
    <ul>
      <li>Dynamické baňkování – posouvejte baňku směrem ven a nahoru pro liftingový efekt.</li>
      <li>Pumpovací technika – jemně přisajte, podržte a uvolněte pro hloubkovou stimulaci.</li>
    </ul>
    <p>‼ Baňkou neustále pohybujte, aby nevznikly otisky (cucfleky).</p>
  </li>
  <li><strong>Dokončení masáže:</strong> Masáž zakončete několika lymfatickými tahy směrem dolů ke klíčním kostem.</li>
</ol>
<h4>Dostupné varianty:</h4>
<ul>
  <li><strong>Mini (590 Kč)</strong> – malá baňka ideální pro citlivé oblasti, jako je oční okolí, rty či jemné mimické vrásky.</li>
  <li><strong>Regular (690 Kč)</strong> – univerzální velikost pro líčka, čelo, čelist a dekolt.</li>
  <li><strong>SET Mini + Regular (1 190 Kč)</strong> – kompletní duo pro dokonalou péči o obličej.</li>
</ul>
<p><em>Upozornění: Baňkování se nedoporučuje při aktivním akné, rosacee, ekzémech, čerstvých jizvách nebo podrážděné pleti. Není vhodné ihned po botoxu nebo dermálních výplních.</em></p>`,
    descEn: `
<p>Face cups BYELMARIE® are excellent tools for <strong>vacuum massage</strong> of the face and décolleté, stimulating <strong>lymph flow</strong>, improving skin elasticity, and helping reduce fine lines.</p>
<p><strong>Facial cupping</strong> stimulates blood circulation, giving skin a <strong>fresh, radiant appearance</strong> and better hydration. With regular use, you achieve <strong>firmer facial contours, reduced puffiness, and smoother fine lines</strong> – completely naturally.</p>
<h4>Available Variants:</h4>
<ul>
  <li><strong>Mini</strong> – smaller cup ideal for targeted sensitive areas (eye contour, lips, fine lines).</li>
  <li><strong>Regular</strong> – universal size for cheeks, forehead, jawline, and neck.</li>
  <li><strong>SET Mini + Regular</strong> – complete duo for total facial rejuvenation.</li>
</ul>`,
  },
  {
    id: 3,
    slug: 'serum-na-rasy',
    category: 'body',
    nameCs: 'Sérum na růst řas',
    nameEn: 'Lash Growth Serum',
    priceCZK: 1090,
    hasVariants: false,
    variants: [],
    image: 'https://cdn.myshoptet.com/usr/www.byelmarie.com/user/shop/big/66_1763282436-1f9d7469-5ea7-40cf-843e-9cef02e797bc.png?69198e37',
    images: [
      'https://cdn.myshoptet.com/usr/www.byelmarie.com/user/shop/big/66_1763282436-1f9d7469-5ea7-40cf-843e-9cef02e797bc.png?69198e37',
    ],
    inStock: true,
    badgeCs: 'Novinka',
    badgeEn: 'New',
    shortDescCs: [
      'Přirozený růst řas – delší, hustší a silnější řasy již po 2 týdnech',
      'Zvýraznění barvy řas – působí tmavší i bez řasenky',
      'Bez oleje – bezpečné i pro prodloužené řasy',
      'Veganské složení – bez živočišných složek, netestováno na zvířatech',
      'Vhodné i pro citlivé oči',
    ],
    shortDescEn: [
      'Natural lash growth – longer, denser and stronger lashes in 2 weeks',
      'Enhanced lash colour – darker appearance even without mascara',
      'Oil-free – safe even for lash extensions',
      'Vegan formula – no animal ingredients, not tested on animals',
      'Suitable for sensitive eyes',
    ],
    descCs: `
<p>Toužíte po <strong>delších, hustších a tmavších řasách</strong> bez nutnosti umělého prodloužení? <strong>Přírodní sérum na řasy BYELMARIE</strong> podporuje <strong>přirozený růst řas</strong> a posiluje jejich strukturu přímo u kořínků díky pečlivě vybraným složkám: peptidům, kolagenu, biotinu a rostlinným extraktům.</p>
<p>Tyto aktivní látky pronikají přímo k řasovým kořínkům, kde stimulují vlasové folikuly a prodlužují růstovou fázi řas. Výsledkem jsou <strong>silnější, hustší a zdravější řasy</strong>, které působí přirozeně výrazněji – i bez řasenky. Sérum také hydratuje a regeneruje jemné řasové struktury, čímž zajišťuje pružnost a odolnost proti lámání.</p>
<p>Na rozdíl od jiných sér na trhu je sérum BYELMARIE plné přírodních složek <strong>bez přidaných hormonů</strong>. Pravidelným používáním se první viditelné výsledky dostaví již po <strong>2 týdnech</strong>!</p>
<p>Objem: <strong>3 ml</strong></p>
<h4>Použití a aplikace:</h4>
<ol>
  <li>Před aplikací důkladně setřete přebytečnou tekutinu z aplikátoru o hranu nádoby.</li>
  <li>Malé množství séra naneste přímo ke kořínkům horních a dolních řas – <strong>neaplikujte sérum na samotné řasy</strong>.</li>
  <li>Používejte ráno nebo večer na odlíčená a suchá víčka. Po vstřebání je možné ihned nanést make-up.</li>
  <li>Dbejte na hygienu – špička lahvičky ani aplikátor by se neměly dotýkat jiných povrchů, prstů či okolních předmětů.</li>
  <li>Pokud nosíte kontaktní čočky, vyjměte je před aplikací séra a znovu nasaďte nejdříve 15 minut po použití.</li>
</ol>
<h4>Složení:</h4>
<p>Aqua, Hyaluronate, Pentylene Glycol, Panax Ginseng Extract, Swertia Japonica Extract, Pumpkin Seed Extract, Acorus Calamus Root Extract, Panthenol, Seromoa Serrulata Fruit Extract, Biotinoyl Tripeptide-1, Myristoyl Pentapeptide-17, Oligopeptide-10, Tocopherol, Biotin</p>`,
    descEn: `
<p>Do you long for <strong>longer, denser and darker lashes</strong> without artificial extensions? The <strong>BYELMARIE Lash Growth Serum</strong> supports <strong>natural lash growth</strong> and strengthens lash structure thanks to carefully selected ingredients including peptides, collagen, biotin and plant extracts.</p>
<p>The active substances penetrate directly to the roots, stimulating follicles and extending the growth phase. The result is <strong>stronger, thicker and healthier lashes</strong> that look naturally defined even without mascara.</p>
<p>Unlike many other growth serums, BYELMARIE is packed with natural ingredients <strong>without any added hormones</strong>. First visible results appear after just <strong>2 weeks</strong>!</p>
<p>Volume: <strong>3 ml</strong></p>
<h4>Application:</h4>
<ul>
  <li>Wipe off excess liquid from the applicator before use.</li>
  <li>Apply a small amount directly to the roots of upper and lower lashes – <strong>do not apply to the lashes themselves</strong>.</li>
  <li>Use morning or evening on clean, dry eyelids. Remove contact lenses before application and reinsert at least 15 minutes after use.</li>
</ul>`,
  },
  {
    id: 4,
    slug: 'valecky-celslimroll',
    category: 'body',
    nameCs: 'Válečky CELSLIMROLL BYELMARIE®',
    nameEn: 'CELSLIMROLL Rollers BYELMARIE®',
    priceCZK: 2800,
    hasVariants: false,
    variants: [],
    image: 'https://cdn.myshoptet.com/usr/www.byelmarie.com/user/shop/big/57-1_valecky-set.png?69725139',
    images: [
      'https://cdn.myshoptet.com/usr/www.byelmarie.com/user/shop/big/57-1_valecky-set.png?69725139',
      'https://cdn.myshoptet.com/usr/www.byelmarie.com/user/shop/big/57_1763285398-a6462ae6-33c3-4072-9348-8c9e7ca2e433.png?69199a24',
    ],
    inStock: true,
    badgeCs: null,
    badgeEn: null,
    shortDescCs: [
      'SET 2 masážních válečků CELSLIMROLL!',
      'Redukce celulitidy a tukových zásob',
      'Zlepšení krevního a lymfatického oběhu',
      'Ergonomický design pro snadné ovládání',
      'Vhodné pro partie celého těla',
    ],
    shortDescEn: [
      'SET of 2 CELSLIMROLL massage rollers!',
      'Reduce cellulite and fat deposits',
      'Improve blood and lymphatic circulation',
      'Ergonomic design for easy control',
      'Suitable for all body areas',
    ],
    descCs: `
<p><strong>CELSLIMROLL BYELMARIE®</strong> je inovativní masážní váleček s přísavkami a výstupky, který vám pomůže efektivně bojovat proti celulitidě, lokalizovaným tukům a podpoří tvarování těla. Tento výjimečný pomocník kombinuje výhody vakuoterapie a redukční masáže, čímž přináší viditelné výsledky bez bolesti a invazivních procedur.</p>
<p>Při použití masážního válečku CELSLIMROLL aktivujete krevní oběh, zlepšujete okysličení buněk a podporujete lymfatický systém. Masáž přispívá ke snížení otoků (způsobených zadržováním tekutin), regeneraci svalů a zlepšení textury pokožky. Jeho funkce <strong>„sání a hnětení"</strong> pokožky působí hluboko do tkání, kde pomáhá redukovat tukové zásoby a zpevňovat kůži.</p>
<h4>Hlavní benefity:</h4>
<ul>
  <li><strong>Redukce celulitidy a tukových zásob</strong> – cílené působení na lokalizované a problematické partie.</li>
  <li><strong>Zlepšení krevního a lymfatického oběhu</strong> – podporuje detoxikaci, odplavení toxinů a regeneraci těla.</li>
  <li><strong>Ergonomický design</strong> – snadné ovládání tlaku, intenzity i úhlu masáže díky postranním úchytům.</li>
  <li><strong>Viditelné výsledky</strong> – pravidelné užívání napomáhá hladší, pevnější pokožce a přispívá ke snížení otoků.</li>
  <li><strong>Skvělá regenerace</strong> – ideální také pro uvolnění svalového napětí po fyzické aktivitě.</li>
</ul>
<p><strong>Zázračné kombo: FUFFU & CELSLIMROLL</strong><br>Zapojte do své pečující rutiny i vakuovou baňku <strong>FUFFU</strong>, která tvoří společně se CELSLIMROLL silnou dvojku pro formování postavy, zpevnění kůže a detoxikaci organismu.</p>`,
    descEn: `
<p><strong>CELSLIMROLL BYELMARIE®</strong> is an innovative massage roller with suction cups and nodules designed to effectively combat cellulite, localized fat, and support body shaping. It combines the benefits of vacuum therapy and reduction massage, delivering visible results without pain.</p>
<p>By using the CELSLIMROLL roller, you activate blood circulation, improve cell oxygenation, and support the lymphatic system. Its unique <strong>"suction and kneading"</strong> action works deep into tissues to reduce fat deposits and firm the skin.</p>
<h4>Key Benefits:</h4>
<ul>
  <li><strong>Reduces Cellulite & Fat Deposits</strong> – targeted action on stubborn areas.</li>
  <li><strong>Improves Blood & Lymph Circulation</strong> – supports detoxification and fluid drainage.</li>
  <li><strong>Ergonomic Design</strong> – side grips allow easy control of pressure and intensity.</li>
  <li><strong>Visible Results</strong> – regular use promotes smoother, firmer skin and reduces swelling.</li>
</ul>
<p><strong>Synergy Duo: FUFFU & CELSLIMROLL</strong><br>Combine the rollers with the <strong>FUFFU vacuum cup</strong> for a powerful combination to sculpt the body and detoxify.</p>`,
  },

  {
    id: 5,
    slug: 'skoleni-rollcupping',
    category: 'professional',
    nameCs: 'Školení a pomůcky ROLLCUPPING',
    nameEn: 'ROLLCUPPING Training & Tools',
    priceCZK: 16900,
    hasVariants: false,
    variants: [],
    image: 'https://cdn.myshoptet.com/usr/www.byelmarie.com/user/shop/big/60-2_skoleni-a-pomucky-rollcupping.png?69199e75',
    images: [
      'https://cdn.myshoptet.com/usr/www.byelmarie.com/user/shop/big/60-2_skoleni-a-pomucky-rollcupping.png?69199e75',
      'https://cdn.myshoptet.com/usr/www.byelmarie.com/user/shop/big/60_1763285208-6ab673f9-0060-4a1a-bcb0-dccf09169155.png?691999c2'
    ],
    inStock: true,
    onRequest: false,
    badgeCs: 'Pro',
    badgeEn: 'Pro',
    shortDescCs: [
      'Certifikované školení pro maséry a kosmetičky',
      'Autorská technika kombinující válečky a baňky',
      'Individuální výuka přímo ve vašem salonu nebo v Brně',
      'Praktická výuka s okamžitou zpětnou vazbou',
      'Kompletní sada pomůcek (3x baňka, 2x váleček) v ceně',
    ],
    shortDescEn: [
      'Certified training for massage therapists and beauticians',
      'Original technique combining rollers and cups',
      'Individual training in Brno or at your location',
      'Hands-on training with immediate feedback',
      'Complete set of tools (3x cup, 2x roller) included',
    ],
    descCs: `
<p>Přidejte do své nabídky revoluční masážní techniku <strong>Rollcupping</strong>, která kombinuje funkčnost vakuových baněk FUFFU a masážního válečku CELSLIMROLL značky BYELMARIE®. Tato certifikovaná metoda, navržená specialistkou Šárkou Kloudovou, naučí vaše ruce, jak efektivně a s minimálním úsilím dosáhnout viditelných výsledků při formování těla a redukci celulitidy.</p>
<h4>Co vám školení Rollcupping přinese?</h4>
<ul>
  <li><strong>Exkluzivní know-how</strong> – naučíte se profesionální techniky práce s pomůckami BYELMARIE® (válečky CELSLIMROLL a baňky FUFFU), které přinášejí viditelné výsledky již po prvním ošetření.</li>
  <li><strong>Rozšíření služeb salonu</strong> – nabídněte klientům kúru Rollcupping (doporučená série min. 5 ošetření) s vysokou návratností a zvyšte zájem o své služby.</li>
  <li><strong>Šetrnost k vašim rukám</strong> – technika je navržena tak, aby minimalizovala zátěž kloubů a prstů maséra.</li>
</ul>
<h4>Co je zahrnuto v ceně školení (16 900 Kč)?</h4>
<ul>
  <li>Individuální školení (v Brně nebo po dohodě přímo ve vašem studiu po celé ČR a SR)</li>
  <li><strong>Kompletní sada pomůcek</strong>: 3x vakuová baňka FUFFU (velikosti S, M, L) a 2x váleček CELSLIMROLL (dvě velikosti pro všechny partičky těla) v hodnotě několika tisíc korun.</li>
  <li>Certifikát o úspěšném absolvování opravňující k oficiálnímu provádění metody.</li>
  <li>Detailní studijní materiály a skripta s postupy.</li>
  <li>Následná konzultační podpora i po ukončení kurzu.</li>
</ul>
<p><em>Chcete zakoupit jak Vibroslimfit, tak Rollcupping? Pak se můžete těšit na výhodnější cenu! Více na osobní dotaz.</em></p>`,
    descEn: `
<p>Expand your beauty or massage salon portfolio with the certified <strong>Rollcupping</strong> technique, combining the action of FUFFU vacuum cups and CELSLIMROLL rollers. This course teaches how to achieve visible results in body contouring and cellulite reduction with minimal effort.</p>
<h4>What the training (16,900 CZK) includes:</h4>
<ul>
  <li>Individual training (in Brno or at your location in CZ/SK)</li>
  <li><strong>Complete set of professional tools</strong>: 3x FUFFU cup (S, M, L) and 2x CELSLIMROLL rollers</li>
  <li>Official certificate of completion</li>
  <li>Comprehensive study manuals and templates</li>
  <li>Ongoing support and consulting</li>
</ul>`,
  },
  {
    id: 6,
    slug: 'skoleni-rollcupping-online',
    category: 'professional',
    nameCs: 'Školení ROLLCUPPING – Online',
    nameEn: 'ROLLCUPPING Training – Online',
    priceCZK: 3900,
    hasVariants: false,
    variants: [],
    image: 'https://cdn.myshoptet.com/usr/www.byelmarie.com/user/shop/big/76_skoleni-rollcupping-online.png?69723dae',
    images: [
      'https://cdn.myshoptet.com/usr/www.byelmarie.com/user/shop/big/76_skoleni-rollcupping-online.png?69723dae',
      'https://cdn.myshoptet.com/usr/www.byelmarie.com/user/shop/big/76_paucek-and-lage.jpg?69723e98',
      'https://cdn.myshoptet.com/usr/www.byelmarie.com/user/shop/big/76-1_1763285208-6ab673f9-0060-4a1a-bcb0-dccf09169155.png?69723dae'
    ],
    inStock: true,
    onRequest: false,
    badgeCs: 'Online',
    badgeEn: 'Online',
    shortDescCs: [
      'Ucelený teoretický základ metody Rollcupping',
      'Studujte ve vlastním tempu odkudkoliv',
      'Video lekce s podrobnými ukázkami technik',
      'Certifikát a PDF studijní materiály v ceně',
      'Upozornění: Pomůcky (baňky a válečky) nejsou součástí balení',
    ],
    shortDescEn: [
      'Comprehensive theoretical foundation of Rollcupping',
      'Study at your own pace from anywhere',
      'Video lessons demonstrating detailed techniques',
      'Certificate and PDF study materials included',
      'Note: Massage tools are not included and must be bought separately',
    ],
    descCs: `
<p>Online certifikovaný kurz <strong>ROLLCUPPING®</strong> je navržen pro maséry, kosmetičky a wellness specialisty, kteří chtějí zvládnout autorskou techniku vakuového baňkování a válečkové masáže <strong>ve vlastním tempu a z pohodlí svého domova nebo salonu</strong>.</p>
<p>Teoretický základ kurzu poskytuje ucelené vysvětlení principů vakuové terapie, práce s měkkými tkáněmi, indikací a kontraindikací. Praktická část vás provede přesnými tahy pro formování těla a zeštíhlení.</p>
<h4>Co online kurz obsahuje:</h4>
<ul>
  <li>Sérii video lekcí s detailními ukázkami techniky Rollcupping.</li>
  <li>Obsáhlá PDF skripta a studijní materiály ke stažení.</li>
  <li>Certifikát o úspěšném absolvování (bude vystaven na jméno uvedené v poznámce objednávky).</li>
</ul>
<p>⚠️ <strong>DŮLEŽITÉ UPOZORNĚNÍ:</strong> Pomůcky (vakuové baňky FUFFU a válečky CELSLIMROLL) nejsou součástí tohoto online kurzu. Pro plnohodnotné využití metody v praxi je nutné tyto pomůcky dokoupit samostatně v našem e-shopu.</p>
<p><em>Autorská technika je chráněna ochrannou známkou a je výhradním duševním vlastnictvím Šárky Kloudové – BYELMARIE®. Zakoupením kurzu získáváte právo metodu oficiálně nabízet a prezentovat se jako certifikovaný specialista.</em></p>`,
    descEn: `
<p>The certified <strong>ROLLCUPPING® Online Course</strong> is designed for professionals who want to master this proprietary vacuum therapy and roller massage technique at their own pace.</p>
<h4>Online Course Package Includes:</h4>
<ul>
  <li>Video tutorial series with step-by-step techniques.</li>
  <li>Comprehensive PDF manuals and study guide.</li>
  <li>Certificate of completion.</li>
</ul>
<p>⚠️ <strong>PLEASE NOTE:</strong> Massage tools (FUFFU cups and CELSLIMROLL rollers) are NOT included in this online package and must be purchased separately from the shop.</p>`,
  },
  {
    id: 7,
    slug: 'skoleni-vibroslimfit',
    category: 'professional',
    nameCs: 'Školení a přístroj VIBROSLIMFIT',
    nameEn: 'VIBROSLIMFIT Training & Device',
    priceCZK: 58000,
    hasVariants: false,
    variants: [],
    image: 'https://cdn.myshoptet.com/usr/www.byelmarie.com/user/shop/big/51_1763290399-f5f61af5-0984-4ac0-a1a9-9c8aae1d0983.png?6919adb4',
    images: [
      'https://cdn.myshoptet.com/usr/www.byelmarie.com/user/shop/big/51_1763290399-f5f61af5-0984-4ac0-a1a9-9c8aae1d0983.png?6919adb4',
      'https://cdn.myshoptet.com/usr/www.byelmarie.com/user/shop/big/51-1_whatsapp-image-2024-12-02-at-22-28-28--4.png?6751b245',
      'https://cdn.myshoptet.com/usr/www.byelmarie.com/user/shop/big/51-2_whatsapp-image-2024-12-02-at-22-28-28-depositphotos-bgremover.png?6751b2be',
      'https://cdn.myshoptet.com/usr/www.byelmarie.com/user/shop/big/51-3_whatsapp-image-2024-12-02-at-22-28-28--1--depositphotos-bgremover.png?6751b2be',
      'https://cdn.myshoptet.com/usr/www.byelmarie.com/user/shop/big/51-5_whatsapp-image-2024-12-02-at-22-28-28--2--depositphotos-bgremover.png?6751b2bf',
      'https://cdn.myshoptet.com/usr/www.byelmarie.com/user/shop/big/51-6_whatsapp-image-2024-12-02-at-22-28-28--3--depositphotos-bgremover.png?6751b2bf'
    ],
    inStock: false,
    soldOut: true,
    badgeCs: 'Vyprodáno',
    badgeEn: 'Sold Out',
    shortDescCs: [
      'Inovativní přístroj pro neinvazivní zeštíhlení',
      'Vibroterapie pro intenzivní formování postavy',
      'Kompletní školení obsluhy přístroje v ceně',
      'Ideální pro salony krásy a wellness centra',
      'Momentálně vyprodáno – kontaktujte nás pro předobjednávky',
    ],
    shortDescEn: [
      'Innovative device for non-invasive slimming',
      'Vibration therapy for intensive body shaping',
      'Complete device operation training included',
      'Ideal for beauty salons and wellness centres',
      'Currently sold out – contact us for pre-orders',
    ],
    descCs: `
<p>Seznamte se s inovativním masážním přístrojem <strong>VIBROSLIMFIT BYELMARIE®</strong>, který velmi efektivně pomáhá s odstraněním celulitidy, podporou hubnutí a uvolněním svalů. Odlište se od konkurence a nabídněte svým zákazníkům špičkovou neinvazivní péči s prokázanými výsledky.</p>
<p>Vibrační masáž působí hluboko do tkání, stimuluje krevní a lymfatický oběh, napomáhá odstraňování toxinů a výrazně přispívá ke zpevnění pokožky.</p>
<h4>Hlavní benefity přístroje VIBROSLIMFIT:</h4>
<ul>
  <li>Podpora zeštíhlení a odbourávání lokalizovaných tukových zásob.</li>
  <li>Účinné vyhlazení a redukce celulitidy.</li>
  <li>Aktivace lymfatického systému a snížení otoků.</li>
  <li>Snížení svalové únavy, ztuhlosti a úleva od chronických bolestí.</li>
  <li>Urychlení metabolismu a zlepšení pružnosti pokožky.</li>
  <li>Zklidnění a relaxace nervového systému.</li>
</ul>
<h4>Co balíček (58 000 Kč) obsahuje?</h4>
<ul>
  <li>Masážní přístroj VIBROSLIMFIT (se zárukou 12 měsíců)</li>
  <li>Certifikované osobní školení obsluhy po celé České republice a Slovensku</li>
  <li>Obsáhlá teoretická i praktická skripta</li>
  <li>Rady a marketingové tipy pro rychlé zavedení do praxe</li>
  <li>Trvalou odbornou konzultaci i po skončení kurzu</li>
</ul>
<p><em>Přístroj je momentálně vyprodán. Cena 58 000 Kč je konečná (nejsme plátci DPH). Pro informace o naskladnění a předobjednávkách nás prosím kontaktujte.</em></p>`,
    descEn: `
<p>Introducing the <strong>VIBROSLIMFIT BYELMARIE®</strong> professional massage device, designed to combat cellulite, support weight loss, and relieve deep muscle tension. Vibration therapy penetrates deeply, stimulating blood and lymph circulation for skin firming.</p>
<h4>Key Benefits:</h4>
<ul>
  <li>Accelerates fat breakdown and slimming.</li>
  <li>Significantly reduces cellulite and improves skin elasticity.</li>
  <li>Stimulates lymph flow and drains retained fluids.</li>
  <li>Relieves muscle soreness and fatigue.</li>
</ul>
<h4>What is included (58,000 CZK):</h4>
<ul>
  <li>VIBROSLIMFIT massage device (12-month warranty).</li>
  <li>Certified in-person training anywhere in CZ/SK.</li>
  <li>Detailed manuals and operational protocols.</li>
  <li>Lifetime post-course consultations.</li>
</ul>
<p><em>Currently sold out. Contact us for pre-orders.</em></p>`,
  },
  {
    id: 8,
    slug: 'ems-prosuit',
    category: 'professional',
    nameCs: 'EMS PROSuit',
    nameEn: 'EMS PROSuit',
    priceCZK: 0,
    hasVariants: true,
    onRequest: true,
    variants: [
      { id: 'SINGLE', nameCs: 'SINGLE Set (XS–XL, 6ks prádla)', nameEn: 'SINGLE Set (XS–XL, 6pcs wear)', priceCZK: 0 },
      { id: 'DOUBLE', nameCs: 'DOUBLE Set (volba velikostí, 12ks prádla)', nameEn: 'DOUBLE Set (custom sizes, 12pcs wear)', priceCZK: 0 },
      { id: 'PROFI', nameCs: 'PROFI Set (XS/M/XL, 20ks prádla)', nameEn: 'PROFI Set (XS/M/XL, 20pcs wear)', priceCZK: 0 }
    ],
    image: 'images/suit.jpg',
    images: [
      'images/suit.jpg',
      'https://cdn.myshoptet.com/usr/www.byelmarie.com/user/shop/big/72_ems-prosuit.jpg?69ce38f6'
    ],
    inStock: true,
    badgeCs: 'Novinka',
    badgeEn: 'New',
    shortDescCs: [
      'Celotělový oblek s bezdrátovou technologií',
      'Systém neuromuskulární stimulace pro formování těla',
      'Aktivace 90–95 % svalových vláken najednou',
      'Pasivní trénink: 25 minut ošetření = ekvivalent hodin cvičení',
      'Vhodné pro trenéry, kosmetické salony a fyzioterapeuty',
    ],
    shortDescEn: [
      'Full-body suit with wireless neuromuscular stimulation',
      'Advanced EMS technology for rapid muscle shaping',
      'Stimulates 90–95% of muscle fibres simultaneously',
      'Passive training: 25-minute treatment triggers massive contractions',
      'Perfect for trainers, beauty salons, and physiotherapists',
    ],
    descCs: `
<div class="ems-description">
  <div class="ems-intro">
    <p>Získejte náskok s novinkou <strong>EMS PROSuit BYELMARIE®</strong> – bezdrátovou technologií neuromuskulární stimulace celého těla, která pracuje za vaše klienty! Inspirováno profesionálními estetickými a sportovními technologiemi.</p>
    <p>EMS PROSuit vysílá bezpečné elektrické impulzy přímo do svalů, čímž vyvolává tisíce svalových kontrakcí. <strong>25 minut pasivního tréninku</strong> s EMS PROSuit odpovídá efektu několikanásobně delšího a namáhavějšího klasického cvičení.</p>
  </div>

  <h3 class="ems-section-title">Hlavní benefity EMS PROSuit</h3>
  <div class="ems-grid">
    <div class="ems-card">
      <div class="ems-card__title">
        <span class="ems-card__icon">🔥</span>
        <span>Spalování & zpevnění</span>
      </div>
      <p class="ems-card__text">Intenzivní spalování tuků a zpevnění postavy v rekordním čase.</p>
    </div>

    <div class="ems-card">
      <div class="ems-card__title">
        <span class="ems-card__icon">🍑</span>
        <span>Celulitida & lifting</span>
      </div>
      <p class="ems-card__text">Účinná redukce celulitidy a lifting hýždí pro dokonale tvarované křivky.</p>
    </div>

    <div class="ems-card">
      <div class="ems-card__title">
        <span class="ems-card__icon">🦴</span>
        <span>Šetrnost ke kloubům</span>
      </div>
      <p class="ems-card__text">Nedochází k nárazům ani přetížení kloubů. Ideální pro lidi s bolestmi zad nebo po zranění.</p>
    </div>

    <div class="ems-card">
      <div class="ems-card__title">
        <span class="ems-card__icon">💧</span>
        <span>Lymfatický systém</span>
      </div>
      <p class="ems-card__text">Podpora lymfy – odplavuje přebytečnou vodu z těla a působí silně detoxikačně.</p>
    </div>

    <div class="ems-card">
      <div class="ems-card__title">
        <span class="ems-card__icon">⚡</span>
        <span>Vnitřní stehna</span>
      </div>
      <p class="ems-card__text">Unikátní stimulační zóny pro vnitřní stehna, které běžné EMS systémy postrádají.</p>
    </div>
  </div>

  <h3 class="ems-section-title">Dostupné konfigurace setů</h3>
  <div class="ems-grid">
    <div class="ems-card">
      <div class="ems-card__title">
        <span class="ems-card__icon">👤</span>
        <span>SINGLE Set</span>
      </div>
      <p class="ems-card__text">1x EMS PROSuit oblek (velikost dle výběru XS–XL), tablet pro bezdrátové ovládání, řídicí jednotka, 6 ks speciálního spodního prádla.</p>
      <div class="ems-card__meta">Cena na dotaz</div>
    </div>

    <div class="ems-card">
      <div class="ems-card__title">
        <span class="ems-card__icon">👥</span>
        <span>DOUBLE Set</span>
      </div>
      <p class="ems-card__text">2x EMS PROSuit obleky (volba velikostí), tablet, řídicí jednotka, 12 ks spodního prádla. Vyšší flexibilita ošetření.</p>
      <div class="ems-card__meta">Cena na dotaz</div>
    </div>

    <div class="ems-card">
      <div class="ems-card__title">
        <span class="ems-card__icon">👑</span>
        <span>PROFI Set</span>
      </div>
      <p class="ems-card__text">3x EMS PROSuit obleky (doporučené velikosti XS, M, XL), tablet, řídicí jednotka, 20 ks spodního prádla.</p>
      <div class="ems-card__meta">Cena na dotaz</div>
    </div>
  </div>

  <div class="ems-info-box">
    <p><strong>Variabilita velikostí obleku:</strong> Elastický materiál obleku se přizpůsobí postavě (XS pokrývá XXS až S, S pokrývá XS až M, M pokrývá S až L atd.).</p>
  </div>

  <h3 class="ems-section-title">Provozní výhody</h3>
  <div class="ems-grid">
    <div class="ems-card">
      <div class="ems-card__title">
        <span class="ems-card__icon">📱</span>
        <span>Bezdrátové ovládání</span>
      </div>
      <p class="ems-card__text">Snadné ovládání přes dodaný tablet, bezdrátový přenos impulzů.</p>
    </div>

    <div class="ems-card">
      <div class="ems-card__title">
        <span class="ems-card__icon">👥</span>
        <span>Až 4 klienti</span>
      </div>
      <p class="ems-card__text">Možnost ošetřovat až 4 klienty najednou s jedním systémem.</p>
    </div>

    <div class="ems-card">
      <div class="ems-card__title">
        <span class="ems-card__icon">📈</span>
        <span>Rychlá návratnost</span>
      </div>
      <p class="ems-card__text">Vysoká ziskovost při ceně ošetření od 1 000 Kč za 25 minut.</p>
    </div>

    <div class="ems-card">
      <div class="ems-card__title">
        <span class="ems-card__icon">📦</span>
        <span>Kompletní balíček</span>
      </div>
      <p class="ems-card__text">Dodací lhůta 30 dní. Zaškolení, certifikát a marketingové materiály jsou součástí balení.</p>
    </div>
  </div>

  <div class="ems-warning-box">
    <p><strong>⚠️ Kontraindikace:</strong> Kardiostimulátor, těhotenství, epilepsie, závažná akutní onemocnění.</p>
  </div>
</div>`,
    descEn: `
<div class="ems-description">
  <div class="ems-intro">
    <p>Step ahead with the new <strong>EMS PROSuit BYELMARIE®</strong> – wireless neuromuscular stimulation technology that works for your clients! Inspired by professional aesthetic and sports technologies.</p>
    <p>EMS PROSuit sends safe electrical impulses directly into muscles, triggering thousands of muscle contractions. <strong>25 minutes of passive training</strong> with EMS PROSuit equals the effect of a much longer and more strenuous conventional workout.</p>
  </div>

  <h3 class="ems-section-title">Key Benefits of EMS PROSuit</h3>
  <div class="ems-grid">
    <div class="ems-card">
      <div class="ems-card__title">
        <span class="ems-card__icon">🔥</span>
        <span>Fat Burn & Toning</span>
      </div>
      <p class="ems-card__text">Intensive fat burning and body toning in record time.</p>
    </div>

    <div class="ems-card">
      <div class="ems-card__title">
        <span class="ems-card__icon">🍑</span>
        <span>Cellulite & Lifting</span>
      </div>
      <p class="ems-card__text">Effective cellulite reduction and buttocks lifting for perfectly sculpted curves.</p>
    </div>

    <div class="ems-card">
      <div class="ems-card__title">
        <span class="ems-card__icon">🦴</span>
        <span>Gentle on Joints</span>
      </div>
      <p class="ems-card__text">No high impact or joint overload. Ideal for people with back pain or recovering from injuries.</p>
    </div>

    <div class="ems-card">
      <div class="ems-card__title">
        <span class="ems-card__icon">💧</span>
        <span>Lymphatic Support</span>
      </div>
      <p class="ems-card__text">Stimulates lymph flow – flushes out excess water and promotes deep body detoxification.</p>
    </div>

    <div class="ems-card">
      <div class="ems-card__title">
        <span class="ems-card__icon">⚡</span>
        <span>Inner Thighs</span>
      </div>
      <p class="ems-card__text">Unique stimulation zones for inner thighs that conventional EMS systems lack.</p>
    </div>
  </div>

  <h3 class="ems-section-title">Configurations Available</h3>
  <div class="ems-grid">
    <div class="ems-card">
      <div class="ems-card__title">
        <span class="ems-card__icon">👤</span>
        <span>SINGLE Set</span>
      </div>
      <p class="ems-card__text">1x EMS PROSuit (size of choice XS–XL), wireless tablet control, receiver unit, 6x special cotton underwear.</p>
      <div class="ems-card__meta">Price on Request</div>
    </div>

    <div class="ems-card">
      <div class="ems-card__title">
        <span class="ems-card__icon">👥</span>
        <span>DOUBLE Set</span>
      </div>
      <p class="ems-card__text">2x EMS PROSuit suits (choice of sizes), wireless tablet control, receiver unit, 12x special cotton underwear. Higher treatment flexibility.</p>
      <div class="ems-card__meta">Price on Request</div>
    </div>

    <div class="ems-card">
      <div class="ems-card__title">
        <span class="ems-card__icon">👑</span>
        <span>PROFI Set</span>
      </div>
      <p class="ems-card__text">3x EMS PROSuit suits (recommended sizes XS, M, XL covering all body types), wireless tablet control, receiver unit, 20x cotton underwear.</p>
      <div class="ems-card__meta">Price on Request</div>
    </div>
  </div>

  <div class="ems-info-box">
    <p><strong>Suit Size Flexibility:</strong> The elastic material adapts to the body shape (XS covers XXS to S, S covers XS to M, M covers S to L, etc.).</p>
  </div>

  <h3 class="ems-section-title">Operational Benefits</h3>
  <div class="ems-grid">
    <div class="ems-card">
      <div class="ems-card__title">
        <span class="ems-card__icon">📱</span>
        <span>Tablet & Wireless</span>
      </div>
      <p class="ems-card__text">Controlled via provided tablet, wireless impulse transmission.</p>
    </div>

    <div class="ems-card">
      <div class="ems-card__title">
        <span class="ems-card__icon">👥</span>
        <span>Up to 4 Clients</span>
      </div>
      <p class="ems-card__text">Treat up to 4 clients simultaneously with a single system.</p>
    </div>

    <div class="ems-card">
      <div class="ems-card__title">
        <span class="ems-card__icon">📈</span>
        <span>Fast ROI</span>
      </div>
      <p class="ems-card__text">High profitability with a recommended treatment price from 1,000 CZK / 25 min.</p>
    </div>

    <div class="ems-card">
      <div class="ems-card__title">
        <span class="ems-card__icon">📦</span>
        <span>Complete Package</span>
      </div>
      <p class="ems-card__text">30-day delivery time. Professional training, certification, and marketing materials are included.</p>
    </div>
  </div>

  <div class="ems-warning-box">
    <p><strong>⚠️ Contraindications:</strong> Pacemaker, pregnancy, epilepsy, severe acute illness.</p>
  </div>
</div>`,
  },
];

function getProductBySlug(slug) {
  const slugMap = {
    'banky-fuffu-byelmarie': 'banka-fuffu',
    'banky-na-oblicej-face-cupping': 'oblicejove-banky',
    'valecek-celslim-byelmarie': 'valecky-celslimroll',
    'skoleni-a-pomucky-rollcupping': 'skoleni-rollcupping',
    'skoleni-a-pomucky-rollcupping-online': 'skoleni-rollcupping-online'
  };
  const mappedSlug = slugMap[slug] || slug;
  return PRODUCTS.find(p => p.slug === mappedSlug);
}

function getProductsByCategory(category) {
  if (!category || category === 'all') return PRODUCTS;
  return PRODUCTS.filter(p => p.category === category);
}

function getFeaturedProducts() {
  return PRODUCTS.filter(p => p.category === 'body');
}

function getProductName(product) {
  return currentLang === 'en' ? product.nameEn : product.nameCs;
}

function getProductShortDesc(product) {
  return currentLang === 'en' ? product.shortDescEn : product.shortDescCs;
}

function getProductDesc(product) {
  return currentLang === 'en' ? product.descEn : product.descCs;
}

function getProductBadge(product) {
  if (product.soldOut) return currentLang === 'en' ? 'Sold Out' : 'Vyprodáno';
  if (product.onRequest) return currentLang === 'en' ? 'Request' : 'Na dotaz';
  return currentLang === 'en' ? product.badgeEn : product.badgeCs;
}

function renderProductCard(product, minimal = false) {
  const name = getProductName(product);
  const badge = getProductBadge(product);
  const isSoldOut = product.soldOut;
  const isOnRequest = product.onRequest;

  let priceHTML = '';
  if (isSoldOut) {
    priceHTML = `<span class="price sold-out" data-i18n="sold_out">${t('sold_out')}</span>`;
  } else if (isOnRequest) {
    priceHTML = `<span class="price on-request" data-i18n="on_request">${t('on_request')}</span>`;
  } else if (product.hasVariants) {
    priceHTML = `<span class="price" data-price-from="${product.priceCZK}">${t('from')} ${formatPrice(product.priceCZK)}</span>`;
  } else {
    priceHTML = `<span class="price" data-price="${product.priceCZK}">${formatPrice(product.priceCZK)}</span>`;
  }

  let btnHTML = '';
  if (!isSoldOut && !isOnRequest) {
    btnHTML = `<button class="btn-add-to-cart" onclick="quickAddToCart(${product.id})" data-i18n="add_to_cart">${t('add_to_cart')}</button>`;
  } else if (isOnRequest) {
    btnHTML = `<a href="contact.html" class="btn-add-to-cart btn-outline" data-i18n="on_request">${t('on_request')}</a>`;
  } else {
    btnHTML = `<span class="btn-add-to-cart btn-disabled" data-i18n="sold_out">${t('sold_out')}</span>`;
  }

  return `
    <article class="product-card" data-product-id="${product.id}">
      <a href="product.html?slug=${product.slug}" class="product-card__image-link">
        <div class="product-card__image-wrap">
          <img src="${product.image}" alt="${name}" class="product-card__image" loading="lazy" onerror="this.src='data:image/svg+xml,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'400\\' height=\\'400\\'><rect width=\\'400\\' height=\\'400\\' fill=\\'%23f0ede8\\'/><text x=\\'50%25\\' y=\\'50%25\\' text-anchor=\\'middle\\' fill=\\'%23cdc1b3\\' font-size=\\'18\\' dy=\\'.3em\\'>BYELMARIE</text></svg>'">
          ${badge ? `<span class="product-card__badge">${badge}</span>` : ''}
        </div>
      </a>
      <div class="product-card__info">
        <a href="product.html?slug=${product.slug}" class="product-card__name">${name}</a>
        <div class="product-card__price-row">
          ${priceHTML}
          ${btnHTML}
        </div>
      </div>
    </article>
  `;
}

function quickAddToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product || product.soldOut || product.onRequest) return;

  if (product.hasVariants) {

    window.location.href = `product.html?slug=${product.slug}`;
    return;
  }

  addToCart({
    id: product.id,
    slug: product.slug,
    name: getProductName(product),
    price: product.priceCZK,
    image: product.image,
    variant: null,
  });
  showCartNotification(getProductName(product));
}

function showCartNotification(name) {
  const note = document.createElement('div');
  note.className = 'cart-notification';
  note.innerHTML = `<span>✓</span> ${name} – přidáno do košíku`;
  document.body.appendChild(note);
  setTimeout(() => note.classList.add('show'), 10);
  setTimeout(() => {
    note.classList.remove('show');
    setTimeout(() => note.remove(), 400);
  }, 2500);
}

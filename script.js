(function(){
  'use strict';
  var RM = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var AMB = 32;

  /* ---------- language: English / Arabic ---------- */
  var lang = 'en';
  var AR = {
 "Phone Cooling System": "نظام تبريد الهاتف",
 "With a Non-Heating Charger": "مع شاحن غير مُسخِّن",
 "Cooler Phone • Safer Charging • Better Performance": "هاتف أبرد • شحن أكثر أمانًا • أداء أفضل",
 "SYSTEM: {S}": "النظام: {S}",
 "Heavy usage": "استخدام مكثف",
 "Adds extra heat, like gaming or video": "يضيف حرارة إضافية مثل الألعاب أو الفيديو",
 "Reset": "إعادة ضبط",
 "▶ Run Full Demonstration": "▶ تشغيل العرض التوضيحي الكامل",
 "Demonstration running…": "جارٍ تشغيل العرض…",
 "🔌 Start Charging": "🔌 بدء الشحن",
 "⏹ Stop Charging": "⏹ إيقاف الشحن",
 "Battery full": "البطارية ممتلئة",
 "DEMO": "عرض",
 "DONE": "تم",
 "Ready to run": "جاهز للتشغيل",
 "about 17 seconds": "حوالي 17 ثانية",
 "finished": "انتهى",
 "{n} s left": "متبقٍ {n} ثانية",
 "STEP {n} OF {m}": "الخطوة {n} من {m}",
 "Press Run Full Demonstration to watch the whole cycle, or use Start Charging to run it yourself.": "اضغط «تشغيل العرض التوضيحي الكامل» لمشاهدة الدورة كاملة، أو استخدم «بدء الشحن» لتشغيلها بنفسك.",
 "Demonstration complete. ": "اكتمل العرض. ",
 "Start state": "الحالة الابتدائية",
 "Phone at 32°C, battery 65%. System SAFE.": "الهاتف عند 32°C والبطارية 65%. حالة النظام: آمن.",
 "Charging begins": "بدء الشحن",
 "The charger is active. The battery rises and the phone starts to warm up.": "الشاحن يعمل. تزداد نسبة البطارية وتبدأ حرارة الهاتف بالارتفاع.",
 "40°C reached": "الوصول إلى 40°C",
 "Temperature reaches 40°C. System changes to HIGH TEMPERATURE.": "تصل الحرارة إلى 40°C وتتحول حالة النظام إلى «حرارة مرتفعة».",
 "Cooling command sent": "إرسال أمر التبريد",
 "The microcontroller detects the heat and sends the cooling command.": "يكتشف المتحكم الدقيق الحرارة ويرسل أمر التبريد.",
 "Cooling active": "التبريد يعمل",
 "The fan starts rotating at 100% and the heat sink activates. COOLING ACTIVE.": "تبدأ المروحة بالدوران بسرعة 100% ويعمل المشتت الحراري. التبريد نشط.",
 "Temperature falls": "انخفاض الحرارة",
 "40°C → 38°C → 36°C → 34°C while charging continues.": "من 40°C إلى 38°C ثم 36°C ثم 34°C مع استمرار الشحن.",
 "Back to safe": "العودة إلى الوضع الآمن",
 "System returns to SAFE. Fan speed decreases to 40%. Charging continues.": "يعود النظام إلى الحالة الآمنة وتنخفض سرعة المروحة إلى 40% ويستمر الشحن.",
 "Final state": "الحالة النهائية",
 "Temperature 34°C · Battery 80% · Cooling STANDBY · System SAFE.": "الحرارة 34°C · البطارية 80% · التبريد في وضع الاستعداد · النظام آمن.",
 "🟢 SYSTEM SAFE": "🟢 النظام آمن",
 "Idle. Press Start Charging.": "في وضع الخمول. اضغط «بدء الشحن».",
 "Charging. The sensor is watching the temperature.": "جارٍ الشحن. الحساس يراقب درجة الحرارة.",
 "SYSTEM NORMAL": "النظام طبيعي",
 "Phone is warm. The sensor is watching.": "الهاتف دافئ. الحساس يراقب.",
 "⚠️ HIGH TEMPERATURE": "⚠️ حرارة مرتفعة",
 "Waiting for the microcontroller to respond.": "بانتظار استجابة المتحكم الدقيق.",
 "Microcontroller detected {T}°C. Cooling command sent.": "اكتشف المتحكم الدقيق {T}°C وأرسل أمر التبريد.",
 "❄️ COOLING ACTIVE": "❄️ التبريد نشط",
 "Fan at 100% and heat sink active. Temperature is falling.": "المروحة 100% والمشتت الحراري يعمل. الحرارة في انخفاض.",
 "🟢 TEMPERATURE STABILIZED": "🟢 استقرت درجة الحرارة",
 "Fan reduced to 40%. Charging continues.": "خُفّضت سرعة المروحة إلى 40% ويستمر الشحن.",
 "🔴 CRITICAL TEMPERATURE": "🔴 حرارة حرجة",
 "Above the prototype critical threshold.": "أعلى من الحد الحرج في النموذج.",
 "HIGH TEMP": "حرارة مرتفعة",
 "🟢 STABILIZED": "🟢 مستقرة",
 "CRITICAL": "حرج",
 "SYSTEM SAFE": "النظام آمن",
 "SAFE": "آمن",
 "NORMAL": "طبيعي",
 "HIGH": "مرتفع",
 "COOLING": "تبريد",
 "Battery": "البطارية",
 "Temperature": "درجة الحرارة",
 "Charging": "الشحن",
 "⚡ Charging": "⚡ جارٍ الشحن",
 "Not charging": "لا يتم الشحن",
 "Fully charged": "مشحونة بالكامل",
 "Heat Sink": "المشتت الحراري",
 "STANDBY": "استعداد",
 "ACTIVE": "نشط",
 "Idle": "خامل",
 "IDLE": "خامل",
 "Dissipating heat": "يبدّد الحرارة",
 "Heat building up": "تراكم الحرارة",
 "Holding temperature": "يحافظ على الحرارة",
 "Fan: ON": "المروحة: تعمل",
 "Fan: OFF": "المروحة: متوقفة",
 "Fan Speed: {n}%": "سرعة المروحة: {n}%",
 "Blows air across the phone": "تنفخ الهواء على الهاتف",
 "Phone Temperature": "درجة حرارة الهاتف",
 "Temperature Sensor:": "حساس الحرارة:",
 "MONITORING": "مراقبة",
 "Levels are prototype simulation thresholds, not real battery or medical safety limits.": "هذه المستويات حدود محاكاة للنموذج فقط، وليست حدود أمان حقيقية للبطارية أو حدودًا طبية.",
 "below 35°C": "أقل من 35°C",
 "above 45°C": "أكثر من 45°C",
 "Sensor readings": "قراءات الحساس",
 "last 60 s": "آخر 60 ثانية",
 "40°C cooling starts": "عند 40°C يبدأ التبريد",
 "Battery:": "البطارية:",
 "Charging ⚡": "جارٍ الشحن ⚡",
 "Full": "ممتلئة",
 "Battery Temperature": "حرارة البطارية",
 "Follows": "تتبع",
 "phone temperature": "حرارة الهاتف",
 "CHARGING": "جارٍ الشحن",
 "FULL": "ممتلئة",
 "Temperature Sensor": "حساس الحرارة",
 "sampling": "قراءة",
 "Status": "الحالة",
 "Current Reading": "القراءة الحالية",
 "Reading Interval": "فترة القراءة",
 "1 second": "ثانية واحدة",
 "Microcontroller": "المتحكم الدقيق",
 "COOLING COMMAND SENT": "تم إرسال أمر التبريد",
 "FAN ACTIVATED": "تم تشغيل المروحة",
 "CONTROLLING": "يتحكم",
 "IF reading ≥ 40°C → fan 100%": "إذا بلغت القراءة 40°C أو أكثر ← المروحة 100%",
 "IF reading < 35°C → fan 40%": "إذا انخفضت القراءة عن 35°C ← المروحة 40%",
 "Non-Heating Charger": "الشاحن غير المُسخِّن",
 "Power": "الطاقة",
 "🟢 ACTIVE": "🟢 نشط",
 "Stable": "مستقرة",
 "No load": "بدون حمل",
 "Low Heat": "حرارة منخفضة",
 "Ambient": "حرارة الغرفة",
 "Traditional charger (illustrative)": "شاحن تقليدي (توضيحي)",
 "This prototype's charger (illustrative)": "شاحن هذا النموذج (توضيحي)",
 "Designed to minimize charging-related heat in this prototype.": "مصمَّم لتقليل الحرارة الناتجة عن الشحن في هذا النموذج.",
 "NON-HEATING": "غير مُسخِّن",
 "CHARGER": "شاحن",
 "Full System Diagram": "مخطط النظام الكامل",
 "lights up as the simulation runs": "يُضاء أثناء تشغيل المحاكاة",
 "Charger": "الشاحن",
 "Non-heating charger": "شاحن غير مُسخِّن",
 "Phone Battery": "بطارية الهاتف",
 "Receives power": "تستقبل الطاقة",
 "Reads every 1 second": "يقرأ كل ثانية",
 "Decides at 40°C": "يقرر عند 40°C",
 "Cooling Fan + Heat Sink": "مروحة التبريد + المشتت الحراري",
 "Remove the heat": "تزيل الحرارة",
 "Temperature Stabilized": "استقرار الحرارة",
 "Back below 35°C": "العودة تحت 35°C",
 "Live System Status": "حالة النظام المباشرة",
 "Phone": "الهاتف",
 "CONNECTED": "متصل",
 "Cooling Fan": "مروحة التبريد",
 "System": "النظام",
 "ON ({n}%)": "تعمل ({n}%)",
 "OFF": "متوقفة",
 "Event Log": "سجل الأحداث",
 "newest first": "الأحدث أولًا",
 "System ready. Sensor sampling every 1 s.": "النظام جاهز. الحساس يقرأ كل ثانية.",
 "System reset. Sensor sampling every 1 s.": "تمت إعادة ضبط النظام. الحساس يقرأ كل ثانية.",
 "Demonstration started": "بدأ العرض التوضيحي",
 "Demonstration complete": "اكتمل العرض التوضيحي",
 "Charger connected": "تم توصيل الشاحن",
 "Charging started": "بدأ الشحن",
 "Battery full, charging complete": "البطارية ممتلئة، اكتمل الشحن",
 "Charging stopped": "توقف الشحن",
 "Heavy usage started (extra heat load)": "بدأ الاستخدام المكثف (حمل حراري إضافي)",
 "Heavy usage stopped": "توقف الاستخدام المكثف",
 "Temperature reached 40°C": "وصلت الحرارة إلى 40°C",
 "High temperature detected": "تم اكتشاف حرارة مرتفعة",
 "Microcontroller activated cooling": "المتحكم الدقيق شغّل التبريد",
 "Fan ON (100%)": "المروحة تعمل (100%)",
 "Temperature stabilized": "استقرت الحرارة",
 "Fan reduced to standby (40%)": "خُفّضت المروحة إلى وضع الاستعداد (40%)",
 "Fan OFF, system idle": "المروحة متوقفة، النظام في وضع الخمول",
 "Temperature: {T}°C": "درجة الحرارة: {T}°C",
 "Traditional Charging vs Proposed System": "الشحن التقليدي مقابل النظام المقترح",
 "illustrative": "توضيحي",
 "Traditional Charging": "الشحن التقليدي",
 "🔥 More heat": "🔥 حرارة أكثر",
 "⚠️ Higher thermal stress": "⚠️ إجهاد حراري أعلى",
 "📉 Possible performance reduction": "📉 احتمال انخفاض الأداء",
 "Proposed System": "النظام المقترح",
 "❄️ Active cooling": "❄️ تبريد نشط",
 "🌡️ Temperature monitoring": "🌡️ مراقبة درجة الحرارة",
 "⚡ Controlled charging": "⚡ شحن متحكَّم به",
 "🛡️ Better thermal management": "🛡️ إدارة حرارية أفضل",
 "time →": "الزمن ←",
 "Curves show the idea only. They are not measurements and make no promise about battery life.": "المنحنيات توضّح الفكرة فقط، وليست قياسات ولا تَعِد بأي تحسّن في عمر البطارية.",
 "🌡️ Temperature Monitoring": "🌡️ مراقبة الحرارة",
 "Continuously monitors the simulated phone temperature.": "تراقب درجة حرارة الهاتف المحاكاة باستمرار.",
 "❄️ Active Cooling": "❄️ تبريد نشط",
 "Automatically activates the cooling fan when temperature rises.": "تشغّل مروحة التبريد تلقائيًا عند ارتفاع الحرارة.",
 "⚡ Smart Control": "⚡ تحكم ذكي",
 "The microcontroller controls the cooling process automatically.": "يتحكم المتحكم الدقيق في عملية التبريد تلقائيًا.",
 "🔋 Thermal Management": "🔋 إدارة حرارية",
 "Helps maintain a more stable simulated charging temperature.": "تساعد على الحفاظ على درجة حرارة شحن محاكاة أكثر استقرارًا.",
 "How It Works": "كيف يعمل النظام",
 "The phone receives power from the charger.": "يستقبل الهاتف الطاقة من الشاحن.",
 "Temperature Monitoring": "مراقبة الحرارة",
 "The temperature sensor continuously monitors the phone.": "يراقب حساس الحرارة الهاتف باستمرار.",
 "Heat Detection": "اكتشاف الحرارة",
 "If the simulated temperature becomes high, the microcontroller detects it.": "إذا ارتفعت درجة الحرارة المحاكاة، يكتشف المتحكم الدقيق ذلك.",
 "Cooling": "التبريد",
 "The cooling fan and heat sink activate.": "تعمل مروحة التبريد والمشتت الحراري.",
 "Stabilization": "الاستقرار",
 "The temperature decreases and the system returns to a safe simulated operating state.": "تنخفض الحرارة ويعود النظام إلى حالة تشغيل آمنة في المحاكاة.",
 "This is an educational prototype. Temperature values, charging behavior, and cooling performance are simulated and do not represent certified smartphone safety limits or a production charging system.": "هذا نموذج تعليمي. قيم درجات الحرارة وسلوك الشحن وأداء التبريد كلها محاكاة، ولا تمثل حدود أمان معتمدة للهواتف الذكية ولا نظام شحن جاهزًا للإنتاج.",
 "Simulation controls": "عناصر التحكم في المحاكاة",
 "System visualization": "تصور النظام",
 "Phone temperature": "درجة حرارة الهاتف",
 "Temperature sensor": "حساس الحرارة",
 "Full system diagram": "مخطط النظام الكامل",
 "Live system status": "حالة النظام المباشرة",
 "Event log": "سجل الأحداث",
 "Comparison": "المقارنة",
 "Benefits": "الفوائد",
 "How it works": "كيف يعمل النظام",
 "Heat sink with metal fins": "مشتت حراري بزعانف معدنية",
 "Cooling fan": "مروحة التبريد",
 "Smartphone showing battery, temperature and charging status": "هاتف ذكي يعرض البطارية ودرجة الحرارة وحالة الشحن",
 "Illustrative charger heat comparison": "مقارنة توضيحية لحرارة الشاحن",
 "Illustrative curve: temperature keeps rising with no cooling": "منحنى توضيحي: ترتفع الحرارة باستمرار دون تبريد",
 "Illustrative curve: temperature rises, cooling starts at 40 degrees, then it levels off": "منحنى توضيحي: ترتفع الحرارة ثم يبدأ التبريد عند 40 درجة ثم تستقر"
};
  function tr(k, p){
    var v = (lang === 'ar' && AR[k]) ? AR[k] : k;
    if (p) for (var x in p) v = v.split('{' + x + '}').join(p[x]);
    return v;
  }
  var origText = new WeakMap();
  function translateTree(){
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    var n;
    while ((n = w.nextNode())){
      var raw = origText.has(n) ? origText.get(n) : n.nodeValue;
      var key = raw.trim();
      if (!key) continue;
      if (!origText.has(n)) origText.set(n, raw);
      var out = (lang === 'ar' && AR[key]) ? raw.replace(key, function(){ return AR[key]; }) : raw;
      if (n.nodeValue !== out) n.nodeValue = out;
    }
    var els = document.querySelectorAll('[aria-label],[title]');
    for (var i = 0; i < els.length; i++){
      var el = els[i];
      if (el.id === 'btnLang') continue;
      ['aria-label', 'title'].forEach(function(a){
        if (!el.hasAttribute(a)) return;
        el._o = el._o || {};
        if (!(a in el._o)) el._o[a] = el.getAttribute(a);
        var o = el._o[a];
        el.setAttribute(a, (lang === 'ar' && AR[o]) ? AR[o] : o);
      });
    }
  }
  function setLang(l, boot){
    lang = l;
    var root = document.documentElement;
    root.setAttribute('lang', l);
    root.setAttribute('dir', l === 'ar' ? 'rtl' : 'ltr');
    var b = $('btnLang');
    b.textContent = l === 'ar' ? 'English' : 'العربية';
    b.setAttribute('lang', l === 'ar' ? 'en' : 'ar');
    b.setAttribute('aria-label', l === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
    translateTree();
    if (!boot){ try { localStorage.setItem('pcs-lang', l); } catch (e) {} }
    render(); renderDemo();
  }
  function initialLang(){
    try { var v = localStorage.getItem('pcs-lang'); if (v === 'ar' || v === 'en') return v; } catch (e) {}
    return ((navigator.language || '').toLowerCase().indexOf('ar') === 0) ? 'ar' : 'en';
  }

  /* ---------- state ---------- */
  var s = { charging:false, heavy:false, temp:32, battery:65, cool:'off', tick:0 };
  var demo = { active:false, i:0 };
  var hist = [];
  var logEntries = [];
  var lastTempLogTick = -9, lastLoggedT = null;
  var timer = null;

  var FAN = { off:0, command:0, fan:100, active:100, standby:40 };
  var MCU = { off:'MONITORING', command:'COOLING COMMAND SENT', fan:'FAN ACTIVATED', active:'CONTROLLING', standby:'MONITORING' };
  var LV = { safe:'SAFE', normal:'NORMAL', high:'HIGH', crit:'CRITICAL' };

  function Tr(){ return Math.round(s.temp); }
  function level(T){ return T < 35 ? 'safe' : T < 40 ? 'normal' : T <= 45 ? 'high' : 'crit'; }
  function clamp(v,a,b){ return Math.max(a, Math.min(b, v)); }
  function $(id){ return document.getElementById(id); }

  function resetState(){
    s.charging = false; s.heavy = false; s.temp = 32; s.battery = 65; s.cool = 'off'; s.tick = 0;
    hist = []; for (var k = 0; k < 20; k++) hist.push(32);
    lastTempLogTick = -9; lastLoggedT = null;
  }

  /* ---------- event log ---------- */
  function now(){ return new Date().toLocaleTimeString('en-GB'); }
  function log(msg, type, p){
    logEntries.unshift({ t: now(), m: msg, p: p, k: type || 'info' });
    if (logEntries.length > 80) logEntries.pop();
  }
  function renderLog(){
    var el = $('log'); var html = '';
    for (var i = 0; i < logEntries.length; i++){
      var e = logEntries[i];
      html += '<li class="' + e.k + '"><time>' + e.t + '</time><i></i><span>' + tr(e.m, e.p) + '</span></li>';
    }
    el.innerHTML = html;
  }

  /* ---------- physics (free mode) ---------- */
  function simTick(){
    s.tick++;
    if (s.charging){
      s.battery = Math.min(100, s.battery + 0.5);
      if (s.battery >= 100) s.charging = false;
    }
    switch (s.cool){
      case 'off':
        var rate = (s.charging ? 1 : 0) + (s.heavy ? 0.8 : 0) + (s.charging && s.heavy ? 0.4 : 0);
        if (rate > 0) s.temp += rate; else s.temp = Math.max(AMB, s.temp - 0.5);
        if (Tr() >= 40) s.cool = 'command';
        break;
      case 'command': s.cool = 'fan'; break;
      case 'fan': s.cool = 'active'; break;
      case 'active':
        s.temp -= 2;
        if (Tr() <= 34) s.cool = 'standby';
        break;
      case 'standby':
        var teq = AMB + (s.charging ? 4.5 : 0) + (s.heavy ? 6 : 0);
        var d = teq - s.temp;
        s.temp += (d === 0 ? 0 : (d > 0 ? 1 : -1)) * Math.min(Math.abs(d), Math.max(0.15, Math.abs(d) * 0.2));
        if (Tr() >= 40) s.cool = 'command';
        else if (!s.charging && !s.heavy && Tr() <= 33) s.cool = 'off';
        break;
    }
  }

  /* ---------- scripted demonstration ---------- */
  var STEPS = [
    ['Start state', 'Phone at 32°C, battery 65%. System SAFE.'],
    ['Charging begins', 'The charger is active. The battery rises and the phone starts to warm up.'],
    ['40°C reached', 'Temperature reaches 40°C. System changes to HIGH TEMPERATURE.'],
    ['Cooling command sent', 'The microcontroller detects the heat and sends the cooling command.'],
    ['Cooling active', 'The fan starts rotating at 100% and the heat sink activates. COOLING ACTIVE.'],
    ['Temperature falls', '40°C → 38°C → 36°C → 34°C while charging continues.'],
    ['Back to safe', 'System returns to SAFE. Fan speed decreases to 40%. Charging continues.'],
    ['Final state', 'Temperature 34°C · Battery 80% · Cooling STANDBY · System SAFE.']
  ];
  var DEMO_LAST = 17;
  function stepIndex(i){
    if (i <= 1) return 0; if (i <= 9) return 1; if (i === 10) return 2; if (i === 11) return 3;
    if (i === 12) return 4; if (i <= 14) return 5; if (i <= 16) return 6; return 7;
  }
  function applyDemo(i){
    s.heavy = false;
    if (i <= 1){ s.charging = false; s.temp = 32; s.battery = 65; s.cool = 'off'; return; }
    s.charging = true;
    s.battery = 65 + (i - 2);
    if (i <= 10){ s.temp = 32 + (i - 2); s.cool = 'off'; }
    else if (i === 11){ s.temp = 40; s.cool = 'command'; }
    else if (i === 12){ s.temp = 40; s.cool = 'fan'; }
    else if (i === 13){ s.temp = 38; s.cool = 'active'; }
    else if (i === 14){ s.temp = 36; s.cool = 'active'; }
    else { s.temp = 34; s.cool = 'standby'; }
  }

  /* ---------- transitions -> log ---------- */
  function snap(){ return { charging:s.charging, heavy:s.heavy, cool:s.cool, T:Tr(), battery:s.battery }; }
  function commit(p, fromTick){
    var T = Tr();
    if (!p.charging && s.charging){ log('Charger connected', 'info'); log('Charging started', 'info'); }
    if (p.charging && !s.charging) log(s.battery >= 100 ? 'Battery full, charging complete' : 'Charging stopped', 'info');
    if (p.heavy !== s.heavy) log(s.heavy ? 'Heavy usage started (extra heat load)' : 'Heavy usage stopped', 'info');
    var reached = p.T < 40 && T >= 40;
    if (reached){ log('Temperature reached 40°C', 'warn'); log('High temperature detected', 'warn'); }
    if (s.cool === 'command' && p.cool !== 'command') log('Microcontroller activated cooling', 'cool');
    if (s.cool === 'fan' && p.cool !== 'fan') log('Fan ON (100%)', 'cool');
    var stab = s.cool === 'standby' && p.cool !== 'standby';
    if (stab){ log('Temperature stabilized', 'ok'); log('Fan reduced to standby (40%)', 'ok'); }
    if (s.cool === 'off' && p.cool === 'standby') log('Fan OFF, system idle', 'info');
    if (fromTick && !reached && !stab && T !== lastLoggedT && (s.tick - lastTempLogTick >= 2 || s.cool === 'active')){
      log('Temperature: {T}°C', T >= 40 ? 'warn' : 'info', { T: T });
      lastTempLogTick = s.tick; lastLoggedT = T;
    }
    if (reached || stab){ lastLoggedT = T; lastTempLogTick = s.tick; }
    render();
  }

  /* ---------- ticker ---------- */
  function tickOnce(){
    var p = snap();
    if (demo.active){
      demo.i++;
      applyDemo(demo.i);
      s.tick++;
      hist.push(Tr()); if (hist.length > 60) hist.shift();
      commit(p, true);
      renderDemo();
      if (demo.i >= DEMO_LAST){
        demo.active = false;
        log('Demonstration complete', 'ok');
        renderDemo(); render();
      }
    } else {
      simTick();
      hist.push(Tr()); if (hist.length > 60) hist.shift();
      commit(p, true);
    }
    var d = $('senDot'); d.classList.remove('tick'); void d.offsetWidth; d.classList.add('tick');
  }
  function startTicker(){ if (timer) clearInterval(timer); timer = setInterval(tickOnce, 1000); }

  /* ---------- rendering ---------- */
  var NODES = [
    ['Charger', 'Non-heating charger'],
    ['Phone Battery', 'Receives power'],
    ['Temperature Sensor', 'Reads every 1 second'],
    ['Microcontroller', 'Decides at 40°C'],
    ['Cooling Fan + Heat Sink', 'Remove the heat'],
    ['Temperature Stabilized', 'Back below 35°C']
  ];
  function buildStatic(){
    var f = '';
    for (var i = 0; i < 9; i++) f += '<rect class="fin" x="14" y="' + (14 + i * 20) + '" width="104" height="11" rx="5.5"/>';
    $('fins').innerHTML = f;
    var h = '';
    for (var j = 0; j < NODES.length; j++){
      h += '<div class="node" data-n="' + j + '"><span class="n">' + (j + 1) + '</span><b>' + NODES[j][0] + '</b><span class="d">' + NODES[j][1] + '</span></div>';
      if (j < NODES.length - 1) h += '<div class="link" data-l="' + j + '"></div>';
    }
    $('flow').innerHTML = h;
    var dd = '';
    for (var k = 0; k < STEPS.length; k++) dd += '<span>' + (k + 1) + '</span>';
    $('demoDots').innerHTML = dd;
  }

  function setStatus(id, text, tone, p){
    var el = $(id);
    el.className = 't-' + tone;
    el.innerHTML = '<span class="dot"></span>' + tr(text, p);
  }

  function render(){
    var T = Tr(), lv = level(T), root = document.documentElement;
    var cool = s.cool, fan = FAN[cool];
    var coolingOn = (cool === 'fan' || cool === 'active');
    root.setAttribute('data-level', lv);

    var heat = clamp((T - 30) / 14, 0, 1);
    var stage = $('stage');
    stage.style.setProperty('--heat', heat.toFixed(2));
    stage.style.setProperty('--wave-op', clamp((T - 33) / 7, 0, 1).toFixed(2));
    stage.style.setProperty('--wave-dur', (coolingOn ? 1.2 : 1.9) + 's');
    stage.style.setProperty('--air', (fan / 100).toFixed(2));
    stage.style.setProperty('--air-dur', (1.5 - fan / 100 * 0.9).toFixed(2) + 's');
    $('phone').style.setProperty('--glow-a', (0.12 + heat * 0.5).toFixed(2));
    var sink = coolingOn ? 'cool' : (cool === 'standby' ? 'standby' : (T >= 35 ? 'absorb' : 'idle'));
    stage.setAttribute('data-sink', sink);
    $('phoneCol').className = 'col phone-col' + (s.charging ? ' charging' : '');
    $('battFill').parentNode.parentNode.className = 'batt' + (s.charging ? ' charging' : '');

    /* banner */
    var b;
    if (cool === 'command') b = ['b-high', '⚠️ HIGH TEMPERATURE', 'Microcontroller detected {T}°C. Cooling command sent.', 'high', 'HIGH TEMP'];
    else if (coolingOn) b = ['b-cool', '❄️ COOLING ACTIVE', 'Fan at 100% and heat sink active. Temperature is falling.', 'cool', '❄️ COOLING ACTIVE'];
    else if (cool === 'standby') b = ['b-stable', '🟢 TEMPERATURE STABILIZED', 'Fan reduced to 40%. Charging continues.', 'stable', '🟢 STABILIZED'];
    else if (lv === 'crit') b = ['b-crit', '🔴 CRITICAL TEMPERATURE', 'Above the prototype critical threshold.', 'high', 'CRITICAL'];
    else if (lv === 'high') b = ['b-high', '⚠️ HIGH TEMPERATURE', 'Waiting for the microcontroller to respond.', 'high', 'HIGH TEMP'];
    else if (lv === 'normal') b = ['b-normal', 'SYSTEM NORMAL', s.charging ? 'Charging. The sensor is watching the temperature.' : 'Phone is warm. The sensor is watching.', '', 'SYSTEM NORMAL'];
    else b = ['b-safe', '🟢 SYSTEM SAFE', s.charging ? 'Charging. The sensor is watching the temperature.' : 'Idle. Press Start Charging.', '', 'SYSTEM SAFE'];
    $('banner').className = 'banner ' + b[0];
    $('bannerT').textContent = tr(b[1]); $('bannerS').textContent = tr(b[2], { T: T });
    $('scrBanner').className = 'scr-banner ' + b[3]; $('scrBanner').textContent = tr(b[4]);

    var sys = (cool === 'command' || coolingOn) ? 'COOLING' : LV[lv];
    $('sysPillT').textContent = tr('SYSTEM: {S}', { S: tr(sys) });

    /* phone screen */
    var bat = Math.round(s.battery);
    $('scrTime').textContent = new Date().toLocaleTimeString('en-GB', { hour:'2-digit', minute:'2-digit' });
    $('scrBat').textContent = bat;
    $('scrBatFill').style.width = bat + '%';
    $('scrTemp').textContent = T + '°C';
    $('scrLvl').textContent = tr(LV[lv]);
    $('thermoFill').style.height = (clamp((T - 25) / 25, 0.04, 1) * 100).toFixed(0) + '%';
    $('scrChg').textContent = tr(s.charging ? '⚡ Charging' : (bat >= 100 ? 'Fully charged' : 'Not charging'));

    /* temperature card */
    $('tempNum').innerHTML = T + '<small>°C</small>';
    $('levelPill').textContent = tr(LV[lv]);
    $('marker').style.left = (clamp(T, 25, 50) - 25) / 25 * 100 + '%';
    var sensorTxt = coolingOn ? 'MONITORING' : 'ACTIVE';
    $('sensorInline').textContent = tr(sensorTxt);
    $('senStatus').textContent = tr(sensorTxt);
    $('senReading').textContent = T + '°C';
    drawSpark();

    /* battery card */
    $('battFill').style.width = bat + '%';
    $('battText').textContent = bat + '%';
    $('battStatus').textContent = tr(s.charging ? 'Charging ⚡' : (bat >= 100 ? 'Full' : 'Not charging'));
    $('battTemp').textContent = T + '°C';
    var bp = $('battPill');
    bp.textContent = tr(s.charging ? 'CHARGING' : (bat >= 100 ? 'FULL' : 'IDLE'));
    bp.style.setProperty('--level', s.charging ? 'var(--cyan)' : 'var(--steel)');
    bp.style.setProperty('--level-soft', s.charging ? 'var(--cyan-soft)' : 'var(--surface-2)');
    bp.style.setProperty('--level-ink', s.charging ? 'var(--cyan-ink)' : 'var(--muted)');

    /* microcontroller */
    var m = MCU[cool];
    $('mcuStatus').textContent = tr(m);
    var li = $('mcuList').children;
    for (var i = 0; i < li.length; i++) li[i].className = li[i].getAttribute('data-m') === m ? 'on' : '';
    $('chip').setAttribute('data-on', cool === 'command' ? '2' : cool === 'fan' ? '3' : cool === 'active' ? '4' : '1');

    /* charger */
    if (s.charging){
      setStatus('chgStatus', '🟢 ACTIVE', 'ok'); $('chgPower').textContent = tr('Stable'); $('chgTemp').textContent = tr('Low Heat');
    } else {
      setStatus('chgStatus', 'STANDBY', 'mute'); $('chgPower').textContent = tr('No load'); $('chgTemp').textContent = tr('Ambient');
    }

    /* fan & sink captions */
    $('fanState').textContent = tr(fan > 0 ? 'Fan: ON' : 'Fan: OFF');
    $('fanSpeed').textContent = tr('Fan Speed: {n}%', { n: fan });
    var sinkActive = coolingOn;
    var ss = $('sinkState');
    ss.textContent = tr(sinkActive ? 'ACTIVE' : 'STANDBY');
    ss.className = 'cap-v ' + (sinkActive ? 't-cool' : 't-mute');
    $('sinkNote').textContent = tr(sinkActive ? 'Dissipating heat' : (sink === 'absorb' ? 'Heat building up' : (sink === 'standby' ? 'Holding temperature' : 'Idle')));

    /* live status table */
    setStatus('st-battery', s.charging ? 'CHARGING' : (bat >= 100 ? 'FULL' : 'IDLE'), s.charging ? 'cool' : 'mute');
    setStatus('st-sensor', sensorTxt, 'ok');
    setStatus('st-mcu', cool === 'off' || cool === 'standby' ? 'MONITORING' : (cool === 'active' ? 'CONTROLLING' : m), cool === 'off' || cool === 'standby' ? 'ok' : 'cool');
    setStatus('st-fan', fan > 0 ? 'ON ({n}%)' : 'OFF', fan > 0 ? 'cool' : 'mute', { n: fan });
    setStatus('st-sink', sinkActive ? 'ACTIVE' : 'STANDBY', sinkActive ? 'cool' : 'mute');
    setStatus('st-charger', s.charging ? 'ACTIVE' : 'STANDBY', s.charging ? 'ok' : 'mute');
    setStatus('st-system', sys, sys === 'COOLING' ? 'cool' : (lv === 'safe' ? 'ok' : lv === 'normal' ? 'info' : lv === 'high' ? 'warn' : 'crit'));

    /* flow diagram */
    var sensorLit = s.charging || s.heavy || cool !== 'off';
    var lit = [s.charging, s.charging, sensorLit, cool !== 'off', fan > 0, cool === 'standby'];
    var cur = -1;
    for (var n = 0; n < lit.length; n++) if (lit[n]) cur = n;
    var nodes = $('flow').querySelectorAll('.node');
    for (var a = 0; a < nodes.length; a++) nodes[a].className = 'node' + (lit[a] ? ' lit' : '') + (a === cur ? ' cur' : '');
    var links = $('flow').querySelectorAll('.link');
    for (var c = 0; c < links.length; c++) links[c].className = 'link' + (lit[c] && lit[c + 1] ? ' on' : '');

    /* controls */
    var bc = $('btnCharge');
    bc.textContent = tr(s.charging ? '⏹ Stop Charging' : (bat >= 100 ? 'Battery full' : '🔌 Start Charging'));
    bc.className = 'btn cyan' + (s.charging ? ' on' : '');
    bc.disabled = demo.active || (!s.charging && bat >= 100);
    $('chkHeavy').disabled = demo.active;
    $('chkHeavy').checked = s.heavy;
    $('btnDemo').disabled = demo.active;
    $('btnDemo').textContent = tr(demo.active ? 'Demonstration running…' : '▶ Run Full Demonstration');

    renderLog();
  }

  function drawSpark(){
    var n = hist.length, pts = [];
    for (var i = 0; i < n; i++){
      var x = 300 - (n - 1 - i) * 5;
      var y = 90 * (1 - (clamp(hist[i], 28, 48) - 28) / 20);
      pts.push([x, y]);
    }
    $('sparkLine').setAttribute('points', pts.map(function(p){ return p[0] + ',' + p[1].toFixed(1); }).join(' '));
    $('sparkArea').setAttribute('points', pts[0][0] + ',90 ' + pts.map(function(p){ return p[0] + ',' + p[1].toFixed(1); }).join(' ') + ' 300,90');
    var last = pts[pts.length - 1];
    var dot = $('sparkDot');
    dot.style.left = (last[0] / 300 * 100) + '%';
    dot.style.top = (last[1] / 90 * 100) + '%';
  }

  function renderDemo(){
    var idx = stepIndex(demo.i);
    var started = demo.active || demo.i > 0;
    var dots = $('demoDots').children;
    for (var i = 0; i < dots.length; i++){
      dots[i].className = !started ? '' : (i < idx ? 'done' : (i === idx ? (demo.active ? 'now' : 'done') : ''));
    }
    if (!started){
      $('demoNo').textContent = tr('DEMO');
      $('demoTitle').textContent = tr('Ready to run');
      $('demoText').textContent = tr('Press Run Full Demonstration to watch the whole cycle, or use Start Charging to run it yourself.');
      $('demoBar').style.width = '0%';
      $('demoClock').textContent = tr('about 17 seconds');
      return;
    }
    var finished = !demo.active && demo.i >= DEMO_LAST;
    $('demoNo').textContent = finished ? tr('DONE') : tr('STEP {n} OF {m}', { n: idx + 1, m: STEPS.length });
    $('demoTitle').textContent = tr(STEPS[idx][0]);
    $('demoText').textContent = finished ? tr('Demonstration complete. ') + tr(STEPS[7][1]) : tr(STEPS[idx][1]);
    $('demoBar').style.width = (demo.i / DEMO_LAST * 100) + '%';
    $('demoClock').textContent = finished ? tr('finished') : tr('{n} s left', { n: DEMO_LAST - demo.i });
  }

  /* ---------- fan animation ---------- */
  var angle = 0, speed = 0, lastT = performance.now();
  function loop(t){
    var dt = Math.min(0.1, (t - lastT) / 1000); lastT = t;
    var target = FAN[s.cool] / 100 * 720 * (RM ? 0.15 : 1);
    speed += (target - speed) * Math.min(1, dt * 2.2);
    angle = (angle + speed * dt) % 360;
    $('fanBlades').setAttribute('transform', 'rotate(' + angle.toFixed(1) + ' 60 60)');
    $('fanBlur').style.opacity = (clamp(speed / 720, 0, 1) * 0.28).toFixed(2);
    requestAnimationFrame(loop);
  }

  /* ---------- actions ---------- */
  function startDemo(){
    if (demo.active) return;
    var p = snap();
    resetState();
    logEntries = [];
    log('Demonstration started', 'info');
    demo.active = true; demo.i = 0;
    applyDemo(0);
    commit(p, false);
    renderDemo();
    startTicker();
  }
  function toggleCharging(){
    if (demo.active) return;
    var p = snap();
    if (s.charging) s.charging = false;
    else if (s.battery < 100) s.charging = true;
    commit(p, false);
  }
  function toggleHeavy(){
    if (demo.active) { $('chkHeavy').checked = s.heavy; return; }
    var p = snap();
    s.heavy = $('chkHeavy').checked;
    commit(p, false);
  }
  function doReset(){
    demo.active = false; demo.i = 0;
    resetState();
    logEntries = [];
    log('System reset. Sensor sampling every 1 s.', 'info');
    renderDemo();
    render();
    startTicker();
  }

  /* ---------- boot ---------- */
  buildStatic();
  resetState();
  log('System ready. Sensor sampling every 1 s.', 'info');
  $('btnDemo').addEventListener('click', startDemo);
  $('btnCharge').addEventListener('click', toggleCharging);
  $('chkHeavy').addEventListener('change', toggleHeavy);
  $('btnReset').addEventListener('click', doReset);
  $('btnLang').addEventListener('click', function(){ setLang(lang === 'ar' ? 'en' : 'ar'); });
  setLang(initialLang(), true);
  startTicker();
  requestAnimationFrame(loop);
})();

<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover">
<title>Покемоны Пороховых</title>
<style>
@import url('https://cdn.jsdelivr.net/npm/@fontsource-variable/nunito@5.2.5/index.min.css');
*{margin:0;padding:0;box-sizing:border-box;-webkit-tap-highlight-color:transparent}
:root{
  --bg:#151a2b;--panel:#fffdf8;--panel2:#f3eee3;--ink:#1d2436;--muted:#68718a;
  --accent:#ff6b35;--accent2:#0ea5e9;--good:#15803d;--bad:#dc2626;--gold:#f59e0b;
  --frame1:#43291a;--frame2:#22140c;--edge:#d19a58;--frameInk:#ffedcf;
  --hud:#fff8ec;--hudInk:#2a1a10;--shadow:0 10px 28px rgba(0,0,0,.34);
}
body[data-theme=dark]{--bg:#070a13;--panel:#1c2235;--panel2:#141a2a;--ink:#f2f6ff;--muted:#aab6d4;--frame1:#141414;--frame2:#060606;--edge:#646c82;--frameInk:#e8edff;--hud:#2d354b;--hudInk:#f2f6ff;--accent:#fb7185;--accent2:#38bdf8;--good:#4ade80;--bad:#f87171}
body[data-theme=ocean]{--bg:#062b3a;--panel:#eaf8fc;--panel2:#d7eff6;--ink:#083344;--muted:#417080;--frame1:#083344;--frame2:#041e28;--edge:#22d3ee;--frameInk:#cffafe;--hud:#ecfeff;--hudInk:#083344;--accent:#0891b2;--accent2:#f97316;--good:#0f766e;--bad:#be123c}
body[data-theme=forest]{--bg:#12210f;--panel:#f2f9e9;--panel2:#e3f0d5;--ink:#1a2e05;--muted:#4f6d3c;--frame1:#2e200e;--frame2:#170f06;--edge:#84cc16;--frameInk:#ecfccb;--hud:#f7fee7;--hudInk:#1a2e05;--accent:#4d7c0f;--accent2:#ea580c;--good:#166534;--bad:#b91c1c}
body[data-theme=sunset]{--bg:#2a1024;--panel:#fff2f3;--panel2:#ffe5e7;--ink:#400d2f;--muted:#8c4d65;--frame1:#3c0a2b;--frame2:#1e0416;--edge:#fb7185;--frameInk:#ffe4e6;--hud:#fff1f2;--hudInk:#400d2f;--accent:#e11d48;--accent2:#f59e0b;--good:#15803d;--bad:#be123c}
body[data-theme=retro]{--bg:#251808;--panel:#fdf4d8;--panel2:#f6e7bf;--ink:#402a0f;--muted:#7c5e30;--frame1:#402a0f;--frame2:#1d1206;--edge:#d97706;--frameInk:#fef3c7;--hud:#fef9e7;--hudInk:#402a0f;--accent:#b45309;--accent2:#047857;--good:#166534;--bad:#b91c1c}
html,body{width:100%;height:100%;overflow:hidden;background:var(--bg);color:var(--ink);font-family:'Nunito Variable',system-ui,sans-serif}
button{font:inherit;color:inherit;border:0;background:none;cursor:pointer}
.screen{position:fixed;inset:0;display:none}.screen.on{display:flex}
#start{align-items:center;justify-content:center;padding:20px;overflow:auto;background:radial-gradient(ellipse at 18% 18%,#f97316 0%,transparent 48%),radial-gradient(ellipse at 82% 82%,#0ea5e9 0%,transparent 48%),linear-gradient(135deg,#1e1b4b,#312e81)}
.start-card{width:min(880px,100%);background:rgba(255,255,255,.12);backdrop-filter:blur(18px);border:1px solid rgba(255,255,255,.25);border-radius:30px;padding:clamp(18px,4vw,38px);color:#fff;box-shadow:0 30px 80px rgba(0,0,0,.45)}
.start-card h1{font-size:clamp(2rem,5vw,3.4rem);line-height:1;font-weight:900;letter-spacing:-1px;text-align:center;text-shadow:0 4px 0 rgba(0,0,0,.25)}
.start-card .sub{text-align:center;opacity:.92;margin:10px 0 8px;font-weight:800;font-size:clamp(1rem,2.5vw,1.3rem)}
.start-badges{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-bottom:24px}
.start-badges span{background:rgba(255,255,255,.16);padding:5px 12px;border-radius:999px;font-size:.78rem;font-weight:800}
.start-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.starter{background:rgba(255,255,255,.14);border:2px solid transparent;border-radius:20px;padding:12px;text-align:center;transition:.2s;color:#fff}
.starter:hover{transform:translateY(-4px);background:rgba(255,255,255,.22)}
.starter.sel{border-color:#fde047;background:rgba(253,224,71,.2);box-shadow:0 0 26px rgba(253,224,71,.35)}
.starter canvas{width:98px;height:98px;display:block;margin:auto}
.starter b{display:block;font-size:.96rem}.starter small{opacity:.86;font-size:.75rem}
.time-pick{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin:20px 0 6px}
.time-pick button{padding:9px 16px;border-radius:999px;background:rgba(255,255,255,.15);color:#fff;font-weight:800;border:2px solid transparent}
.time-pick button.sel{border-color:#fde047;background:rgba(253,224,71,.22)}
.go{display:block;margin:10px auto 0;padding:14px 58px;border-radius:999px;background:linear-gradient(135deg,#f97316,#ef4444);color:#fff;font-size:1.3rem;font-weight:900;letter-spacing:3px;box-shadow:0 10px 30px rgba(239,68,68,.4);transition:.2s}
.go:hover:not(:disabled){transform:scale(1.04)}.go:disabled{opacity:.35;cursor:not-allowed}
#game{align-items:center;justify-content:center;padding:12px;background:radial-gradient(circle at 50% 0%,color-mix(in srgb,var(--edge) 20%,transparent),transparent 60%),var(--bg)}
.tv{position:relative;width:min(1520px,100%);height:100%;max-height:960px;background:linear-gradient(145deg,var(--frame1),var(--frame2));border-radius:34px;padding:104px 22px 86px;box-shadow:0 0 0 3px var(--edge),0 24px 70px rgba(0,0,0,.6),inset 0 2px 8px rgba(255,255,255,.1)}
.tv:before{content:"";position:absolute;inset:9px;border-radius:28px;border:1px solid rgba(255,255,255,.08);pointer-events:none}
.tv:after{content:"";position:absolute;left:50%;bottom:34px;transform:translateX(-50%);width:120px;height:14px;border-radius:8px;background:repeating-linear-gradient(90deg,rgba(255,255,255,.14) 0 4px,transparent 4px 9px);opacity:.5;pointer-events:none}
.tv-title{position:absolute;top:18px;left:50%;transform:translateX(-50%);color:var(--frameInk);font-weight:900;letter-spacing:3px;text-transform:uppercase;font-size:clamp(.82rem,2vw,1.18rem);display:flex;align-items:center;gap:10px;white-space:nowrap;text-shadow:0 2px 4px #000;max-width:calc(100% - 40px);overflow:hidden;text-overflow:ellipsis}
.tv-title i{width:12px;height:12px;border-radius:50%;box-shadow:0 0 12px currentColor;flex-shrink:0}
.tv-screen{position:relative;width:100%;height:100%;border-radius:18px;overflow:hidden;background:#000;box-shadow:inset 0 0 44px #000,0 0 0 4px #000}
.tv-screen:after{content:"";position:absolute;inset:0;pointer-events:none;background:repeating-linear-gradient(0deg,rgba(255,255,255,.025) 0 1px,transparent 1px 3px);mix-blend-mode:overlay}
#cv{display:block;width:100%;height:100%;touch-action:none;cursor:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='26' height='26'><g opacity='.62'><circle cx='13' cy='13' r='11' fill='white' stroke='black' stroke-width='1.5'/><path d='M2 13a11 11 0 0 1 22 0z' fill='%23ef4444'/><path d='M2 13h22' stroke='black' stroke-width='1.5'/><circle cx='13' cy='13' r='4' fill='white' stroke='black' stroke-width='1.5'/></g></svg>") 13 13,crosshair}
@media(pointer:coarse){#cv{cursor:default}}
.hudTL,.hudTR,.hudBL,.hudBR{position:absolute;z-index:6;display:flex;gap:6px;align-items:center}
.hudTL{top:56px;left:24px;flex-wrap:nowrap;max-width:calc(100% - 220px)}
.hudTR{top:54px;right:24px}
.hudBL{bottom:24px;left:24px}.hudBR{bottom:24px;right:24px;flex-wrap:wrap;justify-content:flex-end;max-width:calc(100% - 220px)}
.chip,.ibtn,.abtn{background:var(--hud);color:var(--hudInk);border-radius:13px;box-shadow:0 4px 12px rgba(0,0,0,.32);font-weight:900;white-space:nowrap}
.chip{display:flex;align-items:center;gap:5px;padding:8px 11px;font-size:.82rem}
.ibtn{width:44px;height:44px;display:grid;place-items:center;font-size:1.28rem;transition:.15s}
.ibtn:hover,.abtn:hover{transform:translateY(-2px);filter:brightness(1.06)}
.abtn{display:flex;align-items:center;gap:6px;padding:10px 15px;font-size:.86rem;transition:.15s;position:relative;overflow:hidden}
.abtn.hot{background:linear-gradient(135deg,#f97316,#ef4444);color:#fff;animation:pulse 1.4s infinite}
.abtn.boss{background:linear-gradient(135deg,#7f1d1d,#dc2626,#f59e0b);background-size:220% 220%;color:#fff;font-size:1rem;padding:12px 20px;border:2px solid #fde047;transform:scale(1.06);animation:megaGlow 1.05s infinite,megaShift 3s linear infinite;box-shadow:0 0 0 3px rgba(253,224,71,.35),0 0 26px rgba(239,68,68,.85)}
.abtn.boss span{display:inline!important}
.abtn.boss:after{content:"";position:absolute;inset:0;background:linear-gradient(115deg,transparent 32%,rgba(255,255,255,.55) 50%,transparent 68%);transform:translateX(-120%);animation:sheen 1.7s infinite}
.abtn.boss .ico{display:inline-block;animation:crown .9s ease-in-out infinite}
@keyframes megaGlow{50%{box-shadow:0 0 0 9px rgba(239,68,68,0),0 0 40px rgba(239,68,68,1)}}
@keyframes megaShift{50%{background-position:100% 50%}}
@keyframes sheen{60%,100%{transform:translateX(120%)}}
@keyframes crown{50%{transform:translateY(-3px) rotate(-8deg)}}
@keyframes pulse{50%{box-shadow:0 0 0 10px rgba(249,115,22,0)}}
.notifs{position:absolute;top:12px;left:50%;transform:translateX(-50%);z-index:20;display:flex;flex-direction:column;gap:6px;align-items:center;pointer-events:none;max-width:92%}
.notif{background:var(--panel);color:var(--ink);padding:8px 18px;border-radius:12px;font-weight:800;font-size:.85rem;box-shadow:var(--shadow);border-left:5px solid var(--accent2);animation:nIn .25s ease-out;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;transition:opacity .35s,transform .35s}
.notif.out{opacity:0;transform:translateY(-46px)}
.notif.good{border-color:var(--good)}.notif.bad{border-color:var(--bad)}.notif.gold{border-color:var(--gold);background:linear-gradient(135deg,rgba(253,224,71,.25),var(--panel))}
@keyframes nIn{from{opacity:0;transform:translateY(24px)}}
.shiny-pop{position:absolute;z-index:30;pointer-events:none;transform:translate(-50%,-50%);animation:shinyPop 1s ease-out forwards;display:grid;place-items:center}
.shiny-pop svg{position:absolute;inset:-46px;width:calc(100% + 92px);height:calc(100% + 92px);animation:spin 1s linear}
.shiny-pop b{position:relative;background:linear-gradient(135deg,#fde047,#f59e0b);color:#422006;padding:7px 16px;border-radius:999px;font-size:1rem;font-weight:900;letter-spacing:2px;box-shadow:0 0 24px #fde047,0 4px 12px rgba(0,0,0,.4);white-space:nowrap}
@keyframes shinyPop{0%{opacity:0;transform:translate(-50%,-50%) scale(.2)}18%{opacity:1;transform:translate(-50%,-50%) scale(1.15)}45%{transform:translate(-50%,-50%) scale(1)}100%{opacity:0;transform:translate(-50%,-70%) scale(1.35)}}
@keyframes spin{to{transform:rotate(360deg)}}
.overlay{position:fixed;inset:0;background:rgba(4,6,15,.68);backdrop-filter:blur(6px);z-index:100;display:none;align-items:center;justify-content:center;padding:16px}
.overlay.on{display:flex;animation:fade .25s}
@keyframes fade{from{opacity:0}}
.modal{position:relative;width:min(940px,100%);max-height:88vh;overflow:auto;background:var(--panel);color:var(--ink);border-radius:24px;padding:24px;box-shadow:0 30px 90px rgba(0,0,0,.6);border:1px solid color-mix(in srgb,var(--ink) 12%,transparent);animation:up .3s}
@keyframes up{from{opacity:0;transform:translateY(24px)}}
.modal h2{display:flex;justify-content:space-between;align-items:center;gap:10px;font-size:1.32rem;margin-bottom:14px;font-weight:900}
.x{font-size:1.6rem;opacity:.55;padding:0 8px;flex-shrink:0}.x:hover{opacity:1}
.tabs{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px}
.tab{padding:6px 13px;border-radius:999px;background:var(--panel2);color:var(--ink);font-weight:800;font-size:.8rem}
.tab.on{background:var(--accent);color:#fff}
.dex{display:grid;grid-template-columns:repeat(auto-fill,minmax(136px,1fr));gap:10px}
.card{background:var(--panel2);border-radius:16px;padding:10px;text-align:center;border:2px solid transparent;position:relative;transition:.15s;cursor:pointer}
.card:hover{transform:translateY(-3px)}
.card.caught{background:linear-gradient(135deg,color-mix(in srgb,var(--accent2) 14%,var(--panel2)),color-mix(in srgb,var(--accent) 10%,var(--panel2)))}
.card.shiny{border-color:#fbbf24;box-shadow:0 0 16px rgba(251,191,36,.4)}
.card canvas{width:74px;height:74px;display:block;margin:auto}
.card b{display:block;font-size:.8rem;margin-top:3px;color:var(--ink)}
.card small{display:block;font-size:.68rem;color:var(--muted);margin-top:1px}
.card.unknown canvas{filter:brightness(.22) contrast(1.4)}
.card.unknown{background:color-mix(in srgb,var(--ink) 12%,var(--panel2))}
.card.unknown b{opacity:.78}.card.unknown small{opacity:.62}
.badge{position:absolute;top:5px;right:5px;font-size:.62rem;background:rgba(0,0,0,.55);color:#fff;padding:2px 5px;border-radius:8px}
.mapWrap{background:linear-gradient(135deg,#d9f99d,#bfdbfe);border-radius:18px;padding:8px}
#mapSvg{width:100%;height:auto;max-height:54vh;display:block}
.mloc{cursor:pointer}.mloc.lock{opacity:.38;cursor:not-allowed}.mloc:not(.lock):hover .mc{filter:brightness(1.18)}
.battleTop{display:flex;gap:10px;justify-content:center;margin-bottom:12px;flex-wrap:wrap}
.arena{display:grid;grid-template-columns:1fr auto 1fr;gap:14px;align-items:center;background:linear-gradient(90deg,rgba(239,68,68,.09),transparent,rgba(34,197,94,.09));border-radius:18px;padding:14px;margin-bottom:12px}
.side{text-align:center;padding:10px;border-radius:16px}
.side.enemy{background:rgba(239,68,68,.1);border:2px solid rgba(239,68,68,.3)}
.side.mine{background:rgba(34,197,94,.1);border:2px solid rgba(34,197,94,.3)}
.side .lbl,.raidLbl{font-size:.72rem;font-weight:900;letter-spacing:2px;text-transform:uppercase;margin-bottom:4px}
.side.enemy .lbl{color:var(--bad)}.side.mine .lbl{color:var(--good)}
.side canvas{width:106px;height:106px}
.vs{font-size:1.7rem;font-weight:900;color:var(--accent)}
.result{position:absolute;inset:0;background:rgba(4,6,15,.8);display:grid;place-items:center;z-index:10;border-radius:24px;animation:fade .25s}
.result div{text-align:center;font-size:clamp(1.4rem,4vw,2.2rem);font-weight:900;padding:20px}
.result .win{color:#4ade80}.result .lose{color:#f87171}
.result small{display:block;font-size:.55em;margin-top:8px;color:#fff}
.scrollWrap{position:relative;border-top:1px solid color-mix(in srgb,var(--ink) 12%,transparent);border-bottom:1px solid color-mix(in srgb,var(--ink) 12%,transparent);padding:4px 0}
.sbtn{position:absolute;top:50%;transform:translateY(-50%);width:26px;height:56%;display:grid;place-items:center;font-size:1.3rem;opacity:.35;z-index:2}.sbtn:hover{opacity:.9}.sbtn.l{left:0}.sbtn.r{right:0}
.hscroll{overflow-x:auto;overflow-y:hidden;padding:8px 28px;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--ink) 18%,transparent) transparent}
.hscroll::-webkit-scrollbar{height:3px}.hscroll::-webkit-scrollbar-thumb{background:color-mix(in srgb,var(--ink) 18%,transparent);border-radius:2px}
.team{display:flex;gap:8px;min-width:max-content}
.pick{width:102px;flex-shrink:0;padding:7px;background:var(--panel2);border-radius:12px;border:2px solid transparent;text-align:center;transition:.15s}
.pick:hover{filter:brightness(1.05)}.pick.sel{border-color:var(--accent);background:color-mix(in srgb,var(--accent) 14%,var(--panel2))}
.pick canvas{width:56px;height:56px;display:block;margin:auto}
.pick b{display:block;font-size:.72rem;color:var(--ink)}.pick small{font-size:.66rem;color:var(--muted)}
.btn{padding:10px 22px;border-radius:12px;font-weight:900;transition:.15s}
.btn:hover{filter:brightness(1.08)}.btn:disabled{opacity:.45;cursor:not-allowed}
.btn.pri{background:var(--accent);color:#fff}.btn.sec{background:var(--panel2);color:var(--ink)}.btn.danger{background:var(--bad);color:#fff}
.raidGrid{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.raidEnemy,.raidTeam{border-radius:18px;padding:14px}
.raidEnemy{background:rgba(239,68,68,.09);border:2px solid rgba(239,68,68,.25);text-align:center}
.raidTeam{background:rgba(34,197,94,.09);border:2px solid rgba(34,197,94,.25)}
.rlist{display:flex;flex-direction:column;gap:6px;max-height:250px;overflow:auto;padding-right:4px}
.ritem{display:flex;align-items:center;gap:8px;padding:6px 8px;background:var(--panel2);border-radius:10px;border:2px solid transparent;text-align:left}
.ritem.sel{border-color:var(--accent);background:color-mix(in srgb,var(--accent) 12%,var(--panel2))}
.ritem canvas{width:38px;height:38px;flex-shrink:0}
.ritem b{font-size:.78rem;display:block}.ritem small{font-size:.66rem;color:var(--muted)}
.themes{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}
.themeBtn{padding:15px;border-radius:14px;color:#fff;font-weight:900;text-shadow:0 1px 3px #000;border:3px solid transparent}
.themeBtn.on{border-color:#fde047;box-shadow:0 0 16px rgba(253,224,71,.4)}
.final{text-align:center}.final h1{font-size:2.1rem;font-weight:900;background:linear-gradient(135deg,#fbbf24,#f97316);-webkit-background-clip:text;background-clip:text;color:transparent;margin-bottom:12px}
.statsGrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(124px,1fr));gap:10px;margin:16px 0}
.stat{background:var(--panel2);padding:12px;border-radius:14px;text-align:center}
.stat b{display:block;font-size:1.7rem;color:var(--accent)}.stat small{color:var(--muted);font-size:.78rem}
.help p{margin:6px 0;font-size:.93rem;line-height:1.55}.help h3{color:var(--accent);margin:14px 0 5px;font-size:1rem}
.fly{position:absolute;width:42px;height:42px;z-index:15;pointer-events:none;transition:left .42s cubic-bezier(.3,.7,.4,1),top .42s cubic-bezier(.3,.7,.4,1),transform .42s}
.detailGrid{display:grid;grid-template-columns:160px 1fr;gap:18px;align-items:center}
.detailGrid canvas{width:150px;height:150px;background:var(--panel2);border-radius:18px}
.detailGrid p{margin:5px 0;font-size:.92rem}
.locMini{width:54px;height:54px;vertical-align:middle;margin-left:6px}
::-webkit-scrollbar{width:8px;height:8px}::-webkit-scrollbar-track{background:var(--panel2)}::-webkit-scrollbar-thumb{background:color-mix(in srgb,var(--accent) 55%,var(--panel2));border-radius:4px}::-webkit-scrollbar-thumb:hover{background:var(--accent)}
@media(max-width:700px){
  #game{padding:6px}.tv{padding:76px 10px 62px;border-radius:22px;width:100%;height:100%}
  .tv:after{bottom:26px;width:80px;height:10px}
  .tv-title{top:10px;font-size:.76rem;letter-spacing:1.5px}.tv-title i{width:9px;height:9px}
  .hudTL,.hudTR{top:40px}.hudTL{left:12px;gap:4px;max-width:calc(100% - 150px)}.hudTR{right:12px;gap:4px}
  .hudBL{bottom:13px;left:12px}.hudBR{bottom:13px;right:12px;gap:4px;max-width:calc(100% - 150px)}
  .chip{padding:6px 7px;font-size:.68rem;gap:3px}.ibtn{width:34px;height:34px;font-size:1.05rem;border-radius:10px}
  .abtn{padding:8px 9px;font-size:.72rem;border-radius:10px;gap:4px}.abtn.boss{font-size:.8rem;padding:9px 12px}
  .start-grid{gap:6px}.starter{padding:7px}.starter canvas{width:68px;height:68px}.starter b{font-size:.76rem}.starter small{font-size:.62rem}
  .modal{padding:16px;border-radius:18px}.modal h2{font-size:1.06rem}
  .arena{grid-template-columns:1fr;gap:8px;padding:10px}.vs{font-size:1.2rem}.side canvas{width:82px;height:82px}
  .raidGrid{grid-template-columns:1fr}.dex{grid-template-columns:repeat(auto-fill,minmax(104px,1fr))}
  .notif{font-size:.72rem;padding:6px 11px}.detailGrid{grid-template-columns:1fr;text-align:center}.detailGrid canvas{margin:auto}
}
@media(max-width:390px){.abtn span{display:none}.abtn{padding:8px 10px}.hudTL{max-width:calc(100% - 132px)}.hudBR{max-width:calc(100% - 122px)}.chip .w{display:none}}
@media(max-height:520px)and(orientation:landscape){.tv{padding:42px 8px 44px}.tv-title{top:6px;font-size:.7rem}.hudTL,.hudTR{top:32px}.hudBL,.hudBR{bottom:7px}.ibtn{width:30px;height:30px}.chip{padding:4px 6px;font-size:.65rem}.tv:after{display:none}}
</style>
</head>
<body data-theme="default">
<div id="start" class="screen on">
  <div class="start-card">
    <h1>ПОКЕМОНЫ ПОРОХОВЫХ</h1>
    <div class="sub">Поймай их всех!</div>
    <div class="start-badges"><span>51 покемон</span><span>6 локаций</span><span>Шайни · Рейды · Погода</span></div>
    <div class="start-grid" id="starters"></div>
    <div class="time-pick" id="timePick">
      <button data-t="morning">🌅 Утро</button><button data-t="day" class="sel">☀️ День</button>
      <button data-t="evening">🌇 Вечер</button><button data-t="night">🌙 Ночь</button>
    </div>
    <button class="go" id="go" disabled>GO</button>
  </div>
</div>

<div id="game" class="screen">
  <div class="tv">
    <div class="tv-title"><i id="locDot"></i><span id="locName">ТЦ Июнь</span></div>
    <div class="hudTL">
      <div class="chip" id="timeChip">☀️ <span>День</span></div>
      <div class="chip" id="weatherChip">🌤️ <span class="w">Ясно</span></div>
      <div class="chip" id="countChip">🎯 <span>0/10</span></div>
    </div>
    <div class="hudTR">
      <button class="ibtn" id="bMap" title="Карта района">🗺️</button>
      <button class="ibtn" id="bHelp" title="Как играть">❓</button>
      <button class="ibtn" id="bTheme" title="Тема оформления">🎨</button>
    </div>
    <div class="tv-screen" id="screenBox"><canvas id="cv"></canvas><div class="notifs" id="notifs"></div></div>
    <div class="hudBL"><button class="abtn" id="bDex">📖 <span>Покедекс</span></button></div>
    <div class="hudBR">
      <button class="abtn hot" id="bRaid" style="display:none">⚔️ <span>Рейд</span></button>
      <button class="abtn boss" id="bMega" style="display:none"><span class="ico">👑</span> <span>БОЙ!</span></button>
      <button class="abtn" id="bStats">📊 <span>Статистика</span></button>
    </div>
  </div>
</div>

<div class="overlay" id="oDex"><div class="modal"><h2>📖 Покедекс <button class="x" data-close>×</button></h2><div class="tabs" id="dexTabs"></div><div class="dex" id="dexGrid"></div></div></div>
<div class="overlay" id="oDetail"><div class="modal"><h2 id="detailTitle">Покемон <button class="x" data-close>×</button></h2><div id="detailBody"></div></div></div>
<div class="overlay" id="oMap"><div class="modal"><h2>🗺️ Район Пороховые <button class="x" data-close>×</button></h2><div class="mapWrap"><svg id="mapSvg" viewBox="0 0 800 450"></svg></div></div></div>
<div class="overlay" id="oHelp"><div class="modal help"><h2>❓ Как играть <button class="x" data-close>×</button></h2>
<h3>🎯 Цель</h3><p>Поймай всех покемонов пяти локаций и останови Мегакола в секретном Колцентре.</p>
<h3>🎮 Ловля</h3><p>Цветные покемоны уже в коллекции: клик по ним даёт силу, равную уровню локации. Тёмные тени — дикие: клик начинает бой.</p>
<h3>⚔️ Бой</h3><p>Выбери своего покемона — бой начнётся сразу. Победа добавляет врага в коллекцию, поражение отнимает 1 очко силы.</p>
<h3>⭐ Рейд</h3><p>Собери всех 10 покемонов локации и вызови босса. Выбери троих: если их суммарная сила больше, откроется следующая локация.</p>
<h3>🌦️ Сила</h3><p>Итоговая сила = база × множители времени суток и погоды. Маленькие значки над покемоном показывают, усилен он сейчас или ослаблен.</p>
<h3>✨ Шайни</h3><p>При поимке есть малый шанс, что покемон станет шайни: вспышка, цветной ореол и яркая карточка. На силу это не влияет.</p>
</div></div>
<div class="overlay" id="oTheme"><div class="modal"><h2>🎨 Тема оформления <button class="x" data-close>×</button></h2><div class="themes" id="themes"></div></div></div>
<div class="overlay" id="oStats"><div class="modal"><h2>📊 Статистика <button class="x" data-close>×</button></h2><div id="statsBody"></div></div></div>
<div class="overlay" id="oBattle"><div class="modal"><div id="battleBody"></div></div></div>
<div class="overlay" id="oRaid"><div class="modal"><div id="raidBody"></div></div></div>
<div class="overlay" id="oCongrats"><div class="modal final"><div id="congratsBody"></div></div></div>
<div class="overlay" id="oAll"><div class="modal final"><div id="allBody"></div></div></div>
<div class="overlay" id="oFinal"><div class="modal final"><div id="finalBody"></div></div></div>

<script>
'use strict';
const TAU=Math.PI*2;
const TN={morning:'Утро',day:'День',evening:'Вечер',night:'Ночь'},TI={morning:'🌅',day:'☀️',evening:'🌇',night:'🌙'};
const WN={clear:'Ясно',rain:'Дождь',snow:'Снег'},WI={clear:'🌤️',rain:'🌧️',snow:'❄️'};
const UMB=['#ef4444','#3b82f6','#f59e0b','#a855f7','#10b981','#ec4899','#06b6d4'];
const CG=["Поешь шавермы","А вдруг я шайни?","Ты сегодня отлично выглядишь","Поймай удачу за хвост","Мне тут нравится","Го гулять?","У тебя всё получится","Классный день, да?","Я в тебя верю","Давай ещё немного погуляем","Ты мой любимый тренер","Смотри, какое небо!","Хочешь секрет? Я почти сотка","Вместе мы сильнее"];
const CB=["Э, иди сюда","Гори","Ты меня не поймаешь","Слабая у тебя команда","Опять ты?","Всё бесит","Уйди с дороги","Зря стараешься","Тебе никогда меня не догнать","Покеболы закончились?","Даже не пытайся","Я тут главный","Скучный ты какой-то","Ну и тренер"];
function P(id,name,type,base,c1,c2,shape,ft,fw,speed,size){return{id,name,type,base,colors:[c1,c2],shape,favTime:ft,favWeather:fw,dislikeTime:({morning:'night',day:'evening',evening:'morning',night:'day'})[ft],dislikeWeather:fw==='rain'?'snow':'rain',speed,size}}
const LOCS=[
 {id:0,name:'ТЦ Июнь',color:'#ff9a3c',pos:[150,305],good:["Сейчас же не июнь","Тут рядом был фонтан","Го в теннис?","Встречаемся у главного входа","Скидки в честь меня","Пойдём на фудкорт","Я тут с самого открытия","Купи мне шарик"],bad:["Все магазины позакрывали","Это уже не Июнь","Ушла эпоха","Эскалатор сломан","Очередь на кассе длиннее меня","Парковки нет","Фонтан высох"],p:[
  P(1,'Пикачад','ground',8,'#ffd700','#7c2d12','mouse','day','rain',95,40),P(2,'Бульбатрон','ground',10,'#4ade80','#15803d','bulb','morning','rain',70,44),P(3,'Сквиртель','ground',9,'#38bdf8','#0369a1','turtle','day','rain',75,42),P(4,'Малиновый','ground',7,'#f43f5e','#9f1239','berry','evening','snow',85,38),P(5,'Июль','ground',8,'#f59e0b','#fde047','sun','day','rain',90,40),P(6,'Артхаусер','ground',9,'#a78bfa','#6d28d9','art','evening','snow',65,42),
  P(7,'Миникол','flying',6,'#b45309','#78350f','peg','morning','rain',120,32),P(8,'Фонтаноид','flying',8,'#22d3ee','#0e7490','fountain','day','rain',105,38),P(9,'Индустриалка','flying',9,'#94a3b8','#475569','gear','night','snow',90,40),P(10,'Шавермус','flying',7,'#fbbf24','#b45309','shawarma','evening','rain',130,34)]},
 {id:1,name:'Волна',color:'#2dd4bf',pos:[375,350],good:["Мохнатые шмели","Надо призвать волну","Помнишь, как мы тут катались?","Качели скрипят, но держат","Тут лучший закат во дворе","Бежим наперегонки до подъезда","Шмель сегодня добрый"],bad:["Волны больше нет","Площадку так и не починили","Спираль заржавела","Опять лампочка в подъезде перегорела","Беседку сломали","Двор как двор, ничего особенного"],p:[
  P(11,'Спиралька','ground',9,'#ec4899','#be185d','spiral','evening','rain',80,40),P(12,'Дворовик','ground',8,'#a8a29e','#57534e','dog','night','snow',100,42),P(13,'Панелька','ground',10,'#cbd5e1','#64748b','block','day','rain',55,46),P(14,'Качель','ground',7,'#fb923c','#c2410c','swing','day','rain',75,38),P(15,'Лужик','ground',6,'#60a5fa','#1d4ed8','puddle','morning','rain',60,36),P(16,'Бетончик','ground',11,'#78716c','#44403c','concrete','night','snow',50,46),
  P(17,'Шмель','flying',8,'#facc15','#1c1917','bee','day','rain',140,34),P(18,'Чайка-хулиганка','flying',9,'#f8fafc','#94a3b8','gull','morning','rain',125,40),P(19,'Облачко','flying',7,'#e2e8f0','#cbd5e1','cloud','morning','rain',70,38),P(20,'Ветруля','flying',8,'#67e8f9','#0891b2','wind','evening','snow',135,36)]},
 {id:2,name:'Кованый Лев',color:'#d97706',pos:[505,255],good:["Го рейдить толпой","Призвали Льва","Ковка — это искусство","Каждая шестерёнка на месте","Лев сегодня улыбается","Пахнет машинным маслом и приключениями","Подкрути винтик — и в путь"],bad:["Решётка ржавеет","Лев сегодня не в духе","Механизмы заедают","А нападу на Льва","Масло кончилось","Площадка закрыта на ремонт"],p:[
  P(21,'Кованчик','ground',10,'#92400e','#451a03','anvil','day','snow',60,44),P(22,'Шестерён','ground',9,'#eab308','#854d0e','gear','day','rain',85,40),P(23,'Львёнок','ground',11,'#fbbf24','#b45309','lion','day','rain',75,46),P(24,'Патруль','ground',8,'#3b82f6','#1e3a8a','patrol','night','snow',95,40),P(25,'Кузнец','ground',12,'#78350f','#292524','smith','day','rain',55,48),P(26,'Ржавик','ground',9,'#ea580c','#7c2d12','rust','evening','rain',70,40),
  P(27,'Пружинка','flying',7,'#e5e7eb','#9ca3af','spring','morning','snow',130,32),P(28,'Винтик','flying',8,'#a1a1aa','#52525b','screw','day','rain',115,34),P(29,'Флюгер','flying',9,'#f87171','#b91c1c','vane','evening','snow',110,38),P(30,'Дымок','flying',8,'#d1d5db','#6b7280','smoke','night','rain',80,38)]},
 {id:3,name:'Триумфальные Пилоны',color:'#a855f7',pos:[650,115],good:["Дорога жизни","Чижик-Пыжик","Тарантиныч выйдет?","Звезда на пилоне светится для нас","Переходи на зелёный","Неон сегодня особенно яркий","Пилоны видели всё — и всё равно рады тебе"],bad:["Не ходи в лесопарк","Тьма сгущается","Пилоны помнят всё","Красный свет — стой на месте","Дорога уходит, а ты стоишь","Голограмма мерцает","Звезда погасла"],p:[
  P(31,'Зебрик','ground',10,'#f8fafc','#111827','zebra','day','rain',110,42),P(32,'Пилончик','ground',11,'#a8a29e','#57534e','pilon','night','snow',60,46),P(33,'Звёздочёт','ground',12,'#818cf8','#3730a3','star','night','rain',80,42),P(34,'Неончик','ground',10,'#f472b6','#06b6d4','neon','night','rain',100,40),P(35,'Асфальт','ground',9,'#4b5563','#1f2937','asphalt','day','snow',70,42),P(36,'Обелиск','ground',13,'#78716c','#44403c','obelisk','night','snow',50,48),
  P(37,'Ингрессо','flying',9,'#22d3ee','#155e75','portal','night','rain',105,38),P(38,'Голограмма','flying',10,'#c4b5fd','#7c3aed','holo','night','snow',95,40),P(39,'Светляк','flying',8,'#fef08a','#eab308','firefly','night','rain',140,30),P(40,'Сканер','flying',9,'#34d399','#065f46','scanner','day','snow',120,36)]},
 {id:4,name:'Лесопарк',color:'#16a34a',pos:[660,305],good:["Тише едешь — дальше будешь","Поезд уже близко","Не сворачивай с тропы","Я тебя провожу до опушки","Сова сегодня добрая","Фонарик не бери — я посвечу","Тропа выведет, не бойся"],bad:["Здесь кто-то ходит за тобой","Свет погас","Из леса не возвращаются","Поезд прошёл мимо — и ты иди","Не оглядывайся","Тропа запуталась","Колья уже наточены"],p:[
  P(41,'Колобок','ground',11,'#d97706','#92400e','bun','night','snow',85,42),P(42,'Волчара','ground',13,'#6b7280','#1f2937','wolf','night','snow',120,48),P(43,'Красношляп','ground',10,'#ef4444','#f8fafc','mushroom','evening','rain',60,40),P(44,'Паровозик','ground',12,'#1f2937','#dc2626','train','night','snow',90,46),P(45,'Тропин','ground',9,'#a16207','#713f12','path','evening','rain',75,40),P(46,'Сумрак','ground',14,'#312e81','#0f172a','ghost','night','snow',95,46),
  P(47,'Лэпка','flying',10,'#78716c','#44403c','pylon','night','rain',85,44),P(48,'Фонарник','flying',9,'#fde047','#ca8a04','lantern','night','rain',100,36),P(49,'Совун','flying',11,'#a16207','#451a03','owl','night','snow',110,42),P(50,'Искрач','flying',12,'#facc15','#ea580c','spark','night','rain',150,34)]}
];
const MEGA=P(51,'Мегакол','flying',320,'#7f1d1d','#450a0a','vampire','night','snow',0,150);
MEGA.bad=["Я наточен","Мне кажется, ты вампир","Трон из кольев готов","Гробы ждут гостей","Окропим землю красненьким?","Здесь не зажигают свет","Ты уже мой","Останься навсегда"];
const ALLP=LOCS.flatMap(l=>l.p);
const byId=id=>id===51?MEGA:ALLP.find(p=>p.id===id);
const homeLoc=id=>LOCS.findIndex(l=>l.p.some(p=>p.id===id));

const G={started:false,starter:null,loc:0,unlocked:new Set([0]),caught:new Set(),shiny:new Set(),power:{},
 dayT:.5,time:'day',weather:'clear',weatherT:28,cloudCover:0,rainI:0,snowI:0,pile:0,
 field:[],spawnT:0,particles:[],defeated:new Set(),completeShown:new Set(),megaDone:false,
 stats:{catches:0,battles:0,wins:0,losses:0,raids:0,raidWins:0,t0:Date.now()},
 stars:[],clouds:[],rain:[],snow:[],winsA:[],winsB:[],train:{x:-430,on:false,t:12},swing:0,
 megaPhrase:0,megaPhraseT:0,battle:null,raid:null,uid:1,chipKey:''};
for(let i=0;i<140;i++)G.stars.push({x:Math.random(),y:Math.random()*.55,r:.5+Math.random()*2.3,t:Math.random()*7});
for(let i=0;i<8;i++)G.clouds.push({x:Math.random()*1.4-.2,y:.04+Math.random()*.22,s:44+Math.random()*70,v:.006+Math.random()*.012,o:0});
for(let i=0;i<28;i++){G.winsA.push(Math.random()>.35);G.winsB.push(Math.random()>.35)}

const rnd=a=>a[Math.floor(Math.random()*a.length)],ri=(a,b)=>Math.floor(Math.random()*(b-a+1))+a,cl=(v,a,b)=>Math.max(a,Math.min(b,v));
const hx=h=>{const n=parseInt(h.slice(1),16);return[n>>16&255,n>>8&255,n&255]};
const rh=(r,g,b)=>'#'+((1<<24)+(cl(Math.round(r),0,255)<<16)+(cl(Math.round(g),0,255)<<8)+cl(Math.round(b),0,255)).toString(16).slice(1);
const mix=(a,b,t)=>{const A=hx(a),B=hx(b);return rh(A[0]+(B[0]-A[0])*t,A[1]+(B[1]-A[1])*t,A[2]+(B[2]-A[2])*t)};
const shade=(c,f)=>{const[r,g,b]=hx(c);return rh(r*f,g*f,b*f)};
const easeOut=t=>1-Math.pow(1-t,3);
function timeOf(p){return p<.22?'night':p<.35?'morning':p<.70?'day':p<.82?'evening':'night'}
function light(p){if(p<.22)return .42;if(p<.35)return .42+(p-.22)/.13*.58;if(p<.70)return 1;if(p<.82)return 1-(p-.70)/.12*.58;return .42}
const SKY=[[0,'#0b1026','#1e1b4b'],[.20,'#2a1a3a','#4a3a5a'],[.28,'#ff9a8b','#ffc3a0'],[.40,'#60a5fa','#bae6fd'],[.60,'#60a5fa','#bae6fd'],[.72,'#fb7185','#fbbf24'],[.82,'#3b1a3a','#5a3a5a'],[.90,'#0b1026','#1e1b4b'],[1,'#0b1026','#1e1b4b']];
function sky(p){let a=SKY[0],b=SKY[1];for(let i=0;i<SKY.length-1;i++)if(p>=SKY[i][0]&&p<=SKY[i+1][0]){a=SKY[i];b=SKY[i+1];break}const t=(p-a[0])/(b[0]-a[0]||1);return[mix(a[1],b[1],t),mix(a[2],b[2],t)]}
function mults(p){const t=timeOf(G.dayT);const tm=t===p.favTime?1.35:t===p.dislikeTime?.8:1;const wm=G.weather==='clear'?1:G.weather===p.favWeather?1.25:G.weather===p.dislikeWeather?.85:1;return{tm,wm}}
function power(id){const p=byId(id);if(!p)return 0;const{tm,wm}=mults(p);return Math.max(1,Math.round((G.power[id]||p.base)*tm*wm))}
function totalPower(){return[...G.caught].reduce((s,id)=>s+power(id),0)}
function notify(txt,type='good'){const box=document.getElementById('notifs');const old=[...box.children];if(old.length>=3){const o=old[0];o.classList.add('out');setTimeout(()=>o.remove(),350)}const n=document.createElement('div');n.className='notif '+type;n.textContent=txt;box.appendChild(n);setTimeout(()=>{n.classList.add('out');setTimeout(()=>n.remove(),380)},4200)}
function open(id){document.getElementById(id).classList.add('on')}
function close(id){document.getElementById(id).classList.remove('on')}
function anyModal(){return!!document.querySelector('.overlay.on')}
document.querySelectorAll('[data-close]').forEach(b=>b.onclick=()=>b.closest('.overlay').classList.remove('on'));
document.querySelectorAll('.overlay').forEach(o=>o.addEventListener('click',e=>{if(e.target===o){if(o.id==='oBattle'&&G.battle)fleeBattle();else o.classList.remove('on')}}));

const cv=document.getElementById('cv'),c=cv.getContext('2d');let W=0,H=0,DPR=1;
function resize(){const r=cv.parentElement.getBoundingClientRect();const ow=W,oh=H;W=Math.max(300,Math.round(r.width));H=Math.max(200,Math.round(r.height));DPR=Math.min(2,devicePixelRatio||1);cv.width=Math.round(W*DPR);cv.height=Math.round(H*DPR);c.setTransform(DPR,0,0,DPR,0,0);if(ow&&oh){G.field.forEach(e=>{e.x=e.x/ow*W;if(e.stopX)e.stopX=e.stopX/ow*W})}}
if(window.ResizeObserver)new ResizeObserver(resize).observe(document.getElementById('screenBox'));addEventListener('resize',resize);addEventListener('orientationchange',()=>setTimeout(resize,150));resize();
function rr(x,y,w,h,r){c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath()}
function rrG(g,x,y,w,h,r){g.beginPath();g.moveTo(x+r,y);g.arcTo(x+w,y,x+w,y+h,r);g.arcTo(x+w,y+h,x,y+h,r);g.arcTo(x,y+h,x,y,r);g.arcTo(x,y,x+w,y,r);g.closePath()}
function starPath(g,x,y,r,col){g.fillStyle=col;g.beginPath();for(let i=0;i<10;i++){const a=i*Math.PI/5-Math.PI/2,q=i%2?r*.42:r;const px=x+Math.cos(a)*q,py=y+Math.sin(a)*q;i?g.lineTo(px,py):g.moveTo(px,py)}g.closePath();g.fill()}
function star(x,y,r,col){starPath(c,x,y,r,col)}
const groundY=()=>H*.7;

/* ---- pokemon art ---- */
function eyes(g,s,dx=.26,dy=-.08){g.fillStyle='#fff';g.beginPath();g.arc(-s*dx,s*dy,s*.13,0,TAU);g.arc(s*dx,s*dy,s*.13,0,TAU);g.fill();g.fillStyle='#111';g.beginPath();g.arc(-s*dx,s*dy,s*.06,0,TAU);g.arc(s*dx,s*dy,s*.06,0,TAU);g.fill()}
function drawPoke(g,p,x,y,sz,o={}){const{dark=false,shiny=false,scale=1,walk=0,mega=false}=o;g.save();g.translate(x,y);g.scale(scale,scale);
 if(p.id===51){drawMega(g,sz,walk,mega);g.restore();return}
 if(dark){drawBody(g,p,sz*1.16,['#efe0c4','#d8c39e'],walk);g.globalAlpha=.96;drawBody(g,p,sz,['#241c2e','#17121f'],walk);g.restore();return}
 if(shiny){const gr=g.createRadialGradient(0,0,sz*.2,0,0,sz*1.7);gr.addColorStop(0,'rgba(253,224,71,.5)');gr.addColorStop(1,'rgba(253,224,71,0)');g.fillStyle=gr;g.beginPath();g.arc(0,0,sz*1.7,0,TAU);g.fill()}
 const cols=shiny?p.colors.map(cc=>mix(cc,'#ffffff',.25)):p.colors;drawBody(g,p,sz,cols,walk);
 if(G.weather==='rain'&&G.loc!==5&&G.rainI>.2)umbrella(g,sz,p.id);g.restore()}
function umbrella(g,s,id){const col=UMB[id%UMB.length],uy=-s*1.35;g.strokeStyle='#3f2817';g.lineWidth=2.6;g.lineCap='round';g.beginPath();g.moveTo(0,uy-s*.1);g.lineTo(0,uy+s*1.15);g.stroke();g.beginPath();g.arc(s*.13,uy+s*1.15,s*.13,0,Math.PI);g.stroke();g.fillStyle=col;g.beginPath();g.arc(0,uy,s*.98,Math.PI,0);g.closePath();g.fill();for(let i=0;i<6;i++){g.beginPath();g.arc(-s*.98+i*s*.327+s*.163,uy,s*.164,0,Math.PI);g.fill()}g.strokeStyle='rgba(0,0,0,.22)';g.lineWidth=1;for(let i=1;i<4;i++){g.beginPath();g.moveTo(-s*.98+i*s*.49,uy);g.lineTo(-s*.98+i*s*.49,uy+s*.14);g.stroke()}g.fillStyle='rgba(255,255,255,.28)';g.beginPath();g.ellipse(-s*.32,uy-s*.42,s*.24,s*.14,-.5,0,TAU);g.fill()}
function drawBody(g,p,s,[a,b],walk){const sh=p.shape;g.lineJoin='round';g.lineCap='round';
 const ell=(x,y,rx,ry,f)=>{g.fillStyle=f;g.beginPath();g.ellipse(x,y,rx,ry,0,0,TAU);g.fill()};
 const cir=(x,y,r,f)=>{g.fillStyle=f;g.beginPath();g.arc(x,y,r,0,TAU);g.fill()};
 const rect=(x,y,w,h,f)=>{g.fillStyle=f;g.fillRect(x,y,w,h)};
 const line=(pts,f,w)=>{g.strokeStyle=f;g.lineWidth=w;g.beginPath();pts.forEach((q,i)=>i?g.lineTo(q[0],q[1]):g.moveTo(q[0],q[1]));g.stroke()};
 switch(sh){
  case'mouse':ell(0,0,s*.78,s*.88,a);ell(-s*.48,-s*.72,s*.22,s*.44,b);ell(s*.48,-s*.72,s*.22,s*.44,b);eyes(g,s);cir(-s*.5,s*.18,s*.13,'#ef4444');cir(s*.5,s*.18,s*.13,'#ef4444');line([[s*.7,s*.2],[s*1.1,-s*.1],[s*.95,s*.35]],b,s*.14);break;
  case'bulb':ell(0,s*.2,s*.88,s*.66,a);cir(0,-s*.5,s*.5,b);line([[0,-s*.9],[-s*.2,-s*1.15]],b,s*.12);line([[0,-s*.9],[s*.2,-s*1.15]],b,s*.12);eyes(g,s,.25,.12);break;
  case'turtle':ell(0,0,s*.9,s*.68,b);ell(0,0,s*.72,s*.52,a);cir(s*.72,-s*.28,s*.32,a);eyes(g,s*.5,.3,-.3);line([[-s*.5,s*.5],[-s*.6,s*.75]],b,s*.14);line([[s*.3,s*.5],[s*.4,s*.75]],b,s*.14);break;
  case'berry':cir(0,0,s*.8,a);for(let i=0;i<6;i++){const q=i*1.047;cir(Math.cos(q)*s*.42,Math.sin(q)*s*.42,s*.13,b)}line([[0,-s*.75],[s*.15,-s*1.05]],'#16a34a',s*.12);eyes(g,s,.22,0);break;
  case'sun':cir(0,0,s*.68,a);g.strokeStyle=b;g.lineWidth=s*.14;for(let i=0;i<10;i++){const q=i*.628;g.beginPath();g.moveTo(Math.cos(q)*s*.8,Math.sin(q)*s*.8);g.lineTo(Math.cos(q)*s*1.1,Math.sin(q)*s*1.1);g.stroke()}eyes(g,s,.22,-.05);break;
  case'art':rect(-s*.7,-s*.7,s*1.4,s*1.4,a);rect(-s*.5,-s*.5,s,s,b);cir(-s*.15,-s*.1,s*.16,'#fff');cir(s*.22,s*.15,s*.2,'#fde047');line([[-s*.4,s*.35],[s*.4,-s*.35]],'#fff',s*.08);break;
  case'peg':rect(-s*.16,-s*.85,s*.32,s*1.7,a);cir(0,-s*.85,s*.24,b);line([[-s*.16,s*.85],[0,s*1.1],[s*.16,s*.85]],b,s*.1);cir(-s*.07,-s*.2,s*.05,'#111');cir(s*.07,-s*.2,s*.05,'#111');break;
  case'fountain':g.fillStyle=a;g.beginPath();g.moveTo(-s*.6,s*.55);g.quadraticCurveTo(-s*.3,-s*.8,0,-s*1.05);g.quadraticCurveTo(s*.3,-s*.8,s*.6,s*.55);g.closePath();g.fill();ell(0,s*.55,s*.7,s*.18,b);eyes(g,s,.16,-.1);break;
  case'gear':cir(0,0,s*.62,a);for(let i=0;i<8;i++){const q=i*.785;rect(Math.cos(q)*s*.68-s*.11,Math.sin(q)*s*.68-s*.11,s*.22,s*.22,b)}cir(0,0,s*.2,b);break;
  case'shawarma':g.fillStyle=b;g.beginPath();g.moveTo(-s*.45,-s*.8);g.lineTo(s*.45,-s*.8);g.lineTo(s*.28,s*.8);g.lineTo(-s*.28,s*.8);g.closePath();g.fill();rect(-s*.36,-s*.35,s*.72,s*.22,a);ell(-s*.72,-s*.05,s*.34,s*.16,'#fff');ell(s*.72,-s*.05,s*.34,s*.16,'#fff');eyes(g,s,.14,-.5);break;
  case'spiral':g.strokeStyle=a;g.lineWidth=s*.2;g.beginPath();for(let t=0;t<12;t+=.15){const r=t*s*.075,px=Math.cos(t)*r,py=Math.sin(t)*r;t?g.lineTo(px,py):g.moveTo(px,py)}g.stroke();cir(0,0,s*.22,b);break;
  case'dog':ell(0,0,s*.8,s*.58,a);cir(s*.62,-s*.32,s*.34,b);g.fillStyle=b;g.beginPath();g.moveTo(s*.45,-s*.55);g.lineTo(s*.62,-s*.95);g.lineTo(s*.8,-s*.55);g.fill();cir(s*.72,-s*.34,s*.05,'#111');line([[-s*.75,-s*.1],[-s*1.05,-s*.4]],a,s*.14);break;
  case'block':rect(-s*.65,-s*.9,s*1.3,s*1.8,a);for(let i=0;i<4;i++)for(let j=0;j<3;j++)rect(-s*.5+j*s*.36,-s*.75+i*s*.42,s*.24,s*.28,b);break;
  case'swing':line([[-s*.5,-s],[-s*.3,s*.5]],a,s*.1);line([[s*.5,-s],[s*.3,s*.5]],a,s*.1);rect(-s*.4,s*.4,s*.8,s*.18,b);cir(-s*.3,-s,s*.08,b);cir(s*.3,-s,s*.08,b);break;
  case'puddle':ell(0,s*.3,s,s*.4,a);ell(0,s*.3,s*.66,s*.24,b);cir(-s*.25,s*.22,s*.07,'#fff');cir(s*.2,s*.22,s*.07,'#fff');break;
  case'concrete':rect(-s*.78,-s*.78,s*1.56,s*1.56,a);g.strokeStyle=b;g.lineWidth=2;for(let i=-2;i<=2;i++){g.beginPath();g.moveTo(i*s*.3,-s*.78);g.lineTo(i*s*.3,s*.78);g.stroke()}eyes(g,s,.24,-.1);break;
  case'bee':ell(0,0,s*.7,s*.5,a);rect(-s*.22,-s*.5,s*.14,s,b);rect(s*.08,-s*.5,s*.14,s,b);ell(-s*.3,-s*.5,s*.32,s*.2,'rgba(255,255,255,.85)');ell(s*.3,-s*.5,s*.32,s*.2,'rgba(255,255,255,.85)');eyes(g,s,.18,-.05);break;
  case'gull':ell(0,0,s*.58,s*.4,a);g.strokeStyle=b;g.lineWidth=s*.16;g.beginPath();g.moveTo(-s,0);g.quadraticCurveTo(-s*.5,-s*.55,0,0);g.stroke();g.beginPath();g.moveTo(s,0);g.quadraticCurveTo(s*.5,-s*.55,0,0);g.stroke();g.fillStyle='#f59e0b';g.beginPath();g.moveTo(s*.5,0);g.lineTo(s*.85,s*.08);g.lineTo(s*.5,s*.14);g.fill();break;
  case'cloud':cir(-s*.32,0,s*.46,a);cir(s*.16,-s*.12,s*.52,a);cir(s*.5,s*.08,s*.36,a);eyes(g,s,.16,-.08);break;
  case'wind':g.strokeStyle=a;g.lineWidth=s*.15;for(let i=0;i<3;i++){g.beginPath();g.moveTo(-s*.8,-s*.5+i*s*.5);g.quadraticCurveTo(0,-s*.5+i*s*.5+s*.3,s*.8,-s*.5+i*s*.5);g.stroke()}break;
  case'anvil':g.fillStyle=a;g.beginPath();g.moveTo(-s*.85,-s*.3);g.lineTo(s*.85,-s*.3);g.lineTo(s*.5,s*.15);g.lineTo(-s*.5,s*.15);g.closePath();g.fill();rect(-s*.3,s*.15,s*.6,s*.6,b);eyes(g,s,.2,-.05);break;
  case'lion':cir(0,0,s*.88,b);for(let i=0;i<14;i++){const q=i*.449;g.fillStyle=b;g.beginPath();g.moveTo(Math.cos(q)*s*.6,Math.sin(q)*s*.6);g.lineTo(Math.cos(q)*s*1.05,Math.sin(q)*s*1.05);g.lineTo(Math.cos(q+.25)*s*.6,Math.sin(q+.25)*s*.6);g.fill()}cir(0,0,s*.6,a);eyes(g,s,.22,-.12);cir(0,s*.12,s*.09,'#78350f');break;
  case'patrol':rect(-s*.48,-s*.8,s*.96,s*1.6,a);cir(0,-s*.5,s*.16,b);cir(0,-s*.92,s*.11,'#ef4444');eyes(g,s,.16,-.2);break;
  case'smith':ell(0,0,s*.78,s*.88,a);rect(-s*.6,-s*1.08,s*1.2,s*.26,b);line([[-s*.7,s*.3],[-s*1,s*.1]],b,s*.14);eyes(g,s);break;
  case'rust':cir(0,0,s*.78,a);for(let i=0;i<7;i++){const q=i*.897;cir(Math.cos(q)*s*.4,Math.sin(q)*s*.4,s*.14,b)}eyes(g,s,.22,-.05);break;
  case'spring':g.strokeStyle=a;g.lineWidth=s*.14;g.beginPath();for(let i=0;i<7;i++){g.moveTo(-s*.5,-s*.85+i*s*.28);g.lineTo(s*.5,-s*.65+i*s*.28)}g.stroke();cir(-s*.5,-s*.85,s*.08,b);cir(s*.5,s*.85,s*.08,b);break;
  case'screw':cir(0,-s*.5,s*.4,a);rect(-s*.14,-s*.5,s*.28,s*1.3,b);g.strokeStyle=a;g.lineWidth=1.5;for(let i=0;i<5;i++){g.beginPath();g.moveTo(-s*.14,-s*.3+i*s*.24);g.lineTo(s*.14,-s*.2+i*s*.24);g.stroke()}break;
  case'vane':g.fillStyle=a;g.beginPath();g.moveTo(-s*.85,0);g.lineTo(0,-s*.32);g.lineTo(s*.85,0);g.lineTo(0,s*.32);g.closePath();g.fill();line([[0,-s*.85],[0,s*.85]],b,s*.09);cir(0,0,s*.1,b);break;
  case'smoke':g.globalAlpha=.75;cir(0,0,s*.5,a);cir(-s*.3,-s*.4,s*.4,a);cir(s*.3,-s*.62,s*.34,a);g.globalAlpha=1;eyes(g,s,.16,-.3);break;
  case'zebra':ell(0,0,s*.88,s*.58,a);g.fillStyle=b;for(let i=-3;i<=3;i++)g.fillRect(i*s*.24-s*.05,-s*.58,s*.1,s*1.16);cir(s*.7,-s*.3,s*.26,a);eyes(g,s*.4,.3,-.35);break;
  case'pilon':rect(-s*.38,-s,s*.76,s*2,a);rect(-s*.48,-s*1.12,s*.96,s*.16,b);starPath(g,0,-s*1.28,s*.2,'#fbbf24');break;
  case'star':starPath(g,0,0,s,a);cir(0,0,s*.28,b);eyes(g,s,.12,0);break;
  case'neon':g.strokeStyle=a;g.lineWidth=s*.15;g.shadowColor=a;g.shadowBlur=14;g.strokeRect(-s*.7,-s*.5,s*1.4,s);g.strokeStyle=b;g.beginPath();g.moveTo(-s*.4,-s*.15);g.lineTo(s*.4,-s*.15);g.stroke();g.shadowBlur=0;break;
  case'asphalt':rect(-s*.9,-s*.3,s*1.8,s*.6,a);g.fillStyle=b;for(let i=0;i<4;i++)g.fillRect(-s*.75+i*s*.45,-s*.05,s*.26,s*.1);break;
  case'obelisk':g.fillStyle=a;g.beginPath();g.moveTo(-s*.5,s);g.lineTo(s*.5,s);g.lineTo(s*.28,-s*.8);g.lineTo(0,-s);g.lineTo(-s*.28,-s*.8);g.closePath();g.fill();rect(-s*.28,-s*.3,s*.56,s*.09,b);rect(-s*.28,s*.2,s*.56,s*.09,b);break;
  case'portal':g.globalAlpha=.75;cir(0,0,s*.8,a);g.globalAlpha=1;cir(0,0,s*.4,b);g.strokeStyle='#fff';g.lineWidth=2;g.beginPath();g.arc(0,0,s*.6,0,4);g.stroke();break;
  case'holo':g.globalAlpha=.6;g.strokeStyle=a;g.lineWidth=2;for(let i=0;i<3;i++)g.strokeRect(-s*.7+i*5,-s*.7+i*5,s*1.4-i*10,s*1.4-i*10);g.globalAlpha=1;cir(0,0,s*.28,b);break;
  case'firefly':{const gr=g.createRadialGradient(0,0,0,0,0,s);gr.addColorStop(0,b);gr.addColorStop(.5,a);gr.addColorStop(1,'rgba(255,255,0,0)');g.fillStyle=gr;g.beginPath();g.arc(0,0,s,0,TAU);g.fill();eyes(g,s,.14,-.08);break}
  case'scanner':cir(0,0,s*.68,a);g.strokeStyle=b;g.lineWidth=s*.1;g.beginPath();g.arc(0,0,s*.9,-.8,.8);g.stroke();cir(0,0,s*.2,'#fff');break;
  case'bun':cir(0,0,s*.8,a);g.fillStyle=b;g.beginPath();g.arc(0,-s*.28,s*.5,Math.PI,0);g.fill();eyes(g,s,.24,.02);g.strokeStyle='#111';g.lineWidth=2;g.beginPath();g.arc(0,s*.2,s*.2,0,Math.PI);g.stroke();break;
  case'wolf':ell(0,0,s*.88,s*.66,a);g.fillStyle=b;g.beginPath();g.moveTo(-s*.5,-s*.5);g.lineTo(-s*.7,-s*.95);g.lineTo(-s*.28,-s*.6);g.fill();g.beginPath();g.moveTo(s*.5,-s*.5);g.lineTo(s*.7,-s*.95);g.lineTo(s*.28,-s*.6);g.fill();cir(-s*.28,-s*.1,s*.1,'#ef4444');cir(s*.28,-s*.1,s*.1,'#ef4444');break;
  case'mushroom':rect(-s*.2,0,s*.4,s*.8,b);g.fillStyle=a;g.beginPath();g.arc(0,0,s*.72,Math.PI,0);g.fill();for(let i=0;i<4;i++){const q=Math.PI+i*.78;cir(Math.cos(q)*s*.42,Math.sin(q)*s*.42,s*.1,'#fff')}break;
  case'train':rect(-s*.9,-s*.5,s*1.8,s,a);rect(-s*.9,-s*.82,s*.5,s*.32,b);cir(-s*.5,s*.5,s*.18,'#111');cir(s*.5,s*.5,s*.18,'#111');rect(s*.3,-s*.9,s*.18,s*.4,b);break;
  case'path':g.fillStyle=a;g.beginPath();g.moveTo(-s*.3,-s);g.quadraticCurveTo(-s*.55,0,-s*.3,s);g.lineTo(s*.3,s);g.quadraticCurveTo(s*.55,0,s*.3,-s);g.closePath();g.fill();g.fillStyle=b;for(let i=-3;i<=3;i++)g.fillRect(-s*.05,i*s*.26,s*.1,s*.1);break;
  case'ghost':g.globalAlpha=.85;g.fillStyle=a;g.beginPath();g.moveTo(0,-s);g.quadraticCurveTo(s*.85,-s*.5,s*.5,s*.55);g.quadraticCurveTo(0,s*.85,-s*.5,s*.55);g.quadraticCurveTo(-s*.85,-s*.5,0,-s);g.fill();g.globalAlpha=1;cir(-s*.2,-s*.2,s*.1,'#ef4444');cir(s*.2,-s*.2,s*.1,'#ef4444');break;
  case'pylon':rect(-s*.14,-s,s*.28,s*2,a);line([[-s*.6,-s*.7],[0,-s],[s*.6,-s*.7]],b,s*.06);line([[-s*.4,0],[0,-s*.2],[s*.4,0]],b,s*.06);cir(0,-s*.5,s*.09,'#ef4444');break;
  case'lantern':rect(-s*.05,-s*.85,s*.1,s*.5,b);{const gr=g.createRadialGradient(0,s*.2,0,0,s*.2,s*.8);gr.addColorStop(0,a);gr.addColorStop(1,'rgba(255,200,0,0)');g.fillStyle=gr;g.beginPath();g.arc(0,s*.2,s*.8,0,TAU);g.fill()}rect(-s*.28,-s*.3,s*.56,s*.75,a);break;
  case'owl':ell(0,0,s*.68,s*.88,a);cir(-s*.24,-s*.2,s*.24,b);cir(s*.24,-s*.2,s*.24,b);cir(-s*.24,-s*.2,s*.1,'#111');cir(s*.24,-s*.2,s*.1,'#111');g.fillStyle='#f59e0b';g.beginPath();g.moveTo(0,s*.08);g.lineTo(-s*.1,s*.2);g.lineTo(s*.1,s*.2);g.fill();break;
  case'spark':starPath(g,0,0,s,a);cir(0,0,s*.3,b);break;
  default:ell(0,0,s*.8,s*.8,a);eyes(g,s)
 }
}
function drawMega(g,s,t,aura){
 g.save();if(aura){g.shadowColor='#ef4444';g.shadowBlur=30}
 g.strokeStyle='#ef4444';g.lineWidth=5;g.fillStyle='#450a0a';g.beginPath();g.moveTo(0,-s*1.25);g.lineTo(s*.34,-s*.55);g.lineTo(s*.3,s*.9);g.lineTo(-s*.3,s*.9);g.lineTo(-s*.34,-s*.55);g.closePath();g.fill();g.stroke();g.shadowBlur=0;
 const grad=g.createLinearGradient(-s*.3,0,s*.3,0);grad.addColorStop(0,'#5b3419');grad.addColorStop(.5,'#8b5a2b');grad.addColorStop(1,'#4a2a12');g.fillStyle=grad;g.beginPath();g.moveTo(0,-s*1.18);g.lineTo(s*.26,-s*.5);g.lineTo(s*.22,s*.82);g.lineTo(-s*.22,s*.82);g.lineTo(-s*.26,-s*.5);g.closePath();g.fill();
 g.strokeStyle='rgba(40,20,8,.6)';g.lineWidth=2;for(let i=-2;i<=2;i++){g.beginPath();g.moveTo(i*s*.08,-s*.45);g.bezierCurveTo(i*s*.08+s*.04,-s*.1,i*s*.08-s*.04,s*.3,i*s*.08,s*.75);g.stroke()}
 g.strokeStyle='#2a1206';g.lineWidth=2.5;g.beginPath();g.moveTo(-s*.1,-s*.2);g.lineTo(-s*.02,0);g.lineTo(-s*.12,s*.2);g.moveTo(s*.12,s*.1);g.lineTo(s*.05,s*.35);g.stroke();
 g.fillStyle='#3b0a0a';g.beginPath();g.moveTo(-s*.24,-s*.35);g.lineTo(-s*.95,-s*.05);g.lineTo(-s*.6,s*.2);g.lineTo(-s*.9,s*.55);g.lineTo(-s*.22,s*.4);g.closePath();g.fill();g.beginPath();g.moveTo(s*.24,-s*.35);g.lineTo(s*.95,-s*.05);g.lineTo(s*.6,s*.2);g.lineTo(s*.9,s*.55);g.lineTo(s*.22,s*.4);g.closePath();g.fill();
 g.fillStyle='#ef4444';g.shadowColor='#ef4444';g.shadowBlur=16;g.beginPath();g.ellipse(-s*.11,-s*.42,s*.07,s*.05,-.2,0,TAU);g.ellipse(s*.11,-s*.42,s*.07,s*.05,.2,0,TAU);g.fill();g.shadowBlur=0;g.fillStyle='#fff';g.beginPath();g.arc(-s*.11,-s*.42,s*.02,0,TAU);g.arc(s*.11,-s*.42,s*.02,0,TAU);g.fill();
 g.strokeStyle='#1a0505';g.lineWidth=3;g.beginPath();g.moveTo(-s*.13,-s*.22);g.quadraticCurveTo(0,-s*.14,s*.13,-s*.22);g.stroke();g.fillStyle='#fff';g.beginPath();g.moveTo(-s*.09,-s*.2);g.lineTo(-s*.06,-s*.08);g.lineTo(-s*.03,-s*.2);g.fill();g.beginPath();g.moveTo(s*.03,-s*.2);g.lineTo(s*.06,-s*.08);g.lineTo(s*.09,-s*.2);g.fill();
 g.fillStyle='#b91c1c';g.beginPath();g.ellipse(s*.06,-s*.06,s*.02,s*.05,0,0,TAU);g.fill();
 g.strokeStyle='#2a1206';g.lineWidth=3;for(let i=0;i<7;i++){const x=-s*.22+i*s*.073;g.beginPath();g.moveTo(x,-s*.62);g.lineTo(x+s*.03,-s*.78);g.stroke()}g.restore();
}

/* ---- scene ---- */
function drawScene(){const[st,sb]=sky(G.dayT),L=light(G.dayT),night=G.time==='night';let top=st,bot=sb;if(G.loc===4){top=mix(top,'#050814',.55);bot=mix(bot,'#0f1a3a',.55)}
 const gr=c.createLinearGradient(0,0,0,H);gr.addColorStop(0,top);gr.addColorStop(1,bot);c.fillStyle=gr;c.fillRect(0,0,W,H);
 const sa=G.loc===4?.85:(night?1:0);if(sa){c.fillStyle='#fff';G.stars.forEach(s=>{c.globalAlpha=(.4+.6*Math.sin(perf()*.002+s.t))*sa;c.beginPath();c.arc(s.x*W,s.y*H,s.r,0,TAU);c.fill()});c.globalAlpha=1}
 celestial(night);drawLoc(G.loc,L);
 if(G.loc!==5){cloudsDraw();if(G.rainI>.02)rainDraw();if(G.snowI>.02||G.pile>.5){snowDraw();pileDraw()}}
 particlesDraw();
 const vg=c.createRadialGradient(W/2,H/2,Math.min(W,H)*.3,W/2,H/2,Math.max(W,H)*.75);vg.addColorStop(0,'rgba(0,0,0,0)');vg.addColorStop(1,'rgba(0,0,0,.28)');c.fillStyle=vg;c.fillRect(0,0,W,H)}
const perf=()=>performance.now();
function celestial(night){const p=G.dayT;let x,y,t,op=1;
 if(p>=.20&&p<=.84&&!night){t=(p-.20)/.64;x=-70+(W+140)*t;y=H*.56-Math.sin(t*Math.PI)*H*.46;op=t<.1?t/.1:t>.9?(1-t)/.1:1;c.save();c.globalAlpha=op;const g=c.createRadialGradient(x,y,0,x,y,54);g.addColorStop(0,'#fde047');g.addColorStop(1,'rgba(253,224,71,0)');c.fillStyle=g;c.beginPath();c.arc(x,y,54,0,TAU);c.fill();c.fillStyle='#fbbf24';c.beginPath();c.arc(x,y,23,0,TAU);c.fill();c.restore()}
 else{t=p>=.84?(p-.84)/.36:(p+.16)/.36;t=cl(t,0,1);x=-70+(W+140)*t;y=H*.56-Math.sin(t*Math.PI)*H*.46;op=t<.1?t/.1:t>.9?(1-t)/.1:1;c.save();c.globalAlpha=op;c.fillStyle='#f1f5f9';c.beginPath();c.arc(x,y,28,0,TAU);c.fill();c.fillStyle=sky(G.dayT)[0];c.beginPath();c.arc(x+9,y-4,24,0,TAU);c.fill();c.restore()}}
function cloudsDraw(){G.clouds.forEach(q=>{if(q.o<.02)return;c.save();c.globalAlpha=q.o;c.fillStyle=G.weather==='rain'?'#475569':'#cbd5e1';const x=q.x*W,y=q.y*H,s=q.s;c.beginPath();c.arc(x,y,s*.5,0,TAU);c.arc(x+s*.4,y-s*.1,s*.45,0,TAU);c.arc(x+s*.8,y,s*.4,0,TAU);c.arc(x-s*.3,y+s*.05,s*.35,0,TAU);c.arc(x+s*.3,y+s*.1,s*.4,0,TAU);c.fill();c.restore()})}
function rainDraw(){c.strokeStyle=`rgba(147,197,253,${.75*G.rainI})`;G.rain.forEach(d=>{c.lineWidth=d.w;c.beginPath();c.moveTo(d.x,d.y);c.lineTo(d.x,d.y+d.l);c.stroke()})}
function snowDraw(){G.snow.forEach(f=>{c.fillStyle=`rgba(255,255,255,${f.o*G.snowI})`;c.beginPath();c.arc(f.x,f.y,f.r,0,TAU);c.fill()})}
function pileDraw(){if(G.pile<.5)return;const h=G.pile;c.fillStyle='rgba(255,255,255,.95)';c.beginPath();c.moveTo(0,H);c.lineTo(0,H-h*.5);for(let x=0;x<=W;x+=28)c.lineTo(x,H-h*.5-Math.sin(x*.05)*h*.15-Math.sin(x*.02+1)*h*.1);c.lineTo(W,H);c.closePath();c.fill()}
function drawLoc(id,L){const gy=groundY(),A=(col,f=1)=>shade(col,(.42+L*.58)*f);
 if(id===0)drawJune(gy,L,A);else if(id===1)drawWave(gy,L,A);else if(id===2)drawLion(gy,L,A);else if(id===3)drawPylons(gy,L,A);else if(id===4)drawForest(gy,L,A);else drawCrypt()}
function bunting(x,y,w,A){c.strokeStyle=A('#78350f');c.lineWidth=1.5;c.beginPath();c.moveTo(x,y);c.quadraticCurveTo(x+w/2,y+14,x+w,y);c.stroke();const cols=['#ef4444','#f59e0b','#22c55e','#3b82f6','#a855f7'];for(let i=0;i<9;i++){const t=i/8,px=x+t*w,py=y+Math.sin(t*Math.PI)*14;c.fillStyle=cols[i%5];c.beginPath();c.moveTo(px-5,py);c.lineTo(px+5,py);c.lineTo(px,py+9);c.closePath();c.fill()}}
function drawJune(gy,L,A){c.fillStyle=A('#86efac');c.fillRect(0,gy,W,H-gy);c.fillStyle=A('#d6d3d1');c.fillRect(0,gy+50,W,36);
 const tw=Math.min(520,W*.62),th=200,tx=W/2-tw/2,ty=gy-th+50;
 if(L<.8){const g=c.createRadialGradient(W/2,ty+th/2,0,W/2,ty+th/2,tw*.8);g.addColorStop(0,`rgba(255,200,100,${(1-L)*.3})`);g.addColorStop(1,'rgba(255,200,100,0)');c.fillStyle=g;c.fillRect(tx-60,ty-60,tw+120,th+120)}
 c.fillStyle='#fff';c.fillRect(tx,ty,tw,th);c.fillStyle='#ff9a3c';c.fillRect(tx,ty,tw,40);
 const ww=34,wh=44,gap=14,n=Math.floor((tw-110)/(ww+gap)),sx=tx+(tw-n*(ww+gap)+gap)/2;
 for(let i=0;i<n;i++){const wx=sx+i*(ww+gap);c.fillStyle='#bfdbfe';c.fillRect(wx,ty+60,ww,wh);c.fillRect(wx,ty+120,ww,wh);if(L<.7){c.fillStyle=`rgba(255,230,150,${(1-L)*.45})`;c.fillRect(wx,ty+60,ww,wh);c.fillRect(wx,ty+120,ww,wh)}}
 const dw=80,dh=90,dx=W/2-dw/2,dy=gy+50-dh;c.fillStyle='#1e3a8a';c.fillRect(dx,dy,dw,dh);c.strokeStyle='#ff9a3c';c.lineWidth=4;c.strokeRect(dx,dy,dw,dh);c.beginPath();c.moveTo(W/2,dy);c.lineTo(W/2,dy+dh);c.stroke();
 bunting(tx+20,ty+46,tw-40,A);
 c.font='900 46px Nunito Variable,Arial';c.textAlign='left';const txt='ИЮНЬ',tw2=c.measureText(txt).width,sx2=W/2-tw2/2,sy=ty-14;let cx=sx2;for(const ch of txt){c.fillStyle=ch==='Ю'?'#ef4444':'#ff9a3c';c.fillText(ch,cx,sy);cx+=c.measureText(ch).width}
 const bx=sx2+tw2+22,by=sy-24,fl=Math.sin(perf()*.01)*.3;c.save();c.translate(bx,by);c.fillStyle='#ef4444';c.save();c.rotate(-.3+fl);c.beginPath();c.ellipse(-8,0,12,8,0,0,TAU);c.fill();c.restore();c.save();c.rotate(.3-fl);c.beginPath();c.ellipse(8,0,12,8,0,0,TAU);c.fill();c.restore();c.fillStyle='#7f1d1d';c.fillRect(-1,-6,2,12);c.restore();
 c.fillStyle=A('#22c55e');for(let i=0;i<9;i++){const bx2=W*.04+i*W*.12;if(bx2>tx-30&&bx2<tx+tw+30)continue;c.beginPath();c.arc(bx2,gy+66,18,Math.PI,0);c.fill();c.fillStyle=['#f472b6','#fde047','#fb7185'][i%3];c.beginPath();c.arc(bx2-6,gy+60,3,0,TAU);c.arc(bx2+5,gy+62,3,0,TAU);c.fill();c.fillStyle=A('#22c55e')}
 lamp(tx-40,gy+50,A);lamp(tx+tw+40,gy+50,A);bench(W*.15,gy+62,A);bench(W*.85,gy+62,A);flowerbed(W*.1,gy+92,50,A);flowerbed(W*.9,gy+92,50,A);planter(tx-70,gy+78,A);planter(tx+tw+70,gy+78,A)}
function drawWave(gy,L,A){const D=(col)=>A(col,.9);c.fillStyle=D('#8a8580');c.fillRect(0,gy-220,W*.25,220);c.fillRect(W*.75,gy-220,W*.25,220);
 c.fillStyle=D('#fde047');for(let i=0;i<4;i++)for(let j=0;j<4;j++){if(G.winsA[i*4+j])c.fillRect(W*.03+j*25,gy-200+i*45,15,20);if(G.winsB[i*4+j])c.fillRect(W*.78+j*25,gy-200+i*45,15,20)}
 c.fillStyle=D('#6ab88a');c.fillRect(0,gy,W,H-gy);c.fillStyle=D('#686058');c.fillRect(W*.25,gy,W*.5,30);
 c.strokeStyle=D('#ec4899');c.lineWidth=8;c.beginPath();c.moveTo(W*.33,gy+20);for(let t=0;t<9.4;t+=.1)c.lineTo(W*.33+t*25,gy+20-Math.sin(t)*25);c.stroke();
 c.fillStyle=D('#f59e0b');c.beginPath();c.moveTo(W*.55,gy-30);c.lineTo(W*.55,gy+15);c.lineTo(W*.65,gy+15);c.lineTo(W*.62,gy-20);c.closePath();c.fill();c.strokeStyle=D('#78350f');c.lineWidth=3;c.beginPath();c.moveTo(W*.55,gy-30);c.lineTo(W*.55,gy+15);c.stroke();for(let i=0;i<4;i++){c.beginPath();c.moveTo(W*.53,gy-20+i*10);c.lineTo(W*.57,gy-20+i*10);c.stroke()}
 const sx=W*.72,st=gy-25;G.swing+=.03;const ang=Math.sin(G.swing)*.5;c.strokeStyle=D('#78350f');c.lineWidth=4;c.beginPath();c.moveTo(sx-25,gy+15);c.lineTo(sx,st);c.lineTo(sx+25,gy+15);c.stroke();c.beginPath();c.moveTo(sx-25,st);c.lineTo(sx+25,st);c.stroke();c.save();c.translate(sx,st);c.rotate(ang);c.strokeStyle=D('#57534e');c.lineWidth=2;c.beginPath();c.moveTo(-8,0);c.lineTo(-8,35);c.moveTo(8,0);c.lineTo(8,35);c.stroke();c.fillStyle=D('#dc2626');c.fillRect(-12,33,24,5);c.restore();
 c.fillStyle=D('#fbbf24');c.beginPath();c.ellipse(W*.45,gy+32,35,10,0,0,TAU);c.fill();c.strokeStyle=D('#78350f');c.lineWidth=2;c.stroke();
 hopscotch(W*.2,gy+62,D);bushRow(W*.06,gy+8,D,'#15803d');bushRow(W*.94,gy+8,D,'#15803d');flowerbed(W*.18,gy+90,44,D);flowerbed(W*.86,gy+90,44,D);
 lamp(W*.3,gy,A);lamp(W*.88,gy,A);bench(W*.12,gy+40,A);bin(W*.9,gy+30,A)}
function drawLion(gy,L,A){c.fillStyle=A('#57534e',.85);c.globalAlpha=.6;for(let i=0;i<6;i++){const hx=W*.45+i*W*.09,hh=40+(i%3)*10;c.fillRect(hx,gy-5-hh,W*.07,hh);c.fillStyle=A('#fde047');for(let r=0;r<3;r++)for(let q=0;q<2;q++)if((i+r+q)%2===0)c.fillRect(hx+5+q*14,gy-5-hh+7+r*12,5,6);c.fillStyle=A('#57534e',.85)}c.globalAlpha=1;
 c.fillStyle=A('#6b7280',.9);c.fillRect(0,gy-250,W*.35,250);c.fillStyle=A('#4b5563',.9);for(let i=0;i<5;i++)for(let j=0;j<4;j++)c.fillRect(W*.03+j*W*.08,gy-230+i*50,20,25);
 c.fillStyle=A('#5a5550',.9);c.fillRect(0,gy,W,H-gy);c.fillStyle=A('#1a5a2a',.9);c.fillRect(W*.4,gy,W*.6,H-gy);
 c.strokeStyle=A('#5a3a1a');c.lineWidth=4;c.beginPath();c.moveTo(W*.4,gy);c.lineTo(W,gy);c.stroke();for(let i=0;i<10;i++){c.beginPath();c.moveTo(W*.42+i*W*.06,gy);c.lineTo(W*.42+i*W*.06,gy-30);c.stroke()}
 const bx=W*.68,by=gy+25;c.fillStyle=A('#57534e');c.beginPath();c.ellipse(bx,by,122,42,0,0,TAU);c.fill();c.fillStyle=A('#3f2817');c.beginPath();c.ellipse(bx,by,112,33,0,0,TAU);c.fill();c.fillStyle=A('#22c55e');c.beginPath();c.ellipse(bx,by-3,105,28,0,0,TAU);c.fill();
 const fc=['#ef4444','#f59e0b','#ec4899','#a855f7','#fbbf24'];for(let i=0;i<22;i++){const q=i*.285,r=25+(i%3)*20,fx=bx+Math.cos(q)*r,fy=by+Math.sin(q)*r*.4-5;c.fillStyle=fc[i%5];c.beginPath();c.arc(fx,fy,4,0,TAU);c.fill()}
 grilleLion(bx,by-25,A);gear(W*.47,gy+42,15,A);gear(W*.91,gy+52,12,A);lamp(W*.44,gy,A);bench(W*.52,gy+60,A);ivy(W*.41,gy-26,A);ivy(W*.97,gy-26,A)}
function drawPylons(gy,L,A){const hy=gy-20;c.fillStyle=A('#4a4540',.9);c.globalAlpha=.78;[[.02,60,.1],[.13,45,.07],[.88,55,.1],[.78,40,.08]].forEach(([x,h,w])=>c.fillRect(W*x,hy-h,W*w,h));c.globalAlpha=1;
 c.fillStyle=A('#fde047');[[.02,60],[.13,45],[.88,55],[.78,40]].forEach(([x,h],k)=>{for(let r=0;r<4;r++)for(let cc=0;cc<3;cc++)if((k+r+cc)%2===0)c.fillRect(W*x+5+cc*12,hy-h+8+r*13,5,7)});
 c.fillStyle=A('#14532d',.9);for(let i=0;i<40;i++){const tx=i*W/40,th=25+Math.sin(i*.7)*10;c.beginPath();c.moveTo(tx,hy);c.lineTo(tx+W/80,hy-th);c.lineTo(tx+W/40,hy);c.fill()}
 const rb=H,lb=W*.2,rb2=W*.8,lt=W*.47,rt=W*.53;c.fillStyle=A('#1f2937');c.beginPath();c.moveTo(lb,rb);c.lineTo(lt,hy);c.lineTo(rt,hy);c.lineTo(rb2,rb);c.closePath();c.fill();
 c.strokeStyle=A('#fbbf24');c.lineWidth=2;c.setLineDash([15,15]);c.beginPath();c.moveTo(W*.5,rb);c.lineTo(W*.5,hy);c.stroke();c.setLineDash([]);
 // Пешеходный переход: полосы идут слева направо через дорогу, покемоны ходят по ним
 const y0=gy+26,y1=gy+82,t0=(y0-hy)/(rb-hy),t1=(y1-hy)/(rb-hy);
 const l0=lt+(lb-lt)*t0,r0=rt+(rb2-rt)*t0,l1=lt+(lb-lt)*t1,r1=rt+(rb2-rt)*t1;
 c.fillStyle=A('#f9fafb');const n=10;for(let i=0;i<n;i++){const u0=i/n+.012,u1=(i+.62)/n;const x00=l0+(r0-l0)*u0,x01=l0+(r0-l0)*u1,x10=l1+(r1-l1)*u0,x11=l1+(r1-l1)*u1;c.beginPath();c.moveTo(x00,y0);c.lineTo(x01,y0);c.lineTo(x11,y1);c.lineTo(x10,y1);c.closePath();c.fill()}
 c.fillStyle=A('#4b5563');c.beginPath();c.moveTo(0,rb);c.lineTo(lb,rb);c.lineTo(lt,hy);c.lineTo(0,hy);c.closePath();c.fill();c.beginPath();c.moveTo(W,rb);c.lineTo(rb2,rb);c.lineTo(rt,hy);c.lineTo(W,hy);c.closePath();c.fill();
 [W*.15,W*.85].forEach(px=>{c.fillStyle=A('#78716c');c.fillRect(px-25,gy-250,50,250);c.fillStyle=A('#a8a29e');c.fillRect(px-35,gy-265,70,15);c.fillStyle=A('#5a5550');c.fillRect(px-20,gy-220,40,3);c.fillRect(px-20,gy-180,40,3);star(px,gy-285,15,A('#fbbf24'));c.strokeStyle=A('#a8a29e');c.lineWidth=2;c.beginPath();c.arc(px,gy-285,20,0,TAU);c.stroke()});
 streetLamp(W*.05,gy,A);streetLamp(W*.95,gy,A);bin(W*.08,gy+10,A);bin(W*.92,gy+10,A);trafficLight(W*.24,gy+20,A);neonSign(W*.5,gy-120,A);roadStuds(l0,r0,l1,r1,y0,y1,A)}
function drawForest(gy,L,A){c.fillStyle=A('#0a1a0a',.8);c.fillRect(0,gy,W,H-gy);
 for(let i=0;i<16;i++){const tx=i*W/16+Math.sin(i)*20;c.fillStyle=A('#2a1808',.85);c.fillRect(tx-5,gy-150,10,150);c.fillStyle=A('#051a06',.85);c.beginPath();c.moveTo(tx-40,gy-100);c.lineTo(tx,gy-200);c.lineTo(tx+40,gy-100);c.fill();c.beginPath();c.moveTo(tx-35,gy-150);c.lineTo(tx,gy-230);c.lineTo(tx+35,gy-150);c.fill()}
 const ry=gy+10;c.fillStyle=A('#57534e',.9);c.fillRect(0,ry,W,25);c.strokeStyle=A('#a8a29e',.9);c.lineWidth=2;c.beginPath();c.moveTo(0,ry+8);c.lineTo(W,ry+8);c.moveTo(0,ry+17);c.lineTo(W,ry+17);c.stroke();c.fillStyle=A('#3f2817',.9);for(let i=0;i<W/20;i++)c.fillRect(i*20,ry+5,12,15);
 if(G.train.on)train(G.train.x,ry,A);
 c.fillStyle=A('#5a3a1a',.9);c.fillRect(0,gy+50,W,25);for(let i=0;i<4;i++)fLamp(W*.14+i*W*.24,gy+42,A);
 mushroomPatch(W*.08,gy+70,A);mushroomPatch(W*.88,gy+76,A);log(W*.32,gy+82,A);log(W*.7,gy+88,A);fencePosts(gy+92,A);
 for(let i=0;i<10;i++){const fx=(Math.sin(i*12.3)*.5+.5)*W,fy=gy-40-(Math.sin(i*7.7)*.5+.5)*90,al=.25+.5*Math.sin(perf()*.003+i);c.fillStyle=`rgba(253,224,71,${Math.max(0,al)})`;c.beginPath();c.arc(fx,fy,2,0,TAU);c.fill()}}
function drawCrypt(){c.fillStyle='#1a0a0a';c.fillRect(0,0,W,H);c.fillStyle='#2d1810';for(let i=0;i<20;i++)for(let j=0;j<10;j++)c.fillRect(i*W/20,j*H/10,W/20-2,H/10-2);
 c.fillStyle='#1a0a0a';c.fillRect(0,H*.7,W,H*.3);c.strokeStyle='#2a1810';c.lineWidth=1;for(let i=0;i<20;i++)for(let j=0;j<6;j++){c.beginPath();c.ellipse(i*W/20+(j%2)*W/40,H*.7+j*H*.05,W/40,H*.025,0,0,TAU);c.stroke()}
 cryptWindow(W*.5,H*.22);chandelier(W*.5,H*.12);
 for(let i=0;i<5;i++){const cx=W*.1+i*W*.18,cy=H*.75;c.fillStyle='#3f2817';c.beginPath();c.moveTo(cx-20,cy);c.lineTo(cx-25,cy+30);c.lineTo(cx-20,cy+80);c.lineTo(cx+20,cy+80);c.lineTo(cx+25,cy+30);c.lineTo(cx+20,cy);c.closePath();c.fill();c.fillStyle='#78350f';c.beginPath();c.moveTo(cx-18,cy+5);c.lineTo(cx-22,cy+30);c.lineTo(cx-18,cy+75);c.lineTo(cx+18,cy+75);c.lineTo(cx+22,cy+30);c.lineTo(cx+18,cy+5);c.closePath();c.fill();c.strokeStyle='#4a2c1a';c.lineWidth=2;c.beginPath();c.moveTo(cx,cy+20);c.lineTo(cx,cy+60);c.moveTo(cx-10,cy+35);c.lineTo(cx+10,cy+35);c.stroke()}
 c.fillStyle='#92400e';for(let i=0;i<24;i++){const sx=(Math.sin(i*17+3)*.5+.5)*W,sy=H*.7+(Math.sin(i*23+7)*.5+.5)*H*.25,an=(Math.sin(i*31+11)*.5+.5)*Math.PI;c.save();c.translate(sx,sy);c.rotate(an);c.fillRect(-2,-20,4,40);c.beginPath();c.moveTo(-2,-20);c.lineTo(0,-25);c.lineTo(2,-20);c.fill();c.restore()}
 for(let i=0;i<9;i++){const cx=W*.07+i*W*.11,cy=H*.6;c.fillStyle='#e7e0c8';c.fillRect(cx-3,cy,6,15);const fl=.7+Math.sin(perf()*.01+i)*.3;c.fillStyle=`rgba(251,191,36,${fl})`;c.beginPath();c.moveTo(cx-3,cy);c.quadraticCurveTo(cx,cy-12,cx+3,cy);c.fill();const g=c.createRadialGradient(cx,cy-5,0,cx,cy-5,42);g.addColorStop(0,`rgba(251,191,36,${fl*.4})`);g.addColorStop(1,'rgba(251,191,36,0)');c.fillStyle=g;c.beginPath();c.arc(cx,cy-5,42,0,TAU);c.fill()}
 cobweb(0,0,1);cobweb(W,0,-1);
 c.fillStyle='#0a0505';for(let i=0;i<5;i++){const bx=(W*.15+i*W*.18+Math.sin(perf()*.002+i*2)*30)%W,by=H*.18+Math.sin(perf()*.003+i)*20,wi=Math.sin(perf()*.02+i)*.3;c.save();c.translate(bx,by);c.beginPath();c.ellipse(0,0,4,6,0,0,TAU);c.fill();c.beginPath();c.moveTo(-3,-2);c.quadraticCurveTo(-15,-10+wi*10,-20,0);c.quadraticCurveTo(-10,2,-3,2);c.fill();c.beginPath();c.moveTo(3,-2);c.quadraticCurveTo(15,-10+wi*10,20,0);c.quadraticCurveTo(10,2,3,2);c.fill();c.restore()}
 c.strokeStyle='#3a2418';c.lineWidth=6;for(let i=0;i<3;i++){const ax=W*.25+i*W*.25;c.beginPath();c.arc(ax,H*.42,W*.09,Math.PI,0);c.stroke()}}
function cryptWindow(x,y){c.save();c.translate(x,y);c.fillStyle='#3a2418';c.beginPath();c.arc(0,0,42,Math.PI,0);c.lineTo(42,50);c.lineTo(-42,50);c.closePath();c.fill();c.fillStyle='rgba(220,38,38,.55)';c.beginPath();c.arc(0,0,34,Math.PI,0);c.lineTo(34,44);c.lineTo(-34,44);c.closePath();c.fill();c.strokeStyle='#1a0a0a';c.lineWidth=3;c.beginPath();c.moveTo(0,-34);c.lineTo(0,44);c.moveTo(-34,8);c.lineTo(34,8);c.stroke();c.fillStyle='rgba(253,224,71,.25)';c.beginPath();c.arc(0,8,12,0,TAU);c.fill();c.restore()}
function chandelier(x,y){c.strokeStyle='#4a2c1a';c.lineWidth=2;c.beginPath();c.moveTo(x,0);c.lineTo(x,y);c.stroke();c.strokeStyle='#6b4a28';c.lineWidth=3;c.beginPath();c.arc(x,y+18,26,0,Math.PI);c.stroke();for(let i=0;i<5;i++){const cx=x-26+i*13,cy=y+18+Math.sin(i)*4;c.fillStyle='#e7e0c8';c.fillRect(cx-2,cy,4,10);const fl=.6+Math.sin(perf()*.012+i)*.3;c.fillStyle=`rgba(251,191,36,${fl})`;c.beginPath();c.arc(cx,cy-3,3,0,TAU);c.fill()}}
function cobweb(x,y,dir){c.save();c.translate(x,y);c.scale(dir,1);c.strokeStyle='rgba(220,220,220,.22)';c.lineWidth=1;for(let i=0;i<6;i++){const a=i*Math.PI/12;c.beginPath();c.moveTo(0,0);c.lineTo(Math.cos(a)*W*.14,Math.sin(a)*W*.14);c.stroke()}for(let i=1;i<4;i++){c.beginPath();c.arc(0,0,i*W*.035,0,Math.PI/2);c.stroke()}c.restore()}
function grilleLion(x,y,A){const bar=A('#6b4a28'),dark=A('#3a2818');c.save();c.translate(x,y);
 c.fillStyle=A('#4a4038');c.fillRect(-40,25,80,22);c.fillStyle=A('#6b5a48');c.fillRect(-44,45,88,6);
 c.strokeStyle=bar;c.lineWidth=3.5;for(let i=0;i<20;i++){const q=i/20*TAU,lm=.8+.2*Math.abs(Math.sin(q)),ir=22,or=42*lm;c.beginPath();c.moveTo(Math.cos(q)*ir,-15+Math.sin(q)*ir);c.lineTo(Math.cos(q)*or,-15+Math.sin(q)*or);c.stroke()}
 c.lineWidth=2;c.beginPath();for(let i=0;i<=20;i++){const q=i/20*TAU,r=42*(.8+.2*Math.abs(Math.sin(q)));i?c.lineTo(Math.cos(q)*r,-15+Math.sin(q)*r):c.moveTo(Math.cos(q)*r,-15+Math.sin(q)*r)}c.stroke();
 c.strokeStyle=dark;c.lineWidth=3;c.beginPath();c.arc(0,-15,22,0,TAU);c.stroke();for(let i=-2;i<=2;i++){const xx=i*8,h=Math.sqrt(Math.max(0,484-xx*xx));c.lineWidth=2.5;c.beginPath();c.moveTo(xx,-15-h);c.lineTo(xx,-15+h);c.stroke()}
 c.lineWidth=2.5;c.beginPath();c.moveTo(-18,-32);c.lineTo(-12,-42);c.lineTo(-6,-32);c.moveTo(18,-32);c.lineTo(12,-42);c.lineTo(6,-32);c.stroke();
 c.fillStyle='#fbbf24';c.shadowColor='#fbbf24';c.shadowBlur=8;c.beginPath();c.arc(-9,-18,3,0,TAU);c.arc(9,-18,3,0,TAU);c.fill();c.shadowBlur=0;
 c.fillStyle=dark;c.beginPath();c.moveTo(-4,-8);c.lineTo(0,-4);c.lineTo(4,-8);c.closePath();c.fill();c.strokeStyle=dark;c.lineWidth=2;c.beginPath();c.moveTo(-8,-3);c.lineTo(8,-3);c.moveTo(0,-4);c.lineTo(0,2);c.moveTo(-6,2);c.quadraticCurveTo(0,6,6,2);c.stroke();
 c.strokeStyle=bar;c.lineWidth=3;c.beginPath();c.ellipse(0,20,30,18,0,0,TAU);c.stroke();for(let i=-3;i<=3;i++){const xx=i*8,h=Math.sqrt(Math.max(0,1-(xx/30)**2))*18;c.lineWidth=2;c.beginPath();c.moveTo(xx,20-h);c.lineTo(xx,20+h);c.stroke()}
 c.lineWidth=3;[-20,-12,12,20].forEach(xx=>{c.beginPath();c.moveTo(xx,32);c.lineTo(xx,50);c.stroke()});c.lineWidth=2.5;c.beginPath();c.moveTo(-23,50);c.lineTo(-9,50);c.moveTo(9,50);c.lineTo(23,50);c.stroke();
 c.lineWidth=3;c.beginPath();c.moveTo(28,15);c.quadraticCurveTo(45,5,42,-10);c.stroke();c.lineWidth=2;for(let i=0;i<6;i++){const q=i/6*TAU;c.beginPath();c.moveTo(42,-10);c.lineTo(42+Math.cos(q)*6,-10+Math.sin(q)*6);c.stroke()}c.restore()}
function lamp(x,y,A){c.strokeStyle=A('#374151');c.lineWidth=3;c.beginPath();c.moveTo(x,y);c.lineTo(x,y-50);c.stroke();const L=light(G.dayT),gl=L<.7?.6:.2;c.fillStyle=A('#fde047');c.beginPath();c.arc(x,y-55,6,0,TAU);c.fill();const g=c.createRadialGradient(x,y-55,0,x,y-55,30);g.addColorStop(0,`rgba(253,224,71,${gl})`);g.addColorStop(1,'rgba(253,224,71,0)');c.fillStyle=g;c.beginPath();c.arc(x,y-55,30,0,TAU);c.fill()}
function streetLamp(x,y,A){lamp(x,y,A);c.fillStyle=A('#374151');c.beginPath();c.moveTo(x-10,y-50);c.lineTo(x+10,y-50);c.lineTo(x+7,y-60);c.lineTo(x-7,y-60);c.closePath();c.fill()}
function trafficLight(x,y,A){c.fillStyle=A('#1f2937');c.fillRect(x-4,y-46,8,46);c.fillRect(x-9,y-64,18,22);['#ef4444','#f59e0b','#22c55e'].forEach((col,i)=>{c.fillStyle=col;c.globalAlpha=i===2?.9:.35;c.beginPath();c.arc(x,y-58+i*7,3,0,TAU);c.fill();c.globalAlpha=1})}
function neonSign(x,y,A){c.save();c.globalAlpha=.85;c.font='900 13px Nunito Variable,Arial';c.textAlign='center';c.shadowColor='#22d3ee';c.shadowBlur=12;c.fillStyle='#a5f3fc';c.fillText('ПОРОХОВЫЕ',x,y);c.shadowBlur=0;c.restore()}
function roadStuds(l0,r0,l1,r1,y0,y1,A){c.fillStyle=A('#fde047');for(let i=0;i<6;i++){const t=i/5,x=l1+(r1-l1)*t;c.beginPath();c.arc(x,y1+5,2,0,TAU);c.fill()}}
function bin(x,y,A){c.fillStyle=A('#374151');c.fillRect(x-8,y-15,16,20);c.fillStyle=A('#1f2937');c.fillRect(x-9,y-17,18,3)}
function bench(x,y,A){c.fillStyle=A('#78350f');c.fillRect(x-20,y,40,4);c.fillRect(x-20,y-8,40,3);c.fillRect(x-18,y-8,3,12);c.fillRect(x+15,y-8,3,12)}
function planter(x,y,A){c.fillStyle=A('#78350f');c.fillRect(x-14,y,28,12);c.fillStyle=A('#22c55e');c.beginPath();c.arc(x-6,y-3,7,Math.PI,0);c.arc(x+6,y-3,7,Math.PI,0);c.fill();c.fillStyle='#f472b6';c.beginPath();c.arc(x,y-7,3,0,TAU);c.fill()}
function flowerbed(x,y,w,A){c.fillStyle=A('#57534e');c.beginPath();c.ellipse(x,y,w/2+5,14,0,0,TAU);c.fill();c.fillStyle=A('#22c55e');c.beginPath();c.ellipse(x,y-2,w/2,10,0,0,TAU);c.fill();['#ef4444','#f59e0b','#ec4899'].forEach((col,i)=>{c.fillStyle=col;c.beginPath();c.arc(x-w/3+i*w/3,y-4,3,0,TAU);c.fill()})}
function bushRow(x,y,A,col){c.fillStyle=A(col);for(let i=0;i<4;i++){c.beginPath();c.arc(x+i*14,y,10,Math.PI,0);c.fill()}}
function hopscotch(x,y,A){c.strokeStyle=A('#f8fafc');c.lineWidth=2;for(let i=0;i<4;i++)c.strokeRect(x+i*14,y-i*8,12,10)}
function ivy(x,y,A){c.strokeStyle=A('#166534');c.lineWidth=2;c.beginPath();c.moveTo(x,y);c.bezierCurveTo(x+8,y+10,x-8,y+20,x+4,y+30);c.stroke();c.fillStyle=A('#22c55e');for(let i=0;i<4;i++){c.beginPath();c.ellipse(x+(i%2?6:-6),y+6+i*7,4,2,i,0,TAU);c.fill()}}
function gear(x,y,r,A){c.fillStyle=A('#78716c');c.beginPath();c.arc(x,y,r,0,TAU);c.fill();c.fillStyle=A('#57534e');for(let i=0;i<8;i++){const q=i*.785+perf()*.001;c.fillRect(x+Math.cos(q)*r*.7-2,y+Math.sin(q)*r*.7-2,4,4)}}
function fLamp(x,y,A){c.strokeStyle=A('#3f2817');c.lineWidth=2;c.beginPath();c.moveTo(x,y);c.lineTo(x,y-25);c.stroke();const L=light(G.dayT),fl=.7+Math.sin(perf()*.01+x)*.3,gl=L<.7?fl:fl*.3;c.fillStyle=`rgba(251,191,36,${gl})`;c.beginPath();c.arc(x,y-28,4,0,TAU);c.fill();const g=c.createRadialGradient(x,y-28,0,x,y-28,20);g.addColorStop(0,`rgba(251,191,36,${gl*.5})`);g.addColorStop(1,'rgba(251,191,36,0)');c.fillStyle=g;c.beginPath();c.arc(x,y-28,20,0,TAU);c.fill()}
function mushroomPatch(x,y,A){for(let i=0;i<3;i++){const mx=x+i*12,my=y+(i%2)*4;c.fillStyle=A('#f8fafc');c.fillRect(mx-2,my-6,4,8);c.fillStyle=A(i===1?'#f59e0b':'#dc2626');c.beginPath();c.arc(mx,my-6,6,Math.PI,0);c.fill();c.fillStyle='#fff';c.beginPath();c.arc(mx-2,my-8,1.4,0,TAU);c.arc(mx+2,my-7,1.4,0,TAU);c.fill()}}
function log(x,y,A){c.fillStyle=A('#5a3a1a');c.beginPath();c.ellipse(x,y,22,7,0,0,TAU);c.fill();c.strokeStyle=A('#3f2817');c.lineWidth=1.5;c.beginPath();c.arc(x+18,y,5,0,TAU);c.stroke()}
function fencePosts(y,A){c.strokeStyle=A('#3f2817');c.lineWidth=3;for(let i=0;i<8;i++){const x=W*.06+i*W*.12;c.beginPath();c.moveTo(x,y);c.lineTo(x,y-16);c.stroke()}c.lineWidth=2;c.beginPath();c.moveTo(W*.06,y-10);c.lineTo(W*.9,y-10);c.stroke()}
function train(tx,ry,A){c.fillStyle=A('#1f2937');c.fillRect(tx,ry-40,90,40);c.fillStyle=A('#374151');c.fillRect(tx+55,ry-60,30,25);c.fillStyle=A('#fde047');c.fillRect(tx+60,ry-55,20,15);c.fillStyle=A('#dc2626');c.fillRect(tx-5,ry-35,10,30);c.fillStyle=A('#1f2937');c.fillRect(tx+10,ry-55,12,18);c.fillRect(tx+8,ry-58,16,5);
 c.fillStyle='rgba(200,200,200,.6)';for(let i=0;i<4;i++){c.beginPath();c.arc(tx+16+Math.sin(perf()*.003+i)*5-i*8,ry-65-i*10,8+i*2,0,TAU);c.fill()}
 c.fillStyle='#000';for(let i=0;i<3;i++){c.beginPath();c.arc(tx+15+i*25,ry+5,8,0,TAU);c.fill();c.strokeStyle='#4b5563';c.lineWidth=1;for(let s=0;s<4;s++){const q=perf()*.01+s*1.57;c.beginPath();c.moveTo(tx+15+i*25,ry+5);c.lineTo(tx+15+i*25+Math.cos(q)*6,ry+5+Math.sin(q)*6);c.stroke()}}
 for(let w=0;w<3;w++){const wx=tx-80-w*85;c.fillStyle=A('#78350f');c.fillRect(wx,ry-35,75,35);c.fillStyle=A('#4a2c1a');c.beginPath();c.moveTo(wx-2,ry-35);c.lineTo(wx+37,ry-42);c.lineTo(wx+77,ry-35);c.closePath();c.fill();c.fillStyle=A('#fde047');[8,30,52].forEach(o=>c.fillRect(wx+o,ry-28,15,12));c.fillStyle='#000';c.beginPath();c.arc(wx+15,ry+5,6,0,TAU);c.arc(wx+60,ry+5,6,0,TAU);c.fill()}}

/* ---- particles / shiny ---- */
function burst(x,y,col,n=14){for(let i=0;i<n;i++){const a=Math.random()*TAU,v=40+Math.random()*120;G.particles.push({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v-40,life:.6+Math.random()*.5,t:0,col,r:2+Math.random()*3})}}
function shinyCelebration(x,y,name){const box=document.getElementById('screenBox');const el=document.createElement('div');el.className='shiny-pop';el.style.left=cl(x,90,W-90)+'px';el.style.top=cl(y,70,H-70)+'px';el.innerHTML=`<svg viewBox="0 0 120 120"><g fill="none" stroke="#fde047" stroke-width="3" opacity=".9">${Array.from({length:12},(_,i)=>{const a=i*TAU/12,x1=60+Math.cos(a)*18,y1=60+Math.sin(a)*18,x2=60+Math.cos(a)*54,y2=60+Math.sin(a)*54;return`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`}).join('')}</g><circle cx="60" cy="60" r="30" fill="none" stroke="#f59e0b" stroke-width="2" opacity=".7"/></svg><b>✨ ШАЙНИ!</b>`;box.appendChild(el);burst(x,y,'#fde047',30);burst(x,y,'#f59e0b',16);setTimeout(()=>el.remove(),1050)}
function particlesDraw(){for(let i=G.particles.length-1;i>=0;i--){const p=G.particles[i];p.t+=1/60;p.x+=p.vx/60;p.y+=p.vy/60;p.vy+=160/60;const al=1-p.t/p.life;if(al<=0){G.particles.splice(i,1);continue}c.globalAlpha=al;c.fillStyle=p.col;c.beginPath();c.arc(p.x,p.y,p.r,0,TAU);c.fill();c.globalAlpha=1}}

/* ---- field ---- */
function available(id){const r=[];for(let i=0;i<=id;i++)r.push(...LOCS[i].p);return r}
function spawnField(){G.field=[];G.spawnT=0;for(let i=0;i<5;i++)spawnOne(true)}
function spawnOne(initial=false){
 if(G.loc===5){if(!G.field.some(p=>p.pid===51))G.field.push({uid:G.uid++,pid:51,x:W/2,y:H*.58,size:megaSize(),vx:0,dir:0,baseY:H*.58,type:'flying',caught:true,boss:true,phrase:MEGA.bad[0],pt:3,walk:0,scale:1,state:'walk',stopX:null,tA:0,wA:0,tm:1,wm:1});return}
 const av=available(G.loc),cc=av.filter(p=>G.caught.has(p.id)),uc=av.filter(p=>!G.caught.has(p.id)),cur=LOCS[G.loc].p.filter(p=>!G.caught.has(p.id));
 let p,caught;const r=Math.random();
 if(cur.length&&r<.3){p=rnd(cur);caught=false}else if(uc.length&&r<.42){p=rnd(uc);caught=false}else if(cc.length){p=rnd(cc);caught=true}else if(uc.length){p=rnd(uc);caught=false}else return;
 const fly=p.type==='flying',dir=Math.random()<.5?1:-1,gy=groundY();
 const x=initial?Math.random()*W:(dir>0?-70:W+70);
 const lane=fly?110+Math.random()*110:38+Math.random()*34;
 G.field.push({uid:G.uid++,pid:p.id,x,y:fly?gy-lane:gy+lane,lane,dir,vx:p.speed*dir,ovx:p.speed*dir,size:p.size,type:p.type,caught,phrase:'',pt:1+Math.random()*4,walk:Math.random()*99,scale:1,state:'walk',stopX:null,slow:null,tA:0,wA:0,tm:1,wm:1});
}
function megaSize(){return cl(Math.min(W,H)*.27,110,190)}
function phraseFor(id,caught){if(id===51)return MEGA.bad[G.megaPhrase%MEGA.bad.length];const loc=LOCS[G.loc],pool=caught?[...CG,...loc.good]:[...CB,...loc.bad];return rnd(pool)}
function updateField(dt){
 G.field=G.field.filter(p=>p.boss||p.state==='catching'||p.x>-120&&p.x<W+120);
 G.field.forEach(p=>{
  const pk=byId(p.pid),m=mults(pk);p.tm=m.tm;p.wm=m.wm;
  p.tA+=((m.tm!==1?1:0)-p.tA)*Math.min(1,dt*6);
  p.wA+=((m.wm!==1&&G.loc!==5?1:0)-p.wA)*Math.min(1,dt*6);
  if(p.boss){p.x=W/2;p.y=H*.58;p.size=megaSize();G.megaPhraseT+=dt;if(G.megaPhraseT>3.2){G.megaPhraseT=0;G.megaPhrase=(G.megaPhrase+1)%MEGA.bad.length;p.phrase=MEGA.bad[G.megaPhrase]}return}
  p.caught=G.caught.has(p.pid);
  if(p.slow){const t=cl((perf()-p.slow.t0)/p.slow.dur,0,1),e=easeOut(t);p.x=p.slow.from+(p.slow.to-p.slow.from)*e;if(t>=1){p.x=p.slow.to;p.vx=0;p.state='held';p.slow=null}}
  else if(p.state==='walk'){p.x+=p.vx*dt}
  p.walk+=Math.abs(p.vx)*dt*2;
  const gy=groundY();p.y=p.type==='flying'?gy-p.lane+Math.sin(perf()*.002+p.pid)*14:gy+p.lane;
  p.pt-=dt;if(p.pt<=0&&p.state!=='catching'){p.phrase=phraseFor(p.pid,p.caught);p.pt=3.5+Math.random()*3.5}
 });
 G.spawnT-=dt;if(G.spawnT<=0&&G.field.filter(p=>p.state!=='catching').length<6&&G.loc!==5){spawnOne();G.spawnT=.6+Math.random()*.9}
 if(G.loc===4){if(G.train.on){G.train.x+=190*dt;if(G.train.x>W+520){G.train.on=false;G.train.t=10+Math.random()*14}}else{G.train.t-=dt;if(G.train.t<=0){G.train.on=true;G.train.x=-430}}}
}
function drawBuffBadges(p){
 const badges=[];if(p.tA>.03)badges.push({icon:TI[G.time],up:p.tm>1,a:p.tA});if(p.wA>.03&&G.loc!==5)badges.push({icon:WI[G.weather],up:p.wm>1,a:p.wA});
 if(!badges.length)return;const bw=34,gap=5,total=badges.length*bw+(badges.length-1)*gap;let x=p.x-total/2,y=p.y-p.size*(p.boss?1.32:1)-20;
 badges.forEach((b,i)=>{c.save();c.globalAlpha=b.a;const bx=x+i*(bw+gap);c.fillStyle=b.up?'rgba(220,252,231,.95)':'rgba(254,226,226,.95)';rr(bx,y,bw,18,9);c.fill();c.strokeStyle=b.up?'#16a34a':'#dc2626';c.lineWidth=1.2;c.stroke();c.font='900 11px Nunito Variable,Arial';c.textAlign='center';c.fillStyle=b.up?'#14532d':'#7f1d1d';c.fillText(b.icon+(b.up?'▲':'▼'),bx+bw/2,y+13);c.restore()});
}
function drawField(){
 G.field.forEach(p=>{const pk=byId(p.pid);if(!pk)return;drawPoke(c,pk,p.x,p.y,p.size,{dark:!p.caught,shiny:G.shiny.has(p.pid)&&p.caught,scale:p.scale,walk:p.walk,mega:p.pid===51});
  drawBuffBadges(p);
  if(p.caught&&p.state!=='catching'&&!p.boss){c.save();c.font='900 13px Nunito Variable,Arial';c.textAlign='center';const ny=p.y+p.size+16,w=c.measureText(pk.name).width+14;c.fillStyle='rgba(255,255,255,.92)';rr(p.x-w/2,ny-12,w,19,6);c.fill();c.fillStyle='#1a1d2e';c.fillText(pk.name,p.x,ny+2);c.restore()}
  if(p.phrase&&p.state!=='catching'){c.save();const good=p.boss?false:p.caught,bx=p.x,by=p.y-p.size*(p.boss?1.42:1)-46;c.font='700 12px Nunito Variable,Arial';const words=p.phrase.split(' '),lines=[];let ln='';words.forEach(w=>{const t=ln?ln+' '+w:w;if(c.measureText(t).width>180){if(ln)lines.push(ln);ln=w}else ln=t});if(ln)lines.push(ln);const fh=lines.length*16+12,fw=Math.max(...lines.map(l=>c.measureText(l).width))+20;c.fillStyle=good?'rgba(187,247,208,.97)':'rgba(220,38,38,.96)';rr(bx-fw/2,by-fh,fw,fh,10);c.fill();c.strokeStyle=good?'#16a34a':'#7f1d1d';c.lineWidth=1.5;c.stroke();c.beginPath();c.moveTo(bx-5,by);c.lineTo(bx+5,by);c.lineTo(bx,by+8);c.fill();c.fillStyle=good?'#14532d':'#fff';c.textAlign='center';lines.forEach((l,i)=>c.fillText(l,bx,by-fh+15+i*16));c.restore()}
 });
}

/* ---- weather & time ---- */
function initWeather(){G.rain=[];G.snow=[];if(G.weather==='rain')for(let i=0;i<150;i++)G.rain.push({x:Math.random()*W,y:Math.random()*H,l:10+Math.random()*22,w:1+Math.random()*1.4,s:380+Math.random()*380});if(G.weather==='snow')for(let i=0;i<85;i++)G.snow.push({x:Math.random()*W,y:Math.random()*H,r:1+Math.random()*4.5,s:22+Math.random()*40,o:.5+Math.random()*.5,d:(Math.random()-.5)*18})}
function updateWeather(dt){const target=G.loc===5?0:G.weather==='rain'?1:G.weather==='snow'?.65:0;G.cloudCover+=(target-G.cloudCover)*Math.min(1,dt*1.2);G.rainI=G.weather==='rain'?G.cloudCover:Math.max(0,G.rainI-dt*1.5);G.snowI=G.weather==='snow'?G.cloudCover:Math.max(0,G.snowI-dt*1.2);
 G.clouds.forEach((q,i)=>{const want=i<Math.round(G.cloudCover*8)?.85:0;q.o+=(want-q.o)*Math.min(1,dt*1.4);q.x+=q.v*dt;if(q.x>1.3)q.x=-.3});
 G.rain.forEach(d=>{d.y+=d.s*dt;if(d.y>H){d.y=-d.l;d.x=Math.random()*W}});
 G.snow.forEach(f=>{f.y+=f.s*dt;f.x+=(f.d+Math.sin(perf()*.001+f.x*.01)*12)*dt;if(f.y>H){f.y=-f.r*2;f.x=Math.random()*W}if(f.x<0)f.x=W;if(f.x>W)f.x=0});
 const pileT=G.weather==='snow'?46:0;G.pile+=(pileT-G.pile)*Math.min(1,dt*(G.weather==='snow'?.25:.6));if(G.pile<.5&&G.weather!=='snow')G.pile=0}
function updateTime(dt){G.dayT=(G.dayT+dt/140)%1;const nt=timeOf(G.dayT);if(nt!==G.time){G.time=nt;updateChips()}if(G.loc!==5){G.weatherT-=dt;if(G.weatherT<=0){const nw=rnd(['clear','clear','rain','snow']);if(nw!==G.weather){G.weather=nw;initWeather();updateChips();notify(nw==='clear'?'Погода наладилась':nw==='rain'?'Пошёл дождь':'Пошёл снег','info')}G.weatherT=26+Math.random()*24}}}

/* ---- interaction ---- */
cv.addEventListener('pointerdown',e=>{if(!G.started||G.loc===5||anyModal())return;const r=cv.getBoundingClientRect(),mx=e.clientX-r.left,my=e.clientY-r.top;for(const p of G.field){if(p.boss||p.state!=='walk')continue;const dx=mx-p.x,dy=my-p.y,rad=Math.max(p.size,34);if(dx*dx+dy*dy<rad*rad){beginCatch(p,mx,my);return}}});
function beginCatch(p,mx,my){const ahead=p.caught?34:72,to=cl(p.x+(p.dir>0?ahead:-ahead),56,W-56);p.state='slowing';p.stopX=to;p.slow={from:p.x,to,t0:perf(),dur:p.caught?260:400};
 const box=document.getElementById('screenBox'),ball=document.createElement('div');ball.className='fly';ball.innerHTML=`<svg width="42" height="42" viewBox="0 0 42 42"><circle cx="21" cy="21" r="19" fill="#fff" stroke="#111" stroke-width="2"/><path d="M2 21a19 19 0 0 1 38 0z" fill="#ef4444" stroke="#111" stroke-width="2"/><path d="M2 21h38" stroke="#111" stroke-width="2"/><circle cx="21" cy="21" r="6" fill="#fff" stroke="#111" stroke-width="2"/><circle cx="21" cy="21" r="2.4" fill="#111"/></svg>`;ball.style.left=(mx-21)+'px';ball.style.top=(my-21)+'px';box.appendChild(ball);
 requestAnimationFrame(()=>{ball.style.left=(to-21)+'px';ball.style.top=(p.y-21)+'px';ball.style.transform='rotate(540deg)'});
 setTimeout(()=>{ball.remove();if(!G.field.includes(p))return;if(p.caught){p.state='catching';const t0=perf(),dur=260;const step=()=>{const t=cl((perf()-t0)/dur,0,1);p.scale=1-easeOut(t);if(t<1)requestAnimationFrame(step);else{G.field=G.field.filter(q=>q!==p);collect(p)}};step()}else{p.x=to;p.state='held';p.slow=null;startBattle(p)}},p.caught?300:440)}
function collect(p){const pk=byId(p.pid),gain=G.loc+1;G.power[p.pid]=(G.power[p.pid]||pk.base)+gain;G.stats.catches++;burst(p.x,p.y,'#fbbf24',10);if(!G.shiny.has(p.pid)&&Math.random()<.06){G.shiny.add(p.pid);shinyCelebration(p.x,p.y,pk.name);notify(`✨ ${pk.name} теперь шайни! +${gain} к силе`,'gold')}else notify(`+${gain} к силе: ${pk.name}`,'good')}

/* ---- battle ---- */
function startBattle(fieldP){const e=byId(fieldP.pid),ep=ri(Math.max(1,e.base-3),e.base+4)+G.loc;G.battle={id:fieldP.pid,ep,field:fieldP,sel:null,locked:false,token:Date.now()};renderBattle();open('oBattle')}
function renderBattle(){const B=G.battle,e=byId(B.id),mine=[...G.caught].map(id=>({id,p:byId(id),pw:power(id)}));
 document.getElementById('battleBody').innerHTML=`<h2>⚔️ Бой: ${e.name}<button class="x" id="bFleeTop">×</button></h2>
 <div class="arena"><div class="side enemy"><div class="lbl">Враг</div><canvas id="be" width="120" height="120"></canvas><b>${e.name}</b><br><small>Сила ${B.ep}</small></div><div class="vs">VS</div><div class="side mine"><div class="lbl">Твой покемон</div><div id="bm" style="min-height:120px;display:grid;place-items:center;opacity:.55">Выбери ниже ↓</div></div></div>
 <div class="scrollWrap"><button class="sbtn l">‹</button><div class="hscroll"><div class="team">${mine.map(m=>`<button class="pick" data-id="${m.id}"><canvas width="60" height="60" data-pid="${m.id}"></canvas><b>${m.p.name}</b><small>Сила ${m.pw}</small></button>`).join('')}</div></div><button class="sbtn r">›</button></div>
 <div style="text-align:center;margin-top:12px"><button class="btn sec" id="bFlee">Сбежать</button></div>`;
 const ec=document.getElementById('be').getContext('2d');ec.translate(60,64);drawBody(ec,e,34,e.colors,0);
 document.querySelectorAll('#battleBody canvas[data-pid]').forEach(cn=>{const id=+cn.dataset.pid,pk=byId(id),g=cn.getContext('2d');g.translate(30,33);drawBody(g,pk,17,pk.colors,0)});
 const wrap=document.querySelector('#battleBody .scrollWrap'),hs=wrap.querySelector('.hscroll');wrap.querySelector('.l').onclick=()=>hs.scrollBy({left:-220,behavior:'smooth'});wrap.querySelector('.r').onclick=()=>hs.scrollBy({left:220,behavior:'smooth'});hs.addEventListener('wheel',ev=>{if(Math.abs(ev.deltaY)>Math.abs(ev.deltaX)){ev.preventDefault();hs.scrollLeft+=ev.deltaY}},{passive:false});
 document.querySelectorAll('#battleBody .pick').forEach(b=>b.onclick=()=>{if(!G.battle||G.battle.locked)return;G.battle.locked=true;document.querySelectorAll('#battleBody .pick').forEach(x=>{x.classList.remove('sel');x.disabled=true});b.classList.add('sel');const id=+b.dataset.id,pk=byId(id),pw=power(id);G.battle.sel=id;document.getElementById('bm').style.opacity=1;document.getElementById('bm').innerHTML=`<div><canvas id="bmc" width="120" height="120"></canvas><b>${pk.name}</b><br><small>Сила ${pw}</small></div>`;const g=document.getElementById('bmc').getContext('2d');g.translate(60,64);drawBody(g,pk,34,pk.colors,0);const tok=G.battle.token;setTimeout(()=>{if(G.battle&&G.battle.token===tok)resolveBattle()},380)});
 document.getElementById('bFlee').onclick=fleeBattle;document.getElementById('bFleeTop').onclick=fleeBattle}
function resume(f){if(f){f.state='walk';f.slow=null;f.vx=f.ovx*1.25}}
function fleeBattle(){if(G.battle)resume(G.battle.field);close('oBattle');G.battle=null}
function resolveBattle(){const B=G.battle;if(!B||B.sel==null)return;const mp=power(B.sel),e=byId(B.id),win=mp>B.ep;G.stats.battles++;const modal=document.querySelector('#oBattle .modal'),res=document.createElement('div');res.className='result';res.innerHTML=`<div class="${win?'win':'lose'}">${win?'🎉 Победа!':'💔 Поражение'}<small>${win?e.name+' теперь в коллекции!':e.name+' вырвался и убежал'}</small></div>`;modal.appendChild(res);
 if(win){G.caught.add(B.id);G.power[B.id]=B.ep;G.field=G.field.filter(p=>p!==B.field);G.stats.wins++;burst(W/2,H/2,'#4ade80',20)}else{G.power[B.sel]=Math.max(1,(G.power[B.sel]||1)-1);G.stats.losses++;resume(B.field)}
 const tok=B.token;setTimeout(()=>{if(G.battle&&G.battle.token===tok){res.remove();close('oBattle');G.battle=null}},1500)}

/* ---- raid ---- */
function startRaid(){const loc=LOCS[G.loc],boss=rnd(loc.p),bp=boss.base*(G.loc+1)*2+8;G.raid={loc:G.loc,boss,bp,sel:[]};renderRaid();open('oRaid')}
function renderRaid(){const R=G.raid,mine=[...G.caught].map(id=>({id,p:byId(id),pw:power(id)})).sort((a,b)=>b.pw-a.pw);
 document.getElementById('raidBody').innerHTML=`<h2>⚔️ Рейд босса ${'⭐'.repeat(R.loc+1)}<button class="x" id="rClose">×</button></h2>
 <div class="battleTop"><button class="btn pri" id="rf" disabled>В рейд!</button><button class="btn sec" id="rc">Отмена</button></div>
 <div class="raidGrid"><div class="raidEnemy"><div class="raidLbl" style="color:var(--bad)">Босс</div><canvas id="rb" width="160" height="160"></canvas><b style="font-size:1.1rem">${R.boss.name}</b><br><small>Сила ${R.bp}</small></div>
 <div class="raidTeam"><div class="raidLbl" style="color:var(--good);text-align:center">Твоя команда · выбери троих</div><div class="rlist">${mine.map(m=>`<button class="ritem" data-id="${m.id}"><canvas width="38" height="38" data-pid="${m.id}"></canvas><div><b>${m.p.name}</b><small>Сила ${m.pw}</small></div></button>`).join('')}</div><div style="margin-top:10px;font-weight:900;text-align:center">Сумма: <span id="rs">0</span> / ${R.bp}</div></div></div>`;
 const g=document.getElementById('rb').getContext('2d');g.translate(80,86);drawBody(g,R.boss,54,R.boss.colors,0);
 document.querySelectorAll('#raidBody canvas[data-pid]').forEach(cn=>{const id=+cn.dataset.pid,pk=byId(id),gg=cn.getContext('2d');gg.translate(19,21);drawBody(gg,pk,12,pk.colors,0)});
 document.querySelectorAll('#raidBody .ritem').forEach(b=>b.onclick=()=>{const id=+b.dataset.id;if(R.sel.includes(id)){R.sel=R.sel.filter(x=>x!==id);b.classList.remove('sel')}else if(R.sel.length<3){R.sel.push(id);b.classList.add('sel')}document.getElementById('rs').textContent=R.sel.reduce((s,i)=>s+power(i),0);document.getElementById('rf').disabled=R.sel.length!==3});
 document.getElementById('rf').onclick=resolveRaid;document.getElementById('rc').onclick=()=>close('oRaid');document.getElementById('rClose').onclick=()=>close('oRaid')}
function resolveRaid(){const R=G.raid,sum=R.sel.reduce((s,i)=>s+power(i),0);G.stats.raids++;
 if(sum>R.bp){G.defeated.add(R.loc);G.stats.raidWins++;const next=R.loc+1;if(next<5&&!G.unlocked.has(next))G.unlocked.add(next);close('oRaid');const wasLast=R.loc===4;G.raid=null;if(wasLast){G.unlocked.add(5);congrats('Открыта секретная локация — Колцентр!','Колцентр',5)}else congrats(`Открыта новая локация: ${LOCS[next].name}!`,LOCS[next].name,next)}
 else{R.sel.forEach(id=>G.power[id]=Math.max(1,(G.power[id]||1)-1));notify('Рейд не удался: каждый из троих потерял 1 очко силы.','bad');close('oRaid');G.raid=null}}
function congrats(msg,name,next){document.getElementById('congratsBody').innerHTML=`<h1>🏆 Босс побеждён!</h1><p style="font-weight:800;color:var(--accent);margin-bottom:22px">${msg}</p><button class="btn pri" id="goNext">📍 Перейти: ${name}</button> <button class="btn sec" id="stay">Остаться здесь</button>`;open('oCongrats');document.getElementById('goNext').onclick=()=>{close('oCongrats');goLoc(next)};document.getElementById('stay').onclick=()=>close('oCongrats')}
function goLoc(id){G.loc=id;if(id===5){G.weather='clear';G.pile=0;G.rainI=0;G.snowI=0;initWeather()}updateLocLabel();updateChips();spawnField();notify('📍 '+(id===5?'Колцентр':LOCS[id].name),'info')}

/* ---- mega ---- */
function megaBattle(){const total=totalPower(),bp=MEGA.base;document.getElementById('raidBody').innerHTML=`<h2>👑 Мега босс: Мегакол<button class="x" id="mClose">×</button></h2><div class="battleTop"><button class="btn pri" id="mf">Начать битву</button><button class="btn sec" id="mc">Отмена</button></div><div class="arena"><div class="side enemy" style="grid-column:1/-1"><div class="lbl">Мега босс</div><canvas id="mb" width="220" height="220"></canvas><b style="color:var(--bad);font-size:1.2rem">МЕГАКОЛ</b><br><small>Сила ${bp}</small></div></div><p style="text-align:center;font-size:1.1rem">Суммарная сила коллекции: <b style="color:var(--accent)">${total}</b></p><p style="text-align:center;color:var(--muted);margin-top:6px">Вся коллекция выступает вместе. Для победы нужно ${total} &gt; ${bp}.</p>`;
 const g=document.getElementById('mb').getContext('2d');g.translate(110,120);drawMega(g,78,0,true);document.getElementById('mf').onclick=()=>{const nowTotal=totalPower();if(nowTotal>bp){G.megaDone=true;close('oRaid');finalScreen()}else{notify(`Мегакол сильнее: ${nowTotal} против ${bp}. Усиль коллекцию и возвращайся.`,'bad');close('oRaid')}};document.getElementById('mc').onclick=()=>close('oRaid');document.getElementById('mClose').onclick=()=>close('oRaid');open('oRaid')}
function finalScreen(){const mins=Math.max(1,Math.floor((Date.now()-G.stats.t0)/60000));document.getElementById('finalBody').innerHTML=`<h1>🏆 Победа!</h1><p style="font-weight:800;margin-bottom:16px">Мегакол повержен. Район Пороховые спасён!</p><div class="statsGrid"><div class="stat"><b>${G.caught.size}</b><small>Поймано</small></div><div class="stat"><b>${G.shiny.size}</b><small>Шайни</small></div><div class="stat"><b>${totalPower()}</b><small>Общая сила</small></div><div class="stat"><b>${G.stats.battles}</b><small>Боёв</small></div><div class="stat"><b>${G.stats.raidWins}</b><small>Рейдов выиграно</small></div><div class="stat"><b>${mins}</b><small>Минут в игре</small></div></div><div style="display:flex;gap:6px;justify-content:center;flex-wrap:wrap;margin:14px 0">${LOCS.map(l=>`<span style="padding:5px 11px;background:${l.color};color:#fff;border-radius:999px;font-weight:900;font-size:.78rem">${l.name}</span>`).join('')}<span style="padding:5px 11px;background:#7f1d1d;color:#fff;border-radius:999px;font-weight:900;font-size:.78rem">Колцентр</span></div><button class="btn pri" id="cont">Продолжить игру</button>`;open('oFinal');document.getElementById('cont').onclick=()=>{close('oFinal');notify('Мегакол повержен. Можно спокойно гулять по району!','gold')}}

/* ---- UI ---- */
function updateChips(){const caught=G.loc===5?'👑 БОСС':`${LOCS[G.loc].p.filter(p=>G.caught.has(p.id)).length}/10`;const key=G.time+G.weather+caught+G.loc;if(key===G.chipKey)return;G.chipKey=key;document.getElementById('timeChip').innerHTML=`${TI[G.time]} <span>${TN[G.time]}</span>`;document.getElementById('weatherChip').innerHTML=`${WI[G.weather]} <span class="w">${WN[G.weather]}</span>`;document.getElementById('countChip').innerHTML=`🎯 <span>${caught}</span>`}
function updateLocLabel(){const l=G.loc===5?{name:'Колцентр',color:'#dc2626'}:LOCS[G.loc];document.getElementById('locName').textContent=l.name;const d=document.getElementById('locDot');d.style.background=l.color;d.style.color=l.color}
function checkProgress(){const raid=document.getElementById('bRaid'),mega=document.getElementById('bMega');if(G.loc===5){raid.style.display='none';mega.style.display=G.megaDone?'none':'flex';return}mega.style.display='none';const all=LOCS[G.loc].p.every(p=>G.caught.has(p.id));raid.style.display=all&&!G.defeated.has(G.loc)?'flex':'none';if(all&&!G.defeated.has(G.loc)&&!G.completeShown.has(G.loc)){G.completeShown.add(G.loc);showAll()}}
function showAll(){const l=LOCS[G.loc];document.getElementById('allBody').innerHTML=`<h1>🎉 Локация собрана!</h1><p style="margin-bottom:20px">Все 10 покемонов локации «<b style="color:${l.color}">${l.name}</b>» теперь в коллекции.</p><button class="btn pri" id="ar">⚔️ Начать рейд</button> <button class="btn sec" id="al">Позже</button>`;open('oAll');document.getElementById('ar').onclick=()=>{close('oAll');startRaid()};document.getElementById('al').onclick=()=>close('oAll')}
function openDex(){const tabs=document.getElementById('dexTabs');const locs=[...LOCS.map((l,i)=>({id:i,name:l.name})),{id:5,name:'Колцентр'}];tabs.innerHTML=`<button class="tab on" data-l="all">Все</button>`+locs.map(l=>`<button class="tab" data-l="${l.id}">${l.id===5&&!G.unlocked.has(5)?'🔒 ':''}${l.name}</button>`).join('');tabs.querySelectorAll('.tab').forEach(t=>t.onclick=()=>{tabs.querySelectorAll('.tab').forEach(x=>x.classList.remove('on'));t.classList.add('on');renderDex(t.dataset.l==='all'?'all':+t.dataset.l)});renderDex('all');open('oDex')}
function renderDex(f){let ps=f==='all'?ALLP.slice():f===5?[MEGA]:LOCS[f].p;if(f==='all')ps.push(MEGA);const grid=document.getElementById('dexGrid');grid.innerHTML=ps.map(p=>{const ca=G.caught.has(p.id),sh=G.shiny.has(p.id),hl=homeLoc(p.id),ln=hl>=0?LOCS[hl].name:'Колцентр';return`<div class="card ${ca?'caught':''} ${sh?'shiny':''} ${!ca?'unknown':''}" data-id="${p.id}"><canvas width="80" height="80" data-pid="${p.id}"></canvas><b>${p.name}</b><small>${ca?'Сила '+power(p.id):'Сила: ???'}</small><small>${p.type==='ground'?'🚶 Наземный':'🕊️ Воздушный'}</small><small>📍 ${ln}</small><span class="badge">${TI[p.favTime]}${WI[p.favWeather]}</span></div>`}).join('');grid.querySelectorAll('canvas').forEach(cn=>{const id=+cn.dataset.pid,pk=byId(id),g=cn.getContext('2d');g.translate(40,44);drawPoke(g,pk,0,0,24,{dark:!G.caught.has(id),shiny:G.shiny.has(id),mega:id===51})});grid.querySelectorAll('.card').forEach(card=>card.onclick=()=>openDetail(+card.dataset.id))}
function openDetail(id){const p=byId(id),ca=G.caught.has(id),hl=homeLoc(id),ln=hl>=0?LOCS[hl].name:'Колцентр',{tm,wm}=mults(p),base=G.power[id]||p.base;document.getElementById('detailTitle').innerHTML=`${p.name} <button class="x" id="dClose">×</button>`;document.getElementById('detailBody').innerHTML=`<div class="detailGrid"><canvas id="dcv" width="150" height="150"></canvas><div><p><b>Категория:</b> ${p.type==='ground'?'наземный':'воздушный'}</p><p><b>Любимая локация:</b> ${ln} <svg class="locMini" viewBox="-30 -30 60 60">${locIcon(hl>=0?hl:5,0,0)}</svg></p><p><b>База силы:</b> ${ca?base:'???'}</p><p><b>Множители сейчас:</b> время ×${tm.toFixed(2)}, погода ×${wm.toFixed(2)}</p><p><b>Итоговая сила:</b> ${ca?power(id):'???'}</p><p><b>Любит:</b> ${TI[p.favTime]} ${TN[p.favTime]}, ${WI[p.favWeather]} ${WN[p.favWeather]}</p><p><b>Не любит:</b> ${TI[p.dislikeTime]} ${TN[p.dislikeTime]}, ${WI[p.dislikeWeather]} ${WN[p.dislikeWeather]}</p><p style="color:var(--muted)">${ca?'Пойман. Появляется на своей локации и на всех локациях выше уровнем.':'Ещё не пойман. Встречается как тень на своей локации и выше.'}</p></div></div>`;const g=document.getElementById('dcv').getContext('2d');g.translate(75,80);drawPoke(g,p,0,0,42,{dark:!ca,shiny:G.shiny.has(id),mega:id===51});document.getElementById('dClose').onclick=()=>close('oDetail');open('oDetail')}
function locIcon(id,x,y){const col=LOCS[id]?.color||'#7f1d1d';let s=`<g transform="translate(${x},${y})" opacity=".9">`;if(id===0)s+=`<rect x="-18" y="-10" width="36" height="20" rx="3" fill="#fff" stroke="${col}" stroke-width="2"/><rect x="-18" y="-10" width="36" height="6" fill="${col}"/><rect x="-4" y="0" width="8" height="10" fill="#1e3a8a"/>`;else if(id===1)s+=`<path d="M-16 4 Q-8 -10 0 4 T16 4" fill="none" stroke="${col}" stroke-width="3"/><rect x="-18" y="6" width="36" height="3" fill="#64748b"/>`;else if(id===2)s+=`<circle r="10" fill="none" stroke="${col}" stroke-width="2"/><path d="M-10 0H10M0 -10V10" stroke="${col}" stroke-width="2"/><circle r="3" fill="#fbbf24"/>`;else if(id===3)s+=`<rect x="-12" y="-12" width="6" height="24" fill="${col}"/><rect x="6" y="-12" width="6" height="24" fill="${col}"/><path d="M-9 -16l2 4 4 0-3 3 1 4-4-2-4 2 1-4-3-3 4 0z" fill="#fbbf24"/>`;else if(id===4)s+=`<path d="M-12 8L0 -12L12 8Z" fill="#166534"/><rect x="-2" y="8" width="4" height="6" fill="#78350f"/>`;else s+=`<path d="M0 -14L6 0L4 12L-4 12L-6 0Z" fill="#7f1d1d" stroke="#ef4444" stroke-width="1.5"/>`;return s+'</g>'}
function openMap(){const svg=document.getElementById('mapSvg');let h=`<defs><pattern id="gp" width="22" height="22" patternUnits="userSpaceOnUse"><rect width="22" height="22" fill="#bbf7d0"/><circle cx="6" cy="6" r="1.4" fill="#86efac"/><circle cx="17" cy="16" r="1.2" fill="#86efac"/></pattern></defs><rect width="800" height="450" fill="url(#gp)" rx="12"/>`;
 // Парк с озером возле ТЦ Июнь
 h+=`<g opacity=".85"><ellipse cx="112" cy="238" rx="66" ry="38" fill="#86efac"/><ellipse cx="104" cy="244" rx="27" ry="15" fill="#7dd3fc"/><ellipse cx="104" cy="244" rx="27" ry="15" fill="none" stroke="#0ea5e9" stroke-width="1.5" opacity=".6"/><path d="M58 238 Q112 210 166 238" fill="none" stroke="#e7e5e4" stroke-width="4" stroke-dasharray="6 5"/><circle cx="72" cy="222" r="9" fill="#22c55e"/><circle cx="148" cy="220" r="9" fill="#22c55e"/><circle cx="80" cy="266" r="8" fill="#16a34a"/><circle cx="146" cy="264" r="8" fill="#16a34a"/><rect x="120" y="256" width="14" height="4" rx="1" fill="#78350f"/><rect x="120" y="252" width="14" height="3" rx="1" fill="#92400e"/></g>`;
 // Домики и деревья
 [[90,120],[220,90],[560,70],[720,200],[300,400],[80,380],[600,390],[270,140],[680,360]].forEach(([x,y],k)=>{h+=`<g opacity=".55"><rect x="${x}" y="${y}" width="${30+k%3*6}" height="${22+k%2*6}" fill="#94a3b8"/><rect x="${x+4}" y="${y+5}" width="6" height="6" fill="#fde047"/><rect x="${x+16}" y="${y+5}" width="6" height="6" fill="#fde047"/><rect x="${x+4}" y="${y+15}" width="6" height="6" fill="#fde047"/></g>`});
 [[60,90],[740,70],[100,400],[700,420],[400,55],[45,250],[760,260],[320,120],[580,380],[200,360],[470,90],[640,220]].forEach(([x,y],i)=>{h+=`<g opacity=".5"><rect x="${x-2}" y="${y}" width="4" height="10" fill="#78350f"/><circle cx="${x}" cy="${y-4}" r="${10+i%3*2}" fill="${i%2?'#22c55e':'#16a34a'}"/></g>`});
 h+=`<path d="M100 330 L700 330" stroke="#a8a29e" stroke-width="6" stroke-dasharray="14 10" opacity=".35"/><path d="M400 60 L400 400" stroke="#a8a29e" stroke-width="5" stroke-dasharray="12 10" opacity=".25"/>`;
 for(let i=0;i<4;i++){const a=LOCS[i].pos,b=LOCS[i+1].pos,u=G.unlocked.has(i)&&G.unlocked.has(i+1);h+=`<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="${u?'#78350f':'#94a3b8'}" stroke-width="3" stroke-dasharray="8 6" opacity="${u?.85:.35}"/>`}
 const last=LOCS[4].pos,su=G.unlocked.has(5);h+=`<line x1="${last[0]}" y1="${last[1]}" x2="400" y2="215" stroke="${su?'#7f1d1d':'#94a3b8'}" stroke-width="3" stroke-dasharray="8 6" opacity="${su?.85:.18}"/>`;
 LOCS.forEach((l,i)=>{const u=G.unlocked.has(i),cur=G.loc===i,def=G.defeated.has(i);h+=`<g class="mloc ${u?'':'lock'}" data-l="${i}" transform="translate(${l.pos[0]},${l.pos[1]})">${cur?`<circle r="44" fill="#fde047" opacity=".3"><animate attributeName="opacity" values=".2;.5;.2" dur="2s" repeatCount="indefinite"/></circle>`:''}<circle class="mc" r="34" fill="${u?l.color:'#64748b'}" stroke="${cur?'#fde047':def?'#4ade80':'#fff'}" stroke-width="${cur?4:2}"/>${locIcon(i,0,-2)}<text text-anchor="middle" y="24" fill="#fff" font-size="11" font-weight="900" style="pointer-events:none">${i+1}</text>${def?`<text text-anchor="middle" y="-22" fill="#fff" font-size="12" style="pointer-events:none">✓</text>`:''}${!u?`<text text-anchor="middle" y="6" font-size="15" style="pointer-events:none">🔒</text>`:''}<text text-anchor="middle" y="54" fill="${u?'#1e293b':'#64748b'}" font-size="13" font-weight="900" style="pointer-events:none">${l.name}</text></g>`});
 if(su)h+=`<g class="mloc" data-l="5" transform="translate(400,215)"><circle class="mc" r="36" fill="#7f1d1d" stroke="${G.loc===5?'#fde047':'#fff'}" stroke-width="${G.loc===5?4:2}"/>${locIcon(5,0,-2)}<text text-anchor="middle" y="56" fill="#7f1d1d" font-size="13" font-weight="900" style="pointer-events:none">Колцентр</text></g>`;
 h+=`<text x="400" y="30" text-anchor="middle" fill="#1e293b" font-size="17" font-weight="900" opacity=".65">Район Пороховые</text>`;
 svg.innerHTML=h;svg.querySelectorAll('.mloc').forEach(g=>g.onclick=()=>{const id=+g.dataset.l;if(!G.unlocked.has(id)){notify('Эта локация пока закрыта.','bad');return}close('oMap');goLoc(id)});open('oMap')}
function openStats(){const mins=Math.max(1,Math.floor((Date.now()-G.stats.t0)/60000));document.getElementById('statsBody').innerHTML=`<div class="statsGrid"><div class="stat"><b>${G.caught.size}</b><small>Поймано</small></div><div class="stat"><b>${G.shiny.size}</b><small>Шайни</small></div><div class="stat"><b>${totalPower()}</b><small>Общая сила</small></div><div class="stat"><b>${G.unlocked.size}</b><small>Локаций открыто</small></div><div class="stat"><b>${G.stats.wins}/${G.stats.battles}</b><small>Побед в боях</small></div><div class="stat"><b>${G.stats.raidWins}/${G.stats.raids}</b><small>Успешных рейдов</small></div><div class="stat"><b>${G.stats.catches}</b><small>Поимок</small></div><div class="stat"><b>${mins}</b><small>Минут в игре</small></div></div><p style="text-align:center;color:var(--muted);font-style:italic">Покеболы ∞ · Удача ✨ · Карта 🗺️</p>`;open('oStats')}
const THEMES=[['default','🌌 Классика','linear-gradient(135deg,#667eea,#764ba2)'],['dark','🌑 Тёмная','linear-gradient(135deg,#0f172a,#334155)'],['ocean','🌊 Океан','linear-gradient(135deg,#0c4a6e,#22d3ee)'],['forest','🌲 Лес','linear-gradient(135deg,#14532d,#84cc16)'],['sunset','🌅 Закат','linear-gradient(135deg,#831843,#fb7185)'],['retro','📼 Ретро','linear-gradient(135deg,#78350f,#f59e0b)']];
function openThemes(){const box=document.getElementById('themes');box.innerHTML=THEMES.map(([id,n,bg])=>`<button class="themeBtn ${document.body.dataset.theme===id?'on':''}" data-th="${id}" style="background:${bg}">${n}</button>`).join('');box.querySelectorAll('.themeBtn').forEach(b=>b.onclick=()=>{document.body.dataset.theme=b.dataset.th;try{localStorage.setItem('pp_theme',b.dataset.th)}catch(e){}openThemes()});open('oTheme')}
try{const th=localStorage.getItem('pp_theme');if(th)document.body.dataset.theme=th}catch(e){}

/* ---- start ---- */
function initStart(){const picks=[...LOCS[0].p].sort(()=>Math.random()-.5).slice(0,3),box=document.getElementById('starters');box.innerHTML='';picks.forEach(p=>{const b=document.createElement('button');b.className='starter';b.innerHTML=`<canvas width="100" height="100"></canvas><b>${p.name}</b><small>${p.type==='ground'?'🚶 Наземный':'🕊️ Воздушный'}</small>`;box.appendChild(b);const g=b.querySelector('canvas').getContext('2d');g.translate(50,54);drawBody(g,p,30,p.colors,0);b.onclick=()=>{box.querySelectorAll('.starter').forEach(x=>x.classList.remove('sel'));b.classList.add('sel');G.starter=p.id;document.getElementById('go').disabled=false}});
 document.querySelectorAll('#timePick button').forEach(b=>b.onclick=()=>{document.querySelectorAll('#timePick button').forEach(x=>x.classList.remove('sel'));b.classList.add('sel');const m={morning:.30,day:.5,evening:.74,night:.95};G.dayT=m[b.dataset.t];G.time=b.dataset.t})}
document.getElementById('go').onclick=()=>{if(!G.starter)return;G.started=true;G.caught.add(G.starter);G.power[G.starter]=byId(G.starter).base;G.stats.t0=Date.now();G.weatherT=24;document.getElementById('start').classList.remove('on');document.getElementById('game').classList.add('on');resize();updateChips();updateLocLabel();spawnField();notify('Добро пожаловать в Пороховые! Кликай по покемонам.','good')};
document.getElementById('bDex').onclick=openDex;document.getElementById('bMap').onclick=openMap;document.getElementById('bStats').onclick=openStats;document.getElementById('bHelp').onclick=()=>open('oHelp');document.getElementById('bTheme').onclick=openThemes;document.getElementById('bRaid').onclick=startRaid;document.getElementById('bMega').onclick=megaBattle;

/* ---- loop ---- */
let last=performance.now();
function loop(now){const dt=Math.min(.05,(now-last)/1000);last=now;if(G.started){updateTime(dt);updateWeather(dt);updateField(dt);drawScene();drawField();updateChips();checkProgress()}requestAnimationFrame(loop)}
initStart();requestAnimationFrame(loop);
</script>
</body>
</html>

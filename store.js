/* ============================================================
   BEEFY'S — Shared data store (localStorage)
   One source of truth for: customer app, admin backend, operator.
   Plain JS, exposed as window.BeefyStore. No build step.
   ============================================================ */
(function () {
  const KEY = "beefys_store_v1";

  // ---- Seed (first run / reset) -----------------------------------------
  const SEED = {
    business: {
      name: "Beefy's",
      status: "open",                 // open | busy | closed
      rate: 587.40,                   // Bs por $ (manual fallback)
      rateMode: "auto",               // auto (BCV) | manual
      etaDelivery: "25–35 min",
      etaPickup: "Listo en ~15 min",
      deliveryFee: 2.5,
      pickupAddress: "Barcelona, Palotal. Esquina, edificio beige con puerta verde — justo al frente de la cancha de la plaza Bombón.",
      whatsapp: "584148367027",       // número oficial de pedidos (sin +, sin espacios)
      hours: "Lun–Dom · 12:00 pm – 11:00 pm",
      zone: "Barcelona · Anzoátegui"
    },
    categories: ["Burgers", "Combos", "Acompañantes", "Bebidas"],
    // photo: null = tile con doodle/color · "assets/…" = imagen incluida · "data:…" = foto subida
    items: [
      { id: 101, cat: "Burgers", n: "Classic Beefy", d: "La clásica. Carne smash, American cheese, pepinillos, salsa Beefy.", p: 7.9, ini: "CB", c: "#FFE7DE", t: "#B5300A", photo: "assets/burger-classic.png", avail: true, ex: true, tag: "Top venta", doodle: "star" },
      { id: 102, cat: "Burgers", n: "Double Trouble", d: "Doble carne, doble queso, cebolla caramelizada.", p: 10.5, ini: "DT", c: "#FFE7DE", t: "#B5300A", photo: "assets/burger-classic.png", avail: true, ex: true, tag: "", doodle: "star" },
      { id: 103, cat: "Burgers", n: "Spicy Diabla", d: "Jalapeños, salsa diabla, pepper jack. Pica rico.", p: 9.2, ini: "SD", c: "#FFEFD9", t: "#8A5A0E", photo: "assets/burger-classic.png", avail: true, ex: true, tag: "Picante", doodle: "star" },
      { id: 104, cat: "Burgers", n: "BBQ Bacon", d: "Bacon crujiente, aros de cebolla, salsa BBQ ahumada.", p: 10.9, ini: "BB", c: "#FFE7DE", t: "#B5300A", photo: "assets/burger-classic.png", avail: true, ex: true, tag: "", doodle: "star" },
      { id: 105, cat: "Burgers", n: "Veggie Beefy", d: "Plant-based smash, lechuga fresca, tomate. 100% sin drama.", p: 8.5, ini: "VB", c: "#FBFBC9", t: "#5C5E00", photo: "assets/burger-classic.png", avail: true, ex: true, tag: "Veggie", doodle: "star" },

      { id: 201, cat: "Combos", n: "Combo Classic", d: "Classic Beefy + papas + bebida. Ahorra $2.", p: 11.9, ini: "CC", c: "#F8E9F8", t: "#8A3D8D", photo: "assets/burger-classic.png", avail: true, ex: false, tag: "Combo", doodle: "star" },
      { id: 202, cat: "Combos", n: "Combo Doble", d: "Double Trouble + aros + malteada.", p: 16.5, ini: "CD", c: "#F8E9F8", t: "#8A3D8D", photo: "assets/burger-classic.png", avail: true, ex: false, tag: "Combo", doodle: "star" },

      { id: 301, cat: "Acompañantes", n: "Papas Beefy", d: "Crujientes por fuera, suaves por dentro. Con sal Beefy.", p: 3.5, ini: "PB", c: "#FFEFD9", t: "#8A5A0E", photo: null, avail: true, ex: false, tag: "", doodle: "star" },
      { id: 302, cat: "Acompañantes", n: "Aros de cebolla", d: "Onion rings dorados, salsa ranch.", p: 4.2, ini: "AC", c: "#FFEFD9", t: "#8A5A0E", photo: null, avail: true, ex: false, tag: "", doodle: "flex" },
      { id: 303, cat: "Acompañantes", n: "Nuggets x6", d: "Pollo crujiente, elige tu salsa.", p: 5.0, ini: "NG", c: "#FFEFD9", t: "#8A5A0E", photo: null, avail: true, ex: false, tag: "", doodle: "heart" },

      { id: 401, cat: "Bebidas", n: "Limonada", d: "Hecha en casa, bien fría.", p: 2.9, ini: "LI", c: "#FBFBC9", t: "#5C5E00", photo: null, avail: true, ex: false, tag: "", doodle: "star" },
      { id: 402, cat: "Bebidas", n: "Cola", d: "Clásica de lata, 355ml.", p: 2.5, ini: "CO", c: "#F8E9F8", t: "#8A3D8D", photo: null, avail: true, ex: false, tag: "", doodle: "b" },
      { id: 403, cat: "Bebidas", n: "Malteada", d: "Vainilla, chocolate o fresa.", p: 4.9, ini: "ML", c: "#F8E9F8", t: "#8A3D8D", photo: null, avail: true, ex: false, tag: "Nuevo", doodle: "heart" }
    ],
    extras: [
      { id: 1, n: "Extra American cheese", p: 1.2 },
      { id: 2, n: "Bacon crujiente", p: 1.8 },
      { id: 3, n: "Carne extra", p: 2.5 },
      { id: 4, n: "Jalapeños", p: 0.9 }
    ],
    // El cliente sólo ve estos dos métodos.
    payment: {
      pagomovil: { banco: "0105 Mercantil", cedula: "29838588", telefono: "04148367027" }
    },
    users: {
      gerente:  { user: "jesus",    pass: "beefy2026", name: "Jesús" },
      operador: { user: "operador", pass: "cocina2026", name: "Operador" }
    },
    history: []   // { ts, who, what }
  };

  // ---- Load / save -------------------------------------------------------
  function deepClone(o) { return JSON.parse(JSON.stringify(o)); }

  function load() {
    let db;
    try { const s = localStorage.getItem(KEY); if (s) db = JSON.parse(s); } catch (e) {}
    if (!db) db = deepClone(SEED);
    // merge any missing top-level keys / business fields from seed (forward-compat)
    for (const k in SEED) if (!(k in db)) db[k] = deepClone(SEED[k]);
    for (const k in SEED.business) if (!(k in db.business)) db.business[k] = SEED.business[k];
    if (!db.payment) db.payment = deepClone(SEED.payment);
    if (!db.users) db.users = deepClone(SEED.users);
    if (!Array.isArray(db.history)) db.history = [];
    return db;
  }

  function saveQuiet(db) {
    try { localStorage.setItem(KEY, JSON.stringify(db)); } catch (e) { console.warn("store save failed", e); }
  }

  // save + write an audit-log entry
  function save(db, who, what) {
    if (what) {
      db.history = db.history || [];
      db.history.unshift({ ts: Date.now(), who: who || "—", what: what });
      if (db.history.length > 200) db.history.length = 200;
    }
    saveQuiet(db);
  }

  function reset() { try { localStorage.removeItem(KEY); } catch (e) {} }

  // ---- Helpers -----------------------------------------------------------
  const uid = () => Date.now() + Math.floor(Math.random() * 9999);
  const fmtU = (n) => "$" + (+n || 0).toFixed(2);
  const fmtBs = (n, rate) => "Bs. " + (+n * +rate).toLocaleString("es-VE", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  function esc(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }

  // resolve an item photo src against a base ("" for root pages, "../" for /cliente/)
  function photoSrc(item, base) {
    if (!item || !item.photo) return null;
    if (item.photo.indexOf("data:") === 0) return item.photo;
    return (base || "") + item.photo;
  }

  // Live BCV rate (auto). Falls back to db.business.rate. CORS-friendly source.
  async function resolveRate(db) {
    if (db.business.rateMode !== "auto") return +db.business.rate;
    try {
      const r = await fetch("https://ve.dolarapi.com/v1/dolares/oficial", { cache: "no-store" });
      if (r.ok) {
        const j = await r.json();
        const v = +(j.promedio || j.precio);
        if (v && v > 0) return v;
      }
    } catch (e) { /* offline / blocked → fallback */ }
    return +db.business.rate;
  }

  window.BeefyStore = { KEY, SEED, load, save, saveQuiet, reset, uid, fmtU, fmtBs, esc, photoSrc, resolveRate };
})();

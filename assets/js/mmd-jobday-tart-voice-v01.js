(() => {
  const route = location.pathname.replace(/\/+$/, "");
  if (route !== "/sigil/model/private/job-day") return;

  const STYLE_ID = "mjd-tart-voice-v01";
  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = `
    #mmd-jobday-max h2,#mmd-jobday-max h3{
      font-family:"Noto Sans Thai",Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif!important;
      font-weight:600!important;font-synthesis:none!important;
      line-height:1.16!important;letter-spacing:-.016em!important;
      color:#fff8ed!important;-webkit-text-fill-color:#fff8ed!important;
      background:none!important;text-shadow:0 12px 32px rgba(0,0,0,.32)!important;
      text-transform:none!important
    }
    #mmd-jobday-max .mjdmax-hero-note h2{font-size:clamp(24px,2.3vw,32px)!important;line-height:1.2!important}
    #mmd-jobday-max .mjdmax-card h2,#mmd-jobday-max .mjdmax-dashboard h2,#mmd-jobday-max .mjdmax-final h2,#mmd-jobday-max .mjdmax-asset-head h2{
      font-size:clamp(30px,3vw,46px)!important;line-height:1.16!important;letter-spacing:-.018em!important
    }
    #mmd-jobday-max .mjdmax-important-grid strong,#mmd-jobday-max .mjdmax-acc-head strong{font-weight:600!important;letter-spacing:-.01em!important}
    #mmd-jobday-max .mjdmax-important-grid p{color:rgba(255,248,237,.68)!important;line-height:1.72!important}
    @media(max-width:767px){
      #mmd-jobday-max .mjdmax-card h2,#mmd-jobday-max .mjdmax-dashboard h2,#mmd-jobday-max .mjdmax-final h2,#mmd-jobday-max .mjdmax-asset-head h2{
        font-size:clamp(29px,9vw,38px)!important;line-height:1.18!important;letter-spacing:-.012em!important
      }
    }
  `;
  if (!document.getElementById(STYLE_ID)) document.head.appendChild(style);

  const setText = (el, value) => { if (el) el.textContent = value; };
  const setHTML = (el, value) => { if (el) el.innerHTML = value; };
  const byKicker = (root, kicker) => [...root.querySelectorAll(".mjdmax-card,.mjdmax-dashboard,.mjdmax-final,.mjdmax-asset-band")]
    .find(section => (section.querySelector(".mjdmax-kicker")?.textContent || "").trim() === kicker);

  function personalize(root) {
    const params = new URLSearchParams(location.search);
    const modelName = String(params.get("name") || params.get("model_name") || params.get("model") || root.getAttribute("data-model-name") || "").trim();
    const greeting = modelName ? `พี่${modelName}ครับ` : "พี่ครับ";
    const possessive = modelName ? `พี่${modelName}` : "พี่";
    root.querySelectorAll("[data-tart-greeting]").forEach(n => n.textContent = greeting);
    root.querySelectorAll("[data-model-possessive]").forEach(n => n.textContent = possessive);
  }

  function patch() {
    const root = document.getElementById("mmd-jobday-max");
    if (!root) return;

    setHTML(root.querySelector(".mjdmax-lead"), `<span data-tart-greeting>พี่ครับ</span> วันงานไม่ต้องจำทุกอย่างนะ ต้าเรียงให้เป็นจังหวะไว้ให้แล้วครับ เช็กตัวเองก่อนออก เปิด Dashboard ไว้ระหว่างทาง แล้วถ้ามีอะไรเปลี่ยน บอก MMD ตรง ๆ ได้เลย เราจะได้ช่วยกันแก้ทัน`);

    const heroNote = root.querySelector(".mjdmax-hero-note");
    setText(heroNote?.querySelector("h2"), "งานคอนเฟิร์มแล้ว เริ่มจาก Dashboard ได้เลยครับ");
    setText(heroNote?.querySelector("p"), "ตรงนั้นมีบรีฟ เวลา สถานที่ และสถานะงานครบที่สุด เปิดไว้เหมือนเป็นจุดอ้างอิงเดียวกัน จะได้ไม่ต้องจำหลายทางครับ");

    const quick = document.getElementById("quick-check");
    setText(quick?.querySelector("h2"), "เช็กตัวเองก่อนออก");
    setText(quick?.querySelector(".mjdmax-section-head > p:last-child"), "ไม่ใช่เช็กลิสต์จับผิดนะครับ แค่ดูว่าร่างกาย โทรศัพท์ เวลา และการเดินทางพร้อมพอให้พี่ไปถึงงานแบบไม่รีบเกินไป");

    const dash = root.querySelector(".mjdmax-dashboard");
    setText(dash?.querySelector("h2"), "เปิด Dashboard ไว้เป็นเพื่อนระหว่างทาง");
    setText(dash?.querySelector("div > p:last-child"), "เวลา บรีฟ จุดนัด และสถานะงานอยู่ตรงนี้ ถ้าจังหวะไหนไม่แน่ใจ ให้กลับมาดูตรงนี้ก่อน จะช่วยให้พี่กับ MMD เห็นข้อมูลชุดเดียวกันครับ");

    const flow = byKicker(root, "JOB DAY FLOW");
    setText(flow?.querySelector("h2"), "วันงาน ค่อย ๆ ไปทีละจังหวะ");
    setText(flow?.querySelector(".mjdmax-section-head > p:last-child"), "แต่ละขั้นมีไว้ช่วยลดความสับสน ไม่ได้มีไว้จับผิดพี่ครับ ถ้ามีอะไรเปลี่ยน แค่บอกเร็วและบอกตามจริง เราจะช่วยกันจัดการได้ง่ายกว่า");

    const steps = [
      ["ก่อนออก — เช็กตัวเองก่อน",
       "ถ้าก่อนวันงานเริ่มไม่สบาย รู้สึกเพลีย หรือมีอาการที่ดูแล้วไม่น่าฝืน รีบแจ้งตั้งแต่เริ่มรู้สึกนะครับ ประเมินตัวเองตรง ๆ ถ้าไม่ไหวอย่าฝืน เราต้องรับผิดชอบทั้งต่อตัวเอง ลูกค้า และคนรอบข้าง",
       ["ดูบรีฟ เวลา สถานที่ และชุดให้ครบก่อน","ร่างกายไม่โอเค แจ้งทันทีที่รู้สึก","เผื่อเวลาเดินทางให้พอ","ถ้ามีอะไรไม่ตรงกับบรีฟ บอก MMD ก่อนออก"]],
      ["ระหว่างทาง — มีอะไรบอกตรง ๆ",
       "ตื่นสาย รถมีปัญหา ฝนตก หรือมีเหตุจำเป็นกะทันหัน เกิดขึ้นได้ครับ สิ่งสำคัญคืออย่าหนีหายหรือแต่งเรื่อง บอกตามตรงเร็วที่สุด แล้ว MMD จะช่วยคุยกับลูกค้าให้ว่าจะรอ ปรับเวลา หรือนัดใหม่แบบไม่ต้องเสียอารมณ์",
       ["แจ้งทันทีที่รู้ว่า ETA เปลี่ยน","บอกเหตุผลตามจริงได้เลย","ส่ง location หรือเวลาโดยประมาณเมื่อจำเป็น","อย่าปล่อยให้ทุกคนเดา เพราะยิ่งช้า ยิ่งแก้ยาก"]],
      ["ถึงพื้นที่ — ให้ทุกคนรู้ว่าพี่อยู่ตรงไหน",
       "ถึงแล้วแจ้งสั้น ๆ ก็พอครับ เหตุผลคือ MMD จะได้รู้ว่าพี่ปลอดภัยและพร้อม ส่วนถ้าจุดนัดเปลี่ยนหรือยังไม่แน่ใจ รอให้ข้อมูลตรงกันก่อนค่อยเข้าไป",
       ["แจ้งว่า “ถึงแล้ว”","เช็กจุดนัดกับบรีฟอีกครั้ง","พบลูกค้าแล้ว แจ้งสั้น ๆ ให้ MMD รู้","ถ้าสถานที่หรือเงื่อนไขไม่ตรง อย่าเพิ่งฝืนไปต่อ"]],
      ["ก่อนเริ่ม — รอสัญญาณให้ทุกอย่างตรงกัน",
       "บางงานยังมีเรื่องยอดคงเหลือหรือการยืนยันหน้างานอยู่ครับ การรอสัญญาณจาก MMD ไม่ได้ทำให้ช้า แต่ช่วยกันไม่ให้พี่กับลูกค้าเข้าใจคนละเรื่องแล้วต้องมาแก้ทีหลัง",
       ["สลิปจากลูกค้าเป็นหลักฐาน แต่ MMD ยังต้องเช็กยอด","ถ้ามียอดค้าง ให้รอคำยืนยันก่อน","ถ้าลูกค้าถามเรื่องเงิน ส่งให้ MMD ช่วยตอบได้","เริ่มเมื่อทุกฝ่ายเห็นสถานะตรงกัน"]],
      ["ระหว่างงาน — ใช้บรีฟเป็นเข็มทิศ",
       "พี่ไม่ต้องแข็งตามข้อความทุกคำครับ แต่ขอให้ยึดขอบเขตและสิ่งที่ตกลงกันไว้ ถ้ามีการเปลี่ยนแปลงหรือมีอะไรทำให้ไม่สบายใจ บอก MMD ได้ทันที เราจะช่วยดูทางออกให้",
       ["เรื่องเงินหรือเงื่อนไขใหม่ ให้ MMD ช่วยคุย","ไม่รับดีลที่ทำให้ขอบเขตงานคลุมเครือ","รักษาข้อมูลส่วนตัวของลูกค้า","รู้สึกไม่ปลอดภัยหรือผิดปกติ แจ้งได้ทันที"]],
      ["จบงาน — บอกให้รู้ว่าพี่โอเค",
       "หลังงานจบ แจ้ง MMD สั้น ๆ ว่าจบแล้ว และบอกอีกครั้งเมื่อแยกจากลูกค้า เหตุผลหลักคือให้เรารู้ว่าพี่ออกจากพื้นที่เรียบร้อยและปิดงานได้ถูกต้องครับ",
       ["แจ้งว่า “จบงานแล้ว”","แยกจากลูกค้าแล้ว แจ้งอีกครั้ง","ถ้ามีทิปส์หรือค่าใช้จ่ายเพิ่ม บอกตามจริง","มีอะไรค้างใจ เล่าไว้ได้เลย ไม่ต้องเก็บไปคิดคนเดียว"]]
    ];
    root.querySelectorAll(".mjdmax-acc-item").forEach((item, i) => {
      const step = steps[i]; if (!step) return;
      setText(item.querySelector(".mjdmax-acc-head strong"), step[0]);
      setText(item.querySelector(".mjdmax-acc-body p"), step[1]);
      setHTML(item.querySelector(".mjdmax-acc-body ul"), step[2].map(x => `<li>${x}</li>`).join(""));
    });

    const important = byKicker(root, "IMPORTANT");
    if (important) {
      const kicker = important.querySelector(".mjdmax-kicker");
      setText(kicker, "A NOTE FROM TART");
      setText(important.querySelector("h2"), "เรื่องที่ต้องขอความร่วมมือจากใจ");
      setText(important.querySelector(".mjdmax-section-head > p:last-child"), "ตรงนี้ต้าไม่ได้อยากออกกฎใส่พี่ แค่อยากอธิบายว่าทำไมบางเรื่องต้องรีบบอก เพราะยิ่งรู้เร็ว เรายิ่งช่วยกันแก้ได้ดีครับ");
      const cards = important.querySelectorAll(".mjdmax-important-grid article");
      const cardCopy = [
        ["ถ้าร่างกายไม่ไหว","ถ้าก่อนวันงานเริ่มไม่สบายหรือรู้สึกว่าฝืนแล้วไม่น่าดี แจ้งทันทีที่เริ่มรู้สึกครับ ประเมินตัวเองตรง ๆ ถ้าไม่ไหวอย่าฝืน สุขภาพพี่มาก่อน และเราก็มีหน้าที่รับผิดชอบต่อลูกค้าและคนรอบข้างด้วย"],
        ["ถ้าตื่นสาย / มีเหตุกะทันหัน","เรื่องแบบนี้เกิดขึ้นได้ครับ บอกตรง ๆ ได้เลย อย่าหนีหายหรือพูดให้เรื่องซับซ้อน เพราะถ้าเรารู้ความจริงเร็ว MMD ยังช่วยคุยให้ลูกค้ารอ ปรับเวลา หรือนัดใหม่ได้โดยไม่ต้องจบด้วยอารมณ์เสีย"],
        ["ถ้าหายไปเลยล่ะ… อาเมน","อันนี้ต้าไม่อยากให้เกิดจริง ๆ ครับ เพราะพอไม่มีข้อมูลให้ช่วยแก้ เรื่องเล็กจะกลายเป็นเรื่องใหญ่ทันที ทั้งยอดที่ลูกค้าชำระไปและค่าใช้จ่ายจริงที่ MMD ต้องรับผิดชอบอาจย้อนกลับมาเป็นความเสียหายที่พี่ต้องรับผิดชอบตามหลักฐาน อย่าให้ไปถึงจุดนั้นเลย บอกกันตรง ๆ ก่อน ยังช่วยกันได้เสมอ"],
        ["เรื่องข้อมูลส่วนตัว","ลูกค้าไว้ใจให้ MMD ดูแลชื่อ สถานที่ ห้องพัก แชต และรายละเอียดส่วนตัว ขอให้พี่ช่วยเก็บไว้ในบริบทของงานเท่านั้นครับ ไม่ใช่เพราะอยากควบคุม แต่เพราะความไว้ใจแบบนี้เสียแล้วสร้างกลับยากมาก"]
      ];
      cards.forEach((card, i) => { if (!cardCopy[i]) return; setText(card.querySelector("strong"), cardCopy[i][0]); setText(card.querySelector("p"), cardCopy[i][1]); });
    }

    const prep = byKicker(root, "WHAT TO PREPARE");
    setText(prep?.querySelector("h2"), "เตรียมแค่นี้ก็อุ่นใจขึ้นเยอะ");

    const final = root.querySelector(".mjdmax-final");
    setText(final?.querySelector("h2"), "โอเคครับ พร้อมแล้ว ค่อย ๆ ไปทีละขั้น");
    setText(final?.querySelector("div > p:last-child"), "เปิด Dashboard ไว้เป็นหลัก แล้วไปตามจังหวะของงานครับ ถ้ามีอะไรไม่แน่ใจ เปลี่ยนแผน หรือรู้สึกไม่โอเค บอก MMD ได้ทันที ไม่ต้องรอให้เรื่องใหญ่ก่อน");

    const memory = byKicker(root, "TART JOB-DAY MEMORY");
    if (memory) {
      setText(memory.querySelector("h2"), "จำแค่ 4 จังหวะก็พอครับ");
      setText(memory.querySelector(".mjdmax-asset-head > p:last-child"), "เช็กตัวเอง → เปิดบรีฟ → ถึงแล้วบอก → รอสัญญาณก่อนเริ่ม แค่นี้ก็ช่วยให้วันงานลื่นขึ้นเยอะ");
      setText(memory.querySelector(".mjdmax-asset-copy b"), "Prepare · Tell Us · Arrive · Signal");
      setText(memory.querySelector(".mjdmax-asset-copy span"), "มีอะไรเปลี่ยน บอกเร็วและบอกตามจริง — MMD จะได้ช่วยพี่ทันครับ");
    }

    const footer = root.querySelector(".mjdmax-footer-note");
    if (footer) {
      const ps = footer.querySelectorAll(".mjdmax-footer-copy p");
      setHTML(ps[0], `<span data-tart-greeting>พี่ครับ</span> หน้านี้ไม่ได้ทำไว้ให้พี่รู้สึกว่าถูกจับผิดนะครับ ต้าอยากให้มันเป็นเหมือนเพื่อนเตือนระหว่างวันงาน — มีอะไรไม่แน่ใจ เปิดกลับมาดู แล้วบอก MMD ตามจริงได้เลย`);
      setHTML(ps[1], `ข้อมูลของ <span data-model-possessive>พี่</span> และข้อมูลลูกค้าจะถูกใช้เท่าที่จำเป็นกับบรีฟ การเดินทาง ความปลอดภัย และการปิดงานเท่านั้นครับ`);
    }

    personalize(root);
  }

  function boot() {
    patch();
    setTimeout(patch, 60);
    setTimeout(patch, 500);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot, { once: true });
  else boot();
})();

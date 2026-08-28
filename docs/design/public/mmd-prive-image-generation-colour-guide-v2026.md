# MMD Privé Image Generation Colour Guide

**Version:** v2026-PRIVE-IMAGE-GEN-03  
**Use for:** hero image, mockup page, UI concept, website visual, public page image, profiles image, trust image  
**Core theme:** White / Ink / Stone / Wine / Legacy Red Accent  
**Status:** Ready to use  
**Updated:** Added balanced footer visual direction

---

## 1. Core Image Direction

ทุกภาพ MMD Privé ต่อจากนี้ควรมี mood:

```text
clean white-world
private
premium
sharp
editorial
not generic beige-gold luxury
not hotel lobby cliché
```

สีหลัก:

```text
White / Ink / Stone / Wine / Legacy Red Accent
```

---

## 2. Colour Balance

```text
60% white / ivory / paper / stone
25% ink / charcoal / smoked glass
10% wine red
3% fresh legacy red
2% soft gold accent
```

---

## 3. Main Palette for Image Prompt

```text
soft white
ivory paper
cool white marble
pale stone
warm off-white but not yellow
graphite ink
soft charcoal
smoked glass black
deep wine red
fresh legacy red accent
tiny soft gold trim
```

Reference hex:

```css
#FFFFFF  white
#FBFAF8  paper
#F8F7F5  ivory
#EFEBE6  stone
#18171B  ink
#2A2730  charcoal
#555158  soft ink
#941523  wine red
#68111C  deep wine
#C91E35  fresh legacy red
#B98A3E  soft gold
```

---

## 4. Red Accent Rule for Images

แดงต้องเป็น accent ที่คม ไม่ใช่ mood ทั้งภาพ

ใช้ red กับ:

```text
thin vertical red cut
small red line under headline
active nav underline
tiny red dot
red icon stroke
wine-red CTA button
subtle red light inside a shadow gap
red edge line on black folder
small red marker on card
```

ห้ามใช้:

```text
full red background
red smoke
large red glow behind model
all-red hero
red text everywhere
red carpet mood
```

---

## 5. Gold Rule for Images

Gold ใช้ได้เฉพาะ:

```text
small logo detail
thin metallic trim
tiny reflection
subtle warm line
small premium object detail
```

ห้ามให้ทอง dominate:

```text
gold walls
gold hotel lighting
champagne background
gold typography as main mood
beige-gold wedding mood
```

---

## 6. Interior / Architecture Direction

ใช้ฉากแบบ:

```text
MMD Privé public reception
white-world review lounge
ivory stone wall
cool white marble floor
smoked glass partition
charcoal metal frame
dark walnut shadow
minimal wine-red vertical accent line
clean negative space for web UI
```

หลีกเลี่ยง:

```text
generic luxury hotel lobby
bridal studio
gold palace
nightclub
bar
spa resort
over-decorated room
```

---

## 7. Lighting Direction

ใช้แสง:

```text
soft daylight
clean editorial lighting
cool ivory reflection
gentle shadow
subtle wine-red accent reflection
private indoor brightness
controlled contrast
```

ไม่ใช้:

```text
golden hour hotel glow
orange warm lobby
yellow light everywhere
club light
neon red flood
wedding hall warmth
```

---

## 8. People / Styling

สำหรับ model หรือ character ในภาพ public MMD Privé:

```text
calm
professional
curated
discreet
private
not idol group pose
not runway
not wedding groom
not overly smiling
not sales poster
```

Wardrobe:

```text
ivory suit with black shirt
cream knit with ink trousers
white jacket with charcoal detail
soft black outfit inside white-world room
balanced white / black / cream contrast
```

---

## 9. Website Mockup Image Direction

ถ้า gen เป็น mockup page:

```text
white paper background
ink headline
wine-red CTA
small fresh red accent
charcoal details
cool stone interior
minimal gold trim only
small signature footer
clean editorial spacing
mobile-first logic
```

---

## 10. Footer Visual Direction for Mockups

Footer ใน mockup / page visual ต้องเป็น **small signature footer** ไม่ใช่ corporate footer ใหญ่

### Public footer visual

```text
white / ivory / paper footer area
ink text
small MMD PRIVÉ signature
Bangkok • Kept Secrets tagline
one short English line
one short Thai line
small credit line
thin divider
wine-red micro accent
legacy red dot or cut if needed
gold only tiny logo/trim detail
```

Avoid in generated mockups:

```text
large black footer on all public pages
large newsletter box
many columns
huge logo
social icons dominating
footer as another hero section
corporate sitemap mood
```

### SIGIL / Partner trust footer visual

```text
deep black / charcoal footer strip
ivory text
small gold seal or trim
short trust line
minimal badges
no big navigation block
no corporate layout
```

### Footer size in image

```text
desktop footer should look visually around 220px - 360px tall
mobile footer should be compact stacked
```

### Footer mood phrase

```text
a quiet signature after a private conversation
```

---

## 11. Master Prompt Block

ใช้เติมท้าย prompt ทุกครั้ง:

```text
MMD Privé image colour direction:
Use a clean white-world palette with soft white, ivory paper, cool white marble, pale stone, graphite ink, soft charcoal, smoked glass, deep wine red, and restrained fresh legacy red accents. The red should appear as precise small cuts: a wine-red CTA, a thin vertical red line, tiny red dividers, active red markers, red icon strokes, or subtle red edge details. Keep gold secondary and minimal, only as tiny trim or soft metallic reflection. Footer, if visible, should be a small signature closure, not a corporate sitemap: low height, clean spacing, small brand mark, short tagline, small credit line, subtle divider, and restrained red or gold micro accent. The image must feel private, clean, premium, sharp, discreet, and editorial. Avoid beige-gold hotel luxury, champagne wedding tones, orange/yellow lighting, nightclub mood, bridal studio mood, generic luxury agency aesthetics, large newsletter footer, heavy corporate footer, oversized logo, and footer that feels like a second hero.
```

---

## 12. Negative Prompt Block

```text
Avoid beige-gold luxury hotel mood, champagne wedding tone, gold-dominant palette, orange/yellow lighting, overly warm lobby, nightclub mood, bar mood, bridal studio, generic escort agency aesthetic, heavy corporate footer, all-red background, red text everywhere, excessive gold decorations, fake readable text, fake QR code, cluttered UI, red smoke, gold palace, wedding cream, idol group pose, large newsletter box, many footer columns, oversized footer logo, corporate sitemap footer.
```

---

## 13. Prompt Template: Website Hero

```text
Ultra-photorealistic premium website hero image for MMD Privé Bangkok public white-world page.

Scene:
A clean private reception / review lounge with ivory stone walls, cool white marble floor, smoked glass partitions, charcoal metal frames, dark walnut shadow details, and one minimal wine-red vertical accent line. The space feels private, calm, expensive, discreet, and editorial, not a hotel lobby.

People:
Refined Asian male models or MMD guide figures, calm and professional, styled in ivory, white, cream, black, and charcoal. Natural realistic skin, no idol group pose, no wedding groom mood, no runway pose.

Composition:
Wide desktop website hero, large negative space for headline and CTA, clean UI-friendly layout, no readable text, no QR code.

Colour:
White / ink / stone / wine / legacy red accent. Use deep wine-red CTA energy and tiny fresh red details. Gold only as tiny trim. Avoid beige-gold luxury hotel mood.

Footer if included:
Small signature footer only, low height, clean spacing, no heavy corporate columns.
```

---

## 14. Prompt Template: Page Colour Refresh

```text
Redesign this MMD Privé page visual into the new colour direction:
clean white-world, ivory paper, cool stone, graphite ink, soft charcoal, smoked glass, wine-red CTA, and tiny fresh legacy red accents. Reduce beige-gold warmth. Remove champagne hotel mood. Keep gold minimal as tiny trim only. Improve readability, contrast, and editorial spacing. Preserve a private premium feeling with sharp red cuts and calm white space. If footer is visible, make it a small signature footer, not a corporate sitemap or second hero.
```

---

## Final Image Rule

```text
White keeps it clean.
Ink keeps it private.
Stone keeps it premium.
Wine-red carries action.
Fresh legacy red preserves the first MMD identity.
Gold stays quiet.
Footer closes like a private signature.
```

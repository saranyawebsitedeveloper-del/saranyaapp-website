# SaranyaApp Website (React + Vite + Tailwind CSS)

Freelance Flutter & Web Developer portfolio website.
Tech: React, Vite, Tailwind CSS, Lucide Icons, Framer Motion.

---

## 📁 Folder structure (folder அமைப்பு)

```
saranyaapp/
├── index.html                 ← SEO tags, title, description
├── package.json               ← project dependencies
├── vercel.json                ← Vercel deployment settings
├── tailwind.config.js         ← colours (navy, teal) & fonts
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── SaranyaApp-Portfolio.pdf   ← downloadable PDF portfolio
└── src/
    ├── main.jsx
    ├── App.jsx                ← எல்லா sections-ம் இங்கே சேரும்
    ├── index.css
    ├── data/site.js           ← ⭐ text, links, projects மாற்ற இந்த file மட்டும்
    └── components/
        ├── Navbar.jsx  Hero.jsx  About.jsx  Services.jsx
        ├── Projects.jsx  Skills.jsx  Contact.jsx  Footer.jsx
        ├── Mockups.jsx        ← phone / dashboard / browser mockups
        └── Reveal.jsx         ← scroll animation
```

---

## 1️⃣ Node.js install செய்வது எப்படி?

1. Browser-ல் **https://nodejs.org** திறக்கவும்.
2. **LTS** என்று எழுதியிருக்கும் பெரிய பச்சை button-ஐ click செய்து download செய்யவும்.
3. Download ஆன file-ஐ திறந்து **Next → Next → Install** கொடுக்கவும் (எதையும் மாற்ற வேண்டாம்).
4. முடிந்ததும் Windows Start-ல் **Command Prompt** திறந்து இதை type செய்யவும்:

```
node -v
npm -v
```

இரண்டுக்கும் version number (உதா: `v22.x.x`) வந்தால் install வெற்றி ✅

---

## 2️⃣ VS Code-ல் project-ஐ திறப்பது

1. **https://code.visualstudio.com** சென்று VS Code install செய்யவும் (இல்லையென்றால்).
2. இந்த project folder-ஐ (`saranyaapp`) உங்கள் computer-ல் Documents-ல் வைக்கவும் (zip-ஐ Extract செய்யவும்).
3. VS Code → **File → Open Folder** → `saranyaapp` folder-ஐ select செய்யவும்.
4. மேலே menu-ல் **Terminal → New Terminal** click செய்யவும்.

---

## 3️⃣ Local-ல் test செய்வது

Terminal-ல் இந்த இரண்டு command-ஐ ஒவ்வொன்றாக type செய்யவும்:

```
npm install
npm run dev
```

- முதல் command: தேவையான packages download ஆகும் (1-2 நிமிடம், ஒரு முறை மட்டும்).
- இரண்டாவது command: website தொடங்கும். Terminal-ல் `http://localhost:5173` என்று வரும்.
- Ctrl + Click செய்து அந்த link-ஐ திறக்கவும். உங்கள் website தெரியும் 🎉
- நிறுத்த: Terminal-ல் `Ctrl + C`.

Production build சோதிக்க (optional):

```
npm run build
npm run preview
```

### சோதிக்க வேண்டியவை
- [ ] Menu links ஒவ்வொன்றும் சரியான section-க்குப் போகிறதா
- [ ] Email link → உங்கள் mail app திறக்கிறதா
- [ ] "Download PDF Portfolio" → PDF download ஆகிறதா
- [ ] Mobile view (browser-ல் F12 → phone icon)

---

## 4️⃣ GitHub-ல் upload செய்வது

1. **https://github.com** → Sign up / Login.
2. மேலே வலது ஓரம் **+ → New repository** click செய்யவும்.
3. Repository name: `saranyaapp-website` → **Public** → **Create repository**.
4. VS Code Terminal-ல் (project folder-ல்):

```
git init
git add .
git commit -m "SaranyaApp website first version"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/saranyaapp-website.git
git push -u origin main
```

(`YOUR-USERNAME` என்பதை உங்கள் GitHub பெயருக்கு மாற்றவும். GitHub இதே commands-ஐ உங்கள் repository page-லேயே காட்டும்.)

> Git install ஆகவில்லையென்றால்: **https://git-scm.com** → download → install.

---

## 5️⃣ Vercel-ல் free deploy செய்வது

1. **https://vercel.com** → **Sign Up → Continue with GitHub**.
2. **Add New… → Project** click செய்யவும்.
3. `saranyaapp-website` repository-க்கு பக்கத்தில் **Import** click செய்யவும்.
4. Settings-ஐ மாற்ற வேண்டாம் (Vite தானாக கண்டுபிடிக்கும்). **Deploy** click செய்யவும்.
5. 1 நிமிடத்தில் உங்கள் website link கிடைக்கும்: `https://saranyaapp-website.vercel.app`

### Deploy ஆன பிறகு செய்ய வேண்டியவை
1. `index.html`-ல் `https://YOUR-WEBSITE-URL.vercel.app/` என்ற இடத்தை உங்கள் உண்மையான link-க்கு மாற்றவும்.
2. PDF portfolio-ல் "Website URL" placeholder உள்ளது. உங்கள் உண்மையான link கிடைத்ததும் Claude-இடம் அந்த link-ஐக் கொடுத்தால் PDF-ஐ புதுப்பித்துத் தரலாம் (புதிய PDF-ஐ `public/SaranyaApp-Portfolio.pdf` இடத்தில் மாற்றி வைக்கவும்).
3. மாற்றிய பிறகு: `git add .` → `git commit -m "update"` → `git push` — Vercel தானாக புதுப்பிக்கும்.

---

## 6️⃣ Custom domain பிறகு இணைப்பது

1. Domain வாங்கவும் (Namecheap, GoDaddy, Google Domains போன்றவை). உதா: `saranyaapp.com`
2. Vercel → உங்கள் project → **Settings → Domains**.
3. Domain பெயரை type செய்து **Add** கொடுக்கவும்.
4. Vercel காட்டும் DNS records-ஐ (A record / CNAME) domain வாங்கிய இடத்தின் **DNS settings**-ல் சேர்க்கவும்.
5. 10 நிமிடம் - சில மணி நேரத்தில் domain வேலை செய்யும். HTTPS தானாக வரும்.

---

## ✏️ உங்கள் தகவல்களை மாற்றுவது

**எல்லா text-உம், links-உம் `src/data/site.js` file-ல் உள்ளது.**

- **LinkedIn / GitHub** இணைக்க: `contact.linkedin` / `contact.github`-ல் உங்கள் உண்மையான URL-ஐ போடவும்.
  காலியாக இருந்தால் website "Coming soon" என்று காட்டும் (போலி link இல்லை).
- **Project screenshot** சேர்க்க:
  1. படத்தை `public/screenshots/tailoring.png` என்று வைக்கவும்.
  2. `site.js`-ல் அந்த project-ல் `screenshot: '/screenshots/tailoring.png',` என்ற வரியைச் சேர்க்கவும்.
  3. Mockup-க்குப் பதிலாக உங்கள் உண்மையான screenshot தெரியும்.

## ℹ️ Contact form எப்படி வேலை செய்கிறது?

Backend server இல்லாததால் form தகவலை store செய்யாது. Visitor **"Send by Email"** அழுத்தினால் அவர்களின் email app-ல் செய்தி தயாராக திறக்கும். இது நேர்மையான, உடனே வேலை செய்யும் முறை.
பின்னாளில் தானியங்கி form வேண்டுமென்றால் Formspree அல்லது Web3Forms போன்ற free service இணைக்கலாம்.

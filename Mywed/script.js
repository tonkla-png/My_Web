// ------------------------------------------------------------------
// แก้ไขข้อมูลของคุณตรงนี้ที่เดียว หน้าเว็บจะอัปเดตให้อัตโนมัติ
// ------------------------------------------------------------------
const PROFILE = {
  eyebrow: "ยินดีที่ได้รู้จัก",
  location: "Chaiyaphom,TH",
  name: "ต้นกล้า",
  role: "ใครไม่รู้ & อิสระ",
  bio: "สวัสดีครับ ✦ ทักมาคุยกันได้เลยตามช่องทางด้านล่างได้เลย",
  avatarInitial: "พ", // ตัวอักษรที่แสดงในวงกลม ถ้ามีรูปจริงดูคอมเมนต์ในไฟล์นี้ด้านล่าง
  footNote: "แตะไอคอนเพื่อไปยังโปรไฟล์"
};

// ใส่ลิงก์โซเชียลของคุณ (เว้นว่างเป็น "" ถ้ายังไม่มี จะไม่แสดงการ์ดนั้น)
const LINKS = {
  instagram: "https://www.instagram.com/kamolthep__/?hl=en",
  facebook:  "https://www.facebook.com/kamontap.thinchan/",
  tiktok:    "https://www.tiktok.com/@halloworld40",
  youtube:   "https://www.youtube.com/@Vanessa_sr1",
  gmail:     "https://mail.google.com/mail/?view=cm&fs=1&to=kamonthep0095@gmail.com",
  ezdonate:  "https://ezdn.app/Vanessa_sr1"
};

// ไอคอนแบบเส้น (line icon) วาดเองเพื่อไม่ใช้โลโก้ลิขสิทธิ์ตรง ๆ
const ICONS = {
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="6"/>
    <circle cx="12" cy="12" r="4.2"/>
    <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/>
  </svg>`,
  facebook: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="9.2"/>
    <path d="M14 8.4h-1.6c-1 0-1.4.5-1.4 1.5v2h3l-.4 3h-2.6v6.7"/>
  </svg>`,
  tiktok: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M13 3v11.2a3.4 3.4 0 1 1-2.6-3.3"/>
    <path d="M13 3c.3 2.6 2 4.4 4.6 4.7"/>
  </svg>`,
  youtube: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2.8" y="6" width="18.4" height="12" rx="4"/>
    <path d="M10.4 9.3 15 12l-4.6 2.7z" fill="currentColor" stroke="none"/>
  </svg>`,
  gmail: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2.8" y="5" width="18.4" height="14" rx="3"/>
    <path d="M3.5 6.2 12 12.5l8.5-6.3"/>
  </svg>`,
  ezdonate: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 20s-7.4-4.6-9.7-9A5 5 0 0 1 12 6.4 5 5 0 0 1 21.7 11c-2.3 4.4-9.7 9-9.7 9z"/>
    <path d="M9 11.2h2l1-2 2 4 1-2h2"/>
  </svg>`
};

const LABELS = {
  instagram: "Instagram",
  facebook: "Facebook",
  tiktok: "TikTok",
  youtube: "YouTube",
  gmail: "Gmail",
  ezdonate: "EZdonate"
};

function renderProfile() {
  document.getElementById("eyebrow").textContent = PROFILE.eyebrow;
  document.getElementById("location").textContent = PROFILE.location;
  document.getElementById("name").textContent = PROFILE.name;
  document.getElementById("role").textContent = PROFILE.role;
  document.getElementById("bio").textContent = PROFILE.bio;
  document.getElementById("avatarInitials").textContent = PROFILE.avatarInitial;  document.getElementById("footNote").textContent = PROFILE.footNote;
  document.getElementById("avatar").innerHTML = '<img src="101.jpg" alt="' + PROFILE.name + '" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">';
  document.title = `แนะนำตัว | ${PROFILE.name}`;
}

function renderContacts() {
  const grid = document.getElementById("contactGrid");
  grid.innerHTML = "";

  Object.keys(LINKS).forEach((key) => {
    const url = LINKS[key];
    if (!url) return;

    const chip = document.createElement("a");
    chip.className = "contact-chip";
    chip.href = url;
    chip.target = "_blank";
    chip.rel = "noopener noreferrer";
    chip.setAttribute("aria-label", LABELS[key]);
    chip.innerHTML = `${ICONS[key]}<span>${LABELS[key]}</span>`;

    grid.appendChild(chip);
  });
}

renderProfile();
renderContacts();

/*
  ถ้าต้องการใช้รูปโปรไฟล์จริงแทนตัวอักษร:
  1) วางไฟล์รูป เช่น avatar.jpg ไว้โฟลเดอร์เดียวกับ index.html
  2) แทนที่บรรทัดด้านล่างในไฟล์นี้ด้วย:
     document.getElementById("avatar").innerHTML = '<img src="avatar.jpg" alt="' + PROFILE.name + '" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">';
*/

export interface SocialLink {
  platform: string;
  platformEn: string;
  url: string;
  icon: string; // icon name for react-icons or emoji fallback
  featured?: boolean; // true = show on homepage
  category: string;
  categoryEn: string;
}

export const socialCategories = [
  { name: "代码/开发者", nameEn: "Code & Dev" },
  { name: "社交媒体", nameEn: "Social Media" },
  { name: "即时通讯", nameEn: "Messaging" },
  { name: "内容创作", nameEn: "Content Creation" },
  { name: "邮箱/其他", nameEn: "Email & Others" },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    platformEn: "GitHub",
    url: "https://github.com/",
    icon: "github",
    featured: true,
    category: "代码/开发者",
    categoryEn: "Code & Dev",
  },
  {
    platform: "邮箱",
    platformEn: "Email",
    url: "mailto:your@email.com",
    icon: "email",
    featured: true,
    category: "邮箱/其他",
    categoryEn: "Email & Others",
  },
  // 用户后续补充更多
];

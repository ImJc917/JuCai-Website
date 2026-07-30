export interface TimelineEntry {
  school: string;
  schoolEn: string;
  period: string;
  periodEn: string;
  department?: string;
  departmentEn?: string;
}

export const timeline: TimelineEntry[] = [
  {
    school: "后海小学",
    schoolEn: "Houhai Primary School",
    period: "2013 - 2019",
    periodEn: "2013 - 2019",
    department: "广东省 · 深圳市",
    departmentEn: "Shenzhen, Guangdong",
  },
  {
    school: "育才三中",
    schoolEn: "Yucai No.3 Middle School",
    period: "2019 - 2022",
    periodEn: "2019 - 2022",
    department: "广东省 · 深圳市",
    departmentEn: "Shenzhen, Guangdong",
  },
  {
    school: "深圳中学",
    schoolEn: "Shenzhen Middle School",
    period: "2022 - 2025",
    periodEn: "2022 - 2025",
    department: "广东省 · 深圳市",
    departmentEn: "Shenzhen, Guangdong",
  },
  {
    school: "上海交通大学",
    schoolEn: "Shanghai Jiao Tong University",
    period: "2025 - 至今",
    periodEn: "2025 - Present",
    department: "上海市",
    departmentEn: "Shanghai",
  },
];

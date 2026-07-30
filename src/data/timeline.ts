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
    period: "2008 - 2014",
    periodEn: "2008 - 2014",
    department: "广东省 · 深圳市",
    departmentEn: "Shenzhen, Guangdong",
  },
  {
    school: "育才三中",
    schoolEn: "Yucai No.3 Middle School",
    period: "2014 - 2017",
    periodEn: "2014 - 2017",
    department: "广东省 · 深圳市",
    departmentEn: "Shenzhen, Guangdong",
  },
  {
    school: "深圳中学",
    schoolEn: "Shenzhen Middle School",
    period: "2017 - 2020",
    periodEn: "2017 - 2020",
    department: "广东省 · 深圳市",
    departmentEn: "Shenzhen, Guangdong",
  },
  {
    school: "上海交通大学",
    schoolEn: "Shanghai Jiao Tong University",
    period: "2024 - 至今",
    periodEn: "2024 - Present",
  },
];

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
    school: "XX小学",
    schoolEn: "XX Primary School",
    period: "2008 - 2014",
    periodEn: "2008 - 2014",
  },
  {
    school: "XX初中",
    schoolEn: "XX Middle School",
    period: "2014 - 2017",
    periodEn: "2014 - 2017",
  },
  {
    school: "XX高中",
    schoolEn: "XX High School",
    period: "2017 - 2020",
    periodEn: "2017 - 2020",
  },
  {
    school: "XX大学",
    schoolEn: "XX University",
    period: "2024 - 至今",
    periodEn: "2024 - Present",
    department: "XX学院 · XX专业",
    departmentEn: "School of XX · Major in XX",
  },
];

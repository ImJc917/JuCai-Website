export interface Skill {
  name: string;
  nameEn: string;
  semester: string;
  semesterEn: string;
  category: string;
  categoryEn: string;
  description: string;
  descriptionEn: string;
}

export interface SkillCategory {
  name: string;
  nameEn: string;
  icon: string;
}

export const categories: SkillCategory[] = [
  { name: "数学", nameEn: "Mathematics", icon: "📐" },
  { name: "编程", nameEn: "Programming", icon: "💻" },
  { name: "通识", nameEn: "General Education", icon: "📚" },
];

export const skills: Skill[] = [
  {
    name: "高等数学",
    nameEn: "Advanced Mathematics",
    semester: "大一上",
    semesterEn: "Fall, Year 1",
    category: "数学",
    categoryEn: "Mathematics",
    description: "极限、微积分、级数等核心内容",
    descriptionEn: "Limits, calculus, series and more",
  },
  {
    name: "线性代数",
    nameEn: "Linear Algebra",
    semester: "大一下",
    semesterEn: "Spring, Year 1",
    category: "数学",
    categoryEn: "Mathematics",
    description: "矩阵、向量空间、特征值等",
    descriptionEn: "Matrices, vector spaces, eigenvalues and more",
  },
  {
    name: "C语言程序设计",
    nameEn: "C Programming",
    semester: "大一上",
    semesterEn: "Fall, Year 1",
    category: "编程",
    categoryEn: "Programming",
    description: "C语言基础语法、指针、数据结构入门",
    descriptionEn: "C language basics, pointers, intro to data structures",
  },
  {
    name: "Python程序设计",
    nameEn: "Python Programming",
    semester: "大一下",
    semesterEn: "Spring, Year 1",
    category: "编程",
    categoryEn: "Programming",
    description: "Python基础、面向对象、常用库",
    descriptionEn: "Python basics, OOP, common libraries",
  },
  {
    name: "大学语文",
    nameEn: "College Chinese",
    semester: "大一上",
    semesterEn: "Fall, Year 1",
    category: "通识",
    categoryEn: "General Education",
    description: "文学鉴赏、写作训练",
    descriptionEn: "Literature appreciation, writing practice",
  },
];

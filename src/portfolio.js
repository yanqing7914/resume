/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "龚晨昊",
  title: "你好，我是龚晨昊",
  subTitle:
    "江南大学人工智能硕士在读，求职方向：Agent 工程师 / AI 平台工程师 / AI Infra 工程师。有大模型网关与 Agent 平台的生产环境实习经验，做事重视验证和兜底，善于把运维经验沉淀成 Agent 可稳定执行的工具链。",
  avatar: require("./assets/images/avatar.jpg"), // Greeting 区域右侧的个人照片
  resumeLink: "", // 简历 PDF 含手机号，脱敏版就绪前不显示下载按钮
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/yanqing7914",
  gmail: "1976455917@qq.com",
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "技能特长",
  subTitle: "AI AGENT 工程 · 大模型基础设施 · 云原生与 DEVOPS",
  skills: [
    emoji(
      "⚡ AI Agent 工程：熟悉 Agent Skill 设计与工具调用、高风险操作的安全执行规范、AI 编码 Agent 发布门禁；熟练使用 Claude Code、Codex、Cursor，能搭建多 Agent 协作与 AI Code Review 流程"
    ),
    emoji(
      "⚡ 大模型基础设施：熟悉 LiteLLM 网关的路由、key 与预算管理、多上游接入；有网关灰度发布、回归测试、LLM 评测与选型经验"
    ),
    emoji(
      "⚡ 编程语言：熟练使用 Python、TypeScript、Shell、SQL；能读懂并修改 Go 代码"
    ),
    emoji(
      "⚡ 后端与数据：熟悉 NestJS、FastAPI、RESTful API 设计，PostgreSQL、SQLite；有 SQL 注入防护与接口鉴权加固实践"
    ),
    emoji(
      "⚡ 云原生与 DevOps：熟悉 Kubernetes（CRD、RBAC、多集群运维）、k3s、Docker、Nginx、Linux、GitHub Actions；有多环境 CI/CD、灰度发布与回滚设计经验"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Shell",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "GitHub Actions",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "NestJS",
      fontAwesomeClassname: "fab fa-node"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "江南大学",
      logo: require("./assets/images/jiangnanLogo.png"),
      subHeader: "人工智能 硕士研究生",
      duration: "2025.09 – 2028.06",
      desc: "研究方向：多模态图文一致性检测"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Agent 工程实习生",
      company: "车联天下",
      companylogo: require("./assets/images/chelianLogo.png"),
      date: "2026.03 – 至今",
      desc: "负责公司 AI 基础设施的稳定性工程：统一大模型网关（600+ 月活用户、日均 20 万次请求）与企业数字员工平台（在多个 Kubernetes 集群上运行员工专属的飞书 AI 助手）。技术栈：Python、Shell、TypeScript、Kubernetes、Docker、LiteLLM、PostgreSQL、Nginx、GitHub Actions。",
      descBullets: [
        "大模型网关灰度发布系统：网关接入 9 家上游、400+ 模型组，月 Token 消耗约 3,800 亿。设计并实现半自动灰度发布系统，流量按 1% → 5% → 10% → 50% → 100% 逐档放量，借鉴 Argo Rollouts 三态判定，无法判断时停在安全位置并生成带证据的决策卡交人决定；已完成 4 次网关大版本生产升级。",
        "回归体系：8 条新旧版本并排对比的回归用例，以及覆盖鉴权、故障切换、计费对账的 9 个契约脚本；判定逻辑写成纯函数，用真实事故数据回放测试。",
        "运维 Agent 工具链与安全执行：从零开发供 AI Agent 调用的跨集群运维工具集（11 个命令、8 个 Skill），建实例从多步手工操作收敛为一条命令；为高风险操作设计安全执行规范，已应用到 5 类运维 Skill，配套最小权限 RBAC 与 12 组契约测试。",
        "AI 编码 Agent 发布门禁与持续部署：设计并迭代 5 个大版本的发布门禁，部署与回归证据绑定到具体候选版本和目标环境；搭建测试环境定时自动部署与磁盘治理，完成底层 Agent 引擎 OpenClaw 的大版本升级适配。"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "项目经验",
  subtitle: "个人主导与核心参与的项目",
  projects: [
    {
      projectName: "AI 前沿：AI 资讯智能采集与车联模型评测平台",
      projectDesc:
        "个人主导，2026.08 – 至今。车联模型评测榜：对齐 Epoch AI 在 GPQA Diamond 上的公开评测流程，实测 36 个模型，其中 26 个与官方基线对比，从得分、速度、可用性多维度给出选型建议。资讯采集流水线：12 阶段可观测采集编排器，设计 9 方向证据评分体系。质量与工程化：发布门禁重构为纯函数，补充 100+ 单元测试，接入 36 个信源，搭建 staging / production 双环境 CI/CD。技术栈：NestJS、React、TypeScript、PostgreSQL、Drizzle、Jest、GitHub Actions、LLM API。"
    },
    {
      projectName: "SkillPack：企业 Agent Skill 注册与分发平台",
      projectDesc:
        "核心开发者，2026.04。独立负责 Skill 静默升级：用到 Skill 时才检查版本并自动升级，检测到本地修改时跳过、不覆盖，升级记录可追溯回滚。实现 Claude Code / Cursor 客户端自举与按客户端过滤搜索，兼容 ClawHub 生态；修复 P0 级 SQL 注入、FTS 注入和 HTTPS 降级重定向问题。技术栈：Python、FastAPI、SQLite（FTS5）、Docker Compose、Nginx、pytest。"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: "",
  subtitle: "",
  achievementsCards: [],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "",
  subtitle: "",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "",
  subtitle: "",
  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: "",
  subtitle: "",
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "简历",
  subtitle: "下载我的简历",
  display: false // 脱敏版 PDF 就绪前隐藏
};

const contactInfo = {
  title: emoji("联系我 ☎️"),
  subtitle: "欢迎通过邮件联系我，交流 AI Infra / Agent 平台相关的机会。",
  number: "",
  email_address: "1976455917@qq.com"
};

// Twitter Section

const twitterDetails = {
  userName: "",
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

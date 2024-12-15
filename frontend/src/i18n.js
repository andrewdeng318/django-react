import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // Skills Section
          'skills.ai.title': 'AI & Machine Learning',
          'skills.ai.llm': 'Large Language Models (LLMs)',
          'skills.ai.generative': 'Generative AI',
          'skills.ai.ml': 'Machine Learning',
          'skills.ai.solution': 'AI Solution Architecture',
          'skills.ai.nlp': 'Natural Language Processing',

          'skills.software.title': 'Software Development',
          'skills.software.python': 'Python/Django/FastAPI',
          'skills.software.golang': 'Golang/Gin/Fiber',
          'skills.software.java': 'Java/Spring Boot',
          'skills.software.rust': 'Rust/WebAssembly',
          'skills.software.javascript': 'JavaScript/React/Node.js',
          'skills.software.system': 'System Architecture',
          'skills.software.microservices': 'Microservices',

          'skills.cloud.title': 'Cloud Computing',
          'skills.cloud.aws': 'AWS (Advanced)',
          'skills.cloud.azure': 'Azure (Professional)',
          'skills.cloud.gcp': 'Google Cloud Platform',
          'skills.cloud.alibaba': 'Alibaba Cloud',
          'skills.cloud.kubernetes': 'Kubernetes/Docker',
          'skills.cloud.serverless': 'Serverless Architecture',
          'skills.cloud.native': 'Cloud Native Development',

          'skills.leadership.title': 'Leadership & Management',
          'skills.leadership.strategy': 'Technical Strategy',
          'skills.leadership.team': 'Team Leadership',
          'skills.leadership.project': 'Project Management',
          'skills.leadership.digital': 'Digital Transformation',
          'skills.leadership.solution': 'Solution Design',

          // Hero Section
          'hero.name': 'Chris Deng',
          'hero.title': 'AI Expert, Software Development Expert, Tech Lead & Cloud Architect',
          'hero.description': 'Passionate about AI innovation, software engineering excellence, and cloud architecture',
          'hero.linkedin': 'LinkedIn',
          'hero.github': 'GitHub',
          'hero.twitter': 'Twitter',
          'hero.youtube': 'YouTube',
          'hero.udemy': 'Udemy',
          'hero.upwork': 'Upwork',

          // Certifications Section
          'certifications.title': 'Professional Certifications',
          'certifications.safe.title': 'SAFe 5 DevOps Practitioner',
          'certifications.safe.org': 'Scaled Agile, Inc',
          'certifications.azure.title': 'Azure Fundamentals',
          'certifications.azure.org': 'Microsoft',
          'certifications.terraform.title': 'Terraform Associate',
          'certifications.terraform.org': 'HashiCorp',
          'certifications.aws.title': 'AWS Solutions Architect Professional',
          'certifications.aws.org': 'Amazon Web Services',
          'certifications.cka.title': 'Certified Kubernetes Administrator',
          'certifications.cka.org': 'The Linux Foundation',
          'certifications.microsoft.title': 'Microsoft Certified Professional',
          'certifications.microsoft.org': 'Microsoft',
          'certifications.alibaba.title': 'Alibaba Cloud Security',
          'certifications.alibaba.org': 'Alibaba Cloud',
          'certifications.google.title': 'Google Cloud Professional',
          'certifications.google.org': 'Google Cloud',

          // Consulting Services Section
          'consulting.title': 'Technical Consulting Services',
          'consulting.description': 'Professional consulting services in AI, Cloud Architecture, and Software Development',
          'consulting.cta': 'Schedule a Consultation',
          
          // Service Types
          'consulting.services.ai.title': 'AI Solutions',
          'consulting.services.ai.description': 'Machine Learning model development, AI system architecture, LLM implementation, and AI strategy consulting',
          'consulting.services.cloud.title': 'Cloud Architecture',
          'consulting.services.cloud.description': 'Cloud migration strategy, multi-cloud architecture design, cost optimization, and DevOps implementation',
          'consulting.services.software.title': 'Software Development',
          'consulting.services.software.description': 'System design, architecture review, tech stack selection, and development best practices',
          
          // Case Studies
          'consulting.cases.title': 'Success Stories',
          'consulting.cases.ai.title': 'AI-Powered Financial Analysis Platform',
          'consulting.cases.ai.description': 'Developed an AI system that processes financial data and provides market insights, resulting in 40% improved accuracy',
          'consulting.cases.cloud.title': 'Enterprise Cloud Migration',
          'consulting.cases.cloud.description': 'Successfully migrated a large enterprise system to cloud, reducing operational costs by 50% and improving performance',
          'consulting.cases.software.title': 'E-commerce Platform Optimization',
          'consulting.cases.software.description': 'Redesigned system architecture and optimized performance, leading to 3x faster response time and better user experience',

          'contact.description': 'Feel free to reach out to me for any inquiries or collaboration opportunities.',
        }
      },
      zh: {
        translation: {
          // 技能部分
          'skills.ai.title': 'AI 与机器学习',
          'skills.ai.llm': '大语言模型 (LLMs)',
          'skills.ai.generative': '生成式 AI',
          'skills.ai.ml': '机器学习',
          'skills.ai.solution': 'AI 解决方案架构',
          'skills.ai.nlp': '自然语言处理',

          'skills.software.title': '软件开发',
          'skills.software.python': 'Python/Django/FastAPI',
          'skills.software.golang': 'Golang/Gin/Fiber',
          'skills.software.java': 'Java/Spring Boot',
          'skills.software.rust': 'Rust/WebAssembly',
          'skills.software.javascript': 'JavaScript/React/Node.js',
          'skills.software.system': '系统架构',
          'skills.software.microservices': '微服务',

          'skills.cloud.title': '云计算',
          'skills.cloud.aws': 'AWS (高级)',
          'skills.cloud.azure': 'Azure (专业级)',
          'skills.cloud.gcp': '谷歌云平台',
          'skills.cloud.alibaba': '阿里云',
          'skills.cloud.kubernetes': 'Kubernetes/Docker',
          'skills.cloud.serverless': '无服务器架构',
          'skills.cloud.native': '云原生开发',

          'skills.leadership.title': '领导力与管理',
          'skills.leadership.strategy': '技术战略',
          'skills.leadership.team': '团队领导',
          'skills.leadership.project': '项目管理',
          'skills.leadership.digital': '数字化转型',
          'skills.leadership.solution': '解决方案设计',

          // Hero 部分
          'hero.name': '邓鹏飞',
          'hero.title': 'AI 专家、软件开发专家、技术负责人 & 云架构师',
          'hero.description': '专注于人工智能创新、卓越软件工程和云架构',
          'hero.linkedin': '领英',
          'hero.github': '源码',
          'hero.twitter': '推特',
          'hero.youtube': '油管',
          'hero.udemy': '优德美',
          'hero.upwork': 'Upwork',

          // 认证部分
          'certifications.title': '专业认证',
          'certifications.safe.title': 'SAFe 5 DevOps 实践者',
          'certifications.safe.org': 'Scaled Agile, Inc',
          'certifications.azure.title': 'Azure 基础知识',
          'certifications.azure.org': '微软',
          'certifications.terraform.title': 'Terraform 认证',
          'certifications.terraform.org': 'HashiCorp',
          'certifications.aws.title': 'AWS 解决方案架构师专家',
          'certifications.aws.org': '亚马逊云服务',
          'certifications.cka.title': 'Kubernetes 管理员认证',
          'certifications.cka.org': 'Linux 基金会',
          'certifications.microsoft.title': '微软认证专家',
          'certifications.microsoft.org': '微软',
          'certifications.alibaba.title': '阿里云安全专家',
          'certifications.alibaba.org': '阿里云',
          'certifications.google.title': '谷歌云专家',
          'certifications.google.org': '谷歌云',

          // 技术咨询服务部分
          'consulting.title': '技术咨询服务',
          'consulting.description': '提供 AI、云架构和软件开发领域的专业咨询服务',
          'consulting.cta': '预约咨询',
          
          // 服务类型
          'consulting.services.ai.title': 'AI 解决方案',
          'consulting.services.ai.description': '机器学习模型开发、AI 系统架构、LLM 实施和 AI 战略咨询',
          'consulting.services.cloud.title': '云架构服务',
          'consulting.services.cloud.description': '云迁移策略、多云架构设计、成本优化和 DevOps 实施',
          'consulting.services.software.title': '软件开发服务',
          'consulting.services.software.description': '系统设计、架构评审、技术栈选型和开发最佳实践',
          
          // 成功案例
          'consulting.cases.title': '成功案例',
          'consulting.cases.ai.title': 'AI 驱动的金融分析平台',
          'consulting.cases.ai.description': '开发了一个处理金融数据并提供市场洞察的 AI 系统，准确率提升 40%',
          'consulting.cases.cloud.title': '企业级云迁移项目',
          'consulting.cases.cloud.description': '成功将大型企业系统迁移至云端，运营成本降低 50%，性能显著提升',
          'consulting.cases.software.title': '电商平台优化项目',
          'consulting.cases.software.description': '重新设计系统架构并优化性能，响应时间提升3倍，用户体验显著改善',

          'contact.description': '如果您有任何咨询或合作需求，欢迎随时与我联系。',
        }
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

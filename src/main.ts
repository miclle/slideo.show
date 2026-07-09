import './styles.css';

type Locale = 'en' | 'zh';

type Download = {
  label: string;
  detail: string;
  href: string;
};

type Feature = {
  title: string;
  body: string;
};

type Section = {
  eyebrow: string;
  title: string;
  body: string;
};

type Changelog = {
  version: string;
  date: string;
  items: string[];
};

type Copy = {
  languageName: string;
  langSwitch: string;
  nav: {
    workflow: string;
    features: string;
    download: string;
    changelog: string;
  };
  hero: {
    kicker: string;
    title: string;
    lead: string;
    primary: string;
    secondary: string;
    meta: string;
  };
  preview: {
    alt: string;
  };
  workflow: {
    eyebrow: string;
    title: string;
    steps: Section[];
  };
  features: {
    eyebrow: string;
    title: string;
    items: Feature[];
  };
  downloads: {
    eyebrow: string;
    title: string;
    body: string;
    release: string;
    latest: string;
    items: Download[];
    macHint: string;
  };
  changelog: {
    eyebrow: string;
    title: string;
    items: Changelog[];
  };
  footer: {
    releases: string;
  };
};

const releaseVersion = 'v0.1.5';
const releaseDate = '2026-06-25';
const releaseBase = `https://github.com/miclle/slideo.show/releases/download/${releaseVersion}`;
const latestReleaseUrl = 'https://github.com/miclle/slideo.show/releases/latest';

const copy: Record<Locale, Copy> = {
  en: {
    languageName: 'English',
    langSwitch: '中文',
    nav: {
      workflow: 'Workflow',
      features: 'Features',
      download: 'Download',
      changelog: 'Changelog'
    },
    hero: {
      kicker: 'Slides-first narrated video production',
      title: 'Slideo',
      lead:
        'Turn existing PDF, PPTX, or image slide decks into narrated presentation videos. Add page-by-page narration, generate voice, inspect timing, present live, and export MP4 without rebuilding the deck.',
      primary: 'Download Slideo',
      secondary: 'See workflow',
      meta: `Latest public release: ${releaseVersion}, published ${releaseDate}.`
    },
    preview: {
      alt: 'Slideo app workspace showing imported slides, the slide stage, narration scenes, and a timeline.'
    },
    workflow: {
      eyebrow: 'How it works',
      title: 'Start with the deck you already have.',
      steps: [
        {
          eyebrow: '01',
          title: 'Import slides',
          body: 'Open a PDF, PPTX, or ordered image sequence and keep the original slide shape for preview, playback, and export.'
        },
        {
          eyebrow: '02',
          title: 'Write or draft narration',
          body: 'Paste page-by-page narration, import a Markdown script, or generate AI drafts from extracted slide text before reviewing them.'
        },
        {
          eyebrow: '03',
          title: 'Listen on the timeline',
          body: 'Preview voices, generate speech, reuse existing audio, and check pacing with a compact timeline built for production work.'
        },
        {
          eyebrow: '04',
          title: 'Present or export',
          body: 'Run a single-screen or presenter setup directly from the project, or export an MP4 with optional timed subtitles and chapter progress.'
        }
      ]
    },
    features: {
      eyebrow: 'Product surface',
      title: 'Built around your saved .slideo project.',
      items: [
        {
          title: 'Slide import',
          body: 'PDF, PPTX, and image sequences become static pages that can be browsed as thumbnails, stage view, light table, or outline.'
        },
        {
          title: 'Narration workspace',
          body: 'Edit narration per page, validate slide counts, review AI drafts, and search persisted slide text.'
        },
        {
          title: 'Voice and timing',
          body: 'Use Edge TTS Experimental or Doubao voice settings, preview voices, and reuse natural sentence audio segments.'
        },
        {
          title: 'Local text recovery',
          body: 'Run local OCR on image-heavy pages, review OCR text page by page, and apply only the text you accept.'
        },
        {
          title: 'Presentation mode',
          body: 'Open full-screen playback or a dual-screen presenter setup using the current project state and matching generated audio.'
        },
        {
          title: 'Video export',
          body: 'Export MP4 from PDF, PPTX, or image projects with progress reporting, burned subtitles, and chapter progress overlay.'
        }
      ]
    },
    downloads: {
      eyebrow: 'Download',
      title: 'Get Slideo',
      body:
        'Choose the installer for your platform. The release feed also powers in-app update checks for supported builds.',
      release: 'View latest release',
      latest: `${releaseVersion} · ${releaseDate}`,
      items: [
        {
          label: 'macOS Apple Silicon',
          detail: 'For Macs with Apple M-series chips',
          href: `${releaseBase}/slideo-0.1.5-arm64.dmg`
        },
        {
          label: 'macOS Intel',
          detail: 'For Intel-based Macs',
          href: `${releaseBase}/slideo-0.1.5-x64.dmg`
        },
        {
          label: 'Windows x64',
          detail: 'Installer for 64-bit Windows',
          href: `${releaseBase}/slideo-0.1.5-setup.exe`
        },
        {
          label: 'Linux AppImage',
          detail: 'Portable x64 AppImage',
          href: `${releaseBase}/slideo-0.1.5.AppImage`
        },
        {
          label: 'Linux deb',
          detail: 'Debian/Ubuntu x64 package',
          href: `${releaseBase}/slideo_0.1.5_amd64.deb`
        }
      ],
      macHint:
        'Unsure which macOS build you need? Check Apple menu -> About This Mac: Apple M-series uses Apple Silicon; Intel processors use Intel.'
    },
    changelog: {
      eyebrow: 'Changelog',
      title: 'Recent release notes',
      items: [
        {
          version: 'v0.1.5',
          date: '2026-06-25',
          items: [
            'Update download failures now show retryable errors instead of leaving the flow stuck.',
            'The About and update window remains usable after temporary network errors.',
            'Continues publishing macOS, Windows, and Linux installers with update metadata.'
          ]
        },
        {
          version: 'v0.1.4',
          date: '2026-06-24',
          items: [
            'Merged About and Check for Updates into one window.',
            'Shows a download button only after a new version is found.',
            'Displays download progress and prompts restart when the update is ready.'
          ]
        },
        {
          version: 'v0.1.3',
          date: '2026-06-24',
          items: [
            'Improved narration segment reuse and project audio asset management.',
            'Expanded project info checks for text, audio, retained assets, and package health.',
            'Improved packaged import and export reliability across supported slide sources.'
          ]
        }
      ]
    },
    footer: {
      releases: 'Release feed'
    }
  },
  zh: {
    languageName: '中文',
    langSwitch: 'English',
    nav: {
      workflow: '工作流',
      features: '能力',
      download: '下载',
      changelog: '更新'
    },
    hero: {
      kicker: '从现有幻灯片开始的旁白视频制作',
      title: 'Slideo',
      lead:
        '把已经完成的 PDF、PPTX 或图片序列幻灯片，变成带旁白的演示视频。逐页写旁白、生成语音、检查时间线、直接演示，最后导出 MP4，不需要重新制作 deck。',
      primary: '下载 Slideo',
      secondary: '查看工作流',
      meta: `当前公开版本：${releaseVersion}，发布于 ${releaseDate}。`
    },
    preview: {
      alt: 'Slideo 应用工作区截图，展示已导入幻灯片、舞台预览、旁白场景和时间线。'
    },
    workflow: {
      eyebrow: '工作方式',
      title: '从你已经有的幻灯片开始。',
      steps: [
        {
          eyebrow: '01',
          title: '导入幻灯片',
          body: '打开 PDF、PPTX 或按顺序排列的图片序列，保留原始页面比例，用于预览、播放和导出。'
        },
        {
          eyebrow: '02',
          title: '编写或生成旁白',
          body: '粘贴逐页旁白、导入 Markdown 脚本，或基于提取出的幻灯片文本生成 AI 草稿后再逐页审核。'
        },
        {
          eyebrow: '03',
          title: '在时间线上试听',
          body: '预览音色、生成语音、复用已有音频，用为制作而设计的紧凑时间线检查节奏。'
        },
        {
          eyebrow: '04',
          title: '演示或导出',
          body: '直接从项目进入单屏或双屏演示，也可以导出带定时字幕和章节进度的 MP4。'
        }
      ]
    },
    features: {
      eyebrow: '产品能力',
      title: '所有制作状态都围绕 .slideo 项目保存。',
      items: [
        {
          title: '幻灯片导入',
          body: 'PDF、PPTX 和图片序列会变成静态页面，可用缩略图、舞台、看片台或大纲方式浏览。'
        },
        {
          title: '旁白工作区',
          body: '逐页编辑旁白、校验页数、审核 AI 草稿，并搜索项目中保存的幻灯片文本。'
        },
        {
          title: '语音与节奏',
          body: '支持 Edge TTS Experimental 或豆包语音配置，预览音色，并复用自然句片段音频。'
        },
        {
          title: '本地文本恢复',
          body: '对图片型页面运行本地 OCR，逐页审核识别文本，只应用确认过的内容。'
        },
        {
          title: '演示播放',
          body: '用当前项目状态和匹配的已生成音频打开全屏播放或双屏 presenter setup。'
        },
        {
          title: '视频导出',
          body: '从 PDF、PPTX 或图片项目导出 MP4，显示进度，并支持烧录字幕和章节进度 overlay。'
        }
      ]
    },
    downloads: {
      eyebrow: '下载',
      title: '安装当前公开版本。',
      body: '选择适合你平台的安装包。这个 release feed 也为支持的版本提供应用内更新检查。',
      release: '查看最新 Release',
      latest: `${releaseVersion} · ${releaseDate}`,
      items: [
        {
          label: 'macOS Apple Silicon',
          detail: '适用于 Apple M 系列芯片的 Mac',
          href: `${releaseBase}/slideo-0.1.5-arm64.dmg`
        },
        {
          label: 'macOS Intel',
          detail: '适用于 Intel 处理器的 Mac',
          href: `${releaseBase}/slideo-0.1.5-x64.dmg`
        },
        {
          label: 'Windows x64',
          detail: '64 位 Windows 安装包',
          href: `${releaseBase}/slideo-0.1.5-setup.exe`
        },
        {
          label: 'Linux AppImage',
          detail: 'x64 便携 AppImage',
          href: `${releaseBase}/slideo-0.1.5.AppImage`
        },
        {
          label: 'Linux deb',
          detail: 'Debian/Ubuntu x64 安装包',
          href: `${releaseBase}/slideo_0.1.5_amd64.deb`
        }
      ],
      macHint:
        '不确定 macOS 架构时，可以在 Apple 菜单的“关于本机”查看芯片类型：Apple M 系列选择 Apple Silicon，Intel 处理器选择 Intel。'
    },
    changelog: {
      eyebrow: '更新记录',
      title: '近期版本',
      items: [
        {
          version: 'v0.1.5',
          date: '2026-06-25',
          items: [
            '更新检查下载失败时会显示可重试错误，不再让流程停在不可恢复状态。',
            '关于/更新窗口在临时网络错误后仍可继续使用。',
            '继续发布 macOS、Windows 和 Linux 安装包与更新元数据。'
          ]
        },
        {
          version: 'v0.1.4',
          date: '2026-06-24',
          items: [
            '将 About 和 Check for Updates 合并为同一个窗口。',
            '发现新版本后才显示下载更新按钮。',
            '下载过程中显示进度，下载完成后提示重启安装。'
          ]
        },
        {
          version: 'v0.1.3',
          date: '2026-06-24',
          items: [
            '改进旁白片段音频复用和项目音频资产管理。',
            '扩展项目信息检查，可查看文本、音频、保留资产和项目包健康状态。',
            '提升打包应用中 PDF、PPTX 和图片序列导入导出的可靠性。'
          ]
        }
      ]
    },
    footer: {
      releases: 'Release feed'
    }
  }
};

const getInitialLocale = (): Locale => {
  const saved = window.localStorage.getItem('slideo-locale');
  if (saved === 'en' || saved === 'zh') {
    return saved;
  }
  return navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en';
};

let locale = getInitialLocale();

const html = (strings: TemplateStringsArray, ...values: string[]) =>
  strings.reduce((result, string, index) => `${result}${string}${values[index] ?? ''}`, '');

const escapeHtml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

const renderWorkflow = (sections: Section[]) =>
  sections
    .map(
      (step) => html`
        <article class="step">
          <span>${escapeHtml(step.eyebrow)}</span>
          <h3>${escapeHtml(step.title)}</h3>
          <p>${escapeHtml(step.body)}</p>
        </article>
      `
    )
    .join('');

const renderFeatures = (features: Feature[]) =>
  features
    .map(
      (feature) => html`
        <article class="feature">
          <h3>${escapeHtml(feature.title)}</h3>
          <p>${escapeHtml(feature.body)}</p>
        </article>
      `
    )
    .join('');

const renderDownloads = (downloads: Download[]) =>
  downloads
    .map(
      (download) => html`
        <a class="download-item" href="${download.href}">
          <span>
            <strong>${escapeHtml(download.label)}</strong>
            <small>${escapeHtml(download.detail)}</small>
          </span>
          <span aria-hidden="true">↓</span>
        </a>
      `
    )
    .join('');

const renderChangelog = (items: Changelog[]) =>
  items
    .map(
      (entry) => html`
        <article class="release-note">
          <div>
            <strong>${escapeHtml(entry.version)}</strong>
            <span>${escapeHtml(entry.date)}</span>
          </div>
          <ul>
            ${entry.items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
          </ul>
        </article>
      `
    )
    .join('');

const localeLabel = (value: Locale) => (value === 'zh' ? '中文' : 'EN');

const renderLanguageMenu = () => html`
  <div class="language-menu">
    <button
      class="language-trigger"
      type="button"
      aria-label="Change language"
      aria-haspopup="menu"
      aria-expanded="false"
      data-locale-menu-toggle
    >
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M3 12h18"></path>
        <path d="M12 3a14 14 0 0 1 0 18"></path>
        <path d="M12 3a14 14 0 0 0 0 18"></path>
      </svg>
      <span>${localeLabel(locale)}</span>
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="m7 10 5 5 5-5"></path>
      </svg>
    </button>
    <div class="language-options" role="menu" hidden data-locale-menu>
      <button
        type="button"
        role="menuitem"
        data-locale-option="en"
        aria-current="${locale === 'en' ? 'true' : 'false'}"
      >
        <span>English</span>
        <small>EN</small>
      </button>
      <button
        type="button"
        role="menuitem"
        data-locale-option="zh"
        aria-current="${locale === 'zh' ? 'true' : 'false'}"
      >
        <span>中文</span>
        <small>ZH</small>
      </button>
    </div>
  </div>
`;

const renderApp = () => {
  const t = copy[locale];
  document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en';
  document.title = locale === 'zh' ? 'Slideo - 旁白演示视频制作' : 'Slideo - Narrated presentation videos';

  const app = document.querySelector<HTMLDivElement>('#app');
  if (!app) {
    return;
  }

  app.innerHTML = html`
    <header class="site-header">
      <a class="brand" href="#top" aria-label="Slideo home">
        <img class="brand-mark" src="/slideo-app-icon.svg" alt="" aria-hidden="true" />
        <span>Slideo</span>
      </a>
      <nav aria-label="Primary navigation">
        <a href="#workflow">${escapeHtml(t.nav.workflow)}</a>
        <a href="#features">${escapeHtml(t.nav.features)}</a>
        <a href="#download">${escapeHtml(t.nav.download)}</a>
        <a href="#changelog">${escapeHtml(t.nav.changelog)}</a>
      </nav>
      ${renderLanguageMenu()}
    </header>

    <main id="top">
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero-copy">
          <p class="eyebrow">${escapeHtml(t.hero.kicker)}</p>
          <h1 id="hero-title">${escapeHtml(t.hero.title)}</h1>
          <p class="hero-lead">${escapeHtml(t.hero.lead)}</p>
          <div class="hero-actions">
            <a class="button primary" href="#download">${escapeHtml(t.hero.primary)}</a>
            <a class="button secondary" href="#workflow">${escapeHtml(t.hero.secondary)}</a>
          </div>
          <p class="release-meta">${escapeHtml(t.hero.meta)}</p>
        </div>

        <figure class="product-visual">
          <img src="/slideo-app-screenshot.png" alt="${escapeHtml(t.preview.alt)}" />
        </figure>
      </section>

      <section class="section workflow-section" id="workflow" aria-labelledby="workflow-title">
        <div class="section-heading">
          <p class="eyebrow">${escapeHtml(t.workflow.eyebrow)}</p>
          <h2 id="workflow-title">${escapeHtml(t.workflow.title)}</h2>
        </div>
        <div class="steps">${renderWorkflow(t.workflow.steps)}</div>
      </section>

      <section class="section" id="features" aria-labelledby="features-title">
        <div class="section-heading">
          <p class="eyebrow">${escapeHtml(t.features.eyebrow)}</p>
          <h2 id="features-title">${escapeHtml(t.features.title)}</h2>
        </div>
        <div class="feature-grid">${renderFeatures(t.features.items)}</div>
      </section>

      <section class="download-section" id="download" aria-labelledby="download-title">
        <div>
          <p class="eyebrow">${escapeHtml(t.downloads.eyebrow)}</p>
          <h2 id="download-title">${escapeHtml(t.downloads.title)}</h2>
          <p>${escapeHtml(t.downloads.body)}</p>
          <div class="download-actions">
            <a class="button primary" href="${latestReleaseUrl}">${escapeHtml(t.downloads.release)}</a>
            <span>${escapeHtml(t.downloads.latest)}</span>
          </div>
        </div>
        <div class="download-list">
          ${renderDownloads(t.downloads.items)}
          <p>${escapeHtml(t.downloads.macHint)}</p>
        </div>
      </section>

      <section class="section changelog-section" id="changelog" aria-labelledby="changelog-title">
        <div class="section-heading">
          <p class="eyebrow">${escapeHtml(t.changelog.eyebrow)}</p>
          <h2 id="changelog-title">${escapeHtml(t.changelog.title)}</h2>
        </div>
        <div class="release-notes">${renderChangelog(t.changelog.items)}</div>
      </section>
    </main>

    <footer class="site-footer">
      <span>Slideo</span>
      <a href="${latestReleaseUrl}">${escapeHtml(t.footer.releases)}</a>
    </footer>
  `;
};

renderApp();

const closeLocaleMenu = () => {
  const trigger = document.querySelector<HTMLButtonElement>('[data-locale-menu-toggle]');
  const menu = document.querySelector<HTMLElement>('[data-locale-menu]');
  trigger?.setAttribute('aria-expanded', 'false');
  menu?.setAttribute('hidden', '');
};

document.addEventListener('click', (event) => {
  const target = event.target;
  if (!(target instanceof Element)) {
    return;
  }

  const option = target.closest<HTMLElement>('[data-locale-option]');
  if (option) {
    const nextLocale = option.dataset.localeOption;
    if (nextLocale === 'en' || nextLocale === 'zh') {
      locale = nextLocale;
      window.localStorage.setItem('slideo-locale', locale);
      renderApp();
    }
    return;
  }

  const trigger = target.closest<HTMLButtonElement>('[data-locale-menu-toggle]');
  if (trigger) {
    const menu = document.querySelector<HTMLElement>('[data-locale-menu]');
    const isOpen = trigger.getAttribute('aria-expanded') === 'true';
    trigger.setAttribute('aria-expanded', String(!isOpen));
    menu?.toggleAttribute('hidden', isOpen);
    return;
  }

  closeLocaleMenu();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeLocaleMenu();
  }
});

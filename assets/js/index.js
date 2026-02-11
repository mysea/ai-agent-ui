
const agents = [
    { id: 1, title: "附件小助手附件小助手附件小助手", cat: "new", tag: "内容提取", desc: "支持多种格式文档的摘要、要点提取与格式转换，适合日常办公处理。支持多种格式文档的摘要、要点提取与格式转换，适合日常办公处理。", hot: 154, source: "汇智AI中台" },
    { id: 2, title: "课程提取智能体", cat: "hot", tag: "教学助手", desc: "把教学资料结构化：生成大纲、练习题、知识点卡片与课后测验。", hot: 88, source: "汇智AI中台" },
    { id: 3, title: "预约助手", cat: "ops", tag: "流程自动化", desc: "预约/排期/提醒统一管理：支持模板化话术与多轮确认，减少人工沟通。", hot: 38, source: "汇智AI中台" },
    { id: 4, title: "产品AI助手", cat: "ops", tag: "产品支持", desc: "面向产品与运营：PRD要点、竞品分析、版本说明、FAQ生成一站式完成。", hot: 163, source: "汇智AI中台" },
    { id: 5, title: "招聘智能体", cat: "new", tag: "HR", desc: "JD 生成、筛简历、面试题库与评估维度建议，提升招聘效率。", hot: 65, source: "汇智AI中台" },
    { id: 6, title: "十五五规划方案", cat: "other", tag: "方案写作", desc: "面向单位/部门的规划写作：结构模板+可落地的目标/路径/指标体系。", hot: 34, source: "汇智AI中台" },
    { id: 7, title: "思政服务一问一答", cat: "hot", tag: "问答", desc: "覆盖常见政策与课程答疑，输出通俗解释与可引用的表达。", hot: 22, source: "汇智AI中台" },
    { id: 8, title: "写稿无障碍智能体", cat: "search", tag: "写作", desc: "新闻稿、活动稿、报告、公文表达优化；支持多版本与语气风格切换。", hot: 40, source: "汇智AI中台" },
    { id: 9, title: "思政一阳月儿", cat: "hot", tag: "学习陪伴", desc: "学习计划制定、每日打卡、重点复盘与错题再练，适合长期学习。", hot: 19, source: "汇智AI中台" },
    { id: 10, title: "思政问答助手", cat: "hot", tag: "答疑", desc: "以问带学：引导式提问、分层讲解与知识关联，帮助形成体系理解。", hot: 34, source: "汇智AI中台" },
    { id: 11, title: "红色教育思政小助手", cat: "hot", tag: "课堂素材", desc: "红色资源整理、课堂案例生成、活动策划与讲稿提炼。", hot: 11, source: "汇智AI中台" },
    { id: 12, title: "作文写作", cat: "search", tag: "写作", desc: "小学/初中/高中作文：审题立意、素材库、结构搭建与润色提升。", hot: 8, source: "汇智AI中台" },
    { id: 13, title: "行政助手", cat: "new", tag: "效率", desc: "会议纪要、周报、通知、表单说明与邮件润色，减少重复劳动。", hot: 23, source: "汇智AI中台" },
    { id: 14, title: "文案改写-Demo", cat: "search", tag: "改写", desc: "一键改写与扩写：更清晰、更专业、更有说服力；支持去AI味。", hot: 7, source: "汇智AI中台" },
    { id: 15, title: "学科问答智能体", cat: "hot", tag: "学科辅导", desc: "数学/英语/语文等学科答疑：步骤推导、错因定位与练习生成。", hot: 18, source: "汇智AI中台" },
    { id: 16, title: "智能助手小轩", cat: "other", tag: "通用", desc: "通用智能体：能写、能查、能总结、能规划，适合日常综合场景。", hot: 35, source: "汇智AI中台" },
    { id: 17, title: "Excel办公助手", cat: "edu", tag: "表格", desc: "函数公式、透视表、数据清洗、统计分析与可视化建议，边做边教。", hot: 16, source: "汇智AI中台" },
    { id: 18, title: "批改作业-1", cat: "hot", tag: "批改", desc: "作业批改与反馈建议：指出问题、给出改进方向与再练题。", hot: 5, source: "汇智AI中台" },
    { id: 19, title: "附件小助手", cat: "agent", tag: "内容提取", desc: "支持多种格式文档的摘要、要点提取与格式转换，适合日常办公处理。", hot: 154, source: "汇智AI中台" },
    { id: 20, title: "课程提取智能体", cat: "audit", tag: "教学助手", desc: "把教学资料结构化：生成大纲、练习题、知识点卡片与课后测验。", hot: 88, source: "汇智AI中台" },
    { id: 21, title: "预约助手", cat: "qa", tag: "流程自动化", desc: "预约/排期/提醒统一管理：支持模板化话术与多轮确认，减少人工沟通。", hot: 38, source: "汇智AI中台" },
    { id: 22, title: "产品AI助手", cat: "biz", tag: "产品支持", desc: "面向产品与运营：PRD要点、竞品分析、版本说明、FAQ生成一站式完成。", hot: 163, source: "汇智AI中台" },
    { id: 23, title: "招聘智能体", cat: "hr", tag: "HR", desc: "JD 生成、筛简历、面试题库与评估维度建议，提升招聘效率。", hot: 65, source: "汇智AI中台" },
    { id: 24, title: "十五五规划方案", cat: "audit", tag: "方案写作", desc: "面向单位/部门的规划写作：结构模板+可落地的目标/路径/指标体系。", hot: 34, source: "汇智AI中台" },
];

// 更多分类
const moreCategories = [
    { key: "agent", name: "智能体搭建" },
    { key: "audit", name: "合规审计" },
    { key: "qa", name: "质检" },
    { key: "biz", name: "业务咨询" },
    { key: "it", name: "IT支持" },
    { key: "research", name: "调研" },
    { key: "meeting", name: "会议" },
    { key: "hr", name: "人事" },
];

const iconPalette = [
    ["#2f6bff", "#4aa3ff"],
    ["#7c3aed", "#a78bfa"],
    ["#f97316", "#fb7185"],
    ["#06b6d4", "#22c55e"],
    ["#111827", "#64748b"],
    ["#ef4444", "#f59e0b"],
];

let activeCat = "all";
let keyword = "";

const grid = document.getElementById("cardGrid");
const totalCountEl = document.getElementById("totalCount");

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

const moreBtn = document.getElementById("moreBtn");
const morePanel = document.getElementById("morePanel");
const moreList = document.getElementById("moreList");

const btnCreate = document.getElementById("btnCreate");

const emptyState = document.getElementById("emptyState");

// 用户菜单
const userBtn = document.getElementById("userBtn");
const userDropdown = document.getElementById("userDropdown");

// 修改密码弹窗
const pwdModal = document.getElementById("pwdModal");
const btnChangePwd = document.getElementById("btnChangePwd");
const btnLogout = document.getElementById("btnLogout");
const btnSavePwd = document.getElementById("btnSavePwd");
const pwdTip = document.getElementById("pwdTip");

function escapeHTML(str = "") {
    return str.replace(/[&<>"']/g, s => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
    }[s]));
}

function pickGradient(id) {
    const [a, b] = iconPalette[id % iconPalette.length];
    return `linear-gradient(135deg, ${a}, ${b})`;
}

function matchAgent(a) {
    const k = keyword.trim().toLowerCase();
    const hitCat = activeCat === "all" ? true : a.cat === activeCat;

    if (!k) return hitCat;

    const hay = `${a.title} ${a.tag} ${a.desc}`.toLowerCase();
    return hitCat && hay.includes(k);
}

function render() {
    const list = agents.filter(matchAgent);
    totalCountEl.textContent = `共 ${list.length} 个智能体`;

    if (list.length === 0) {
        grid.innerHTML = "";
        emptyState.hidden = false;
    } else {
        emptyState.hidden = true;

        grid.innerHTML = list.map(a => {
            const gradient = pickGradient(a.id);
            const letter = a.title.slice(0, 1);
            return `
            <article class="card" data-id="${a.id}" data-detail="${a.id}">
                <div class="card__top">
                <div class="card__icon" style="background:${gradient}">${escapeHTML(letter)}</div>
                <div class="card__title_c">
                    <h3 class="card__title text-overflow-1">${escapeHTML(a.title)}</h3>
                    <div class="card__tag">${escapeHTML(a.tag)}</div>
                </div>
                </div>
                <p class="card__desc text-overflow-2">${escapeHTML(a.desc)}</p>
                <div class="card__foot">
                    <div class="heat">
                        <img src="assets/icons/hot.png" class="heat__img" aria-hidden="true"></img>
                        <span class="heat__num">${a.hot}</span>
                    </div>
                    <div class="source">
                        <span>来源：${escapeHTML(a.source)}</span>
                        <img src="assets/icons/more.png" class="heat__img" aria-hidden="true"></img>
                    </div>
                </div>
            </article>
        `;
        }).join("");

        grid.querySelectorAll("[data-open]").forEach(btn => {
            btn.addEventListener("click", () => {
                const id = btn.getAttribute("data-open");
                const agent = agents.find(x => String(x.id) === String(id));
                alert(`进入：${agent?.title || id}`);
            });
        });

        grid.querySelectorAll("[data-detail]").forEach(btn => {
            btn.addEventListener("click", () => {
                const id = btn.getAttribute("data-detail");
                const agent = agents.find(x => String(x.id) === String(id));
                alert(`查看详情：${agent?.title || id}`);
            });
        });
    }
}

// 分类点击
document.querySelectorAll(".chip").forEach(chip => {
    chip.addEventListener("click", () => {
        document.querySelectorAll(".chip").forEach(c => c.classList.remove("chip--active"));
        chip.classList.add("chip--active");
        activeCat = chip.getAttribute("data-cat");
        render();
    });
});

function closeMore() {
    morePanel?.classList.remove("show");
    moreBtn?.setAttribute("aria-expanded", "false");
}

function toggleMore(e) {
    e?.stopPropagation?.();
    const show = !morePanel.classList.contains("show");
    morePanel.classList.toggle("show", show);
    moreBtn.setAttribute("aria-expanded", show ? "true" : "false");
}

function renderMoreCategories() {
    if (!moreList) return;
    moreList.innerHTML = moreCategories.map(c => `
        <div class="chip" data-cat="${c.key}">${escapeHTML(c.name)}</div>
    `).join("");

    moreList.querySelectorAll(".chip").forEach(chip => {
        chip.addEventListener("click", () => {
            document.querySelectorAll(".chip").forEach(c => c.classList.remove("chip--active"));
            chip.classList.add("chip--active");
            activeCat = chip.getAttribute("data-cat");
            closeMore();
            render();
        });
    });
}

moreBtn?.addEventListener("click", toggleMore);
document.addEventListener("click", () => closeMore());
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeMore(); });

renderMoreCategories();

// 新建
btnCreate?.addEventListener("click", () => {
    alert("新建智能体");
});

// 搜索
function doSearch() {
    keyword = searchInput.value || "";
    render();
}
searchBtn.addEventListener("click", doSearch);
searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") doSearch();
});

// 用户菜单
function closeUserMenu() {
    userDropdown.classList.remove("show");
    userBtn.setAttribute("aria-expanded", "false");
}
function toggleUserMenu() {
    userDropdown.classList.toggle("show");
    userBtn.setAttribute("aria-expanded", userDropdown.classList.contains("show") ? "true" : "false");
}
userBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleUserMenu();
});
document.addEventListener("click", () => closeUserMenu());
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeUserMenu();
});

// 修改密码弹窗
function openModal() {
    pwdTip.textContent = "";
    pwdModal.classList.add("show");
    pwdModal.setAttribute("aria-hidden", "false");
}
function closeModal() {
    pwdModal.classList.remove("show");
    pwdModal.setAttribute("aria-hidden", "true");
}
btnChangePwd.addEventListener("click", () => {
    closeUserMenu();
    openModal();
});
btnLogout.addEventListener("click", () => {
    closeUserMenu();
    location.href = "/login.html";
});

pwdModal.addEventListener("click", (e) => {
    const close = e.target?.getAttribute?.("data-close");
    if (close) closeModal();
});

btnSavePwd.addEventListener("click", () => {
    const oldPwd = document.getElementById("oldPwd").value.trim();
    const newPwd = document.getElementById("newPwd").value.trim();
    const newPwd2 = document.getElementById("newPwd2").value.trim();

    if (!oldPwd || !newPwd || !newPwd2) {
        pwdTip.textContent = "请完整填写密码信息";
        return;
    }
    if (newPwd.length < 6) {
        pwdTip.textContent = "新密码至少 6 位";
        return;
    }
    if (newPwd !== newPwd2) {
        pwdTip.textContent = "两次输入的新密码不一致";
        return;
    }

    alert("密码已修改（示意）。");
    closeModal();
});

render();

"use client";

import {
  Bell,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  Download,
  FileText,
  FolderOpen,
  HelpCircle,
  Home,
  Menu,
  MessageSquare,
  MoreHorizontal,
  Paperclip,
  Search,
  Send,
  Settings,
  Upload,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Overview", icon: Home },
  { label: "Projects", icon: FolderOpen },
  { label: "Files", icon: FileText },
  { label: "Invoices", icon: FileText },
  { label: "Messages", icon: MessageSquare, badge: 2 },
];

const files = [
  { name: "Brand direction.pdf", detail: "PDF · 8.2 MB", date: "Aug 8" },
  { name: "Homepage copy.docx", detail: "DOCX · 42 KB", date: "Aug 6" },
  { name: "Project timeline.pdf", detail: "PDF · 1.1 MB", date: "Aug 2" },
];

export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("Overview");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const chooseNav = (label: string) => {
    setActive(label);
    setMobileOpen(false);
  };

  const sendMessage = () => {
    if (!message.trim()) return;
    setMessage("");
    setSent(true);
    window.setTimeout(() => setSent(false), 2600);
  };

  return (
    <main className="portal-shell">
      <aside className={`sidebar ${mobileOpen ? "sidebar-open" : ""}`}>
        <div className="brand-row">
          <div className="brand-mark">N</div>
          <div><strong>North & Pine</strong><span>Client portal</span></div>
          <button className="icon-button close-menu" onClick={() => setMobileOpen(false)} aria-label="Close menu"><X size={20} /></button>
        </div>

        <nav aria-label="Main navigation">
          {navItems.map(({ label, icon: Icon, badge }) => (
            <button key={label} className={`nav-item ${active === label ? "active" : ""}`} onClick={() => chooseNav(label)}>
              <Icon size={19} strokeWidth={1.8} />
              <span>{label}</span>
              {badge && <em>{badge}</em>}
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <button className="nav-item"><HelpCircle size={19} /> <span>Help & support</span></button>
          <button className="nav-item"><Settings size={19} /> <span>Settings</span></button>
          <div className="account-row">
            <div className="avatar">AM</div>
            <div><strong>Alex Morgan</strong><span>alex@example.com</span></div>
            <button className="icon-button" aria-label="Account menu"><MoreHorizontal size={18} /></button>
          </div>
        </div>
      </aside>

      {mobileOpen && <button className="menu-scrim" aria-label="Close menu" onClick={() => setMobileOpen(false)} />}

      <section className="main-area">
        <header className="topbar">
          <button className="icon-button menu-button" onClick={() => setMobileOpen(true)} aria-label="Open menu"><Menu size={21} /></button>
          <label className="search-box">
            <Search size={18} />
            <input aria-label="Search portal" placeholder="Search projects, files, invoices..." />
          </label>
          <div className="top-actions">
            <button className="icon-button notification" aria-label="Notifications"><Bell size={20} /><span /></button>
            <div className="mini-avatar">AM</div>
          </div>
        </header>

        <div className="content">
          <div className="welcome-row">
            <div><p className="eyebrow">Monday, August 10</p><h1>Good afternoon, Alex</h1><p>Here’s what’s happening with your project.</p></div>
            <button className="primary-button" onClick={() => document.getElementById("message-input")?.focus()}><MessageSquare size={17} /> Message the team</button>
          </div>

          <section className="project-panel" aria-labelledby="project-title">
            <div className="project-top">
              <div><span className="status-pill"><i /> In progress</span><h2 id="project-title">Website & brand refresh</h2><p>Everything is moving on schedule. Your feedback is needed on the latest design direction.</p></div>
              <button className="text-button">View project <ChevronRight size={17} /></button>
            </div>
            <div className="progress-block">
              <div className="progress-meta"><strong>Project progress</strong><span>65%</span></div>
              <div className="progress-track"><span /></div>
              <div className="milestones">
                <div className="milestone done"><span><Check size={14} /></span><strong>Discovery</strong><small>Completed Jul 24</small></div>
                <div className="milestone done"><span><Check size={14} /></span><strong>Strategy</strong><small>Completed Aug 1</small></div>
                <div className="milestone current"><span>3</span><strong>Design</strong><small>In progress</small></div>
                <div className="milestone"><span>4</span><strong>Build</strong><small>Starts Aug 18</small></div>
                <div className="milestone"><span>5</span><strong>Launch</strong><small>Target Sep 5</small></div>
              </div>
            </div>
          </section>

          <div className="dashboard-grid">
            <section className="panel action-panel">
              <div className="panel-heading"><div><p className="eyebrow">Action needed</p><h2>Review design direction</h2></div><span className="due"><Clock3 size={15} /> Due Aug 13</span></div>
              <p>We’ve prepared two visual directions based on your feedback. Review the presentation and tell us which feels right.</p>
              <div className="action-footer"><div className="collaborators"><span>JT</span><span>SK</span><small>Shared by your project team</small></div><button className="secondary-button">Review now <ChevronRight size={16} /></button></div>
            </section>

            <section className="panel appointment-panel">
              <div className="panel-title"><h2>Next appointment</h2><button className="icon-button" aria-label="Appointment menu"><MoreHorizontal size={19} /></button></div>
              <div className="appointment"><div className="date-tile"><span>AUG</span><strong>14</strong></div><div><strong>Design review call</strong><p>Friday · 11:00 AM – 11:45 AM</p><span><Users size={15} /> With Jamie & Sam</span></div></div>
              <button className="full-button"><CalendarDays size={17} /> Add to calendar</button>
            </section>

            <section className="panel files-panel">
              <div className="panel-title"><div><h2>Recent files</h2><p>Latest documents shared with you</p></div><button className="text-button">View all</button></div>
              <div className="file-list">
                {files.map((file, index) => <div className="file-row" key={file.name}><div className={`file-icon file-${index}`}><FileText size={19} /></div><div><strong>{file.name}</strong><span>{file.detail}</span></div><time>{file.date}</time><button className="icon-button" aria-label={`Download ${file.name}`}><Download size={18} /></button></div>)}
              </div>
              <button className="upload-button"><Upload size={17} /> Upload a file</button>
            </section>

            <section className="panel invoice-panel">
              <div className="panel-title"><div><h2>Invoice summary</h2><p>Current project billing</p></div><button className="text-button">View all</button></div>
              <div className="invoice-stats"><div><span>Amount paid</span><strong>$2,400</strong></div><div><span>Amount due</span><strong>$1,200</strong></div></div>
              <div className="invoice-progress"><span /></div>
              <div className="invoice-row"><div className="file-icon"><FileText size={19} /></div><div><strong>Invoice #NP-1042</strong><span>Due August 21, 2026</span></div><span className="open-pill">Open</span><button className="icon-button" aria-label="Download invoice"><Download size={18} /></button></div>
            </section>
          </div>

          <section className="message-panel">
            <div className="message-avatar">JT</div><div className="message-copy"><div><strong>Jamie Taylor</strong><span>Project lead · 2 hours ago</span></div><p>Hi Alex, the new design presentation is ready for you. I’m excited to hear which direction resonates most.</p></div>
            <div className="message-compose"><button className="icon-button" aria-label="Attach a file"><Paperclip size={19} /></button><input id="message-input" value={message} onChange={(e) => setMessage(e.target.value)} onKeyDown={(e) => e.key === "Enter" && sendMessage()} placeholder={sent ? "Message sent!" : "Reply to Jamie..."} aria-label="Reply to Jamie" /><button className="send-button" onClick={sendMessage} aria-label="Send message"><Send size={18} /></button></div>
          </section>

          <footer>© 2026 North & Pine Studio <span>Privacy</span><span>Terms</span></footer>
        </div>
      </section>
    </main>
  );
}

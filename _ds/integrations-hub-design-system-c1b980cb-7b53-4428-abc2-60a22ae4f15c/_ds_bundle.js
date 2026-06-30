/* @ds-bundle: {"format":3,"namespace":"IntegrationsHubDesignSystem_c1b980","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/data-display/Avatar.jsx"},{"name":"AvatarGroup","sourcePath":"components/data-display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"StatusDot","sourcePath":"components/data-display/StatusDot.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Spinner","sourcePath":"components/feedback/Spinner.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Breadcrumbs","sourcePath":"components/navigation/Breadcrumbs.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"cc460027ab77","components/actions/IconButton.jsx":"5db4eac6a3b3","components/data-display/Avatar.jsx":"f78e119bdfb7","components/data-display/Badge.jsx":"ae948b5204c6","components/data-display/Card.jsx":"20ed896bd3bf","components/data-display/StatusDot.jsx":"a30a6a970b17","components/feedback/Alert.jsx":"6a784a3b2bf5","components/feedback/ProgressBar.jsx":"e71e11bbb93e","components/feedback/Spinner.jsx":"923355db4823","components/feedback/Tooltip.jsx":"3d49847e57cf","components/forms/Checkbox.jsx":"71d893fad024","components/forms/Input.jsx":"c6f57cc893e7","components/forms/Radio.jsx":"08f096e6405a","components/forms/Select.jsx":"afd4047f53bb","components/forms/Switch.jsx":"a15931d941ff","components/forms/Textarea.jsx":"6e39b548f2bc","components/navigation/Breadcrumbs.jsx":"4a708db39256","components/navigation/Tabs.jsx":"332b515176dd","ui_kits/dashboard/kit-screens.jsx":"f7f46dcd4fa2","ui_kits/dashboard/kit-ui.jsx":"960d041219c1"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.IntegrationsHubDesignSystem_c1b980 = window.IntegrationsHubDesignSystem_c1b980 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Scoped stylesheet — injected once. References design tokens via var(). */
const CSS = `
.ih-btn{
  --_h: var(--control-md);
  display:inline-flex; align-items:center; justify-content:center; gap:var(--space-2);
  height:var(--_h); padding:0 var(--space-4);
  font-family:var(--font-sans); font-size:var(--text-base); font-weight:var(--fw-medium);
  line-height:1; letter-spacing:var(--tracking-tight);
  border-radius:var(--radius-md); border:var(--border-width) solid transparent;
  cursor:pointer; white-space:nowrap; user-select:none;
  transition:var(--transition-colors), transform var(--duration-fast) var(--ease-standard);
}
.ih-btn:focus-visible{ outline:none; box-shadow:var(--ring); }
.ih-btn:active{ transform:translateY(0.5px); }
.ih-btn[disabled]{ cursor:not-allowed; opacity:.5; }
.ih-btn--sm{ --_h:var(--control-sm); padding:0 var(--space-3); font-size:var(--text-sm); border-radius:var(--radius-sm); }
.ih-btn--lg{ --_h:var(--control-lg); padding:0 var(--space-5); font-size:var(--text-md); }
.ih-btn--full{ width:100%; }

/* primary */
.ih-btn--primary{ background:var(--accent); color:var(--accent-on); border-color:var(--accent); }
.ih-btn--primary:hover:not([disabled]){ background:var(--accent-hover); border-color:var(--accent-hover); }
.ih-btn--primary:active:not([disabled]){ background:var(--accent-active); }
/* secondary */
.ih-btn--secondary{ background:var(--bg-surface); color:var(--text-primary); border-color:var(--border-default); box-shadow:var(--shadow-xs); }
.ih-btn--secondary:hover:not([disabled]){ background:var(--bg-hover); border-color:var(--border-strong); }
.ih-btn--secondary:active:not([disabled]){ background:var(--bg-active); }
/* ghost */
.ih-btn--ghost{ background:transparent; color:var(--text-secondary); }
.ih-btn--ghost:hover:not([disabled]){ background:var(--bg-hover); color:var(--text-primary); }
.ih-btn--ghost:active:not([disabled]){ background:var(--bg-active); }
/* danger */
.ih-btn--danger{ background:var(--danger); color:#fff; border-color:var(--danger); }
.ih-btn--danger:hover:not([disabled]){ filter:brightness(.94); }
/* link */
.ih-btn--link{ background:transparent; color:var(--text-link); height:auto; padding:0; border:0; border-radius:0; }
.ih-btn--link:hover:not([disabled]){ text-decoration:underline; text-underline-offset:2px; }

.ih-btn__spinner{ width:1em; height:1em; border-radius:var(--radius-full);
  border:2px solid currentColor; border-right-color:transparent; animation:ih-btn-spin .6s linear infinite; }
@keyframes ih-btn-spin{ to{ transform:rotate(360deg); } }
.ih-btn__icon{ display:inline-flex; flex:none; }
`;
if (typeof document !== "undefined" && !document.getElementById("ih-button-css")) {
  const s = document.createElement("style");
  s.id = "ih-button-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Button({
  children,
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  loading = false,
  fullWidth = false,
  disabled = false,
  className = "",
  ...rest
}) {
  const classes = ["ih-btn", `ih-btn--${variant}`, size !== "md" ? `ih-btn--${size}` : "", fullWidth ? "ih-btn--full" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    className: classes,
    disabled: disabled || loading,
    "aria-busy": loading || undefined
  }, rest), loading && /*#__PURE__*/React.createElement("span", {
    className: "ih-btn__spinner",
    "aria-hidden": "true"
  }), !loading && leftIcon && /*#__PURE__*/React.createElement("span", {
    className: "ih-btn__icon"
  }, leftIcon), children, !loading && rightIcon && /*#__PURE__*/React.createElement("span", {
    className: "ih-btn__icon"
  }, rightIcon));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ih-iconbtn{
  --_s: var(--control-md);
  display:inline-flex; align-items:center; justify-content:center;
  width:var(--_s); height:var(--_s); flex:none;
  border-radius:var(--radius-md); border:var(--border-width) solid transparent;
  background:transparent; color:var(--text-secondary); cursor:pointer;
  transition:var(--transition-colors), transform var(--duration-fast) var(--ease-standard);
}
.ih-iconbtn:hover:not([disabled]){ background:var(--bg-hover); color:var(--text-primary); }
.ih-iconbtn:active:not([disabled]){ background:var(--bg-active); transform:translateY(0.5px); }
.ih-iconbtn:focus-visible{ outline:none; box-shadow:var(--ring); }
.ih-iconbtn[disabled]{ cursor:not-allowed; opacity:.5; }
.ih-iconbtn--sm{ --_s:var(--control-sm); border-radius:var(--radius-sm); }
.ih-iconbtn--lg{ --_s:var(--control-lg); }
.ih-iconbtn--solid{ background:var(--accent); color:var(--accent-on); }
.ih-iconbtn--solid:hover:not([disabled]){ background:var(--accent-hover); color:var(--accent-on); }
.ih-iconbtn--outline{ border-color:var(--border-default); color:var(--text-primary); background:var(--bg-surface); box-shadow:var(--shadow-xs); }
.ih-iconbtn--outline:hover:not([disabled]){ background:var(--bg-hover); border-color:var(--border-strong); }
`;
if (typeof document !== "undefined" && !document.getElementById("ih-iconbtn-css")) {
  const s = document.createElement("style");
  s.id = "ih-iconbtn-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}
function IconButton({
  icon,
  "aria-label": ariaLabel,
  variant = "ghost",
  size = "md",
  disabled = false,
  className = "",
  ...rest
}) {
  const classes = ["ih-iconbtn", variant !== "ghost" ? `ih-iconbtn--${variant}` : "", size !== "md" ? `ih-iconbtn--${size}` : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    className: classes,
    "aria-label": ariaLabel,
    disabled: disabled
  }, rest), icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ih-avatar{
  position:relative; display:inline-flex; align-items:center; justify-content:center; flex:none;
  width:36px; height:36px; border-radius:var(--radius-full); overflow:hidden;
  background:var(--accent-subtle); color:var(--accent);
  font-family:var(--font-sans); font-weight:var(--fw-semibold); font-size:var(--text-sm);
  letter-spacing:0; user-select:none;
}
.ih-avatar--square{ border-radius:var(--radius-md); }
.ih-avatar--xs{ width:20px; height:20px; font-size:10px; }
.ih-avatar--sm{ width:28px; height:28px; font-size:var(--text-xs); }
.ih-avatar--lg{ width:48px; height:48px; font-size:var(--text-md); }
.ih-avatar--xl{ width:64px; height:64px; font-size:var(--text-lg); }
.ih-avatar img{ width:100%; height:100%; object-fit:cover; display:block; }
.ih-avatar__status{ position:absolute; right:-1px; bottom:-1px; width:30%; height:30%; min-width:8px; min-height:8px;
  border-radius:var(--radius-full); border:2px solid var(--bg-surface); }
.ih-avatar__status--online{ background:var(--success); }
.ih-avatar__status--busy{ background:var(--danger); }
.ih-avatar__status--away{ background:var(--warning); }
.ih-avatar__status--offline{ background:var(--neutral-400); }

.ih-avatar-group{ display:inline-flex; }
.ih-avatar-group .ih-avatar{ box-shadow:0 0 0 2px var(--bg-surface); margin-left:-8px; }
.ih-avatar-group .ih-avatar:first-child{ margin-left:0; }
`;
if (typeof document !== "undefined" && !document.getElementById("ih-avatar-css")) {
  const s = document.createElement("style");
  s.id = "ih-avatar-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}
function initials(name = "") {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
function Avatar({
  src,
  name = "",
  size = "md",
  square = false,
  status,
  className = "",
  ...rest
}) {
  const classes = ["ih-avatar", size !== "md" ? `ih-avatar--${size}` : "", square ? "ih-avatar--square" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: classes,
    title: name || undefined
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : /*#__PURE__*/React.createElement("span", null, initials(name)), status && /*#__PURE__*/React.createElement("span", {
    className: `ih-avatar__status ih-avatar__status--${status}`,
    "aria-hidden": "true"
  }));
}
function AvatarGroup({
  children,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `ih-avatar-group ${className}`.trim()
  }, rest), children);
}
Object.assign(__ds_scope, { Avatar, AvatarGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ih-badge{
  display:inline-flex; align-items:center; gap:var(--space-1); font-family:var(--font-sans);
  font-size:var(--text-xs); font-weight:var(--fw-medium); line-height:1; letter-spacing:0.01em;
  padding:3px var(--space-2); border-radius:var(--radius-sm);
  border:var(--border-width) solid transparent; white-space:nowrap;
}
.ih-badge--pill{ border-radius:var(--radius-full); padding-left:var(--space-2-5); padding-right:var(--space-2-5); }
.ih-badge__dot{ width:6px; height:6px; border-radius:var(--radius-full); background:currentColor; }
.ih-badge svg{ width:12px; height:12px; }

.ih-badge--neutral{ background:var(--neutral-100); color:var(--neutral-700); }
.ih-badge--accent{  background:var(--accent-subtle); color:var(--accent); }
.ih-badge--success{ background:var(--success-subtle); color:var(--success); }
.ih-badge--warning{ background:var(--warning-subtle); color:var(--warning); }
.ih-badge--danger{  background:var(--danger-subtle); color:var(--danger); }
.ih-badge--info{    background:var(--info-subtle); color:var(--info); }

.ih-badge--solid.ih-badge--neutral{ background:var(--neutral-700); color:#fff; }
.ih-badge--solid.ih-badge--accent{  background:var(--accent); color:var(--accent-on); }
.ih-badge--solid.ih-badge--success{ background:var(--success); color:#fff; }
.ih-badge--solid.ih-badge--warning{ background:var(--warning); color:#fff; }
.ih-badge--solid.ih-badge--danger{  background:var(--danger); color:#fff; }

.ih-badge--outline{ background:transparent; }
.ih-badge--outline.ih-badge--neutral{ border-color:var(--border-default); color:var(--text-secondary); }
.ih-badge--outline.ih-badge--accent{ border-color:var(--accent); color:var(--accent); }
.ih-badge--outline.ih-badge--success{ border-color:var(--success); color:var(--success); }
.ih-badge--outline.ih-badge--warning{ border-color:var(--warning); color:var(--warning); }
.ih-badge--outline.ih-badge--danger{ border-color:var(--danger); color:var(--danger); }
`;
if (typeof document !== "undefined" && !document.getElementById("ih-badge-css")) {
  const s = document.createElement("style");
  s.id = "ih-badge-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Badge({
  children,
  color = "neutral",
  variant = "soft",
  pill = false,
  dot = false,
  icon,
  className = "",
  ...rest
}) {
  const classes = ["ih-badge", `ih-badge--${color}`, variant !== "soft" ? `ih-badge--${variant}` : "", pill ? "ih-badge--pill" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: classes
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "ih-badge__dot",
    "aria-hidden": "true"
  }), icon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ih-card{
  background:var(--bg-surface); border:var(--border-width) solid var(--border-subtle);
  border-radius:var(--radius-lg); box-shadow:var(--shadow-sm); color:var(--text-primary);
  font-family:var(--font-sans); overflow:hidden;
}
.ih-card--flat{ box-shadow:none; }
.ih-card--ghost{ box-shadow:none; border-style:dashed; background:transparent; }
.ih-card--interactive{ cursor:pointer; transition:var(--transition-colors), transform var(--duration-base) var(--ease-out); }
.ih-card--interactive:hover{ border-color:var(--border-strong); box-shadow:var(--shadow-md); transform:translateY(-1px); }
.ih-card--pad-md{ padding:var(--space-5); }
.ih-card--pad-lg{ padding:var(--space-6); }
.ih-card__header{ display:flex; align-items:flex-start; justify-content:space-between; gap:var(--space-4);
  padding:var(--space-4) var(--space-5); border-bottom:var(--border-width) solid var(--border-subtle); }
.ih-card__titles{ display:flex; flex-direction:column; gap:2px; min-width:0; }
.ih-card__title{ font-size:var(--text-lg); font-weight:var(--fw-semibold); letter-spacing:var(--tracking-tight); margin:0; }
.ih-card__subtitle{ font-size:var(--text-sm); color:var(--text-tertiary); margin:0; }
.ih-card__body{ padding:var(--space-5); }
.ih-card__footer{ display:flex; align-items:center; justify-content:flex-end; gap:var(--space-3);
  padding:var(--space-4) var(--space-5); border-top:var(--border-width) solid var(--border-subtle); background:var(--bg-surface-2); }
`;
if (typeof document !== "undefined" && !document.getElementById("ih-card-css")) {
  const s = document.createElement("style");
  s.id = "ih-card-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Card({
  title,
  subtitle,
  actions,
  footer,
  children,
  variant = "default",
  interactive = false,
  padding,
  className = "",
  ...rest
}) {
  const hasChrome = title || subtitle || actions || footer;
  const padClass = padding ? `ih-card--pad-${padding}` : !hasChrome ? "ih-card--pad-md" : "";
  const classes = ["ih-card", variant !== "default" ? `ih-card--${variant}` : "", interactive ? "ih-card--interactive" : "", padClass, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, rest), (title || subtitle || actions) && /*#__PURE__*/React.createElement("div", {
    className: "ih-card__header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ih-card__titles"
  }, title && /*#__PURE__*/React.createElement("h3", {
    className: "ih-card__title"
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    className: "ih-card__subtitle"
  }, subtitle)), actions && /*#__PURE__*/React.createElement("div", {
    className: "ih-card__actions"
  }, actions)), children && (hasChrome ? /*#__PURE__*/React.createElement("div", {
    className: "ih-card__body"
  }, children) : children), footer && /*#__PURE__*/React.createElement("div", {
    className: "ih-card__footer"
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/StatusDot.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ih-status{ display:inline-flex; align-items:center; gap:var(--space-2); font-family:var(--font-sans);
  font-size:var(--text-sm); color:var(--text-secondary); white-space:nowrap; }
.ih-status__dot{ position:relative; width:8px; height:8px; flex:none; border-radius:var(--radius-full); background:var(--neutral-400); }
.ih-status--active .ih-status__dot{ background:var(--success); }
.ih-status--error  .ih-status__dot{ background:var(--danger); }
.ih-status--warning .ih-status__dot{ background:var(--warning); }
.ih-status--paused .ih-status__dot{ background:var(--neutral-400); }
.ih-status--pending .ih-status__dot{ background:var(--accent-2); }
.ih-status--pulse .ih-status__dot::after{
  content:""; position:absolute; inset:0; border-radius:inherit; background:inherit;
  animation:ih-status-pulse 1.8s var(--ease-out) infinite; }
@keyframes ih-status-pulse{ 0%{ transform:scale(1); opacity:.55; } 70%,100%{ transform:scale(2.6); opacity:0; } }
@media (prefers-reduced-motion: reduce){ .ih-status--pulse .ih-status__dot::after{ animation:none; } }
`;
if (typeof document !== "undefined" && !document.getElementById("ih-status-css")) {
  const s = document.createElement("style");
  s.id = "ih-status-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}
const DEFAULT_LABELS = {
  active: "Active",
  error: "Error",
  warning: "Degraded",
  paused: "Paused",
  pending: "Syncing"
};
function StatusDot({
  status = "paused",
  label,
  pulse,
  className = "",
  ...rest
}) {
  const showPulse = pulse ?? (status === "active" || status === "pending");
  const text = label ?? DEFAULT_LABELS[status];
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `ih-status ih-status--${status}${showPulse ? " ih-status--pulse" : ""} ${className}`.trim()
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "ih-status__dot",
    "aria-hidden": "true"
  }), text && /*#__PURE__*/React.createElement("span", null, text));
}
Object.assign(__ds_scope, { StatusDot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/StatusDot.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ih-alert{
  display:flex; gap:var(--space-3); padding:var(--space-3) var(--space-4);
  border-radius:var(--radius-md); border:var(--border-width) solid transparent;
  font-family:var(--font-sans); font-size:var(--text-base); color:var(--text-primary);
}
.ih-alert__icon{ flex:none; display:inline-flex; margin-top:1px; }
.ih-alert__icon svg{ width:18px; height:18px; }
.ih-alert__body{ display:flex; flex-direction:column; gap:2px; min-width:0; flex:1; }
.ih-alert__title{ font-weight:var(--fw-semibold); letter-spacing:var(--tracking-tight); }
.ih-alert__msg{ color:var(--text-secondary); font-size:var(--text-sm); line-height:var(--leading-snug); }
.ih-alert__close{ flex:none; background:none; border:0; color:var(--text-tertiary); cursor:pointer;
  display:inline-flex; padding:2px; border-radius:var(--radius-sm); transition:var(--transition-colors); }
.ih-alert__close:hover{ background:var(--bg-hover); color:var(--text-primary); }

.ih-alert--info{    background:var(--info-subtle);    border-color:color-mix(in srgb, var(--info) 28%, transparent); }
.ih-alert--info    .ih-alert__icon{ color:var(--info); }
.ih-alert--success{ background:var(--success-subtle); border-color:color-mix(in srgb, var(--success) 28%, transparent); }
.ih-alert--success .ih-alert__icon{ color:var(--success); }
.ih-alert--warning{ background:var(--warning-subtle); border-color:color-mix(in srgb, var(--warning) 28%, transparent); }
.ih-alert--warning .ih-alert__icon{ color:var(--warning); }
.ih-alert--danger{  background:var(--danger-subtle);  border-color:color-mix(in srgb, var(--danger) 28%, transparent); }
.ih-alert--danger  .ih-alert__icon{ color:var(--danger); }
`;
if (typeof document !== "undefined" && !document.getElementById("ih-alert-css")) {
  const s = document.createElement("style");
  s.id = "ih-alert-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}
const ICONS = {
  info: /*#__PURE__*/React.createElement("path", {
    d: "M12 16v-4M12 8h.01"
  }),
  success: /*#__PURE__*/React.createElement("path", {
    d: "m9 12 2 2 4-4"
  }),
  warning: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 9v4M12 17h.01"
  })),
  danger: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 9v4M12 17h.01"
  }))
};
const RING = {
  info: /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }),
  success: /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }),
  warning: /*#__PURE__*/React.createElement("path", {
    d: "M10.3 3.8 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.8a2 2 0 0 0-3.4 0Z"
  }),
  danger: /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  })
};
function Alert({
  variant = "info",
  title,
  children,
  icon,
  onClose,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `ih-alert ih-alert--${variant} ${className}`.trim(),
    role: "alert"
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "ih-alert__icon",
    "aria-hidden": "true"
  }, icon || /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, RING[variant], ICONS[variant])), /*#__PURE__*/React.createElement("div", {
    className: "ih-alert__body"
  }, title && /*#__PURE__*/React.createElement("span", {
    className: "ih-alert__title"
  }, title), children && /*#__PURE__*/React.createElement("span", {
    className: "ih-alert__msg"
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    className: "ih-alert__close",
    onClick: onClose,
    "aria-label": "Dismiss"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ih-progress{ font-family:var(--font-sans); display:flex; flex-direction:column; gap:var(--space-1-5); }
.ih-progress__top{ display:flex; justify-content:space-between; align-items:baseline; gap:var(--space-3); }
.ih-progress__label{ font-size:var(--text-sm); font-weight:var(--fw-medium); color:var(--text-primary); }
.ih-progress__value{ font-size:var(--text-xs); color:var(--text-tertiary); font-family:var(--font-mono); }
.ih-progress__track{ height:8px; border-radius:var(--radius-full); background:var(--bg-sunken); overflow:hidden; }
.ih-progress--sm .ih-progress__track{ height:5px; }
.ih-progress__fill{ height:100%; border-radius:inherit; background:var(--accent);
  transition:width var(--duration-slow) var(--ease-out); }
.ih-progress--success .ih-progress__fill{ background:var(--success); }
.ih-progress--warning .ih-progress__fill{ background:var(--warning); }
.ih-progress--danger .ih-progress__fill{ background:var(--danger); }
.ih-progress--indeterminate .ih-progress__fill{ width:40% !important; animation:ih-progress-slide 1.3s var(--ease-in-out) infinite; }
@keyframes ih-progress-slide{ 0%{ margin-left:-40%; } 100%{ margin-left:100%; } }
@media (prefers-reduced-motion: reduce){ .ih-progress--indeterminate .ih-progress__fill{ animation-duration:2.6s; } }
`;
if (typeof document !== "undefined" && !document.getElementById("ih-progress-css")) {
  const s = document.createElement("style");
  s.id = "ih-progress-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}
function ProgressBar({
  value = 0,
  max = 100,
  label,
  showValue = false,
  tone = "accent",
  size = "md",
  indeterminate = false,
  className = "",
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const classes = ["ih-progress", tone !== "accent" ? `ih-progress--${tone}` : "", size !== "md" ? `ih-progress--${size}` : "", indeterminate ? "ih-progress--indeterminate" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, rest), (label || showValue) && /*#__PURE__*/React.createElement("div", {
    className: "ih-progress__top"
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "ih-progress__label"
  }, label), showValue && !indeterminate && /*#__PURE__*/React.createElement("span", {
    className: "ih-progress__value"
  }, Math.round(pct), "%")), /*#__PURE__*/React.createElement("div", {
    className: "ih-progress__track",
    role: "progressbar",
    "aria-valuenow": indeterminate ? undefined : Math.round(pct),
    "aria-valuemin": 0,
    "aria-valuemax": 100
  }, /*#__PURE__*/React.createElement("div", {
    className: "ih-progress__fill",
    style: {
      width: indeterminate ? undefined : `${pct}%`
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Spinner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ih-spinner{ display:inline-block; width:var(--_sz,20px); height:var(--_sz,20px); flex:none;
  border:var(--_bw,2px) solid color-mix(in srgb, currentColor 22%, transparent);
  border-top-color:currentColor; border-radius:var(--radius-full);
  animation:ih-spin .65s linear infinite; color:var(--accent); }
.ih-spinner--sm{ --_sz:14px; --_bw:2px; }
.ih-spinner--lg{ --_sz:28px; --_bw:3px; }
.ih-spinner--neutral{ color:var(--text-tertiary); }
@keyframes ih-spin{ to{ transform:rotate(360deg); } }
@media (prefers-reduced-motion: reduce){ .ih-spinner{ animation-duration:1.4s; } }
`;
if (typeof document !== "undefined" && !document.getElementById("ih-spinner-css")) {
  const s = document.createElement("style");
  s.id = "ih-spinner-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Spinner({
  size = "md",
  tone = "accent",
  label = "Loading",
  className = "",
  ...rest
}) {
  const classes = ["ih-spinner", size !== "md" ? `ih-spinner--${size}` : "", tone !== "accent" ? `ih-spinner--${tone}` : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: classes,
    role: "status",
    "aria-label": label
  }, rest));
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ih-tt-wrap{ position:relative; display:inline-flex; }
.ih-tt{
  position:absolute; z-index:50; pointer-events:none;
  background:var(--bg-inverse); color:var(--text-inverse);
  font-family:var(--font-sans); font-size:var(--text-xs); font-weight:var(--fw-medium);
  line-height:1.3; padding:var(--space-1-5) var(--space-2-5); border-radius:var(--radius-sm);
  box-shadow:var(--shadow-md); white-space:nowrap; max-width:240px; white-space:normal;
  opacity:0; transform:translateY(2px) scale(.97); transition:opacity var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out);
}
.ih-tt--show{ opacity:1; transform:translateY(0) scale(1); }
.ih-tt--top{ bottom:calc(100% + 8px); left:50%; transform-origin:bottom center; translate:-50% 0; }
.ih-tt--bottom{ top:calc(100% + 8px); left:50%; transform-origin:top center; translate:-50% 0; }
.ih-tt--left{ right:calc(100% + 8px); top:50%; transform-origin:center right; translate:0 -50%; }
.ih-tt--right{ left:calc(100% + 8px); top:50%; transform-origin:center left; translate:0 -50%; }
.ih-tt__arrow{ position:absolute; width:7px; height:7px; background:inherit; transform:rotate(45deg); }
.ih-tt--top .ih-tt__arrow{ bottom:-3px; left:50%; margin-left:-3.5px; }
.ih-tt--bottom .ih-tt__arrow{ top:-3px; left:50%; margin-left:-3.5px; }
.ih-tt--left .ih-tt__arrow{ right:-3px; top:50%; margin-top:-3.5px; }
.ih-tt--right .ih-tt__arrow{ left:-3px; top:50%; margin-top:-3.5px; }
`;
if (typeof document !== "undefined" && !document.getElementById("ih-tooltip-css")) {
  const s = document.createElement("style");
  s.id = "ih-tooltip-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Tooltip({
  content,
  side = "top",
  children,
  delay = 120,
  className = "",
  ...rest
}) {
  const [show, setShow] = React.useState(false);
  const timer = React.useRef(null);
  const open = () => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setShow(true), delay);
  };
  const close = () => {
    clearTimeout(timer.current);
    setShow(false);
  };
  if (!content) return children;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `ih-tt-wrap ${className}`.trim(),
    onMouseEnter: open,
    onMouseLeave: close,
    onFocus: open,
    onBlur: close
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    className: `ih-tt ih-tt--${side}${show ? " ih-tt--show" : ""}`,
    role: "tooltip"
  }, content, /*#__PURE__*/React.createElement("span", {
    className: "ih-tt__arrow",
    "aria-hidden": "true"
  })));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ih-check{ display:inline-flex; align-items:flex-start; gap:var(--space-2-5); font-family:var(--font-sans);
  font-size:var(--text-base); color:var(--text-primary); cursor:pointer; user-select:none; }
.ih-check input{ position:absolute; opacity:0; width:0; height:0; }
.ih-check__box{
  flex:none; width:18px; height:18px; margin-top:1px; border-radius:var(--radius-xs);
  border:var(--border-width-2) solid var(--border-strong); background:var(--bg-surface);
  display:inline-flex; align-items:center; justify-content:center; color:#fff;
  transition:var(--transition-colors);
}
.ih-check__box svg{ width:13px; height:13px; opacity:0; transform:scale(.7); transition:all var(--duration-fast) var(--ease-out); }
.ih-check input:checked + .ih-check__box,
.ih-check input:indeterminate + .ih-check__box{ background:var(--accent); border-color:var(--accent); }
.ih-check input:checked + .ih-check__box svg,
.ih-check input:indeterminate + .ih-check__box svg{ opacity:1; transform:scale(1); }
.ih-check input:focus-visible + .ih-check__box{ box-shadow:var(--ring); }
.ih-check:hover input:not(:checked):not(:disabled) + .ih-check__box{ border-color:var(--accent); }
.ih-check input:disabled ~ *{ opacity:.5; }
.ih-check input:disabled + .ih-check__box{ background:var(--bg-sunken); }
.ih-check__body{ display:flex; flex-direction:column; gap:2px; }
.ih-check__desc{ font-size:var(--text-sm); color:var(--text-tertiary); }
`;
if (typeof document !== "undefined" && !document.getElementById("ih-check-css")) {
  const s = document.createElement("style");
  s.id = "ih-check-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Checkbox({
  label,
  description,
  indeterminate = false,
  className = "",
  id,
  ...rest
}) {
  const ref = React.useRef(null);
  const autoId = React.useId();
  React.useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate;
  }, [indeterminate]);
  return /*#__PURE__*/React.createElement("label", {
    className: `ih-check ${className}`.trim(),
    htmlFor: id || autoId
  }, /*#__PURE__*/React.createElement("input", _extends({
    ref: ref,
    id: id || autoId,
    type: "checkbox"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "ih-check__box",
    "aria-hidden": "true"
  }, indeterminate ? /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  })) : /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))), (label || description) && /*#__PURE__*/React.createElement("span", {
    className: "ih-check__body"
  }, label && /*#__PURE__*/React.createElement("span", null, label), description && /*#__PURE__*/React.createElement("span", {
    className: "ih-check__desc"
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ih-field{ display:flex; flex-direction:column; gap:var(--space-1-5); font-family:var(--font-sans); }
.ih-field__label{ font-size:var(--text-sm); font-weight:var(--fw-medium); color:var(--text-primary); }
.ih-field__req{ color:var(--danger); margin-left:2px; }
.ih-field__hint{ font-size:var(--text-xs); color:var(--text-tertiary); }
.ih-field__hint--error{ color:var(--danger); }

.ih-input-wrap{ position:relative; display:flex; align-items:center; }
.ih-input{
  width:100%; height:var(--control-md); box-sizing:border-box;
  padding:0 var(--space-3); font-family:var(--font-sans); font-size:var(--text-base);
  color:var(--text-primary); background:var(--bg-surface);
  border:var(--border-width) solid var(--border-default); border-radius:var(--radius-md);
  transition:var(--transition-colors); appearance:none;
}
.ih-input::placeholder{ color:var(--text-tertiary); }
.ih-input:hover:not(:disabled):not(:focus){ border-color:var(--border-strong); }
.ih-input:focus{ outline:none; border-color:var(--border-focus); box-shadow:var(--ring); }
.ih-input:disabled{ background:var(--bg-sunken); color:var(--text-disabled); cursor:not-allowed; }
.ih-input--lg{ height:var(--control-lg); font-size:var(--text-md); }
.ih-input--sm{ height:var(--control-sm); font-size:var(--text-sm); padding:0 var(--space-2-5); }
.ih-input--error{ border-color:var(--danger); }
.ih-input--error:focus{ box-shadow:0 0 0 3px color-mix(in srgb, var(--danger) 30%, transparent); }
.ih-input--with-left{ padding-left:calc(var(--space-3) + 22px); }
.ih-input--with-right{ padding-right:calc(var(--space-3) + 22px); }
.ih-input__adorn{ position:absolute; display:inline-flex; color:var(--text-tertiary); pointer-events:none; }
.ih-input__adorn--left{ left:var(--space-3); }
.ih-input__adorn--right{ right:var(--space-3); }
`;
if (typeof document !== "undefined" && !document.getElementById("ih-input-css")) {
  const s = document.createElement("style");
  s.id = "ih-input-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Input({
  label,
  hint,
  error,
  required = false,
  size = "md",
  leftIcon,
  rightIcon,
  id,
  className = "",
  ...rest
}) {
  const autoId = React.useId();
  const fieldId = id || autoId;
  const inputClasses = ["ih-input", size !== "md" ? `ih-input--${size}` : "", error ? "ih-input--error" : "", leftIcon ? "ih-input--with-left" : "", rightIcon ? "ih-input--with-right" : "", className].filter(Boolean).join(" ");
  const field = /*#__PURE__*/React.createElement("span", {
    className: "ih-input-wrap"
  }, leftIcon && /*#__PURE__*/React.createElement("span", {
    className: "ih-input__adorn ih-input__adorn--left"
  }, leftIcon), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    className: inputClasses,
    "aria-invalid": !!error || undefined
  }, rest)), rightIcon && /*#__PURE__*/React.createElement("span", {
    className: "ih-input__adorn ih-input__adorn--right"
  }, rightIcon));
  if (!label && !hint && !error) return field;
  return /*#__PURE__*/React.createElement("span", {
    className: "ih-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "ih-field__label",
    htmlFor: fieldId
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "ih-field__req"
  }, "*")), field, (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: `ih-field__hint${error ? " ih-field__hint--error" : ""}`
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ih-radio{ display:inline-flex; align-items:flex-start; gap:var(--space-2-5); font-family:var(--font-sans);
  font-size:var(--text-base); color:var(--text-primary); cursor:pointer; user-select:none; }
.ih-radio input{ position:absolute; opacity:0; width:0; height:0; }
.ih-radio__dot{
  flex:none; width:18px; height:18px; margin-top:1px; border-radius:var(--radius-full);
  border:var(--border-width-2) solid var(--border-strong); background:var(--bg-surface);
  display:inline-flex; align-items:center; justify-content:center; transition:var(--transition-colors);
}
.ih-radio__dot::after{ content:""; width:8px; height:8px; border-radius:var(--radius-full);
  background:#fff; transform:scale(0); transition:transform var(--duration-fast) var(--ease-out); }
.ih-radio input:checked + .ih-radio__dot{ background:var(--accent); border-color:var(--accent); }
.ih-radio input:checked + .ih-radio__dot::after{ transform:scale(1); }
.ih-radio input:focus-visible + .ih-radio__dot{ box-shadow:var(--ring); }
.ih-radio:hover input:not(:checked):not(:disabled) + .ih-radio__dot{ border-color:var(--accent); }
.ih-radio input:disabled ~ *{ opacity:.5; }
.ih-radio__body{ display:flex; flex-direction:column; gap:2px; }
.ih-radio__desc{ font-size:var(--text-sm); color:var(--text-tertiary); }
.ih-radio-group{ display:flex; flex-direction:column; gap:var(--space-3); }
.ih-radio-group--row{ flex-direction:row; gap:var(--space-5); }
`;
if (typeof document !== "undefined" && !document.getElementById("ih-radio-css")) {
  const s = document.createElement("style");
  s.id = "ih-radio-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Radio({
  label,
  description,
  className = "",
  id,
  ...rest
}) {
  const autoId = React.useId();
  return /*#__PURE__*/React.createElement("label", {
    className: `ih-radio ${className}`.trim(),
    htmlFor: id || autoId
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: id || autoId,
    type: "radio"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "ih-radio__dot",
    "aria-hidden": "true"
  }), (label || description) && /*#__PURE__*/React.createElement("span", {
    className: "ih-radio__body"
  }, label && /*#__PURE__*/React.createElement("span", null, label), description && /*#__PURE__*/React.createElement("span", {
    className: "ih-radio__desc"
  }, description)));
}
function RadioGroup({
  children,
  row = false,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "radiogroup",
    className: `ih-radio-group${row ? " ih-radio-group--row" : ""} ${className}`.trim()
  }, rest), children);
}
Object.assign(__ds_scope, { Radio, RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ih-select-wrap{ position:relative; display:flex; align-items:center; }
.ih-select{
  width:100%; height:var(--control-md); box-sizing:border-box;
  padding:0 calc(var(--space-3) + 18px) 0 var(--space-3);
  font-family:var(--font-sans); font-size:var(--text-base); color:var(--text-primary);
  background:var(--bg-surface); border:var(--border-width) solid var(--border-default);
  border-radius:var(--radius-md); transition:var(--transition-colors);
  appearance:none; cursor:pointer;
}
.ih-select:hover:not(:disabled):not(:focus){ border-color:var(--border-strong); }
.ih-select:focus{ outline:none; border-color:var(--border-focus); box-shadow:var(--ring); }
.ih-select:disabled{ background:var(--bg-sunken); color:var(--text-disabled); cursor:not-allowed; }
.ih-select--sm{ height:var(--control-sm); font-size:var(--text-sm); }
.ih-select--lg{ height:var(--control-lg); font-size:var(--text-md); }
.ih-select--error{ border-color:var(--danger); }
.ih-select__chev{ position:absolute; right:var(--space-3); display:inline-flex; color:var(--text-tertiary); pointer-events:none; }
`;
if (typeof document !== "undefined" && !document.getElementById("ih-select-css")) {
  const s = document.createElement("style");
  s.id = "ih-select-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}
const Chevron = () => /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "m6 9 6 6 6-6"
}));
function Select({
  label,
  hint,
  error,
  required = false,
  size = "md",
  options,
  placeholder,
  children,
  id,
  className = "",
  ...rest
}) {
  const autoId = React.useId();
  const fieldId = id || autoId;
  const classes = ["ih-select", size !== "md" ? `ih-select--${size}` : "", error ? "ih-select--error" : "", className].filter(Boolean).join(" ");
  const control = /*#__PURE__*/React.createElement("span", {
    className: "ih-select-wrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    className: classes,
    "aria-invalid": !!error || undefined
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options ? options.map(o => {
    const opt = typeof o === "string" ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value,
      disabled: opt.disabled
    }, opt.label);
  }) : children), /*#__PURE__*/React.createElement("span", {
    className: "ih-select__chev"
  }, /*#__PURE__*/React.createElement(Chevron, null)));
  if (!label && !hint && !error) return control;
  return /*#__PURE__*/React.createElement("span", {
    className: "ih-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "ih-field__label",
    htmlFor: fieldId
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "ih-field__req"
  }, "*")), control, (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: `ih-field__hint${error ? " ih-field__hint--error" : ""}`
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ih-switch{ display:inline-flex; align-items:center; gap:var(--space-2-5); font-family:var(--font-sans);
  font-size:var(--text-base); color:var(--text-primary); cursor:pointer; user-select:none; }
.ih-switch input{ position:absolute; opacity:0; width:0; height:0; }
.ih-switch__track{
  position:relative; flex:none; width:36px; height:20px; border-radius:var(--radius-full);
  background:var(--neutral-300); transition:var(--transition-colors);
}
.ih-switch__track::after{ content:""; position:absolute; top:2px; left:2px; width:16px; height:16px;
  border-radius:var(--radius-full); background:#fff; box-shadow:var(--shadow-sm);
  transition:transform var(--duration-base) var(--ease-out); }
.ih-switch input:checked + .ih-switch__track{ background:var(--accent); }
.ih-switch input:checked + .ih-switch__track::after{ transform:translateX(16px); }
.ih-switch input:focus-visible + .ih-switch__track{ box-shadow:var(--ring); }
.ih-switch input:disabled ~ *{ opacity:.5; cursor:not-allowed; }
.ih-switch--sm .ih-switch__track{ width:30px; height:17px; }
.ih-switch--sm .ih-switch__track::after{ width:13px; height:13px; }
.ih-switch--sm input:checked + .ih-switch__track::after{ transform:translateX(13px); }
[data-theme="dark"] .ih-switch__track, .dark .ih-switch__track{ background:var(--neutral-700); }
`;
if (typeof document !== "undefined" && !document.getElementById("ih-switch-css")) {
  const s = document.createElement("style");
  s.id = "ih-switch-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Switch({
  label,
  size = "md",
  className = "",
  id,
  ...rest
}) {
  const autoId = React.useId();
  return /*#__PURE__*/React.createElement("label", {
    className: `ih-switch${size === "sm" ? " ih-switch--sm" : ""} ${className}`.trim(),
    htmlFor: id || autoId
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: id || autoId,
    type: "checkbox",
    role: "switch"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "ih-switch__track",
    "aria-hidden": "true"
  }), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ih-textarea{
  width:100%; box-sizing:border-box; min-height:80px; resize:vertical;
  padding:var(--space-2-5) var(--space-3); font-family:var(--font-sans); font-size:var(--text-base);
  line-height:var(--leading-normal); color:var(--text-primary); background:var(--bg-surface);
  border:var(--border-width) solid var(--border-default); border-radius:var(--radius-md);
  transition:var(--transition-colors);
}
.ih-textarea::placeholder{ color:var(--text-tertiary); }
.ih-textarea:hover:not(:disabled):not(:focus){ border-color:var(--border-strong); }
.ih-textarea:focus{ outline:none; border-color:var(--border-focus); box-shadow:var(--ring); }
.ih-textarea:disabled{ background:var(--bg-sunken); color:var(--text-disabled); cursor:not-allowed; }
.ih-textarea--mono{ font-family:var(--font-mono); font-size:var(--text-sm); }
.ih-textarea--error{ border-color:var(--danger); }
`;
if (typeof document !== "undefined" && !document.getElementById("ih-textarea-css")) {
  const s = document.createElement("style");
  s.id = "ih-textarea-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Textarea({
  label,
  hint,
  error,
  required = false,
  mono = false,
  id,
  className = "",
  ...rest
}) {
  const autoId = React.useId();
  const fieldId = id || autoId;
  const classes = ["ih-textarea", mono ? "ih-textarea--mono" : "", error ? "ih-textarea--error" : "", className].filter(Boolean).join(" ");
  const ta = /*#__PURE__*/React.createElement("textarea", _extends({
    id: fieldId,
    className: classes,
    "aria-invalid": !!error || undefined
  }, rest));
  if (!label && !hint && !error) return ta;
  return /*#__PURE__*/React.createElement("span", {
    className: "ih-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "ih-field__label",
    htmlFor: fieldId
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "ih-field__req"
  }, "*")), ta, (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: `ih-field__hint${error ? " ih-field__hint--error" : ""}`
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumbs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ih-crumbs{ display:flex; align-items:center; gap:var(--space-1); font-family:var(--font-sans);
  font-size:var(--text-sm); color:var(--text-tertiary); flex-wrap:wrap; }
.ih-crumbs__item{ display:inline-flex; align-items:center; gap:var(--space-1-5); color:var(--text-secondary);
  text-decoration:none; padding:2px var(--space-1-5); border-radius:var(--radius-sm); transition:var(--transition-colors); }
a.ih-crumbs__item:hover{ color:var(--text-primary); background:var(--bg-hover); }
.ih-crumbs__item svg{ width:14px; height:14px; }
.ih-crumbs__item--current{ color:var(--text-primary); font-weight:var(--fw-medium); }
.ih-crumbs__sep{ display:inline-flex; color:var(--border-strong); }
.ih-crumbs__sep svg{ width:14px; height:14px; }
`;
if (typeof document !== "undefined" && !document.getElementById("ih-crumbs-css")) {
  const s = document.createElement("style");
  s.id = "ih-crumbs-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}
const Chevron = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "m9 18 6-6-6-6"
}));
function Breadcrumbs({
  items = [],
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: `ih-crumbs ${className}`.trim(),
    "aria-label": "Breadcrumb"
  }, rest), items.map((item, i) => {
    const isLast = i === items.length - 1;
    const Tag = item.href && !isLast ? "a" : "span";
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, /*#__PURE__*/React.createElement(Tag, {
      className: `ih-crumbs__item${isLast ? " ih-crumbs__item--current" : ""}`,
      href: !isLast ? item.href : undefined,
      "aria-current": isLast ? "page" : undefined
    }, item.icon, item.label), !isLast && /*#__PURE__*/React.createElement("span", {
      className: "ih-crumbs__sep"
    }, /*#__PURE__*/React.createElement(Chevron, null)));
  }));
}
Object.assign(__ds_scope, { Breadcrumbs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumbs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ih-tabs{ font-family:var(--font-sans); }
.ih-tabs__list{ display:inline-flex; align-items:stretch; gap:var(--space-1); }
.ih-tabs--line .ih-tabs__list{ gap:var(--space-5); border-bottom:var(--border-width) solid var(--border-subtle); }
.ih-tab{
  position:relative; display:inline-flex; align-items:center; gap:var(--space-2);
  font-size:var(--text-base); font-weight:var(--fw-medium); color:var(--text-secondary);
  background:none; border:0; cursor:pointer; white-space:nowrap; transition:var(--transition-colors);
}
.ih-tab:focus-visible{ outline:none; box-shadow:var(--ring); border-radius:var(--radius-sm); }
.ih-tab__count{ font-size:var(--text-xs); font-family:var(--font-mono); padding:1px 6px; border-radius:var(--radius-full);
  background:var(--bg-sunken); color:var(--text-tertiary); }

/* line variant */
.ih-tabs--line .ih-tab{ padding:var(--space-3) 0; margin-bottom:-1px; border-bottom:2px solid transparent; }
.ih-tabs--line .ih-tab:hover{ color:var(--text-primary); }
.ih-tabs--line .ih-tab[aria-selected="true"]{ color:var(--accent); border-bottom-color:var(--accent); }
.ih-tabs--line .ih-tab[aria-selected="true"] .ih-tab__count{ background:var(--accent-subtle); color:var(--accent); }

/* pill / segmented variant */
.ih-tabs--pill .ih-tabs__list{ background:var(--bg-sunken); padding:var(--space-1); border-radius:var(--radius-md); }
.ih-tabs--pill .ih-tab{ padding:var(--space-1-5) var(--space-3); border-radius:var(--radius-sm); }
.ih-tabs--pill .ih-tab:hover{ color:var(--text-primary); }
.ih-tabs--pill .ih-tab[aria-selected="true"]{ color:var(--text-primary); background:var(--bg-surface); box-shadow:var(--shadow-xs); }
.ih-tab svg{ width:16px; height:16px; }
`;
if (typeof document !== "undefined" && !document.getElementById("ih-tabs-css")) {
  const s = document.createElement("style");
  s.id = "ih-tabs-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  variant = "line",
  className = "",
  ...rest
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? tabs[0]?.value);
  const active = isControlled ? value : internal;
  const select = v => {
    if (!isControlled) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `ih-tabs ih-tabs--${variant} ${className}`.trim()
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "ih-tabs__list",
    role: "tablist"
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.value,
    role: "tab",
    type: "button",
    "aria-selected": active === t.value,
    className: "ih-tab",
    onClick: () => select(t.value),
    disabled: t.disabled
  }, t.icon, t.label, t.count != null && /*#__PURE__*/React.createElement("span", {
    className: "ih-tab__count"
  }, t.count)))));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/kit-screens.jsx
try { (() => {
/* Integrations Hub — UI Kit screens. Reads shared bits from window.IHKit. */
const {
  Button,
  IconButton,
  Badge,
  Avatar,
  AvatarGroup,
  StatusDot,
  Card,
  Input,
  Switch,
  Tabs,
  Tooltip,
  Icon,
  CONNECTORS,
  CATALOG,
  RUNS,
  ConnectorLogo,
  PageHead
} = window.IHKit;
const runBadge = s => s === "success" ? /*#__PURE__*/React.createElement(Badge, {
  color: "success",
  dot: true
}, "Success") : s === "error" ? /*#__PURE__*/React.createElement(Badge, {
  color: "danger",
  dot: true
}, "Failed") : /*#__PURE__*/React.createElement(Badge, {
  color: "info",
  dot: true
}, "Running");

/* ---------- OVERVIEW ---------- */
function StatCard({
  icon,
  label,
  value,
  delta,
  tone = "accent"
}) {
  return /*#__PURE__*/React.createElement(Card, {
    padding: "md",
    style: {
      flex: 1,
      minWidth: 180
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 8,
      background: "var(--accent-subtle)",
      color: "var(--accent)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 17
  })), delta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontFamily: "var(--font-mono)",
      color: tone === "danger" ? "var(--danger)" : "var(--success)"
    }
  }, delta)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 700,
      letterSpacing: "-0.02em",
      color: "var(--text-primary)",
      marginTop: 12,
      fontFamily: "var(--font-mono)"
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-tertiary)",
      marginTop: 2
    }
  }, label));
}
function Overview({
  onOpen,
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
    title: "Overview",
    sub: "Tuesday, June 30 \xB7 all systems syncing",
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      leftIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "plus",
        size: 16
      }),
      onClick: () => onNav("catalog")
    }, "New integration")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-4)",
      marginBottom: "var(--space-5)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    icon: "boxes",
    label: "Active integrations",
    value: "5",
    delta: "+1"
  }), /*#__PURE__*/React.createElement(StatCard, {
    icon: "activity",
    label: "Events today",
    value: "8,371",
    delta: "+12%"
  }), /*#__PURE__*/React.createElement(StatCard, {
    icon: "circle-check",
    label: "Success rate",
    value: "99.2%",
    delta: "+0.3%"
  }), /*#__PURE__*/React.createElement(StatCard, {
    icon: "triangle-alert",
    label: "Errors (24h)",
    value: "3",
    delta: "\u22122",
    tone: "danger"
  })), /*#__PURE__*/React.createElement(Card, {
    title: "Recent runs",
    subtitle: "Latest workflow executions across all integrations",
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      rightIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 15
      }),
      onClick: () => onNav("runs")
    }, "View all")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "calc(-1 * var(--space-5))"
    }
  }, /*#__PURE__*/React.createElement(RunsTable, {
    rows: RUNS,
    onOpen: onOpen
  }))));
}

/* ---------- RUNS TABLE (shared) ---------- */
function RunsTable({
  rows,
  onOpen
}) {
  const th = {
    textAlign: "left",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    color: "var(--text-tertiary)",
    padding: "10px 20px",
    borderBottom: "1px solid var(--border-subtle)",
    background: "var(--bg-surface-2)"
  };
  const td = {
    padding: "12px 20px",
    borderBottom: "1px solid var(--border-subtle)",
    fontSize: 14,
    color: "var(--text-primary)",
    verticalAlign: "middle"
  };
  return /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Run"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Workflow"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Status"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Duration"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      textAlign: "right"
    }
  }, "When"))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: r.id,
    style: {
      cursor: "pointer"
    },
    onMouseEnter: e => e.currentTarget.style.background = "var(--bg-hover)",
    onMouseLeave: e => e.currentTarget.style.background = "transparent",
    onClick: () => onOpen && onOpen()
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      color: "var(--text-secondary)",
      borderBottom: i === rows.length - 1 ? "0" : td.borderBottom
    }
  }, r.id), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      fontWeight: 500,
      borderBottom: i === rows.length - 1 ? "0" : td.borderBottom
    }
  }, r.flow), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      borderBottom: i === rows.length - 1 ? "0" : td.borderBottom
    }
  }, runBadge(r.status)), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      color: "var(--text-secondary)",
      borderBottom: i === rows.length - 1 ? "0" : td.borderBottom
    }
  }, r.dur), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      textAlign: "right",
      color: "var(--text-tertiary)",
      fontSize: 13,
      borderBottom: i === rows.length - 1 ? "0" : td.borderBottom
    }
  }, r.when)))));
}

/* ---------- INTEGRATIONS ---------- */
function Integrations({
  onOpen,
  onNav,
  conns,
  onToggle
}) {
  const [tab, setTab] = React.useState("all");
  const filtered = conns.filter(c => tab === "all" ? true : tab === "active" ? c.status === "active" : c.status !== "active");
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
    title: "Integrations",
    sub: `${conns.length} connectors in this workspace`,
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      leftIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "plus",
        size: 16
      }),
      onClick: () => onNav("catalog")
    }, "Add connector")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    variant: "pill",
    value: tab,
    onChange: setTab,
    tabs: [{
      value: "all",
      label: "All",
      count: conns.length
    }, {
      value: "active",
      label: "Active",
      count: conns.filter(c => c.status === "active").length
    }, {
      value: "issues",
      label: "Needs attention",
      count: conns.filter(c => c.status !== "active").length
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gap: "var(--space-4)"
    }
  }, filtered.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.id,
    interactive: true,
    onClick: () => onOpen(c),
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-4)",
      display: "flex",
      alignItems: "flex-start",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(ConnectorLogo, {
    c: c,
    size: 40
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 15,
      color: "var(--text-primary)"
    }
  }, c.name), /*#__PURE__*/React.createElement(Switch, {
    checked: c.status !== "paused",
    onChange: () => onToggle(c.id),
    onClick: e => e.stopPropagation(),
    size: "sm"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--text-tertiary)",
      marginTop: 1
    }
  }, c.cat, " \xB7 ", c.trigger))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px var(--space-4)",
      borderTop: "1px solid var(--border-subtle)",
      background: "var(--bg-surface-2)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(StatusDot, {
    status: c.status
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontFamily: "var(--font-mono)",
      color: "var(--text-tertiary)"
    }
  }, c.events, " events"))))));
}

/* ---------- CATALOG ---------- */
function Catalog({
  onAdd,
  conns
}) {
  const [q, setQ] = React.useState("");
  const have = new Set(conns.map(c => c.id));
  const list = CATALOG.filter(c => c.name.toLowerCase().includes(q.toLowerCase()));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
    title: "Connector catalog",
    sub: "Connect a new app or data source to your workspace"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 360,
      marginBottom: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Search 200+ connectors\u2026",
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 16
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
      gap: "var(--space-4)"
    }
  }, list.map(c => {
    const added = have.has(c.id);
    return /*#__PURE__*/React.createElement(Card, {
      key: c.id,
      padding: "md",
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(ConnectorLogo, {
      c: c,
      size: 36
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        fontSize: 14,
        color: "var(--text-primary)"
      }
    }, c.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--text-tertiary)"
      }
    }, c.cat))), /*#__PURE__*/React.createElement(Button, {
      variant: added ? "secondary" : "primary",
      size: "sm",
      fullWidth: true,
      disabled: added,
      leftIcon: added ? /*#__PURE__*/React.createElement(Icon, {
        name: "check",
        size: 15
      }) : /*#__PURE__*/React.createElement(Icon, {
        name: "plus",
        size: 15
      }),
      onClick: () => onAdd(c)
    }, added ? "Connected" : "Connect"));
  })));
}

/* ---------- DETAIL ---------- */
function Detail({
  conn,
  onToggle
}) {
  const [tab, setTab] = React.useState("overview");
  const c = conn;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      marginBottom: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(ConnectorLogo, {
    c: c,
    size: 52
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: "var(--text-2xl)",
      fontWeight: 700,
      letterSpacing: "-0.02em",
      color: "var(--text-primary)"
    }
  }, c.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(StatusDot, {
    status: c.status
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--text-tertiary)",
      fontFamily: "var(--font-mono)"
    }
  }, c.events, " events today"))), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "play",
      size: 16
    })
  }, "Run now"), /*#__PURE__*/React.createElement(Switch, {
    checked: c.status !== "paused",
    onChange: () => onToggle(c.id),
    label: "Active"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: "1px solid var(--border-subtle)",
      marginBottom: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    variant: "line",
    value: tab,
    onChange: setTab,
    tabs: [{
      value: "overview",
      label: "Overview"
    }, {
      value: "runs",
      label: "Runs",
      count: 128
    }, {
      value: "config",
      label: "Configuration"
    }]
  })), tab === "overview" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Workflow",
    subtitle: "What this integration does"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "8px 12px",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-md)",
      fontSize: 13,
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement(ConnectorLogo, {
    c: c,
    size: 20
  }), c.trigger), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 18,
    color: "var(--text-tertiary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "8px 12px",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-md)",
      fontSize: 13,
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 16,
    color: "var(--accent)"
  }), "AI transform"), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 18,
    color: "var(--text-tertiary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "8px 12px",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-md)",
      fontSize: 13,
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement(ConnectorLogo, {
    c: CONNECTORS[1],
    size: 20
  }), "Create record"))), /*#__PURE__*/React.createElement(Card, {
    title: "Health"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    l: "Success rate",
    v: "99.2%"
  }), /*#__PURE__*/React.createElement(Stat, {
    l: "Avg duration",
    v: "1.4s"
  }), /*#__PURE__*/React.createElement(Stat, {
    l: "Last run",
    v: "2 min ago"
  })))), tab === "runs" && /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(RunsTable, {
    rows: RUNS
  })), tab === "config" && /*#__PURE__*/React.createElement(Card, {
    title: "Configuration",
    style: {
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Trigger event",
    defaultValue: c.trigger
  }), /*#__PURE__*/React.createElement(Input, {
    label: "API key",
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "key-round",
      size: 16
    }),
    defaultValue: "sk_live_\u2022\u2022\u2022\u20224f2a"
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Retry failed runs automatically",
    defaultChecked: true
  }))));
}
function Stat({
  l,
  v
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--text-tertiary)"
    }
  }, l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      fontFamily: "var(--font-mono)",
      color: "var(--text-primary)"
    }
  }, v));
}

/* ---------- SETTINGS ---------- */
function Settings() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Settings",
    sub: "Workspace preferences"
  }), /*#__PURE__*/React.createElement(Card, {
    title: "Workspace",
    style: {
      marginBottom: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Workspace name",
    defaultValue: "Acme Inc."
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Billing email",
    defaultValue: "ops@acme.com",
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: 16
    })
  }))), /*#__PURE__*/React.createElement(Card, {
    title: "Notifications"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    label: "Email me when a run fails",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Weekly activity digest",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Product updates"
  }))));
}

/* ---------- LOGIN ---------- */
function Login({
  onLogin
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100%",
      display: "grid",
      placeItems: "center",
      background: "var(--bg-canvas)",
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 380
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 14,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 12,
      background: "var(--accent)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "var(--shadow-accent)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "brain",
    size: 26,
    strokeWidth: 2.25,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 22,
      fontWeight: 700,
      letterSpacing: "-0.02em",
      color: "var(--text-primary)"
    }
  }, "Welcome back"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "4px 0 0",
      fontSize: 14,
      color: "var(--text-secondary)"
    }
  }, "Sign in to your Integrations Hub workspace"))), /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onLogin();
    },
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Work email",
    type: "email",
    placeholder: "you@company.com",
    defaultValue: "maya@acme.com",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Password",
    type: "password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    defaultValue: "password",
    required: true
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true,
    type: "submit"
  }, "Continue"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      color: "var(--text-tertiary)",
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: "var(--border-subtle)"
    }
  }), " or ", /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: "var(--border-subtle)"
    }
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    fullWidth: true,
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "github",
      size: 16
    }),
    onClick: e => {
      e.preventDefault();
      onLogin();
    }
  }, "Continue with GitHub"))), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: "center",
      fontSize: 13,
      color: "var(--text-tertiary)",
      marginTop: 18
    }
  }, "No account? ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: "var(--text-link)",
      fontWeight: 500,
      textDecoration: "none"
    }
  }, "Start free"))));
}
Object.assign(window, {
  IHScreens: {
    Overview,
    Integrations,
    Catalog,
    Detail,
    Settings,
    Login
  }
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/kit-screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/kit-ui.jsx
try { (() => {
/* Integrations Hub — UI Kit shared chrome, data, and the Icon helper.
   Exposes everything on window for the other text/babel files. */

const NS = window.IntegrationsHubDesignSystem_c1b980;
const {
  Button,
  IconButton,
  Badge,
  Avatar,
  AvatarGroup,
  StatusDot,
  Card,
  Input,
  Switch,
  Tabs,
  Breadcrumbs,
  Tooltip
} = NS;

/* ---- Icon: self-contained Lucide wrapper (flicker-free under React) ---- */
function Icon({
  name,
  size = 18,
  strokeWidth = 2,
  color,
  style
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const host = ref.current;
    if (!host || !window.lucide) return;
    host.innerHTML = `<i data-lucide="${name}"></i>`;
    window.lucide.createIcons({
      attrs: {
        width: size,
        height: size,
        "stroke-width": strokeWidth
      }
    });
  });
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      width: size,
      height: size,
      color,
      ...style
    }
  });
}

/* ---- Fake data ---- */
const CONNECTORS = [{
  id: "slack",
  name: "Slack",
  cat: "Messaging",
  color: "#611f69",
  events: "1,204",
  status: "active",
  trigger: "New message"
}, {
  id: "hubspot",
  name: "HubSpot",
  cat: "CRM",
  color: "#ff7a59",
  events: "842",
  status: "active",
  trigger: "Contact created"
}, {
  id: "postgres",
  name: "PostgreSQL",
  cat: "Database",
  color: "#336791",
  events: "5,910",
  status: "active",
  trigger: "Row inserted"
}, {
  id: "stripe",
  name: "Stripe",
  cat: "Payments",
  color: "#635bff",
  events: "317",
  status: "pending",
  trigger: "Payment succeeded"
}, {
  id: "gsheets",
  name: "Google Sheets",
  cat: "Productivity",
  color: "#0f9d58",
  events: "98",
  status: "paused",
  trigger: "Row updated"
}, {
  id: "salesforce",
  name: "Salesforce",
  cat: "CRM",
  color: "#00a1e0",
  events: "0",
  status: "error",
  trigger: "Lead created"
}];
const CATALOG = [...CONNECTORS, {
  id: "notion",
  name: "Notion",
  cat: "Productivity",
  color: "#000000"
}, {
  id: "github",
  name: "GitHub",
  cat: "Developer",
  color: "#24292f"
}, {
  id: "shopify",
  name: "Shopify",
  cat: "E-commerce",
  color: "#95bf47"
}, {
  id: "zendesk",
  name: "Zendesk",
  cat: "Support",
  color: "#03363d"
}, {
  id: "twilio",
  name: "Twilio",
  cat: "Messaging",
  color: "#f22f46"
}, {
  id: "airtable",
  name: "Airtable",
  cat: "Database",
  color: "#fcb400"
}];
const RUNS = [{
  id: "r-9f2a",
  flow: "New Slack ticket → HubSpot",
  status: "success",
  dur: "1.2s",
  when: "2 min ago"
}, {
  id: "r-9f29",
  flow: "Stripe payment → Sheets log",
  status: "success",
  dur: "0.8s",
  when: "8 min ago"
}, {
  id: "r-9f27",
  flow: "Salesforce lead → Slack #sales",
  status: "error",
  dur: "4.0s",
  when: "14 min ago"
}, {
  id: "r-9f24",
  flow: "Postgres row → HubSpot contact",
  status: "success",
  dur: "2.1s",
  when: "26 min ago"
}, {
  id: "r-9f1e",
  flow: "New Slack ticket → HubSpot",
  status: "running",
  dur: "—",
  when: "just now"
}];
const NAV = [{
  id: "overview",
  label: "Overview",
  icon: "layout-dashboard"
}, {
  id: "integrations",
  label: "Integrations",
  icon: "boxes"
}, {
  id: "catalog",
  label: "Catalog",
  icon: "grid-2x2-plus"
}, {
  id: "runs",
  label: "Runs",
  icon: "activity"
}, {
  id: "settings",
  label: "Settings",
  icon: "settings"
}];

/* ---- Connector tile logo (initial on brand-ish color) ---- */
function ConnectorLogo({
  c,
  size = 36
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      flex: "none",
      borderRadius: "var(--radius-md)",
      background: c.color,
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 700,
      fontSize: size * 0.42,
      fontFamily: "var(--font-sans)",
      boxShadow: "var(--shadow-xs)"
    }
  }, c.name[0]);
}

/* ---- Sidebar ---- */
function Sidebar({
  screen,
  onNav
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: "var(--sidebar-w)",
      flex: "none",
      background: "var(--bg-surface)",
      borderRight: "1px solid var(--border-subtle)",
      display: "flex",
      flexDirection: "column",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "var(--topbar-h)",
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "0 var(--space-4)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 8,
      background: "var(--accent)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "brain",
    size: 18,
    strokeWidth: 2.25,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 15,
      letterSpacing: "-0.01em",
      color: "var(--text-primary)"
    }
  }, "Integrations Hub")), /*#__PURE__*/React.createElement("nav", {
    style: {
      padding: "var(--space-3)",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "var(--text-tertiary)",
      padding: "var(--space-2) var(--space-3) var(--space-1)"
    }
  }, "Workspace"), NAV.map(n => {
    const active = screen === n.id || screen === "detail" && n.id === "integrations";
    return /*#__PURE__*/React.createElement("button", {
      key: n.id,
      onClick: () => onNav(n.id),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "8px 12px",
        borderRadius: "var(--radius-md)",
        border: 0,
        cursor: "pointer",
        textAlign: "left",
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        fontWeight: 500,
        color: active ? "var(--accent)" : "var(--text-secondary)",
        background: active ? "var(--accent-subtle)" : "transparent",
        transition: "var(--transition-colors)"
      },
      onMouseEnter: e => {
        if (!active) e.currentTarget.style.background = "var(--bg-hover)";
      },
      onMouseLeave: e => {
        if (!active) e.currentTarget.style.background = "transparent";
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: n.icon,
      size: 17,
      strokeWidth: active ? 2.25 : 2
    }), n.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-3)",
      borderTop: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "6px 8px",
      borderRadius: "var(--radius-md)"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Maya Rao",
    size: "sm",
    status: "online"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: "var(--text-primary)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, "Maya Rao"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--text-tertiary)"
    }
  }, "Acme Inc.")), /*#__PURE__*/React.createElement(Icon, {
    name: "chevrons-up-down",
    size: 15,
    color: "var(--text-tertiary)"
  }))));
}

/* ---- Topbar ---- */
function Topbar({
  title,
  crumbs,
  theme,
  onTheme,
  actions
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: "var(--topbar-h)",
      flex: "none",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      padding: "0 var(--space-6)",
      background: "var(--bg-surface)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, crumbs ? /*#__PURE__*/React.createElement(Breadcrumbs, {
    items: crumbs
  }) : /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 16,
      fontWeight: 600,
      letterSpacing: "-0.01em",
      color: "var(--text-primary)"
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 240
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 10,
      top: "50%",
      transform: "translateY(-50%)",
      display: "inline-flex",
      color: "var(--text-tertiary)",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 15
  })), /*#__PURE__*/React.createElement(Input, {
    placeholder: "Search\u2026",
    style: {
      paddingLeft: 32,
      height: 34
    }
  })), actions, /*#__PURE__*/React.createElement(Tooltip, {
    content: theme === "dark" ? "Light mode" : "Dark mode",
    side: "bottom"
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "ghost",
    "aria-label": "Toggle theme",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: theme === "dark" ? "sun" : "moon",
      size: 18
    }),
    onClick: onTheme
  })), /*#__PURE__*/React.createElement(IconButton, {
    variant: "ghost",
    "aria-label": "Notifications",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "bell",
      size: 18
    })
  }));
}

/* ---- Section heading ---- */
function PageHead({
  title,
  sub,
  actions
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "var(--space-4)",
      marginBottom: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: "var(--text-2xl)",
      fontWeight: 700,
      letterSpacing: "-0.02em",
      color: "var(--text-primary)"
    }
  }, title), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "4px 0 0",
      fontSize: 14,
      color: "var(--text-secondary)"
    }
  }, sub)), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      flex: "none"
    }
  }, actions));
}
Object.assign(window, {
  IHKit: {
    NS,
    Button,
    IconButton,
    Badge,
    Avatar,
    AvatarGroup,
    StatusDot,
    Card,
    Input,
    Switch,
    Tabs,
    Breadcrumbs,
    Tooltip,
    Icon,
    CONNECTORS,
    CATALOG,
    RUNS,
    NAV,
    ConnectorLogo,
    Sidebar,
    Topbar,
    PageHead
  }
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/kit-ui.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.AvatarGroup = __ds_scope.AvatarGroup;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.StatusDot = __ds_scope.StatusDot;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Breadcrumbs = __ds_scope.Breadcrumbs;

__ds_ns.Tabs = __ds_scope.Tabs;

})();

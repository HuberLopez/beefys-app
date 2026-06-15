/* @ds-bundle: {"format":3,"namespace":"BeefysDesignSystem_881125","components":[{"name":"Doodle","sourcePath":"components/brand/Doodle.jsx"},{"name":"DOODLE_NAMES","sourcePath":"components/brand/Doodle.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"QtyStepper","sourcePath":"components/core/QtyStepper.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"}],"sourceHashes":{"components/brand/Doodle.jsx":"5f479548b814","components/brand/Logo.jsx":"2b9f9f106c41","components/core/Badge.jsx":"d06a96aeaee9","components/core/Button.jsx":"7259d523bc97","components/core/Card.jsx":"3e445843eaba","components/core/IconButton.jsx":"c1d98ec62d50","components/core/QtyStepper.jsx":"aba2d8a36759","components/forms/Input.jsx":"4e9c63ada4b2","ui_kits/delivery/App.jsx":"6def4a42953b","ui_kits/delivery/Cart.jsx":"093ffb359445","ui_kits/delivery/Home.jsx":"bdcb2af95a2b","ui_kits/delivery/ItemSheet.jsx":"1196c6fbb2cf","ui_kits/delivery/Tracking.jsx":"0a5099e77b90","ui_kits/delivery/data.js":"de89addca780","ui_kits/delivery/shell.jsx":"431ffe22449c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BeefysDesignSystem_881125 = window.BeefysDesignSystem_881125 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Doodle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Beefys brand doodles — the hand-drawn marker marks that stand in for emoji/icons.
 * Single-color, inherit `color` (fill = currentColor). Pick one with `name`.
 */

const DOODLES = {
  b: {
    vb: "0 0 162 186",
    d: "M 138.101 90.307 L 138.101 89.255 C 145.529 85.19 151.686 79.151 155.892 71.806 C 160.098 64.461 162.188 56.095 161.932 47.636 C 162.332 41.48 160.958 35.339 157.973 29.939 C 154.988 24.54 150.517 20.108 145.091 17.169 C 133.863 10.857 117.021 7.715 94.566 7.743 C 37.725 7.743 33.136 1.22 15.873 0 C 11.93 0.194 8.179 1.767 5.278 4.444 C 2.377 7.12 0.509 10.731 0 14.644 C 0 50.287 74.945 26.511 74.945 26.511 L 27.199 51.676 L 13.263 161.635 C 10.018 161.901 7.001 163.408 4.842 165.843 C 3.503 167.179 2.442 168.767 1.72 170.515 C 0.997 172.263 0.627 174.136 0.632 176.027 C 0.666 179.221 1.663 182.33 3.495 184.948 C 16.07 185.621 40.644 185.972 77.219 186 C 130.803 186 157.61 165.969 157.638 125.908 C 157.887 118.092 156.01 110.354 152.206 103.52 C 148.913 97.82 144.005 93.223 138.101 90.307 Z M 98.902 141.352 C 97.985 145.561 96.224 149.541 93.724 153.05 C 91.65 155.799 89.097 158.151 86.187 159.994 C 83.532 161.742 80.474 162.785 77.303 163.024 C 74.135 163.254 70.955 163.254 67.788 163.024 L 67.535 163.024 L 75.24 101.921 L 82.566 101.921 C 85.054 101.685 87.564 102.017 89.905 102.892 C 92.246 103.767 94.358 105.161 96.082 106.971 C 99.655 111.963 101.328 118.067 100.797 124.182 C 100.872 129.961 100.236 135.728 98.902 141.352 Z M 108.123 59.251 C 107.327 62.761 106.052 66.145 104.334 69.308 C 102.571 72.51 99.926 75.138 96.713 76.883 C 93.065 78.835 88.977 79.82 84.84 79.744 L 77.935 80.039 L 84.419 30.509 C 93.303 29.289 99.702 30.13 103.534 33.076 C 105.603 34.919 107.204 37.227 108.207 39.809 C 109.21 42.392 109.585 45.175 109.302 47.931 C 109.33 51.736 108.935 55.533 108.123 59.251 Z"
  },
  star: {
    vb: "0 0 263 263",
    d: "M 126.781 20.646 L 147.589 64.627 L 169.516 0 L 177.186 87.384 L 263 78.252 L 183.394 122.702 L 243.996 137.862 L 190.848 153.454 L 263 207.74 L 168.235 179.316 L 185.398 239.376 L 151.198 202.38 L 136.021 263 L 111.603 194.475 L 90.939 263 L 85.327 179.316 L 30.283 221.546 L 70.167 153.039 L 14.582 162.929 L 70.167 122.702 L 0 54.809 L 83.793 83.666 L 67.225 8.572 L 111.603 81.248 L 126.781 20.646 Z"
  },
  heart: {
    vb: "0 0 197 185.905",
    d: "M 10.701 82.743 C 21.489 92.712 32.042 102.49 32.773 103.248 L 34.811 105.38 L 35.849 106.473 L 37.064 105.583 L 37.516 105.251 L 38.297 104.665 L 39.266 103.954 C 39.279 104.287 39.384 104.609 39.569 104.884 C 39.755 105.16 40.013 105.379 40.316 105.516 C 40.429 105.571 40.55 105.622 40.671 105.673 C 40.792 105.723 40.905 105.766 40.972 105.801 L 41.069 105.872 C 42.112 106.602 43.19 107.363 44.193 108.148 C 44.728 108.57 45.235 109.042 45.782 109.538 L 46.297 110.007 L 46.454 110.311 L 47 110.558 C 48.459 111.177 49.858 111.928 51.182 112.799 L 51.623 113.58 L 52.205 116.704 C 52.595 116.887 52.935 117.055 53.267 117.219 C 53.989 117.598 54.735 117.931 55.5 118.215 C 55.627 118.258 55.758 118.289 55.891 118.305 C 56.525 119.014 57.403 119.457 58.35 119.547 C 59.083 120.527 60.148 121.206 61.345 121.456 C 62.66 121.901 63.948 122.423 65.203 123.018 C 65.944 123.35 66.71 123.693 67.487 124.014 C 67.946 124.189 68.42 124.32 68.904 124.404 C 69.107 124.447 69.392 124.506 69.556 124.552 C 70.4 125.512 71.576 126.115 72.847 126.239 C 73.231 126.271 73.602 126.386 73.937 126.575 C 74.355 126.911 74.848 127.14 75.374 127.243 L 75.643 127.372 L 75.975 127.544 C 76.31 127.726 76.657 127.887 77.013 128.024 C 78.017 128.383 79.036 128.738 80.024 129.082 C 81.781 129.691 83.592 130.32 85.346 130.992 C 87.032 131.636 88.735 132.343 90.386 133.03 C 91.522 133.502 92.701 133.99 93.865 134.455 C 94.392 134.666 94.907 134.822 95.427 134.971 C 95.817 135.092 96.208 135.209 96.578 135.361 C 98.695 136.169 100.795 137.009 102.763 137.802 L 106.316 139.227 C 111.747 141.406 117.366 143.663 122.879 145.908 C 124.768 146.689 126.635 147.548 128.392 148.38 L 128.56 148.544 C 128.819 148.83 129.119 149.077 129.45 149.278 C 131.402 150.395 133.292 151.468 135.306 152.601 L 137.298 153.722 L 145.06 158.103 L 147.266 159.551 C 147.442 159.597 147.62 159.632 147.801 159.657 L 147.843 159.657 C 148.495 160.239 149.155 160.891 149.796 161.609 C 150.023 162.827 150.089 164.069 149.991 165.303 L 150.979 166.775 L 151.998 168.302 L 152.041 168.369 L 154.383 169.388 L 154.504 169.364 L 154.77 169.618 L 156.414 171.227 L 158.104 172.195 L 160.513 174.417 L 160.63 174.491 C 160.865 174.651 161.083 174.796 161.255 174.933 L 161.493 175.128 C 161.942 175.404 162.308 175.797 162.551 176.264 C 162.891 176.984 163.405 177.608 164.047 178.08 C 164.207 178.217 164.359 178.349 164.472 178.47 L 165.3 179.294 C 165.812 179.802 166.339 180.325 166.862 180.856 L 169.595 183.664 L 170.766 184.863 L 171.77 185.905 L 172.964 185.085 C 173.954 184.542 174.697 183.639 175.038 182.563 C 175.182 181.46 174.936 180.341 174.343 179.4 C 173.602 177.915 173.299 176.251 173.468 174.601 C 173.468 174.366 173.499 174.062 173.499 173.675 C 173.437 152.182 177.541 130.88 185.584 110.948 C 189.112 102.772 191.764 94.244 193.494 85.508 C 193.556 85.172 193.603 84.903 193.634 84.774 C 193.986 83.278 194.251 81.763 194.505 80.299 C 194.673 79.338 194.849 78.347 195.04 77.378 L 195.231 77.12 C 195.36 76.956 195.52 76.73 195.68 76.507 L 196.578 75.145 L 195.407 74.29 L 195.454 73.794 L 195.583 72.478 L 195.829 69.889 L 197 69.709 L 196.961 68.198 L 196.934 67.026 C 196.91 66.124 196.891 65.191 196.856 64.27 C 196.856 63.836 196.813 63.415 196.781 63.004 C 196.724 62.355 196.7 61.704 196.711 61.052 C 196.668 57.271 195.88 53.536 194.392 50.06 L 193.931 48.748 C 193.173 46.364 192.146 44.074 190.87 41.922 C 190.572 41.424 190.302 40.909 190.062 40.38 C 189.388 38.607 188.188 37.084 186.622 36.014 C 186.552 35.854 186.462 35.569 186.4 35.362 C 186.267 34.898 186.094 34.448 185.88 34.015 C 185.467 33.255 184.981 32.537 184.428 31.871 C 184.164 31.559 183.883 31.261 183.588 30.977 C 183.358 30.764 183.144 30.535 182.948 30.29 C 182.8 30.069 182.669 29.836 182.558 29.595 C 182.237 28.706 181.612 27.961 180.793 27.49 L 180.793 27.439 C 180.765 27.307 180.722 27.143 180.664 26.955 L 180.547 26.889 L 180.199 26.651 C 179.836 26.241 179.469 25.819 179.114 25.409 L 178.759 25.018 C 178.577 24.877 178.386 24.746 178.189 24.628 L 177.962 24.491 C 177.388 23.855 176.814 23.195 176.256 22.539 C 175.506 21.676 174.733 20.789 173.937 19.926 C 171.225 17.48 168.185 15.423 164.906 13.815 C 162.692 12.726 160.431 11.578 158.245 10.465 L 158.21 10.465 C 155.559 9.114 152.814 7.732 150.049 6.377 C 149.823 6.267 149.6 6.17 149.378 6.08 L 149.378 5.119 L 149.081 4.975 C 148.34 4.653 147.546 4.469 146.738 4.432 C 146.376 4.41 146.017 4.355 145.665 4.268 C 145.423 4.169 145.196 4.038 144.989 3.878 L 144.989 3.425 L 141.585 3.467 C 139.77 2.281 137.677 1.589 135.513 1.46 L 135.271 1.437 C 135.001 1.338 134.726 1.254 134.447 1.183 L 134.381 0.851 L 126.369 0.687 L 123.531 0.629 C 123.308 0.601 123.078 0.574 122.836 0.558 L 122.25 0.422 L 120.407 0 L 120.407 0.281 C 120.31 0.291 120.213 0.306 120.118 0.328 C 119.525 0.457 118.923 0.562 118.283 0.672 C 116.085 0.899 113.965 1.611 112.075 2.757 L 111.845 2.909 C 111.641 2.76 111.412 2.649 111.169 2.581 C 110.544 2.786 109.931 3.027 109.334 3.304 L 109.088 3.304 C 108.707 3.292 108.325 3.301 107.944 3.331 L 106.984 3.3 L 106.831 3.233 L 106.781 4.752 L 106.781 4.877 C 106.348 5.136 105.895 5.359 105.426 5.545 C 104.753 5.751 104.067 5.91 103.372 6.021 C 103.134 6.068 102.892 6.111 102.654 6.162 C 100.668 6.692 98.899 7.836 97.601 9.43 L 97.437 9.598 C 97.174 9.833 96.886 10.039 96.578 10.211 C 96.309 10.375 96.005 10.567 95.708 10.785 C 95.306 11.101 94.958 11.48 94.677 11.906 C 94.341 12.394 94.017 12.886 93.705 13.366 C 93.096 14.296 92.534 15.17 91.874 15.99 C 91.147 16.916 90.312 17.814 89.465 18.759 C 89.074 19.196 88.653 19.649 88.231 20.126 L 86.177 22.437 L 88.5 22.828 C 87.744 25.478 87.15 28.172 86.72 30.895 L 95.208 52.762 C 94.864 52.586 80.984 36.889 71.13 32.016 C 58.971 26.357 45.615 23.757 32.222 24.44 C 27.666 24.646 23.2 25.787 19.103 27.791 C 15.006 29.796 11.364 32.621 8.405 36.092 L 8.015 36.561 C 2.408 43.114 -0.444 51.583 0.056 60.193 C 0.557 68.803 4.372 76.885 10.701 82.743 Z M 143.666 156.322 C 143.838 156.439 144.005 156.529 144.162 156.615 C 144.399 157.127 144.8 157.547 145.302 157.806 L 145.06 158.044 L 143.666 156.322 Z"
  },
  flex: {
    vb: "0 0 230 221",
    d: "M 112.915 10.642 L 119.867 28.732 C 121.904 34.039 120.352 41.615 114.804 42.832 C 80.074 50.447 108.071 9.86 108.071 9.86 C 108.071 9.86 95.692 25.488 101.302 41.177 C 104.166 49.186 85.921 58.459 67.866 56.951 L 65.581 56.625 C 81.166 87.721 83.662 109.868 75.168 143.6 L 52.615 152.891 L 105.828 125.487 C 117.184 119.638 129.633 116.222 142.38 115.456 C 155.128 114.69 167.895 116.59 179.869 121.037 L 194.748 124.07 C 200.482 125.239 205.926 127.54 210.762 130.839 C 215.598 134.139 219.728 138.37 222.912 143.286 C 226.096 148.201 228.269 153.703 229.305 159.469 C 230.341 165.236 230.218 171.151 228.944 176.869 C 227.388 183.855 224.156 190.358 219.527 195.813 C 214.898 201.269 209.012 205.515 202.378 208.183 L 190.224 213.071 C 165.767 222.907 138.51 223.711 113.696 214.814 C 106.385 212.193 99.965 209.021 95.451 205.458 L 61.171 209.431 L 27 206.62 C 6.67 199.995 -4.435 188.373 1.674 167.86 L 11.89 153.498 C 3.24 126.097 23.349 75.518 42.715 51.634 L 46.695 33.327 C 47.433 29.939 48.915 26.757 51.036 24.015 C 53.156 21.273 55.86 19.038 58.952 17.474 L 89.641 1.948 C 91.714 0.843 93.997 0.191 96.341 0.036 C 98.684 -0.119 101.034 0.226 103.234 1.048 C 105.434 1.87 107.435 3.15 109.104 4.804 C 110.773 6.458 112.072 8.448 112.915 10.642 Z"
  }
};
function Doodle({
  name = "b",
  size = 48,
  color = "currentColor",
  title,
  style,
  ...rest
}) {
  const g = DOODLES[name] || DOODLES.b;
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 " + g.vb.split(" ").slice(2).join(" "),
    width: size,
    height: "auto",
    role: title ? "img" : "presentation",
    "aria-label": title || undefined,
    "aria-hidden": title ? undefined : true,
    style: {
      display: "inline-block",
      color,
      verticalAlign: "middle",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: g.d,
    fill: "currentColor",
    fillRule: "nonzero"
  }));
}
const DOODLE_NAMES = Object.keys(DOODLES);
Object.assign(__ds_scope, { Doodle, DOODLE_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Doodle.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Beefys "Beefy" script wordmark. A logo asset (PNG) — never re-typeset.
 * Pick a colorway to match the background.
 */

const SRC = {
  ketchup: "logo-beefy-ketchup.png",
  lettuce: "logo-beefy-lettuce.png",
  grey: "logo-beefy-grey.png",
  white: "logo-beefy-white.png"
};
function Logo({
  color = "ketchup",
  height = 32,
  assetBase = "/assets",
  alt = "Beefy",
  style,
  ...rest
}) {
  const file = SRC[color] || SRC.ketchup;
  return /*#__PURE__*/React.createElement("img", _extends({
    src: assetBase.replace(/\/$/, "") + "/" + file,
    alt: alt,
    height: height,
    style: {
      height,
      width: "auto",
      display: "block",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small pill label — menu tags ("Nuevo", "Picante"), status, counts.
 * Tones map to the brand palette; used flat (no gradients).
 */
function Badge({
  children,
  tone = "neutral",
  size = "md",
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      background: "var(--standard-grey)",
      color: "var(--ink-900)"
    },
    ketchup: {
      background: "var(--beefy-ketchup)",
      color: "var(--white)"
    },
    lettuce: {
      background: "var(--beefy-lettuce)",
      color: "var(--ink-900)"
    },
    cheese: {
      background: "var(--beefy-cheese)",
      color: "var(--ink-900)"
    },
    pink: {
      background: "var(--teenage-pink)",
      color: "var(--ink-900)"
    },
    dark: {
      background: "var(--ink-900)",
      color: "var(--white)"
    },
    outline: {
      background: "transparent",
      color: "var(--ink-900)",
      boxShadow: "inset 0 0 0 2px var(--ink-900)"
    }
  };
  const sizes = {
    sm: {
      fontSize: 11,
      padding: "3px 9px"
    },
    md: {
      fontSize: 12,
      padding: "5px 12px"
    },
    lg: {
      fontSize: 14,
      padding: "7px 16px"
    }
  };
  const t = tones[tone] || tones.neutral;
  const s = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      textTransform: "uppercase",
      lineHeight: 1,
      letterSpacing: "var(--tracking-normal)",
      borderRadius: "var(--radius-pill)",
      whiteSpace: "nowrap",
      ...t,
      ...s,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Beefys primary action. Loud, pill-shaped, confident. Bouncy press.
 * Variants: solid (ketchup), lettuce (accent), dark, outline, ghost.
 */
function Button({
  children,
  variant = "solid",
  size = "md",
  full = false,
  disabled = false,
  type = "button",
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      fontSize: 14,
      padding: "9px 16px",
      minHeight: 38
    },
    md: {
      fontSize: 16,
      padding: "13px 24px",
      minHeight: 48
    },
    lg: {
      fontSize: 18,
      padding: "17px 32px",
      minHeight: 56
    }
  };
  const variants = {
    solid: {
      background: "var(--beefy-ketchup)",
      color: "var(--white)",
      border: "2px solid var(--beefy-ketchup)"
    },
    lettuce: {
      background: "var(--beefy-lettuce)",
      color: "var(--ink-900)",
      border: "2px solid var(--beefy-lettuce)"
    },
    dark: {
      background: "var(--ink-900)",
      color: "var(--white)",
      border: "2px solid var(--ink-900)"
    },
    outline: {
      background: "transparent",
      color: "var(--ink-900)",
      border: "2px solid var(--ink-900)"
    },
    ghost: {
      background: "transparent",
      color: "var(--beefy-ketchup)",
      border: "2px solid transparent"
    }
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.solid;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    className: "beefy-btn",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      lineHeight: 1,
      letterSpacing: "var(--tracking-normal)",
      borderRadius: "var(--radius-pill)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      width: full ? "100%" : "auto",
      transition: "transform var(--dur-fast) var(--ease-pop), filter var(--dur-fast) var(--ease-out)",
      WebkitTapHighlightColor: "transparent",
      ...s,
      ...v,
      ...style
    },
    onPointerDown: e => {
      if (!disabled) e.currentTarget.style.transform = "scale(0.96)";
    },
    onPointerUp: e => {
      e.currentTarget.style.transform = "scale(1)";
    },
    onPointerLeave: e => {
      e.currentTarget.style.transform = "scale(1)";
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.filter = "brightness(0.93)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.filter = "none";
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Generic surface card. Flat white by default, 2px option, soft radius.
 * The brand's "sticker" pop shadow is available via shadow="pop".
 */
function Card({
  children,
  padding = 20,
  bordered = false,
  shadow = "md",
  radius = "lg",
  style,
  ...rest
}) {
  const shadows = {
    none: "none",
    sm: "var(--shadow-sm)",
    md: "var(--shadow-md)",
    lg: "var(--shadow-lg)",
    pop: "var(--shadow-pop)"
  };
  const radii = {
    sm: "var(--radius-sm)",
    md: "var(--radius-md)",
    lg: "var(--radius-lg)",
    xl: "var(--radius-xl)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--surface-card)",
      borderRadius: radii[radius] || radii.lg,
      border: bordered ? "2px solid var(--ink-900)" : "1px solid var(--line-200)",
      boxShadow: shadows[shadow] || shadows.md,
      padding,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Compact round/square icon button (cart, search, close, +/-).
 * Pass an icon element (Lucide <i> tag or Doodle) as children.
 */
function IconButton({
  children,
  variant = "soft",
  size = 44,
  shape = "round",
  disabled = false,
  "aria-label": ariaLabel,
  style,
  ...rest
}) {
  const variants = {
    soft: {
      background: "var(--standard-grey)",
      color: "var(--ink-900)",
      border: "2px solid transparent"
    },
    solid: {
      background: "var(--beefy-ketchup)",
      color: "var(--white)",
      border: "2px solid var(--beefy-ketchup)"
    },
    lettuce: {
      background: "var(--beefy-lettuce)",
      color: "var(--ink-900)",
      border: "2px solid var(--beefy-lettuce)"
    },
    outline: {
      background: "var(--white)",
      color: "var(--ink-900)",
      border: "2px solid var(--ink-900)"
    },
    ghost: {
      background: "transparent",
      color: "var(--ink-700)",
      border: "2px solid transparent"
    }
  };
  const v = variants[variant] || variants.soft;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": ariaLabel,
    disabled: disabled,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      borderRadius: shape === "round" ? "var(--radius-pill)" : "var(--radius-md)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.4 : 1,
      transition: "transform var(--dur-fast) var(--ease-pop), filter var(--dur-fast) var(--ease-out)",
      WebkitTapHighlightColor: "transparent",
      ...v,
      ...style
    },
    onPointerDown: e => {
      if (!disabled) e.currentTarget.style.transform = "scale(0.9)";
    },
    onPointerUp: e => {
      e.currentTarget.style.transform = "scale(1)";
    },
    onPointerLeave: e => {
      e.currentTarget.style.transform = "scale(1)";
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/QtyStepper.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Quantity stepper for cart/menu rows. − [n] + in a pill.
 * Controlled: pass value + onChange(newValue).
 */
function QtyStepper({
  value = 1,
  min = 0,
  max = 99,
  onChange,
  size = "md",
  style,
  ...rest
}) {
  const dims = {
    sm: {
      btn: 30,
      font: 14,
      pad: 4
    },
    md: {
      btn: 38,
      font: 16,
      pad: 5
    },
    lg: {
      btn: 46,
      font: 18,
      pad: 6
    }
  };
  const d = dims[size] || dims.md;
  const set = n => {
    const c = Math.max(min, Math.min(max, n));
    if (onChange) onChange(c);
  };
  const btn = (label, onClick, disabled) => /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": label === "−" ? "Quitar uno" : "Agregar uno",
    onClick: onClick,
    disabled: disabled,
    style: {
      width: d.btn,
      height: d.btn,
      borderRadius: "var(--radius-pill)",
      border: "none",
      background: disabled ? "transparent" : "var(--white)",
      color: "var(--ink-900)",
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: d.font + 4,
      lineHeight: 1,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.3 : 1,
      boxShadow: disabled ? "none" : "var(--shadow-sm)",
      transition: "transform var(--dur-fast) var(--ease-pop)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    },
    onPointerDown: e => {
      if (!disabled) e.currentTarget.style.transform = "scale(0.85)";
    },
    onPointerUp: e => {
      e.currentTarget.style.transform = "scale(1)";
    },
    onPointerLeave: e => {
      e.currentTarget.style.transform = "scale(1)";
    }
  }, label);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      padding: d.pad,
      background: "var(--standard-grey)",
      borderRadius: "var(--radius-pill)",
      ...style
    }
  }, rest), btn("−", () => set(value - 1), value <= min), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: d.btn,
      textAlign: "center",
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: d.font,
      color: "var(--ink-900)"
    }
  }, value), btn("+", () => set(value + 1), value >= max));
}
Object.assign(__ds_scope, { QtyStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/QtyStepper.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input with optional leading icon. 2px focus ring in ketchup.
 * Pass a Lucide icon element via `icon`.
 */
function Input({
  icon,
  size = "md",
  invalid = false,
  style,
  wrapStyle,
  ...rest
}) {
  const sizes = {
    md: {
      height: 48,
      font: 16,
      pad: icon ? "0 16px 0 44px" : "0 16px"
    },
    lg: {
      height: 56,
      font: 18,
      pad: icon ? "0 18px 0 50px" : "0 18px"
    }
  };
  const s = sizes[size] || sizes.md;
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      width: "100%",
      ...wrapStyle
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 16,
      display: "inline-flex",
      color: "var(--ink-500)",
      pointerEvents: "none"
    }
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      width: "100%",
      height: s.height,
      padding: s.pad,
      fontFamily: "var(--font-mono)",
      fontWeight: 500,
      fontSize: s.font,
      letterSpacing: "var(--tracking-normal)",
      color: "var(--ink-900)",
      background: "var(--white)",
      border: "2px solid " + (invalid ? "var(--beefy-ketchup)" : focus ? "var(--ink-900)" : "var(--line-200)"),
      borderRadius: "var(--radius-md)",
      outline: "none",
      boxShadow: focus ? "0 0 0 3px rgba(237,61,0,0.15)" : "none",
      transition: "border-color var(--dur-fast), box-shadow var(--dur-fast)",
      ...style
    }
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// ui_kits/delivery/App.jsx
try { (() => {
/* Beefys delivery — App orchestrator */
function App() {
  const [screen, setScreen] = React.useState("home"); // home | cart | tracking
  const [sheetItem, setSheetItem] = React.useState(null);
  const [cart, setCart] = React.useState({
    classic: 1,
    fries: 1
  });
  const [mode, setMode] = React.useState("delivery");
  const [cat, setCat] = React.useState("burgers");
  const D = window.BEEFY_DATA;
  const byId = Object.fromEntries(D.items.map(i => [i.id, i]));
  const lines = Object.entries(cart).filter(([, q]) => q > 0).map(([id, qty]) => ({
    id,
    qty
  }));
  const cartCount = lines.reduce((s, l) => s + l.qty, 0);
  const cartTotal = lines.reduce((s, l) => s + byId[l.id].price * l.qty, 0);
  const addItem = (item, qty = 1) => setCart(c => ({
    ...c,
    [item.id]: (c[item.id] || 0) + qty
  }));
  const setQty = (id, q) => setCart(c => ({
    ...c,
    [id]: q
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 28,
      background: "var(--standard-grey)"
    }
  }, /*#__PURE__*/React.createElement(window.PhoneShell, {
    statusDark: screen === "tracking",
    bg: screen === "tracking" ? "var(--beefy-ketchup)" : "var(--white)"
  }, screen === "home" && /*#__PURE__*/React.createElement(window.Home, {
    mode: mode,
    setMode: setMode,
    cat: cat,
    setCat: setCat,
    cart: cart,
    cartCount: cartCount,
    cartTotal: cartTotal,
    onOpenItem: setSheetItem,
    onAddItem: it => addItem(it, 1),
    onOpenCart: () => setScreen("cart")
  }), screen === "cart" && /*#__PURE__*/React.createElement(window.CartScreen, {
    lines: lines,
    mode: mode,
    onBack: () => setScreen("home"),
    onQty: setQty,
    onPlace: () => setScreen("tracking")
  }), screen === "tracking" && /*#__PURE__*/React.createElement(window.Tracking, {
    mode: mode,
    onDone: () => {
      setCart({});
      setScreen("home");
    }
  }), sheetItem && /*#__PURE__*/React.createElement(window.ItemSheet, {
    item: sheetItem,
    onClose: () => setSheetItem(null),
    onConfirm: (it, qty) => {
      addItem(it, qty);
      setSheetItem(null);
    }
  })));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
setTimeout(() => window.lucide && window.lucide.createIcons(), 80);
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/delivery/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/delivery/Cart.jsx
try { (() => {
/* Beefys delivery — Cart + Checkout screen */
const {
  IconButton: IB3,
  Button: Btn3,
  QtyStepper: QS3,
  Doodle: Dood3,
  Badge: Badge3
} = window.BeefysDesignSystem_881125;
function CartScreen({
  lines,
  mode,
  onBack,
  onQty,
  onPlace
}) {
  const D = window.BEEFY_DATA;
  const [tip, setTip] = React.useState(0.15);
  const [pay, setPay] = React.useState("card");
  React.useEffect(() => {
    setTimeout(() => window.lucide && window.lucide.createIcons(), 30);
  });
  const byId = Object.fromEntries(D.items.map(i => [i.id, i]));
  const sub = lines.reduce((s, l) => s + byId[l.id].price * l.qty, 0);
  const delivery = mode === "delivery" ? 2.5 : 0;
  const tipAmt = sub * tip;
  const total = sub + delivery + tipAmt;
  const empty = lines.length === 0;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "0 0 auto",
      padding: "8px 20px 14px",
      display: "flex",
      alignItems: "center",
      gap: 12,
      borderBottom: "1px solid var(--line-200)"
    }
  }, /*#__PURE__*/React.createElement(IB3, {
    "aria-label": "Volver",
    variant: "soft",
    onClick: onBack
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-left"
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontWeight: 900,
      fontSize: 22,
      textTransform: "uppercase",
      color: "var(--ink-900)"
    }
  }, "Tu carrito")), empty ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 16,
      color: "var(--ink-300)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--line-200)"
    }
  }, /*#__PURE__*/React.createElement(Dood3, {
    name: "b",
    size: 90
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 700
    }
  }, "Tu carrito est\xE1 vac\xEDo"), /*#__PURE__*/React.createElement(Btn3, {
    variant: "outline",
    onClick: onBack
  }, "Ver el men\xFA")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      overflowY: "auto",
      padding: "6px 20px 0"
    }
  }, lines.map(l => {
    const it = byId[l.id];
    return /*#__PURE__*/React.createElement("div", {
      key: l.id,
      style: {
        display: "flex",
        gap: 12,
        padding: "16px 0",
        borderBottom: "1px solid var(--line-200)",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 60,
        height: 60,
        borderRadius: "var(--radius-md)",
        background: it.photo ? "var(--standard-grey)" : "var(--teenage-pink)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: "0 0 auto",
        overflow: "hidden",
        color: "var(--ink-900)"
      }
    }, it.photo ? /*#__PURE__*/React.createElement("img", {
      src: "../../assets/burger-classic.png",
      alt: "",
      style: {
        width: "125%",
        height: "125%",
        objectFit: "contain"
      }
    }) : /*#__PURE__*/React.createElement(Dood3, {
      name: it.doodle || "star",
      size: 30
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontWeight: 700,
        fontSize: 15,
        color: "var(--ink-900)"
      }
    }, it.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 14,
        color: "var(--ink-500)",
        marginTop: 2
      }
    }, fmt(it.price))), /*#__PURE__*/React.createElement(QS3, {
      value: l.qty,
      min: 0,
      max: 20,
      onChange: q => onQty(l.id, q),
      size: "sm"
    }));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "18px 0 16px",
      borderBottom: "1px solid var(--line-200)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 999,
      background: "var(--ketchup-tint)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": mode === "delivery" ? "map-pin" : "store",
    style: {
      color: "var(--beefy-ketchup)",
      width: 20,
      height: 20
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: 14,
      color: "var(--ink-900)"
    }
  }, mode === "delivery" ? "Av. Siempreviva 742" : "Beefys · Centro"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--ink-500)"
    }
  }, mode === "delivery" ? "Entrega en 20–30 min" : "Recoger en 10 min")), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--beefy-ketchup)",
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: 13,
      cursor: "pointer"
    }
  }, "Cambiar")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 0",
      borderBottom: "1px solid var(--line-200)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: 13,
      textTransform: "uppercase",
      color: "var(--ink-300)",
      marginBottom: 10
    }
  }, "Propina para el rider"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, [0, 0.1, 0.15, 0.2].map(t => {
    const on = t === tip;
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      type: "button",
      onClick: () => setTip(t),
      style: {
        flex: 1,
        border: "2px solid " + (on ? "var(--ink-900)" : "var(--line-200)"),
        background: on ? "var(--ink-900)" : "var(--white)",
        color: on ? "var(--white)" : "var(--ink-700)",
        fontFamily: "var(--font-mono)",
        fontWeight: 700,
        fontSize: 14,
        padding: "11px 0",
        borderRadius: "var(--radius-md)",
        cursor: "pointer"
      }
    }, t === 0 ? "—" : Math.round(t * 100) + "%");
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 0 18px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: 13,
      textTransform: "uppercase",
      color: "var(--ink-300)",
      marginBottom: 10
    }
  }, "Pago"), [{
    id: "card",
    label: "•••• 4242",
    icon: "credit-card"
  }, {
    id: "cash",
    label: "Efectivo",
    icon: "banknote"
  }].map(p => {
    const on = p.id === pay;
    return /*#__PURE__*/React.createElement("label", {
      key: p.id,
      onClick: () => setPay(p.id),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "12px 0",
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": p.icon,
      style: {
        width: 20,
        height: 20,
        color: "var(--ink-700)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontSize: 15,
        color: "var(--ink-900)",
        fontWeight: 500
      }
    }, p.label), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 22,
        height: 22,
        borderRadius: 999,
        border: "2px solid " + (on ? "var(--beefy-ketchup)" : "var(--line-200)"),
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 11,
        height: 11,
        borderRadius: 999,
        background: "var(--beefy-ketchup)"
      }
    })));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 130
    }
  }, [["Subtotal", sub], [mode === "delivery" ? "Envío" : "Pickup", delivery], ["Propina", tipAmt]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      justifyContent: "space-between",
      padding: "5px 0",
      fontFamily: "var(--font-mono)",
      fontSize: 14,
      color: "var(--ink-500)"
    }
  }, /*#__PURE__*/React.createElement("span", null, k), /*#__PURE__*/React.createElement("span", null, v === 0 ? "Gratis" : fmt(v)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      padding: "14px 20px 26px",
      background: "var(--white)",
      borderTop: "1px solid var(--line-200)"
    }
  }, /*#__PURE__*/React.createElement(Btn3, {
    variant: "solid",
    size: "lg",
    full: true,
    onClick: onPlace
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Realizar pedido"), /*#__PURE__*/React.createElement("span", null, fmt(total)))))));
}
Object.assign(window, {
  CartScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/delivery/Cart.jsx", error: String((e && e.message) || e) }); }

// ui_kits/delivery/Home.jsx
try { (() => {
/* Beefys delivery — Home / Menu browse screen */
const {
  Logo,
  IconButton,
  Badge,
  Button,
  Doodle,
  Input
} = window.BeefysDesignSystem_881125;
function ItemThumb({
  item,
  size = 92
}) {
  if (item.photo) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: size,
        height: size,
        borderRadius: "var(--radius-md)",
        background: "var(--standard-grey)",
        flex: "0 0 auto",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/burger-classic.png",
      alt: item.name,
      style: {
        width: "118%",
        height: "118%",
        objectFit: "contain",
        transform: "translateY(4%)"
      }
    }));
  }
  const bg = item.cat === "drinks" ? "var(--teenage-pink)" : "var(--beefy-cheese)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: "var(--radius-md)",
      background: bg,
      flex: "0 0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--ink-900)"
    }
  }, /*#__PURE__*/React.createElement(Doodle, {
    name: item.doodle || "star",
    size: size * 0.5
  }));
}
function MenuRow({
  item,
  qty,
  onOpen,
  onAdd
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onOpen,
    style: {
      display: "flex",
      gap: 14,
      padding: "16px 0",
      borderBottom: "1px solid var(--line-200)",
      cursor: "pointer",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(ItemThumb, {
    item: item
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: 17,
      color: "var(--ink-900)"
    }
  }, item.name), item.tag && /*#__PURE__*/React.createElement(Badge, {
    tone: item.tag.tone,
    size: "sm"
  }, item.tag.text)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      lineHeight: 1.45,
      color: "var(--ink-500)",
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
      overflow: "hidden"
    }
  }, item.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: 16,
      color: "var(--ink-900)"
    }
  }, fmt(item.price)), /*#__PURE__*/React.createElement("div", {
    onClick: e => {
      e.stopPropagation();
      onAdd(item);
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": "Agregar " + item.name,
    variant: qty ? "solid" : "lettuce",
    size: 38
  }, qty ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: 15
    }
  }, qty) : /*#__PURE__*/React.createElement("i", {
    "data-lucide": "plus"
  }))))));
}
function Home({
  mode,
  setMode,
  cart,
  cartCount,
  cartTotal,
  onOpenItem,
  onOpenCart,
  onAddItem,
  cat,
  setCat
}) {
  const D = window.BEEFY_DATA;
  const scrollRef = React.useRef(null);
  React.useEffect(() => {
    setTimeout(() => window.lucide && window.lucide.createIcons(), 30);
  });
  const visible = D.items.filter(i => i.cat === cat);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 20px 14px",
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    color: "ketchup",
    height: 26,
    assetBase: "../../assets"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": "Carrito",
    variant: "dark",
    onClick: onOpenCart
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "shopping-bag"
  })), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: -4,
      right: -4,
      minWidth: 20,
      height: 20,
      padding: "0 5px",
      borderRadius: 999,
      background: "var(--beefy-lettuce)",
      color: "var(--ink-900)",
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: 12,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "2px solid var(--white)"
    }
  }, cartCount))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      color: "var(--ink-500)",
      fontSize: 13,
      fontFamily: "var(--font-mono)",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "map-pin",
    style: {
      width: 15,
      height: 15,
      color: "var(--beefy-ketchup)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-900)",
      fontWeight: 700
    }
  }, "Av. Siempreviva 742"), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-down",
    style: {
      width: 15,
      height: 15
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Segmented, {
    options: [{
      value: "delivery",
      label: "Delivery"
    }, {
      value: "pickup",
      label: "Pickup"
    }],
    value: mode,
    onChange: setMode
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      color: "var(--ink-500)"
    }
  }, mode === "delivery" ? "20–30 min" : "Listo 10 min"))), /*#__PURE__*/React.createElement("div", {
    ref: scrollRef,
    style: {
      flex: 1,
      minHeight: 0,
      overflowY: "auto",
      padding: "0 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--beefy-ketchup)",
      borderRadius: "var(--radius-lg)",
      padding: "20px 20px 0",
      position: "relative",
      overflow: "hidden",
      marginBottom: 18,
      minHeight: 150,
      display: "flex",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      paddingBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "lettuce",
    size: "sm"
  }, "2x1 hoy"), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: "var(--white)",
      fontWeight: 900,
      fontSize: 30,
      lineHeight: 0.98,
      margin: "10px 0 0",
      textTransform: "uppercase"
    }
  }, "M\xE1s carne,", /*#__PURE__*/React.createElement("br", null), "menos drama")), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/burger-classic.png",
    alt: "Beefy",
    style: {
      width: 150,
      height: 150,
      objectFit: "contain",
      marginBottom: -6,
      marginRight: -8,
      flex: "0 0 auto"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 14,
      right: 130,
      color: "var(--beefy-lettuce)"
    }
  }, /*#__PURE__*/React.createElement(Doodle, {
    name: "star",
    size: 34
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      position: "sticky",
      top: 0,
      background: "var(--white)",
      paddingBottom: 12,
      zIndex: 2,
      overflowX: "auto"
    }
  }, D.categories.map(c => {
    const on = c.id === cat;
    return /*#__PURE__*/React.createElement("button", {
      key: c.id,
      type: "button",
      onClick: () => {
        setCat(c.id);
        scrollRef.current && (scrollRef.current.scrollTop = 200);
      },
      style: {
        flex: "0 0 auto",
        border: "2px solid " + (on ? "var(--ink-900)" : "var(--line-200)"),
        background: on ? "var(--ink-900)" : "var(--white)",
        color: on ? "var(--white)" : "var(--ink-700)",
        fontFamily: "var(--font-mono)",
        fontWeight: 700,
        fontSize: 14,
        padding: "9px 18px",
        borderRadius: "var(--radius-pill)",
        cursor: "pointer"
      }
    }, c.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: cartCount > 0 ? 110 : 24
    }
  }, visible.map(it => /*#__PURE__*/React.createElement(MenuRow, {
    key: it.id,
    item: it,
    qty: cart[it.id] || 0,
    onOpen: () => onOpenItem(it),
    onAdd: onAddItem
  })))), cartCount > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      padding: "14px 20px 26px",
      background: "linear-gradient(to top, var(--white) 70%, transparent)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onOpenCart,
    style: {
      width: "100%",
      border: "none",
      cursor: "pointer",
      background: "var(--ink-900)",
      color: "var(--white)",
      borderRadius: "var(--radius-pill)",
      height: 58,
      padding: "0 10px 0 22px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      fontFamily: "var(--font-mono)",
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      fontSize: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--beefy-lettuce)",
      color: "var(--ink-900)",
      borderRadius: 999,
      minWidth: 26,
      height: 26,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 14
    }
  }, cartCount), "Ver carrito"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      fontSize: 16
    }
  }, fmt(cartTotal), /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--beefy-ketchup)",
      borderRadius: 999,
      width: 38,
      height: 38,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right",
    style: {
      width: 20,
      height: 20
    }
  }))))));
}
Object.assign(window, {
  Home,
  MenuRow,
  ItemThumb
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/delivery/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/delivery/ItemSheet.jsx
try { (() => {
/* Beefys delivery — Item detail bottom sheet */
const {
  IconButton: IB2,
  Badge: Badge2,
  Button: Btn2,
  QtyStepper: QS2,
  Doodle: Dood2
} = window.BeefysDesignSystem_881125;
function ItemSheet({
  item,
  onClose,
  onConfirm
}) {
  const [qty, setQty] = React.useState(1);
  const [extras, setExtras] = React.useState({});
  React.useEffect(() => {
    setTimeout(() => window.lucide && window.lucide.createIcons(), 30);
  });
  const addons = [{
    id: "cheese",
    label: "Extra American cheese",
    price: 1.2
  }, {
    id: "bacon",
    label: "Bacon crujiente",
    price: 1.8
  }, {
    id: "patty",
    label: "Carne extra",
    price: 2.5
  }, {
    id: "jalapeno",
    label: "Jalapeños",
    price: 0.9
  }];
  const extrasTotal = addons.reduce((s, a) => s + (extras[a.id] ? a.price : 0), 0);
  const total = (item.price + extrasTotal) * qty;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 10,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "absolute",
      inset: 0,
      background: "rgba(44,44,44,0.45)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      background: "var(--white)",
      borderTopLeftRadius: 32,
      borderTopRightRadius: 32,
      maxHeight: "92%",
      display: "flex",
      flexDirection: "column",
      animation: "beefySheetUp var(--dur-slow) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: item.photo ? "var(--beefy-cheese)" : "var(--teenage-pink)",
      borderTopLeftRadius: 32,
      borderTopRightRadius: 32,
      height: 200,
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "0 0 auto",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 14,
      right: 14
    }
  }, /*#__PURE__*/React.createElement(IB2, {
    "aria-label": "Cerrar",
    variant: "outline",
    onClick: onClose,
    style: {
      background: "var(--white)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "x"
  }))), item.photo ? /*#__PURE__*/React.createElement("img", {
    src: "../../assets/burger-classic.png",
    alt: item.name,
    style: {
      width: 230,
      height: 230,
      objectFit: "contain"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-900)"
    }
  }, /*#__PURE__*/React.createElement(Dood2, {
    name: item.doodle || "star",
    size: 120
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      overflowY: "auto",
      padding: "22px 24px 8px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 8
    }
  }, item.tag && /*#__PURE__*/React.createElement(Badge2, {
    tone: item.tag.tone,
    size: "sm"
  }, item.tag.text), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      color: "var(--ink-300)"
    }
  }, item.kcal, " kcal")), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontWeight: 900,
      fontSize: 28,
      color: "var(--ink-900)",
      margin: "0 0 8px",
      textTransform: "uppercase",
      lineHeight: 1
    }
  }, item.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 22px",
      fontSize: 15,
      lineHeight: 1.5,
      color: "var(--ink-500)"
    }
  }, item.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: 13,
      textTransform: "uppercase",
      color: "var(--ink-300)",
      marginBottom: 12
    }
  }, "Hazla tuya"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 0
    }
  }, addons.map(a => {
    const on = !!extras[a.id];
    return /*#__PURE__*/React.createElement("label", {
      key: a.id,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "13px 0",
        borderBottom: "1px solid var(--line-200)",
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("span", {
      onClick: () => setExtras(e => ({
        ...e,
        [a.id]: !e[a.id]
      })),
      style: {
        width: 26,
        height: 26,
        borderRadius: 8,
        border: "2px solid " + (on ? "var(--beefy-ketchup)" : "var(--line-200)"),
        background: on ? "var(--beefy-ketchup)" : "var(--white)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flex: "0 0 auto",
        transition: "all var(--dur-fast) var(--ease-pop)"
      }
    }, on && /*#__PURE__*/React.createElement("i", {
      "data-lucide": "check",
      style: {
        width: 16,
        height: 16,
        color: "var(--white)"
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontSize: 15,
        color: "var(--ink-900)",
        fontWeight: 500
      }
    }, a.label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 14,
        color: "var(--ink-500)",
        fontWeight: 700
      }
    }, "+", fmt(a.price)));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "0 0 auto",
      padding: "14px 24px 26px",
      borderTop: "1px solid var(--line-200)",
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(QS2, {
    value: qty,
    min: 1,
    max: 20,
    onChange: setQty,
    size: "lg"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Btn2, {
    variant: "solid",
    size: "lg",
    full: true,
    onClick: () => onConfirm(item, qty)
  }, "Agregar \xB7 ", fmt(total))))));
}
Object.assign(window, {
  ItemSheet
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/delivery/ItemSheet.jsx", error: String((e && e.message) || e) }); }

// ui_kits/delivery/Tracking.jsx
try { (() => {
/* Beefys delivery — Order tracking screen */
const {
  Button: Btn4,
  Doodle: Dood4,
  IconButton: IB4
} = window.BeefysDesignSystem_881125;
function Tracking({
  mode,
  onDone
}) {
  const steps = [{
    id: "confirmed",
    label: "Pedido confirmado",
    icon: "check"
  }, {
    id: "cooking",
    label: "En la cocina",
    icon: "flame"
  }, {
    id: mode === "delivery" ? "onway" : "ready",
    label: mode === "delivery" ? "En camino" : "Listo para recoger",
    icon: mode === "delivery" ? "bike" : "store"
  }, {
    id: "done",
    label: mode === "delivery" ? "Entregado" : "Recogido",
    icon: "party-popper"
  }];
  const [active, setActive] = React.useState(1);
  React.useEffect(() => {
    setTimeout(() => window.lucide && window.lucide.createIcons(), 30);
    const t = setInterval(() => setActive(a => a < steps.length - 1 ? a + 1 : a), 2600);
    return () => clearInterval(t);
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--beefy-ketchup)",
      padding: "26px 24px 30px",
      flex: "0 0 auto",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -10,
      right: -6,
      color: "rgba(227,230,0,0.9)"
    }
  }, /*#__PURE__*/React.createElement(Dood4, {
    name: "star",
    size: 120
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--beefy-lettuce)",
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: 13,
      textTransform: "uppercase",
      marginBottom: 10
    }
  }, "Pedido #BF-2048"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: "var(--white)",
      fontWeight: 900,
      fontSize: 34,
      textTransform: "uppercase",
      lineHeight: 0.96,
      margin: 0
    }
  }, active >= steps.length - 1 ? "¡Buen provecho!" : "Tu Beefy va\nen camino"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 8,
      marginTop: 16,
      color: "var(--white)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 900,
      fontSize: 40,
      lineHeight: 1
    }
  }, mode === "delivery" ? "18" : "9"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: 15
    }
  }, "min restantes"))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 120,
      background: "var(--standard-grey)",
      position: "relative",
      overflow: "hidden",
      flex: "0 0 auto",
      borderBottom: "1px solid var(--line-200)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "120",
    style: {
      position: "absolute",
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 20 100 C 120 30 260 140 410 40",
    fill: "none",
    stroke: "var(--beefy-ketchup)",
    strokeWidth: "4",
    strokeDasharray: "2 12",
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 14,
      bottom: 14,
      width: 34,
      height: 34,
      borderRadius: 999,
      background: "var(--ink-900)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "store",
    style: {
      color: "var(--beefy-lettuce)",
      width: 18,
      height: 18
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 14,
      top: 18,
      width: 38,
      height: 38,
      borderRadius: 999,
      background: "var(--beefy-ketchup)",
      border: "3px solid var(--white)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": mode === "delivery" ? "bike" : "map-pin",
    style: {
      color: "var(--white)",
      width: 18,
      height: 18
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      overflowY: "auto",
      padding: "22px 24px 0"
    }
  }, steps.map((s, i) => {
    const done = i < active,
      cur = i === active;
    return /*#__PURE__*/React.createElement("div", {
      key: s.id,
      style: {
        display: "flex",
        gap: 14,
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flex: "0 0 auto"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 40,
        height: 40,
        borderRadius: 999,
        background: done || cur ? "var(--beefy-ketchup)" : "var(--standard-grey)",
        color: done || cur ? "var(--white)" : "var(--ink-300)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all var(--dur-base) var(--ease-pop)"
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": done ? "check" : s.icon,
      style: {
        width: 19,
        height: 19
      }
    })), i < steps.length - 1 && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 3,
        height: 34,
        background: done ? "var(--beefy-ketchup)" : "var(--line-200)",
        borderRadius: 2
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingTop: 9
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontWeight: 700,
        fontSize: 16,
        color: cur ? "var(--ink-900)" : done ? "var(--ink-700)" : "var(--ink-300)"
      }
    }, s.label), cur && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "var(--ink-500)",
        marginTop: 2
      }
    }, "Ahora mismo")));
  }), mode === "delivery" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginTop: 18,
      padding: 14,
      background: "var(--standard-grey)",
      borderRadius: "var(--radius-lg)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 999,
      background: "var(--beefy-lettuce)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--ink-900)",
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement(Dood4, {
    name: "flex",
    size: 30
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: 15,
      color: "var(--ink-900)"
    }
  }, "Marco \xB7 Rider"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--ink-500)"
    }
  }, "Moto \xB7 BF-2048")), /*#__PURE__*/React.createElement(IB4, {
    "aria-label": "Llamar",
    variant: "dark"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "phone"
  })), /*#__PURE__*/React.createElement(IB4, {
    "aria-label": "Mensaje",
    variant: "lettuce"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "message-circle"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "0 0 auto",
      padding: "14px 20px 26px",
      borderTop: "1px solid var(--line-200)"
    }
  }, /*#__PURE__*/React.createElement(Btn4, {
    variant: "outline",
    size: "lg",
    full: true,
    onClick: onDone
  }, "Volver al men\xFA")));
}
Object.assign(window, {
  Tracking
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/delivery/Tracking.jsx", error: String((e && e.message) || e) }); }

// ui_kits/delivery/data.js
try { (() => {
/* Beefys delivery — demo menu data (window.BEEFY_DATA) */
window.BEEFY_DATA = {
  categories: [{
    id: "burgers",
    label: "Burgers"
  }, {
    id: "combos",
    label: "Combos"
  }, {
    id: "sides",
    label: "Sides"
  }, {
    id: "drinks",
    label: "Bebidas"
  }],
  items: [{
    id: "classic",
    cat: "burgers",
    name: "Classic Beefy",
    desc: "La clásica. Carne smash, American cheese, pepinillos, salsa Beefy.",
    price: 7.9,
    kcal: 620,
    tag: {
      tone: "lettuce",
      text: "Top ventas"
    },
    photo: true
  }, {
    id: "double",
    cat: "burgers",
    name: "Double Trouble",
    desc: "Doble carne, doble queso, cebolla caramelizada. Para los que tienen hambre de verdad.",
    price: 10.5,
    kcal: 920,
    tag: {
      tone: "ketchup",
      text: "Más carne"
    },
    photo: true
  }, {
    id: "spicy",
    cat: "burgers",
    name: "Spicy Diabla",
    desc: "Jalapeños, salsa diabla, pepper jack. Pica rico.",
    price: 9.2,
    kcal: 700,
    tag: {
      tone: "cheese",
      text: "Picante"
    },
    photo: true
  }, {
    id: "bacon",
    cat: "burgers",
    name: "BBQ Bacon",
    desc: "Bacon crujiente, aros de cebolla, salsa BBQ ahumada.",
    price: 10.9,
    kcal: 880,
    tag: null,
    photo: true
  }, {
    id: "veggie",
    cat: "burgers",
    name: "Veggie Beefy",
    desc: "Plant-based smash, lechuga fresca, tomate. 100% sin drama.",
    price: 8.5,
    kcal: 540,
    tag: {
      tone: "outline",
      text: "Veggie"
    },
    photo: true
  }, {
    id: "cheese",
    cat: "burgers",
    name: "Cheese Lover",
    desc: "Triple American cheese fundido sobre carne smash.",
    price: 8.9,
    kcal: 760,
    tag: null,
    photo: true
  }, {
    id: "combo1",
    cat: "combos",
    name: "Combo Classic",
    desc: "Classic Beefy + papas + bebida. Ahorra $2.",
    price: 11.9,
    kcal: 1080,
    tag: {
      tone: "pink",
      text: "Combo"
    },
    photo: true
  }, {
    id: "combo2",
    cat: "combos",
    name: "Combo Doble",
    desc: "Double Trouble + aros + malteada.",
    price: 16.5,
    kcal: 1640,
    tag: {
      tone: "pink",
      text: "Combo"
    },
    photo: true
  }, {
    id: "fries",
    cat: "sides",
    name: "Papas Beefy",
    desc: "Crujientes por fuera, suaves por dentro. Con sal Beefy.",
    price: 3.5,
    kcal: 420,
    tag: null,
    photo: false,
    doodle: "star"
  }, {
    id: "rings",
    cat: "sides",
    name: "Aros de cebolla",
    desc: "Onion rings dorados, salsa ranch.",
    price: 4.2,
    kcal: 480,
    tag: null,
    photo: false,
    doodle: "flex"
  }, {
    id: "nuggets",
    cat: "sides",
    name: "Nuggets x6",
    desc: "Pollo crujiente, elige tu salsa.",
    price: 5.0,
    kcal: 510,
    tag: null,
    photo: false,
    doodle: "heart"
  }, {
    id: "lemon",
    cat: "drinks",
    name: "Limonada",
    desc: "Hecha en casa, bien fría.",
    price: 2.9,
    kcal: 120,
    tag: null,
    photo: false,
    doodle: "star"
  }, {
    id: "cola",
    cat: "drinks",
    name: "Cola",
    desc: "Clásica de lata, 355ml.",
    price: 2.5,
    kcal: 140,
    tag: null,
    photo: false,
    doodle: "b"
  }, {
    id: "shake",
    cat: "drinks",
    name: "Malteada",
    desc: "Vainilla, chocolate o fresa.",
    price: 4.9,
    kcal: 560,
    tag: {
      tone: "pink",
      text: "Nuevo"
    },
    photo: false,
    doodle: "heart"
  }],
  // small flat-color tiles by category for non-photo items
  tile: {
    sides: "var(--beefy-cheese)",
    drinks: "var(--teenage-pink)"
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/delivery/data.js", error: String((e && e.message) || e) }); }

// ui_kits/delivery/shell.jsx
try { (() => {
/* Beefys delivery — shared shell + helpers. Exposes on window. */

const fmt = n => "$" + n.toFixed(2);

// Status bar (fake iOS-ish), mono brand font
function StatusBar({
  dark
}) {
  const c = dark ? "var(--white)" : "var(--ink-900)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 22px",
      color: c,
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: 14,
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "signal",
    style: {
      width: 16,
      height: 16
    }
  }), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "wifi",
    style: {
      width: 16,
      height: 16
    }
  }), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "battery-full",
    style: {
      width: 20,
      height: 20
    }
  })));
}

// Phone shell — fixed 430x station, content scrolls inside
function PhoneShell({
  children,
  statusDark = false,
  bg = "var(--white)"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 430,
      height: 880,
      background: bg,
      borderRadius: 44,
      boxShadow: "0 40px 90px rgba(44,44,44,0.28), 0 0 0 11px #111 , 0 0 0 13px #2c2c2c",
      overflow: "hidden",
      position: "relative",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(StatusBar, {
    dark: statusDark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      position: "relative",
      display: "flex",
      flexDirection: "column"
    }
  }, children));
}

// A pill segmented control (delivery / pickup, category, etc.)
function Segmented({
  options,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      background: "var(--standard-grey)",
      borderRadius: "var(--radius-pill)",
      padding: 4,
      gap: 2
    }
  }, options.map(o => {
    const on = o.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      type: "button",
      onClick: () => onChange(o.value),
      style: {
        border: "none",
        cursor: "pointer",
        fontFamily: "var(--font-mono)",
        fontWeight: 700,
        fontSize: 14,
        padding: "9px 18px",
        borderRadius: "var(--radius-pill)",
        background: on ? "var(--ink-900)" : "transparent",
        color: on ? "var(--white)" : "var(--ink-500)",
        transition: "background var(--dur-fast), color var(--dur-fast)"
      }
    }, o.label);
  }));
}
Object.assign(window, {
  fmt,
  StatusBar,
  PhoneShell,
  Segmented
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/delivery/shell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Doodle = __ds_scope.Doodle;

__ds_ns.DOODLE_NAMES = __ds_scope.DOODLE_NAMES;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.QtyStepper = __ds_scope.QtyStepper;

__ds_ns.Input = __ds_scope.Input;

})();

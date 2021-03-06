import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

export const Chat = function (props) {
  return (
    <Svg width={19} height={19} viewBox="0 0 19 19" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.237 1.266C0 2.532 0 4.569 0 8.643v8.26c0 .846 0 1.269.11 1.495.234.486.783.718 1.284.545.234-.081.526-.38 1.11-.978.474-.485.71-.727.971-.923a4.17 4.17 0 011.853-.785c.32-.05.654-.05 1.324-.05h4.431c3.47 0 5.205 0 6.373-.982.214-.18.41-.38.586-.599C19 13.431 19 11.655 19 8.103c0-3.552 0-5.328-.958-6.523a4.28 4.28 0 00-.586-.599C16.288 0 14.554 0 11.083 0H8.444c-3.98 0-5.97 0-7.207 1.266zM4.75 9.724c.874 0 1.583-.726 1.583-1.62 0-.896-.709-1.622-1.583-1.622s-1.583.726-1.583 1.621.709 1.62 1.583 1.62zm6.333-1.62c0 .894-.709 1.62-1.583 1.62s-1.583-.726-1.583-1.62c0-.896.709-1.622 1.583-1.622s1.583.726 1.583 1.621zm3.167 1.62c.874 0 1.583-.726 1.583-1.62 0-.896-.709-1.622-1.583-1.622s-1.583.726-1.583 1.621.709 1.62 1.583 1.62z"
      />
    </Svg>
  );
};

export const Star = function (props) {
  return (
    <Svg width={20} height={19} viewBox="0 0 20 19" fill="none" {...props}>
      <Path d="M9.085.597c.347-.796 1.483-.796 1.83 0l2.102 4.816a.997.997 0 00.82.592l5.259.498c.869.083 1.22 1.156.565 1.73l-3.96 3.475a.988.988 0 00-.313.958l1.149 5.124c.19.847-.73 1.51-1.481 1.07l-4.549-2.67a1.003 1.003 0 00-1.014 0l-4.549 2.67c-.752.44-1.67-.223-1.48-1.07l1.148-5.123a.988.988 0 00-.314-.96L.338 8.234c-.654-.574-.303-1.647.566-1.73l5.259-.498a.997.997 0 00.82-.592L9.085.597z" />
    </Svg>
  );
};

export const HomeIcon = function (props) {
  return (
    <Svg width={19} height={19} viewBox="0 0 19 19" fill="none" {...props}>
      <Path d="M19 15.943v-5.51c0-1.801 0-2.702-.37-3.499-.371-.796-1.069-1.395-2.464-2.592l-1.056-.906C12.44 1.146 11.105 0 9.5 0 7.895 0 6.56 1.145 3.89 3.436l-1.056.906C1.44 5.539.741 6.138.371 6.934 0 7.731 0 8.632 0 10.434v5.51c0 .949 0 1.424.16 1.798.215.5.626.896 1.143 1.103.388.155.88.155 1.864.155h.352c.654 0 .981 0 1.25-.07a2.076 2.076 0 001.492-1.44c.072-.26.072-.575.072-1.207v-2.377c0-1.689 1.418-3.057 3.167-3.057 1.749 0 3.167 1.368 3.167 3.057v2.377c0 .632 0 .947.072 1.207a2.076 2.076 0 001.492 1.44c.269.07.596.07 1.25.07h.352c.984 0 1.476 0 1.864-.155a2.076 2.076 0 001.142-1.103c.161-.374.161-.85.161-1.799z" />
    </Svg>
  );
};

export const Heart = function (props) {
  return (
    <Svg width={18} height={17} viewBox="0 0 18 17" fill="none" {...props}>
      <Path d="M9 17C-8.558 6.892 4.14-5.676 9 2.788 13.86-5.676 26.56 6.892 9 17z" />
    </Svg>
  );
};

export const Notification = function (props) {
  return (
    <Svg width={19} height={22} viewBox="0 0 19 22" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.4 0C5.698 0 2.696 2.955 2.696 6.6v2.829c0 1.02-.336 2.012-.958 2.828l-1.42 1.864c-.543.713-.384 1.689.447 2.042C2.26 16.8 5.016 17.6 9.4 17.6c4.385 0 7.14-.802 8.637-1.437.831-.353.99-1.33.447-2.042l-1.42-1.864a4.666 4.666 0 01-.958-2.828V6.6c0-3.645-3.002-6.6-6.706-6.6zm0 21.45c-1.392 0-2.546-1.003-2.758-2.314a32.04 32.04 0 002.759.114c1.004 0 1.922-.042 2.76-.114-.213 1.311-1.368 2.314-2.76 2.314z"
      />
    </Svg>
  );
};

export const Card = function (props) {
  return (
    <Svg width={14} height={10} viewBox="0 0 14 10" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 1.875C0 .839.855 0 1.91 0h10.18C13.146 0 14 .84 14 1.875v6.25C14 9.161 13.145 10 12.09 10H1.91C.854 10 0 9.16 0 8.125v-6.25zm1.91-.625a.63.63 0 00-.637.625V2.5h11.454v-.625a.63.63 0 00-.636-.625H1.909zm10.817 2.5H1.273v4.375a.63.63 0 00.636.625h10.182a.63.63 0 00.636-.625V3.75zm-5.09 3.125a.63.63 0 01.636-.625h2.545a.63.63 0 01.636.625.63.63 0 01-.636.625H8.273a.63.63 0 01-.637-.625z"
      />
    </Svg>
  );
};

export const Settings = function (props) {
  return (
    <Svg width={14} height={14} viewBox="0 0 14 14" fill="none" {...props}>
      <Path
        clipRule="evenodd"
        d="M5.72 2.075c.275-1.433 2.285-1.433 2.56 0 .166.872 1.11 1.335 1.882.924 1.27-.675 2.523.929 1.595 2.04-.564.678-.331 1.718.465 2.078 1.31.591.862 2.59-.57 2.544-.87-.028-1.522.806-1.302 1.666.363 1.412-1.449 2.302-2.305 1.132a1.289 1.289 0 00-2.09 0c-.856 1.17-2.668.28-2.305-1.132.22-.86-.432-1.694-1.303-1.666-1.431.046-1.878-1.953-.57-2.544.797-.36 1.03-1.4.466-2.077-.928-1.112.325-2.716 1.595-2.04.773.41 1.716-.053 1.882-.925z"
        stroke={"#fff"}
        strokeWidth={1.5}
      />
      <Path
        clipRule="evenodd"
        d="M9 7a2 2 0 11-4 0 2 2 0 014 0z"
        stroke="#fff"
        strokeWidth={1.5}
      />
    </Svg>
  );
};

export const Triangle = function (props) {
  return (
    <Svg width={8} height={12} viewBox="0 0 8 12" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.933 5.2a1 1 0 010 1.6l-5.333 4A1 1 0 010 10V2a1 1 0 011.6-.8l5.333 4z"
      />
    </Svg>
  );
};

export const Gift = function SvgComponent(props) {
  return (
    <Svg width={18} height={18} viewBox="0 0 18 18" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.27 2.252a1.212 1.212 0 00-1.694-.384c-.346.225-.92.823-1.335 1.498-.203.331-.336.632-.393.866a.912.912 0 00-.03.205v.008a.27.27 0 00.005.05c.02.016.085.057.244.088.232.047.555.05.935.002.774-.098 1.547-.377 1.893-.602a1.27 1.27 0 00.375-1.731zM4.341 5.464H.818A.827.827 0 000 6.3v3.343c0 .461.366.835.818.835v5.85c0 .924.733 1.672 1.637 1.672H15.546c.903 0 1.636-.748 1.636-1.672v-5.85A.827.827 0 0018 9.643V6.3a.827.827 0 00-.818-.836h-3.523a3.21 3.21 0 00.115-.072c1.334-.868 1.726-2.676.877-4.038a2.828 2.828 0 00-3.954-.896C10.146.818 9.49 1.515 9 2.252 8.509 1.515 7.854.817 7.303.458a2.828 2.828 0 00-3.954.896c-.85 1.362-.457 3.17.877 4.038l.115.072zm3.841-1.027v.008a.27.27 0 01-.005.05.612.612 0 01-.244.088c-.232.047-.555.05-.935.002-.774-.098-1.547-.377-1.893-.602a1.27 1.27 0 01-.375-1.731 1.212 1.212 0 011.694-.384c.345.225.92.823 1.334 1.498.204.331.337.632.394.866.023.096.03.162.03.205zm-5.727 6.041v5.85h5.727v-5.85H2.455zm5.727-1.671H1.636V7.135h6.546v1.672zm1.636 1.671v5.85h5.728v-5.85H9.818zm0-1.671V7.135h6.546v1.672H9.818z"
      />
    </Svg>
  );
};

export const StarOutline = function SvgComponent(props) {
  return (
    <Svg width={18} height={17} viewBox="0 0 18 17" fill="none" {...props}>
      <Path
        clipRule="evenodd"
        d="M8.268 1.471c.278-.628 1.186-.628 1.464 0l1.681 3.802c.116.262.367.441.657.468l4.206.393c.696.065.977.913.453 1.366l-3.167 2.743a.774.774 0 00-.251.757l.918 4.045c.152.668-.583 1.192-1.184.844l-3.64-2.107a.812.812 0 00-.81 0l-3.64 2.107c-.601.348-1.336-.175-1.184-.844L4.689 11a.774.774 0 00-.25-.757L1.27 7.5c-.524-.453-.243-1.3.452-1.366l4.207-.393a.797.797 0 00.657-.468l1.68-3.802z"
        stroke="#fff"
      />
    </Svg>
  );
};

export const BGC1 = function SvgComponent(props) {
  return (
    <Svg width={112} height={93} viewBox="0 0 112 93" fill="none" {...props}>
      <Rect y={-17} width={112} height={110} rx={25} />
    </Svg>
  );
};

export const BGC2 = function SvgComponent({ fill }) {
  return (
    <Svg width={112} height={98} viewBox="0 0 112 98" fill="none">
      <Rect width={112} height={110} rx={25} fill={fill} />
    </Svg>
  );
};

export const BGC3 = function SvgComponent({ fill }) {
  return (
    <Svg width={74} height={72} viewBox="0 0 74 72" fill="none">
      <Rect width={74} height={72} rx={36} fill={fill} />
    </Svg>
  );
};

export const StarFull = function SvgComponent(props) {
  return (
    <Svg width={18} height={17} viewBox="0 0 18 17" fill="none" {...props}>
      <Path d="M8.176.534c.313-.712 1.335-.712 1.648 0l1.891 4.31c.13.296.413.499.739.53l4.732.445c.782.073 1.098 1.034.51 1.548l-3.564 3.108a.88.88 0 00-.282.858l1.033 4.585c.17.757-.656 1.35-1.333.956l-4.094-2.387a.908.908 0 00-.912 0L4.45 16.873c-.677.395-1.504-.199-1.333-.956l1.033-4.585a.88.88 0 00-.282-.858L.305 7.367c-.59-.514-.273-1.475.509-1.548l4.732-.446a.897.897 0 00.739-.53L8.176.534z" />
    </Svg>
  );
};

export const Fork = function SvgComponent(props) {
  return (
    <Svg width={14} height={16} viewBox="0 0 14 16" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.059.8c0-.442-.369-.8-.824-.8a.812.812 0 00-.823.8V4c0 1.491 1.05 2.744 2.47 3.1v8.1c0 .442.369.8.824.8a.812.812 0 00.823-.8V7.1C12.95 6.743 14 5.49 14 4V.8c0-.442-.369-.8-.823-.8a.812.812 0 00-.824.8V4c0 .592-.331 1.11-.824 1.386V.8c0-.442-.368-.8-.823-.8a.812.812 0 00-.824.8v4.586A1.592 1.592 0 019.06 4V.8zM1.247.114L.824.8c.423-.686.424-.686.424-.685h.001l.003.002.006.004.017.01.052.032a6.268 6.268 0 01.702.552c.434.394.996.997 1.552 1.861C4.697 4.311 5.765 7.059 5.765 11.2c0 .442-.369.8-.824.8H1.647v3.2c0 .442-.369.8-.823.8A.812.812 0 010 15.2V.8C0 .512.16.246.418.104a.844.844 0 01.83.01z"
      />
    </Svg>
  );
};

export const MapPin = function SvgComponent(props) {
  return (
    <Svg width={50} height={53} viewBox="0 0 50 53" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 16C0 8.458 0 4.686 2.343 2.343S8.458 0 16 0h18c7.542 0 11.314 0 13.657 2.343S50 8.458 50 16v15.762c0 7.542 0 11.313-2.343 13.657-2.343 2.343-6.115 2.343-13.658 2.343h-4.882c-1.87 0-4.147 5.238-4.147 5.238s-2.545-5.238-4.076-5.238h-4.89c-7.545 0-11.318 0-13.66-2.343C0 43.075 0 39.304 0 31.762V16z"
      />
    </Svg>
  );
};

export const FullScreen = function SvgComponent(props) {
  return (
    <Svg width={17} height={18} viewBox="0 0 17 18" fill="none" {...props}>
      <Path d="M2.136 13.95a1 1 0 101.414 1.414L2.136 13.95zm12.728-9.9a1 1 0 00-1.414-1.414l1.414 1.414zM1.843 14.657a1 1 0 102 0h-2zm2-4.95a1 1 0 00-2 0h2zm-1 3.95a1 1 0 100 2v-2zm4.95 2a1 1 0 100-2v2zm6.364-11.314a1 1 0 000-2v2zm-4.95-2a1 1 0 000 2v-2zm5.95 1a1 1 0 00-2 0h2zm-2 4.95a1 1 0 102 0h-2zM3.55 15.364L14.864 4.05 13.45 2.636 2.136 13.95l1.414 1.414zm.293-.707v-4.95h-2v4.95h2zm-1 1h4.95v-2h-4.95v2zM14.157 2.343h-4.95v2h4.95v-2zm-1 1v4.95h2v-4.95h-2z" />
    </Svg>
  );
};

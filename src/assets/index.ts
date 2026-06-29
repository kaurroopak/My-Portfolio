// Main assets module - consolidates common assets
import aboutMeJournalPng from './journal.PNG';
import aboutMeJournalWebp800 from './journal.PNG';
import aboutMeJournalWebp400 from './journal.PNG';
// Add your profile images here
import profile1 from './profile1.jpg';
import profile2 from './profile2.jpg';
import profile3 from './profile3.jpg';
// const profile1 = '';
// const profile2 = '';
// const profile3 = '';
import comingSoon from './coming_soon.png';
import dividerPng from './divider.PNG';
import dividerWebp from './divider-original.webp';
import divider from './divider-original.webp';

import smartdeskai1 from "./project_snapshots/smartdeskai/smartdeskai_snapshot_1.png";
import smartdeskai2 from "./project_snapshots/smartdeskai/smartdeskai_snapshot_2.png";
import smartdeskai3 from "./project_snapshots/smartdeskai/smartdeskai_snapshot_3.png";
import smartdeskai4 from "./project_snapshots/smartdeskai/smartdeskai_snapshot_4.png";
import smartdeskai5 from "./project_snapshots/smartdeskai/smartdeskai_snapshot_5.png";
import smartdeskai6 from "./project_snapshots/smartdeskai/smartdeskai_snapshot_6.png";
import smartdeskai7 from "./project_snapshots/smartdeskai/smartdeskai_snapshot_7.png";
import smartdeskai8 from "./project_snapshots/smartdeskai/smartdeskai_snapshot_8.png";

import alzheimer1 from "./project_snapshots/alzheimerRisk/alzheimer_snapshot_1.png";
import alzheimer2 from "./project_snapshots/alzheimerRisk/alzheimer_snapshot_2.png";
import alzheimer3 from "./project_snapshots/alzheimerRisk/alzheimer_snapshot_3.png";
import alzheimer4 from "./project_snapshots/alzheimerRisk/alzheimer_snapshot_4.png";
import alzheimer5 from "./project_snapshots/alzheimerRisk/alzheimer_snapshot_5.png";

import fingerCounting1 from "./project_snapshots/fingerCounting/fingerCounting_snapshot_1.png";
import fingerCounting2 from "./project_snapshots/fingerCounting/fingerCounting_snapshot_2.png";
import fingerCounting3 from "./project_snapshots/fingerCounting/fingerCounting_snapshot_3.png";

import bae1 from "./project_snapshots/bae/bae_snapshot_1.png";
import bae2 from "./project_snapshots/bae/bae_snapshot_2.png";
import bae3 from "./project_snapshots/bae/bae_snapshot_3.png";
import bae4 from "./project_snapshots/bae/bae_snapshot_4.png";
import bae5 from "./project_snapshots/bae/bae_snapshot_5.png";
import bae6 from "./project_snapshots/bae/bae_snapshot_6.png";
import bae7 from "./project_snapshots/bae/bae_snapshot_7.png";
import bae8 from "./project_snapshots/bae/bae_snapshot_8.png";
import bae9 from "./project_snapshots/bae/bae_snapshot_9.png";
import bae10 from "./project_snapshots/bae/bae_snapshot_10.png";

import studdyBuzz1 from "./project_snapshots/studdybuzz/studybuzz_snapshot_1.png";
import studdyBuzz2 from "./project_snapshots/studdybuzz/studybuzz_snapshot_2.png";

import emotion1 from "./project_snapshots/realtimeEmotion/emotion_snapshot_1.png";
import emotion2 from "./project_snapshots/realtimeEmotion/emotion_snapshot_2.png";

import ginnie1 from "./project_snapshots/ginnieVA/ginnie_snapshot_1.png";
import ginnie2 from "./project_snapshots/ginnieVA/ginnie_snapshot_2.png";
import ginnie3 from "./project_snapshots/ginnieVA/ginnie_snapshot_3.png";
import ginnie4 from "./project_snapshots/ginnieVA/ginnie_snapshot_4.png";
import ginnie5 from "./project_snapshots/ginnieVA/ginnie_snapshot_5.png";
import ginnie6 from "./project_snapshots/ginnieVA/ginnie_snapshot_6.png";
import ginnie7 from "./project_snapshots/ginnieVA/ginnie_snapshot_7.png";
import ginnie8 from "./project_snapshots/ginnieVA/ginnie_snapshot_8.png";
import ginnie9 from "./project_snapshots/ginnieVA/ginnie_snapshot_9.png";
import ginnie10 from "./project_snapshots/ginnieVA/ginnie_snapshot_10.png";
import ginnie11 from "./project_snapshots/ginnieVA/ginnie_snapshot_11.png";
import ginnie12 from "./project_snapshots/ginnieVA/ginnie_snapshot_12.png";
import ginnie13 from "./project_snapshots/ginnieVA/ginnie_snapshot_13.png";
import ginnie14 from "./project_snapshots/ginnieVA/ginnie_snapshot_14.png";

// For backward compatibility
const aboutMeJournal = aboutMeJournalPng;

// Re-export all asset modules
export * from './stars';
export * from './stickers';
export * from './project_icons';
export * from './techstack';

// Export main assets
export const mainAssets = {
  aboutMeJournal,
  aboutMeJournalPng,
  aboutMeJournalWebp800,
  aboutMeJournalWebp400,
  profile1,
  profile2,
  profile3,
  comingSoon,
  divider,
  dividerPng,
  dividerWebp,
};

// export project snapshots
export const smartdeskai = [
  smartdeskai1,
  smartdeskai2,
  smartdeskai3,
  smartdeskai4,
  smartdeskai5,
  smartdeskai6,
  smartdeskai7,
  smartdeskai8,
];

export const alzheimerRisk = [
  alzheimer1,
  alzheimer2,
  alzheimer3,
  alzheimer4,
  alzheimer5,
];

export const fingerCounting = [
  fingerCounting1,
  fingerCounting2,
  fingerCounting3,
];

export const bae = [
  bae1,
  bae2,
  bae3,
  bae4,
  bae5,
  bae6,
  bae7,
  bae8,
  bae9,
  bae10,
];

export const studybuzz = [
  studdyBuzz1,
  studdyBuzz2,
];

export const realtimeEmotion = [
  emotion1,
  emotion2,
];

export const ginnieVA = [
  ginnie1,
  ginnie2,
  ginnie3,
  ginnie4,
  ginnie5,
  ginnie6,
  ginnie7,
  ginnie8,
  ginnie9,
  ginnie10,
  ginnie11,
  ginnie12,
  ginnie13,
  ginnie14,
]


export {
  aboutMeJournal,
  aboutMeJournalPng,
  aboutMeJournalWebp800,
  aboutMeJournalWebp400,
  profile1,
  profile2,
  profile3,
  comingSoon,
  divider,
  dividerPng,
  dividerWebp,
};

export default {
  mainAssets,
};

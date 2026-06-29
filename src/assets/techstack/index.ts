// Tech stack assets module - consolidates all tech stack icons
import AWSLight from './AWS-Light.svg';
import Bootstrap from './Bootstrap.svg';
import C from './C.svg';
import CPP from './CPP.svg';
import CS from './CS.svg';
import CSS from './CSS.svg';
import DartLight from './Dart-Light.svg';
import Docker from './Docker.svg';
import Electron from './Electron.svg';
import ExpressJSLight from './ExpressJS-Light.svg';
import FastAPI from './FastAPI.svg';
import Flask from './Flask.svg';
import FlutterLight from './Flutter-Light.svg';
import Git from './Git.svg';
import GithubLight from './Github-Light.svg';
import GraphQLLight from './GraphQL-Light.svg';
import HTML from './HTML.svg';
import JavaLight from './Java-Light.svg';
import JavaScript from './JavaScript.svg';
import JQuery from './JQuery.svg';
import Jupyter from './Jupyter.svg';
import Keras from './Keras.svg';
import LaTeXLight from './LaTeX-Light.svg';
import MaterialUILight from './MaterialUI-Light.svg';
import Matplotlib from './Matplotlib.svg';
import Mediapipe from './Mediapipe.svg';
import MongoDB from './MongoDB.svg';
import MySQL from './MySQL.svg';
import NodeJSLight from './NodeJS-Light.svg';
import NotionLight from './Notion-Light.svg';
import NpmLight from './Npm-Light.svg';
import Numpy from './Numpy.svg';
import OpenCV from './OpenCV.svg';
import Pandas from './Pandas.svg';
import Postman from './Postman.svg';
import Python from './Python.svg';
import Pytorch from './Pytorch.svg';
import ReactLight from './React-Light.svg';
import RedisLight from './Redis-Light.svg';
import SQL from './SQL.svg';
import StackOverflowLight from './StackOverflow-Light.svg';
import Streamlit from './Streamlit.svg';
import TailwindCSSLight from './TailwindCSS-Light.svg';
import TensorFlowLight from './TensorFlow-Light.svg';
import ThreeJSLight from './ThreeJS-Light.svg';
import TypeScript from './TypeScript.svg';
import UnityLight from './Unity-Light.svg';
import VercelLight from './Vercel-Light.svg';
import ViteLight from './Vite-Light.svg';
import VScode from './VScode.svg';

export const techStackIcons = {
  AWSLight,
  Bootstrap,
  C,
  CPP,
  CS,
  CSS,
  DartLight,
  Docker,
  Electron,
  ExpressJSLight,
  FastAPI,
  Flask,
  FlutterLight,
  Git,
  GithubLight,
  GraphQLLight,
  HTML,
  JavaLight,
  JavaScript,
  JQuery,
  Jupyter,
  Keras,
  LaTeXLight,
  MaterialUILight,
  Matplotlib,
  Mediapipe,
  MongoDB,
  MySQL,
  NodeJSLight,
  NotionLight,
  NpmLight,
  Numpy,
  OpenCV,
  Pandas,
  Postman,
  Python,
  Pytorch,
  ReactLight,
  RedisLight,
  SQL,
  StackOverflowLight,
  Streamlit,
  TailwindCSSLight,
  TensorFlowLight,
  ThreeJSLight,
  TypeScript,
  UnityLight,
  VercelLight,
  ViteLight,
  VScode,
};

// Export as array for easier iteration if needed
export const techStackArray = Object.entries(techStackIcons).map(([name, icon]) => ({
  name,
  icon,
}));

export default techStackIcons;
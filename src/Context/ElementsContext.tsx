import { createContext, PropsWithChildren, useContext } from "react";
import Hamster from "../components/ListComponent/Animals/Hamster";
import ExpandButton from "../components/ListComponent/Buttons/ExpandButton";
import KeyboardButton from "../components/ListComponent/Buttons/KeyboardButton";
import ShadowButton from "../components/ListComponent/Buttons/ShadowButton";
import Card3DHoverEffect from "../components/ListComponent/Cards/Card3DHoverEffect";
import CardShadowHover from "../components/ListComponent/Cards/CardShadowHover";
import DotWave from "../components/ListComponent/Loaders/DotWave";
import ThreeDotAround from "../components/ListComponent/Loaders/ThreeDotAround";
import BurstShape from "../components/ListComponent/Shapes/BurstShape";
import Cube from "../components/ListComponent/Loaders/Cube";
import CurvedTailArrowShape from "../components/ListComponent/Shapes/CurvedTailArrowShape";
import DiamondNarrowShape from "../components/ListComponent/Shapes/DiamondNarrowShape";
import EggShape from "../components/ListComponent/Shapes/EggShape";
import HeartShape from "../components/ListComponent/Shapes/HeartShape";
import HexagonShape from "../components/ListComponent/Shapes/HexagonShape";
import InfinityShape from "../components/ListComponent/Shapes/InfinityShape";
import Moustache from "../components/ListComponent/Shapes/Moustache";
import OctagonShape from "../components/ListComponent/Shapes/OctagonShape";
import OvalShape from "../components/ListComponent/Shapes/OvalShape";
import PacManShape from "../components/ListComponent/Shapes/PacManShape";
import PentagonShape from "../components/ListComponent/Shapes/PentagonShape";
import RectangleShape from "../components/ListComponent/Shapes/RectangleShape";
import SquareShape from "../components/ListComponent/Shapes/SquareShape";
import Star from "../components/ListComponent/Shapes/Star";
import TrapezoidShape from "../components/ListComponent/Shapes/TrapezoidShape";
import TritangleShape from "../components/ListComponent/Shapes/TriangleShape";
import YinYangShape from "../components/ListComponent/Shapes/YinYangShape";
import { UIItem } from "../types";
import FlipCard from "../components/ListComponent/Cards/FlipCard";
import ExpandUp3DButton from "../components/ListComponent/Buttons/ExpandUp3DButtont";
import LineUpButton from "../components/ListComponent/Buttons/LineUpButton";
import NewtonsCardleDot from "../components/ListComponent/Loaders/NewtonsCardleDot";
import BouncingCircle from "../components/ListComponent/Loaders/BouncingBall";
import Rain from "../components/ListComponent/Loaders/Rain";
import BoxHoverButton from "../components/ListComponent/Buttons/BoxHoverButton";
import BoxRotate from "../components/ListComponent/Loaders/BoxRotate";
import Glitch from "../components/ListComponent/Text/Glitch";
import { sortShapeElements } from "../helpers";
import Hover3DButton from "../components/ListComponent/Buttons/Hover3DButton";
import Navarog21 from "../components/ListComponent/Loaders/Navarog21";

const List: UIItem[] = [
  {
    component: <BurstShape />,
    type: "shape",
  },
  {
    component: <CurvedTailArrowShape />,
    type: "shape",
  },
  {
    component: <DiamondNarrowShape />,
    type: "shape",
  },
  {
    component: <EggShape />,
    type: "shape",
  },
  {
    component: <HeartShape />,
    type: "shape",
  },
  {
    component: <HexagonShape />,
    type: "shape",
  },
  {
    component: <InfinityShape />,
    type: "shape",
  },
  {
    component: <Moustache />,
    type: "shape",
  },
  {
    component: <OctagonShape />,
    type: "shape",
  },
  {
    component: <OvalShape />,
    type: "shape",
  },
  {
    component: <PacManShape />,
    type: "shape",
  },
  {
    component: <YinYangShape />,
    type: "shape",
  },
  {
    component: <TritangleShape.BottomLeft />,
    type: "shape",
  },
  {
    component: <TritangleShape.BottomRight />,
    type: "shape",
  },
  {
    component: <TritangleShape.Left />,
    type: "shape",
  },
  {
    component: <TritangleShape.Right />,
    type: "shape",
  },
  {
    component: <TritangleShape.TopLeft />,
    type: "shape",
  },
  {
    component: <TritangleShape.TopRight />,
    type: "shape",
  },
  {
    component: <PentagonShape />,
    type: "shape",
  },
  {
    component: <RectangleShape />,
    type: "shape",
  },
  {
    component: <SquareShape />,
    type: "shape",
  },
  {
    component: <Star.FivePoints />,
    type: "shape",
  },
  {
    component: <Star.SixPoints />,
    type: "shape",
  },
  {
    component: <TrapezoidShape />,
    type: "shape",
  },
  {
    component: <ShadowButton children="Hover me" />,
    type: "button",
  },
  {
    component: <DotWave />,
    type: "loader",
  },
  {
    component: <CardShadowHover />,
    type: "card",
  },
  {
    component: <ThreeDotAround />,
    type: "loader",
  },
  {
    component: <KeyboardButton />,
    type: "button",
  },
  {
    component: <Hamster />,
    type: "animal",
  },
  {
    component: <Card3DHoverEffect />,
    type: "card",
  },
  {
    component: (
      <Card3DHoverEffect
        backgroungImg="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg"
        visibleImg="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp"
        textImg="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png"
      />
    ),

    type: "card",
  },
  {
    component: <ExpandButton />,
    type: "button",
  },
  {
    component: <Cube />,
    type: "loader",
  },
  {
    component: <FlipCard />,
    type: "card",
  },
  {
    component: <ExpandUp3DButton />,
    type: "button",
  },
  {
    component: <LineUpButton />,
    type: "button",
  },
  {
    component: <NewtonsCardleDot />,
    type: "loader",
  },
  {
    component: <BouncingCircle />,
    type: "loader",
  },
  {
    component: <Rain />,
    type: "loader",
  },
  {
    component: <BoxHoverButton />,
    type: "button",
  },
  {
    component: <BoxRotate />,
    type: "loader",
  },
  {
    component: <Glitch />,
    type: "text",
  },
  {
    component: <Hover3DButton />,
    type: "button",
  },
  {
    component: <Navarog21 />,
    type: "loader",
  },
];

const Context = createContext<{ elements: UIItem[] }>({ elements: [] });

type Props = PropsWithChildren;

export default function ElementsContext({ children }: Props) {
  const elements = sortShapeElements(List);
  return <Context.Provider value={{ elements }}>{children}</Context.Provider>;
}

export function useElements() {
  const value = useContext(Context);
  if (value.elements.length === 0) {
    throw new Error("useElements must be use under Elements Provider");
  }
  return value;
}
